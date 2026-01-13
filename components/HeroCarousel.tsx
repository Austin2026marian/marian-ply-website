'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const heroImages = [
  {
    src: '/hero 0.png',
    alt: 'Marian Ply - Premium Plywood Manufacturing',
  },
  {
    src: '/hero 1.png',
    alt: 'Marian Ply - Quality Plywood Products',
  },
  {
    src: '/hero 2.png',
    alt: 'Marian Ply - Expert Craftsmanship',
  },
  {
    src: '/hero 3.png',
    alt: 'Marian Ply - Excellence in Woodwork',
  },
]

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover object-center md:object-center"
            priority={index === 0}
            sizes="(max-width: 768px) 100vw, 100vw"
            quality={index === 0 ? 90 : 80}
            loading={index === 0 ? 'eager' : 'lazy'}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/40" />
        </div>
      ))}
    </div>
  )
}

