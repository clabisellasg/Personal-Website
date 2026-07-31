# Milestone 3 Guide: Featured Projects

## 1. Milestone purpose

Milestone 3 adds a recruiter-facing Featured Projects section after Technical Skills. It presents ApplyWiseAI as the primary featured project and uses one horizontally scrollable, non-wrapping row for all selected projects.

Cards can be explored with touch swiping, trackpad or mouse-wheel scrolling, mouse dragging, keyboard arrow keys, and desktop previous/next controls. Activating any card opens a responsive native dialog with the project's complete available information.

The current selection and its high-level content were verified from public repository documentation:

- ApplyWiseAI: a full-stack, AI-powered job-application assistant
- Pawfect Match: a collaborative full-stack pet-matchmaking project
- Student Performance Predictor: a Python machine-learning analysis pipeline

Descriptions, technologies, and features remain concise and general. Repository URLs, live-demo URLs, deployment claims, status, screenshots, detailed ownership claims, and outcomes are intentionally omitted.

Experience, Education, Resume, Contact, Footer, animations, deployment, and Milestone 4 work are outside this milestone.

## 2. Exact files created or changed

### Created

| File | Purpose |
| --- | --- |
| `src/components/sections/ProjectsSection.tsx` | Defines the carousel, reusable card and visual helpers, arrow/wheel/drag behavior, and accessible project dialog generated from `portfolio.projects.items`. |
| `docs/guides/MILESTONE_3_GUIDE.md` | Documents the completed Projects implementation, customization, testing, and learning material. |

### Changed

| File | Change |
| --- | --- |
| `src/types/portfolio.ts` | Adds `ProjectImage`, `Project`, and the `projects` shape inside `PortfolioContent`. |
| `src/data/portfolio.ts` | Activates `#projects` and adds the Projects heading, introduction, and the three selected project entries. |
| `src/App.tsx` | Imports and renders `ProjectsSection` after `SkillsSection`. |
| `src/styles/global.css` | Adds the horizontal carousel, responsive card sizing, scroll snapping, hover/focus states, dialog layout, backdrop, internal scrolling, and reduced-motion rules. |
| `docs/PROJECT_CONTEXT.md` | Records Milestone 2 approval, Milestone 3 completion, remaining project-information gaps, and Milestone 4 as the proposed next task. |
| `docs/PROJECT_MAP.md` | Adds Projects files, relationships, and rendered page order. |
| `docs/CUSTOMIZATION_GUIDE.md` | Adds concise project-management locations and links to this guide. |

No dependency or project-configuration file changed.

## 3. How the files connect

```text
src/types/portfolio.ts
└── defines ProjectImage, Project, and PortfolioContent.projects

src/data/portfolio.ts
├── supplies #projects to SiteHeader through portfolio.navigation
└── supplies portfolio.projects to ProjectsSection

src/App.tsx
└── renders ProjectsSection after SkillsSection

src/components/sections/ProjectsSection.tsx
├── maps portfolio.projects.items
├── renders one reusable ProjectCard for each project
├── manages native scrolling, arrow controls, wheel input, and pointer dragging
└── renders the selected project through ProjectDialog

src/styles/global.css
└── styles the section, carousel, cards, visual areas, dialog, lists, links, and breakpoints
```

The project image path is stored in `project.image.src` when an image is available. Files intended for that field should be placed under `public/assets/projects/`, which Vite serves from `/assets/projects/`.

## 4. Project data flow

The flow for every project is:

1. `PortfolioContent.projects` defines the required section and project shape.
2. `portfolio.projects` stores the actual section copy and ordered `items` array.
3. `ProjectsSection` imports `portfolio` and reads `portfolio.projects`.
4. `projects.items.map(...)` passes each `Project` and its array index into `ProjectCard`.
5. `ProjectCard` renders a direct, visible button whose only text is the project name.
6. Activating the button stores the selected `Project` in state and opens `ProjectDialog`.
7. `ProjectDialog` reads the same object, so its full content is never duplicated manually.
8. CSS classes in `src/styles/global.css` provide the horizontal, responsive, and modal layouts.

The section-level properties are:

- `label`: the small numbered label above the heading.
- `heading`: the section `<h2>`.
- `introduction`: supporting copy beside the heading on wide screens.
- `items`: the ordered array of project objects.

