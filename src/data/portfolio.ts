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
    { label: 'About', href: '#about', availability: 'available' },
    { label: 'Skills', href: '#skills', availability: 'available' },
    { label: 'Projects', href: '#projects', availability: 'available' },
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
  about: {
    label: '01 / About me',
    heading: 'A practical developer with an analytical foundation',
    paragraphs: [
      'I am pursuing junior software-development opportunities after building a foundation in data analysis. I am focused on practical software: applications shaped around a clear problem and an understandable user need.',
      'ApplyWiseAI, an AI-powered job-application assistant, is the current example of that direction. Developing it is helping me grow my software-development practice while exploring how AI can support a practical workflow.',
    ],
    highlights: [
      {
        title: 'Practical software',
        description:
          'Focused on applications built around clear, useful problems.',
      },
      {
        title: 'Analytical thinking',
        description:
          'Brings a data-analysis background to software decisions.',
      },
      {
        title: 'Learning by building',
        description:
          'Developing AI-powered application experience through ApplyWiseAI.',
      },
    ],
  },
  skills: {
    label: '02 / Technical skills',
    heading: 'A focused technical foundation',
    introduction:
      'My data-analysis background provides an analytical foundation for practical software and AI-powered application work.',
    groups: [
      {
        title: 'Data and analytics',
        skills: ['Data analysis'],
      },
      // Add further categories only after the missing resume or another
      // authoritative source verifies the individual skills.
    ],
  },
  projects: {
    label: '03 / Featured projects',
    heading: 'Software built around practical problems',
    introduction:
      'A focused selection of full-stack and machine-learning projects shaped around practical user needs.',
    items: [
      {
        title: 'ApplyWiseAI',
        summary:
          'An AI-powered assistant for organizing and strengthening the job-application workflow.',
        description:
          'A full-stack application for saving jobs and resumes, comparing them, tracking applications, and drafting resume-grounded application materials.',
        technologies: [
          'React',
          'TypeScript',
          'Java',
          'Spring Boot',
          'PostgreSQL',
        ],
        features: [
          'Job and resume management',
          'Job-to-resume analysis',
          'Application tracking and tailored materials',
        ],
        status: null,
        repository: null,
        liveDemo: null,
        image: null,
        featured: true,
      },
      {
        title: 'Pawfect Match',
        summary:
          'A collaborative platform that helps pet owners find suitable matches for dogs and cats.',
        description:
          'A full-stack matchmaking project centered on pet profiles, search, communication, and appointment coordination.',
        technologies: [
          'React',
          'Java',
          'Spring Boot',
          'MongoDB',
          'Firebase',
        ],
        features: [
          'Pet profile management',
          'Search and matchmaking',
          'Messaging and scheduling',
        ],
        status: null,
        repository: null,
        liveDemo: null,
        image: null,
        featured: false,
      },
      {
        title: 'Student Performance Predictor',
        summary:
          'A machine-learning project for predicting student academic performance from multiple data factors.',
        description:
          'An end-to-end analysis pipeline that prepares student data, trains classification and regression models, evaluates results, and produces visualizations.',
        technologies: [
          'Python',
          'pandas',
          'scikit-learn',
          'Matplotlib',
          'Seaborn',
        ],
        features: [
          'Student data preprocessing',
          'Grade classification and score regression',
          'Model evaluation and feature analysis',
        ],
        status: null,
        repository: null,
        liveDemo: null,
        image: null,
        featured: false,
      },
    ],
  },
}
