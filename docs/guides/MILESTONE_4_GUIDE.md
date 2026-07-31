# Milestone 4 Guide: Profile, Resume, and Contact

## 1. Milestone purpose

Milestone 4 completes the portfolio's core recruiter-facing information after Featured Projects:

1. Experience
2. Education
3. Resume
4. Contact
5. Footer

The implementation uses only information verified by the unchanged resume PDF:

- Data Analyst (Intern) at Veritacore Philippines Inc.
- January 2026 through April 2026
- Cebu, Philippines
- Bachelor of Science in Information Technology
- Cebu Institute of Technology - University
- Expected May 2026
- `clabisellasg@gmail.com`
- `https://github.com/clabisellasg`
- `https://www.facebook.com/GenesisMeOfficial/`
- `+63 943 500 9727`
- `+65 8401 1431`

LinkedIn is not rendered because no verified LinkedIn URL is available. The explicitly approved Philippines and Singapore phone numbers are published as `tel:` links. This milestone does not add a contact form, backend, email service, animation system, deployment, or Milestone 5 work.

## 2. Exact files created or changed

### Created

| File | Purpose |
| --- | --- |
| `src/components/layout/SiteFooter.tsx` | Renders the semantic footer, current year, name, note, and back-to-top link. |
| `src/components/sections/ExperienceSection.tsx` | Maps verified work-history data into semantic experience entries. |
| `src/components/sections/EducationSection.tsx` | Maps verified education data into semantic education entries. |
| `src/components/sections/ResumeSection.tsx` | Renders the verified resume download call-to-action when a download exists. |
| `src/components/sections/ContactSection.tsx` | Maps verified contact methods into accessible links. |
| `public/assets/resume/genesis-clabisellas-resume.pdf` | The verified resume PDF copied unchanged from its source. |
| `docs/guides/MILESTONE_4_GUIDE.md` | This implementation, customization, testing, and learning guide. |

### Changed

| File | Change |
| --- | --- |
| `src/types/portfolio.ts` | Adds `ExperienceEntry`, `EducationEntry`, `ContactMethod`, and the Milestone 4 section shapes in `PortfolioContent`. |
| `src/data/portfolio.ts` | Adds verified link constants, activates navigation, and stores Experience, Education, Resume, Contact, and Footer content. |
| `src/App.tsx` | Renders the new sections after Projects and places `SiteFooter` after `main`. |
| `src/components/layout/SiteHeader.tsx` | Tracks the new available navigation destinations and hides the future-section note when no planned item remains. |
| `src/styles/global.css` | Adds responsive profile cards, Resume panel, Contact links, Footer, focus, wrapping, and breakpoint rules. |
| `docs/PROJECT_CONTEXT.md` | Records Milestone 3 approval, Milestone 4 implementation, verified facts, missing LinkedIn, and Milestone 5 as proposed next work. |
| `docs/PROJECT_MAP.md` | Adds the new components, asset, page order, and data relationships. |
| `docs/CUSTOMIZATION_GUIDE.md` | Adds concise Milestone 4 editing locations and links to this guide. |

No package or configuration file changes are required.

## 3. How the files connect

```text
src/types/portfolio.ts
└── defines ExperienceEntry, EducationEntry, ContactMethod,
    and PortfolioContent milestone sections

src/data/portfolio.ts
├── defines resumeLink, githubLink, emailLink, facebookLink,
│   phonePhilippinesLink, and phoneSingaporeLink
├── activates #experience, #education, #resume, and #contact
├── stores portfolio.experience.items
├── stores portfolio.education.items
├── stores portfolio.resume
├── stores portfolio.contact.methods
└── stores portfolio.footer

src/App.tsx
├── renders ExperienceSection after ProjectsSection
├── renders EducationSection after ExperienceSection
├── renders ResumeSection after EducationSection
├── renders ContactSection after ResumeSection
└── renders SiteFooter after main

public/assets/resume/genesis-clabisellas-resume.pdf
└── is served by Vite at /assets/resume/genesis-clabisellas-resume.pdf

src/styles/global.css
└── styles all Milestone 4 components and responsive states
```

## 4. How Milestone 4 loads on the page

`src/main.tsx` renders `App`. `App` imports and renders the Milestone 4 components in this order:

