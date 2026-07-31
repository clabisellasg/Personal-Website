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

- Milestones 0, 1, and 2 are committed.
- The current branch is `milestone-3`.
- Milestone 3 application and documentation changes are currently uncommitted.
- `origin` points to `https://github.com/clabisellasg/Personal-Website.git`.
- No deployment has been created.

## Implemented architecture

- `src/main.tsx` mounts React and loads the global stylesheet.
- `src/App.tsx` arranges the skip link, `SiteHeader`, `HeroSection`, `AboutSection`, `SkillsSection`, and `ProjectsSection`.
- `src/components/layout/SiteHeader.tsx` provides accessible desktop and mobile navigation and tracks the section currently positioned below the sticky header.
- `src/components/sections/HeroSection.tsx` renders the introduction and developer snapshot.
- `src/components/sections/AboutSection.tsx` renders the biography and verified highlights.
- `src/components/sections/SkillsSection.tsx` renders data-driven skill categories and individual skill lists.
- `src/components/sections/ProjectsSection.tsx` renders the data-driven horizontal project carousel, reusable cards, native project dialog, and mouse, touch, wheel, keyboard, and arrow-control interactions.
- `src/data/portfolio.ts` is the main editable source for all currently displayed personal content and link placeholders.
- `src/types/portfolio.ts` describes the content shapes used by the data file and components.
- `src/styles/global.css` contains the reset, design tokens, layout rules, focus states, component styles, responsive behavior, and reduced-motion handling.

See [PROJECT_MAP.md](./PROJECT_MAP.md) for the current structure and relationships.

## Important decisions

- Content is static and centralized in `src/data/portfolio.ts` where practical.
- The design does not depend on a portrait. A user-provided professional photograph can be added later.
- Missing professional information remains `null` in the content file or is omitted from the interface until an authoritative resume or direct confirmation is supplied.
- Planned navigation entries are visible as non-interactive items marked `Soon`; they do not pretend that later sections exist.
- About, Skills, and Projects are live navigation destinations with matching `#about`, `#skills`, and `#projects` section IDs.
- The navigation header stays sticky while scrolling. A single global `scroll-padding-top` value uses `--header-height` so fragment targets align below it without stacked offsets.
- The navigation indicator follows the active Home, About, Skills, or Projects section on desktop and mobile. The current link uses `aria-current="location"` and the existing cyan underline; the detector accounts for the expanded mobile navigation panel when it is open.
- The Projects section presents three selected repositories with high-level information verified from their public documentation: ApplyWiseAI, the collaborative Pawfect Match project, and Student Performance Predictor.
- All projects remain in one horizontally scrollable, non-wrapping row of compact cards. Each card displays only the project name; all remaining verified information appears exclusively in the dialog. ApplyWiseAI receives the Featured project label inside that dialog. Repository URLs, live-demo URLs, deployment claims, project status, outcomes, and screenshots are intentionally omitted.
- Each project card is a direct visible button rather than an invisible overlay. This prevents carousel pointer capture from competing with card activation. The button opens a responsive native dialog generated from the same project data; the dialog supports a visible close button, Escape, backdrop click, focus containment and return, internal scrolling, and background-scroll locking.
- Native overflow, CSS scroll snapping, responsive flex bases, pointer dragging, wheel translation, and desktop arrow buttons provide carousel navigation without a third-party dependency.
- The Projects data model supports additional entries, optional technologies and features, status, repository and demo actions, screenshots, alternative text, and featured state without hardcoding individual cards.
- Because the resume is still unavailable, the Technical Skills section lists only the Data analysis capability supported by existing project documentation.
- The visual direction is a polished editorial/technical style: deep navy surfaces, warm off-white text, a restrained cyan accent, crisp typography, subtle data-grid motifs, and generous spacing.
- The hero's only live call-to-action scrolls to the verified developer snapshot inside the hero. Resume and external-profile actions remain omitted until explicitly approved for publication.
- No branch, commit, push, or deployment will be performed without explicit approval.

## Verified portfolio information

- Name: Genesis Clabisellas
- Target: junior software-development opportunities
- Additional background: data analytics
- Primary project: ApplyWiseAI
- ApplyWiseAI description: AI-powered job-application assistant
- ApplyWiseAI high-level stack: React, TypeScript, Java, Spring Boot, and PostgreSQL
- Pawfect Match: collaborative full-stack pet-matchmaking project using React, Java, Spring Boot, MongoDB, and Firebase
- Student Performance Predictor: Python machine-learning pipeline using pandas, scikit-learn, Matplotlib, and Seaborn
- Introductory title: “Junior Software Developer | Building Practical Software and AI-Powered Applications”

## Known placeholders or missing information

The resume was not included with Milestone 0, Milestone 1, Milestone 2, or the Milestone 3 request. The following must not be inferred:

- Resume PDF or DOCX file
- Email address
- GitHub profile link, which remains intentionally unpublished in this milestone
- LinkedIn profile URL
- Location, if it should be displayed
- Professional summary beyond the supplied title and background
- Education institutions, programs, dates, and distinctions
- Work experience, job titles, organizations, dates, and responsibilities
- Additional technical skills beyond the documented Data analysis capability
- Project deployment status, screenshots, repository URLs, live-demo URLs, and verified outcomes
- Detailed ownership breakdowns and individual contribution statements for collaborative projects
- Professional photograph, if desired

## Milestone status

- Completed: Milestone 0 — repository inspection, requirements, proposed structure, visual direction, and documentation
- Tested and approved: Milestone 1 — application initialization, global visual system, responsive navigation, hero, and documentation
- Tested and approved: Milestone 2 — About Me, Technical Skills, active navigation destinations, and documentation
- Completed and validated, awaiting approval: Milestone 3 — selected Featured Projects, high-level repository-verified project information, Projects navigation, reusable project data, and documentation
- Not implemented: Experience, Education, Resume, Contact, and Footer

## Guides

- [Milestone 0 Guide](./guides/MILESTONE_0_GUIDE.md)
- [Milestone 1 Guide](./guides/MILESTONE_1_GUIDE.md)
- [Milestone 2 Guide](./guides/MILESTONE_2_GUIDE.md)
- [Milestone 3 Guide](./guides/MILESTONE_3_GUIDE.md)

## Exact next task

After Genesis tests and approves Milestone 3, Milestone 4 is proposed to implement the Experience section. An authoritative resume or directly confirmed role, organization, date, and responsibility information is required before implementation. Do not begin Milestone 4 automatically.
