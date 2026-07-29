export type NavigationItem = {
  label: string
  href: string | null
  availability: 'available' | 'planned'
}

export type PortfolioLink = {
  label: string
  href: string
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
}
