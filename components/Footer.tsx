import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, Clock, Shield, Award, BadgeCheck, Store } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-10 md:mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-20 lg:h-20 xl:w-20 xl:h-20 flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="Marian Ply Logo"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 640px) 56px, (max-width: 1024px) 80px, 80px"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl font-extrabold">MARIAN PLY</h3>
                <p className="text-secondary text-xs sm:text-sm md:text-base font-medium italic mt-1">Serve the best</p>
              </div>
            </div>
            <p className="text-secondary text-xs sm:text-sm md:text-base mb-4 leading-relaxed">
              Premium plywood manufacturer based in Perumbavoor, Kerala. With 25+ years of experience and established in 2012, we deliver quality products that meet the highest industry standards.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <div className="flex items-center gap-1.5 bg-white/10 px-2 py-1 rounded-full">
                <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-secondary" />
                <span className="text-[10px] xs:text-xs sm:text-sm font-semibold">ISI</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 px-2 py-1 rounded-full">
                <Award className="w-3 h-3 sm:w-4 sm:h-4 text-secondary" />
                <span className="text-[10px] xs:text-xs sm:text-sm font-semibold">ISO 9001:2015</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 px-2 py-1 rounded-full">
                <BadgeCheck className="w-3 h-3 sm:w-4 sm:h-4 text-secondary" />
                <span className="text-[10px] xs:text-xs sm:text-sm font-semibold">BWR/MR</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg md:text-xl font-bold mb-4 sm:mb-6">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/" className="text-secondary hover:text-white transition-colors duration-200 text-sm sm:text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-secondary hover:text-white transition-colors duration-200 text-sm sm:text-base">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-secondary hover:text-white transition-colors duration-200 text-sm sm:text-base">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/brands" className="text-secondary hover:text-white transition-colors duration-200 text-sm sm:text-base">
                  Our Brands
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-secondary hover:text-white transition-colors duration-200 text-sm sm:text-base">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-secondary hover:text-white transition-colors duration-200 text-sm sm:text-base">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-base sm:text-lg md:text-xl font-bold mb-4 sm:mb-6">Contact Us</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-secondary text-xs sm:text-sm md:text-base leading-relaxed">
                  Malamury, Pulluvazhy P.O<br />
                  Perumbavoor, Kerala 683541
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0" />
                <a 
                  href="tel:+919544339555" 
                  className="text-secondary hover:text-white transition-colors duration-200 text-xs sm:text-sm md:text-base"
                >
                  +91 95443 39555
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0" />
                <a 
                  href="mailto:Marianply123@gmail.com" 
                  className="text-secondary hover:text-white transition-colors duration-200 text-xs sm:text-sm md:text-base break-all"
                >
                  Marianply123@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div className="text-secondary text-xs sm:text-sm md:text-base">
                  <p className="font-semibold mb-1">Business Hours</p>
                  <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Products & Services */}
          <div>
            <h4 className="text-base sm:text-lg md:text-xl font-bold mb-4 sm:mb-6">Our Products</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <span className="text-secondary text-sm sm:text-base">Marine Grade Plywood</span>
              </li>
              <li>
                <span className="text-secondary text-sm sm:text-base">Commercial Plywood</span>
              </li>
              <li>
                <span className="text-secondary text-sm sm:text-base">Shuttering Plywood</span>
              </li>
              <li>
                <span className="text-secondary text-sm sm:text-base">Premium Branded Plywood</span>
              </li>
            </ul>
            <div className="mt-4 sm:mt-6 space-y-3">
              <a
                  href="https://wa.me/919544339555"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-secondary hover:bg-[#C4A575] text-text font-semibold px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg transition-all duration-200 text-xs sm:text-sm md:text-base transform hover:scale-105 w-full sm:w-auto justify-center"
              >
                <Phone className="w-4 h-4" />
                WhatsApp Us
              </a>
              <a
                href="https://www.indiamart.com/marian-plywood/?srsltid=AfmBOoo2pQchatmFwPDWAszKIIizzsEdU7nz08CzZLbupNjEvmR30HZS"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg transition-all duration-200 text-xs sm:text-sm md:text-base transform hover:scale-105 w-full sm:w-auto justify-center"
              >
                <Store className="w-4 h-4" />
                <span>Visit Our IndiaMART Page to Buy</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-secondary text-xs sm:text-sm md:text-base text-center sm:text-left">
              © {new Date().getFullYear()} Marian Ply. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm md:text-base">
              <Link href="/about" className="text-secondary hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <span className="text-secondary">|</span>
              <Link href="/contact" className="text-secondary hover:text-white transition-colors duration-200">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

