# Freelancer Portfolio

A clean, responsive one-page portfolio built with **React + Vite**, for a freelancer offering
writing, data entry, typing, PDF conversion, document formatting, Canva design and basic photo
editing services.

Honest by design: no fake clients, testimonials, earnings, certificates or fabricated experience.
Sample projects are clearly labeled as practice work.

## Sections

1. Hero
2. About
3. Services
4. Skills
5. Sample Projects (6)
6. Process
7. Why Hire Me
8. Contact
9. Footer

## Tech Stack

- React 18
- Vite 5
- Plain CSS (no framework, CSS variables for theming)

## Getting Started

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
npm run preview   # optional local preview of the production build
```

The production files are output to the `dist/` folder.

## Editing Your Content

Almost everything on the site — your name, tagline, about text, services, skills, sample
projects, process steps, and contact links — lives in one file:

```
src/data/profile.js
```

Open that file and update the placeholder values. Specifically, replace:

- `contact.email` — your real email address
- `contact.truelancer` — your Truelancer profile URL
- `contact.github` — your GitHub profile URL
- `contact.linkedin` — your LinkedIn profile URL

No other file needs to change for basic content updates.

## Project Structure

```
noor-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/       # One component + stylesheet per section
│   ├── data/
│   │   └── profile.js    # All editable content
│   ├── styles/
│   │   └── index.css     # Design tokens + global styles
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
├── vercel.json
├── package.json
└── .gitignore
```

## Deploying

### Deploy to Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com), click **New Project**, and import the repo.
3. Vercel will auto-detect the Vite framework (a `vercel.json` is included). Click **Deploy**.

### Deploy to GitHub Pages / Netlify

Run `npm run build`, then deploy the contents of the `dist/` folder using your host of choice.

## License

Free to use and modify for your own portfolio.
