# garbutt.it — Portfolio

Vite + React + Tailwind CSS + Framer Motion

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build & deploy

### GitHub Pages
```bash
npm run deploy
```
This runs `vite build` then pushes the `dist/` folder to the `gh-pages` branch.

> Make sure your repo settings point GitHub Pages to the `gh-pages` branch.

### Own server / Netlify / Vercel
```bash
npm run build
# Upload or point your host to the dist/ folder
```

## Customising

| File | What to change |
|------|---------------|
| `src/components/Hero.jsx` | Your name, bio, social links |
| `src/components/BentoGrid.jsx` | Layout — add/remove/resize cards |
| `src/components/WorkCard.jsx` | Individual project card appearance |
| `src/components/ContactCard.jsx` | Email & CTA |
| `tailwind.config.js` | Accent colours, fonts |
| `public/images/profile.jpg` | Your profile photo |

## Stack
- **Vite** — fast dev server & build
- **React 18** — component model
- **Tailwind CSS v3** — utility styling
- **Framer Motion** — scroll animations, hover effects
- **gh-pages** — one-command GitHub Pages deploy
