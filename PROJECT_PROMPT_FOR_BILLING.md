# Detailed Project Prompt - Marian Ply Website Development

## Project Brief: Premium Plywood Manufacturer Website

Create a modern, professional, and fully responsive website for Marian Ply, a premium plywood manufacturer based in Perumbavoor, Kerala, India. The website should showcase their products, brands, company history, and provide easy contact options.

---

## 1. TECHNOLOGY STACK REQUIREMENTS

**Framework & Core:**
- Next.js 14+ with App Router (latest version)
- React 18+
- TypeScript (full type safety)
- Tailwind CSS for styling
- Lucide React for icons
- Inter font from Google Fonts

**Development Tools:**
- ESLint configuration
- TypeScript strict mode
- PostCSS and Autoprefixer

---

## 2. DESIGN REQUIREMENTS

### Color Scheme
- Primary Color: #8B4513 (Saddle Brown)
- Secondary Color: #D2B48C (Tan)
- Background: #F9F7F2 (Cream)
- Text: #1A1A1A (Dark Gray)

### Design Principles
- Modern, professional, and clean design
- Premium feel suitable for B2B manufacturing
- Mobile-first responsive design
- Smooth animations and transitions
- Professional typography with proper hierarchy
- Consistent spacing and layout

### Responsive Breakpoints
- Mobile: Base (320px+)
- Small: 640px (sm)
- Medium: 768px (md)
- Large: 1024px (lg)
- Extra Large: 1280px (xl)

---

## 3. PAGES & CONTENT STRUCTURE

### PAGE 1: HOME PAGE (/)

**Hero Section:**
- Full-screen height carousel with 4 hero images (auto-rotate every 5 seconds)
- Dark gradient overlay for text readability
- Badge/tagline: "Founded 2012 • 25+ Years Experience • ISO Certified"
- Main heading: "The Foundation of Fine Woodwork"
- Subtitle: "Premium Plywood Manufacturing" with location
- 4 certification badges (ISI Grade, BWR Grade, MR Grade, ISO 9001:2015)
- 3 CTA buttons: "Explore Our Products", "Call Us Now", "WhatsApp Us"
- Professional typography with strong text shadows for readability

**Brands Carousel Section:**
- Section title: "Our Brands"
- Carousel with 5 brands (AREION Ply, Marian Ply, Wood Piper, Ropos Ply, Ocen Ply)
- Auto-rotate every 3.5 seconds
- Pause functionality: stops auto-slide when user clicks arrows or hovers
- Left/Right arrow buttons for navigation
- Touch/swipe support for mobile
- Each brand card shows:
  - Brand logo (left side on desktop, top on mobile)
  - Brand name and description (right side on desktop, bottom on mobile)
  - "View All Brands" button
- Arrow buttons positioned to not overlap text on mobile

**Company Timeline Section:**
- Section title: "Our Journey"
- Timeline with 5 events:
  1. 2012 - New Ownership & Factory Foundation (with User icon)
  2. 2016 - Minor Expansion (with Target icon)
  3. 2018 - Brand Partnerships (with Users icon)
  4. 2020 - Major Expansion (with Building2 icon)
  5. 2026 - Austin Panels Investment (with Austin Panels logo image instead of icon)
- Vertical timeline line in center
- Cards alternate sides (left/right)
- Scroll-triggered animations
- Austin Panels logo displayed prominently (larger size, white background, border)
- Timeline events with icons, year, title, and description

**Gallery Slideshow Section:**
- Auto-rotating slideshow with 3 gallery images
- Fade transitions
- 4-second interval
- Slide indicators at bottom

**Why Choose Marian Ply Section:**
- Section with company logo and title
- Grid of 6 feature cards:
  1. Superior Durability (Layers icon) - with bullet points
  2. Premium Quality (BadgeCheck icon) - ISO certified, ISI/BWR/MR grades
  3. 25+ Years Experience (TrendingUp icon) - Established 2012, millions of units
  4. Manufacturing Excellence (Factory icon) - Modern facility, expansions
  5. Comprehensive Range (Package icon) - Multiple brands, thickness options
  6. Reliable Service (Award icon) - Delivery, support, Pan-Kerala coverage
