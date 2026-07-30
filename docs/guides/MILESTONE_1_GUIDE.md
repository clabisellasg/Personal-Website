# Milestone 1 Guide: Visual System, Navigation, and Hero

## 1. Milestone purpose

Milestone 1 turns the approved Milestone 0 plan into the first working version of Genesis Clabisellas's portfolio.

It:

- Initializes React, TypeScript, Vite, ESLint, and npm.
- Establishes a reusable global visual system with CSS custom properties.
- Adds accessible desktop and mobile navigation.
- Adds a responsive hero using only verified information.
- Centralizes editable content and link placeholders.
- Deliberately leaves About, Skills, Projects, Experience, Education, Contact, and Footer for later approved milestones.

The result is a frontend-only single page. It has no backend, database, authentication, API, server-dependent form, deployment, resume file, profile link, or photograph.

## 2. Files created or changed

### Application and configuration

| File | Role |
| --- | --- |
| `index.html` | Defines page metadata, the `#root` element, and the module entry path. |
| `package.json` | Defines dependencies and the `dev`, `lint`, `typecheck`, `build`, and `preview` scripts. |
| `package-lock.json` | Locks the exact installed npm dependency versions. |
| `vite.config.ts` | Enables React in Vite with `react()`. |
| `tsconfig.json` | Connects the application and Node TypeScript configurations. |
| `tsconfig.app.json` | Applies strict TypeScript checking to `src/`. |
| `tsconfig.node.json` | Applies TypeScript checking to Vite and lint configuration files. |
| `eslint.config.js` | Configures JavaScript, TypeScript, React Hooks, and React Refresh lint rules. |
| `.gitignore` | Excludes dependencies, build output, local environment files, logs, and generated metadata. |

### Source files

| File | Role |
| --- | --- |
| `src/main.tsx` | Imports `global.css`, finds `#root`, and renders `App` inside `StrictMode`. |
| `src/App.tsx` | Renders the skip link, `SiteHeader`, and `HeroSection` in page order. |
| `src/types/portfolio.ts` | Defines `NavigationItem`, `PortfolioLink`, and `PortfolioContent`. |
| `src/data/portfolio.ts` | Exports `portfolio`, the single source for current personal text, navigation, actions, missing-link placeholders, and snapshot facts. |
| `src/components/layout/SiteHeader.tsx` | Defines `SiteHeader` and its local `NavigationItems` helper. It controls the mobile menu, renders available versus planned navigation, and tracks the active section. |
| `src/components/sections/HeroSection.tsx` | Defines `HeroSection`, the main heading, introduction, action, developer snapshot, and decorative elements. |
| `src/styles/global.css` | Defines the reset, tokens, global styles, component styles, breakpoints, and reduced-motion behavior. |

### Documentation

| File | Change |
| --- | --- |
| `docs/PROJECT_CONTEXT.md` | Records the implemented stack, architecture, decisions, missing information, and Milestone 1 status. |
| `docs/PROJECT_MAP.md` | Replaces the proposed tree with the actual Milestone 1 file tree and relationships. |
| `docs/CUSTOMIZATION_GUIDE.md` | Replaces planned edit locations with exact current properties and selectors. |
| `docs/guides/MILESTONE_1_GUIDE.md` | Provides the complete Milestone 1 implementation and learning guide. |

## 3. How the application loads the navigation and hero

The loading sequence is:

1. The browser opens `index.html`.
2. The `<div id="root">` element provides an empty mounting location.
3. The module script loads `src/main.tsx`.
4. `src/main.tsx` imports `src/styles/global.css` and renders `App`.
5. `src/App.tsx` renders `SiteHeader` before `HeroSection`.
6. `SiteHeader` imports `portfolio` and reads `portfolio.name`, `portfolio.shortName`, and `portfolio.navigation`.
7. `HeroSection` imports the same `portfolio` object and reads the title, introduction, hero actions, and snapshot.

