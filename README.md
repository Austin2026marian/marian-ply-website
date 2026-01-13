# Marian Ply - Premium Plywood Manufacturer

A modern, responsive website for Marian Ply, a premium plywood manufacturer based in Perumbavoor, Kerala.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Fonts:** Inter (via Google Fonts)
- **TypeScript:** Full type safety

## Features

- 🏠 **Home Page** - Hero section with compelling CTA and feature highlights
- 📖 **About Page** - Company history and information
- 🛍️ **Products Page** - Showcase of premium plywood products
- 🖼️ **Gallery Page** - Beautiful interior showcases
- 📞 **Contact Page** - Contact form and company information
- 📱 **Fully Responsive** - Mobile-first design approach
- 🎨 **Modern UI/UX** - Premium design with smooth animations

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with Navbar & Footer
│   ├── page.tsx            # Home page
│   ├── about/
│   │   └── page.tsx        # About page
│   ├── products/
│   │   └── page.tsx        # Products page
│   ├── gallery/
│   │   └── page.tsx        # Gallery page
│   ├── contact/
│   │   └── page.tsx        # Contact page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Responsive navigation
│   └── Footer.tsx           # Footer component
└── public/                 # Static assets
```

## Color Scheme

- **Primary:** `#8B4513` (Saddle Brown)
- **Secondary:** `#D2B48C` (Tan)
- **Background:** `#F9F7F2` (Cream)
- **Text:** `#1A1A1A` (Dark Gray)

## License

© 2025 Marian Ply. All rights reserved.
