import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type MouseEvent,
  type PointerEvent,
  type RefObject,
  type WheelEvent,
} from 'react'
import { portfolio } from '../../data/portfolio'
import type { Project } from '../../types/portfolio'

type ProjectCardProps = {
  project: Project
  index: number
  onOpen: (
    project: Project,
    index: number,
    trigger: HTMLButtonElement,
  ) => void
}

type ProjectDialogProps = {
  project: Project
  index: number
  dialogRef: RefObject<HTMLDialogElement | null>
  closeButtonRef: RefObject<HTMLButtonElement | null>
  onClose: () => void
}

function getProjectMark(title: string) {
  return (
    title.match(/[A-Z]/g)?.slice(0, 2).join('') ??
    title.slice(0, 2).toUpperCase()
  )
}

function ProjectVisual({
  project,
  index,
}: {
  project: Project
  index: number
}) {
  const projectNumber = String(index + 1).padStart(2, '0')

  return (
    <div className="project-visual project-visual--dialog">
      {project.image ? (
        <img src={project.image.src} alt={project.image.alt} />
      ) : (
        <div
          className="project-visual__placeholder"
          role="img"
          aria-label={`${project.title} project visual; no verified screenshot is available`}
        >
          <span className="project-visual__grid" aria-hidden="true" />
          <span className="project-visual__monogram" aria-hidden="true">
            {getProjectMark(project.title)}
          </span>
          <span className="project-visual__label" aria-hidden="true">
            Project {projectNumber}
          </span>
        </div>
      )}
    </div>
  )
}

function ProjectActions({ project }: { project: Project }) {
  if (!project.repository && !project.liveDemo) {
    return null
  }

  return (
    <div className="project-actions">
      {project.liveDemo && (
        <a
          className="button button--primary"
          href={project.liveDemo.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {project.liveDemo.label}
        </a>
      )}
      {project.repository && (
        <a
          className="button button--secondary"
          href={project.repository.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {project.repository.label}
        </a>
      )}
    </div>
  )
}

function ProjectCard({ project, index, onOpen }: ProjectCardProps) {
  const openProject = (trigger: HTMLButtonElement) => {
    onOpen(project, index, trigger)
  }

  return (
    <li
      className={`project-card${project.featured ? ' project-card--featured' : ''}`}
    >
      <button
        className="project-card__button"
        type="button"
        aria-haspopup="dialog"
        aria-label={`Open ${project.title} project details`}
        onClick={(event) => openProject(event.currentTarget)}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault()
            openProject(event.currentTarget)
          }
        }}
      >
        <span className="project-card__grid" aria-hidden="true" />
        <span className="project-card__title">{project.title}</span>
      </button>
    </li>
  )
}