- Each card has icon, title, description, and 3 bullet points
- Hover effects (lift animation)
- Professional styling

**IndiaMART Integration Section:**
- Card layout with IndiaMART logo (clickable, links to IndiaMART page)
- Title: "Buy on IndiaMART"
- Description text
- CTA button: "Visit Our IndiaMART Page to Buy"
- Logo displayed prominently

### PAGE 2: ABOUT PAGE (/about)

**Header:**
- Company logo and "MARIAN PLY" text
- Page title: "About Us"

**Content Grid (2 columns on desktop):**
- Left Column:
  - "Our Story" section with:
    - Company history: Founded in 2012 by Roy Thomas
    - Location: Perumbavoor, Kerala
    - 25+ years experience mentioned
    - Millions of units sold
    - Factory expansions (2016 minor, 2020 major)
    - Marian Ply as parent company
  - "Our Commitment" card
  - Austin Panels section with:
    - Large Austin Panels logo display
    - Title and description
    - Information about 2026 investment
    - Feature bullets
- Right Column:
  - Factory/company image

**Leadership Section:**
- "Our Leadership" title
- 2 cards:
  - Roy Thomas - Managing Director & Founder (with description about founding in 2012)
  - Austin Roy - Partner

**Contact Information Section:**
- Email card (info@marianply.com)
- Phone card (+91 98765 43210)
- IndiaMART section with logo

**Location Section:**
- "Visit Our Facility" title
- Location details: Malamury, Pulluvazhy P.O, Perumbavoor, Kerala 683541
- Visiting hours: Mon-Sat 9 AM - 6 PM, Sunday Closed

### PAGE 3: PRODUCTS PAGE (/products)

**Header:**
- Company logo and "MARIAN PLY" text
- Page title: "Our Products"
- Description text

**Product Grid (3 columns on desktop):**
- 5 product cards:
  1. Marine Grade Plywood
     - Icon: Waves
     - Description
     - Specifications: Thickness: 4mm - 22mm
  2. Commercial Plywood
     - Icon: Building2
     - Description
     - Specifications: Thickness: 4mm - 22mm
  3. Shuttering Plywood
     - Icon: Hammer
     - Description
     - Specifications: Thickness: 12mm - 25mm, Weight: 30kg - 60kg
  4. Calibrated Plywood
     - Icon: Ruler
     - Description
     - Specifications: Thickness: 4mm - 22mm
  5. Laminated Plywood
     - Icon: Layers
     - Description
- Each product card has:
  - Product image
  - Icon badge overlay
  - Product name with icon
  - Description
  - Specifications section (if available) with proper formatting
- Hover effects (lift animation)

**IndiaMART Section:**
- Similar to home page with logo and CTA

### PAGE 4: BRANDS PAGE (/brands)

**Header:**
- Company logo and "MARIAN PLY" text
- Page title: "Our Brands"
- Description text

**Brands Grid (2 columns on desktop):**
- 5 brand cards displayed in order:
  1. AREION Ply (first)
  2. Marian Ply (second)
  3. Wood Piper (third)
  4. Ropos Ply (fourth)
  5. Ocen Ply (fifth)
- Each card shows:
  - Large brand logo (centered, white background)
  - Brand name
  - Brand description
- Hover effects (shadow increase)
- Clean, professional layout

**IndiaMART Section:**
- Same as other pages

### PAGE 5: GALLERY PAGE (/gallery)

**Header:**
- Company logo and "MARIAN PLY" text
- Page title: "Our Gallery" with Camera and ImageIcon icons
- Description text

**Gallery Grid (3 columns on desktop):**
- 7 gallery images
- Each image:
  - Image with object-contain
  - Title and category overlay on hover
  - Gradient overlay on hover
  - Click functionality to open in lightbox modal