Every `Project` contains:

- `title`
- `summary`
- `description`
- `technologies`
- `features`
- `status`
- `repository`
- `liveDemo`
- `image`
- `featured`

Required text always renders. Empty arrays and `null` optional values do not produce empty headings, broken images, or inactive buttons.

## 5. Relevant component hierarchy

```text
App
├── SiteHeader
├── HeroSection
├── AboutSection
├── SkillsSection
└── ProjectsSection
    ├── section header
    ├── carousel toolbar and desktop arrow controls
    ├── horizontally scrollable projects list
    │   └── ProjectCard
    │       └── direct project-name button
    └── ProjectDialog
        ├── visible close button
        ├── shared image or visual fallback
        ├── title, summary, and full description
        ├── optional status, technologies, and features
        └── optional repository and demo actions
```

Heading levels remain logical:

- `HeroSection` provides the single page `<h1>`.
- `ProjectsSection` uses an `<h2>`.
- Every `ProjectCard` uses an `<h3>`.
- Technologies and Key features inside the dialog use `<h4>` headings.

The projects collection is a `<ul>`. Each entry is an `<li>` containing a direct button, avoiding an invisible overlay or competing nested click target. The native `<dialog>` supplies modal semantics and browser-managed focus containment.

## 6. React, TypeScript, props, mapping, and conditional rendering

### Arrays and mapping

`portfolio.projects.items` is an ordered `Project[]`. `ProjectsSection` maps it into `ProjectCard` components. Moving complete objects in the array changes the display order without changing component markup.

`project.technologies` and `project.features` are string arrays. When populated, their values are mapped into semantic list items.

### Types

- `ProjectImage` requires `src` and `alt`.
- `Project` describes every required and optional project property.
- `PortfolioContent.projects` requires the section label, heading, introduction, and items array.
- Type checking detects missing properties, misspelled property names, and incorrect `null`, string, array, or boolean values.

### Props

`ProjectCardProps` contains:

- `project: Project`
- `index: number`
- `onOpen`: a callback receiving the project, index, and direct card button

The index generates the displayed `01`, `02`, and later project numbers. Numbers update automatically when projects are reordered.

### Conditional rendering

- `project.image ? ... : ...` displays a real image or the intentional visual fallback inside the dialog.
- `selectedProject && ...` omits the complete dialog until a card is activated.
- `project.status && ...` omits the dialog Status row when status is `null`.
- `project.technologies.length > 0 && ...` omits a Technologies list when no verified technologies exist.
- `project.features.length > 0 && ...` omits the dialog Key features group when no verified features exist.
- `ProjectActions` returns `null` when both links are unavailable.
- Each repository or demo action renders independently, so one can exist without the other.

### Links

`repository` and `liveDemo` use the existing `PortfolioLink` shape:

```ts
{
  label: 'View repository',
  href: 'https://example.com/verified-destination',
}
```

External project links open in a new tab with `target="_blank"` and `rel="noopener noreferrer"`. A link is never rendered when its value is `null`.

### Images

When `project.image` is `null`, `ProjectVisual` renders `.project-visual__placeholder`. Its accessible label explains that no verified screenshot is available.

When an image exists, the component renders:

```tsx
<img src={project.image.src} alt={project.image.alt} />
```

CSS uses `object-fit: cover` so screenshots fill the visual area without stretching.

## 7. Exact manual customization

### Change a project title, summary, or description

Open `src/data/portfolio.ts`, find the project inside `portfolio.projects.items`, and edit:

- `title` for the project `<h3>`.
- `summary` for the prominent one-sentence explanation.
- `description` for the longer supporting paragraph.

Keep claims factual and supported by an authoritative source.

### Edit technology and feature lists

Edit the arrays inside the project:

```ts
technologies: ['Verified technology'],
features: ['Verified feature'],
```

- Add a quoted string to add an item.
- Edit a string to rename it.
- Delete a complete string to remove it.
- Move strings to reorder them.
- Use `[]` to hide the complete group.

Do not add a technology merely because it seems likely for the project.

### Add a new project

Add a complete object inside `portfolio.projects.items`:

```ts
{
  title: 'Verified project title',
  summary: 'Verified short summary.',
  description: 'Verified longer description.',
  technologies: [],
  features: [],
  status: null,
  repository: null,
  liveDemo: null,
  image: null,
  featured: false,
},
```

