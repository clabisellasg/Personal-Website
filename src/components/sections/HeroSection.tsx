import { portfolio } from '../../data/portfolio'

export function HeroSection() {
  const { hero, snapshot } = portfolio
  const titleParts = portfolio.professionalTitle.split(' | ')

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__glow hero__glow--one" aria-hidden="true" />
      <div className="hero__glow hero__glow--two" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__content">
          <p className="eyebrow">
            <span className="eyebrow__dot" aria-hidden="true" />
            {hero.eyebrow}
          </p>
          <h1 id="hero-title">
            {titleParts.map((part, index) => (
              <span className="hero__title-line" key={part}>
                {index > 0 && (
                  <>
                    <span className="sr-only"> | </span>
                    <span className="hero__title-divider" aria-hidden="true" />
                  </>
                )}
                {part}
              </span>
            ))}
          </h1>
          <p className="hero__introduction">{portfolio.introduction}</p>

          <div className="hero__actions">
            <a className="button button--primary" href={hero.primaryAction.href}>
              {hero.primaryAction.label}
              <span aria-hidden="true">↓</span>
            </a>
            {hero.secondaryAction && (
              <a
                className="button button--secondary"
                href={hero.secondaryAction.href}
              >
                {hero.secondaryAction.label}
              </a>
            )}
          </div>
        </div>

        <aside
          className="developer-card"
          id="developer-snapshot"
          aria-labelledby="snapshot-title"
        >
          <div className="developer-card__topline">
            <span className="developer-card__signal" aria-hidden="true" />
            <span>Developer snapshot</span>
            <span className="developer-card__index" aria-hidden="true">
              01
            </span>
          </div>
          <div className="developer-card__body">
            <img
              className="developer-card__portrait"
              src="/assets/images/genesis-clabisellas-graduation.jpg"
              alt="Genesis Clabisellas in graduation attire"
            />
            <div>
              <p className="developer-card__overline">
                Graduate / software engineer
              </p>
              <h2 id="snapshot-title">{portfolio.name}</h2>
            </div>
          </div>
          <dl className="developer-card__facts">
            {snapshot.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
          <p className="developer-card__caption">
            Information Technology graduate applying software engineering to
            practical, collaborative products.
          </p>
        </aside>
      </div>
    </section>
  )
}
