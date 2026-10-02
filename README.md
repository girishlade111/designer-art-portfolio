# Designer Art Portfolio — Dark Minimalist Portfolio Site

A dark, minimalist designer portfolio website built with Next.js: hero, selected-work gallery, call-to-action, and footer sections with smooth scroll-reveal animations.

## ✨ Features

- **Hero section** — bold oversized typography, availability badge
- **Selected work** — project grid with hover-scale image cards, category tags, 6 showcase projects
- **CTA section** — "Let's work together" call to action with contact links
- **Footer** — social links, copyright, back-to-top
- **Animations** — framer-motion fade-up scroll reveals, staggered grid entrances, link hover fades
- **Dark theme** — pure-black `#000000` background, white foreground, muted secondary text
- **Fully responsive** — `clamp()`-based fluid typography, mobile-first layout
- **Static export** — prerendered HTML via `output: "export"`, hostable anywhere

## 🛠 Tech stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, static export) |
| Language | TypeScript |
| Styling | Tailwind CSS, shadcn/ui (Radix primitives) |
| Animation | Framer Motion |
| Fonts | Inter (400 / 500 / 700) |

## 🚀 Quick start

```bash
# install dependencies
npm install --legacy-peer-deps

# dev server (http://localhost:3000)
npm run dev

# production static build -> out/
npm run build
```

The `out/` directory is a fully static site — deploy it to GitHub Pages, Cloudflare Pages, or any static host.

## 📁 Project structure

```
├── src/
│   ├── app/
│   │   ├── page.tsx        # all portfolio sections (hero, work, CTA, footer)
│   │   ├── layout.tsx      # root layout, Inter font, dark theme
│   │   └── globals.css     # theme tokens (#000 bg, #fff fg, #A1A1A1 secondary)
│   ├── components/         # shadcn/ui components
│   └── lib/utils.ts        # cn() helper
├── public/                 # static assets
├── next.config.ts          # output: "export" for static deployment
└── tailwind.config.ts
```

## ⚙️ Notes

- This site is a fully static portfolio — no backend required. (A Prisma schema and `src/lib/db.ts` exist in the tree as unused boilerplate; nothing imports them.)
- TypeScript build errors are ignored in `next.config.ts` (`ignoreBuildErrors: true`, inherited from the starter template).

## 🌐 Live demo

Deployed static build is linked in the repo homepage.

**Built by [Girish Lade](https://ladestack.in)** — part of the [LadeStack](https://ladestack.in) free-tools ecosystem.
