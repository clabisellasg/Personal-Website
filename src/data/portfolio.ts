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
  label: 'Call Genesis Clabisellas at +65 8012 3681',
  href: 'tel:+6580123681',
}

export const portfolio: PortfolioContent = {
  name: 'Genesis Clabisellas',
  shortName: 'GC',
  professionalTitle:
    'Junior Software Developer | Practical, Data-Informed Applications',
  introduction:
    'I build reliable web applications and data-driven tools, combining full-stack development with an analytical approach to real user problems.',
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
      label: 'Explore featured work',
      href: '#projects',
    },
    secondaryAction: githubLink,
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
    { label: 'Capstone project', value: 'NASAM' },
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
    heading: 'A practical full-stack and data toolkit',
    introduction:
      'Technologies demonstrated across NASAM, ApplyWiseAI, collaborative projects, machine-learning work, and my data-analyst internship.',
    groups: [
      {
        title: 'Front-end development',
        skills: [
          'React',
          'TypeScript',
          'Next.js',
          'Tailwind CSS',
          'Material UI',
        ],
      },
      {
        title: 'Back-end development',
        skills: [
          'Java',
          'Spring Boot',
          'Node.js',
          'Express.js',
          'REST APIs',
        ],
      },
      {
        title: 'Data and machine learning',
        skills: [
          'Python',
          'pandas',
          'scikit-learn',
          'Matplotlib',
          'Seaborn',
        ],
      },
      {
        title: 'Databases and analytics',
        skills: [
          'SQL',
          'MySQL',
          'PostgreSQL',
          'MongoDB',
          'Metabase',
          'Dashboard reporting',
        ],
      },
      {
        title: 'Tools and application practices',
        skills: [
          'Git and GitHub',
          'Docker',
          'Firebase',
          'JWT authentication',
          'Role-based access',
          'Team collaboration',
        ],
      },
    ],
  },
  projects: {
    label: '03 / Featured projects',
    heading: 'Software built around practical problems',
    introduction:
      'A selection of individual and collaborative builds, led by the NASAM capstone project.',
    items: [
      {
        title: 'NASAM',
        summary:
          'A capstone system that digitizes non-academic scholarship applications at CIT-U.',
        description:
          'The Non-Academic Scholar Application Management System is a five-person capstone project designed to move CIT-U scholarship applications, document handling, review, and reporting into one web-based workflow.',
        technologies: [
          'Next.js',
          'TypeScript',
          'Node.js',
          'Express',
          'MongoDB',
          'Tailwind CSS',
        ],
        features: [
          'Scholarship application and document workflow',
          'Role-based review and application management',
          'Email, PDF, CSV, and Excel reporting tools',
        ],
        status: 'Capstone project',
        repository: {
          label: 'View NASAM on GitHub',
          href: 'https://github.com/JohnRey7/NASAM',
        },
        liveDemo: null,
        image: null,
        featured: true,
      },
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
        status: 'In development',
        repository: {
          label: 'View ApplyWiseAI on GitHub',
          href: 'https://github.com/clabisellasg/ApplyWiseAI',
        },
        liveDemo: null,
        image: null,
        featured: false,
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
        repository: {
          label: 'View Pawfect Match on GitHub',
          href: 'https://github.com/jannahlovelle/pawfect-match',
        },
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
        repository: {
          label: 'View predictor on GitHub',
          href: 'https://github.com/clabisellasg/Student-Performance-Predictor',
        },
        liveDemo: null,
        image: null,
        featured: false,
      },
      {
        title: 'PlatePal Meal Planner',
        summary:
          'A collaborative full-stack platform for organizing recipes and personal meal plans.',
        description:
          'A team-built meal-planning application with authenticated user workflows, recipe management, favorites, and grouped meal plans supported by separate React and Spring Boot repositories.',
        technologies: [
          'React',
          'Material UI',
          'Java',
          'Spring Boot',
          'MySQL',
          'JWT',
        ],
        features: [
          'Recipe and favorite management',
          'Personal meal-plan organization',
          'Authenticated user and admin workflows',
        ],
        status: 'Collaborative project',
        repository: {
          label: 'View PlatePal repositories',
          href: 'https://github.com/PlatePal-MealPlanner',
        },
        liveDemo: null,
        image: null,
        featured: false,
      },
      {
        title: 'SajaBoys Notes App',
        summary:
          'A collaborative full-stack notes application for creating and organizing written notes.',
        description:
          'A React and Spring Boot application backed by PostgreSQL, with a REST API that supports creating, reading, updating, and deleting notes.',
        technologies: [
          'React',
          'Tailwind CSS',
          'Java',
          'Spring Boot',
          'PostgreSQL',
        ],
        features: [
          'Create and edit notes',
          'Browse saved note content',
          'Delete notes through a REST API',
        ],
        status: 'Collaborative project',
        repository: {
          label: 'View Notes App on GitHub',
          href: 'https://github.com/padsssss/SajaBoys-NotesApp',
        },
        liveDemo: null,
        image: null,
        featured: false,
      },
      {
        title: 'Retail Sales SQL Analysis',
        summary:
          'A SQL analysis project that turns retail transactions into reporting insights.',
        description:
          'A structured MySQL workflow for checking data quality and analyzing revenue, product performance, customer behavior, demographics, and monthly sales trends.',
        technologies: ['SQL', 'MySQL', 'MySQL Workbench'],
        features: [
          'Retail data-quality checks',
          'Revenue and product analysis',
          'Customer and monthly trend reporting',
        ],
        status: 'Data analytics project',
        repository: {
          label: 'View SQL analysis on GitHub',
          href: 'https://github.com/clabisellasg/Retails-Sales-SQL-Analysis',
        },
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
        value: '+65 8012 3681',
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