function ProjectDialog({
  project,
  index,
  dialogRef,
  closeButtonRef,
  onClose,
}: ProjectDialogProps) {
  const projectNumber = String(index + 1).padStart(2, '0')

  const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) {
      onClose()
    }
  }

  return (
    <dialog
      className="project-dialog"
      ref={dialogRef}
      aria-modal="true"
      aria-labelledby="project-dialog-title"
      aria-describedby="project-dialog-description"
      onCancel={(event) => {
        event.preventDefault()
        onClose()
      }}
      onClick={handleBackdropClick}
    >
      <article className="project-dialog__panel">
        <header className="project-dialog__header">
          <div className="project-dialog__meta">
            <span>{project.featured ? 'Featured project' : 'Project'}</span>
            <span aria-hidden="true">{projectNumber}</span>
          </div>
          <button
            className="project-dialog__close"
            ref={closeButtonRef}
            type="button"
            aria-label={`Close ${project.title} details`}
            onClick={onClose}
          >
            <span aria-hidden="true">×</span>
          </button>
        </header>

        <div className="project-dialog__layout">
          <ProjectVisual project={project} index={index} />

          <div className="project-dialog__content">
            <h3 id="project-dialog-title">{project.title}</h3>
            <p className="project-dialog__summary">{project.summary}</p>
            <p
              className="project-dialog__description"
              id="project-dialog-description"
            >
              {project.description}
            </p>

            {project.status && (
              <p className="project-dialog__status">
                <span>Status</span>
                {project.status}
              </p>
            )}

            {project.technologies.length > 0 && (
              <div className="project-dialog__group">
                <h4>Technologies</h4>
                <ul className="project-dialog__technologies">
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.features.length > 0 && (
              <div className="project-dialog__group">
                <h4>Key features</h4>
                <ul className="project-dialog__features">
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            <ProjectActions project={project} />
          </div>
        </div>
      </article>
    </dialog>
  )
}

export function ProjectsSection() {
  const { projects } = portfolio
  const trackRef = useRef<HTMLUListElement>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null)
  const dragRef = useRef({
    pointerId: -1,
    startX: 0,
    startScrollLeft: 0,
  })
  const [selectedProject, setSelectedProject] = useState<{
    project: Project
    index: number
  } | null>(null)
  const [canScrollPrevious, setCanScrollPrevious] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)
  const [hasScrollableContent, setHasScrollableContent] = useState<
    boolean | null
  >(null)
  const [isDragging, setIsDragging] = useState(false)

  const updateScrollControls = useCallback(() => {
    const track = trackRef.current

    if (!track) {
      return
    }

    const maximumScroll = track.scrollWidth - track.clientWidth
    setHasScrollableContent(maximumScroll > 2)
    setCanScrollPrevious(track.scrollLeft > 2)
    setCanScrollNext(track.scrollLeft < maximumScroll - 2)
  }, [])

  useEffect(() => {
    const track = trackRef.current

    if (!track) {
      return
    }

    updateScrollControls()
    const resizeObserver = new ResizeObserver(updateScrollControls)
    resizeObserver.observe(track)

    return () => resizeObserver.disconnect()
  }, [updateScrollControls])

  useEffect(() => {
    if (!selectedProject) {
      return
    }

    const dialog = dialogRef.current

    if (!dialog) {
      return
    }

    const previousOverflow = document.body.style.overflow
    const previousPaddingRight = document.body.style.paddingRight
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth

    document.body.style.overflow = 'hidden'

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`
    }

    if (!dialog.open) {
      dialog.showModal()
    }

    const handleEscapeKey = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setSelectedProject(null)
      }
    }
    document.addEventListener('keydown', handleEscapeKey)

    const focusFrame = window.requestAnimationFrame(() => {
      closeButtonRef.current?.focus()
    })

    return () => {
      window.cancelAnimationFrame(focusFrame)
      document.removeEventListener('keydown', handleEscapeKey)

      if (dialog.open) {
        dialog.close()
      }

      document.body.style.overflow = previousOverflow
      document.body.style.paddingRight = previousPaddingRight
      lastTriggerRef.current?.focus()
    }
  }, [selectedProject])

  const prefersReducedMotion = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const scrollByCard = (direction: -1 | 1) => {
    const track = trackRef.current
    const firstCard = track?.querySelector<HTMLElement>('.project-card')

    if (!track || !firstCard) {
      return
    }

    const gap = Number.parseFloat(window.getComputedStyle(track).columnGap) || 0
    track.scrollBy({
      left: direction * (firstCard.getBoundingClientRect().width + gap),
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    })
  }

  const handleTrackKeyDown = (event: KeyboardEvent<HTMLUListElement>) => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault()
      scrollByCard(event.key === 'ArrowLeft' ? -1 : 1)
    }
  }

  const handleTrackWheel = (event: WheelEvent<HTMLUListElement>) => {
    const track = trackRef.current

    if (
      !track ||
      Math.abs(event.deltaX) >= Math.abs(event.deltaY) ||
      event.deltaY === 0
    ) {
      return
    }

    const maximumScroll = track.scrollWidth - track.clientWidth
    const canMove =
      (event.deltaY < 0 && track.scrollLeft > 0) ||
      (event.deltaY > 0 && track.scrollLeft < maximumScroll)

    if (canMove) {
      event.preventDefault()
      track.scrollLeft += event.deltaY
    }
  }

  const handlePointerDown = (event: PointerEvent<HTMLUListElement>) => {
    if (
      event.pointerType !== 'mouse' ||
      event.button !== 0 ||
      event.target !== event.currentTarget
    ) {
      return
    }

    const track = trackRef.current

    if (!track) {
      return
    }

    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startScrollLeft: track.scrollLeft,
    }
    track.setPointerCapture(event.pointerId)
    setIsDragging(true)
  }

  const handlePointerMove = (event: PointerEvent<HTMLUListElement>) => {
    const track = trackRef.current
    const drag = dragRef.current

    if (!track || drag.pointerId !== event.pointerId) {
      return
    }

    const distance = event.clientX - drag.startX

    track.scrollLeft = drag.startScrollLeft - distance
  }

  const finishPointerDrag = (event: PointerEvent<HTMLUListElement>) => {
    const track = trackRef.current
    const drag = dragRef.current

    if (!track || drag.pointerId !== event.pointerId) {
      return
    }

    if (track.hasPointerCapture(event.pointerId)) {
      track.releasePointerCapture(event.pointerId)
    }

    drag.pointerId = -1
    setIsDragging(false)
  }

  const openProject = (
    project: Project,
    index: number,
    trigger: HTMLButtonElement,
  ) => {
    lastTriggerRef.current = trigger
    setSelectedProject({ project, index })
  }

  return (
    <section
      className="section projects-section"
      id="projects"
      aria-labelledby="projects-title"
    >
      <div className="container">
        <header className="section-header section-header--split">
          <div>
            <p className="section-label">{projects.label}</p>
            <h2 className="section-title" id="projects-title">
              {projects.heading}
            </h2>
          </div>
          <p className="section-introduction">{projects.introduction}</p>
        </header>

        <div
          className="projects-carousel"
          role="region"
          aria-roledescription="carousel"
          aria-label="Featured projects"
          aria-describedby="projects-carousel-instructions"
        >
          <div className="projects-carousel__toolbar">
            <p
              className="projects-carousel__instructions"
              id="projects-carousel-instructions"
            >
              Select a project to view its details. Swipe or scroll to browse.
            </p>
            {hasScrollableContent && (
              <div className="projects-carousel__controls">
                <button
                  type="button"
                  aria-label="Show previous project"
                  disabled={!canScrollPrevious}
                  onClick={() => scrollByCard(-1)}
                >
                  <span aria-hidden="true">←</span>
                </button>
                <button
                  type="button"
                  aria-label="Show next project"
                  disabled={!canScrollNext}
                  onClick={() => scrollByCard(1)}
                >
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            )}
          </div>

          <ul
            className={`projects-carousel__track${hasScrollableContent === false ? ' is-centered' : ''}${isDragging ? ' is-dragging' : ''}`}
            ref={trackRef}
            tabIndex={0}
            aria-label="Project cards"
            onScroll={updateScrollControls}
            onKeyDown={handleTrackKeyDown}
            onWheel={handleTrackWheel}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={finishPointerDrag}
            onPointerCancel={finishPointerDrag}
          >
            {projects.items.map((project, index) => (
              <ProjectCard
                project={project}
                index={index}
                key={project.title}
                onOpen={openProject}
              />
            ))}
          </ul>
        </div>
      </div>

      {selectedProject && (
        <ProjectDialog
          project={selectedProject.project}
          index={selectedProject.index}
          dialogRef={dialogRef}
          closeButtonRef={closeButtonRef}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}