Replace only values supported by verified project information. `ProjectsSection` automatically renders the new entry.

### Remove or reorder projects

- Remove a project by deleting its complete object from `portfolio.projects.items`.
- Reorder projects by moving complete objects within the array.

Do not leave a partial object. Project numbering is generated from array order.

### Mark a project as featured

Set:

```ts
featured: true
```

Featured projects receive `project-card--featured` and display the Featured project label.

All cards use the same carousel size. `featured: true` changes the card and dialog label to Featured project without breaking the single horizontal row. ApplyWiseAI should remain the primary featured project unless the portfolio direction changes.

### Add or change repository and demo links

Use a verified complete URL:

```ts
repository: {
  label: 'View ApplyWiseAI repository',
  href: 'https://example.com/verified-repository',
},
liveDemo: {
  label: 'Open ApplyWiseAI live demo',
  href: 'https://example.com/verified-demo',
},
```

Use descriptive labels that identify the destination without depending on nearby text.

### Hide an unavailable action

Set the unavailable property to `null`:

```ts
repository: null,
liveDemo: null,
```

If both are `null`, `ProjectActions` returns `null` and no action group appears in the dialog.

### Add or replace a screenshot

1. Create `public/assets/projects/` if it does not exist.
2. Add the verified image file, for example `public/assets/projects/applywiseai-dashboard.webp`.
3. Update the project data:

```ts
image: {
  src: '/assets/projects/applywiseai-dashboard.webp',
  alt: 'Accurate description of the visible ApplyWiseAI interface',
},
```

4. Run the validation commands and inspect the image at mobile and desktop sizes.

To return to the intentional visual fallback, set `image: null`.

### Write accurate alternative text

Describe the useful visible content of the screenshot, not assumptions about hidden behavior.

Good alternative text identifies:

- The application.
- The screen or view.
- The important visible interface elements.

Avoid phrases such as “image of” and do not include features that are not visible. If an image is purely decorative, the type still requires `alt`; review whether it should be a project screenshot before adding it.

### Change card colours, spacing, and layout

Open `src/styles/global.css`.

- `.projects-section` controls the section background.
- `.projects-carousel__track` controls the horizontal row, gap, scrolling, snapping, scrollbar, and drag cursor.
- `.projects-carousel__controls` controls the desktop previous/next buttons.
- `.project-card` controls compact responsive card width and snap alignment.
- `.project-card__button` is both the visible card and its click target; it controls size, padding, border, surface, shadow, hover, and focus.
- `.project-card__grid` supplies the decorative card background without adding visible information.
- `.project-visual--dialog` controls the dialog visual area.
- `.project-visual__placeholder` controls the no-screenshot treatment.
- `.project-card__title` is the card's only visible content.
- `.project-dialog` controls popup sizing and internal scrolling.
- `.project-dialog__layout` controls the dialog's mobile and desktop layouts.
- `.project-actions` controls dialog action spacing and wrapping.
- `.site-nav__mobile` remains `position: fixed` beneath `--header-height`, preventing the expanded overlay from changing page length near the final section.

Prefer the existing `--color-*`, `--space-*`, `--radius-*`, and `--shadow-*` tokens.

### Change how many cards are visible

The base card width is:

```css
.project-card {
  flex: 0 0 12rem;
}
```

- Mobile uses `12rem` compact name-only cards.
- At `40rem`, each card uses `13.5rem`.
- At `64rem`, each card uses `15rem`.
- The carousel viewport is capped at `52rem`, allowing the current three cards to align cleanly on desktop while preserving horizontal browsing on smaller screens and for future entries.
- Keep `flex-wrap` off the track and preserve `scroll-snap-align: start` on cards.

### Carousel and dialog interaction

- `scrollByCard(...)` powers desktop buttons and Left/Right keyboard navigation.
- `handleTrackWheel(...)` translates a vertical mouse-wheel gesture into horizontal movement only while more carousel content exists in that direction.
- Pointer dragging starts only from empty track space. Card pointer events remain entirely owned by the direct button, preventing drag capture from intercepting clicks.
- Desktop arrow controls render only when the track actually overflows.
- The native `<dialog>` provides modal semantics and focus containment.
- Opening the dialog locks body scrolling and focuses the close button.
- Escape, backdrop click, and the visible close button all clear the selected project.
- Effect cleanup closes the dialog, restores body styles, and returns focus to the original card.

