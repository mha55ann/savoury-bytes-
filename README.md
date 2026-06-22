# Savory Bites — Restaurant Website (React)

A fully rebuilt, frontend-only React version of the Savory Bites restaurant
site. The original was a handful of static HTML pages with duplicated
inline `<style>` blocks and a PHP/MySQL backend (`config.php`,
`savory_bites.sql`). This version replaces that with a single Vite + React
app: one shared design system, client-side routing, and React state for
everything that used to be vanilla JS or a PHP form POST.

## Stack

- **React 19** + **React Router 7** for routing between pages
- **Vite** for the dev server and build
- **Tailwind CSS** for styling, with a custom design-token palette in
  `tailwind.config.js` (charcoal / cream / gold / oxblood / sage)
- **lucide-react** for icons (a few social icons are hand-rolled SVGs,
  see note below)
- **Fraunces** (display serif) + **Inter** (body) from Google Fonts

## Getting started

```bash
npm install
npm run dev       # starts a local dev server with hot reload
npm run build     # production build, output in dist/
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  components/   Header, Footer, Layout, form fields, menu card, etc.
  pages/        One file per route (Home, About, Menu, Reservations, ...)
  data/         menuData.js — single source of truth for all menu items
  utils/        validation.js — shared form-validation helpers
```

## Pages

| Route            | Notes                                                          |
|------------------|-----------------------------------------------------------------|
| `/`              | Hero, highlights, featured dishes, reservation CTA              |
| `/about`         | Story, stats, values                                            |
| `/menu`          | Category tabs (Starters / Main / Desserts / Drinks), dietary tags |
| `/reservations`  | Validated booking form with a success state                     |
| `/contact`       | Info cards + map + validated contact form                       |
| `/login`         | Validated login form (demo only, see below)                     |
| `/register`      | Validated registration form (demo only, see below)               |

## Important: this is frontend-only

The original project had a `config.php` that talked to a MySQL database
for users, reservations, and contact messages. That backend is **not**
included here — this deliverable is the frontend, as requested.

The Reservations, Contact, Login, and Register forms validate input and
show a success state, but they don't currently call a real API. Each
form's `handleSubmit` has a short comment marking where to wire in your
own backend or API call:

```js
// Frontend-only deliverable: simulate submission locally.
// Wire this up to your reservations API/backend when ready.
```

## Design notes

- The "ticket" look on menu cards (the scalloped/perforated edge under
  each photo) is a CSS `mask-image` trick in `src/index.css`
  (`.ticket-edge`) — no extra markup or images needed.
- All menu content lives in `src/data/menuData.js`. Add, remove, or edit
  dishes there; the Menu page re-renders automatically.
- Images are currently linked from Unsplash for placeholder purposes.
  Swap them for your own food photography before going live — just
  replace the `image` URLs in `menuData.js` (and the hero/about images in
  their respective page files).

## Known icon limitation

This project's installed `lucide-react` version dropped all trademarked
brand glyphs (Facebook/Instagram/Twitter, etc.). The footer's social icons
in `src/components/SocialIcons.jsx` are small custom SVGs standing in for
those — swap them for your preferred icon set if you'd like.
test
