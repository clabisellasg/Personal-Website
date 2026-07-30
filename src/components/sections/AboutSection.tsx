import { portfolio } from '../../data/portfolio'

export function AboutSection() {
  const { about } = portfolio

  return (
    <section
      className="section about-section"
      id="about"
      aria-labelledby="about-title"
    >
      <div className="container">
        <header className="section-header">
          <p className="section-label">{about.label}</p>
          <h2 className="section-title" id="about-title">
            {about.heading}
          </h2>
        </header>

        <div className="about-section__layout">
          <div className="about-section__copy">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <ul className="about-section__highlights" aria-label="About highlights">
            {about.highlights.map((highlight, index) => (
              <li className="about-highlight" key={highlight.title}>
                <span className="about-highlight__index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
