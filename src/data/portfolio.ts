import type { PortfolioContent } from '../types/portfolio'

const resumeLink = {
  label: 'Download Resume',
  href: '/assets/resume/genesis-clabisellas-resume.pdf',
}

const githubLink = {
  label: 'View Genesis Clabisellas on GitHub',
  href: 'https://github.com/clabisellasg',
}

const emailLink = {
  label: 'Email Genesis Clabisellas',
  href: 'mailto:clabisellasg@gmail.com',
}

const facebookLink = {
  label: 'View Genesis Clabisellas on Facebook',
  href: 'https://www.facebook.com/GenesisMeOfficial/',
}

const phonePhilippinesLink = {
  label: 'Call Genesis Clabisellas at +63 943 500 9727',
  href: 'tel:+639435009727',
}

const phoneSingaporeLink = {
  label: 'Call Genesis Clabisellas at +65 8401 1431',
  href: 'tel:+6584011431',
}

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
    { label: 'Experience', href: '#experience', availability: 'available' },
    { label: 'Education', href: '#education', availability: 'available' },
    { label: 'Resume', href: '#resume', availability: 'available' },
    { label: 'Contact', href: '#contact', availability: 'available' },
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
    resume: resumeLink,
    github: githubLink,
    linkedIn: null,
    facebook: facebookLink,
    email: emailLink,
    phonePhilippines: phonePhilippinesLink,
    phoneSingapore: phoneSingaporeLink,
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
  experience: {
    label: '04 / Experience',
    heading: 'Turning data into practical business insight',
    introduction:
      'Professional experience applying data analysis, reporting, and collaboration to real business information.',
    items: [
      {
        role: 'Data Analyst (Intern)',
        employer: 'Veritacore Philippines Inc.',
        location: 'Cebu, Philippines',
        startDate: '2026-01',
        startLabel: 'January 2026',
        endDate: '2026-04',
        endLabel: 'April 2026',
        responsibilities: [
          'Built interactive Metabase dashboards for monthly company data and key business metrics.',
          'Queried and analyzed data with MySQL to identify business trends, patterns, and performance insights.',
          'Collaborated with team members to translate raw data into actionable insights about performance and operational opportunities.',
        ],
      },
    ],
  },
  education: {
    label: '05 / Education',
    heading: 'An information technology foundation',
    introduction:
      'Formal study supporting continued growth across software development and data analysis.',
    items: [
      {
        qualification: 'Bachelor of Science in Information Technology',
        institution: 'Cebu Institute of Technology - University',
        location: null,
        date: '2026-05',
        dateLabel: 'Expected May 2026',
        details: [],
      },
    ],
  },
  resume: {
    label: '06 / Resume',
    heading: 'Review the complete resume',
    introduction:
      'Download the verified resume for a concise overview of experience, education, projects, skills, and certifications.',
    download: resumeLink,
    downloadFilename: 'genesis-clabisellas-resume.pdf',
  },
  contact: {
    label: '07 / Contact',
    heading: 'Let us start a conversation',
    introduction:
      'For junior software-development opportunities or relevant professional conversations, reach out by email or phone, or connect through GitHub and Facebook.',
    methods: [
      {
        title: 'Email',
        value: 'clabisellasg@gmail.com',
        description: 'Send a direct message',
        link: emailLink,
        external: false,
      },
      {
        title: 'GitHub',
        value: 'github.com/clabisellasg',
        description: 'Explore the public profile',
        link: githubLink,
        external: true,
      },
      {
        title: 'Facebook',
        value: 'facebook.com/GenesisMeOfficial',
        description: 'Connect on Facebook',
        link: facebookLink,
        external: true,
      },
      {
        title: 'Phone - Philippines',
        value: '+63 943 500 9727',
        description: 'Call the Philippines number',
        link: phonePhilippinesLink,
        external: false,
      },
      {
        title: 'Phone - Singapore',
        value: '+65 8401 1431',
        description: 'Call the Singapore number',
        link: phoneSingaporeLink,
        external: false,
      },
    ],
  },
  footer: {
    note: 'Junior software development and data analytics.',
    backToTopLabel: 'Back to top',
  },
}
