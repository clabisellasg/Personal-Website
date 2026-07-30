import { useEffect, useRef, useState } from 'react'
import type { MouseEvent } from 'react'
import { portfolio } from '../../data/portfolio'
import type { NavigationItem } from '../../types/portfolio'

type NavigationItemsProps = {
  items: NavigationItem[]
  activeHref: string
  onNavigate?: (event: MouseEvent<HTMLAnchorElement>, href: string) => void
}

const availableSectionLinks = portfolio.navigation.flatMap((item) =>
  item.availability === 'available' && item.href?.startsWith('#')
    ? [item.href]
    : [],
)

function NavigationItems({
  items,
  activeHref,
  onNavigate,
}: NavigationItemsProps) {
  return (
    <ul className="site-nav__list">
      {items.map((item) => (
        <li key={item.label}>
          {item.availability === 'available' && item.href ? (
            <a
              className="site-nav__link"
              href={item.href}
              aria-current={item.href === activeHref ? 'location' : undefined}
              onClick={
                onNavigate
                  ? (event) => onNavigate(event, item.href as string)
                  : undefined
              }
            >
              {item.label}
            </a>
          ) : (
            <span
              className="site-nav__link site-nav__link--planned"
              aria-label={`${item.label}, planned for a future milestone`}
              title="Planned for a future milestone"
            >
              {item.label}
              <span className="site-nav__status" aria-hidden="true">
                Soon
              </span>
            </span>
          )}
        </li>
      ))}
    </ul>
  )
}

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeHref, setActiveHref] = useState(
    availableSectionLinks[0] ?? '#home',
  )
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  const closeMenu = () => setIsMenuOpen(false)

  const toggleMenu = () => setIsMenuOpen((isOpen) => !isOpen)

  const handleMobileNavigate = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    event.preventDefault()
    closeMenu()
    setActiveHref(href)

    window.requestAnimationFrame(() => {
      document.querySelector<HTMLElement>(href)?.scrollIntoView({
        block: 'start',
      })

      if (window.location.hash !== href) {
        window.history.pushState(null, '', href)
      }
    })
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        closeMenu()
        menuButtonRef.current?.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 64rem)')
    const handleDesktopChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        closeMenu()
      }
    }

    desktopQuery.addEventListener('change', handleDesktopChange)
    return () => desktopQuery.removeEventListener('change', handleDesktopChange)
  }, [])

  useEffect(() => {
    let frameId: number | undefined

    const updateActiveSection = () => {
      const headerBottom =
        document.querySelector<HTMLElement>('.site-header')?.getBoundingClientRect()
          .bottom ?? 0
      const mobileNavigationBottom =
        document
          .querySelector<HTMLElement>('.site-nav__mobile')
          ?.getBoundingClientRect().bottom ?? headerBottom
      const activationLine =
        Math.max(headerBottom, mobileNavigationBottom) + 1
      let currentHref = availableSectionLinks[0] ?? '#home'

      availableSectionLinks.forEach((href) => {
        const section = document.querySelector<HTMLElement>(href)

        if (section && section.getBoundingClientRect().top <= activationLine) {
          currentHref = href
        }
      })

      const isAtPageEnd =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 2

      if (isAtPageEnd && availableSectionLinks.length > 0) {
        currentHref =
          availableSectionLinks[availableSectionLinks.length - 1] ?? currentHref
      }

      setActiveHref((previousHref) =>
        previousHref === currentHref ? previousHref : currentHref,
      )
      frameId = undefined
    }

    const scheduleActiveSectionUpdate = () => {
      if (frameId !== undefined) {
        window.cancelAnimationFrame(frameId)
      }

      frameId = window.requestAnimationFrame(updateActiveSection)
    }

    updateActiveSection()
    window.addEventListener('scroll', scheduleActiveSectionUpdate, {
      passive: true,
    })
    window.addEventListener('resize', scheduleActiveSectionUpdate)
    window.addEventListener('hashchange', scheduleActiveSectionUpdate)

    return () => {
      if (frameId !== undefined) {
        window.cancelAnimationFrame(frameId)
      }

      window.removeEventListener('scroll', scheduleActiveSectionUpdate)
      window.removeEventListener('resize', scheduleActiveSectionUpdate)
      window.removeEventListener('hashchange', scheduleActiveSectionUpdate)
    }
  }, [isMenuOpen])

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a
          className="brand"
          href="#home"
          aria-label={`${portfolio.name}, home`}
          onClick={closeMenu}
        >
          <span className="brand__mark" aria-hidden="true">
            {portfolio.shortName}
          </span>
          <span className="brand__name">{portfolio.name}</span>
        </a>

        <nav className="site-nav" aria-label="Primary navigation">
          <div className="site-nav__desktop">
            <NavigationItems
              items={portfolio.navigation}
              activeHref={activeHref}
            />
          </div>

          <button
            className="menu-button"
            type="button"
            ref={menuButtonRef}
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={toggleMenu}
          >
            <span className="menu-button__lines" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>

          {isMenuOpen && (
            <div className="site-nav__mobile" id="mobile-navigation">
              <NavigationItems
                items={portfolio.navigation}
                activeHref={activeHref}
                onNavigate={handleMobileNavigate}
              />
              <p className="site-nav__note">
                Additional sections will become available in later milestones.
              </p>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}
