# Portfolio Customization Quick Reference

Use this page for common edits. For detailed explanations and exact examples, see the [Milestone 1 Guide](./guides/MILESTONE_1_GUIDE.md).

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
| Add verified resume, GitHub, LinkedIn, or email destinations | `src/data/portfolio.ts`, `portfolio.links` |
| Change colors, fonts, spacing, borders, shadows, or content width | `src/styles/global.css`, the custom properties in `:root` |
| Change hero sizing or layout | `src/styles/global.css`, `.hero`, `.hero__inner`, `.hero__content`, and the media queries |
| Change the mobile menu's visual behavior | `src/styles/global.css`, `.menu-button`, `.site-nav__mobile`, and the `64rem` breakpoint |
| Change the mobile menu's interaction behavior | `src/components/layout/SiteHeader.tsx`, the `isMenuOpen` state, event handlers, and effects |
| Add a verified photograph later | Add the file under `public/assets/images/`, add its path to `src/data/portfolio.ts`, render it in `HeroSection.tsx`, and adjust `.developer-card` styles |

## Navigation availability

Each item in `portfolio.navigation` has:

- `availability: 'available'` and a real `href` when its destination exists.
- `availability: 'planned'` and `href: null` while its section is not implemented.

Do not give a planned item a fake `#section` destination. When a later section is added, create its matching `id`, change the navigation item's `href`, and set its availability to `available`.

## External links and resume

`portfolio.links.resume`, `github`, `linkedIn`, and `email` are currently `null` because no verified destinations are available. Add only confirmed destinations:

- Use a complete `https://` URL for profiles.
- Use a `mailto:` link for email.
- Put a supplied resume in `public/assets/resume/` and use its public path, such as `/assets/resume/Genesis-Clabisellas-Resume.pdf`.
- Add a visible button only after the destination exists.

## Content safety

- Do not replace `null` with an invented link.
- Do not add education, work history, skills, project outcomes, statistics, or qualifications without an authoritative source.
- Keep the title and introduction aligned with `docs/PROJECT_CONTEXT.md`.
- After any edit, run `npm run lint`, `npm run typecheck`, and `npm run build`.
