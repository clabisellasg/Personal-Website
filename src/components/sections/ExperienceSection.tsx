import { portfolio } from '../../data/portfolio'
import type { ExperienceEntry } from '../../types/portfolio'

type ExperienceCardProps = {
  entry: ExperienceEntry
  index: number
}

function ExperienceCard({ entry, index }: ExperienceCardProps) {
  return (
    <li>
      <article className="profile-entry">
        <div className="profile-entry__meta">
          <span className="profile-entry__index" aria-hidden="true">
            {String(index + 1).padStart(2, '0')}
          </span>
          <p className="profile-entry__dates">
            <time dateTime={entry.startDate}>{entry.startLabel}</time>
            <span aria-hidden="true"> - </span>
            <time dateTime={entry.endDate}>{entry.endLabel}</time>
          </p>
          {entry.location && (
            <p className="profile-entry__location">{entry.location}</p>
          )}
        </div>

        <div className="profile-entry__content">
          <h3>{entry.role}</h3>
          <p className="profile-entry__organization">{entry.employer}</p>
          {entry.responsibilities.length > 0 && (
            <ul
              className="profile-entry__details"
              aria-label={`${entry.role} responsibilities`}
            >
              {entry.responsibilities.map((responsibility) => (
                <li key={responsibility}>{responsibility}</li>
              ))}
            </ul>
          )}
        </div>
      </article>
    </li>
  )
}

export function ExperienceSection() {
  const { experience } = portfolio

  if (experience.items.length === 0) {
    return null
  }

  return (
    <section
      className="section profile-section experience-section"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className="container">
        <header className="section-header section-header--split">
          <div>
            <p className="section-label">{experience.label}</p>
            <h2 className="section-title" id="experience-title">
              {experience.heading}
            </h2>
          </div>
          <p className="section-introduction">{experience.introduction}</p>
        </header>

        <ol className="profile-list">
          {experience.items.map((entry, index) => (
            <ExperienceCard
              entry={entry}
              index={index}
              key={`${entry.employer}-${entry.role}-${entry.startDate}`}
            />
          ))}
        </ol>
      </div>
    </section>
  )
}
