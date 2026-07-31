export type NavigationItem = {
  label: string
  href: string | null
  availability: 'available' | 'planned'
}

export type PortfolioLink = {
  label: string
  href: string
}

export type AboutHighlight = {
  title: string
  description: string
}

export type SkillGroup = {
  title: string
  skills: string[]
}

export type ProjectImage = {
  src: string
  alt: string
}

export type Project = {
  title: string
  summary: string
  description: string
  technologies: string[]
  features: string[]
  status: string | null
  repository: PortfolioLink | null
  liveDemo: PortfolioLink | null
  image: ProjectImage | null
  featured: boolean
}

export type PortfolioContent = {
  name: string
  shortName: string
  professionalTitle: string
  introduction: string
  navigation: NavigationItem[]
  hero: {
    eyebrow: string
    primaryAction: PortfolioLink
    secondaryAction: PortfolioLink | null
  }
  links: {
    resume: PortfolioLink | null
    github: PortfolioLink | null
    linkedIn: PortfolioLink | null
    email: PortfolioLink | null
  }
  snapshot: Array<{
    label: string
    value: string
  }>
  about: {
    label: string
    heading: string
    paragraphs: string[]
    highlights: AboutHighlight[]
  }
  skills: {
    label: string
    heading: string
    introduction: string
    groups: SkillGroup[]
  }
  projects: {
    label: string
    heading: string
    introduction: string
    items: Project[]
  }
}
