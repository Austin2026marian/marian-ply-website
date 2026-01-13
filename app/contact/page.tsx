'use client'

import { useState } from 'react'
import Image from 'next/image'
import { MapPin, Phone, Mail, MessageSquare, Clock, Send, Store, CheckCircle2, AlertCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Formspree endpoint
      const response = await fetch('https://formspree.io/f/xgooenkj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          _subject: `Contact Form Inquiry from ${formData.name}`,
        }),
      })

      if (response.ok) {
        // Reset form
        setFormData({ name: '', email: '', phone: '', message: '' })
        setSubmitStatus('success')
        
        setTimeout(() => {
          setSubmitStatus('idle')
        }, 5000)
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }
  const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Marian Ply - Premium Plywood Manufacturers',
    description: 'Leading plywood manufacturers in Kerala. Best plywood for furniture, waterproof plywood, BWR grade plywood. ISI certified quality. Contact us for premium plywood products. Located in Perumbavoor, Kerala.',
    url: 'https://www.marianply.com/contact',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
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
            <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-primary" />
            <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-center text-text px-2">
              Contact Us
            </h1>
            <Phone className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-primary" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Contact Information
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-text mb-1">Address</h3>
                  <p className="text-text/80">
                    Malamury, Pulluvazhy P.O<br />
                    Perumbavoor, Kerala 683541
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-text mb-1">Phone</h3>
                  <a 
                    href="tel:+919544339555" 
                    className="text-primary hover:text-[#7A3A10] transition-colors duration-200"
                  >
                    +91 95443 39555
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-text mb-1">Email</h3>
                  <a 
                    href="mailto:Marianply123@gmail.com" 
                    className="text-primary hover:text-[#7A3A10] transition-colors duration-200"
                  >
                    Marianply123@gmail.com
                  </a>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="bg-white p-5 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Store className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-text mb-1">IndiaMART</h3>
                      <p className="text-text/70 text-sm">Visit our IndiaMART page to purchase</p>
                    </div>
                  </div>
                  <a 
                    href="https://www.indiamart.com/marian-plywood/?srsltid=AfmBOoo2pQchatmFwPDWAszKIIizzsEdU7nz08CzZLbupNjEvmR30HZS"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-[#7A3A10] font-medium text-sm md:text-base transition-colors duration-200"
                  >
                    <span>Visit Our IndiaMART Page to Buy</span>
                    <span className="text-xs">↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 p-2 sm:p-2.5 rounded-full">
                <Send className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary">
                Send us a Message
              </h2>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-text font-semibold mb-2 text-sm md:text-base">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 outline-none text-text placeholder:text-gray-400"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-text font-semibold mb-2 text-sm md:text-base">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 outline-none text-text placeholder:text-gray-400"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label className="block text-text font-semibold mb-2 text-sm md:text-base">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 outline-none text-text placeholder:text-gray-400"
                  placeholder="Your Phone Number"
                />
              </div>
              <div>
                <label className="block text-text font-semibold mb-2 text-sm md:text-base">Message</label>
                <textarea
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 outline-none resize-none text-text placeholder:text-gray-400"
                  placeholder="Your Message"
                />
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-lg text-green-700">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="text-sm font-medium">Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.</span>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700">
                  <AlertCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">Error sending message. Please try again or email us directly at Marianply123@gmail.com</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-[#7A3A10] active:bg-[#6B2F0E] text-white font-semibold px-6 py-3.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>

        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-6 h-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              Find Us
            </h2>
          </div>
          <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.8!2d76.5!3d10.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDA2JzAwLjAiTiA3NsKwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Marian Ply Location Map"
            />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

