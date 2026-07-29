# Portfolio Customization Quick Reference

The application has not been initialized yet. The paths below are the approved proposed locations; they will be confirmed or adjusted when the relevant milestone creates them.

For the current repository state and missing information, see [PROJECT_CONTEXT.md](./PROJECT_CONTEXT.md). For the reasoning behind the setup, see the [Milestone 0 Guide](./guides/MILESTONE_0_GUIDE.md).

## Planned common edits

| Change | Planned file and location |
| --- | --- |
| Update name, title, summary, education, or experience | `src/data/portfolio.ts`, in the corresponding exported content property or array |
| Add, edit, reorder, or remove skills | `src/data/portfolio.ts`, in the planned `skills` array |
| Add, edit, reorder, or remove projects | `src/data/portfolio.ts`, in the planned `projects` array; ApplyWiseAI should remain the primary item unless intentionally changed |
| Change email, GitHub, or LinkedIn links | `src/data/portfolio.ts`, in the planned `contact` object |
| Replace the resume | Replace `public/assets/resume/Genesis-Clabisellas-Resume.pdf` with an updated file using the same filename, or update the matching resume path in `src/data/portfolio.ts` |
| Replace a project image or portrait | Add the user-provided file under `public/assets/images/`, then update the matching image path in `src/data/portfolio.ts` |
| Change colors, type, spacing, borders, or layout | `src/styles/global.css`; design tokens will be stored in the `:root` selector and component rules will use named classes |
| Reorder page sections | `src/App.tsx`, by moving section component elements |
| Temporarily hide a section | `src/App.tsx`, by removing or commenting out that section component; restore it in the same page position |
| Change desktop or mobile behavior | `src/styles/global.css`, in the relevant component selector and media query |

## Current-stage edits

Until Milestone 1 is approved and initialized:

- Update verified facts and missing-information notes in `docs/PROJECT_CONTEXT.md`.
- Update the proposed structure in `docs/PROJECT_MAP.md` only if the architecture decision changes.
- Do not create the planned `src/` or `public/` files piecemeal; initialization will establish a consistent React + TypeScript Vite base.

## Content safety

- Do not replace a labelled placeholder with an unverified claim.
- Treat the resume, once provided, as authoritative for education, experience, skills, and contact details.
- Keep external links as complete `https://` URLs and email links in `mailto:` form.
- Keep a backup copy of the resume filename when replacing the downloadable asset.

Each later milestone guide will add exact property names and CSS selectors only after those items exist in the code.

