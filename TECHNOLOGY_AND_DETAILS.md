# Marian Ply Website - Technology Stack & Project Details

## 📋 Overview

**Project Name:** Marian Ply - Premium Plywood Manufacturer Website  
**Location:** Perumbavoor, Kerala, India  
**Industry:** Plywood Manufacturing  
**Website Type:** Business/Corporate Website  
**Development Status:** Production Ready

---

## 🛠️ Technology Stack

### Core Framework
- **Next.js 14.2.5** - React framework with App Router
  - Server-side rendering (SSR)
  - Static site generation (SSG)
  - API routes support
  - Image optimization
  - Automatic code splitting

- **React 18.3.1** - UI library
  - Component-based architecture
  - Hooks (useState, useEffect, useRef)
  - Client-side interactivity

- **TypeScript 5.5.3** - Type-safe JavaScript
  - Full type coverage
  - Better IDE support
  - Reduced runtime errors

### Styling & UI

- **Tailwind CSS 3.4.7** - Utility-first CSS framework
  - Responsive design utilities
  - Custom color palette
  - Custom animations
  - Dark mode support ready

- **PostCSS 8.4.39** - CSS processing
- **Autoprefixer 10.4.19** - Automatic vendor prefixes

- **Lucide React 0.424.0** - Icon library
  - 1000+ icons available
  - Lightweight and customizable
  - SVG-based icons

### Fonts
- **Inter Font** - Google Fonts
  - Weights: 400, 500, 600, 700, 800
  - Optimized loading with Next.js
  - Variable font support

### Development Tools

- **ESLint 8.57.0** - Code linting
  - Next.js recommended config
  - Code quality enforcement

- **Node.js 18+** - Runtime environment
- **npm** - Package manager

---

## 🎨 Design System

### Color Palette
```css
Primary: #8B4513 (Saddle Brown)
Secondary: #D2B48C (Tan)
Background: #F9F7F2 (Cream)
Text: #1A1A1A (Dark Gray)
```

### Typography
- **Font Family:** Inter (Google Fonts)
- **Font Weights:** 400, 500, 600, 700, 800
- **Responsive font sizes** across all breakpoints

### Breakpoints
- **sm:** 640px (Small tablets)
- **md:** 768px (Tablets)
- **lg:** 1024px (Desktop)
- **xl:** 1280px (Large desktop)

---

## 📁 Project Structure

```
marian-ply-pulluvazhy/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout (metadata, structured data)
│   ├── page.tsx                 # Home page
│   ├── icon.png                 # Favicon
│   ├── globals.css              # Global styles & animations
│   ├── about/
│   │   └── page.tsx             # About Us page
│   ├── products/
│   │   └── page.tsx             # Products page
│   ├── brands/
│   │   └── page.tsx             # Brands page
│   ├── gallery/
│   │   └── page.tsx             # Gallery page
│   └── contact/
│       └── page.tsx             # Contact page
├── components/                   # Reusable components
│   ├── Navbar.tsx               # Navigation bar
│   ├── Footer.tsx               # Footer component
│   └── HeroCarousel.tsx         # Hero image carousel
├── public/                       # Static assets
│   ├── logo.png                 # Company logo
│   ├── brands/                  # Brand logos
│   ├── gallery/                 # Gallery images
│   ├── hero *.png               # Hero carousel images
│   └── *.png, *.jpeg            # Other images
├── src/
│   └── assets/                  # Source assets
├── package.json                 # Dependencies
├── tsconfig.json                # TypeScript config
├── tailwind.config.js           # Tailwind config
├── next.config.js               # Next.js config
├── postcss.config.js            # PostCSS config
└── .eslintrc.json               # ESLint config
```

---

## ✨ Key Features Implemented

### 1. SEO & Meta Tags
- ✅ Comprehensive metadata (title, description, keywords)
- ✅ Open Graph tags for social sharing
- ✅ Structured data (JSON-LD) for:
  - Organization schema
  - WebSite schema
  - Page schemas (AboutPage, ContactPage, CollectionPage)
- ✅ Canonical URLs
- ✅ Favicon and app icons
- ✅ Sitemap ready structure

### 2. Performance Optimizations
- ✅ Next.js Image optimization
- ✅ Automatic code splitting
- ✅ Lazy loading for images
- ✅ Font optimization
- ✅ CSS minification
- ✅ JavaScript minification

### 3. Responsive Design
- ✅ Mobile-first approach
- ✅ Responsive typography
- ✅ Flexible grid layouts
- ✅ Touch-friendly interactions
- ✅ Responsive images

### 4. User Experience
- ✅ Smooth animations and transitions
- ✅ Interactive gallery with lightbox
- ✅ Auto-rotating hero carousel
- ✅ Pause on hover/interaction
- ✅ Keyboard navigation support
- ✅ Loading states

### 5. Content Management
- ✅ Dynamic brand carousel
- ✅ Product specifications display
- ✅ Timeline with animations
- ✅ Gallery with click-to-expand
- ✅ Contact information

---

## 📄 Pages & Routes

### Home Page (`/`)
- Hero carousel (4 images)
- Brands showcase (carousel)
- Why Choose Marian Ply (6 features)
- Company timeline
- Gallery slideshow
- IndiaMART integration

### About Page (`/about`)
- Company history
- Leadership information
- Austin Panels information
- Location details
- Contact information

