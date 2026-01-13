'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Camera, ImageIcon, X, ChevronLeft, ChevronRight } from 'lucide-react'

const galleryImages = [
  {
    id: 1,
    title: 'Premium Plywood Showcase',
    image: '/gallery/1.png',
    category: 'Product',
  },
  {
    id: 2,
    title: 'Quality Plywood Display',
    image: '/gallery/2.jpeg',
    category: 'Product',
  },
  {
    id: 3,
    title: 'Expert Craftsmanship',
    image: '/gallery/3.png',
    category: 'Manufacturing',
  },
  {
    id: 4,
    title: 'Premium Collection',
    image: '/gallery/4.png',
    category: 'Product',
  },
  {
    id: 5,
    title: 'Quality Materials',
    image: '/gallery/5.png',
    category: 'Product',
  },
  {
    id: 6,
    title: 'Professional Grade',
    image: '/gallery/6.png',
    category: 'Product',
  },
  {
    id: 7,
    title: 'Marian Ply Excellence',
    image: '/gallery/7.jpeg',
    category: 'Showcase',
  },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openModal = (index: number) => {
    setSelectedImage(index)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'unset'
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length)
    }
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage !== null) {
        if (e.key === 'Escape') {
          closeModal()
        } else if (e.key === 'ArrowRight') {
          nextImage()
        } else if (e.key === 'ArrowLeft') {
          prevImage()
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  const currentImage = selectedImage !== null ? galleryImages[selectedImage] : null

  return (
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
            <Camera className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-primary" />
            <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-center text-text px-2">
              Our Gallery
            </h1>
            <ImageIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-primary" />
          </div>
          <p className="text-center text-text/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
            Explore beautiful interiors crafted with our premium plywood products.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          {galleryImages.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openModal(index)}
              className="group relative h-[250px] sm:h-[280px] md:h-[320px] lg:h-[360px] xl:h-[400px] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-gradient-to-br from-gray-50 to-gray-100"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-contain p-2 sm:p-3 md:p-4 group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 400px"
                quality={90}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                <h3 className="text-white text-base sm:text-lg md:text-xl font-bold mb-1">
                  {item.title}
                </h3>
                <p className="text-secondary text-xs sm:text-sm md:text-base">
                  {item.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && currentImage && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeModal}
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-[10000] bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-2 sm:p-3 rounded-full transition-all duration-200 hover:scale-110"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          {/* Previous Button */}
          {galleryImages.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                prevImage()
              }}
              className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-[10000] bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-2 sm:p-3 rounded-full transition-all duration-200 hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
          )}

          {/* Next Button */}
          {galleryImages.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                nextImage()
              }}
              className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-[10000] bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-2 sm:p-3 rounded-full transition-all duration-200 hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
          )}

          {/* Image Container */}
          <div
            className="relative w-full h-full max-w-7xl max-h-[90vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full max-h-[85vh] flex items-center justify-center">
              <Image
                src={currentImage.image}
                alt={currentImage.title}
                fill
                className="object-contain"
                quality={95}
                priority
                sizes="100vw"
              />
            </div>
            {/* Image Info */}
            <div className="mt-4 sm:mt-6 text-center text-white">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1">
                {currentImage.title}
              </h3>
              <p className="text-secondary text-sm sm:text-base">
                {currentImage.category}
              </p>
              {galleryImages.length > 1 && (
                <p className="text-white/60 text-xs sm:text-sm mt-2">
                  {selectedImage + 1} / {galleryImages.length}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

