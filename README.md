# ByteSpace

Landing page for the ByteSpace course platform, built from the
[Figma design](https://www.figma.com/design/gugkuk8ZaQJomyrdmqvsPn/ByteSpace-website) with
React, TypeScript, Vite and Tailwind CSS v4.

The page is static for now: there's no search, filtering or form logic yet.

## Getting started

```bash
npm install
npm run assets   # one-off: downloads the Figma images/icons into public/assets
npm run dev
```

## Project structure

```
src/
├── pages/LandingPage.tsx      # composes the page from sections
├── sections/                  # one component per page section (Hero, Courses, …)
├── components/
│   ├── layout/                # Header, Footer, Container, DesignCanvas
│   ├── ui/                    # primitives: Button, Logo, TopicChip, AvatarStack, Ornament, …
│   ├── cards/                 # CourseCard, CategoryCard, TestimonialCard
│   └── widgets/               # floating info cards used over the hero imagery
├── data/landing.ts            # all copy, lists and ornament positions
├── constants/assets.ts        # paths to everything in public/assets
├── types/                     # shared TypeScript types
└── index.css                  # Tailwind import + design tokens (@theme)
```

### Design tokens

Colours, fonts and the type scale from Figma live in `src/index.css` under `@theme`, so they
are available as regular utilities, e.g. `bg-persian-blue-800`, `text-electric-lime-400`,
`text-heading-m`, `text-body-l`, `text-label-xs`.

Fonts: **Poppins** (Google Fonts), **Satoshi** and **Clash Display** (Fontshare), loaded in
`index.html`.

### Layout notes

- The design is a 1440px desktop layout with a 1200px content column (`Container`).
- Decorative artwork (3D shapes, glows, hero photo) is positioned with the exact Figma
  coordinates inside `DesignCanvas`, a 1440px layer centred in each section.
- The 3D shapes are tinted like in Figma: a neutral render with a colour layer on top,
  clipped to the shape's silhouette and blended with `mix-blend-mode: hard-light`
  (`components/ui/Ornament.tsx`).
