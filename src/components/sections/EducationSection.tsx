import { portfolio } from '../../data/portfolio'
import type { EducationEntry } from '../../types/portfolio'

type EducationCardProps = {
  entry: EducationEntry
  index: number
}

function EducationCard({ entry, index }: EducationCardProps) {
  return (
    <li>
      <article className="profile-entry profile-entry--education">
        <div className="profile-entry__meta">
          <span className="profile-entry__index" aria-hidden="true">
            {String(index + 1).padStart(2, '0')}
          </span>
          <p className="profile-entry__dates">
            <time dateTime={entry.date}>{entry.dateLabel}</time>
          </p>
          {entry.location && (
            <p className="profile-entry__location">{entry.location}</p>
          )}
        </div>

        <div className="profile-entry__content">
          <h3>{entry.qualification}</h3>
          <p className="profile-entry__organization">{entry.institution}</p>
          {entry.details.length > 0 && (
            <ul
              className="profile-entry__details"
              aria-label={`${entry.qualification} details`}
            >
              {entry.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          )}
        </div>
      </article>
    </li>
  )
}

export function EducationSection() {
  const { education } = portfolio

  if (education.items.length === 0) {
    return null
  }

  return (
    <section
      className="section profile-section education-section"
      id="education"
      aria-labelledby="education-title"
    >
      <div className="container">
        <header className="section-header section-header--split">
          <div>
            <p className="section-label">{education.label}</p>
            <h2 className="section-title" id="education-title">
              {education.heading}
            </h2>
          </div>
          <p className="section-introduction">{education.introduction}</p>
        </header>

        <ol className="profile-list">
          {education.items.map((entry, index) => (
            <EducationCard
              entry={entry}
              index={index}
              key={`${entry.institution}-${entry.qualification}-${entry.date}`}
            />
          ))}
        </ol>
      </div>
    </section>
  )
}
