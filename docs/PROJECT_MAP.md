# Project Map

This map describes the application after Milestone 3. Files for later website sections do not exist yet.

## Current structure

```text
Personal-Website/
├── docs/
│   ├── CUSTOMIZATION_GUIDE.md
│   ├── PROJECT_CONTEXT.md
│   ├── PROJECT_MAP.md
│   └── guides/
│       ├── MILESTONE_0_GUIDE.md
│       ├── MILESTONE_1_GUIDE.md
│       ├── MILESTONE_2_GUIDE.md
│       └── MILESTONE_3_GUIDE.md
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   └── SiteHeader.tsx
│   │   └── sections/
│   │       ├── AboutSection.tsx
│   │       ├── HeroSection.tsx
│   │       ├── ProjectsSection.tsx
│   │       └── SkillsSection.tsx
│   ├── data/
│   │   └── portfolio.ts
│   ├── styles/
│   │   └── global.css
│   ├── types/
│   │   └── portfolio.ts
│   ├── App.tsx
│   └── main.tsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

`node_modules/` and `dist/` are generated locally and ignored by Git. There is no `public/` folder because no verified resume, photograph, or project image is available.

## Current files

| Path | Purpose |
| --- | --- |
| `index.html` | Supplies page metadata and the root element where React mounts. |
| `src/main.tsx` | Loads `global.css` and renders `App` into the root element. |
| `src/App.tsx` | Defines the current page order: skip link, header, hero, About, Skills, and Projects. |
| `src/components/layout/SiteHeader.tsx` | Renders the logo, desktop navigation, accessible mobile menu, planned-item labels, active-section indicator, Escape handling, and menu-close behavior. |
| `src/components/sections/HeroSection.tsx` | Renders the verified title, introduction, call-to-action, decorative layer, and developer snapshot. |
| `src/components/sections/AboutSection.tsx` | Renders the About heading, biography paragraphs, and accessible highlight list from `portfolio.about`. |
| `src/components/sections/SkillsSection.tsx` | Renders the Skills heading and accessible nested category and skill lists from `portfolio.skills`. |
| `src/components/sections/ProjectsSection.tsx` | Defines `ProjectsSection`, reusable cards and visuals, carousel controls and input handling, and the accessible project dialog generated from `portfolio.projects`. |
| `src/data/portfolio.ts` | Central editable content for identity, navigation, hero, About, Skills, Projects, actions, link placeholders, and snapshot facts. |
| `src/types/portfolio.ts` | TypeScript shapes for navigation, links, About highlights, skill groups, projects, images, and complete portfolio content. |
| `src/styles/global.css` | Reset, design tokens, global layout, horizontal carousel and project dialog styles, breakpoints, focus states, animations, and reduced-motion behavior. |
| `package.json` | Dependency list and the `dev`, `lint`, `typecheck`, `build`, and `preview` commands. |
| `package-lock.json` | Exact installed npm dependency tree. |
| `vite.config.ts` | Vite configuration with the React plugin. |
| `eslint.config.js` | TypeScript, React Hooks, and React Refresh lint rules. |
| `tsconfig*.json` | Strict TypeScript configuration for application and Vite files. |
| `docs/guides/MILESTONE_1_GUIDE.md` | Detailed implementation and customization guide for the approved navigation and hero. |
| `docs/guides/MILESTONE_2_GUIDE.md` | Detailed implementation and customization guide for the approved About and Skills sections. |
| `docs/guides/MILESTONE_3_GUIDE.md` | Detailed Projects implementation, customization, testing, troubleshooting, exercises, and glossary. |

## Application relationships

```text
index.html
└── src/main.tsx
    ├── src/styles/global.css
    └── src/App.tsx
        ├── src/components/layout/SiteHeader.tsx
        ├── src/components/sections/HeroSection.tsx
        ├── src/components/sections/AboutSection.tsx
        ├── src/components/sections/SkillsSection.tsx
        └── src/components/sections/ProjectsSection.tsx
            ├── local ProjectCard and ProjectVisual components
            ├── native carousel interactions
            └── local ProjectDialog and ProjectActions components

src/types/portfolio.ts
└── describes content stored in src/data/portfolio.ts

src/data/portfolio.ts
├── supplies navigation content to SiteHeader.tsx
├── supplies hero content to HeroSection.tsx
├── supplies portfolio.about to AboutSection.tsx
├── supplies portfolio.skills to SkillsSection.tsx
└── supplies portfolio.projects to ProjectsSection.tsx

public/assets/projects/
└── reserved for future verified project screenshots referenced by project.image.src
```

The `public/assets/projects/` relationship is documented for future screenshots; the folder is not created while no verified image exists.

## Current rendered page order

1. Skip link, shown only when focused
2. Responsive primary navigation
3. Hero introduction and developer snapshot
4. About Me
5. Technical Skills
6. Featured Projects

Experience, Education, Resume, Contact, and Footer are not rendered in Milestone 3.

## Current content limitations

- No resume is available. Technical Skills therefore lists only Data analysis, which is supported by the verified data-analytics background.
- The Projects section displays ApplyWiseAI, the collaborative Pawfect Match project, and Student Performance Predictor using high-level information verified from their public repository documentation.
- ApplyWiseAI remains the primary featured project. All three entries use the same compact responsive carousel-card size, display only their project names, and stay in one row.
- Project status, repository URL, live-demo URL, screenshot, and outcome fields remain `null` for every displayed project.
- Detailed ownership and individual-contribution claims are not displayed for collaborative work.

The Projects data model, reusable card, and reusable dialog support those details later without rendering fake content now.

## Planned growth

Milestone 4 is proposed to add the Experience section after Genesis tests and approves Milestone 3. Authoritative role, organization, date, and responsibility information is required before implementation. Later milestones may add Education, Resume, Contact, Footer, verified public assets, and other separately approved work.
