'use client'

import Image from 'next/image'
import { Waves, Building2, Hammer, Package, Store, Ruler, Layers, CheckCircle2, Shield, Award, MessageSquare } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'Marine Grade Plywood',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=800&auto=format&fit=crop',
    description: 'Premium water-resistant plywood perfect for bathrooms and kitchens. Ideal for boat building, docks, outdoor furniture, decks, patios, and coastal construction with superior resistance to water, rot, and humidity.',
    icon: Waves,
    specifications: {
      thickness: '4mm - 22mm',
      grade: 'BWR Grade',
      size: 'Standard: 8x4 feet',
    },
    features: [
      '100% Waterproof',
      'Termite Resistant',
      'Strong & Durable',
      'Weather Resistant',
      'Perfect for Outdoor Use',
      'BWR Grade Quality'
    ],
    applications: 'Boat building, docks, outdoor furniture, bathroom cabinets, kitchen interiors, coastal construction, decks, and patios.',
  },
  {
    id: 2,
    name: 'Commercial Plywood',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=800&auto=format&fit=crop',
    description: 'Versatile and cost-effective plywood ideal for furniture, interior work, and general construction. Perfect balance of quality and affordability for various applications.',
    icon: Building2,
    specifications: {
      thickness: '4mm - 22mm',
      grade: 'MR & Commercial Grade',
      size: 'Standard: 8x4 feet',
    },
    features: [
      'Cost-Effective Solution',
      'Versatile Applications',
      'Smooth Surface Finish',
      'Easy to Work With',
      'Good Strength',
      'Available in Multiple Thickness'
    ],
    applications: 'Furniture manufacturing, interior decoration, partition walls, false ceilings, packaging, and general construction work.',
  },
  {
    id: 3,
    name: 'Shuttering Plywood',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop',
    description: 'Heavy-duty plywood specifically designed for concrete formwork and construction applications. Built to withstand repeated use and heavy concrete loads.',
    icon: Hammer,
    specifications: {
      thickness: '12mm - 25mm',
      weight: '30kg - 60kg',
      grade: 'Commercial Grade',
      size: 'Standard: 8x4 feet',
    },
    features: [
      'Heavy-Duty Construction',
      'Reusable Multiple Times',
      'Strong & Rigid',
      'Smooth Surface Finish',
      'High Load Bearing Capacity',
      'Weather Resistant'
    ],
    applications: 'Concrete formwork, construction projects, columns, beams, slabs, foundation work, and structural applications.',
  },
  {
    id: 6,
    name: 'High Density Shuttering Plywood',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop',
    description: 'Premium high-density shuttering plywood with exceptional strength and durability. Designed to withstand 2000 ton pressure with superior bonding strength, making it ideal for heavy-duty construction projects and demanding formwork applications.',
    icon: Hammer,
    specifications: {
      thickness: '12mm - 25mm',
      weight: '35kg - 65kg',
      grade: 'Commercial Grade',
      size: 'Standard: 8x4 feet',
      pressure: '2000 Ton Pressure',
      bondingStrength: 'Superior Bonding Strength',
    },
    features: [
      '2000 Ton Pressure Resistance',
      'Superior Bonding Strength',
      'High Density Construction',
      'Exceptional Strength',
      'Reusable Multiple Times',
      'Heavy-Duty Application',
      'Superior Load Bearing'
    ],
    applications: 'Heavy-duty concrete formwork, high-rise construction, bridges, dams, large-scale infrastructure projects, columns, beams, and structural applications requiring maximum strength and bonding.',
  },
  {
    id: 4,
    name: 'Calibrated Plywood',
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop',
    description: 'Precision-calibrated plywood with uniform thickness for high-quality furniture and cabinetry. Ensures perfect fit and finish for premium applications.',
    icon: Ruler,
    specifications: {
      thickness: '4mm - 22mm',
      grade: 'BWR & MR Grade',
      size: 'Standard: 8x4 feet',
      tolerance: '±0.1mm thickness accuracy',
    },
    features: [
      'Precision Thickness Control',
      'Uniform Surface',
      'Perfect for Furniture',
      'High Quality Finish',
      'Consistent Dimensions',
      'Premium Quality'
    ],
    applications: 'Premium furniture, kitchen cabinets, wardrobes, modular furniture, office furniture, and high-end cabinetry.',
  },
  {
    id: 5,
    name: 'Laminated Plywood',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=800&auto=format&fit=crop',
    description: 'Aesthetic laminated plywood with decorative surface finish perfect for modern interiors and furniture. Available in various designs and textures.',
    icon: Layers,
    specifications: {
      thickness: '6mm - 19mm',
      grade: 'BWR & MR Grade',
      size: 'Standard: 8x4 feet',
      finish: 'Pre-laminated Surface',
    },
    features: [
      'Decorative Surface Finish',
      'No Need for Painting',
      'Easy to Clean',
      'Variety of Designs',
      'Scratch Resistant',
      'Modern Aesthetic'
    ],
    applications: 'Modern furniture, interior decoration, kitchen cabinets, wardrobes, office furniture, and decorative applications.',
  },
]

