import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type MouseEvent,
  type PointerEvent,
  type RefObject,
} from 'react'
import { FaGithub } from 'react-icons/fa6'
import { portfolio } from '../../data/portfolio'
import type { Project } from '../../types/portfolio'

type ProjectCardProps = {
  project: Project
  index: number
  copyIndex: number
  isClone: boolean
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
          <FaGithub aria-hidden="true" />
          {project.repository.label}
        </a>
      )}
    </div>
  )
}

function ProjectCard({
  project,
  index,
  copyIndex,
  isClone,
  onOpen,
}: ProjectCardProps) {
  const openProject = (trigger: HTMLButtonElement) => {
    onOpen(project, index, trigger)
  }

  return (
    <li
      className={`project-card${project.featured ? ' project-card--featured' : ''}`}
      aria-hidden={isClone || undefined}
    >
      <button
        className="project-card__button"
        type="button"
        data-loop-copy={copyIndex}
        data-project-index={index}
        tabIndex={isClone ? -1 : undefined}
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
        <span className="project-card__eyebrow">
          {project.featured
            ? 'Featured capstone'
            : project.status ?? 'Selected project'}
        </span>
        <span className="project-card__title">{project.title}</span>
        <span className="project-card__summary">{project.summary}</span>
        <span className="project-card__footer">
          Open project
          <span aria-hidden="true">↗</span>
        </span>
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

            {project.contributions && project.contributions.length > 0 && (
              <div className="project-dialog__group">
                <h4>My contributions</h4>
                <ul className="project-dialog__features">
                  {project.contributions.map((contribution) => (
                    <li key={contribution}>{contribution}</li>
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
  const hasLoopingContent = projects.items.length > 1
  const carouselProjects = hasLoopingContent
    ? [0, 1, 2].flatMap((copyIndex) =>
        projects.items.map((project, index) => ({
          project,
          index,
          copyIndex,
          isClone: copyIndex !== 1,
        })),
      )
    : projects.items.map((project, index) => ({
        project,
        index,
        copyIndex: 0,
        isClone: false,
      }))
  const trackRef = useRef<HTMLUListElement>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null)
  const dragRef = useRef({
    pointerId: -1,
    lastX: 0,
    distance: 0,
  })
  const activePointerRef = useRef(-1)
  const suppressClickRef = useRef(false)
  const autoScrollPositionRef = useRef(0)
  const [selectedProject, setSelectedProject] = useState<{
    project: Project
    index: number
  } | null>(null)
  const [isDragging, setIsDragging] = useState(false)

  const getLoopMetrics = useCallback((track: HTMLUListElement) => {
    const cards = track.querySelectorAll<HTMLElement>('.project-card')
    const projectCount = projects.items.length

    if (projectCount <= 1 || cards.length < projectCount * 3) {
      return null
    }

    const trackLeft = track.getBoundingClientRect().left
    const start =
      cards[projectCount].getBoundingClientRect().left -
      trackLeft +
      track.scrollLeft
    const end =
      cards[projectCount * 2].getBoundingClientRect().left -
      trackLeft +
      track.scrollLeft

    return { start, end, width: end - start }
  }, [projects.items.length])

  const jumpWithoutAnimation = useCallback(
    (track: HTMLUListElement, left: number) => {
      const previousBehavior = track.style.scrollBehavior
      track.style.scrollBehavior = 'auto'
      track.scrollLeft = left
      autoScrollPositionRef.current = left
      track.style.scrollBehavior = previousBehavior
    },
    [],
  )

  const centerLoop = useCallback(() => {
    const track = trackRef.current

    if (!track) {
      return
    }

    const metrics = getLoopMetrics(track)

    if (metrics) {
      jumpWithoutAnimation(track, metrics.start)
    }
  }, [getLoopMetrics, jumpWithoutAnimation])

  const maintainLoopPosition = useCallback(() => {
    const track = trackRef.current

    if (!track) {
      return
    }

    const metrics = getLoopMetrics(track)

    if (!metrics || metrics.width <= 0) {
      return
    }

    const maximumScroll = track.scrollWidth - track.clientWidth
    const lowerBoundary = Math.max(0, metrics.start - metrics.width)
    const upperBoundary = Math.min(
      maximumScroll,
      metrics.end + metrics.width - track.clientWidth,
    )

    if (track.scrollLeft <= lowerBoundary + 1) {
      jumpWithoutAnimation(track, track.scrollLeft + metrics.width)
    } else if (track.scrollLeft >= upperBoundary - 1) {
      jumpWithoutAnimation(track, track.scrollLeft - metrics.width)
    }
  }, [getLoopMetrics, jumpWithoutAnimation])

  useLayoutEffect(() => {
    const track = trackRef.current

    if (!track) {
      return
    }

    centerLoop()
    const resizeObserver = new ResizeObserver(centerLoop)
    resizeObserver.observe(track)

    return () => resizeObserver.disconnect()
  }, [centerLoop])

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

  const scrollByCard = (direction: -1 | 1) => {
    const track = trackRef.current
    const firstCard = track?.querySelector<HTMLElement>('.project-card')

    if (!track || !firstCard) {
      return
    }

    const gap = Number.parseFloat(window.getComputedStyle(track).columnGap) || 0
    const nextPosition =
      track.scrollLeft +
      direction * (firstCard.getBoundingClientRect().width + gap)
    track.scrollLeft = nextPosition
    autoScrollPositionRef.current = track.scrollLeft
  }

  useEffect(() => {
    const track = trackRef.current

    if (!track || !hasLoopingContent || selectedProject) {
      return
    }

    let animationFrame = 0
    let previousTimestamp = performance.now()
    autoScrollPositionRef.current = track.scrollLeft

    const advanceCarousel = (timestamp: number) => {
      const elapsed = Math.min(timestamp - previousTimestamp, 64)
      previousTimestamp = timestamp

      if (
        !document.hidden &&
        activePointerRef.current === -1
      ) {
        autoScrollPositionRef.current += elapsed * 0.024
        track.scrollLeft = autoScrollPositionRef.current
      } else {
        autoScrollPositionRef.current = track.scrollLeft
      }

      animationFrame = window.requestAnimationFrame(advanceCarousel)
    }

    animationFrame = window.requestAnimationFrame(advanceCarousel)

    return () => {
      window.cancelAnimationFrame(animationFrame)
    }
  }, [hasLoopingContent, selectedProject])

  const handleTrackKeyDown = (event: KeyboardEvent<HTMLUListElement>) => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault()
      scrollByCard(event.key === 'ArrowLeft' ? -1 : 1)
    }
  }

  const handlePointerDown = (event: PointerEvent<HTMLUListElement>) => {
    if (!event.isPrimary || (event.pointerType === 'mouse' && event.button !== 0)) {
      return
    }

    if (event.pointerType !== 'mouse') {
      return
    }

    activePointerRef.current = event.pointerId

    const track = trackRef.current

    if (!track) {
      return
    }

    dragRef.current = {
      pointerId: event.pointerId,
      lastX: event.clientX,
      distance: 0,
    }
    suppressClickRef.current = false
  }

  const handlePointerMove = (event: PointerEvent<HTMLUListElement>) => {
    const track = trackRef.current
    const drag = dragRef.current

    if (!track || drag.pointerId !== event.pointerId) {
      return
    }

    const distance = event.clientX - drag.lastX
    drag.lastX = event.clientX
    drag.distance += Math.abs(distance)

    if (drag.distance > 4) {
      suppressClickRef.current = true
      setIsDragging(true)

      if (!track.hasPointerCapture(event.pointerId)) {
        track.setPointerCapture(event.pointerId)
      }
    }

    track.scrollLeft -= distance
  }

  const finishPointerDrag = useCallback((pointerId: number) => {
    const track = trackRef.current
    const drag = dragRef.current

    if (activePointerRef.current === pointerId) {
      activePointerRef.current = -1
    }

    if (!track || drag.pointerId !== pointerId) {
      return
    }

    if (track.hasPointerCapture(pointerId)) {
      track.releasePointerCapture(pointerId)
    }

    drag.pointerId = -1
    setIsDragging(false)
    window.setTimeout(() => {
      suppressClickRef.current = false
    }, 0)
  }, [])

  useEffect(() => {
    const handleWindowPointerEnd = (event: globalThis.PointerEvent) => {
      finishPointerDrag(event.pointerId)
    }

    window.addEventListener('pointerup', handleWindowPointerEnd)
    window.addEventListener('pointercancel', handleWindowPointerEnd)

    return () => {
      window.removeEventListener('pointerup', handleWindowPointerEnd)
      window.removeEventListener('pointercancel', handleWindowPointerEnd)
    }
  }, [finishPointerDrag])

  const openProject = (
    project: Project,
    index: number,
    trigger: HTMLButtonElement,
  ) => {
    if (suppressClickRef.current) {
      return
    }

    const centralTrigger = trackRef.current?.querySelector<HTMLButtonElement>(
      `.project-card__button[data-project-index="${index}"][data-loop-copy="1"]`,
    )

    lastTriggerRef.current = centralTrigger ?? trigger
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
              Projects move continuously in a seamless loop. Select a project
              to view its details, or drag, swipe, and use the arrows to browse
              manually.
            </p>
            {hasLoopingContent && (
              <div className="projects-carousel__controls">
                <button
                  type="button"
                  aria-label="Show previous project"
                  onClick={() => scrollByCard(-1)}
                >
                  <span aria-hidden="true">←</span>
                </button>
                <button
                  type="button"
                  aria-label="Show next project"
                  onClick={() => scrollByCard(1)}
                >
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            )}
          </div>

          <ul
            className={`projects-carousel__track${!hasLoopingContent ? ' is-centered' : ''}${isDragging ? ' is-dragging' : ''}`}
            ref={trackRef}
            tabIndex={0}
            aria-label="Project cards"
            onScroll={maintainLoopPosition}
            onKeyDown={handleTrackKeyDown}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={(event) => finishPointerDrag(event.pointerId)}
            onPointerCancel={(event) => finishPointerDrag(event.pointerId)}
            onLostPointerCapture={(event) =>
              finishPointerDrag(event.pointerId)
            }
          >
            {carouselProjects.map(
              ({ project, index, copyIndex, isClone }) => (
              <ProjectCard
                project={project}
                index={index}
                copyIndex={copyIndex}
                isClone={isClone}
                key={`${copyIndex}-${project.title}`}
                onOpen={openProject}
              />
              ),
            )}
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