Content and presentation stay separate: text and destinations live in `src/data/portfolio.ts`; component markup lives in `.tsx` files; visual rules live in `src/styles/global.css`.

## 4. Component hierarchy

```text
StrictMode
└── App
    ├── skip link
    ├── SiteHeader
    │   ├── brand link
    │   └── primary navigation
    │       ├── desktop NavigationItems
    │       ├── menu-button
    │       └── mobile NavigationItems, while open
    └── main#main-content
        └── div#home
            └── HeroSection
                ├── decorative grid and glows
                ├── hero content
                └── aside#developer-snapshot
```

`NavigationItems` is kept in `SiteHeader.tsx` because it is small and used only by the desktop and mobile versions of the same navigation. This avoids duplicating the item markup without creating an unnecessary file.

## 5. Important React, TypeScript, and CSS concepts

### React concepts

- **Components:** `SiteHeader` and `HeroSection` are functions that return JSX.
- **State:** `isMenuOpen` stores whether the mobile menu is open. `activeHref` stores the fragment for the section currently below the sticky header.
- **Event handlers:** the menu button's `onClick` toggles the menu. Mobile navigation links use `handleMobileNavigate` to close the overlay before scrolling to the selected section.
- **Effects:** one `useEffect` listens for Escape. Another listens for the `64rem` desktop breakpoint and closes a mobile menu left open during resizing. A third listens for scrolling, resizing, and hash changes and updates the active navigation link through `requestAnimationFrame`.
- **Refs:** `menuButtonRef` lets Escape return keyboard focus to the menu button.
- **Conditional rendering:** `{isMenuOpen && (...)}` adds the mobile panel only when it is open. `{hero.secondaryAction && (...)}` omits the secondary action while its value is `null`.
- **List rendering:** `items.map(...)` and `snapshot.map(...)` create repeated navigation items and definition-list facts.
- **Props:** `NavigationItemsProps` describes the items, active fragment, and optional navigation callback passed into `NavigationItems`.

### TypeScript concepts

- `NavigationItem` permits an actual `href` or `null` and records whether a destination is `available` or `planned`.
- `PortfolioLink` requires both `label` and `href`.
- `PortfolioContent` describes the entire `portfolio` object, including intentionally nullable links.
- `import type` imports shapes for checking without adding runtime JavaScript.
- `PortfolioContent` catches missing, misspelled, or incorrectly shaped content during `npm run typecheck`.

### CSS concepts

- `:root` stores reusable design tokens such as `--color-background`, `--font-sans`, `--space-6`, `--radius-lg`, `--shadow-soft`, `--container-width`, and `--transition-fast`.
- The universal selector reset uses `box-sizing: border-box`.
- `.container` supplies one reusable maximum content width and responsive gutter.
- `clamp()` lets `--text-display`, `--text-lg`, and `--container-gutter` scale between safe minimum and maximum values.
- CSS Grid controls the hero and developer facts; Flexbox controls the header, buttons, and navigation.
- The `40rem` media query improves tablet layout. The `64rem` media query switches to desktop navigation and a two-column hero. The `24rem` maximum-width query protects very narrow layouts.
- `:focus-visible` creates a high-contrast keyboard focus ring without showing it for every pointer click.
- `@media (prefers-reduced-motion: reduce)` disables smooth scrolling and shortens transitions for visitors who request less motion.

## 6. Exact manual customization

### Change the hero text

Open `src/data/portfolio.ts`.

- Change `portfolio.professionalTitle` for the `<h1>`. Keep ` | ` between the two title phrases to retain the visual cyan divider; removing it safely renders the title as one block.
- Change `portfolio.introduction` for the supporting paragraph.
- Change `portfolio.hero.eyebrow` for the small line above the heading.
- Change `portfolio.name` for the brand and developer-card name.
- Change `portfolio.shortName` for both `GC` monograms.

Keep the surrounding quotes and commas. Run `npm run typecheck` afterward.

### Change navigation labels and destinations

