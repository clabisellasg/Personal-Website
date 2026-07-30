# Milestone 2 Guide: About Me and Technical Skills

## 1. Milestone purpose

Milestone 2 extends the approved Milestone 1 portfolio with two recruiter-facing sections:

- About Me introduces Genesis's junior software-development direction, data-analysis background, practical-software focus, and ApplyWiseAI work.
- Technical Skills presents only capabilities verified by the available project documentation.

The milestone also activates the About and Skills navigation destinations. Projects, Experience, Education, Resume, Contact, Footer, and new animations remain outside this milestone.

No resume file was available in the request attachments or repository. For that reason, the Skills section currently contains only the documented Data analysis capability. A code comment in `src/data/portfolio.ts` marks where further resume-verified categories can be added.

## 2. Exact files created or changed

### Created

| File | Purpose |
| --- | --- |
| `src/components/sections/AboutSection.tsx` | Renders the About heading, biography paragraphs, and highlight list from `portfolio.about`. |
| `src/components/sections/SkillsSection.tsx` | Renders the Skills heading and skill-category lists from `portfolio.skills`; it also defines the local `SkillGroup` component. |
| `docs/guides/MILESTONE_2_GUIDE.md` | Documents the actual Milestone 2 implementation, customization points, testing, and learning material. |

### Changed

| File | Change |
| --- | --- |
| `src/types/portfolio.ts` | Adds `AboutHighlight`, `SkillGroup`, and the `about` and `skills` shapes within `PortfolioContent`. |
| `src/data/portfolio.ts` | Adds verified About and Skills content and changes About and Skills navigation items to real fragment destinations. |
| `src/App.tsx` | Imports and renders `AboutSection` and `SkillsSection` after `HeroSection`. |
| `src/components/layout/SiteHeader.tsx` | Tracks the section currently below the sticky header and marks its desktop and mobile link with `aria-current="location"`. |
| `src/styles/global.css` | Adds shared section styling, About layout and cards, Skills layout and tags, responsive rules, the active-link indicator, and removes the inherited fixed body minimum width that caused narrow-screen overflow. |
| `docs/PROJECT_CONTEXT.md` | Records Milestone 1 approval, Milestone 2 implementation, the missing resume, and Milestone 3 as the proposed next task. |
| `docs/PROJECT_MAP.md` | Adds the new components and their content and rendering relationships. |
| `docs/CUSTOMIZATION_GUIDE.md` | Adds concise About and Skills edit locations and links here for detail. |

No dependencies or project configuration files changed.

## 3. How the files connect

```text
src/types/portfolio.ts
└── describes the content accepted by src/data/portfolio.ts

src/data/portfolio.ts
├── supplies portfolio.about to AboutSection
├── supplies portfolio.skills to SkillsSection
└── supplies #about and #skills to SiteHeader

src/App.tsx
├── renders HeroSection
├── renders AboutSection
└── renders SkillsSection

src/styles/global.css
└── styles all three sections and their responsive layouts
```

`SiteHeader` already renders `portfolio.navigation`, so changing the About and Skills entries from `href: null` to `href: '#about'` and `href: '#skills'` creates working desktop and mobile links. It now also derives the available fragment links and updates `activeHref` as the page scrolls, so the existing cyan indicator follows the section below the sticky header. The activation line includes the expanded mobile panel when it is open. Mobile selection closes that overlay before scrolling on the next animation frame, preventing the menu from affecting the final target position.

## 4. How the page loads About and Skills

The browser loading path remains:

1. `index.html` loads `src/main.tsx`.
2. `src/main.tsx` imports `src/styles/global.css` and renders `App`.
3. `src/App.tsx` renders `SiteHeader`, then `HeroSection`, `AboutSection`, and `SkillsSection`.
4. Each section imports the `portfolio` object from `src/data/portfolio.ts`.
5. `AboutSection` reads `portfolio.about`.
6. `SkillsSection` reads `portfolio.skills`.

The current main-page order in `src/App.tsx` is:

```text
HeroSection
AboutSection
SkillsSection
```

## 5. About and Skills content flow

### About flow

`portfolio.about` contains:

- `label` for the small section label.
- `heading` for the section's `<h2>`.
- `paragraphs`, an array rendered with `about.paragraphs.map(...)`.
- `highlights`, an array rendered as the accessible `.about-section__highlights` list.

Each highlight matches the `AboutHighlight` type and requires `title` and `description`.

### Skills flow

`portfolio.skills` contains:

- `label` for the small section label.
- `heading` for the section's `<h2>`.
- `introduction` for the supporting text.
- `groups`, an array of skill categories.

