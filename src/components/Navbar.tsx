'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import logo from '@/src/assets/logo.png'
import bookAppointmentBtn from '@/src/assets/book-appointment-btn.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-[#F5F2E6] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
            <Image
              src={logo}
              alt="Diagnostic Centre Logo"
              width={80}
              height={80}
              className="h-16 md:h-20 w-auto object-contain"
              priority
            />
          </Link>

          {/* Center: Navigation Links (Desktop) */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#404B33] hover:text-[#5F6F52] transition-colors duration-200 font-medium text-base"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right: Book Appointment Button (Desktop) */}
          <div className="hidden md:block">
            <Link href="/appointment">
              <Image
                src={bookAppointmentBtn}
                alt="Book Appointment"
                width={200}
                height={50}
                className="h-12 w-auto object-contain hover:opacity-90 transition-opacity"
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-[#404B33] focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full h-[calc(100vh-4rem)] bg-[#F5F2E6] transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col p-6 space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-xl text-[#404B33] hover:text-[#5F6F52] transition-colors duration-200 font-medium border-b border-[#404B33]/20 pb-4"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/appointment"
            onClick={() => setIsOpen(false)}
            className="mt-4"
          >
            <Image
              src={bookAppointmentBtn}
              alt="Book Appointment"
              width={200}
              height={50}
              className="h-12 w-auto object-contain mx-auto"
            />
          </Link>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30 top-16"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  )
}