Edit the objects inside `portfolio.navigation` in `src/data/portfolio.ts`.

An implemented section uses:

```ts
{ label: 'Home', href: '#home', availability: 'available' }
```

A future section uses:

```ts
{ label: 'About', href: null, availability: 'planned' }
```

To activate a future item, first render a section with the matching `id`, then replace `null` with that fragment destination and change `planned` to `available`. Reorder the objects to reorder both desktop and mobile navigation. Remove an object to remove that item from both.

Available fragment links are collected by `availableSectionLinks` in `SiteHeader.tsx`. Keep their order aligned with the rendered sections. The active-section effect compares each section's top edge with the bottom of the visible navigation area, including the expanded mobile panel, and passes `activeHref` into both navigation versions. The matching link receives `aria-current="location"`; `src/styles/global.css` uses that attribute to draw the existing cyan underline.

### Change buttons and external links

Edit `portfolio.hero.primaryAction` in `src/data/portfolio.ts` to change the visible primary button:

```ts
primaryAction: {
  label: 'View developer snapshot',
  href: '#developer-snapshot',
},
```

`portfolio.hero.secondaryAction` is currently `null`. To show the secondary button, replace `null` with a `PortfolioLink` object containing a short `label` and the complete verified `href`. Copy the object shape used by `primaryAction`, then replace both values. Do not save a sample or guessed URL. To hide the button again, restore `secondaryAction: null`.

The placeholders at `portfolio.links.resume`, `portfolio.links.github`, `portfolio.links.linkedIn`, and `portfolio.links.email` are also `null`. These record verified destinations for future components. Changing one of them alone does not render a button in Milestone 1; point `primaryAction` or `secondaryAction` at the same verified destination when the action should appear.

### Change colours

Open `src/styles/global.css` and edit the custom properties near the top of `:root`.

- Page surfaces: `--color-background`, `--color-background-deep`, `--color-surface`, `--color-surface-raised`
- Text: `--color-text`, `--color-text-muted`, `--color-text-subtle`
- Accent: `--color-accent`, `--color-accent-strong`, `--color-accent-ink`
- Lines: `--color-border`, `--color-border-strong`
- Keyboard focus: `--color-focus`

Keep sufficient contrast between text and its background. Check normal text, planned navigation, the cyan button, and the yellow focus outline after changing colours.

### Change fonts

The first line of `src/styles/global.css` imports Manrope and DM Mono from Google Fonts. `--font-sans` controls normal interface text; `--font-mono` controls labels and technical details.

To use different web fonts:

1. Replace the URL in the existing `@import`.
2. Replace the first family name in `--font-sans` or `--font-mono`.
3. Keep the fallback fonts after the imported family.
4. Verify every requested font weight exists in the new import.

If the font import is removed, the fallbacks continue to work.

### Change spacing and content width

Edit these `:root` properties in `src/styles/global.css`:

- `--space-1` through `--space-9` control reusable spacing.
- `--container-width` controls the wide-desktop content limit.
- `--container-gutter` controls the side space between content and the viewport.
- `--header-height` controls the sticky navigation height, the global anchor offset, and the related hero and section height calculations.

Changing a shared spacing token affects every selector that uses it. Make small changes and check both `20rem` and wide viewports.

### Change hero sizing and layout

In `src/styles/global.css`:

- `.hero` controls minimum viewport height and clipping.
- `.hero__inner` controls grid layout, gap, and vertical padding.
- `.hero__content` controls text width.
- `h1` controls heading width, size, spacing, and line height.
- `.hero__title-divider` controls the cyan separator between the two title phrases.
- `.hero__introduction` controls supporting-text width and line height.
- `.developer-card` controls the visual area's border, background, radius, and shadow.

At `64rem`, `.hero__inner` changes to two columns. Adjust its two `minmax()` values to change the text-to-card ratio. Keep both values flexible to prevent overflow.

### Change mobile navigation behaviour

Interaction logic is in `src/components/layout/SiteHeader.tsx`.