- Lightbox Modal Features:
  - Full-screen dark overlay (95% opacity)
  - Large image display (max 85vh height)
  - Close button (X) - top right
  - Previous/Next navigation buttons (left/right)
  - Keyboard navigation (Escape to close, Arrow keys to navigate)
  - Image counter (e.g., "1 / 7")
  - Image title and category displayed below
  - Body scroll lock when modal open
  - Smooth fade-in animation

### PAGE 6: CONTACT PAGE (/contact)

**Header:**
- Company logo and "MARIAN PLY" text
- Page title: "Contact Us"
- Description text

**Contact Information Cards:**
- Email card (info@marianply.com)
- Phone card (+91 98765 43210)
- Location card (Malamury, Pulluvazhy P.O, Perumbavoor, Kerala 683541)
- IndiaMART card with logo

**Contact Form:**
- Name field
- Email field
- Phone field
- Message field (textarea)
- Submit button
- Form styling and validation ready

---

## 4. NAVIGATION & FOOTER

### Navigation Bar (Sticky)
- Company logo (left side)
- "MARIAN PLY" text next to logo
- Navigation links (desktop): Home, About Us, Products, Our Brands, Gallery, Contact Us
- Mobile menu: Hamburger icon, slide-in sidebar menu
- Hover effects on links
- Active states
- Smooth transitions

### Footer
- Company logo and name
- Company description with 25+ years experience mentioned
- Certification badges (ISI, ISO 9001:2015, BWR/MR)
- 4 columns:
  1. Company info with logo
  2. Quick Links (navigation)
  3. Contact Information (address, phone, email, hours)
  4. Products & Services (product list, WhatsApp button, IndiaMART link)
- Copyright notice
- Links to Privacy Policy and Terms & Conditions
- Dark background (primary color)
- White text with secondary color accents

---

## 5. FUNCTIONALITY REQUIREMENTS

### Carousel Functionality
- Auto-rotation with configurable intervals
- Pause on hover/mouse enter
- Pause when user clicks navigation arrows
- Pause when user swipes/touches
- Smooth transitions
- Touch/swipe support for mobile

### Gallery Lightbox
- Click to open full-screen modal
- Close on: outside click, Escape key, close button
- Navigate with: arrow buttons, keyboard arrows
- Image counter display
- Smooth animations
- Body scroll lock

### Responsive Behavior
- Mobile-first design approach
- All elements scale properly
- Navigation adapts (hamburger menu on mobile)
- Images optimize for different screen sizes
- Touch-friendly button sizes (min 44x44px)
- Readable text on all devices

### Animations
- Fade-in animations on scroll
- Hover effects (scale, shadow, translate)
- Smooth transitions (300ms default)
- Scroll-triggered animations (Intersection Observer)
- Staggered animations for lists

---

## 6. SEO REQUIREMENTS

### Meta Tags
- Comprehensive title tags for all pages
- Rich meta descriptions (160-320 characters)
- Keywords meta tag
- Open Graph tags for social sharing
- Twitter Card support
- Canonical URLs

### Structured Data (JSON-LD)
- Organization schema with:
  - Company name, logo, description
  - Complete address
  - Contact information
  - Founder information (Roy Thomas)
  - Social media links (IndiaMART)
  - Founding date (2012)
- Website schema
- Page-specific schemas (AboutPage, ContactPage, CollectionPage)

### Technical SEO
- Semantic HTML structure
- Proper heading hierarchy (H1, H2, H3)
- Alt text for all images
- Descriptive link text
- Fast loading times
- Mobile-friendly (responsive)
- Accessible design

### Content Requirements
- Home page title: "Marian Ply - Best Plywood Manufacturers in Kerala | ISI Certified | Perumbavoor"
- Description must include: "Leading plywood manufacturers in Kerala. Best plywood for furniture, waterproof plywood, BWR grade plywood. ISI certified quality. 25+ years experience."
- Keyword-rich but natural content
- Location-based keywords (Kerala, Perumbavoor)

---

## 7. CONTENT DETAILS