export default function Products() {
  const productsPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Premium Plywood Products - Marian Ply',
    description: 'Leading plywood manufacturers in Kerala. Best plywood for furniture, waterproof plywood, BWR grade plywood. ISI certified quality. Explore our premium plywood products including Marine Grade, Commercial, Shuttering, Calibrated, and Laminated plywood.',
    url: 'https://www.marianply.com/products',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productsPageSchema) }}
      />
      <div className="w-full py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-5 md:px-6 lg:px-8 bg-background min-h-screen">
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
          <div className="flex justify-center items-center gap-2 sm:gap-3 mb-3 sm:mb-4 md:mb-6">
            <div className="bg-primary/10 p-2 sm:p-3 rounded-full">
              <Package className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-primary" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-center text-text px-2">
              Our Products
            </h1>
          </div>
          <p className="text-center text-text/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
            Discover our range of premium plywood products, each crafted to meet specific industry standards and applications.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {products.map((product) => {
            const Icon = product.icon
            return (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-40 sm:h-48 md:h-56 lg:h-64">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={85}
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                    <div className="bg-white/90 backdrop-blur-sm p-1.5 sm:p-2 rounded-full">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                  </div>
                </div>
                <div className="p-4 sm:p-5 md:p-6">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <div className="bg-primary/10 p-1.5 sm:p-2 rounded-lg">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-text">
                      {product.name}
                    </h3>
                  </div>
                  <p className="text-text/80 text-sm md:text-base leading-relaxed mb-4">
                    {product.description}
                  </p>
                  
                  {/* Features Section */}
                  {product.features && (
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Award className="w-4 h-4 text-primary flex-shrink-0" />
                        <h4 className="text-sm md:text-base font-semibold text-text">Key Features</h4>
                      </div>
                      <ul className="space-y-1.5 ml-6">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-text/75 text-xs sm:text-sm md:text-base leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Applications Section */}
                  {product.applications && (
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Package className="w-4 h-4 text-primary flex-shrink-0" />
                        <h4 className="text-sm md:text-base font-semibold text-text">Applications</h4>
                      </div>
                      <p className="text-text/75 text-xs sm:text-sm md:text-base leading-relaxed ml-6">
                        {product.applications}
                      </p>
                    </div>
                  )}

                  {/* Specifications Section */}
                  {product.specifications && (
                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex items-center gap-2 mb-3">
                        <Shield className="w-4 h-4 text-primary flex-shrink-0" />
                        <h4 className="text-xs sm:text-sm font-semibold text-text uppercase tracking-wide">
                          Specifications
                        </h4>
                      </div>
                      <div className="space-y-2">
                        {product.specifications.thickness && (
                          <div className="flex justify-between items-center">
                            <span className="text-text/70 text-xs sm:text-sm font-medium">Thickness:</span>
                            <span className="text-text font-semibold text-xs sm:text-sm">{product.specifications.thickness}</span>
                          </div>
                        )}
                        {product.specifications.weight && (
                          <div className="flex justify-between items-center">
                            <span className="text-text/70 text-xs sm:text-sm font-medium">Weight:</span>
                            <span className="text-text font-semibold text-xs sm:text-sm">{product.specifications.weight}</span>
                          </div>
                        )}
                        {product.specifications.grade && (
                          <div className="flex justify-between items-center">
                            <span className="text-text/70 text-xs sm:text-sm font-medium">Grade:</span>
                            <span className="text-text font-semibold text-xs sm:text-sm">{product.specifications.grade}</span>
                          </div>
                        )}
                        {product.specifications.size && (
                          <div className="flex justify-between items-center">
                            <span className="text-text/70 text-xs sm:text-sm font-medium">Size:</span>
                            <span className="text-text font-semibold text-xs sm:text-sm">{product.specifications.size}</span>
                          </div>
                        )}
                        {product.specifications.tolerance && (
                          <div className="flex justify-between items-center">
                            <span className="text-text/70 text-xs sm:text-sm font-medium">Tolerance:</span>
                            <span className="text-text font-semibold text-xs sm:text-sm">{product.specifications.tolerance}</span>
                          </div>
                        )}
                        {product.specifications.finish && (
                          <div className="flex justify-between items-center">
                            <span className="text-text/70 text-xs sm:text-sm font-medium">Finish:</span>
                            <span className="text-text font-semibold text-xs sm:text-sm">{product.specifications.finish}</span>
                          </div>
                        )}
                        {product.specifications.pressure && (
                          <div className="flex justify-between items-center">
                            <span className="text-text/70 text-xs sm:text-sm font-medium">Pressure:</span>
                            <span className="text-text font-semibold text-xs sm:text-sm">{product.specifications.pressure}</span>
                          </div>
                        )}
                        {product.specifications.bondingStrength && (
                          <div className="flex justify-between items-center">
                            <span className="text-text/70 text-xs sm:text-sm font-medium">Bonding Strength:</span>
                            <span className="text-text font-semibold text-xs sm:text-sm">{product.specifications.bondingStrength}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Request Quote Button */}
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <a
                      href="https://wa.me/919544339555"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-[#7A3A10] text-white font-semibold px-4 py-2.5 sm:px-5 sm:py-3 rounded-lg transition-all duration-200 text-sm sm:text-base shadow-md hover:shadow-lg transform hover:scale-105"
                    >
                      <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>Request a Quote</span>
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
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

