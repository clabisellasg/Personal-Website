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

- Milestones 0 through 3 are committed.
- The current branch is `milstone-4`.
- Milestone 3 was fully tested and approved before Milestone 4 began.
- Milestone 4 application and documentation changes are currently uncommitted.
- `origin` points to `https://github.com/clabisellasg/Personal-Website.git`.
- No deployment has been created.

## Implemented architecture

- `src/main.tsx` mounts React and loads the global stylesheet.
- `src/App.tsx` arranges the skip link, header, all eight page sections, and footer.
- `src/components/layout/SiteHeader.tsx` provides accessible desktop and mobile navigation and tracks the section currently positioned below the sticky header.
- `src/components/layout/SiteFooter.tsx` provides the copyright line, portfolio note, and back-to-top link.
- `src/components/sections/HeroSection.tsx` renders the introduction and developer snapshot.
- `src/components/sections/AboutSection.tsx` renders the biography and verified highlights.
- `src/components/sections/SkillsSection.tsx` renders data-driven skill categories and individual skill lists.
- `src/components/sections/ProjectsSection.tsx` renders the data-driven horizontal project carousel, reusable cards, native project dialog, and mouse, touch, wheel, keyboard, and arrow-control interactions.
- `src/components/sections/ExperienceSection.tsx` maps verified work-history entries into semantic recruiter-facing cards.
- `src/components/sections/EducationSection.tsx` maps verified education entries into a distinct but related card layout.
- `src/components/sections/ResumeSection.tsx` renders the verified PDF download call-to-action.
- `src/components/sections/ContactSection.tsx` renders only verified contact methods.
- `src/data/portfolio.ts` is the main editable source for all displayed personal content, verified links, and unavailable-link null values.
- `src/types/portfolio.ts` describes the content shapes used by the data file and components.
- `src/styles/global.css` contains the reset, design tokens, layout rules, focus states, component styles, responsive behavior, and reduced-motion handling.

See [PROJECT_MAP.md](./PROJECT_MAP.md) for the current structure and relationships.

## Important decisions

- Content is static and centralized in `src/data/portfolio.ts` where practical.
- The design does not depend on a portrait. A user-provided professional photograph can be added later.
- Missing professional information remains `null` in the content file or is omitted from the interface until an authoritative resume or direct confirmation is supplied.
- Home, About, Skills, Projects, Experience, Education, Resume, and Contact are live navigation destinations with matching fragment IDs.
- The navigation header stays sticky while scrolling. A single global `scroll-padding-top` value uses `--header-height` so fragment targets align below it without stacked offsets.
- The navigation indicator follows every available page section on desktop and mobile. The current link uses `aria-current="location"` and the existing cyan underline; the detector accounts for the expanded mobile navigation panel when it is open.
- The Projects section presents three selected repositories with high-level information verified from their public documentation: ApplyWiseAI, the collaborative Pawfect Match project, and Student Performance Predictor.
- All projects remain in one horizontally scrollable, non-wrapping row of compact cards. Each card displays only the project name; all remaining verified information appears exclusively in the dialog. ApplyWiseAI receives the Featured project label inside that dialog. Repository URLs, live-demo URLs, deployment claims, project status, outcomes, and screenshots are intentionally omitted.
- Each project card is a direct visible button rather than an invisible overlay. This prevents carousel pointer capture from competing with card activation. The button opens a responsive native dialog generated from the same project data; the dialog supports a visible close button, Escape, backdrop click, focus containment and return, internal scrolling, and background-scroll locking.
- Native overflow, CSS scroll snapping, responsive flex bases, pointer dragging, wheel translation, and desktop arrow buttons provide carousel navigation without a third-party dependency.
- The Projects data model supports additional entries, optional technologies and features, status, repository and demo actions, screenshots, alternative text, and featured state without hardcoding individual cards.
- Milestone 4 uses the verified `CLABISELLAS-RESUME.pdf` from the connected Drive without modifying its contents. The unchanged file is stored at `public/assets/resume/genesis-clabisellas-resume.pdf`.
- Work experience and education are rendered from structured arrays and disappear cleanly if their arrays are empty.
- The resume, email, GitHub, Facebook, and two phone links are centralized in `src/data/portfolio.ts`. LinkedIn remains omitted because no verified URL is available.
- The Technical Skills section remains unchanged in Milestone 4 to preserve the approved Milestone 2 scope.
- The visual direction is a polished editorial/technical style: deep navy surfaces, warm off-white text, a restrained cyan accent, crisp typography, subtle data-grid motifs, and generous spacing.
- The hero's only live call-to-action still scrolls to the verified developer snapshot. Resume and contact actions appear in their dedicated Milestone 4 sections.
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
- Experience: Data Analyst (Intern), Veritacore Philippines Inc., Cebu, Philippines, January 2026 through April 2026
- Education: Bachelor of Science in Information Technology, Cebu Institute of Technology - University, expected May 2026
- Email: `clabisellasg@gmail.com`
- GitHub: `https://github.com/clabisellasg`
- Facebook: `https://www.facebook.com/GenesisMeOfficial/`
- Philippines phone: `+63 943 500 9727`
- Singapore phone: `+65 8401 1431`
- Resume asset: `/assets/resume/genesis-clabisellas-resume.pdf`

## Known placeholders or missing information

The following information remains unavailable and must not be inferred:

- LinkedIn profile URL
- Professional summary beyond the supplied title and background
- Any additional Technical Skills content not separately reviewed for the approved Skills section
- Project deployment status, screenshots, repository URLs, live-demo URLs, and verified outcomes
- Detailed ownership breakdowns and individual contribution statements for collaborative projects
- Professional photograph, if desired

## Milestone status

- Completed: Milestone 0 — repository inspection, requirements, proposed structure, visual direction, and documentation
- Tested and approved: Milestone 1 — application initialization, global visual system, responsive navigation, hero, and documentation
- Tested and approved: Milestone 2 — About Me, Technical Skills, active navigation destinations, and documentation
- Tested and approved: Milestone 3 — selected Featured Projects, high-level repository-verified project information, Projects navigation, reusable project data, and documentation
- Completed and validated, awaiting approval: Milestone 4 — Experience, Education, verified resume download, Contact, Footer, navigation integration, and documentation

## Guides

- [Milestone 0 Guide](./guides/MILESTONE_0_GUIDE.md)
- [Milestone 1 Guide](./guides/MILESTONE_1_GUIDE.md)
- [Milestone 2 Guide](./guides/MILESTONE_2_GUIDE.md)
- [Milestone 3 Guide](./guides/MILESTONE_3_GUIDE.md)
- [Milestone 4 Guide](./guides/MILESTONE_4_GUIDE.md)

## Exact next task

After Genesis tests and approves Milestone 4, Milestone 5 is the proposed next task for final animation, polish, and any separately approved deployment preparation. Do not begin Milestone 5 automatically.