### Hide and restore the entire Projects section

To hide Projects:

1. Remove `<ProjectsSection />` from `src/App.tsx`.
2. Remove the `ProjectsSection` import from the same file.
3. Change the Projects navigation item in `portfolio.navigation` to:

```ts
{ label: 'Projects', href: null, availability: 'planned' }
```

To restore it:

1. Restore the import.
2. Render `<ProjectsSection />` after `<SkillsSection />`.
3. Restore `{ label: 'Projects', href: '#projects', availability: 'available' }`.

Keep `id="projects"` in `ProjectsSection`.

## 8. Safe changes and caution areas

### Safe changes

- Edit verified project text in `portfolio.projects.items`.
- Add, remove, or reorder complete verified project objects.
- Reorder verified technology or feature strings.
- Set unavailable optional values to `null` or `[]`.
- Adjust Projects selectors using existing design tokens.
- Replace the visual fallback with an authentic screenshot and accurate alternative text.

### Use caution

- Do not invent features, technologies, status, outcomes, statistics, URLs, screenshots, or additional projects.
- Keep `#projects` synchronized between `portfolio.navigation` and `ProjectsSection`.
- Keep every `Project` compatible with the TypeScript type.
- Do not display an empty Technologies, Key features, Status, or actions group.
- Keep the carousel list non-wrapping and horizontally scrollable.
- Preserve the labelled full-card button, dialog labels, Escape handling, body-scroll cleanup, and focus return.
- Do not put private configuration, credentials, API keys, or internal endpoints in project data.
- Keep one page `<h1>`, section `<h2>` elements, project `<h3>` elements, and group `<h4>` elements.
- Preserve `rel="noopener noreferrer"` when an external link uses `target="_blank"`.
- Do not hand-edit generated `dist/` files.
- Do not create later-milestone sections while editing Projects.

## 9. Exact testing commands and browser checks

Run from the repository root:

```powershell
npm run lint
npm run typecheck
npm run build
```

There is no automated `test` script in `package.json`.

Start the local preview with:

```powershell
npm run dev
```

Use the exact Vite URL and check:

1. Projects appears after Technical Skills.
2. Projects navigation reaches `#projects`.
3. The Projects heading begins directly below the sticky header.
4. The cyan navigation indicator follows Projects.
5. Home, About, and Skills still navigate correctly.
6. Mobile navigation closes after selecting Projects.
7. ApplyWiseAI, Pawfect Match, and Student Performance Predictor are displayed in that order; ApplyWiseAI is labelled Featured project.
8. All cards remain on one horizontal, non-wrapping row with scroll snapping.
9. Touch swipe, trackpad movement, vertical mouse-wheel translation, and mouse drag move the row.
10. Left/Right keys move the focused carousel, and desktop previous/next controls update their disabled states at each boundary.
11. Activating each card opens a dialog generated from that project's existing data.
12. The visible close button, Escape, and backdrop click close the dialog.
13. Opening locks background scrolling; closing restores it and returns focus to the triggering card.
14. At approximately 320px, compact name-only cards remain easy to tap and the dialog fits within the viewport with internal scrolling.
15. At approximately 768px, multiple compact cards are visible without wrapping.
16. At 1024px and wider, compact cards and desktop arrow controls appear while horizontal movement remains available.
17. The no-screenshot visual treatment appears intentionally styled inside the dialog.
18. Heading order remains one `<h1>`, section `<h2>` headings, project/dialog `<h3>` headings, and optional dialog group `<h4>` headings.
19. Keyboard focus indicators remain visible on cards, controls, links, and the close button.
20. Reduced-motion preferences disable smooth scrolling, transitions, and dialog animation.
21. The browser console has no errors or warnings introduced by Milestone 3.
22. No repository or live-demo URL is rendered in the current milestone.
23. Experience, Education, Resume, Contact, and Footer remain unimplemented.

## 10. Common problems and likely fixes