### Company Information
- Name: Marian Ply
- Founded: 2012 (by Roy Thomas)
- Location: Malamury, Pulluvazhy P.O, Perumbavoor, Kerala 683541
- Experience: 25+ years
- Founder: Roy Thomas
- Partner: Austin Roy
- Business Type: Partnership Firm
- Certifications: ISO 9001:2015, ISI, BWR, MR Grade

### Timeline Events
1. **2012** - New Ownership & Factory Foundation (Roy Thomas acquisition and factory founding)
2. **2016** - Minor Expansion (factory expansion)
3. **2018** - Brand Partnerships (Wood Piper, Ocen Ply, Ropos Ply, AREION Ply)
4. **2020** - Major Expansion (significant factory expansion)
5. **2026** - Austin Panels Investment (new venture investment)

### Products with Specifications
1. Marine Grade Plywood - Thickness: 4mm - 22mm
2. Commercial Plywood - Thickness: 4mm - 22mm
3. Shuttering Plywood - Thickness: 12mm - 25mm, Weight: 30kg - 60kg
4. Calibrated Plywood - Thickness: 4mm - 22mm
5. Laminated Plywood

### Brands (in order)
1. AREION Ply
2. Marian Ply
3. Wood Piper
4. Ropos Ply
5. Ocen Ply

### Brand Descriptions
- **AREION Ply:** "A responsible choice - Premium branded plywood with distinctive orange design for modern construction."
- **Marian Ply:** "Our own premium plywood brand - Leading plywood manufacturers in Kerala. Best plywood for furniture, waterproof plywood, BWR grade plywood. ISI certified quality. Crafted with excellence and quality."
- **Wood Piper:** "Premium quality plywood brand known for its durability and reliability."
- **Ropos Ply:** "Renowned plywood brand delivering superior quality products for construction and interior applications."
- **Ocen Ply:** "High-quality plywood brand offering excellent performance for commercial and residential projects."

### Contact Information
- Email: info@marianply.com
- Phone: +91 98765 43210
- Address: Malamury, Pulluvazhy P.O, Perumbavoor, Kerala 683541, India
- Business Hours: Monday - Saturday: 9:00 AM - 6:00 PM, Sunday: Closed
- IndiaMART: https://www.indiamart.com/marian-plywood/

---

## 8. IMAGE REQUIREMENTS

### Logo Files
- Main company logo: `/logo.png` (used in navbar, footer, favicon)
- Favicon: `/app/icon.png`
- Brand logos in `/brands/` folder:
  - areion.png
  - marian_brand.png
  - wood-piper-logo-removebg-preview.png
  - ropos-ply-logo.png
  - ocen-ply-logo-removebg-preview (1).png

### Hero Images
- 4 hero carousel images: `/hero 0.png`, `/hero 1.png`, `/hero 2.png`, `/hero 3.png`

### Gallery Images
- 7-8 images in `/gallery/` folder

### Other Images
- Austin Panels logo: `/austin-panels-logo.png`
- IndiaMART logo: `/INDIAMART.NS-ecf147e0.png`
- Product images (can use placeholders or actual product images)
- About page factory image

---

## 9. INTERACTIVE FEATURES

### Brand Carousel
- Auto-rotate every 3.5 seconds
- Pause on hover
- Pause when arrows clicked
- Pause on touch/swipe
- Left/Right arrow navigation
- Touch/swipe support
- Smooth transitions

### Gallery Lightbox
- Click image to open full-screen
- Close button, Escape key, click outside
- Previous/Next buttons
- Keyboard navigation (arrow keys)
- Image counter
- Body scroll lock
- Smooth animations

### Navigation
- Sticky navbar
- Mobile hamburger menu
- Smooth scroll (if needed)
- Active link states

### Animations
- Fade-in on scroll
- Hover effects
- Smooth transitions
- Scroll-triggered animations

---

## 10. PERFORMANCE REQUIREMENTS

- Fast page load times
- Optimized images (Next.js Image component)
- Lazy loading for below-fold images
- Code splitting (automatic with Next.js)
- Minified CSS and JavaScript
- Optimized fonts
- Lighthouse score target: 90+

---

## 11. ACCESSIBILITY REQUIREMENTS

