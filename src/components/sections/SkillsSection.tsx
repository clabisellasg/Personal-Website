import { portfolio } from '../../data/portfolio'
import type { SkillGroup as SkillGroupData } from '../../types/portfolio'

type SkillGroupProps = {
  group: SkillGroupData
  index: number
}

function SkillGroup({ group, index }: SkillGroupProps) {
  return (
    <li className="skill-group">
      <div className="skill-group__heading">
        <span className="skill-group__index" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h3>{group.title}</h3>
      </div>
      <ul className="skill-group__list">
        {group.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </li>
  )
}

export function SkillsSection() {
  const { skills } = portfolio

  return (
    <section
      className="section skills-section"
      id="skills"
      aria-labelledby="skills-title"
    >
      <div className="container">
        <header className="section-header section-header--split">
          <div>
            <p className="section-label">{skills.label}</p>
            <h2 className="section-title" id="skills-title">
              {skills.heading}
            </h2>
          </div>
          <p className="section-introduction">{skills.introduction}</p>
        </header>

        <ul className="skills-section__grid">
          {skills.groups.map((group, index) => (
            <SkillGroup group={group} index={index} key={group.title} />
          ))}
        </ul>
      </div>
    </section>
  )
}
