'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Layers, BadgeCheck, Package, Award, Shield, ChevronLeft, ChevronRight, Calendar, Building2, Users, Target, Phone, Mail, Sparkles, Clock, Store, User, Factory, TrendingUp, CheckCircle2, Star } from 'lucide-react'
import HeroCarousel from '@/components/HeroCarousel'
import StatsCounter from '@/components/StatsCounter'
import { useState, useEffect, useRef } from 'react'

const brands = [
  {
    id: 5,
    name: 'AREION Ply',
    description: 'A responsible choice - Premium branded plywood with distinctive orange design for modern construction.',
    image: '/areion-plywood.jpeg',
    logo: '/brands/areion.png',
  },
  {
    id: 1,
    name: 'Marian Ply',
    description: 'Our own premium plywood brand - Leading plywood manufacturers in Kerala. Best plywood for furniture, waterproof plywood, BWR grade plywood. ISI certified quality. Crafted with excellence and quality.',
    image: '/areion-plywood.jpeg',
    logo: '/brands/marian_brand.png',
  },
  {
    id: 2,
    name: 'Wood Piper',
    description: 'Premium quality plywood brand known for its durability and reliability.',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop',
    logo: '/brands/wood-piper-logo-removebg-preview.png',
  },
  {
    id: 4,
    name: 'Ropos Ply',
    description: 'Renowned plywood brand delivering superior quality products for construction and interior applications.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop',
    logo: '/brands/ropos-ply-logo.png',
  },
  {
    id: 3,
    name: 'Ocen Ply',
    description: 'High-quality plywood brand offering excellent performance for commercial and residential projects.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop',
    logo: '/brands/ocen-ply-logo-removebg-preview (1).png',
  },
]

