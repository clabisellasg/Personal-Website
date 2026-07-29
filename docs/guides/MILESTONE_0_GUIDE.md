# Milestone 0 Guide: Inspection and Project Plan

## 1. Milestone purpose

Milestone 0 established a safe starting point for Genesis Clabisellas's personal portfolio.

It:

- Inspected the repository and its Git state.
- Checked whether an authoritative resume was attached.
- Recorded the verified requirements and genuinely missing information.
- Recommended a technology stack, component structure, content architecture, and visual direction.
- Created permanent project documentation for future Codex sessions and manual reference.

Website visitors cannot see or interact with a portfolio yet. No application was initialized and no website section was built because the request explicitly requires approval before Milestone 1.

## 2. Files created or changed

### `docs/PROJECT_CONTEXT.md`

This is the concise project handoff. It records the purpose, planned technology, repository state, architecture, decisions, verified information, placeholders, milestone status, guide link, and exact next task. A future session should read this file first instead of rescanning the repository or repeating discovery work.

### `docs/PROJECT_MAP.md`

This file maps the documentation that exists now and the application structure proposed for later milestones. It clearly labels the future `src/` and `public/` trees as proposed so they are not mistaken for existing code.

### `docs/CUSTOMIZATION_GUIDE.md`

This is the quick-reference location for common manual edits. Because application files do not yet exist, it currently maps planned edits to planned paths and explains which documentation can safely be edited now.

### `docs/guides/MILESTONE_0_GUIDE.md`

This guide explains the Milestone 0 work in beginner-friendly language and supplies current-stage customization, safety, testing, practice, and review information.

No application, package, configuration, generated, or asset file was changed.

## 3. How the implementation works

There is no application execution flow yet. The repository had no `package.json`, `index.html`, `src/main.tsx`, React components, styles, or Vite configuration at inspection time.

Milestone 0 therefore has a documentation flow:

1. The supplied brief establishes project requirements.
2. Repository and Git inspection establishes the technical starting state.
3. Verified facts and missing facts are separated in `docs/PROJECT_CONTEXT.md`.
4. The proposed architecture is described in `docs/PROJECT_MAP.md`.
5. Common future edits are indexed in `docs/CUSTOMIZATION_GUIDE.md`.
6. This guide explains how those decisions fit together.

There are no imports, exports, props, types, arrays, objects, functions, state values, event handlers, CSS classes, or responsive rules in the repository yet. Those concepts will be documented against real source code beginning with Milestone 1.

### Why initialization is deferred

Project initialization logically belongs at the start of Milestone 1 in this project. It will create the build system and application entry files needed for the global visual system, navigation, and hero. Deferring it now respects the instruction to propose the React + TypeScript Vite setup before generating the website and avoids creating unused starter code before approval.

## 4. Website and component structure

No website hierarchy currently exists. The proposed hierarchy is:

```text
App
├── SiteHeader
├── HeroSection
├── AboutSection
├── SkillsSection
├── ProjectsSection
├── ExperienceSection
├── EducationSection
├── ResumeSection
├── ContactSection
└── SiteFooter
```

`App` will be the parent that controls page order. The layout and section components will be its children. Displayed content will come from `src/data/portfolio.ts` instead of being scattered across components. Only the components required for each approved milestone will be created.

The intended page order is documented in `docs/PROJECT_MAP.md`. ApplyWiseAI will be the first and most visually prominent project.

## 5. Manual customization guide

Only documentation exists in Milestone 0, so current changes should be made as follows.

### Change the project purpose or preferred title

Edit `docs/PROJECT_CONTEXT.md`:

- Update the text under `## Project purpose`.
- Update the quotation under `Preferred introductory title`.
- If the title changes, also update the verified-information bullet under `## Verified portfolio information`.

### Record newly supplied professional information

Edit `docs/PROJECT_CONTEXT.md`:

- Add facts confirmed by the resume under `## Verified portfolio information`.
- Remove only the matching entries from `## Known placeholders or missing information`.
- Keep the statement about the resume being unavailable until the actual file has been received and reviewed.

### Change the proposed application structure

Edit `docs/PROJECT_MAP.md`:

- Update the tree under `## Proposed application structure`.
- Update the matching entry under `## Planned relationships`.
- Update `docs/PROJECT_CONTEXT.md` under `## Architecture summary` so both files agree.

Do not create an empty component merely to make the proposed tree real. Components should be added when their milestone begins.

### Change the planned visual direction

Edit the visual-direction bullet under `## Important decisions` in `docs/PROJECT_CONTEXT.md`. The current direction uses deep navy, warm off-white, restrained cyan, crisp typography, subtle data-grid motifs, and generous spacing.