Each group matches the `SkillGroup` type and requires `title` and `skills`. `SkillsSection` maps the groups into local `SkillGroup` components. Each component maps its `group.skills` array into a nested semantic list.

This makes content changes data-only in most cases; the component markup does not need to be copied for each paragraph, highlight, category, or skill.

## 6. Relevant component hierarchy

```text
App
├── SiteHeader
├── HeroSection
├── AboutSection
│   ├── section header
│   ├── biography paragraphs
│   └── About highlights list
└── SkillsSection
    ├── section header and introduction
    └── Skills groups list
        └── SkillGroup
            └── individual skills list
```

Heading levels remain logical:

- The hero supplies the page's single `<h1>`.
- About and Skills each use `<h2>`.
- About highlights and skill groups use `<h3>`.

## 7. Important React, TypeScript, and CSS concepts

### React

- **Data-driven rendering:** `map(...)` converts content arrays into JSX without duplicating markup.
- **Component props:** `SkillGroupProps` describes the `group` and `index` passed into `SkillGroup`.
- **Component reuse:** one `SkillGroup` component renders every category in `portfolio.skills.groups`.
- **Keys:** paragraph text, highlight titles, group titles, and skill names act as stable `key` values for their lists.
- **Composition:** `App` controls page order by composing section components.

### TypeScript

- `AboutHighlight` ensures every highlight has a `title` and `description`.
- `SkillGroup` ensures every category has a `title` and a `string[]` named `skills`.
- `PortfolioContent` requires complete `about` and `skills` objects.
- `SkillGroup as SkillGroupData` aliases the imported type so it cannot be confused with the local React component named `SkillGroup`.
- Type checking catches missing properties, incorrect arrays, and invalid value types before production build.

### CSS

- `.section` supplies consistent vertical spacing, top separation, and a viewport-aware minimum height that lets the final section align naturally.
- `.site-header` uses `position: sticky` and `top: 0`, while `html` uses `scroll-padding-top: var(--header-height)` as the single fragment-navigation offset.
- `.section-header`, `.section-label`, `.section-title`, and `.section-introduction` form a shared heading system.
- `.about-section__layout` and `.section-header--split` use CSS Grid to change from one column to multiple columns.
- `.skills-section__grid` uses `repeat(auto-fit, minmax(min(100%, 16rem), 1fr))` so future categories form responsive columns without exceeding the viewport.
- `.skill-group__list` uses Flexbox and wrapping for skill tags.
- `overflow-wrap: anywhere` on `.skill-group__list li` protects narrow screens from long skill names.
- The `40rem` media query creates the tablet highlight grid.
- The `64rem` media query creates the wide About and Skills header layouts.
- The `24rem` maximum-width query reduces card padding.

## 8. Exact manual customization

### Change the About biography

Open `src/data/portfolio.ts` and edit the strings inside `portfolio.about.paragraphs`.

- Change a string to edit a paragraph.
- Add another quoted string with a comma to add a paragraph.
- Delete one complete string to remove a paragraph.
- Move strings to change paragraph order.

`AboutSection` automatically renders every array entry as a `<p>`.

### Add, edit, remove, or reorder highlights

Edit `portfolio.about.highlights` in `src/data/portfolio.ts`.

Each object requires:

```ts
{
  title: 'Practical software',
  description: 'Focused on applications built around clear, useful problems.',
},
```

- Edit either string to change a highlight.
- Copy one complete object to add a verified highlight.
- Delete one complete object to remove it.
- Move complete objects to reorder them.

The displayed `01`, `02`, and `03` values are calculated from array order by `String(index + 1).padStart(2, '0')`; they do not need manual editing.

### Add a skill category

Add a new object inside `portfolio.skills.groups` in `src/data/portfolio.ts`:

```ts
{
  title: 'Data and analytics',
  skills: ['Data analysis'],
},
```

Replace both example values with verified content if creating a different category. Do not add a category until an authoritative source supports its skills.

### Remove a skill category

Delete the category's complete object from `portfolio.skills.groups`, including its `title`, `skills`, braces, and trailing comma.

Do not leave an object with `skills: []`; remove the whole category instead.

### Add, edit, remove, or reorder skills

Inside a category's `skills` array:

- Add a quoted string to add a verified skill.
- Edit the text inside a quoted string to rename it.
- Delete the complete quoted string to remove it.
- Move strings to change their display order.

`SkillGroup` automatically renders the array as `.skill-group__list`.

### Change section headings

In `src/data/portfolio.ts`:

