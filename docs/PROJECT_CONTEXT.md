# Project Context

## Project purpose

Build a frontend-only, responsive, single-page portfolio for Genesis Clabisellas. The site will target junior software-development opportunities while presenting Genesis's data-analytics background and ApplyWiseAI as the primary featured project.

Preferred introductory title:

> Junior Software Developer | Building Practical Software and AI-Powered Applications.

## Technology stack

No application has been initialized yet. After approval, the planned stack is:

- React
- TypeScript
- Vite
- Plain CSS
- Static local content with no backend, database, authentication, or server-dependent contact form

## Repository state

- The repository contained only `.git` when Milestone 0 began.
- The current branch is `main`, with no commits.
- `origin` points to `https://github.com/clabisellasg/Personal-Website.git`.
- The remote currently exposes no branches or tags.
- No framework, package manager, source files, configuration, tests, or assets exist yet.

## Architecture summary

The proposed application will use:

- `src/App.tsx` to arrange the page sections.
- Reusable layout and section components under `src/components/`.
- `src/data/portfolio.ts` as the main editable source for portfolio content.
- `src/types/portfolio.ts` for shared TypeScript content shapes when they improve clarity.
- `src/styles/global.css` for the visual system and responsive styles.
- `public/assets/` for the downloadable resume and any user-provided images.

See [PROJECT_MAP.md](./PROJECT_MAP.md) for the proposed structure and relationships.

## Important decisions

- Milestone 0 creates documentation only. Project initialization is deferred until Milestone 1 approval.
- Because the repository is empty, React, TypeScript, and Vite are the recommended initialization choice.
- Content will be static and centralized in one data file where practical.
- The design will not depend on a portrait. A user-provided professional photograph can be added later.
- Missing professional information will remain clearly labelled as a placeholder until an authoritative resume or direct confirmation is supplied.
- The visual direction is a polished editorial/technical style: deep navy and warm off-white surfaces, a restrained cyan accent, crisp typography, subtle data-grid motifs, and generous spacing.
- No branch, commit, push, or deployment will be performed without explicit approval.

## Verified portfolio information

- Name: Genesis Clabisellas
- Target: junior software-development opportunities
- Additional background: data analytics
- Primary project: ApplyWiseAI
- ApplyWiseAI description: AI-powered job-application assistant
- Preferred introductory title: “Junior Software Developer | Building Practical Software and AI-Powered Applications.”

## Known placeholders or missing information

The resume was not included with the Milestone 0 request. The following must not be inferred:

- Resume PDF or DOCX file
- Email address
- GitHub profile URL
- LinkedIn profile URL
- Location, if it should be displayed
- Professional summary beyond the supplied title and background
- Education institutions, programs, dates, and distinctions
- Work experience, job titles, organizations, dates, and responsibilities
- Confirmed technical skills
- ApplyWiseAI description, technology stack, status, screenshots, repository URL, live-demo URL, and verified outcomes
- Details, links, and images for additional projects
- Professional photograph, if desired

## Milestone status

- Completed: Milestone 0 — repository inspection, requirements, proposed structure, visual direction, and documentation
- Current status: awaiting Genesis's review and approval
- Application status: not initialized

## Guides

- [Milestone 0 Guide](./guides/MILESTONE_0_GUIDE.md)

## Exact next task

After approval, begin Milestone 1 only:

1. Initialize the empty repository with the React + TypeScript Vite template.
2. Establish the global visual system.
3. Create the responsive navigation and hero section using verified content and labelled placeholders only.
4. Run the available build and code-quality checks.
5. Create `docs/guides/MILESTONE_1_GUIDE.md` and update the affected project documentation.

