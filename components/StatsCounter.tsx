'use client'

import { useState, useEffect, useRef } from 'react'
import { Users, Package, TrendingUp } from 'lucide-react'

interface Stat {
  label: string
  value: number
  suffix: string
  icon: React.ComponentType<{ className?: string }>
}

const stats: Stat[] = [
  {
    label: 'Happy Customers',
    value: 100,
    suffix: '+',
    icon: Users,
  },
  {
    label: 'Products Sold',
    value: 10000,
    suffix: '+',
    icon: Package,
  },
  {
    label: 'Years of Experience',
    value: 25,
    suffix: '+',
    icon: TrendingUp,
  },
]

export default function StatsCounter() {
  const [counts, setCounts] = useState([0, 0, 0])
  const [hasAnimated, setHasAnimated] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const animateNumbers = () => {
    const duration = 2000 // 2 seconds
    const startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3)

      const newCounts = stats.map((stat) => {
        return Math.floor(stat.value * easeOut)
      })

      setCounts(newCounts)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        // Ensure we end at exact target values
        setCounts(stats.map((stat) => stat.value))
      }
    }

      requestAnimationFrame(animate)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            animateNumbers()
          }
        })
      },
      {
        threshold: 0.3, // Trigger when 30% of section is visible
      }
    )

    observer.observe(section)

    return () => {
      observer.disconnect()
    }
  }, [hasAnimated])

  const formatNumber = (num: number): string => {
    if (num >= 1000) {
      return num.toLocaleString('en-IN')
    }
    return num.toString()
  }

  return (
    <section
      ref={sectionRef}
      className="w-full py-10 sm:py-12 md:py-14 lg:py-16 xl:py-16 px-4 sm:px-6 md:px-8 bg-[#F9F7F2]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="text-center flex flex-col items-center"
              >
                <div className="bg-primary/10 p-3 sm:p-4 md:p-4 lg:p-4 rounded-full mb-4 sm:mb-5 md:mb-6">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 text-primary" />
                </div>
                <div className="mb-2 sm:mb-3">
                  <span className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl font-extrabold text-primary">
                    {formatNumber(counts[index])}
                  </span>
                  {stat.suffix && (
                    <span className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl font-extrabold text-primary">
                      {stat.suffix}
                    </span>
                  )}
                </div>
                <h3 className="text-sm sm:text-base md:text-base lg:text-lg xl:text-lg font-semibold text-text">
                  {stat.label}
                </h3>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
