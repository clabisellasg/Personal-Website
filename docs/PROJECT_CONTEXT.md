# Project Context

## Project purpose

Build a frontend-only, responsive, single-page portfolio for Genesis Clabisellas. The site targets junior software-development opportunities while presenting Genesis's data-analytics background and ApplyWiseAI as the primary featured project.

Current introductory title:

> Junior Software Developer | Building Practical Software and AI-Powered Applications

## Technology stack

The application now uses:

- React 19
- TypeScript
- Vite 6
- Plain CSS
- ESLint
- Static local content with no backend, database, authentication, or server-dependent contact form

The project uses npm and records the installed dependency tree in `package-lock.json`.

## Repository state

- Milestones 0 and 1 are committed.
- The current branch is `milestone-2`.
- Milestone 2 application and documentation changes are currently uncommitted.
- `origin` points to `https://github.com/clabisellasg/Personal-Website.git`.
- No deployment has been created.

## Implemented architecture

- `src/main.tsx` mounts React and loads the global stylesheet.
- `src/App.tsx` arranges the skip link, `SiteHeader`, `HeroSection`, `AboutSection`, and `SkillsSection`.
- `src/components/layout/SiteHeader.tsx` provides accessible desktop and mobile navigation and tracks the section currently positioned below the sticky header.
- `src/components/sections/HeroSection.tsx` renders the introduction and developer snapshot.
- `src/components/sections/AboutSection.tsx` renders the biography and verified highlights.
- `src/components/sections/SkillsSection.tsx` renders data-driven skill categories and individual skill lists.
- `src/data/portfolio.ts` is the main editable source for all currently displayed personal content and link placeholders.
- `src/types/portfolio.ts` describes the content shapes used by the data file and components.
- `src/styles/global.css` contains the reset, design tokens, layout rules, focus states, component styles, responsive behavior, and reduced-motion handling.

See [PROJECT_MAP.md](./PROJECT_MAP.md) for the current structure and relationships.

## Important decisions

- Content is static and centralized in `src/data/portfolio.ts` where practical.
- The design does not depend on a portrait. A user-provided professional photograph can be added later.
- Missing professional information remains `null` in the content file or is omitted from the interface until an authoritative resume or direct confirmation is supplied.
- Planned navigation entries are visible as non-interactive items marked `Soon`; they do not pretend that later sections exist.
- About and Skills are live navigation destinations with matching `#about` and `#skills` section IDs.
- The navigation header stays sticky while scrolling. A single global `scroll-padding-top` value uses `--header-height` so fragment targets align below it without stacked offsets.
- The navigation indicator follows the active Home, About, or Skills section on desktop and mobile. The current link uses `aria-current="location"` and the existing cyan underline; the detector accounts for the expanded mobile navigation panel when it is open.
- Because the resume is still unavailable, the Technical Skills section lists only the Data analysis capability supported by existing project documentation.
- The visual direction is a polished editorial/technical style: deep navy surfaces, warm off-white text, a restrained cyan accent, crisp typography, subtle data-grid motifs, and generous spacing.
- The hero's only live call-to-action scrolls to the verified developer snapshot inside the hero. Resume and external-profile actions are omitted until valid destinations exist.
- No branch, commit, push, or deployment will be performed without explicit approval.

## Verified portfolio information

- Name: Genesis Clabisellas
- Target: junior software-development opportunities
- Additional background: data analytics
- Primary project: ApplyWiseAI
- ApplyWiseAI description: AI-powered job-application assistant
- Introductory title: “Junior Software Developer | Building Practical Software and AI-Powered Applications”

## Known placeholders or missing information

The resume was not included with Milestone 0, Milestone 1, or the Milestone 2 request. The following must not be inferred:

- Resume PDF or DOCX file
- Email address
- GitHub profile URL
- LinkedIn profile URL
- Location, if it should be displayed
- Professional summary beyond the supplied title and background
- Education institutions, programs, dates, and distinctions
- Work experience, job titles, organizations, dates, and responsibilities
- Additional technical skills beyond the documented Data analysis capability
- ApplyWiseAI technology stack, status, screenshots, repository URL, live-demo URL, and verified outcomes
- Details, links, and images for additional projects
- Professional photograph, if desired

## Milestone status

- Completed: Milestone 0 — repository inspection, requirements, proposed structure, visual direction, and documentation
- Tested and approved: Milestone 1 — application initialization, global visual system, responsive navigation, hero, and documentation
- Implemented and validated, awaiting approval: Milestone 2 — About Me, Technical Skills, active navigation destinations, and documentation
- Not implemented: Projects, Experience, Education, Resume, Contact, and Footer

## Guides

- [Milestone 0 Guide](./guides/MILESTONE_0_GUIDE.md)
- [Milestone 1 Guide](./guides/MILESTONE_1_GUIDE.md)
- [Milestone 2 Guide](./guides/MILESTONE_2_GUIDE.md)

## Exact next task

After Genesis tests and approves Milestone 2, Milestone 3 is proposed to implement the Projects section. Verify ApplyWiseAI details, links, stack, status, outcomes, and assets before implementation. Do not begin Milestone 3 automatically.
