# Project Map

This map describes the application after Milestone 2. Files for later website sections do not exist yet.

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
│       └── MILESTONE_2_GUIDE.md
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   └── SiteHeader.tsx
│   │   └── sections/
│   │       ├── AboutSection.tsx
│   │       ├── HeroSection.tsx
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
| `src/App.tsx` | Defines the current page order: skip link, header, hero, About, and Skills. |
| `src/components/layout/SiteHeader.tsx` | Renders the logo, desktop navigation, accessible mobile menu, planned-item labels, Escape handling, and menu-close behavior. |
| `src/components/sections/HeroSection.tsx` | Renders the verified title, introduction, call-to-action, decorative layer, and developer snapshot. |
| `src/components/sections/AboutSection.tsx` | Renders the About heading, biography paragraphs, and accessible highlight list from `portfolio.about`. |
| `src/components/sections/SkillsSection.tsx` | Renders the Skills heading and accessible nested category and skill lists from `portfolio.skills`. |
| `src/data/portfolio.ts` | Central editable content for identity, navigation, hero, About, Skills, actions, link placeholders, and snapshot facts. |
| `src/types/portfolio.ts` | TypeScript shapes for navigation, links, About highlights, skill groups, and complete portfolio content. |
| `src/styles/global.css` | Reset, design tokens, global layout, section components, breakpoints, focus styles, and reduced-motion behavior. |
| `package.json` | Dependency list and the `dev`, `lint`, `typecheck`, `build`, and `preview` commands. |
| `package-lock.json` | Exact installed npm dependency tree. |
| `vite.config.ts` | Vite configuration with the React plugin. |
| `eslint.config.js` | TypeScript, React Hooks, and React Refresh lint rules. |
| `tsconfig*.json` | Strict TypeScript configuration for application and Vite files. |
| `docs/guides/MILESTONE_1_GUIDE.md` | Detailed implementation and customization guide for the approved navigation and hero. |
| `docs/guides/MILESTONE_2_GUIDE.md` | Detailed implementation, customization, testing, troubleshooting, exercises, and glossary for About and Skills. |

## Application relationships

```text
index.html
└── src/main.tsx
    ├── src/styles/global.css
    └── src/App.tsx
        ├── src/components/layout/SiteHeader.tsx
        ├── src/components/sections/HeroSection.tsx
        ├── src/components/sections/AboutSection.tsx
        └── src/components/sections/SkillsSection.tsx

src/types/portfolio.ts
└── describes content stored in src/data/portfolio.ts

src/data/portfolio.ts
├── supplies navigation content to SiteHeader.tsx
├── supplies hero content to HeroSection.tsx
├── supplies portfolio.about to AboutSection.tsx
└── supplies portfolio.skills to SkillsSection.tsx
```

## Current rendered page order

1. Skip link, shown only when focused
2. Responsive primary navigation
3. Hero introduction and developer snapshot
4. About Me
5. Technical Skills

Projects, Experience, Education, Resume, Contact, and Footer are not rendered in Milestone 2.

## Current content limitation

No resume was available with the Milestone 2 request. The Technical Skills section therefore lists only Data analysis, which is supported by the verified data-analytics background. Additional categories should be added only when an authoritative source supplies the individual skills.

## Planned growth

Milestone 3 is proposed to add the Projects section, with ApplyWiseAI first and visually prominent. Its stack, status, links, screenshots, and outcomes must be verified before implementation. Later milestones may add the remaining section components, public assets under `public/assets/`, and the footer under `src/components/layout/`.