- **Projects still says Soon:** set its navigation item to `href: '#projects'` and `availability: 'available'`.
- **Projects navigation does nothing:** confirm `ProjectsSection` retains `id="projects"`.
- **The indicator selects the wrong section:** keep navigation items and rendered sections in the same order.
- **The mobile menu closes but lands too low:** keep `handleMobileNavigate` in `SiteHeader.tsx`; it closes the overlay before scrolling.
- **Type checking reports a missing property:** compare the project object with `Project` in `src/types/portfolio.ts`.
- **An empty heading appears:** use `[]` for unavailable technologies or features and `null` for unavailable status or links.
- **A broken image icon appears:** confirm the file exists under `public/` and `image.src` begins with `/assets/`, or restore `image: null`.
- **A button is missing:** confirm the corresponding `repository` or `liveDemo` object contains both `label` and `href`.
- **A fake-looking inactive button appears:** do not use an empty string; set the unavailable action to `null`.
- **A long technology or feature overflows:** preserve `max-width: 100%` and `overflow-wrap: anywhere` on the relevant list items.
- **Cards wrap onto another row:** keep `.projects-carousel__track` as `display: flex` and do not add `flex-wrap`.
- **The next card is not previewed on mobile:** confirm the base `.project-card` basis remains below `100%`.
- **Arrow buttons do nothing:** confirm `trackRef` remains attached to `.projects-carousel__track` and cards retain `.project-card`.
- **A card does not open:** confirm `.project-card__button` remains the direct button and the track pointer-down handler ignores events originating from cards.
- **The page remains locked after closing:** keep body-style restoration inside the dialog effect cleanup.
- **Focus does not return:** keep `lastTriggerRef` assigned before opening and focused during cleanup.
- **The dialog exceeds a small screen:** preserve its `max-height`, `overflow: auto`, and narrow-screen width rule.
- **The screenshot crops important content:** adjust the image itself or `.project-visual img { object-fit: cover; }` carefully.
- **Lint rejects a hidden section:** remove the unused `ProjectsSection` import from `src/App.tsx`.

## 11. Beginner glossary

- **Project data model:** The TypeScript properties that describe what each project can contain.
- **Featured project:** A project with `featured: true` that receives the Featured project label.
- **Carousel:** A horizontally browsable collection presented here as a semantic list.
- **Scroll snapping:** CSS behavior that settles a scrolled card against a predictable alignment point.
- **Native dialog:** The HTML `<dialog>` element used for modal semantics, focus containment, Escape behavior, and a backdrop.
- **Focus return:** Restoring keyboard focus to the card that opened a dialog.
- **Reusable component:** One component, such as `ProjectCard`, that renders multiple data entries.
- **Props:** Values passed into a component; `ProjectCard` receives `project` and `index`.
- **Conditional rendering:** Rendering markup only when a value exists or an array contains items.
- **Optional content:** Information represented by `null` or an empty array until verified.
- **Semantic article:** An `<article>` representing a complete standalone project entry.
- **Semantic list:** `<ul>` and `<li>` markup that communicates a collection.
- **Array:** An ordered collection used for projects, technologies, and features.
- **`map(...)`:** An array method that turns each data item into JSX.
- **Fragment link:** A link such as `#projects` targeting an element with the matching ID.
- **Alternative text:** A text replacement that communicates useful image content.
- **Visual fallback:** An intentional design shown when no verified screenshot exists.
- **Responsive card basis:** The percentage or clamped width controlling how many carousel cards are visible at each breakpoint.
- **External link:** A link to another website, opened safely here with relationship attributes.
- **Design token:** A reusable CSS variable for colour, spacing, radius, or another visual value.

## 12. Safe practice exercises

1. Change the ApplyWiseAI `summary`, run `npm run typecheck`, inspect it at 320px, and restore the approved wording.
2. Temporarily set one project's `features` to `[]`, confirm the Key features group disappears, then restore the approved feature list.
3. Temporarily change the mobile card basis from `12rem` to `11rem`, compare the compact layout, then restore `12rem`.

Use only clearly labelled practice text and remove it before keeping the milestone.

## 13. Understanding check

1. Why do empty `technologies` and `features` arrays not create empty headings?
2. Which data property gives ApplyWiseAI its Featured project label?
3. What three changes are required to hide Projects without leaving a broken navigation link?
4. Why are unavailable repository and demo actions represented by `null` instead of empty strings?
5. How do `Project`, `ProjectCardProps`, `projects.items.map(...)`, and `selectedProject` work together to supply both cards and dialog content?
