# Portfolio Customization Quick Reference

Use this page for common edits. See the [Milestone 1 Guide](./guides/MILESTONE_1_GUIDE.md) for navigation and hero details, and the [Milestone 2 Guide](./guides/MILESTONE_2_GUIDE.md) for complete About and Skills instructions.

## Current common edits

| Change | File and exact location |
| --- | --- |
| Change the displayed name or initials | `src/data/portfolio.ts`, `portfolio.name` and `portfolio.shortName` |
| Change the main hero title | `src/data/portfolio.ts`, `portfolio.professionalTitle` |
| Change the hero introduction | `src/data/portfolio.ts`, `portfolio.introduction` |
| Change the hero eyebrow | `src/data/portfolio.ts`, `portfolio.hero.eyebrow` |
| Change hero or snapshot button text and destination | `src/data/portfolio.ts`, `portfolio.hero.primaryAction` and `portfolio.hero.secondaryAction` |
| Change navigation labels, order, or destinations | `src/data/portfolio.ts`, `portfolio.navigation` |
| Change snapshot facts | `src/data/portfolio.ts`, `portfolio.snapshot` |
| Change the About label, heading, or biography | `src/data/portfolio.ts`, `portfolio.about.label`, `heading`, and `paragraphs` |
| Add, edit, remove, or reorder About highlights | `src/data/portfolio.ts`, `portfolio.about.highlights` |
| Change the Skills label, heading, or introduction | `src/data/portfolio.ts`, `portfolio.skills.label`, `heading`, and `introduction` |
| Add, edit, remove, or reorder skill categories | `src/data/portfolio.ts`, `portfolio.skills.groups` |
| Add, edit, remove, or reorder individual skills | `src/data/portfolio.ts`, the relevant category's `skills` array |
| Reorder or hide About and Skills | `src/App.tsx`; keep matching navigation availability synchronized in `src/data/portfolio.ts` |
| Add verified resume, GitHub, LinkedIn, or email destinations | `src/data/portfolio.ts`, `portfolio.links` |
| Change colors, fonts, spacing, borders, shadows, or content width | `src/styles/global.css`, the custom properties in `:root` |
| Change hero sizing or layout | `src/styles/global.css`, `.hero`, `.hero__inner`, `.hero__content`, and the media queries |
| Change the mobile menu's visual behavior | `src/styles/global.css`, `.menu-button`, `.site-nav__mobile`, and the `64rem` breakpoint |
| Change the mobile menu's interaction behavior | `src/components/layout/SiteHeader.tsx`, the `isMenuOpen` state, event handlers, and effects |
| Change active-section indicator behavior | `src/components/layout/SiteHeader.tsx`, `availableSectionLinks`, `activeHref`, and the active-section effect; style it with `a.site-nav__link[aria-current='location']` in `src/styles/global.css` |
| Change sticky-header or anchor-scroll behavior | `src/styles/global.css`, `.site-header`, `html`, `--header-height`, and `.section` |
| Add a verified photograph later | Add the file under `public/assets/images/`, add its path to `src/data/portfolio.ts`, render it in `HeroSection.tsx`, and adjust `.developer-card` styles |

## Navigation availability

Each item in `portfolio.navigation` has:

- `availability: 'available'` and a real `href` when its destination exists.
- `availability: 'planned'` and `href: null` while its section is not implemented.

Do not give a planned item a fake `#section` destination. When a later section is added, create its matching `id`, change the navigation item's `href`, and set its availability to `available`.

About and Skills are currently available at `#about` and `#skills`.

Available fragment links also participate in the active-section indicator. Keep their order aligned with the rendered section order so the cyan underline and `aria-current="location"` identify the section currently below the sticky header.

## About and Skills

- Biography paragraphs and highlights render automatically from their arrays.
- Each skill category requires a `title` and a non-empty `skills` array.
- Reorder complete array entries to change display order.
- Remove an entire category instead of leaving `skills: []`.
- The resume is still unavailable, so do not add technical skills beyond verified sources.

See [MILESTONE_2_GUIDE.md](./guides/MILESTONE_2_GUIDE.md) for exact add, remove, reorder, hide, restore, style, and testing instructions.

## External links and resume

`portfolio.links.resume`, `github`, `linkedIn`, and `email` are currently `null` because no verified destinations are available. Add only confirmed destinations:

- Use a complete `https://` URL for profiles.
- Use a `mailto:` link for email.
- Put a supplied resume in `public/assets/resume/` and use its public path, such as `/assets/resume/Genesis-Clabisellas-Resume.pdf`.
- Add a visible button only after the destination exists.

## Content safety

- Do not replace `null` with an invented link.
- Do not add education, work history, additional skills, project outcomes, statistics, or qualifications without an authoritative source.
- Keep the title and introduction aligned with `docs/PROJECT_CONTEXT.md`.
- After any edit, run `npm run lint`, `npm run typecheck`, and `npm run build`.
