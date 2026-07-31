import { portfolio } from '../../data/portfolio'

export function ResumeSection() {
  const { resume } = portfolio

  if (!resume.download) {
    return null
  }

  return (
    <section
      className="section resume-section"
      id="resume"
      aria-labelledby="resume-title"
    >
      <div className="container">
        <div className="resume-panel">
          <div>
            <p className="section-label">{resume.label}</p>
            <h2 className="resume-panel__title" id="resume-title">
              {resume.heading}
            </h2>
            <p className="resume-panel__introduction">{resume.introduction}</p>
          </div>

          <a
            className="button button--primary resume-panel__action"
            href={resume.download.href}
            download={resume.downloadFilename}
            aria-label={`${resume.download.label} as a PDF`}
          >
            {resume.download.label}
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  )
}
