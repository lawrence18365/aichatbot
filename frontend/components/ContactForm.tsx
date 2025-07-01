"use client"

import { useState } from 'react'
import { Mail, Phone, User, Building, MessageSquare, Send, Check, AlertCircle } from 'lucide-react'
import { sendContactEmail, type ContactFormData } from '@/lib/emailjs'

interface ContactFormProps {
  title?: string
  description?: string
  showCompany?: boolean
  showPhone?: boolean
  className?: string
}

export default function ContactForm({ 
  title = "Get in Touch",
  description = "Send us a message and we'll get back to you within 24 hours.",
  showCompany = true,
  showPhone = true,
  className = ""
}: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (isSubmitting) return

    setIsSubmitting(true)
    setError('')

    try {
      const success = await sendContactEmail(formData)
      
      if (success) {
        setIsSubmitted(true)
        setFormData({ name: '', email: '', phone: '', company: '', message: '' })
        
        // Reset success state after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000)
      } else {
        setError('Failed to send message. Please try again.')
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
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

  return (
    <div className={`bg-white rounded-3xl p-8 shadow-xl border border-stone-200/50 ${className}`}>
      <div className="text-center mb-8">
        <h3 className="font-serif text-2xl font-medium text-zinc-900 mb-3">{title}</h3>
        <p className="text-stone-600 font-light">{description}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div className="relative">
          <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-2">
            Full Name *
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-stone-400" />
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full pl-11 pr-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
              placeholder="Enter your full name"
            />
          </div>
        </div>

        {/* Email Field */}
        <div className="relative">
          <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-2">
            Email Address *
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-stone-400" />
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-11 pr-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
              placeholder="Enter your email"
            />
          </div>
        </div>

        {/* Phone Field */}
        {showPhone && (
          <div className="relative">
            <label htmlFor="phone" className="block text-sm font-medium text-zinc-700 mb-2">
              Phone Number
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-stone-400" />
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full pl-11 pr-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                placeholder="Enter your phone number"
              />
            </div>
          </div>
        )}

        {/* Company Field */}
        {showCompany && (
          <div className="relative">
            <label htmlFor="company" className="block text-sm font-medium text-zinc-700 mb-2">
              Company
            </label>
            <div className="relative">
              <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-stone-400" />
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full pl-11 pr-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                placeholder="Enter your company name"
              />
            </div>
          </div>
        )}

        {/* Message Field */}
        <div className="relative">
          <label htmlFor="message" className="block text-sm font-medium text-zinc-700 mb-2">
            Message *
          </label>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-4 h-5 w-5 text-stone-400" />
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full pl-11 pr-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-none"
              placeholder="Tell us about your project or question..."
            />
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="flex items-center gap-2 text-red-600 text-sm">
            <AlertCircle className="h-4 w-4" />
            <span>{error}</span>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting || isSubmitted}
          className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 px-6 rounded-xl font-medium hover:from-emerald-500 hover:to-teal-500 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Sending...
            </>
          ) : isSubmitted ? (
            <>
              <Check className="h-5 w-5" />
              Message Sent!
            </>
          ) : (
            <>
              <Send className="h-5 w-5" />
              Send Message
            </>
          )}
        </button>

        {/* Success Message */}
        {isSubmitted && (
          <div className="text-center text-emerald-600 text-sm font-medium">
            Thank you! We'll get back to you within 24 hours.
          </div>
        )}
      </form>
    </div>
  )
}
