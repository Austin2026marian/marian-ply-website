'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/products', label: 'Products' },
    { href: '/brands', label: 'Our Brands' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact Us' },
  ]

  // Removed native event listeners - using React onClick only

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      <nav className="sticky top-0 z-[100] bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:pl-2 lg:pr-8 xl:pl-2 xl:pr-8">
          <div className="flex justify-between items-center h-20 md:h-24 lg:h-28 relative z-[100]">
            <Link href="/" className="flex items-center gap-3 sm:gap-4 hover:opacity-90 transition-all duration-300 min-w-0 group">
              <div className="relative flex-shrink-0 h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-16 lg:w-16 xl:h-16 xl:w-16">
                <Image
                  src="/logo.png"
                  alt="Marian Ply Logo"
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                  priority
                  sizes="(max-width: 640px) 48px, (max-width: 1024px) 64px, 64px"
                />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-lg sm:text-xl md:text-xl lg:text-xl xl:text-xl font-extrabold text-black truncate tracking-tight">
                  MARIAN PLY
                </span>
                <span className="text-[10px] sm:text-xs md:text-xs lg:text-xs xl:text-xs text-text/70 font-medium italic truncate">
                  Serve the best
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm lg:text-base text-text hover:text-primary transition-colors duration-200 font-medium py-2 px-1"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              ref={buttonRef}
              onClick={(e) => {
                e.stopPropagation()
                setIsOpen(!isOpen)
              }}
              className="md:hidden text-primary p-3 sm:p-4 flex items-center justify-center cursor-pointer relative z-[99999] hover:bg-primary/10 active:bg-primary/20 rounded-lg transition-all duration-200 touch-manipulation"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              type="button"
              id="mobile-menu-button"
            >
              {isOpen ? <X size={28} strokeWidth={2.5} /> : <Menu size={28} strokeWidth={2.5} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/60 z-[100] top-16 transition-opacity duration-300 ease-out"
          onClick={() => setIsOpen(false)}
          style={{ willChange: 'opacity' }}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div
        className={`md:hidden fixed top-16 left-0 w-80 max-w-[85vw] h-[calc(100vh-4rem)] bg-white shadow-2xl z-[101] overflow-y-auto transition-all duration-300 ease-out ${
          isOpen ? 'translate-x-0 opacity-100 visible' : '-translate-x-full opacity-0 invisible'
        }`}
        style={{ 
          pointerEvents: isOpen ? 'auto' : 'none'
        }}
      >
        <div className="flex flex-col p-4 space-y-1">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base text-text hover:text-primary hover:bg-primary/10 active:bg-primary/20 transition-all duration-200 ease-out font-medium py-4 px-4 rounded-lg transform"
              style={{
                animation: isOpen ? `slideInLeft 0.4s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.05}s both` : 'none',
                willChange: 'transform, opacity'
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