### Products Page (`/products`)
- 5 product categories:
  - Marine Grade Plywood (4mm - 22mm)
  - Commercial Plywood (4mm - 22mm)
  - Shuttering Plywood (12mm - 25mm, 30kg - 60kg)
  - Calibrated Plywood (4mm - 22mm)
  - Laminated Plywood

### Brands Page (`/brands`)
- 5 brands displayed:
  - AREION Ply
  - Marian Ply
  - Wood Piper
  - Ropos Ply
  - Ocen Ply

### Gallery Page (`/gallery`)
- 7 gallery images
- Lightbox modal on click
- Keyboard navigation
- Image counter

### Contact Page (`/contact`)
- Contact form
- Contact information
- Location details
- IndiaMART link

---

## 🔧 Configuration Files

### package.json
```json
Scripts:
- dev: Development server
- build: Production build
- start: Production server
- lint: Code linting
```

### next.config.js
- Image optimization settings
- External image domains configured

### tailwind.config.js
- Custom color palette
- Custom font family
- Responsive breakpoints
- Custom animations

### tsconfig.json
- TypeScript compiler options
- Path aliases (@/*)
- Strict mode enabled

---

## 🌐 SEO Features

### Structured Data (JSON-LD)
1. **Organization Schema**
   - Company name, logo, description
   - Address, contact information
   - Social media links
   - Founder information

2. **Website Schema**
   - Site search functionality
   - Site URL

3. **Page Schemas**
   - AboutPage, ContactPage, CollectionPage
   - Page-specific metadata

### Meta Tags
- Title tags (SEO optimized)
- Meta descriptions (keyword-rich)
- Open Graph tags
- Twitter Card ready
- Keywords meta tag

### Technical SEO
- Semantic HTML
- Proper heading hierarchy
- Alt text for all images
- Canonical URLs
- Mobile-friendly design
- Fast loading times

---

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🚀 Deployment Ready

### Build Commands
```bash
npm run build    # Create production build
npm start        # Start production server
```

### Environment Requirements
- Node.js 18+
- npm or yarn
- Minimum 512MB RAM for build

### Production Optimizations
- ✅ Minified JavaScript
- ✅ Minified CSS
- ✅ Optimized images
- ✅ Code splitting
- ✅ Tree shaking
- ✅ Static page generation where possible

---

## 📊 Assets & Images

### Logo Files
- `/logo.png` - Main company logo
- `/brands/marian_brand.png` - Marian brand logo
- `/app/icon.png` - Favicon

### Hero Images
- `/hero 0.png`
- `/hero 1.png`
- `/hero 2.png`
- `/hero 3.png`

### Brand Logos
- AREION Ply
- Marian Ply
- Wood Piper
- Ropos Ply
- Ocen Ply
- Austin Panels

### Gallery Images
- 8 images in `/gallery/` folder

---

## 🎯 Key Libraries & Dependencies

### Production Dependencies
```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "next": "^14.2.5",
  "lucide-react": "^0.424.0"
}
```

### Development Dependencies
```json
{
  "@types/node": "^20.14.10",
  "@types/react": "^18.3.3",
  "@types/react-dom": "^18.3.0",
  "typescript": "^5.5.3",
  "tailwindcss": "^3.4.7",
  "postcss": "^8.4.39",
  "autoprefixer": "^10.4.19",
  "eslint": "^8.57.0",
  "eslint-config-next": "^14.2.5"
}
```

---

## 🔒 Security Features

- ✅ Secure headers (Next.js default)
- ✅ XSS protection
- ✅ CSRF protection
- ✅ Safe external links (rel="noopener noreferrer")
- ✅ Input validation ready

---

## 📈 Performance Metrics

### Expected Performance
- ✅ Lighthouse score: 90+ (expected)
- ✅ First Contentful Paint: < 1.5s
- ✅ Time to Interactive: < 3.5s
- ✅ Image optimization: Automatic
- ✅ Font loading: Optimized

---

## 🌟 Unique Features

1. **Auto-pause Carousel** - Pauses on user interaction
2. **Gallery Lightbox** - Full-screen image viewer
3. **Timeline Animation** - Scroll-triggered animations
4. **Brand Carousel** - Touch/swipe support
5. **Structured Data** - Rich snippets ready
6. **Product Specifications** - Dynamic display
7. **Responsive Typography** - Scales beautifully

---

## 📝 Code Quality

- ✅ TypeScript for type safety
- ✅ ESLint for code quality
- ✅ Consistent code style
- ✅ Component-based architecture
- ✅ Reusable components
- ✅ Clean code structure

---

## 🔄 Future Enhancements (Optional)

- Contact form backend integration
- Blog/news section
- Product search functionality
- Multi-language support
- Customer testimonials
- Live chat integration
- Analytics integration (Google Analytics)

---

## 📞 Support & Maintenance

**Technology Stack:** Modern, maintainable, and scalable  
**Update Frequency:** Regular Next.js and dependency updates recommended  
**Browser Testing:** Test on major browsers before deployment  
**Performance Monitoring:** Use tools like Lighthouse, WebPageTest

---

## 📄 License

© 2025 Marian Ply. All rights reserved.

---

**Last Updated:** January 2025  
**Version:** 1.0.0  
**Framework Version:** Next.js 14.2.5  
**Node Version Required:** 18+
