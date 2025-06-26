"use client"

import { useState } from 'react'
import { Mail, ArrowRight, Check, AlertCircle } from 'lucide-react'
import { sendNewsletterSignup, type NewsletterData } from '@/lib/emailjs'

interface NewsletterSignupProps {
  title?: string
  description?: string
  placeholder?: string
  buttonText?: string
  source?: string
  className?: string
}

export default function NewsletterSignup({
  title = "Stay Updated",
  description = "Get the latest insights on AI and customer engagement delivered to your inbox.",
  placeholder = "Enter your email",
  buttonText = "Subscribe",
  source = "Website Newsletter",
  className = ""
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (isSubmitting || !email.trim()) return

    setIsSubmitting(true)
    setError('')

    try {
      const success = await sendNewsletterSignup({ email, source })
      
      if (success) {
        setIsSubmitted(true)
        setEmail('')
        
        // Reset success state after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000)
      } else {
        setError('Failed to subscribe. Please try again.')
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={`${className}`}>
      <div className="text-center mb-6">
        <h3 className="font-serif text-xl font-medium text-zinc-900 mb-2">{title}</h3>
        <p className="text-stone-600 font-light text-sm">{description}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-stone-400" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full pl-11 pr-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
            placeholder={placeholder}
            required
          />
        </div>

        {error && (
          <div className="flex items-center gap-2 text-red-600 text-sm">
            <AlertCircle className="h-4 w-4" />
            <span>{error}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting || isSubmitted || !email.trim()}
          className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 px-6 rounded-xl font-medium hover:from-emerald-500 hover:to-teal-500 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Subscribing...
            </>
          ) : isSubmitted ? (
            <>
              <Check className="h-5 w-5" />
              Subscribed!
            </>
          ) : (
            <>
              {buttonText}
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>

        {isSubmitted && (
          <div className="text-center text-emerald-600 text-sm font-medium">
            Welcome aboard! You'll receive our latest updates soon.
          </div>
        )}
      </form>

      <p className="text-xs text-stone-500 text-center mt-4">
        No spam, ever. Unsubscribe with one click.
      </p>
    </div>
  )
}
