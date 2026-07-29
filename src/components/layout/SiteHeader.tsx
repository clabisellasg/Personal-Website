import { useEffect, useRef, useState } from 'react'
import { portfolio } from '../../data/portfolio'
import type { NavigationItem } from '../../types/portfolio'

type NavigationItemsProps = {
  items: NavigationItem[]
  onNavigate?: () => void
}

function NavigationItems({ items, onNavigate }: NavigationItemsProps) {
  return (
    <ul className="site-nav__list">
      {items.map((item) => (
        <li key={item.label}>
          {item.availability === 'available' && item.href ? (
            <a
              className="site-nav__link"
              href={item.href}
              aria-current={item.href === '#home' ? 'page' : undefined}
              onClick={onNavigate}
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
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  const closeMenu = () => setIsMenuOpen(false)

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
            <NavigationItems items={portfolio.navigation} />
          </div>

          <button
            className="menu-button"
            type="button"
            ref={menuButtonRef}
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
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
                onNavigate={closeMenu}
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
