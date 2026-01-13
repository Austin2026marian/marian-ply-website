'use client'

import Image from 'next/image'
import { Sparkles, Store, CheckCircle2, Shield, Award, Package } from 'lucide-react'

const brands = [
  {
    id: 5,
    name: 'AREION Ply',
    description: 'A responsible choice - Premium branded plywood with distinctive orange design for modern construction. Known for its superior strength, water resistance, and eco-friendly manufacturing process.',
    image: '/areion-plywood.jpeg',
    logo: '/brands/areion.png',
    features: [
      'BWR (Boiling Water Resistant) Grade',
      'ISI Certified Quality',
      'Waterproof and Moisture Resistant',
      'Suitable for Interior & Exterior Use',
      'Eco-Friendly Manufacturing',
      'Distinctive Orange Design'
    ],
    applications: 'Ideal for furniture, kitchen cabinets, wardrobes, modular furniture, and construction applications.',
    grades: 'BWR, MR Grades Available',
  },
  {
    id: 1,
    name: 'Marian Ply',
    description: 'Our own premium plywood brand - Leading plywood manufacturers in Kerala. Best plywood for furniture, waterproof plywood, BWR grade plywood. ISI certified quality. Crafted with excellence and quality, representing our commitment to superior products since 2012.',
    image: '/areion-plywood.jpeg',
    logo: '/brands/marian_brand.png',
    features: [
      'ISO 9001:2015 Certified',
      'ISI, BWR, MR Grade Standards',
      'Waterproof and Termite Resistant',
      'Premium Quality Materials',
      '25+ Years Manufacturing Experience',
      'Available in Multiple Thickness Options'
    ],
    applications: 'Perfect for premium furniture, kitchen cabinets, wardrobes, commercial interiors, and residential construction projects.',
    grades: 'ISI, BWR, MR, Commercial Grades',
  },
  {
    id: 2,
    name: 'Wood Piper',
    description: 'Premium quality plywood brand known for its durability and reliability. Engineered for long-lasting performance with excellent dimensional stability and superior finish quality.',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop',
    logo: '/brands/wood-piper-logo-removebg-preview.png',
    features: [
      'High Durability and Strength',
      'Excellent Dimensional Stability',
      'Smooth Surface Finish',
      'BWR and MR Grades',
      'Termite Resistant',
      'Easy to Work With'
    ],
    applications: 'Ideal for furniture manufacturing, interior decoration, false ceilings, partition walls, and commercial applications.',
    grades: 'BWR, MR, Commercial Grades',
  },
  {
    id: 4,
    name: 'Ropos Ply',
    description: 'Renowned plywood brand delivering superior quality products for construction and interior applications. Known for consistent quality, strength, and excellent value for money.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop',
    logo: '/brands/ropos-ply-logo.png',
    features: [
      'Consistent Quality Standards',
      'Strong and Durable',
      'Cost-Effective Solution',
      'BWR and MR Grades Available',
      'Suitable for Heavy-Duty Applications',
      'Reliable Performance'
    ],
    applications: 'Excellent for construction projects, shuttering, furniture manufacturing, interior works, and industrial applications.',
    grades: 'BWR, MR, Commercial, Shuttering Grades',
  },
  {
    id: 3,
    name: 'Ocen Ply',
    description: 'High-quality plywood brand offering excellent performance for commercial and residential projects. Designed for versatility and reliability across various applications.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop',
    logo: '/brands/ocen-ply-logo-removebg-preview (1).png',
    features: [
      'Versatile Application Range',
      'Strong Bond Quality',
      'Smooth Surface Texture',
      'Water Resistant Options',
      'Consistent Thickness',
      'Value for Money'
    ],
    applications: 'Suitable for furniture, interior decoration, commercial spaces, residential projects, and general construction work.',
    grades: 'BWR, MR, Commercial Grades',
  },
]

export default function Brands() {
  const brandsPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Our Brands - Premium Plywood Brands - Marian Ply',
    description: 'Leading plywood manufacturers in Kerala. Best plywood for furniture, waterproof plywood, BWR grade plywood. ISI certified quality. Discover our premium brands: Marian Ply, AREION Ply, Wood Piper, Ropos Ply, and Ocen Ply.',
    url: 'https://www.marianply.com/brands',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(brandsPageSchema) }}
      />
      <div className="w-full py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-5 md:px-6 lg:px-8 bg-background">
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
          <div className="flex justify-center items-center gap-2 sm:gap-3 mb-4 sm:mb-6 md:mb-8">
            <div className="bg-primary/10 p-2 sm:p-3 rounded-full">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-primary" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-text px-2">
              Our Brands
            </h1>
          </div>
          <p className="text-text/80 text-base md:text-lg max-w-2xl mx-auto px-2">
            Discover our premium plywood brands, each crafted with excellence and quality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Brand Logo Section */}
              <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 w-full bg-white flex items-center justify-center p-6 sm:p-8 md:p-10 lg:p-12">
                <div className="relative w-full h-full max-w-md">
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} Logo`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={90}
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl font-bold text-text mb-4 sm:mb-5">
                  {brand.name}
                </h3>
                <p className="text-text/90 text-base md:text-lg leading-relaxed mb-5">
                  {brand.description}
                </p>
                
                {/* Features Section */}
                {brand.features && (
                  <div className="mb-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Award className="w-5 h-5 text-primary flex-shrink-0" />
                      <h4 className="text-lg md:text-xl font-semibold text-text">Key Features</h4>
                    </div>
                    <ul className="space-y-2">
                      {brand.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-text/80 text-sm md:text-base leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Applications Section */}
                {brand.applications && (
                  <div className="mb-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Package className="w-5 h-5 text-primary flex-shrink-0" />
                      <h4 className="text-lg md:text-xl font-semibold text-text">Applications</h4>
                    </div>
                    <p className="text-text/80 text-sm md:text-base leading-relaxed ml-7">
                      {brand.applications}
                    </p>
                  </div>
                )}

                {/* Grades Section */}
                {brand.grades && (
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-primary flex-shrink-0" />
                      <div>
                        <span className="text-sm font-semibold text-text/70">Available Grades: </span>
                        <span className="text-base font-semibold text-primary">{brand.grades}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* IndiaMART Section */}
        <div className="mt-12 sm:mt-16 md:mt-20">
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
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-text mb-2">
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
      </div>
    </div>
    </>
  )
}