- Semantic HTML
- Proper ARIA labels
- Keyboard navigation support
- Focus states
- Alt text for images
- Sufficient color contrast
- Touch-friendly button sizes (min 44x44px)

---

## 12. BROWSER COMPATIBILITY

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 13. DELIVERABLES

1. **Complete Website** with all pages and functionality
2. **Responsive Design** working on all devices
3. **SEO Optimization** with meta tags and structured data
4. **Performance Optimized** code and assets
5. **Clean, Maintainable Code** with TypeScript
6. **Documentation** (README, code comments)
7. **Production Ready** build

---

## 14. SPECIAL REQUIREMENTS

### Brand Carousel
- Auto-rotate must pause when user interacts (arrows, swipe, hover)
- Arrow buttons must not overlap text on mobile view
- Smooth transitions between brands

### Timeline
- Austin Panels (2026) entry must display logo instead of icon
- Logo should be prominently visible and larger than standard icons
- Scroll-triggered animations

### Gallery
- Click-to-open lightbox functionality is mandatory
- Full keyboard navigation support
- Smooth animations

### SEO
- Structured data (JSON-LD) must be implemented
- All meta tags properly configured
- Logo/favicon properly set up for search engines

### Content Accuracy
- Timeline: 2012 (founding), 2016 (minor expansion), 2018 (brands), 2020 (major expansion), 2026 (Austin Panels)
- NO 2015 certification entry (not accurate)
- 25+ years experience mentioned in key places
- Founded by Roy Thomas in 2012
- Marian Ply is parent company

---

## 15. DESIGN SPECIFICATIONS

### Typography
- Font: Inter (Google Fonts)
- Weights: 400, 500, 600, 700, 800
- Responsive font sizes
- Proper line heights
- Letter spacing adjustments

### Spacing
- Consistent padding and margins
- Responsive spacing (smaller on mobile, larger on desktop)
- Proper gaps in grids

### Shadows & Effects
- Subtle shadows for depth
- Hover shadow increases
- Smooth transitions
- Professional gradients

### Icons
- Lucide React icon library
- Consistent icon sizes
- Proper colors (primary color for most)
- Accessible icon usage

---

## 16. CODE QUALITY REQUIREMENTS

- TypeScript with strict mode
- ESLint configuration
- Clean, readable code
- Component-based architecture
- Reusable components
- Proper file structure
- Comments for complex logic
- Consistent code style

---

## 17. TESTING REQUIREMENTS

- Test on multiple browsers
- Test on mobile devices
- Test all interactive features
- Test form functionality
- Test navigation
- Test responsive breakpoints
- Test image loading
- Test animations

---

## 18. DEPLOYMENT CONSIDERATIONS

- Build should be production-ready
- Environment variables ready (if needed)
- Image optimization configured
- Error handling implemented
- 404 page (if needed)
- Loading states
- Error states

---

## PROJECT SCOPE SUMMARY

**Total Pages:** 6 (Home, About, Products, Brands, Gallery, Contact)  
**Components:** Navbar, Footer, HeroCarousel  
**Features:** Carousel, Lightbox, Timeline, Forms, Animations  
**SEO:** Full optimization with structured data  
**Responsive:** Mobile-first, all breakpoints  
**Performance:** Optimized and fast  
**Code Quality:** TypeScript, ESLint, Clean code  

**Estimated Complexity:** Medium to High  
**Key Challenges:**
- Complex carousel with pause logic
- Lightbox modal with keyboard navigation
- Timeline with scroll animations
- Responsive design across all components
- SEO implementation with structured data
- Performance optimization

---

## FINAL NOTES

This is a professional B2B manufacturing website requiring:
- High-quality, polished design
- Excellent user experience
- Strong SEO foundation
- Professional code quality
- Full responsiveness
- Performance optimization
- Accessibility considerations

The website should represent the premium quality of Marian Ply's products and services while being user-friendly and conversion-oriented.

---

**Use this prompt to:**
1. Document the complete project scope
2. Justify development time and costs
3. Provide to developers/AI for recreation
4. Use as project specification
5. Reference for future updates