```text
ProjectsSection
ExperienceSection
EducationSection
ResumeSection
ContactSection
SiteFooter
```

Each section imports the central `portfolio` object from `src/data/portfolio.ts`.

- `ExperienceSection` reads `portfolio.experience`.
- `EducationSection` reads `portfolio.education`.
- `ResumeSection` reads `portfolio.resume`.
- `ContactSection` reads `portfolio.contact`.
- `SiteFooter` reads `portfolio.name` and `portfolio.footer`.

No component fetches data from a server. All content is compiled into the static frontend.

## 5. Central content flow

### Experience

`portfolio.experience.items` is an ordered `ExperienceEntry[]`.

`ExperienceSection` calls `experience.items.map(...)`. Each object is passed to `ExperienceCard`, which renders:

- role
- employer
- location when non-null
- start and end dates
- responsibilities when the array is non-empty

If the complete `items` array is empty, `ExperienceSection` returns `null`.

### Education

`portfolio.education.items` is an ordered `EducationEntry[]`.

`EducationSection` calls `education.items.map(...)`. Each object is passed to `EducationCard`, which renders:

- qualification
- institution
- location when non-null
- date
- details when the array is non-empty

If the complete `items` array is empty, `EducationSection` returns `null`.

### Resume

The file path is defined once:

```ts
const resumeLink = {
  label: 'Download Resume',
  href: '/assets/resume/genesis-clabisellas-resume.pdf',
}
```

The same object is assigned to:

- `portfolio.links.resume`
- `portfolio.resume.download`

`ResumeSection` renders nothing when `portfolio.resume.download` is `null`. When it exists, the section renders a normal `<a>` link with:

- the verified public path
- the HTML `download` attribute
- the stable `portfolio.resume.downloadFilename`
- an accessible PDF-specific label

If a browser ignores the `download` attribute, the normal link remains a usable fallback.

### Contact

The verified email, profile, and phone link constants are reused by:

- `portfolio.links`
- `portfolio.contact.methods`

`ContactSection` maps every method through `ContactLink`.

- Email uses `mailto:`.
- The two phone numbers use normalized international `tel:` destinations.
- GitHub and Facebook use `https://`, open in new tabs, and receive `rel="noopener noreferrer"`.
- LinkedIn remains `portfolio.links.linkedIn: null` and has no contact-method entry.

If `portfolio.contact.methods` is empty, `ContactSection` returns `null`.

### Footer

`SiteFooter` renders:

- `portfolio.name`
- `portfolio.footer.note`
- `portfolio.footer.backToTopLabel`
- `new Date().getFullYear()`

The year updates automatically without editing the content file.

## 6. Relevant component hierarchy

```text
App
├── SiteHeader
├── HeroSection
├── AboutSection
├── SkillsSection
├── ProjectsSection
├── ExperienceSection
│   └── ExperienceCard
├── EducationSection
│   └── EducationCard
├── ResumeSection
├── ContactSection
│   └── ContactLink
└── SiteFooter
```

Heading levels remain logical:

- The Hero supplies the page's one `<h1>`.
- Each Milestone 4 section uses an `<h2>`.
- Each experience and education entry uses an `<h3>`.

## 7. Concepts introduced

### React mapping

Experience, education, and contact use `array.map(...)` to render repeated content. This keeps repeated markup in one reusable component instead of duplicating it for every entry.

### TypeScript data contracts

`ExperienceEntry`, `EducationEntry`, and `ContactMethod` define the exact required fields. Type checking catches missing fields, incorrect null values, and invalid array contents before deployment.

### Conditional rendering

- `experience.items.length === 0` hides Experience.
- `education.items.length === 0` hides Education.
- `!resume.download` hides Resume.
- `contact.methods.length === 0` hides Contact.
- `entry.location && ...` hides an unavailable location.
- `entry.responsibilities.length > 0 && ...` hides an empty responsibility list.
- `entry.details.length > 0 && ...` hides an empty education-detail list.

### Semantic HTML

- Experience and Education collections use ordered lists.
- Each entry is an `<article>` inside an `<li>`.
- Dates use `<time dateTime="...">`.
- Responsibilities and education details use nested lists.
- Contact methods use normal links.
- The Resume download is a normal link with `download`.
- The footer uses semantic `<footer>` markup.

### Assets and public paths

Vite copies everything under `public/` to the production-build root. Therefore:

```text
public/assets/resume/genesis-clabisellas-resume.pdf
```

becomes:

```text
/assets/resume/genesis-clabisellas-resume.pdf
```

Do not include `public` in the browser URL.

### External-link security

Links using `target="_blank"` also use:

```html
rel="noopener noreferrer"
```

This prevents the opened page from receiving a reference to the portfolio window.

### Maintainable dates

Resume dates are stored as both:

- a machine-readable value such as `2026-01`
- a visitor-facing label such as `January 2026`

The footer year is calculated at runtime.

### Responsive CSS

Base styles stack content vertically. At `40rem`:

- profile entries become two columns
- the Resume action sits beside its copy
- Contact methods use two columns

At `64rem`, Contact uses a split section layout. Long organization names, qualifications, and URLs use safe wrapping.

## 8. Exact manual customization

### Edit an experience entry

Open `src/data/portfolio.ts` and find the object in `portfolio.experience.items`.

Edit only verified values:

```ts
{
  role: 'Verified role',
  employer: 'Verified employer',
  location: 'Verified location',
  startDate: '2026-01',
  startLabel: 'January 2026',
  endDate: '2026-04',
  endLabel: 'April 2026',
  responsibilities: ['Verified responsibility'],
}
```

Use `null` for an unavailable location. Use `[]` for no public responsibilities.

### Add an experience entry

Add a complete `ExperienceEntry` object inside `portfolio.experience.items`. Do not copy the existing employer, dates, or responsibilities unless they also apply to the new verified role.

### Remove an experience entry

Delete the complete object, including its surrounding comma. Do not leave a partial object.

### Reorder experience

Move complete objects inside `portfolio.experience.items`. The displayed `01`, `02`, and later numbers are generated from array order.

### Edit education

Find the object in `portfolio.education.items`:

```ts
{
  qualification: 'Verified qualification',
  institution: 'Verified institution',
  location: null,
  date: '2026-05',
  dateLabel: 'Expected May 2026',
  details: [],
}
```

Use a real machine-readable date in `date` and the resume-approved wording in `dateLabel`.

### Add, remove, or reorder education

- Add a complete `EducationEntry` object to add an entry.
- Delete a complete object to remove it.
- Move complete objects to reorder them.
- Use `details: []` when no relevant detail is verified.

Do not invent grades, honours, coursework, awards, certifications, or graduation status.

### Replace the resume file without changing its path

1. Confirm the replacement is the approved resume.
2. Name it `genesis-clabisellas-resume.pdf`.
3. Replace `public/assets/resume/genesis-clabisellas-resume.pdf`.
4. Do not edit the PDF during the replacement.
5. Run `npm run build`.
6. Confirm `dist/assets/resume/genesis-clabisellas-resume.pdf` exists.
7. Open the Resume link in the browser and confirm the correct file downloads.

No TypeScript change is needed when the filename stays the same.

### Change the resume filename safely

1. Add the verified PDF under `public/assets/resume/`.
2. Update `resumeLink.href` in `src/data/portfolio.ts`.
3. Update `portfolio.resume.downloadFilename`.
4. Search for the old name:

```powershell
rg -n "old-resume-name.pdf" src docs public
```

5. Remove the old file only after the new path is verified.
6. Run the build and test the download.

Because `resumeLink` is reused, `portfolio.links.resume` and `portfolio.resume.download` stay synchronized.

### Change the email

Edit `emailLink` in `src/data/portfolio.ts`:

```ts
const emailLink = {
  label: 'Email Genesis Clabisellas',
  href: 'mailto:verified@example.com',
}
```

Then update the matching `value` in the Email object inside `portfolio.contact.methods`.

### Change GitHub

Edit `githubLink` and the matching Contact `value`:

```ts
const githubLink = {
  label: 'View Genesis Clabisellas on GitHub',
  href: 'https://github.com/verified-profile',
}
```

Keep the complete `https://` URL.

### Change Facebook

Edit `facebookLink` and the matching Contact `value` in `src/data/portfolio.ts`. Keep the complete `https://` URL, descriptive accessible label, and `external: true`.

### Change a phone number

Edit the matching phone-link constant and Contact object. The visible `value` may contain spaces for readability, but the link must use a normalized international `tel:` destination:

