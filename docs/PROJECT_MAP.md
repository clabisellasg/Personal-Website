# Project Map

This map describes the application after Milestone 4.

## Current structure

```text
Personal-Website/
├── docs/
│   ├── CUSTOMIZATION_GUIDE.md
│   ├── PROJECT_CONTEXT.md
│   ├── PROJECT_MAP.md
│   └── guides/
│       ├── MILESTONE_0_GUIDE.md
│       ├── MILESTONE_1_GUIDE.md
│       ├── MILESTONE_2_GUIDE.md
│       ├── MILESTONE_3_GUIDE.md
│       └── MILESTONE_4_GUIDE.md
├── public/
│   └── assets/
│       └── resume/
│           └── genesis-clabisellas-resume.pdf
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── SiteFooter.tsx
│   │   │   └── SiteHeader.tsx
│   │   └── sections/
│   │       ├── AboutSection.tsx
│   │       ├── ContactSection.tsx
│   │       ├── EducationSection.tsx
│   │       ├── ExperienceSection.tsx
│   │       ├── HeroSection.tsx
│   │       ├── ProjectsSection.tsx
│   │       ├── ResumeSection.tsx
│   │       └── SkillsSection.tsx
│   ├── data/
│   │   └── portfolio.ts
│   ├── styles/
│   │   └── global.css
│   ├── types/
│   │   └── portfolio.ts
│   ├── App.tsx
│   └── main.tsx
├── package.json
├── package-lock.json
└── vite.config.ts
```

Generated `node_modules/` and `dist/` directories are ignored by Git.

## Current files

| Path | Purpose |
| --- | --- |
| `src/App.tsx` | Defines the page order: header, Hero, About, Skills, Projects, Experience, Education, Resume, Contact, and Footer. |
| `src/components/layout/SiteHeader.tsx` | Renders responsive navigation, mobile menu behavior, and active-section tracking for all available section IDs. |
| `src/components/layout/SiteFooter.tsx` | Renders Genesis's name, maintainable current-year copyright, portfolio note, and back-to-top link. |
| `src/components/sections/HeroSection.tsx` | Renders the verified title, introduction, action, and developer snapshot. |
| `src/components/sections/AboutSection.tsx` | Renders biography paragraphs and highlights from `portfolio.about`. |
| `src/components/sections/SkillsSection.tsx` | Renders nested skill groups from `portfolio.skills`. |
| `src/components/sections/ProjectsSection.tsx` | Renders the compact horizontal project carousel and accessible project dialog from `portfolio.projects`. |
| `src/components/sections/ExperienceSection.tsx` | Maps `portfolio.experience.items` into semantic work-history cards with dates, location, and responsibilities. |
| `src/components/sections/EducationSection.tsx` | Maps `portfolio.education.items` into semantic education cards with qualification, institution, and date. |
| `src/components/sections/ResumeSection.tsx` | Conditionally renders the verified PDF download action from `portfolio.resume.download`. |
| `src/components/sections/ContactSection.tsx` | Conditionally maps verified `portfolio.contact.methods` into accessible email, phone, and external-profile links. |
| `src/data/portfolio.ts` | Central editable source for navigation, all section content, experience, education, resume, contact links, and footer copy. |
| `src/types/portfolio.ts` | Defines all central data shapes, including `ExperienceEntry`, `EducationEntry`, and `ContactMethod`. |
| `src/styles/global.css` | Contains design tokens, existing section styles, Milestone 4 profile cards, resume panel, contact links, footer, breakpoints, focus, and reduced-motion rules. |
| `public/assets/resume/genesis-clabisellas-resume.pdf` | Unmodified verified resume served at `/assets/resume/genesis-clabisellas-resume.pdf`. |
| `docs/guides/MILESTONE_4_GUIDE.md` | Detailed Milestone 4 architecture, customization, testing, troubleshooting, glossary, and exercises. |

## Application relationships

```text
index.html
└── src/main.tsx
    ├── src/styles/global.css
    └── src/App.tsx
        ├── src/components/layout/SiteHeader.tsx
        ├── src/components/sections/HeroSection.tsx
        ├── src/components/sections/AboutSection.tsx
        ├── src/components/sections/SkillsSection.tsx
        ├── src/components/sections/ProjectsSection.tsx
        ├── src/components/sections/ExperienceSection.tsx
        ├── src/components/sections/EducationSection.tsx
        ├── src/components/sections/ResumeSection.tsx
        ├── src/components/sections/ContactSection.tsx
        └── src/components/layout/SiteFooter.tsx

src/types/portfolio.ts
└── describes all content stored in src/data/portfolio.ts

src/data/portfolio.ts
├── supplies navigation to SiteHeader.tsx
├── supplies portfolio.experience to ExperienceSection.tsx
├── supplies portfolio.education to EducationSection.tsx
├── supplies portfolio.resume to ResumeSection.tsx
├── supplies portfolio.contact to ContactSection.tsx
├── supplies portfolio.footer and portfolio.name to SiteFooter.tsx
└── reuses one verified resumeLink for portfolio.links.resume and portfolio.resume.download

public/assets/resume/genesis-clabisellas-resume.pdf
└── is referenced by resumeLink.href and copied unchanged into the production build
```

## Current rendered page order

1. Skip link
2. Responsive primary navigation
3. Hero
4. About Me
5. Technical Skills
6. Featured Projects
7. Experience
8. Education
9. Resume
10. Contact
11. Footer

## Milestone 4 content boundaries

- Experience contains only the verified Data Analyst (Intern) role at Veritacore Philippines Inc.
- Education contains only the verified Bachelor of Science in Information Technology entry from Cebu Institute of Technology - University.
- The resume PDF is unchanged from the verified source.
- Contact exposes the verified email, GitHub profile, Facebook profile, Philippines phone number, and Singapore phone number.
- LinkedIn is omitted because no verified URL is available.
- No home address, contact form, backend, email service, or additional professional claim is rendered.
- Empty experience, education, resume, or contact data is conditionally omitted instead of producing empty cards or broken links.

## Planned growth

Milestone 5 is proposed only after Genesis tests and approves Milestone 4. It may cover final animations, broader visual polish, and separately approved deployment preparation. Milestone 5 has not started.
