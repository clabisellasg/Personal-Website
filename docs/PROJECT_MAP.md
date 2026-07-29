# Project Map

This map separates files that exist after Milestone 0 from the application structure proposed for later milestones.

## Current structure

```text
Personal-Website/
└── docs/
    ├── CUSTOMIZATION_GUIDE.md
    ├── PROJECT_CONTEXT.md
    ├── PROJECT_MAP.md
    └── guides/
        └── MILESTONE_0_GUIDE.md
```

### Current files

| Path | Purpose |
| --- | --- |
| `docs/PROJECT_CONTEXT.md` | Concise handoff containing the project's purpose, decisions, status, missing information, and exact next task. |
| `docs/PROJECT_MAP.md` | Map of the current documentation and proposed application structure. |
| `docs/CUSTOMIZATION_GUIDE.md` | Quick reference for where common portfolio edits will be made once the application exists. |
| `docs/guides/MILESTONE_0_GUIDE.md` | Beginner-friendly explanation of the Milestone 0 inspection and planning work. |

There are currently no application source files, components, stylesheets, public assets, package files, or build configuration.

## Proposed application structure

The following structure is a plan, not the current repository state. It will be created incrementally as each milestone is approved.

```text
Personal-Website/
├── public/
│   └── assets/
│       ├── images/
│       └── resume/
│           └── Genesis-Clabisellas-Resume.pdf
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── SiteHeader.tsx
│   │   │   └── SiteFooter.tsx
│   │   └── sections/
│   │       ├── HeroSection.tsx
│   │       ├── AboutSection.tsx
│   │       ├── SkillsSection.tsx
│   │       ├── ProjectsSection.tsx
│   │       ├── ExperienceSection.tsx
│   │       ├── EducationSection.tsx
│   │       ├── ResumeSection.tsx
│   │       └── ContactSection.tsx
│   ├── data/
│   │   └── portfolio.ts
│   ├── styles/
│   │   └── global.css
│   ├── types/
│   │   └── portfolio.ts
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

Only files needed by the active milestone should be added. For example, Milestone 1 needs the application entry files, global stylesheet, verified hero content, header, and hero component; it does not need empty components for later sections.

## Planned relationships

```text
index.html
└── src/main.tsx
    └── src/App.tsx
        ├── src/components/layout/SiteHeader.tsx
        ├── src/components/sections/*Section.tsx
        └── src/components/layout/SiteFooter.tsx

src/data/portfolio.ts
└── supplies verified text and links to the section components

src/types/portfolio.ts
└── describes shared content shapes used by the data file and components

src/styles/global.css
└── supplies design tokens, layout rules, component styles, focus styles,
    and responsive rules to the rendered application
```

## Planned page order

1. Responsive navigation
2. Hero
3. About Me
4. Technical Skills
5. Featured Projects
6. Work Experience
7. Education
8. Resume
9. Contact
10. Footer

ApplyWiseAI will appear first and receive the strongest emphasis in Featured Projects.

## Public assets

No public assets currently exist. Later:

- `public/assets/resume/Genesis-Clabisellas-Resume.pdf` will be the downloadable resume.
- `public/assets/images/` will contain only user-provided project screenshots or a professional portrait unless Genesis explicitly approves other imagery.

