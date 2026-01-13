# MARIAN PLY - Complete Website Documentation

## 📋 Table of Contents
1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [File Structure & Details](#file-structure--details)
5. [Design System](#design-system)
6. [Pages Breakdown](#pages-breakdown)
7. [Components Breakdown](#components-breakdown)
8. [Animations & Interactions](#animations--interactions)
9. [Assets & Images](#assets--images)
10. [Configuration Files](#configuration-files)
11. [Deployment Information](#deployment-information)

---

## 🎯 Project Overview

**Project Name:** Marian Ply - Premium Plywood Manufacturer  
**Location:** Perumbavoor, Kerala, India  
**Established:** November 2007  
**Business Type:** Partnership Firm  
**Industry:** Plywood Manufacturing

### Key Features
- ✅ Fully Responsive (Mobile-First Design)
- ✅ Next.js 14 App Router Architecture
- ✅ TypeScript for Type Safety
- ✅ Tailwind CSS for Styling
- ✅ Smooth Animations & Transitions
- ✅ SEO Optimized
- ✅ Image Optimization
- ✅ Auto-rotating Hero Carousel
- ✅ Interactive Gallery
- ✅ Contact Form with Google Maps

---

## 🛠 Technology Stack

### Core Framework
- **Next.js:** 14.2.5 (App Router)
- **React:** 18.3.1
- **TypeScript:** 5.5.3

### Styling
- **Tailwind CSS:** 3.4.7
- **PostCSS:** 8.4.39
- **Autoprefixer:** 10.4.19

### Icons & UI
- **Lucide React:** 0.424.0 (Icon Library)

### Development Tools
- **ESLint:** 8.57.0
- **ESLint Config Next:** 14.2.5
- **Node Types:** 20.14.10
- **React Types:** 18.3.3

---

## 📁 Project Structure

```
marian-ply-pulluvazhy/
├── app/                          # Next.js App Router Directory
│   ├── layout.tsx               # Root Layout (Navbar + Footer)
│   ├── page.tsx                 # Home Page
│   ├── globals.css              # Global Styles & Animations
│   ├── about/
│   │   └── page.tsx             # About Us Page
│   ├── products/
│   │   └── page.tsx             # Products Listing Page
│   ├── gallery/
│   │   └── page.tsx             # Image Gallery Page
│   └── contact/
│       └── page.tsx             # Contact Page
├── components/                   # Reusable Components
│   ├── Navbar.tsx               # Responsive Navigation Bar
│   ├── Footer.tsx               # Global Footer
│   └── HeroCarousel.tsx         # Auto-rotating Hero Carousel
├── src/
│   └── assets/
│       └── Logo.png             # Company Logo (1024x1024)
├── public/                       # Static Assets (currently empty)
├── package.json                  # Dependencies & Scripts
├── tsconfig.json                 # TypeScript Configuration
├── tailwind.config.js           # Tailwind CSS Configuration
├── next.config.js                # Next.js Configuration
├── postcss.config.js             # PostCSS Configuration
└── .eslintrc.json                # ESLint Configuration
```

---

## 📄 File Structure & Details

### 1. **app/layout.tsx** (Root Layout)
- **Purpose:** Global layout wrapper for all pages
- **Features:**
  - Imports Inter font from Google Fonts
  - Includes Navbar component (sticky header)
  - Includes Footer component
  - SEO metadata (title, description)
  - Flexbox layout for footer positioning

**Key Code:**
```typescript
- Font: Inter (Google Fonts)
- Metadata: SEO optimized
- Structure: Navbar → Main Content → Footer
```

---

### 2. **app/page.tsx** (Home Page)
- **Type:** Client Component ('use client')
- **Sections:**
  1. **Hero Section:**
     - Full-screen height carousel
     - 3 auto-rotating images (5-second intervals)
     - Centered text overlay
     - "Explore Our Products" CTA button
     - Smooth fade transitions
  
  2. **Features Section:**
     - Logo + "MARIAN PLY" branding
     - 3 feature cards with icons:
       - **Durability** (Layers icon)
       - **Quality** (BadgeCheck icon)
       - **Delivery** (Package icon)
     - Scroll-triggered animations
     - Hover effects

**Animations:**
- Fade-in on load
- Slide-up with delays
- Intersection Observer for scroll animations

---

### 3. **app/about/page.tsx** (About Us Page)
- **Type:** Client Component
- **Sections:**
  1. **Header:**
     - Logo + "MARIAN PLY" text
     - "About Us" title
  
  2. **Content Grid (2 columns on desktop):**
     - **Left Column:**
       - "Our Story" section
       - Company history (Est. Nov 2007)
       - Location (Perumbavoor, Kerala)
       - Business type (Partnership Firm)
       - "Our Commitment" card
  
     - **Right Column:**
       - Factory image
       - Hover scale effect
  
  3. **Contact Information Section:**
     - Email card with Mail icon
     - Phone card with Phone icon
     - Hover effects
     - Clickable links (mailto:, tel:)

**Animations:**
- Slide-in from left (content)
- Slide-in from right (image)
- Fade-in-up (contact cards)

---

### 4. **app/products/page.tsx** (Products Page)
- **Type:** Client Component
- **Sections:**
  1. **Header:**
     - Logo + "MARIAN PLY" branding
     - "Our Products" title
     - Description text
  
  2. **Product Grid (3 columns on desktop):**
     - **Marine Grade Plywood:**
       - Icon: Waves
       - Badge: IS 710
       - Image overlay icon
  
     - **Commercial Plywood:**
       - Icon: Building2
       - Badge: IS 303
       - Image overlay icon
  
     - **Shuttering Plywood:**
       - Icon: Hammer
       - Badge: IS 4990
       - Image overlay icon
  
     - **Teak Plywood:**
       - Icon: TreePine
       - Badge: Premium
       - Image overlay icon

**Features:**
- Product cards with images
- Badge indicators
- Icons on cards (overlay + title area)
- Hover lift effect
- Staggered scroll animations

---

### 5. **app/gallery/page.tsx** (Gallery Page)
- **Type:** Client Component
- **Sections:**
  1. **Header:**
     - Logo + "MARIAN PLY" branding
     - Camera & ImageIcon icons
     - "Our Gallery" title
  
  2. **Gallery Grid (3 columns on desktop):**
     - 7 gallery items:
       - Modern Kitchen
       - Elegant Living Room
       - Professional Office
       - Luxury Wardrobe
       - Contemporary Kitchen
       - Modern Office Space
       - Lumber Yard & Manufacturing (Facility)
  
  3. **Image Features:**
     - Hover zoom effect (scale 110%)
     - Gradient overlay on hover
     - Title & category reveal
     - Scale-in animations on scroll

**Animations:**
- Scale-in with staggered delays
- Smooth hover transitions

---

### 6. **app/contact/page.tsx** (Contact Page)
- **Type:** Client Component
- **Sections:**
  1. **Header:**
     - Logo + "MARIAN PLY" branding
     - MessageSquare & Phone icons
     - "Contact Us" title
  
  2. **Two-Column Layout:**
     - **Left Column - Contact Info:**
       - Address (MapPin icon)
       - Phone (Phone icon)
       - Email (Mail icon)
       - White card with shadow
  
     - **Right Column - Contact Form:**
       - Name input
       - Email input
       - Phone input
       - Message textarea
       - Submit button (Send icon)
  
  3. **Google Maps Section:**
     - MapPin & Clock icons
     - Embedded Google Maps iframe
     - Address display
     - Hover shadow effect

**Features:**
- Form validation ready
- Clickable contact links
- Responsive grid layout
- Scroll animations

---

### 7. **components/Navbar.tsx** (Navigation Bar)
- **Type:** Client Component
- **Features:**
  - Sticky positioning (top-0, z-50)
  - Logo + "MARIAN PLY" text (left side)
  - Desktop navigation (center-right)
  - Mobile hamburger menu
  - Slide-out drawer for mobile
  - Overlay for mobile menu
  - Smooth transitions

**Navigation Links:**
- Home (/)
- About (/about)
- Products (/products)
- Gallery (/gallery)
- Contact (/contact)

**Responsive Behavior:**
- Desktop: Horizontal menu
- Mobile: Hamburger menu with drawer

---

### 8. **components/Footer.tsx** (Footer)
- **Type:** Server Component
- **Content:**
  - Company name: "MARIAN PLY"
  - Address: "Malamury, Pulluvazhy P.O, Perumbavoor, Kerala 683541"
  - Copyright: Dynamic year (2025)
  - Dark brown background (#8B4513)
  - Centered layout

---

### 9. **components/HeroCarousel.tsx** (Hero Carousel)
- **Type:** Client Component
- **Features:**
  - Auto-rotating images (5-second intervals)
  - 3 hero images:
    1. Premium Plywood Manufacturing
    2. Quality Plywood Products
    3. Expert Craftsmanship
  - Smooth fade transitions (1000ms)
  - Dark overlay (50% opacity)
  - No user controls (auto-play only)

**Image Sources:**
- Unsplash URLs (optimized)
- Next.js Image optimization
- Priority loading for first image

---

### 10. **app/globals.css** (Global Styles)
- **Tailwind Directives:**
  - @tailwind base
  - @tailwind components
  - @tailwind utilities

- **Custom Animations:**
  1. **fadeIn:** Opacity 0 → 1
  2. **fadeInUp:** Opacity 0 + translateY(30px) → normal
  3. **slideUp:** Opacity 0 + translateY(50px) → normal
  4. **slideInLeft:** Opacity 0 + translateX(-50px) → normal
  5. **slideInRight:** Opacity 0 + translateX(50px) → normal
  6. **scaleIn:** Opacity 0 + scale(0.9) → scale(1)

- **Animation Classes:**
  - `.animate-fade-in`
  - `.animate-fade-in-up`
  - `.animate-slide-up`
  - `.animate-slide-up-delay`
  - `.animate-slide-up-delay-2`
  - `.animate-slide-in-left`
  - `.animate-slide-in-right`
  - `.animate-scale-in`

---

## 🎨 Design System

### Color Palette

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| **Primary** | `#8B4513` | Saddle Brown - Main brand color, buttons, icons |
| **Secondary** | `#D2B48C` | Tan - Accent color, hover states |
| **Background** | `#F9F7F2` | Cream/Off-white - Page backgrounds |
| **Text** | `#1A1A1A` | Dark Gray - Primary text color |
| **White** | `#FFFFFF` | Cards, backgrounds |
| **Black Overlay** | `rgba(0,0,0,0.5)` | Hero image overlays |

### Typography
- **Font Family:** Inter (Google Fonts)
- **Fallback:** system-ui, sans-serif
- **Headings:** Bold, various sizes (text-2xl to text-7xl)
- **Body:** Regular, responsive sizes (text-sm to text-lg)

### Spacing System
- **Mobile Padding:** px-4, py-12
- **Desktop Padding:** px-6 lg:px-8, py-20
- **Gaps:** gap-3, gap-4, gap-6, gap-8, gap-12
- **Margins:** mb-4, mb-6, mb-8, mb-12, mb-16

### Breakpoints
- **sm:** 640px
- **md:** 768px
- **lg:** 1024px
- **xl:** 1280px

---

## 📱 Pages Breakdown

### 1. Home Page (/)
**URL:** `/`  
**File:** `app/page.tsx`

**Sections:**
1. Hero Carousel (full-screen)
2. Features Section (3 cards)

**Components Used:**
- HeroCarousel
- Logo + Text branding
- Feature cards with icons

**Animations:**
- Hero text: slide-up with delays
- Features: fade-in-up on scroll

---

### 2. About Page (/about)
**URL:** `/about`  
**File:** `app/about/page.tsx`

**Sections:**
1. Header with logo
2. Two-column content grid
3. Contact information cards

**Content:**
- Company history
- Location details
- Contact info (email, phone)

**Icons:**
- Mail icon
- Phone icon

---

### 3. Products Page (/products)
**URL:** `/products`  
**File:** `app/products/page.tsx`

**Sections:**
1. Header with logo
2. Product grid (4 products)

**Products:**
1. Marine Grade Plywood (Waves icon)
2. Commercial Plywood (Building2 icon)
3. Shuttering Plywood (Hammer icon)
4. Teak Plywood (TreePine icon)

**Features:**
- Product images
- Badge indicators
- Icons on cards
- Hover effects

---

### 4. Gallery Page (/gallery)
**URL:** `/gallery`  
**File:** `app/gallery/page.tsx`

**Sections:**
1. Header with logo and icons
2. Gallery grid (7 images)

**Gallery Items:**
- Kitchen interiors
- Living rooms
- Offices
- Wardrobes
- Manufacturing facility

**Features:**
- Hover zoom effect
- Overlay with title/category
- Scale-in animations

---

### 5. Contact Page (/contact)
**URL:** `/contact`  
**File:** `app/contact/page.tsx`

**Sections:**
1. Header with logo and icons
2. Contact information card
3. Contact form
4. Google Maps embed

**Form Fields:**
- Name
- Email
- Phone
- Message

**Features:**
- Clickable email/phone links
- Google Maps integration
- Form validation ready

---

## 🧩 Components Breakdown

### 1. Navbar Component
**File:** `components/Navbar.tsx`  
**Type:** Client Component

**Props:** None

**State:**
- `isOpen` (boolean) - Mobile menu state

**Features:**
- Logo + text branding
- Responsive navigation
- Mobile drawer menu
- Smooth transitions

**Styling:**
- Sticky positioning
- White background
- Shadow for depth
- Hover effects on links

---

### 2. Footer Component
**File:** `components/Footer.tsx`  
**Type:** Server Component

**Props:** None

**Content:**
- Company name
- Address
- Copyright (dynamic year)

**Styling:**
- Dark brown background
- Centered text
- Responsive padding

---

### 3. HeroCarousel Component
**File:** `components/HeroCarousel.tsx`  
**Type:** Client Component

**Props:** None

**State:**
- `currentIndex` (number) - Current image index

**Features:**
- Auto-rotation (5 seconds)
- 3 images
- Fade transitions
- Dark overlay

**Images:**
1. Premium Plywood Manufacturing
2. Quality Plywood Products
3. Expert Craftsmanship

---

## 🎬 Animations & Interactions

### Scroll Animations
- **Intersection Observer:** Triggers animations when elements enter viewport
- **Threshold:** 0.1 (10% visible)
- **Staggered Delays:** Sequential animations for multiple items

### Hover Effects
- **Cards:** Lift effect (translate-y)
- **Buttons:** Scale effect (scale-105)
- **Images:** Zoom effect (scale-110)
- **Icons:** Scale effect (scale-110)
- **Shadows:** Enhanced on hover

### Transitions
- **Duration:** 200ms - 1000ms
- **Easing:** ease-out, ease-in-out
- **Properties:** opacity, transform, shadow

### Animation Types
1. **Fade In:** Simple opacity transition
2. **Fade In Up:** Opacity + vertical movement
3. **Slide Up:** Larger vertical movement
4. **Slide In Left/Right:** Horizontal movement
5. **Scale In:** Size transition

---

## 🖼 Assets & Images

### Logo
- **Location:** `src/assets/Logo.png`
- **Size:** 1024x1024 pixels
- **Format:** PNG
- **Usage:** Navbar, page headers

### Hero Images (Unsplash)
1. `photo-1618221195710` - Premium Plywood Manufacturing
2. `photo-1513694203232` - Quality Plywood Products
3. `photo-1589939705384` - Expert Craftsmanship

### Product Images (Unsplash)
- Marine Grade: `photo-1533090368676`
- Commercial/Shuttering/Teak: `photo-1589939705384`

### Gallery Images (Unsplash)
- Kitchen: `photo-1600566753376`
- Living Room: `photo-1600607686527`
- Office: `photo-1497366216548`
- Lumber Yard: `photo-1581092160562`

### Factory Image (About Page)
- `photo-1513694203232` - Factory/Manufacturing

---

## ⚙️ Configuration Files

### 1. package.json
**Scripts:**
- `dev`: Development server (next dev)
- `build`: Production build (next build)
- `start`: Production server (next start)
- `lint`: ESLint check (next lint)

**Dependencies:**
- React 18.3.1
- Next.js 14.2.5
- Lucide React 0.424.0

**Dev Dependencies:**
- TypeScript 5.5.3
- Tailwind CSS 3.4.7
- ESLint 8.57.0

---

### 2. tailwind.config.js
**Content Paths:**
- `./pages/**/*.{js,ts,jsx,tsx,mdx}`
- `./components/**/*.{js,ts,jsx,tsx,mdx}`
- `./app/**/*.{js,ts,jsx,tsx,mdx}`

**Custom Colors:**
- primary: #8B4513
- secondary: #D2B48C
- background: #F9F7F2
- text: #1A1A1A

**Font Family:**
- Inter (via CSS variable)

---

### 3. next.config.js
**Image Configuration:**
- Remote patterns: images.unsplash.com
- Allows external image optimization

---

### 4. tsconfig.json
**Compiler Options:**
- Target: ES2017
- Module: esnext
- JSX: preserve
- Strict mode: enabled

**Path Aliases:**
- `@/*` → `./*`

---

### 5. postcss.config.js
**Plugins:**
- tailwindcss
- autoprefixer

---

## 🚀 Deployment Information

### Build Commands
```bash
npm run build    # Create production build
npm start        # Start production server
```

### Environment Requirements
- Node.js 18+
- npm or yarn

### Production Optimizations
- Image optimization (Next.js Image component)
- Code splitting (automatic)
- Font optimization (Google Fonts)
- CSS minification
- JavaScript minification

### SEO Features
- Meta tags in layout.tsx
- Semantic HTML
- Alt text for images
- Proper heading hierarchy

---

## 📊 Icons Used Throughout Site

### Lucide React Icons

**Navigation:**
- Menu (hamburger)
- X (close)

**Features (Home):**
- Layers (Durability)
- BadgeCheck (Quality)
- Package (Delivery)

**Products:**
- Waves (Marine)
- Building2 (Commercial)
- Hammer (Shuttering)
- TreePine (Teak)

**Contact:**
- MapPin (Address)
- Phone (Phone)
- Mail (Email)
- Send (Submit button)
- MessageSquare (Contact header)
- Clock (Find Us)

**Gallery:**
- Camera (Gallery header)
- ImageIcon (Gallery header)

---

## 🎯 Key Features Summary

### Responsive Design
- ✅ Mobile-first approach
- ✅ Breakpoints: sm, md, lg, xl
- ✅ Flexible grid layouts
- ✅ Responsive typography
- ✅ Touch-friendly interactions

### Performance
- ✅ Image optimization
- ✅ Code splitting
- ✅ Lazy loading
- ✅ Priority loading for above-fold content

### User Experience
- ✅ Smooth animations
- ✅ Clear navigation
- ✅ Intuitive layout
- ✅ Accessible design
- ✅ Fast page loads

### Branding
- ✅ Consistent logo placement
- ✅ Brand colors throughout
- ✅ Professional typography
- ✅ Cohesive design language

---

## 📝 Notes

### Contact Information
- **Email:** info@marianply.com (placeholder)
- **Phone:** +91 98765 43210 (placeholder)
- **Address:** Malamury, Pulluvazhy P.O, Perumbavoor, Kerala 683541

### Company Details
- **Established:** November 2007
- **Type:** Partnership Firm
- **Location:** Perumbavoor, Kerala

### Future Enhancements
- Contact form backend integration
- Product detail pages
- Blog section
- Customer testimonials
- Social media links

---

## 🔧 Maintenance

### Updating Content
- Edit page files in `app/` directory
- Update product data in `app/products/page.tsx`
- Modify gallery items in `app/gallery/page.tsx`

### Styling Changes
- Modify `tailwind.config.js` for theme colors
- Update `app/globals.css` for custom animations
- Component-level styles in respective files

### Adding New Pages
1. Create new folder in `app/` directory
2. Add `page.tsx` file
3. Update Navbar links if needed

---

**Documentation Version:** 1.0  
**Last Updated:** 2025  
**Project:** Marian Ply Website