```ts
const phonePhilippinesLink = {
  label: 'Call Genesis Clabisellas at +63 943 500 9727',
  href: 'tel:+639435009727',
}
```

Keep phone methods at `external: false` so they open the visitor's calling application without a new browser tab.

### Add LinkedIn

Only after a URL is verified:

1. Create a `linkedInLink` constant using a complete `https://` URL.
2. Change `portfolio.links.linkedIn` from `null` to `linkedInLink`.
3. Add a complete LinkedIn object to `portfolio.contact.methods`.
4. Set `external: true`.
5. Test the accessible label and destination.

### Hide an unavailable contact method

1. Remove its complete object from `portfolio.contact.methods`.
2. Set the corresponding value in `portfolio.links` to `null`.

Do not keep an empty string or fake URL. Contact cards are generated only from the remaining methods.

### Edit the Contact message

Edit:

- `portfolio.contact.heading`
- `portfolio.contact.introduction`

Keep the invitation concise and factual.

### Edit the Footer

Edit:

- `portfolio.footer.note`
- `portfolio.footer.backToTopLabel`

Edit footer structure only in `src/components/layout/SiteFooter.tsx`. Keep the semantic `<footer>` and maintainable year.

### Change section spacing

Open `src/styles/global.css`.

- `.section` sets the global section padding.
- `.profile-section`, `.resume-section`, and `.contact-section` remove forced full-viewport height.
- `.resume-section` has its own restrained padding.

Prefer existing `--space-*` variables.

### Change profile cards

Use:

- `.profile-list`
- `.profile-entry`
- `.profile-entry--education`
- `.profile-entry__meta`
- `.profile-entry__content`
- `.profile-entry__details`

Keep readable contrast and visible list markers.

### Change columns and mobile layout

Use the `40rem` and `64rem` media queries:

- `.profile-entry` controls metadata/content columns.
- `.resume-panel` controls Resume copy/action columns.
- `.contact-methods` controls method columns.
- `.contact-section__layout` controls the desktop split.

Always recheck approximately 320px after changes.

### Reorder sections

Move complete component lines in `src/App.tsx`. Then move the matching items in `portfolio.navigation` so navigation order and active-section detection stay aligned.

### Hide Experience, Education, Resume, or Contact

To hide a section safely:

1. Remove its component from `src/App.tsx`.
2. Remove the unused import.
3. Change its navigation item to `href: null` and `availability: 'planned'`, or remove the item entirely.

To restore it, reverse all three steps and keep the component's stable ID.

Do not leave a working navigation link pointing to an unrendered section.

## 9. Safe changes and caution areas

### Safe changes

- Edit verified section headings and introductions.
- Add, remove, or reorder complete verified entries.
- Use `null` for unavailable optional locations or links.
- Use empty detail arrays to hide optional nested lists.
- Replace the PDF with another explicitly approved PDF.
- Adjust layout with existing spacing, colour, border, radius, and shadow tokens.

### Use caution

- Do not change the verified role title to a stronger title.
- Do not exaggerate the Veritacore responsibilities.
- Do not claim graduation while the approved resume says `Expected May 2026`.
- Do not publish another phone number or an address without explicit approval.
- Do not invent LinkedIn, employers, education, awards, certifications, results, statistics, or dates.
- Keep `#experience`, `#education`, `#resume`, and `#contact` synchronized with navigation.
- Keep the resume file path synchronized with `resumeLink.href`.
- Keep external-link security attributes.
- Keep visible keyboard focus.
- Do not hand-edit `dist/`.
- Do not add a backend or contact form.

## 10. Exact testing commands and browser checks

Run from the repository root:

```powershell
npm run lint
npm run typecheck
npm run build
```

There is no automated `test` script in `package.json`.

Confirm the built PDF:

```powershell
Get-Item dist/assets/resume/genesis-clabisellas-resume.pdf
```

Start the local site:

```powershell
npm run dev
```

Browser checklist:

