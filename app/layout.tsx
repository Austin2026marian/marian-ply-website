import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: 'Marian Ply - Best Plywood Manufacturers in Kerala | ISI Certified | Perumbavoor',
  description: 'Leading plywood manufacturers in Kerala. Best plywood for furniture, waterproof plywood, BWR grade plywood, MR grade plywood. ISI certified quality from Marian Ply. 25+ years experience. Premium plywood manufacturers in Perumbavoor, Kerala. Specializing in Marine Grade, Commercial, Shuttering, and Calibrated plywood. ISO 9001:2015 certified.',
  keywords: [
    'Marian Ply',
    'plywood manufacturers Kerala',
    'best plywood Kerala',
    'ISI certified plywood',
    'BWR grade plywood',
    'MR grade plywood',
    'waterproof plywood',
    'furniture plywood',
    'marine grade plywood',
    'commercial plywood',
    'shuttering plywood',
    'plywood Perumbavoor',
    'plywood manufacturers Perumbavoor',
    'premium plywood Kerala',
    'ISO certified plywood',
    'plywood suppliers Kerala',
  ],
  openGraph: {
    title: 'Marian Ply - Best Plywood Manufacturers in Kerala | ISI Certified',
    description: 'Leading plywood manufacturers in Kerala. Best plywood for furniture, waterproof plywood, BWR grade plywood. ISI certified quality. 25+ years experience.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.marianply.com',
    siteName: 'Marian Ply',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Marian Ply Logo',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.marianply.com',
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
    shortcut: '/logo.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#8B4513',
  userScalable: true,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Marian Ply',
    alternateName: 'Marian Plywood',
    url: 'https://www.marianply.com',
    logo: 'https://www.marianply.com/logo.png',
    description: 'Leading plywood manufacturers in Kerala. Best plywood for furniture, waterproof plywood, BWR grade plywood. ISI certified quality from Marian Ply.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Malamury, Pulluvazhy P.O',
      addressLocality: 'Perumbavoor',
      addressRegion: 'Kerala',
      postalCode: '683541',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-9544339555',
      contactType: 'Customer Service',
      areaServed: 'IN',
      availableLanguage: ['en', 'mal'],
    },
    sameAs: [
      'https://www.indiamart.com/marian-plywood/',
    ],
    foundingDate: '2012',
    founder: {
      '@type': 'Person',
      name: 'Roy Thomas',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Marian Ply',
    url: 'https://www.marianply.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.marianply.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased font-sans">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}