- `portfolio.about.label` changes `01 / About me`.
- `portfolio.about.heading` changes the About `<h2>`.
- `portfolio.skills.label` changes `02 / Technical skills`.
- `portfolio.skills.heading` changes the Skills `<h2>`.
- `portfolio.skills.introduction` changes the Skills supporting paragraph.

Keep headings concise so `.section-title` remains balanced on narrow screens.

### Reorder About and Skills

In `src/App.tsx`, move the complete `<AboutSection />` and `<SkillsSection />` lines.

The approved order is:

```tsx
<AboutSection />
<SkillsSection />
```

Moving `<SkillsSection />` above `<AboutSection />` reverses them. If the order changes, also update `portfolio.about.label`, `portfolio.skills.label`, `docs/PROJECT_MAP.md`, and the navigation order in `portfolio.navigation`.

### Hide and restore About

To hide About:

1. Remove `<AboutSection />` from `src/App.tsx`.
2. Remove the `AboutSection` import from the same file.
3. Change the About navigation entry in `portfolio.navigation` back to `href: null` and `availability: 'planned'`.

To restore it, restore the import, `<AboutSection />`, and `{ label: 'About', href: '#about', availability: 'available' }`.

### Hide and restore Skills

To hide Skills:

1. Remove `<SkillsSection />` from `src/App.tsx`.
2. Remove the `SkillsSection` import from the same file.
3. Change the Skills navigation entry in `portfolio.navigation` back to `href: null` and `availability: 'planned'`.

To restore it, restore the import, `<SkillsSection />`, and `{ label: 'Skills', href: '#skills', availability: 'available' }`.

### Change card and tag colours

Open `src/styles/global.css`.

- `.about-highlight` controls About-card border and background.
- `.skill-group` controls skill-card border, background, and shadow.
- `.skill-group__list li` controls skill-tag border, background, and text.
- `--color-surface`, `--color-border`, `--color-border-strong`, `--color-text-muted`, and `--color-accent-strong` provide the shared palette.

Use the existing tokens where possible and keep text contrast sufficient.

### Adjust spacing, columns, and mobile layout

In `src/styles/global.css`:

- `.section` controls section padding.
- `.site-header` controls whether the navigation remains sticky.
- `--header-height` controls both the real header height and the global anchor offset.
- `.section-header` controls the gap below headings.
- `.about-section__layout` controls the biography-to-highlights layout.
- `.about-section__highlights` controls highlight columns and gaps.
- `.skills-section__grid` controls category columns and gaps.
- `.about-highlight` and `.skill-group` control card padding.
- `.skill-group__list` controls spacing and wrapping between tags.

Tablet layout begins in `@media (min-width: 40rem)`. Wide layout begins in `@media (min-width: 64rem)`. Narrow-card padding changes in `@media (max-width: 24rem)`.

Keep `min(100%, 16rem)` inside `.skills-section__grid` so a future long category cannot force horizontal overflow.

## 9. Safe changes and caution areas

### Safe changes

- Edit verified strings inside `portfolio.about`.
- Reorder complete biography, highlight, category, or skill entries.
- Adjust shared spacing and palette tokens.
- Change grid ratios while retaining flexible `minmax(...)` values.
- Hide a section only when its navigation item is also changed back to planned.

### Use caution

- The resume is still missing. Do not add programming languages, frameworks, databases, tools, platforms, proficiency levels, or experience claims from memory or assumption.
- Do not add an empty skill category.
- Keep `#about` synchronized between `portfolio.navigation` and `AboutSection`.
- Keep `#skills` synchronized between `portfolio.navigation` and `SkillsSection`.
- Keep one page-level `<h1>` and use `<h2>` for sections and `<h3>` for their items.
- Preserve the outer and inner `<ul>` elements in `SkillsSection`; they communicate category and skill structure without relying on colour.
- Do not hand-edit generated `dist/` output.
- Update `PortfolioContent` if the shape of `portfolio.about` or `portfolio.skills` intentionally changes.

## 10. Exact testing commands and browser checks

Run from the repository root:

```powershell
npm run lint
npm run typecheck
npm run build
```

There is no automated test script or test file in Milestone 2.

Start a manual preview with:

```powershell
npm run dev
```

Use the exact local URL printed by Vite and check:

1. Select About and Skills in desktop navigation; each link should reach the matching heading.
2. Scroll down and confirm the navigation header remains visible at the top.
3. At mobile width, open the menu, select About and Skills, and confirm the menu closes after each selection.
4. Confirm each selected section starts immediately below the sticky header and its heading is fully visible.
5. Press Escape while the mobile menu is open and confirm focus returns to the menu button.
6. Confirm Projects, Experience, Education, and Contact still say `Soon` and are not links.
7. At approximately 320px, confirm there is no horizontal scrollbar and all biography text, cards, and tags wrap.
8. At approximately 768px, confirm the About highlights form three readable columns.
9. At 1024px and wider, confirm About uses a two-column layout and desktop navigation is visible.
10. At a wide-desktop size, confirm the Skills heading and introduction form two columns.
11. Confirm the heading order is one `<h1>`, followed by section `<h2>` elements and item `<h3>` elements.
12. Check the console for errors and warnings.
13. Scroll through Home, About, and Skills and confirm only the current section's link has the cyan underline and `aria-current="location"` on desktop and in the mobile menu.
13. Check every fragment link for a real matching `id`.
14. Confirm no Projects, Experience, Education, Resume, Contact, or Footer section is rendered.

## 11. Common problems and likely fixes

- **About or Skills navigation does nothing:** match `href: '#about'` with `id="about"` or `href: '#skills'` with `id="skills"`.
- **The mobile menu stays open after selecting a section:** confirm the item has `availability: 'available'`; available links already receive `onNavigate`.
- **Type checking reports a missing property:** compare the edited object with `AboutHighlight`, `SkillGroup`, or `PortfolioContent` in `src/types/portfolio.ts`.
- **A skill category is blank:** add at least one verified string to `skills`, or remove the complete category.
- **A long skill causes overflow:** keep `max-width: 100%` and `overflow-wrap: anywhere` on `.skill-group__list li`.
- **Cards remain in one column on a wide screen:** confirm the relevant `40rem` or `64rem` media rule still exists.
- **A section lands too high or too low:** keep `scroll-padding-top: var(--header-height)` on `html`, keep `.site-header` at the same `--header-height`, and do not add a second `scroll-margin-top` offset to the target.
- **The header stops sticking:** keep `position: sticky`, `top: 0`, and the existing `z-index` on `.site-header`; avoid placing it inside an ancestor with scrolling overflow.
- **The indicator stays on Home:** confirm `portfolio.navigation` contains the available section fragments in rendered order and that those fragments exactly match the section IDs.
- **Content appears in the wrong order:** check component order in `src/App.tsx`, array order in `src/data/portfolio.ts`, and the documented order in `docs/PROJECT_MAP.md`.
- **Lint rejects a removed component:** remove its now-unused import from `src/App.tsx`.

## 12. Beginner glossary

- **Data-driven component:** A component whose repeated content comes from arrays or objects instead of copied markup.
- **Nested list:** A list inside another list; here, categories contain lists of individual skills.
- **Props:** Values passed into a React component; `SkillGroup` receives `group` and `index`.
- **Type alias:** A named TypeScript shape such as `AboutHighlight` or `SkillGroup`.
- **Import alias:** A renamed import; `SkillGroupData` distinguishes the type from the React component.
- **Array:** An ordered collection of values surrounded by square brackets.
- **Object:** A group of named properties surrounded by braces.
- **`map(...)`:** An array method that transforms each data item into rendered JSX.
- **Key:** A stable value React uses to track an item in a rendered list.
- **Semantic list:** `<ul>` and `<li>` markup that communicates related items to browsers and assistive technology.
- **Fragment link:** A link such as `#about` that targets a matching element `id`.
- **Responsive grid:** A layout whose columns change according to available width.
- **`auto-fit`:** A CSS Grid instruction that fits as many usable columns as the container allows.
- **`minmax(...)`:** A CSS Grid function that sets flexible minimum and maximum track sizes.
- **Overflow:** Content extending beyond the viewport and potentially creating unwanted horizontal scrolling.

## 13. Safe practice exercises

1. Swap the first two objects in `portfolio.about.highlights`, run `npm run typecheck`, inspect the numbering, then restore the approved order.
2. Temporarily add a second verified skill string to the existing `skills` array, inspect tag wrapping at 320px, then remove the practice value.
3. Change the gap in `.skills-section__grid` from `var(--space-4)` to `var(--space-5)`, compare tablet and desktop layouts, then restore it.

## 14. Understanding check

1. Why do About and Skills navigation links work without changing `SiteHeader.tsx`?
2. What is the difference between the `SkillGroup` TypeScript type and the `SkillGroup` React component?
3. Why are skill categories and skills represented as nested arrays and lists?
4. Which three files must stay synchronized when a section's `id` or navigation destination changes?
5. Why does the Skills section currently list only Data analysis?