1. Experience appears after Projects.
2. Education appears after Experience.
3. Resume appears after Education.
4. Contact appears after Resume.
5. Footer appears after Contact.
6. Every new navigation link reaches the matching section.
7. Section headings appear below the sticky header.
8. The active navigation indicator follows the new sections.
9. Mobile navigation closes after selecting a destination.
10. Experience shows the exact role, employer, dates, location, and three verified responsibilities.
11. Education shows the exact qualification, institution, and `Expected May 2026`.
12. Download Resume resolves to the correct PDF.
13. The built PDF opens and visually matches the source resume.
14. Email opens `mailto:clabisellasg@gmail.com`.
15. GitHub and Facebook open their verified profiles in new tabs.
16. Both phone links use the correct normalized international `tel:` destinations.
17. No LinkedIn, home address, or contact form appears.
18. Tab focus remains visible on all new links.
19. At approximately 320px there is no horizontal overflow.
20. Long content wraps without clipping.
21. Tablet and desktop columns remain balanced.
22. Footer year is current and Back to top reaches `#home`.
23. Existing Hero, About, Skills, Projects, carousel, and dialog still work.
24. The browser console has no errors or warnings introduced by Milestone 4.

## 11. Common problems and likely fixes

- **Navigation says Soon:** set the item's real `href` and `availability: 'available'`.
- **Navigation lands nowhere:** confirm the component retains its exact section `id`.
- **Wrong active indicator:** keep navigation and rendered section order synchronized.
- **Empty section appears:** keep the component's early `return null`.
- **Type error after adding an entry:** compare it with `ExperienceEntry`, `EducationEntry`, or `ContactMethod`.
- **Date is not semantic:** provide both the machine-readable date and display label.
- **Resume button is missing:** confirm `portfolio.resume.download` is not `null`.
- **Resume returns 404:** confirm the file exists under `public/assets/resume/` and the browser path starts with `/assets/`.
- **Old resume downloads:** clear browser cache and confirm only the intended public filename is referenced.
- **Email does nothing:** confirm the URL begins with `mailto:`.
- **External link security warning:** keep `target="_blank"` and `rel="noopener noreferrer"` together.
- **LinkedIn card is empty:** remove the complete method until a verified URL exists.
- **Long URL overflows:** preserve `overflow-wrap: anywhere` on `.contact-method strong`.
- **Mobile horizontal scrolling appears:** check fixed widths and preserve `min-width: 0` on grid content.
- **Footer year is stale:** keep `new Date().getFullYear()`.
- **Section heading is covered:** preserve `scroll-padding-top: var(--header-height)` on `html`.

## 12. Beginner glossary

- **Structured data:** Content stored in predictable TypeScript objects instead of hardcoded repeated markup.
- **Data contract:** A TypeScript type that defines required and optional properties.
- **Mapping:** Turning each array item into a React component with `map(...)`.
- **Conditional rendering:** Omitting markup when data is unavailable.
- **Semantic HTML:** Elements whose meaning is communicated to browsers and assistive technology.
- **Ordered list:** `<ol>` markup for an ordered collection.
- **Article:** A self-contained content entry represented by `<article>`.
- **Time element:** `<time>` markup with a machine-readable `dateTime`.
- **Public asset:** A file copied from `public/` to the built site's root.
- **Fragment link:** A link such as `#experience` targeting a matching element ID.
- **Mailto link:** A link that opens the visitor's email application.
- **External link:** A link to another website.
- **Download attribute:** A hint that the linked file should download instead of replace the page.
- **Accessible name:** Text assistive technology uses to identify a control or link.
- **Conditional method:** A contact link rendered only when verified data exists.
- **Responsive breakpoint:** A viewport width where CSS changes layout.
- **Overflow wrapping:** Allowing long text or URLs to wrap safely.
- **Design token:** A reusable CSS custom property for colour, spacing, radius, or shadow.
- **Current-year implementation:** Code that calculates the year automatically.

## 13. Safe practice exercises

1. Temporarily reorder two objects in `portfolio.contact.methods`, run `npm run typecheck`, inspect Contact, then restore the approved order.
2. Temporarily change `portfolio.footer.note`, verify the footer updates, then restore the approved wording.
3. Temporarily set the education entry's `details` to `['Practice detail - remove me']`, confirm the list appears, then restore `details: []`.

Remove all practice content before keeping a change.

## 14. Understanding check

1. Why are reusable resume and contact-link constants defined before the `portfolio` object?
2. What three files or values must stay synchronized if the resume filename changes?
3. Why do Experience and Education return `null` for empty arrays?
4. How do `ContactMethod.external`, `target`, and `rel` work together?
5. What changes are required to hide a section without leaving broken navigation?
