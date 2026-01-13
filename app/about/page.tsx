'use client'

import Image from 'next/image'
import { Mail, Phone, Users, User, BookOpen, Heart, MessageSquare, MapPin, Clock, Store } from 'lucide-react'

export default function About() {
  const aboutPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Marian Ply - Premium Plywood Manufacturers',
    description: 'Leading plywood manufacturers in Kerala. Best plywood for furniture, waterproof plywood, BWR grade plywood. ISI certified quality. Founded in 2012 by Roy Thomas with 25+ years of experience in plywood manufacturing in Perumbavoor, Kerala.',
    url: 'https://www.marianply.com/about',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <div className="w-full py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-5 md:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <div className="flex justify-center items-center gap-2 sm:gap-3 mb-4 sm:mb-6 md:mb-8">
            <div className="bg-primary/10 p-2 sm:p-3 rounded-full">
              <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-primary" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-text px-2">
              About Us
            </h1>
          </div>
          <div className="flex justify-center items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
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
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <div>
              <div className="flex items-center gap-2 sm:gap-3 mb-4 md:mb-6">
                <div className="bg-primary/10 p-2 sm:p-2.5 rounded-full">
                  <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-2xl lg:text-3xl xl:text-3xl font-bold text-primary">
                  Our Story
                </h2>
              </div>
              <p className="text-text/90 text-base md:text-lg leading-relaxed mb-4">
                Our journey began in <strong>1970</strong> when <strong>Roy Thomas's father</strong> established a saw mill, laying the foundation for decades of expertise in the wood industry. This early venture provided valuable experience and knowledge that would shape the family's future in plywood manufacturing.
              </p>
              <p className="text-text/90 text-base md:text-lg leading-relaxed mb-4">
                Building on this legacy, <strong>Roy Thomas and his family started Ropos Plywood in 2003</strong>, marking a significant step into the plywood manufacturing industry. In <strong>2007</strong>, <strong>Marian Ply was established</strong>, representing another milestone in the family's expanding business portfolio.
              </p>
              <p className="text-text/90 text-base md:text-lg leading-relaxed mb-4">
                In <strong>2012</strong>, Marian Ply was acquired from the previous owner and refounded by <strong>Roy Thomas</strong>. His sheer determination and hardwork paved the way for Marian Ply. The factory was re-established in 2012, marking the beginning of our journey under new leadership.
              </p>
              <p className="text-text/90 text-base md:text-lg leading-relaxed mb-4">
                Based in <strong>Perumbavoor, Kerala</strong>, we have built our reputation on a foundation of quality craftsmanship, reliable service, and unwavering commitment to customer satisfaction. With <strong>more than 25 years of experience</strong> in this field, we have sold <strong>millions of units</strong> and established ourselves as a trusted name in the plywood manufacturing industry.
              </p>
              <p className="text-text/90 text-base md:text-lg leading-relaxed mb-4">
                <strong>Marian Ply is the parent company</strong> as it was the first stage to our business. The factory underwent a <strong>minor expansion in 2016</strong> and a <strong>major expansion in 2020</strong>, significantly increasing our production capacity and strengthening our market presence.
              </p>
            </div>
            
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
              <div className="flex items-center gap-2 sm:gap-3 mb-4">
                <div className="bg-primary/10 p-2 sm:p-2.5 rounded-full">
                  <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-primary">
                  Our Commitment
                </h3>
              </div>
              <p className="text-text/90 text-base md:text-lg mb-4">
                We are committed to delivering superior quality products while maintaining sustainable manufacturing practices.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-6 md:p-8 rounded-lg shadow-md border-2 border-primary/20">
              <div className="flex flex-col items-center gap-6 mb-4">
                <div className="flex-shrink-0 w-full flex justify-center">
                  {/* Austin Panels Logo */}
                  <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-white rounded-xl shadow-lg flex items-center justify-center border-3 border-primary/40 overflow-hidden p-5 sm:p-6 md:p-8">
                    <Image 
                      src="/austin-panels-logo.png" 
                      alt="Austin Panels Logo" 
                      width={384} 
                      height={384} 
                      className="object-contain w-full h-full"
                      priority
                    />
                  </div>
                </div>
                <div className="flex-1 text-center w-full">
                  <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">
                    Austin Panels
                  </h4>
                  <p className="text-text/80 text-base md:text-lg">
                    Our New Venture • Production Starting 2026
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-text/90 text-base md:text-lg leading-relaxed">
                  <strong>Austin Panels</strong> is our exciting new venture and a major investment made in <strong>2026</strong>. Building on the success and expertise of Marian Ply, Austin Panels represents another big step in expanding our business portfolio and furthering our commitment to quality, innovation, and excellence in the plywood manufacturing industry.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-text/80 text-sm md:text-base">
                      State-of-the-art manufacturing facilities
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-text/80 text-sm md:text-base">
                      Premium quality plywood products
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-text/80 text-sm md:text-base">
                      ISO certified production standards
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-text/80 text-sm md:text-base">
                      Sustainable manufacturing practices
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop"
              alt="Marian Ply Factory"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={85}
              loading="lazy"
            />
          </div>
        </div>

        <div className="mt-16 md:mt-20 pt-12 md:pt-16 border-t border-gray-200">
          <div className="text-center mb-8 md:mb-12">
            <div className="flex justify-center items-center gap-2 sm:gap-3 mb-4 md:mb-6">
              <div className="bg-primary/10 p-2 sm:p-2.5 rounded-full">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary">
                Visit Our Facility
              </h2>
            </div>
            <p className="text-text/80 text-base md:text-lg max-w-2xl mx-auto mb-8">
              We welcome visitors to our manufacturing facility. Experience our quality processes firsthand.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">Location</h3>
                  <p className="text-text/90 text-base md:text-lg leading-relaxed">
                    Malamury, Pulluvazhy P.O<br />
                    Perumbavoor, Kerala 683541<br />
                    India
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">Visiting Hours</h3>
                  <p className="text-text/90 text-base md:text-lg leading-relaxed mb-2">
                    <strong>Monday - Saturday:</strong><br />
                    9:00 AM - 6:00 PM
                  </p>
                  <p className="text-text/90 text-base md:text-lg leading-relaxed">
                    <strong>Sunday:</strong> Closed
                  </p>
                  <p className="text-text/70 text-sm md:text-base mt-3 italic">
                    Please call ahead to schedule your visit
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href="tel:+919876543210"
              className="inline-flex items-center gap-2 bg-primary hover:bg-[#7A3A10] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Schedule a Visit
            </a>
          </div>
        </div>

        <div className="mt-16 md:mt-20 pt-12 md:pt-16 border-t border-gray-200">
          <div className="text-center mb-8 md:mb-12">
            <div className="flex justify-center items-center gap-2 sm:gap-3 mb-4 md:mb-6">
              <div className="bg-primary/10 p-2 sm:p-2.5 rounded-full">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary">
                Our Leadership
              </h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <User className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">
                Roy Thomas Ovungamalil
              </h3>
              <p className="text-text/80 text-sm md:text-base mb-3">
                Managing Director & Founder
              </p>
              <p className="text-text/70 text-sm md:text-base italic">
                Leading with vision and dedication to deliver premium quality plywood products. Founded Marian Ply in 2012 with sheer determination and hardwork, paving the way for the company's success and growth.
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <User className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">
                Austin Roy
              </h3>
              <p className="text-text/80 text-sm md:text-base mb-3">
                Partner
              </p>
              <p className="text-text/70 text-sm md:text-base italic">
                Driving innovation and strategic growth to expand our market presence and product excellence.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-20 pt-12 md:pt-16 border-t border-gray-200">
          <div className="text-center mb-8 md:mb-12">
            <div className="flex justify-center items-center gap-2 sm:gap-3 mb-4 md:mb-6">
              <div className="bg-primary/10 p-2 sm:p-2.5 rounded-full">
                <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary">
                Get in Touch
              </h2>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 md:gap-12 flex-wrap">
            <div className="flex items-center gap-4 bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <div className="bg-primary/10 p-4 rounded-full">
                <Mail className="w-6 h-6 md:w-8 md:h-8 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-text mb-1">Email</h3>
                <a 
                  href="mailto:Marianply123@gmail.com" 
                  className="text-primary hover:text-[#7A3A10] transition-colors duration-200 text-base md:text-lg font-medium"
                >
                  Marianply123@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <div className="bg-primary/10 p-4 rounded-full">
                <Phone className="w-6 h-6 md:w-8 md:h-8 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-text mb-1">Phone</h3>
                <a 
                  href="tel:+919544339555" 
                  className="text-primary hover:text-[#7A3A10] transition-colors duration-200 text-base md:text-lg font-medium"
                >
                  +91 95443 39555
                </a>
              </div>
            </div>

          </div>
          
          {/* IndiaMART Section */}
          <div className="mt-12 md:mt-16">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border border-gray-200">
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
                  <h3 className="text-lg md:text-xl font-semibold text-text mb-2">
                    Buy on IndiaMART
                  </h3>
                  <p className="text-text/70 text-sm md:text-base mb-4">
                    Visit our IndiaMART page to purchase our products
                  </p>
                  <a 
                    href="https://www.indiamart.com/marian-plywood/?srsltid=AfmBOoo2pQchatmFwPDWAszKIIizzsEdU7nz08CzZLbupNjEvmR30HZS"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary hover:bg-[#7A3A10] text-white font-semibold px-5 py-2.5 md:px-6 md:py-3 rounded-lg transition-all duration-200 text-sm md:text-base shadow-md hover:shadow-lg"
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
    </div>
    </>
  )
}

