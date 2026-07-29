# Project Map

This map describes the application after Milestone 1. Files for later website sections do not exist yet.

## Current structure

```text
Personal-Website/
├── docs/
│   ├── CUSTOMIZATION_GUIDE.md
│   ├── PROJECT_CONTEXT.md
│   ├── PROJECT_MAP.md
│   └── guides/
│       ├── MILESTONE_0_GUIDE.md
│       └── MILESTONE_1_GUIDE.md
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   └── SiteHeader.tsx
│   │   └── sections/
│   │       └── HeroSection.tsx
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
| `src/App.tsx` | Defines the current page order: skip link, header, and hero. |
| `src/components/layout/SiteHeader.tsx` | Renders the logo, desktop navigation, accessible mobile menu, planned-item labels, Escape handling, and menu-close behavior. |
| `src/components/sections/HeroSection.tsx` | Renders the verified title, introduction, call-to-action, decorative layer, and developer snapshot. |
| `src/data/portfolio.ts` | Central editable content for name, title, introduction, navigation, actions, link placeholders, and snapshot facts. |
| `src/types/portfolio.ts` | TypeScript shapes for navigation, links, and portfolio content. |
| `src/styles/global.css` | Reset, design tokens, global layout, components, breakpoints, focus styles, and reduced-motion behavior. |
| `package.json` | Dependency list and the `dev`, `lint`, `typecheck`, `build`, and `preview` commands. |
| `package-lock.json` | Exact installed npm dependency tree. |
| `vite.config.ts` | Vite configuration with the React plugin. |
| `eslint.config.js` | TypeScript, React Hooks, and React Refresh lint rules. |
| `tsconfig*.json` | Strict TypeScript configuration for application and Vite files. |
| `docs/guides/MILESTONE_1_GUIDE.md` | Detailed implementation, customization, testing, troubleshooting, exercises, and glossary for Milestone 1. |

## Application relationships

```text
index.html
└── src/main.tsx
    ├── src/styles/global.css
    └── src/App.tsx
        ├── src/components/layout/SiteHeader.tsx
        └── src/components/sections/HeroSection.tsx

src/data/portfolio.ts
├── uses types from src/types/portfolio.ts
├── supplies content to SiteHeader.tsx
└── supplies content to HeroSection.tsx
```

## Current rendered page order

1. Skip link, shown only when focused
2. Responsive primary navigation
3. Hero introduction
4. Developer snapshot within the hero

About, Skills, Projects, Experience, Education, Contact, and Footer are not rendered in Milestone 1.

## Planned growth

Later milestones may add section components under `src/components/sections/`, public assets under `public/assets/`, and the footer under `src/components/layout/`. Only add each file when its milestone is approved. ApplyWiseAI should appear first and receive the strongest emphasis when the Projects section is implemented.
