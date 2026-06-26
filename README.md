# Chikmagaluru & Sakleshpura Trip Planner

A mobile-responsive Next.js 14 website for a 3-day Western Ghats itinerary covering Chikmagaluru and Sakleshpura, Karnataka (16–18 Jul 2026).

## Features

- **Data-driven itinerary** — all content lives in `app/data/itinerary.ts`
- **Expandable day cards** — accordion-style itinerary with morning/afternoon/evening slots
- **Places grid** — filterable by Chikmagaluru or Sakleshpura
- **Interactive packing checklist** with progress bar
- **Print-friendly CSS** — click "Print Itinerary" to export just the day plan
- **Framer Motion** scroll fade-in animations
- **Mobile UX** — hamburger nav, touch-friendly accordions, responsive grids

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Google Fonts (Outfit + Playfair Display)

## Setup

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Install & Run

```bash
# Clone or navigate to the project
cd Trip-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
app/
├── components/
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── ItineraryDay.tsx
│   ├── PlaceCard.tsx
│   ├── PackingChecklist.tsx
│   ├── TipsSection.tsx
│   └── Footer.tsx
├── data/
│   └── itinerary.ts      # All trip content (days, places, tips, stays)
├── types/
│   └── index.ts          # TypeScript interfaces
├── globals.css           # Tailwind + print styles
├── layout.tsx
└── page.tsx              # Homepage with all sections
```

## Customization

Edit `app/data/itinerary.ts` to change dates, activities, places, or stay options. Types in `app/types/index.ts` keep everything type-safe.

## License

MIT