There is no `src/styles/global.css` or CSS selector to edit yet. Exact color variables, type rules, spacing values, component classes, and responsive media queries will be named in the Milestone 1 guide after they exist.

### Change planned page order

Edit the numbered list under `## Planned page order` in `docs/PROJECT_MAP.md`. Once `src/App.tsx` exists, the actual component order there will become authoritative and both documents must stay aligned.

## 6. Safe changes and caution areas

### Safe changes now

- Correct wording or spelling in the four documentation files.
- Add professional facts after verifying them against the resume or direct confirmation from Genesis.
- Refine the proposed structure before application initialization.
- Refine the visual direction without claiming it has already been implemented.

### Caution areas

- Do not invent education, work history, skills, project outcomes, statistics, links, or qualifications.
- Do not describe proposed files as existing files.
- Keep `docs/PROJECT_CONTEXT.md` concise; detailed teaching belongs in milestone guides.
- When the Vite project is created, avoid manually editing dependency lockfiles and generated files unless a package command requires it.
- Future content property names and component paths must be updated in the documentation if the implementation changes them.

### Undo a manual change with Git

Before the first commit, Git can show documentation as untracked but cannot restore a deleted or changed uncommitted file from history. Make careful edits or create the first approved commit before experimenting.

After a file has been committed, inspect a change with:

```powershell
git diff -- docs/PROJECT_CONTEXT.md
```

To discard an unwanted uncommitted edit to that exact tracked file:

```powershell
git restore -- docs/PROJECT_CONTEXT.md
```

Replace the path with the exact file you intend to restore. `git restore` discards uncommitted changes, so review `git diff` first.

## 7. Testing instructions

There is no application build, lint command, type-check, automated test, browser page, or development server in Milestone 0.

Run these checks from the repository root:

```powershell
git status --short --branch
```

This confirms the current branch and shows the new documentation. Expected result: branch `main` has no commits and `docs/` is untracked until a future approved commit.

```powershell
rg --files docs
```

This lists the documentation files. Expected result: the project context, project map, customization guide, and Milestone 0 guide are present.

```powershell
rg -n "resume|Resume" docs
```

This shows every resume-related statement so it can be checked for consistency. Expected result: the documents say that no resume file is currently available and do not present unverified resume facts.

### Browser and device checks

Desktop, tablet, mobile, keyboard, focus, and screen-reader checks are not applicable because there is no rendered website yet. Do not expect a local browser URL. These checks begin in Milestone 1 after navigation and the hero exist.

### Common problems

- If `rg` is not recognized, use `Get-ChildItem -Recurse -File docs` to list the documentation.
- If Git says the directory is not a repository, confirm the terminal is open at `Personal-Website`.
- If expected source files such as `src/App.tsx` are missing, that is correct for Milestone 0.

## 8. Beginner glossary

- **Repository:** A project folder whose history can be tracked by Git.
- **Git:** A tool that records versions of project files.
- **Remote:** An online Git repository connected to the local repository; this project names it `origin`.
- **Branch:** A named line of Git history; this repository is currently on `main`.
- **Framework:** A structured set of tools and conventions used to build an application; React is the planned UI framework.
- **Build tool:** Software that prepares source code for development and production; Vite is the planned build tool.
- **Component:** A reusable piece of a React interface, such as a header or project section.
- **Static content:** Information stored with the frontend code rather than loaded from a backend or database.
- **Placeholder:** An explicitly labelled temporary value used until verified content is supplied.
- **Design token:** A named reusable visual value, such as a color or spacing size.

## 9. Practice exercises

Do not complete these exercises unless you want to practice editing the Milestone 0 documentation.

1. In `docs/PROJECT_CONTEXT.md`, rewrite the visual-direction bullet under `## Important decisions` using one different accent color. Keep it described as a plan, then use `git diff -- docs/PROJECT_CONTEXT.md` to review the change.
2. In `docs/PROJECT_MAP.md`, move `ResumeSection` directly before `EducationSection` in both the proposed tree and the planned page order. Then undo the exercise so the approved order is restored.
3. In `docs/PROJECT_CONTEXT.md`, add a clearly labelled hypothetical missing item to `## Known placeholders or missing information`, verify it appears with `rg`, and remove it again.

## 10. Understanding check

1. Why does this repository not contain React components after Milestone 0?
2. Which file should a future Codex session read first, and what does it learn there?
3. Which supplied portfolio facts are currently verified, and why are education and work experience absent?
4. What role will `src/data/portfolio.ts` play after the application is initialized?
5. Why must the proposed structure in `docs/PROJECT_MAP.md` remain clearly separated from the current structure?