- `isMenuOpen` is the open state.
- The `menu-button` `onClick` toggles the state.
- `handleMobileNavigate` prevents the browser from measuring the target while the overlay is still open, closes the menu, then scrolls to the section on the next animation frame.
- The first `useEffect` closes on Escape and focuses `menuButtonRef`.
- The second `useEffect` closes the mobile panel when the viewport crosses the `64rem` desktop breakpoint.
- `aria-expanded={isMenuOpen}` reports the correct state to assistive technology.
- `aria-controls="mobile-navigation"` connects the button to the panel.

Visual behavior is in `.menu-button`, `.site-nav__mobile`, and `.site-nav__mobile .site-nav__list` in `src/styles/global.css`. The desktop switch is the `@media (min-width: 64rem)` rule. If that breakpoint changes, update the `window.matchMedia('(min-width: 64rem)')` value in `SiteHeader.tsx` to match exactly.

The header remains visible while scrolling because `.site-header` uses `position: sticky` and `top: 0`. The `html` selector uses `scroll-padding-top: var(--header-height)` for smooth fragment navigation. Keep one global offset; adding another `scroll-margin-top` to section targets would stack the offsets and position sections too low.

### Change the photograph or visual area

No photograph is available, so `HeroSection` uses `aside#developer-snapshot`. Safe visual-area changes require no image:

1. Edit `portfolio.snapshot` in `src/data/portfolio.ts` to change verified facts.
2. Edit `.developer-card__monogram` to change the initials tile.
3. Edit `.developer-card`, `.developer-card__body`, and `.developer-card__facts` to change the card layout.
4. Keep `aside` and `aria-labelledby="snapshot-title"` so the visual remains meaningful to assistive technology.

Do not add a generated person, stock portrait, or unrelated image. If Genesis supplies a professional photograph later, treat adding the actual asset path, content type, image markup, alternative text, and responsive CSS as a separate reviewed change.

## 7. Safe changes and caution areas

### Safe changes

- Edit strings and verified values in `src/data/portfolio.ts`.
- Reorder navigation or snapshot objects.
- Adjust colour, spacing, radius, shadow, and content-width tokens in `:root`.
- Refine text widths and hero gaps within the existing responsive grid.
- Restore `secondaryAction` to `null` to hide it safely.

### Be careful

- Do not invent resume, email, GitHub, LinkedIn, education, experience, skills, or project details.
- Do not give a planned navigation item a fake fragment link.
- Keep `portfolio` compatible with `PortfolioContent`.
- Keep the CSS `64rem` breakpoint aligned with the JavaScript `matchMedia` value.
- Do not remove `aria-expanded`, `aria-controls`, the menu button's changing `aria-label`, Escape handling, or focus return.
- Do not remove the `:focus-visible` or reduced-motion rules.
- Do not hand-edit `package-lock.json`; use npm when dependencies intentionally change.
- Do not edit generated `node_modules/` or `dist/`.

Review manual source changes with `git diff` before discarding anything. Existing work is uncommitted, so avoid `git restore` unless the exact loss is intentional.

## 8. Testing commands and browser checks

Run from the repository root:

```powershell
npm install
npm run lint
npm run typecheck
npm run build
```

There is no automated test script in Milestone 1, so do not run `npm test`. Lint checks source rules, type-check validates TypeScript, and build creates production output in `dist/`.

For manual testing:

```powershell
npm run dev
```

Open the exact local URL printed by Vite and check:

1. At approximately 320px wide, there is no horizontal scrollbar and the heading, button, and developer card fit.
2. At mobile and tablet widths, the menu button opens and closes the navigation.
3. The menu button works with Enter and Space.
4. `aria-expanded` changes between `false` and `true`.
5. Escape closes the menu and returns focus to the button.
6. Selecting Home closes the mobile panel.
7. Planned items say `Soon` and do not act like links.
8. At 1024px and wider, desktop navigation replaces the menu button and the hero uses two columns.
9. Tab from the top of the page to confirm the skip link and yellow focus outlines are visible.
10. Activate “View developer snapshot” and confirm the destination exists.
11. Check the browser console for errors.
12. Check the Network panel for missing files. A blocked Google Fonts request should fall back to local fonts without breaking layout.
13. Enable reduced motion in the operating system or browser tools and confirm scrolling is no longer smooth.
14. Scroll through Home, About, and Skills and confirm the cyan underline follows the current section in both desktop and mobile navigation.