export default function Home() {
  const [currentBrandIndex, setCurrentBrandIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [isPaused, setIsPaused] = useState(false)

  const minSwipeDistance = 50

  const nextBrand = () => {
    setIsPaused(true)
    setCurrentBrandIndex((prev) => (prev + 1) % brands.length)
  }

  const prevBrand = () => {
    setIsPaused(true)
    setCurrentBrandIndex((prev) => (prev - 1 + brands.length) % brands.length)
  }

  // Auto-rotate brands carousel
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentBrandIndex((prev) => (prev + 1) % brands.length)
    }, 3500) // Change brand every 3.5 seconds

    return () => clearInterval(interval)
  }, [isPaused])

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      setIsPaused(true)
      nextBrand()
    }
    if (isRightSwipe) {
      setIsPaused(true)
      prevBrand()
    }
  }

  const homePageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Marian Ply - Best Plywood Manufacturers in Kerala',
    description: 'Leading plywood manufacturers in Kerala. Best plywood for furniture, waterproof plywood, BWR grade plywood. ISI certified quality. 25+ years experience.',
    url: 'https://www.marianply.com',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }}
      />
      <div className="w-full">
      <section className="relative min-h-[90vh] sm:min-h-[95vh] md:h-screen md:min-h-[700px] flex items-center justify-center overflow-hidden">
        <HeroCarousel />
        {/* Enhanced gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/55 z-[5]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/20 to-black/30 z-[5]" />
        
        <div className="relative z-10 text-center px-4 sm:px-6 md:px-8 lg:px-12 max-w-6xl mx-auto w-full py-20 sm:py-24 md:py-32">
          {/* Professional badge/tagline */}
          <div className="mb-4 sm:mb-6 md:mb-8 animate-fade-in-scale" style={{ animationDelay: '0.1s' }}>
            <span className="inline-block bg-primary/95 backdrop-blur-md text-white px-5 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 rounded-full text-xs sm:text-sm md:text-base font-bold tracking-wider uppercase shadow-xl border-2 border-white/30 letter-spacing-wider">
              Founded 2012 • 25+ Years Experience • ISO Certified
            </span>
          </div>

          {/* Main heading with refined typography */}
          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-7xl font-bold text-white mb-5 sm:mb-6 md:mb-8 lg:mb-10 leading-[1.15] sm:leading-[1.2] md:leading-[1.2] tracking-normal sm:tracking-[-0.02em] px-2 animate-fade-in-scale" style={{ animationDelay: '0.2s', textShadow: '0 4px 30px rgba(0,0,0,0.9), 0 8px 60px rgba(0,0,0,0.7), 0 2px 10px rgba(0,0,0,0.8)' }}>
            The Foundation of
            <span className="block mt-2 sm:mt-3 text-white font-bold" style={{ textShadow: '0 4px 30px rgba(0,0,0,0.9), 0 8px 60px rgba(0,0,0,0.7), 0 2px 10px rgba(0,0,0,0.8)' }}>
              Fine Woodwork
            </span>
          </h1>
          
          {/* Subtitle with elegant styling */}
          <p className="text-xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-semibold text-white mb-6 sm:mb-8 md:mb-10 lg:mb-12 leading-[1.4] sm:leading-[1.5] tracking-normal px-2 max-w-5xl mx-auto animate-fade-in-scale" style={{ animationDelay: '0.3s', textShadow: '0 3px 20px rgba(0,0,0,0.85), 0 6px 40px rgba(0,0,0,0.65)' }}>
            Premium Plywood Manufacturing
            <span className="block mt-3 sm:mt-4 text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl text-white/95 font-normal leading-relaxed">
              Crafted with Excellence in Perumbavoor, Kerala
            </span>
          </p>
          
          {/* Professional certification badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10 md:mb-12 lg:mb-16 px-2">
            <div className="group flex items-center gap-2 sm:gap-2.5 bg-white/95 backdrop-blur-md px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-lg shadow-xl border border-white/30 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in-scale" style={{ animationDelay: '0.4s' }}>
              <div className="bg-primary/10 p-1.5 sm:p-2 rounded-lg">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <span className="text-xs sm:text-sm md:text-base font-bold text-primary tracking-wide">ISI Grade</span>
            </div>
            <div className="group flex items-center gap-2 sm:gap-2.5 bg-white/95 backdrop-blur-md px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-lg shadow-xl border border-white/30 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in-scale" style={{ animationDelay: '0.45s' }}>
              <div className="bg-primary/10 p-1.5 sm:p-2 rounded-lg">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <span className="text-xs sm:text-sm md:text-base font-bold text-primary">BWR Grade</span>
            </div>
            <div className="group flex items-center gap-2 sm:gap-2.5 bg-white/95 backdrop-blur-md px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-lg shadow-xl border border-white/30 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in-scale" style={{ animationDelay: '0.5s' }}>
              <div className="bg-primary/10 p-1.5 sm:p-2 rounded-lg">
                <BadgeCheck className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <span className="text-xs sm:text-sm md:text-base font-bold text-primary">MR Grade</span>
            </div>
            <div className="group flex items-center gap-2 sm:gap-2.5 bg-white/95 backdrop-blur-md px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-lg shadow-xl border border-white/30 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in-scale" style={{ animationDelay: '0.55s' }}>
              <div className="bg-primary/10 p-1.5 sm:p-2 rounded-lg">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <span className="text-xs sm:text-sm md:text-base font-bold text-primary">ISO 9001:2015</span>
            </div>
          </div>
          
          {/* Professional CTA buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 px-2 animate-fade-in-scale" style={{ animationDelay: '0.6s' }}>
            <Link
              href="/products"
              className="group inline-flex items-center justify-center gap-2 sm:gap-2.5 bg-primary hover:bg-[#7A3A10] active:bg-[#6B2F0E] text-white font-bold px-6 py-3 sm:px-8 sm:py-3.5 md:px-10 md:py-4 lg:px-12 lg:py-4 rounded-xl transition-all duration-300 text-base sm:text-lg md:text-lg lg:text-xl xl:text-xl tracking-wide transform hover:scale-105 active:scale-95 shadow-2xl hover:shadow-[0_20px_40px_rgba(139,69,19,0.4)] border-2 border-white/30 min-h-[50px] sm:min-h-[56px]"
            >
              <Package className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:scale-110" />
              <span>Explore Our Products</span>
            </Link>
            <a
              href="tel:+919544339555"
              className="group inline-flex items-center justify-center gap-2 sm:gap-2.5 bg-white/95 hover:bg-white active:bg-gray-50 backdrop-blur-md text-primary font-bold px-6 py-3 sm:px-8 sm:py-3.5 md:px-10 md:py-4 lg:px-12 lg:py-4 rounded-xl transition-all duration-300 text-base sm:text-lg md:text-lg lg:text-xl xl:text-xl tracking-wide transform hover:scale-105 active:scale-95 shadow-2xl hover:shadow-[0_20px_40px_rgba(255,255,255,0.3)] border-2 border-white/40 min-h-[50px] sm:min-h-[56px]"
            >
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:scale-110" />
              <span>Call Us Now</span>
            </a>
            <a
              href="https://wa.me/919544339555"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 sm:gap-2.5 bg-secondary/95 hover:bg-secondary backdrop-blur-md text-text font-bold px-6 py-3 sm:px-8 sm:py-3.5 md:px-10 md:py-4 lg:px-12 lg:py-4 rounded-xl transition-all duration-300 text-base sm:text-lg md:text-lg lg:text-xl xl:text-xl tracking-wide transform hover:scale-105 active:scale-95 shadow-2xl hover:shadow-[0_20px_40px_rgba(196,165,117,0.4)] border-2 border-white/30 min-h-[50px] sm:min-h-[56px]"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:scale-110" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* Animated Stats Counter */}
      <StatsCounter />

      <section className="py-8 sm:py-10 md:py-14 lg:py-18 px-4 sm:px-5 md:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6 sm:mb-8 md:mb-12 animate-fade-in-scale" style={{ animationDelay: '0.1s' }}>
            <div className="flex justify-center items-center gap-2 sm:gap-3 mb-3 sm:mb-4 md:mb-6">
              <div className="bg-primary/10 p-2 sm:p-3 rounded-full animate-pulse">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-primary" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-text px-2">
                Our Brands
              </h2>
            </div>
            <p className="text-center text-text/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
              Discover the premium brands we offer, each representing excellence in quality and craftsmanship.
            </p>
          </div>

          <div className="relative">
            <div 
              className="relative overflow-hidden rounded-lg touch-pan-y"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div 
                className="flex transition-transform duration-500 ease-in-out will-change-transform"
                style={{ transform: `translateX(-${currentBrandIndex * 100}%)` }}
              >
                {brands.map((brand, index) => (
                  <div key={brand.id} className="min-w-full flex-shrink-0 w-full">
                    <div className="bg-background rounded-lg shadow-lg overflow-hidden w-full transform transition-all duration-500 hover:shadow-xl">
                      <div className="flex flex-col md:grid md:grid-cols-2 gap-0">
                        {/* Brand Logo Section */}
                        <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 w-full bg-white flex items-center justify-center p-6 sm:p-8 md:p-10 lg:p-12 group">
                          <div className="relative w-full h-full max-w-md transform transition-all duration-700 group-hover:scale-105">
                            <Image
                              src={brand.logo}
                              alt={`${brand.name} Logo`}
                              fill
                              className="object-contain transition-all duration-500"
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                              quality={90}
                              loading="lazy"
                            />
                          </div>
                        </div>
                        {/* Brand Info Section */}
                        <div className="p-5 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-center bg-white transform transition-all duration-500">
                          <h3 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl font-bold text-text mb-4 sm:mb-6 transform transition-all duration-300 hover:translate-x-2">
                            {brand.name}
                          </h3>
                          <p className="text-text/90 text-sm sm:text-base md:text-base lg:text-lg xl:text-lg leading-relaxed mb-4 sm:mb-6 transform transition-all duration-500">
                            {brand.description}
                          </p>
                          <Link
                            href="/brands"
                            className="inline-block bg-primary hover:bg-[#7A3A10] active:bg-[#6B2F0E] text-white font-semibold px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg transition-all duration-300 text-sm sm:text-base md:text-lg transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg w-fit touch-manipulation"
                          >
                            View All Brands
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={prevBrand}
              className="absolute left-2 sm:left-4 top-[200px] sm:top-[240px] md:top-1/2 md:-translate-y-1/2 bg-white/95 hover:bg-white active:bg-white text-primary p-2 sm:p-2.5 md:p-3 lg:p-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-20 transform hover:scale-110 active:scale-95 touch-manipulation min-w-[40px] min-h-[40px] sm:min-w-[44px] sm:min-h-[44px] flex items-center justify-center md:z-10"
              aria-label="Previous brand"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" />
            </button>
            <button
              onClick={nextBrand}
              className="absolute right-2 sm:right-4 top-[200px] sm:top-[240px] md:top-1/2 md:-translate-y-1/2 bg-white/95 hover:bg-white active:bg-white text-primary p-2 sm:p-2.5 md:p-3 lg:p-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-20 transform hover:scale-110 active:scale-95 touch-manipulation min-w-[40px] min-h-[40px] sm:min-w-[44px] sm:min-h-[44px] flex items-center justify-center md:z-10"
              aria-label="Next brand"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" />
            </button>
          </div>
        </div>
      </section>

      {/* Company Timeline Section */}
      <section className="py-8 sm:py-10 md:py-14 lg:py-18 px-4 sm:px-5 md:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <div className="flex justify-center items-center gap-2 sm:gap-3 mb-3 sm:mb-4 md:mb-6">
              <div className="bg-primary/10 p-2 sm:p-3 rounded-full">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-primary" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-text px-2">
                Our Journey
              </h2>
            </div>
            <p className="text-text/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
              A timeline of our growth and milestones since establishment
            </p>
          </div>
          <CompanyTimeline />
        </div>
      </section>

      {/* Gallery Slideshow Section */}
      <GallerySlideshow />

      <section className="py-8 sm:py-10 md:py-14 lg:py-18 px-4 sm:px-5 md:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <div className="flex justify-center items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-4 sm:mb-6 md:mb-8">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-20 md:h-20 lg:w-20 lg:h-20 xl:w-20 xl:h-20">
                <Image
                  src="/logo.png"
                  alt="Marian Ply Logo"
                  fill
                  className="object-contain drop-shadow-lg"
                  priority
                  sizes="(max-width: 640px) 64px, (max-width: 1024px) 80px, 80px"
                />
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl font-extrabold text-black tracking-tight">
                  MARIAN PLY
                </span>
                <span className="text-xs sm:text-sm md:text-sm lg:text-base xl:text-base text-text/70 font-medium italic">
                  Serve the best
                </span>
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-center text-text mb-3 sm:mb-4 md:mb-6 px-2">
              Why Choose Marian Ply?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
            {/* Durability */}
            <div className="text-center p-5 sm:p-6 md:p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex justify-center mb-3 sm:mb-4">
                <div className="bg-primary/10 p-3 sm:p-4 rounded-full">
                  <Layers className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-primary" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl font-bold text-text mb-2 sm:mb-3 md:mb-4">Superior Durability</h3>
              <p className="text-text/80 text-xs sm:text-sm md:text-base leading-relaxed mb-3">
                Built to last with premium quality materials and expert craftsmanship that withstands the test of time.
              </p>
              <ul className="text-left text-xs sm:text-sm text-text/70 space-y-1.5 mt-3 max-w-xs mx-auto">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>High-grade raw materials</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Advanced manufacturing techniques</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Long-lasting performance</span>
                </li>
              </ul>
            </div>

            {/* Quality */}
            <div className="text-center p-5 sm:p-6 md:p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex justify-center mb-3 sm:mb-4">
                <div className="bg-primary/10 p-3 sm:p-4 rounded-full">
                  <BadgeCheck className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-primary" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl font-bold text-text mb-2 sm:mb-3 md:mb-4">Premium Quality</h3>
              <p className="text-text/80 text-xs sm:text-sm md:text-base leading-relaxed mb-3">
                ISO 9001:2015 certified products meeting the highest industry standards and quality benchmarks.
              </p>
              <ul className="text-left text-xs sm:text-sm text-text/70 space-y-1.5 mt-3 max-w-xs mx-auto">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>ISO 9001:2015 certified</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>ISI, BWR, MR grade standards</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Rigorous quality testing</span>
                </li>
              </ul>
            </div>

            {/* Experience & Expertise */}
            <div className="text-center p-5 sm:p-6 md:p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex justify-center mb-3 sm:mb-4">
                <div className="bg-primary/10 p-3 sm:p-4 rounded-full">
                  <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-primary" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl font-bold text-text mb-2 sm:mb-3 md:mb-4">25+ Years Experience</h3>
              <p className="text-text/80 text-xs sm:text-sm md:text-base leading-relaxed mb-3">
                Decades of expertise in plywood manufacturing with millions of units sold and satisfied customers.
              </p>
              <ul className="text-left text-xs sm:text-sm text-text/70 space-y-1.5 mt-3 max-w-xs mx-auto">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Established in 2012</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Millions of units delivered</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Industry-leading expertise</span>
                </li>
              </ul>
            </div>

            {/* Manufacturing Excellence */}
            <div className="text-center p-5 sm:p-6 md:p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex justify-center mb-3 sm:mb-4">
                <div className="bg-primary/10 p-3 sm:p-4 rounded-full">
                  <Factory className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-primary" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl font-bold text-text mb-2 sm:mb-3 md:mb-4">Manufacturing Excellence</h3>
              <p className="text-text/80 text-xs sm:text-sm md:text-base leading-relaxed mb-3">
                State-of-the-art facility with major expansion in 2020, ensuring consistent quality and production capacity.
              </p>
              <ul className="text-left text-xs sm:text-sm text-text/70 space-y-1.5 mt-3 max-w-xs mx-auto">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Modern manufacturing facility</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Expanded production capacity</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Advanced quality control</span>
                </li>
              </ul>
            </div>

            {/* Wide Range */}
            <div className="text-center p-5 sm:p-6 md:p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex justify-center mb-3 sm:mb-4">
                <div className="bg-primary/10 p-3 sm:p-4 rounded-full">
                  <Package className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-primary" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl font-bold text-text mb-2 sm:mb-3 md:mb-4">Comprehensive Range</h3>
              <p className="text-text/80 text-xs sm:text-sm md:text-base leading-relaxed mb-3">
                Diverse product portfolio including premium brands like Marian Ply, Wood Piper, Ocen Ply, Ropos Ply, and AREION Ply.
              </p>
              <ul className="text-left text-xs sm:text-sm text-text/70 space-y-1.5 mt-3 max-w-xs mx-auto">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Multiple premium brands</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Various thickness options</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Custom solutions available</span>
                </li>
              </ul>
            </div>

            {/* Reliable Service */}
            <div className="text-center p-5 sm:p-6 md:p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex justify-center mb-3 sm:mb-4">
                <div className="bg-primary/10 p-3 sm:p-4 rounded-full">
                  <Award className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-primary" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl font-bold text-text mb-2 sm:mb-3 md:mb-4">Reliable Service</h3>
              <p className="text-text/80 text-xs sm:text-sm md:text-base leading-relaxed mb-3">
                Trusted partner for timely delivery, exceptional customer service, and ongoing support across Kerala and beyond.
              </p>
              <ul className="text-left text-xs sm:text-sm text-text/70 space-y-1.5 mt-3 max-w-xs mx-auto">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Prompt delivery service</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Dedicated customer support</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Pan-Kerala coverage</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* IndiaMART Section */}
      <section className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md border border-gray-200">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="flex-shrink-0">
                <a 
                  href="https://www.indiamart.com/marian-plywood/?srsltid=AfmBOoo2pQchatmFwPDWAszKIIizzsEdU7nz08CzZLbupNjEvmR30HZS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
                    <Image
                      src="/INDIAMART.NS-ecf147e0.png"
                      alt="IndiaMART Logo"
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 96px, 128px"
                    />
                  </div>
                </a>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl font-bold text-text mb-2">
                  Buy on IndiaMART
                </h3>
                <p className="text-text/70 text-sm sm:text-base mb-4">
                  Visit our IndiaMART page to purchase our products
                </p>
                <a 
                  href="https://www.indiamart.com/marian-plywood/?srsltid=AfmBOoo2pQchatmFwPDWAszKIIizzsEdU7nz08CzZLbupNjEvmR30HZS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-[#7A3A10] text-white font-semibold px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg transition-all duration-200 text-sm sm:text-base shadow-md hover:shadow-lg"
                >
                  <Store className="w-4 h-4" />
                  <span>Visit Our IndiaMART Page to Buy</span>
                  <span className="text-xs">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

function GallerySlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const slideshowImages = [
    {
      src: '/gallery/2.jpeg',
      alt: 'Premium Plywood Showcase',
    },
    {
      src: '/gallery/4.png',
      alt: 'Quality Plywood Collection',
    },
    {
      src: '/gallery/6.png',
      alt: 'Expert Craftsmanship',
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slideshowImages.length)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full h-[280px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[600px] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      {slideshowImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div className="relative w-full h-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 md:py-6 lg:py-8">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-contain"
              priority={index === 0}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, (max-width: 1280px) 85vw, 1200px"
              quality={90}
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          </div>
        </div>
      ))}
      {/* Slide indicators */}
      <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {slideshowImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'w-8 bg-primary'
                : 'w-2 bg-primary/50 hover:bg-primary/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

function CompanyTimeline() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    itemRefs.current.forEach((ref, index) => {
      if (!ref) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleItems((prev) => new Set([...prev, index]))
            }
          })
        },
        {
          threshold: 0.2,
          rootMargin: '0px 0px -50px 0px',
        }
      )

      observer.observe(ref)
      observers.push(observer)
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  const timelineEvents = [
    {
      year: '2012',
      title: 'New Ownership & Factory Foundation',
      description: 'Marian Ply was acquired from the previous owner and founded by Roy Thomas. His sheer determination and hardwork paved the way for Marian Ply. The factory was founded in 2012, marking the beginning of our journey under new leadership.',
      icon: User,
      color: 'bg-primary',
    },
    {
      year: '2016',
      title: 'Minor Expansion',
      description: 'The factory underwent a minor expansion to accommodate growing production needs and enhance our manufacturing capabilities.',
      icon: Target,
      color: 'bg-secondary',
    },
    {
      year: '2018',
      title: 'Brand Partnerships',
      description: 'Established partnerships with premium brands including Wood Piper, Ocen Ply, Ropos Ply, and AREION Ply.',
      icon: Users,
      color: 'bg-secondary',
    },
    {
      year: '2020',
      title: 'Major Expansion',
      description: 'The factory underwent a major expansion, significantly increasing our production capacity and strengthening our position in the market.',
      icon: Building2,
      color: 'bg-primary',
    },
    {
      year: '2026',
      title: 'Austin Panels Investment',
      description: 'Made another big investment with Austin Panels company, expanding our business portfolio and furthering our commitment to excellence in the plywood industry.',
      icon: Building2,
      color: 'bg-secondary',
      logo: '/austin-panels-logo.png',
    },
  ]

  return (
    <div className="relative max-w-4xl mx-auto px-2 sm:px-4">
      {/* Timeline Line - Centered on all screens */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-primary via-secondary to-primary" />

      <div className="space-y-6 sm:space-y-8 md:space-y-12">
        {timelineEvents.map((event, index) => {
          const Icon = event.icon
          const isVisible = visibleItems.has(index)
          const isEven = index % 2 === 0

          return (
            <div
              key={index}
              ref={(el) => {
                itemRefs.current[index] = el
              }}
              className={`relative flex flex-row items-center gap-3 sm:gap-4 md:gap-6 ${
                isEven ? 'flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot - Centered */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 z-10">
                <div
                  className={`w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full ${event.color} border-2 sm:border-4 border-white shadow-lg transform transition-all duration-500 ${
                    isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                  }`}
                />
              </div>

              {/* Content Card - Alternating sides */}
              <div
                className={`w-[45%] sm:w-[48%] bg-white p-4 sm:p-5 md:p-6 lg:p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-500 transform ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-4 opacity-0'
                } ${isEven ? 'mr-auto' : 'ml-auto'}`}
              >
                {/* Icon/Logo and Year in Header */}
                <div className="flex items-start gap-3 sm:gap-4">
                  {event.logo ? (
                    <div className="bg-white p-3 sm:p-4 md:p-5 rounded-xl flex-shrink-0 border-3 border-primary/40 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28">
                        <Image
                          src={event.logo}
                          alt={`${event.title} Logo`}
                          fill
                          className="object-contain"
                          sizes="(max-width: 640px) 64px, (max-width: 1024px) 96px, 112px"
                          priority={event.year === '2026'}
                        />
                      </div>
                    </div>
                  ) : (
                    <div className={`${event.color} p-2 sm:p-2.5 md:p-3 rounded-lg flex-shrink-0`}>
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    {/* Year and Title */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 md:gap-3 mb-2 sm:mb-3">
                      <span className="text-primary font-bold text-base sm:text-lg md:text-lg lg:text-xl xl:text-xl whitespace-nowrap">
                        {event.year}
                      </span>
                      <span className="hidden sm:inline text-text/60 text-xs sm:text-sm">•</span>
                      <h3 className="text-base sm:text-lg md:text-lg lg:text-xl xl:text-xl font-bold text-text leading-tight">
                        {event.title}
                      </h3>
                    </div>
                    <p className="text-text/80 text-xs sm:text-sm md:text-base leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

