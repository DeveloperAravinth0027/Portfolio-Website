# Aravindakumar G — Portfolio

Personal portfolio for **Aravindakumar G**, Full Stack Engineer. Built with React 19, Vite and Tailwind CSS v4.

Live: https://aravinthdev.vercel.app/

## Stack

- **React 19 + Vite** — component-driven SPA, fast dev server, small production build
- **Tailwind CSS v4** — CSS-variable-based theme (dark by default, light mode toggle, persisted in `localStorage`)
- **lucide-react** — icon set (tree-shaken, only used icons ship)

No router, no state management library, no CMS — a single-page portfolio doesn't need them. Content lives in plain data files under `src/data/`.

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
npm run lint       # oxlint
```

## Project structure

```
src/
├── components/     # UI components (one concern each, all data-driven)
├── data/           # Edit these to update site content — no JSX required
│   ├── siteConfig.js   # name, role, tagline, contact, social links, resume path
│   ├── navLinks.js
│   ├── skills.js        # categorized skills, devicon logos
│   ├── experience.js    # work history timeline (empty by default, see below)
│   ├── projects.js      # project cards + optional case studies
│   └── services.js
├── context/        # ThemeContext (dark/light, persisted)
├── hooks/          # useActiveSection (navbar scrollspy), useReveal (scroll-in
│                   # animation), useRotatingText (hero role text)
├── App.jsx
└── main.jsx
```

## Things to finish before you consider this "done"

1. **Resume** — `public/resume.pdf` is your actual resume file. The "Download
   Resume" button always saves it as `Aravindakumar_Resume.pdf`
   regardless of the underlying file name (see `resumeDownloadName` in
   `siteConfig.js`) — replace `public/resume.pdf` whenever you have an updated
   version; the button needs no changes.
2. **Experience section** — `src/data/experience.js` now has your two web
   development internships (Rinex Technologies, Bharath Intern), pulled from
   your resume. Your resume also lists real education, certifications and a
   publication that aren't on the site yet — say the word if you want an
   Education/Certifications section added.
3. **Kids Colours & Book Management System live demos** — neither has a
   `liveUrl` in `src/data/projects.js` because none was provided. Add one once
   you have it and the project card will pick it up automatically. Their images
   are already wired up: Book Management System uses a real screenshot pulled
   from its GitHub README (`public/images/project-book-management.jpg`); Kids
   Colours has no public repo/live site to screenshot, so it uses a bespoke
   cover illustration instead (`public/images/kids-colours-cover.svg`) rather
   than a fabricated screenshot — swap it for a real one anytime.
4. **Contact form** — currently posts to the same Formspree endpoint the old
   site used (`https://formspree.io/f/mqaddbge`). Override it by copying
   `.env.example` to `.env` and setting `VITE_FORM_ENDPOINT` if you want to point
   it at a different form/backend.
5. **OG image** — `public/og-image.jpg` is reused from the old site's screenshot.
   Swap it for a real screenshot of the new design when convenient.

## Adding a project

Append an object to the `projects` array in `src/data/projects.js`:

```js
{
  id: 'unique-id',
  title: 'Project Name',
  tagline: 'One-line hook',
  description: 'What it does and why it matters.',
  image: '/images/your-image.jpg', // or null for a placeholder panel
  technologies: ['React', 'Node.js'],
  category: ['Full Stack'], // drives the filter bar automatically
  liveUrl: 'https://...',   // or null
  githubUrl: 'https://...', // or null
  featured: false,
  // caseStudy: { ... } — optional, see the Kids Colours entry for the shape
}
```

The filter bar in `Projects.jsx` derives its categories from whatever's present
in this array — no code changes needed as the project list grows.

## Legacy files

The original static site (`index.html`, `css/`, `icons/`, `images/` at the repo
root) is left in place untouched. It's no longer used by the app — all of its
real content (projects, links, skills, copy) was migrated into `src/data/` and
its needed images copied into `public/images/`. Safe to delete once you've
confirmed the new site has everything you need.