## 9. Common problems and likely fixes

- **`npm` is not recognized:** install a supported Node.js release, reopen the terminal, and retry.
- **Dependencies are missing:** run `npm install` from the folder containing `package.json`.
- **A TypeScript error appears after a content edit:** compare the changed object with `PortfolioContent` in `src/types/portfolio.ts`; check required properties, commas, quotes, and `null`.
- **A planned navigation item looks clickable:** confirm its `href` is `null` in `portfolio.navigation`.
- **A new section link does nothing:** confirm the `href` fragment and rendered element `id` match exactly.
- **The mobile menu does not close at desktop width:** confirm both the CSS breakpoint and `matchMedia` string remain `64rem`.
- **The menu stays open or the final section lands too low after selection:** confirm the available anchor still calls `onNavigate` and the mobile `NavigationItems` receives `onNavigate={handleMobileNavigate}`.
- **The indicator stays on Home:** confirm each available navigation `href` matches a rendered section `id`, the navigation order matches the section order, and the active-section scroll effect remains in `SiteHeader.tsx`.
- **The page overflows horizontally:** inspect recent fixed widths; preserve flexible grid tracks and the narrow-layout rules under `@media (max-width: 24rem)`.
- **Fonts look different:** check the Google Fonts request; the design intentionally falls back to Segoe UI and Cascadia Code.
- **The production page is blank:** run `npm run build`, read the first error, and confirm `index.html` still loads `/src/main.tsx`.

## 10. Beginner glossary

- **React:** The library used to create the interface from components.
- **Component:** A reusable function that returns part of the interface.
- **JSX:** HTML-like syntax written inside React TypeScript files.
- **Prop:** A value passed from one component to another.
- **State:** Data a component remembers while the page is open.
- **Effect:** Code that synchronizes a component with something outside React, such as a keyboard event or media query.
- **Ref:** A React object that can point to a real page element.
- **Type:** A TypeScript description of the allowed shape of a value.
- **Union:** A type that allows one of several choices, such as `'available' | 'planned'`.
- **Nullable:** Allowed to contain `null`, which represents an intentionally unavailable value.
- **CSS custom property:** A reusable named CSS value beginning with `--`.
- **Breakpoint:** A viewport width where responsive layout rules change.
- **Semantic HTML:** Elements such as `nav`, `main`, `section`, `aside`, `h1`, and `dl` that communicate structure.
- **Fragment link:** A link beginning with `#` that targets an element `id` on the same page.
- **Focus state:** The visual indication of which interactive control currently receives keyboard input.
- **Build:** The process that checks and prepares source files for production.

## 11. Safe practice exercises

1. Change `portfolio.hero.eyebrow` to another accurate short phrase, run `npm run typecheck`, inspect the page, then restore it.
2. Change `--color-accent` and `--color-accent-strong` to another accessible colour pair, check the primary button and focus states, then use `git diff -- src/styles/global.css` to review the change.
3. Swap the order of Background and Featured build inside `portfolio.snapshot`, confirm the card changes at mobile and desktop widths, then restore the approved order.

## 12. Understanding check

1. Why are planned navigation entries rendered as text with `href: null` instead of links?
2. Which file changes the hero's words, and which file changes its appearance?
3. How do `isMenuOpen`, `aria-expanded`, and `menuButtonRef` work together?
4. Why must the `64rem` value stay synchronized between CSS and `SiteHeader.tsx`?
5. What does `secondaryAction: null` do, and what type must replace it to display the secondary button?
