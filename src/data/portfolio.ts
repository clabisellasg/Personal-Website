import type { PortfolioContent } from '../types/portfolio'

export const portfolio: PortfolioContent = {
  name: 'Genesis Clabisellas',
  shortName: 'GC',
  professionalTitle:
    'Junior Software Developer | Building Practical Software and AI-Powered Applications',
  introduction:
    'I am working toward junior software-development opportunities, bringing a data-analytics background to practical software and AI-powered applications.',
  navigation: [
    { label: 'Home', href: '#home', availability: 'available' },
    { label: 'About', href: null, availability: 'planned' },
    { label: 'Skills', href: null, availability: 'planned' },
    { label: 'Projects', href: null, availability: 'planned' },
    { label: 'Experience', href: null, availability: 'planned' },
    { label: 'Education', href: null, availability: 'planned' },
    { label: 'Contact', href: null, availability: 'planned' },
  ],
  hero: {
    eyebrow: 'Software development · Data analytics',
    primaryAction: {
      label: 'View developer snapshot',
      href: '#developer-snapshot',
    },
    secondaryAction: null,
  },
  links: {
    // Add verified URLs here when the matching profile or file is available.
    resume: null,
    github: null,
    linkedIn: null,
    email: null,
  },
  snapshot: [
    { label: 'Current focus', value: 'Junior software development' },
    { label: 'Background', value: 'Data analytics' },
    { label: 'Featured build', value: 'ApplyWiseAI' },
  ],
}
