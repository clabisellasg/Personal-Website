# Portfolio Customization Quick Reference

Use this page for common edits. See the [Milestone 1 Guide](./guides/MILESTONE_1_GUIDE.md) for navigation and hero details, the [Milestone 2 Guide](./guides/MILESTONE_2_GUIDE.md) for About and Skills, the [Milestone 3 Guide](./guides/MILESTONE_3_GUIDE.md) for Featured Projects, and the [Milestone 4 Guide](./guides/MILESTONE_4_GUIDE.md) for Experience, Education, Resume, Contact, and Footer.

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
| Change Projects section headings or introduction | `src/data/portfolio.ts`, `portfolio.projects.label`, `heading`, and `introduction` |
| Add, edit, remove, or reorder projects | `src/data/portfolio.ts`, `portfolio.projects.items` |
| Change a project's technologies or features | `src/data/portfolio.ts`, the project's `technologies` and `features` arrays |
| Mark a project as featured | `src/data/portfolio.ts`, the project's `featured` boolean |
| Add or hide repository and demo actions | `src/data/portfolio.ts`, the project's `repository` and `liveDemo`; use `null` when unavailable |
| Add or replace a project screenshot | Store the verified file under `public/assets/projects/`, then update the project's `image.src` and accurate `image.alt` |
| Change carousel card widths, snapping, scrollbar, or control styles | `src/styles/global.css`, `.projects-carousel__track`, `.project-card`, and `.projects-carousel__controls` |
| Change carousel wheel, drag, arrow, or keyboard behavior | `src/components/sections/ProjectsSection.tsx`, the track handlers and `scrollByCard` |
| Change project popup layout or behavior | `src/components/sections/ProjectsSection.tsx`, `ProjectDialog` and its dialog effect; styles are under `.project-dialog*` in `src/styles/global.css` |
| Add, edit, remove, or reorder experience | `src/data/portfolio.ts`, `portfolio.experience.items` |
| Add, edit, remove, or reorder education | `src/data/portfolio.ts`, `portfolio.education.items` |
| Replace the resume PDF | Replace `public/assets/resume/genesis-clabisellas-resume.pdf`; keep `resumeLink.href` and `portfolio.resume.downloadFilename` synchronized if the filename changes |
| Change the Resume section copy | `src/data/portfolio.ts`, `portfolio.resume` |
| Change email, GitHub, Facebook, or phone numbers | `src/data/portfolio.ts`, the matching link constant, `portfolio.links`, and `portfolio.contact.methods` |
| Add LinkedIn after verification | Add a verified link in `src/data/portfolio.ts`, assign it to `portfolio.links.linkedIn`, and add one matching `portfolio.contact.methods` entry |
| Hide an unavailable contact method | Remove its complete object from `portfolio.contact.methods` and set the corresponding `portfolio.links` value to `null` |
| Change the Contact section message | `src/data/portfolio.ts`, `portfolio.contact.heading` and `portfolio.contact.introduction` |
| Change footer text or back-to-top label | `src/data/portfolio.ts`, `portfolio.footer`; footer structure is in `src/components/layout/SiteFooter.tsx` |
| Change profile cards, Resume, Contact, or Footer layout | `src/styles/global.css`, `.profile-*`, `.resume-*`, `.contact-*`, and `.site-footer*` selectors |
| Reorder or hide page sections | `src/App.tsx`; keep matching navigation availability synchronized in `src/data/portfolio.ts` |
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

About, Skills, Projects, Experience, Education, Resume, and Contact are currently available at `#about`, `#skills`, `#projects`, `#experience`, `#education`, `#resume`, and `#contact`.

Available fragment links also participate in the active-section indicator. Keep their order aligned with the rendered section order so the cyan underline and `aria-current="location"` identify the section currently below the sticky header.

## About and Skills

- Biography paragraphs and highlights render automatically from their arrays.
- Each skill category requires a `title` and a non-empty `skills` array.
- Reorder complete array entries to change display order.
- Remove an entire category instead of leaving `skills: []`.
- Keep Technical Skills changes separately reviewed even when another resume version lists additional technologies.

See [MILESTONE_2_GUIDE.md](./guides/MILESTONE_2_GUIDE.md) for exact add, remove, reorder, hide, restore, style, and testing instructions.

## Featured Projects

- Project cards render automatically from `portfolio.projects.items`.
- Cards are intentionally compact and display only each project's `title`; summaries, descriptions, technologies, features, images, and links belong in the dialog.
- Each card is the direct `.project-card__button` click target. Do not replace it with an invisible overlay or let track dragging capture card pointer events.
- Cards stay in one horizontal, non-wrapping row and use touch, wheel, drag, keyboard, and desktop arrow navigation.
- Activating a card opens a native dialog generated from the same project object; content is not duplicated.
- The dialog locks background scrolling, closes by button, Escape, or backdrop click, and returns focus to its card.
- The current selection contains ApplyWiseAI, Pawfect Match, and Student Performance Predictor.
- Descriptions, technologies, and features stay at the high level supported by public repository documentation.
- Empty `technologies` and `features` arrays hide their complete groups.
- `null` status, repository, demo, and image values do not create broken public elements.
- `featured: true` gives a project the full-width featured layout.
- Add only verified project claims, URLs, and screenshots. Repository and demo actions are intentionally `null` in the current milestone.

See [MILESTONE_3_GUIDE.md](./guides/MILESTONE_3_GUIDE.md) for exact project fields, add/remove/reorder steps, screenshot guidance, link handling, layout changes, and testing instructions.

## Experience, Education, Resume, Contact, and Footer

- Experience and education render from ordered arrays in `portfolio.experience.items` and `portfolio.education.items`.
- Move complete objects to reorder them; delete complete objects to remove them.
- `ExperienceSection` and `EducationSection` return `null` when their arrays are empty.
- The verified resume lives at `public/assets/resume/genesis-clabisellas-resume.pdf`.
- `resumeLink` supplies the same public path to `portfolio.links.resume` and `portfolio.resume.download`.
- Email uses `mailto:`, phone numbers use `tel:`, and GitHub and Facebook use complete `https://` URLs.
- GitHub and Facebook open with `target="_blank"` and `rel="noopener noreferrer"`; email and phone links stay in the current browsing context.
- LinkedIn remains `null` and is not rendered.
- `SiteFooter` calculates the current year with `new Date().getFullYear()`.

See [MILESTONE_4_GUIDE.md](./guides/MILESTONE_4_GUIDE.md) for exact fields, safe asset replacement, section hiding/restoration, layout changes, and verification steps.

## Content safety

- Do not replace `null` with an invented link.
- Do not add education, work history, additional skills, project outcomes, statistics, qualifications, or contact methods without an authoritative source.
- Keep the title and introduction aligned with `docs/PROJECT_CONTEXT.md`.
- After any edit, run `npm run lint`, `npm run typecheck`, and `npm run build`.
