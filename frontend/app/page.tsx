"use client"

import type React from "react"

import { useState, useCallback, memo, useEffect } from "react"
import { initEmailJS, sendNewsletterSignup } from "@/lib/emailjs"
import {
  ArrowRight,
  Check,
  Mail,
  Phone,
  Zap,
  Users,
  TrendingUp,
  Bot,
  Shield,
  Sparkles,
  BarChart3,
  Clock,
  Award,
} from "lucide-react"
import OriginalChatWidget from "../components/OriginalChatWidget"


const FeatureCard = memo(
  ({
    icon: Icon,
    title,
    description,
    features,
  }: {
    icon: any
    title: string
    description: string
    features: string[]
  }) => (
    <div className="bg-stone-50/50 p-10 rounded-3xl border border-stone-200/50 hover:shadow-xl hover:shadow-stone-500/5 transition-all duration-300 group">
      <div className="w-20 h-20 bg-emerald-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-emerald-200 transition-colors">
        <Icon className="h-10 w-10 text-emerald-700" />
      </div>
      <h3 className="font-serif text-2xl font-medium text-zinc-900 mb-6">{title}</h3>
      <p className="text-stone-600 leading-relaxed mb-8 font-light">{description}</p>
      <ul className="space-y-3 text-sm text-stone-600">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <Check className="h-4 w-4 text-emerald-600 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  ),
)

const BenefitCard = memo(
  ({
    icon: Icon,
    title,
    description,
  }: {
    icon: any
    title: string
    description: string
  }) => (
    <div className="text-center group">
      <div className="flex items-center justify-center mb-6">
        <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center group-hover:bg-emerald-100 transition-colors duration-300">
          <Icon className="h-8 w-8 text-emerald-700" />
        </div>
      </div>
      <h3 className="font-serif text-xl font-medium text-zinc-900 mb-3">{title}</h3>
      <p className="text-stone-600 font-light leading-relaxed">{description}</p>
    </div>
  ),
)

export default function Page() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // Initialize EmailJS on component mount
  useEffect(() => {
    initEmailJS()
  }, [])

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      if (!email.trim() || isLoading) return

      setIsLoading(true)

      try {
        const success = await sendNewsletterSignup({ 
          email, 
          source: "Homepage Hero Form" 
        })
        
        if (success) {
          setIsSubmitted(true)
          setEmail("")
          setTimeout(() => setIsSubmitted(false), 3000)
        } else {
          console.error("Email submission failed")
        }
      } catch (error) {
        console.error("Email submission failed:", error)
      } finally {
        setIsLoading(false)
      }
    },
    [email, isLoading],
  )

  const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-stone-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                <Bot className="h-7 w-7 text-white" aria-hidden="true" />
              </div>
              <div>
                <h1 className="font-serif text-2xl font-medium text-zinc-900">Leadaisy</h1>
                <p className="text-xs text-stone-500 font-light tracking-wide">AI-Powered Customer Engagement</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-10" role="navigation" aria-label="Main navigation">
              <a
                href="/features"
                className="text-stone-600 hover:text-zinc-900 font-light transition-colors tracking-wide focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-md px-2 py-1"
              >
                Features
              </a>
              <a
                href="/pricing"
                className="text-stone-600 hover:text-zinc-900 font-light transition-colors tracking-wide focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-md px-2 py-1"
              >
                Pricing
              </a>
              <a
                href="/blog"
                className="text-stone-600 hover:text-zinc-900 font-light transition-colors tracking-wide focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-md px-2 py-1"
              >
                Blog
              </a>
              <a
                href="/about"
                className="text-stone-600 hover:text-zinc-900 font-light transition-colors tracking-wide focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-md px-2 py-1"
              >
                About
              </a>
              <a
                href="/help"
                className="text-stone-600 hover:text-zinc-900 font-light transition-colors tracking-wide focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-md px-2 py-1"
              >
                Help
              </a>
              <button className="bg-gradient-to-r from-zinc-900 to-zinc-800 text-white px-6 py-3 rounded-xl font-medium hover:from-zinc-800 hover:to-zinc-700 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">
                <span className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative">Get Started</span>
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-amber-50/30 via-stone-50 to-rose-50/40 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(251,191,36,0.06)_0%,transparent_60%)] opacity-80"></div>
        <div className="absolute inset-0 bg-[conic-gradient(from_135deg_at_40%_70%,transparent_0deg,rgba(236,72,153,0.04)_45deg,transparent_90deg)] opacity-60"></div>
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(6,182,212,0.03)_0%,transparent_50%,rgba(139,69,19,0.03)_100%)] opacity-70"></div>

        {/* Floating Elements */}
        <div
          className="absolute top-32 right-16 w-80 h-80 bg-gradient-to-br from-amber-200/15 via-orange-100/10 to-rose-200/15 rounded-full blur-3xl animate-pulse"
          aria-hidden="true"
        ></div>
        <div
          className="absolute bottom-48 left-8 w-64 h-64 bg-gradient-to-tr from-cyan-100/12 via-sky-100/8 to-blue-200/15 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "2s" }}
          aria-hidden="true"
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-32 h-32 bg-gradient-to-br from-rose-100/10 to-pink-100/8 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "4s" }}
          aria-hidden="true"
        ></div>

        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-start gap-12 min-h-screen py-24">
            {/* Left Column - Content */}
            <div className="w-full lg:w-3/5 lg:pr-8">

              {/* Main Headline */}
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-serif font-light text-zinc-900 leading-[0.9] mb-8 tracking-tight">
                Simple AI chatbot
                <span className="block font-medium bg-gradient-to-r from-amber-600 via-orange-500 to-rose-600 bg-clip-text text-transparent mt-3 drop-shadow-sm">
                  captures leads
                </span>
                <span className="block text-3xl lg:text-4xl xl:text-5xl font-mono font-light text-zinc-700 mt-4 tracking-wide">
                  emails them to you
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl lg:text-2xl text-zinc-600 leading-relaxed mb-12 max-w-2xl font-light">
                Perfect for small businesses who can't afford to miss opportunities. When someone visits your website and wants to buy,{" "}
                <span className="text-zinc-900 font-medium bg-gradient-to-r from-amber-100 to-orange-100 px-1 rounded">
                  they get instant help
                </span>
                {" "}and{" "}
                <span className="text-zinc-900 font-medium bg-gradient-to-r from-rose-100 to-pink-100 px-1 rounded">
                  you get their contact info immediately
                </span>
                .
              </p>

              {/* Social Proof */}
              <div className="flex flex-wrap items-center gap-6 text-zinc-500">
                <div className="flex items-center gap-3 group cursor-default">
                  <div className="relative">
                    <div className="w-3 h-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full shadow-sm"></div>
                    <div className="absolute -inset-1 w-5 h-5 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-300"></div>
                  </div>
                  <span className="text-sm font-medium group-hover:text-zinc-700 transition-colors">
                    Works 24/7, even while you sleep 💤
                  </span>
                </div>
                <div className="flex items-center gap-3 group cursor-default">
                  <div className="relative">
                    <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full shadow-sm"></div>
                    <div className="absolute -inset-1 w-5 h-5 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-300"></div>
                  </div>
                  <span className="text-sm font-medium group-hover:text-zinc-700 transition-colors">
                    $97/month, no setup fees 💰
                  </span>
                </div>
                <div className="flex items-center gap-3 group cursor-default">
                  <div className="relative">
                    <div className="w-3 h-3 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full shadow-sm"></div>
                    <div className="absolute -inset-1 w-5 h-5 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-300"></div>
                  </div>
                  <span className="text-sm font-medium group-hover:text-zinc-700 transition-colors">
                    5-minute setup for any website ⚡
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="w-full lg:w-2/5 lg:max-w-[380px] lg:flex-shrink-0">
              <div className="lg:sticky lg:top-8">
                <div className="relative group">
                  {/* Glow Effects */}
                  <div
                    className="absolute -inset-1 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 rounded-3xl blur-lg opacity-15 group-hover:opacity-25 transition-all duration-500"
                    aria-hidden="true"
                  ></div>
                  <div
                    className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 to-rose-400 rounded-3xl blur opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                    aria-hidden="true"
                  ></div>

                  {/* Form Card */}
                  <div className="relative bg-white/95 backdrop-blur-xl border border-amber-200/30 rounded-3xl p-8 shadow-2xl shadow-amber-500/5 hover:shadow-3xl hover:shadow-orange-500/10 transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02]">
                    {/* Header */}
                    <div className="text-center mb-6">
                      <h2 className="text-xl font-serif font-medium text-zinc-900 mb-2">Try it for free</h2>
                      <p className="text-zinc-600 text-sm font-light">See how it works, then decide if you want it</p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                      <div className="relative group">
                        <label htmlFor="email" className="sr-only">
                          Email address
                        </label>
                        <input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={handleEmailChange}
                          className="w-full px-5 py-4 bg-white/50 border-2 border-slate-200 rounded-2xl focus:outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-100 focus:bg-white text-slate-900 placeholder-slate-400 transition-all duration-300 group-hover:border-slate-300 h-12 text-base"
                          required
                          aria-describedby="email-error"
                          disabled={isLoading}
                        />
                        <div
                          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                          aria-hidden="true"
                        ></div>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitted || isLoading || !email.trim()}
                        className="w-full relative group overflow-hidden bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 hover:from-zinc-800 hover:to-zinc-700 text-white px-6 py-4 rounded-2xl font-semibold text-base shadow-xl shadow-zinc-900/20 hover:shadow-2xl hover:shadow-amber-500/20 transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-500 disabled:opacity-50 disabled:transform-none disabled:cursor-not-allowed h-12 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                        aria-describedby="button-status"
                      >
                        <span
                          className="absolute inset-0 bg-gradient-to-r from-amber-600 via-orange-500 to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                          aria-hidden="true"
                        ></span>
                        <span
                          className="absolute inset-0 bg-gradient-to-r from-amber-400 to-rose-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                          aria-hidden="true"
                        ></span>
                        <span className="relative flex items-center justify-center gap-2">
                          {isLoading ? (
                            <>
                              <div
                                className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"
                                aria-hidden="true"
                              ></div>
                              Processing...
                            </>
                          ) : isSubmitted ? (
                            <>
                              <Check className="h-5 w-5" aria-hidden="true" /> Welcome aboard! ✨
                            </>
                          ) : (
                            <>
                              Try it free
                              <ArrowRight
                                className="h-5 w-5 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300"
                                aria-hidden="true"
                              />
                            </>
                          )}
                        </span>
                      </button>
                    </form>

                    {/* Trust Signals */}
                    <div className="grid grid-cols-3 gap-3 pt-6 mt-6 border-t border-amber-100/50">
                      <div className="text-center group cursor-default">
                        <div className="relative mx-auto mb-2 w-8 h-8 flex items-center justify-center">
                          <Shield
                            className="h-4 w-4 text-zinc-400 group-hover:text-amber-600 transition-all duration-300 group-hover:scale-110"
                            aria-hidden="true"
                          />
                          <div
                            className="absolute inset-0 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 -z-10"
                            aria-hidden="true"
                          ></div>
                        </div>
                        <p className="text-xs text-zinc-500 group-hover:text-zinc-700 transition-colors font-medium">
                          Secure
                        </p>
                      </div>
                      <div className="text-center group cursor-default">
                        <div className="relative mx-auto mb-2 w-8 h-8 flex items-center justify-center">
                          <Clock
                            className="h-4 w-4 text-zinc-400 group-hover:text-emerald-600 transition-all duration-300 group-hover:scale-110"
                            aria-hidden="true"
                          />
                          <div
                            className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 -z-10"
                            aria-hidden="true"
                          ></div>
                        </div>
                        <p className="text-xs text-zinc-500 group-hover:text-zinc-700 transition-colors font-medium">
                          24/7 Support
                        </p>
                      </div>
                      <div className="text-center group cursor-default">
                        <div className="relative mx-auto mb-2 w-8 h-8 flex items-center justify-center">
                          <Award
                            className="h-4 w-4 text-zinc-400 group-hover:text-rose-600 transition-all duration-300 group-hover:scale-110"
                            aria-hidden="true"
                          />
                          <div
                            className="absolute inset-0 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 -z-10"
                            aria-hidden="true"
                          ></div>
                        </div>
                        <p className="text-xs text-zinc-500 group-hover:text-zinc-700 transition-colors font-medium">
                          Simple
                        </p>
                      </div>
                    </div>

                    <p className="text-xs text-zinc-500 text-center mt-4 font-light">
                      Try free first. Only $97/month when you're ready. ✨
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-stone-50/50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <BenefitCard
              icon={Clock}
              title="Always Available"
              description="Never miss a customer because your website visitors get help immediately."
            />
            <BenefitCard
              icon={Zap}
              title="Instant Responses"
              description="Turn website visitors into customers by answering their questions instantly."
            />
            <BenefitCard
              icon={Sparkles}
              title="Easy Setup"
              description="We handle all the technical stuff so you don't have to."
            />
            <BenefitCard
              icon={TrendingUp}
              title="More Leads"
              description="Get more customers without working harder or staying up all night."
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-zinc-900 mb-6 leading-tight">
              How it
              <span className="block font-medium bg-gradient-to-r from-amber-700 via-orange-600 to-rose-700 bg-clip-text text-transparent mt-3 drop-shadow-sm">
                helps you
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-stone-600 max-w-3xl mx-auto font-light leading-relaxed">
              Three simple ways this chatbot helps small businesses capture more customers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            <FeatureCard
              icon={Clock}
              title="Never Miss a Customer"
              description="When someone visits your website at 2am or on Sunday, they get instant help instead of leaving empty-handed."
              features={[
                "Works 24 hours a day, 7 days a week",
                "Answers questions while you sleep",
                "Prevents customers from going to competitors",
              ]}
            />
            <FeatureCard
              icon={Mail}
              title="Get Their Contact Info"
              description="When someone is interested in your services, the chatbot gets their name and phone number and emails it to you immediately."
              features={[
                "Emails you every time someone is interested",
                "Includes their name and phone number",
                "Shows exactly what they're looking for",
              ]}
            />
            <FeatureCard
              icon={Zap}
              title="Simple to Set Up"
              description="We handle everything for you. Just tell us about your business and we'll have your chatbot ready in 24 hours."
              features={[
                "No technical skills needed",
                "Works on any website",
                "We do all the setup for you",
              ]}
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-stone-50/30">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-zinc-900 mb-6 leading-tight">
              How It
              <span className="block font-medium bg-gradient-to-r from-amber-700 via-orange-600 to-rose-700 bg-clip-text text-transparent mt-3 drop-shadow-sm">
                Works
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-stone-600 max-w-3xl mx-auto font-light leading-relaxed">
              Simple 3-step process to get your AI chatbot capturing leads from your website
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-16">
              {[
                {
                  step: 1,
                  title: "Tell Us About Your Business",
                  description:
                    "Share basic information about your services, pricing, and common customer questions. This helps us train your chatbot to represent your business accurately.",
                },
                {
                  step: 2,
                  title: "We Set Up Your Chatbot",
                  description:
                    "Our team creates your custom chatbot and provides you with a simple code snippet to add to your website. Takes just a few minutes to install.",
                },
                {
                  step: 3,
                  title: "Start Capturing Leads",
                  description:
                    "Your chatbot goes live on your website, answering questions and capturing leads 24/7. All leads are automatically sent to your email inbox.",
                },
              ].map((item) => (
                <div key={item.step} className="flex flex-col md:flex-row md:items-start gap-8 group">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center text-white text-xl font-serif font-medium shadow-lg group-hover:shadow-xl transition-shadow mx-auto md:mx-0">
                    {item.step}
                  </div>
                  <div className="flex-1 text-center md:text-left md:pt-2">
                    <h3 className="font-serif text-2xl font-medium text-zinc-900 mb-4">{item.title}</h3>
                    <p className="text-lg text-stone-600 leading-relaxed font-light">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-zinc-900 mb-8 leading-tight">
              Simple,
              <span className="block font-medium bg-gradient-to-r from-amber-700 via-orange-600 to-rose-700 bg-clip-text text-transparent mt-3 drop-shadow-sm">
                Honest Pricing
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-stone-600 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
              No tricks, no hidden fees, no complicated contracts. Just a simple monthly price for a tool that helps you capture more leads.
            </p>
          </div>

          {/* Pricing Card */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-white to-stone-50/50 p-12 rounded-3xl shadow-2xl border-2 border-emerald-500/20 relative overflow-hidden">
              <div
                className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full -translate-y-16 translate-x-16 opacity-50"
                aria-hidden="true"
              ></div>

              <div className="relative text-center mb-12 mt-8">
                <h3 className="font-serif text-3xl font-medium text-zinc-900 mb-6">AI Chatbot for Your Website</h3>
                <p className="text-stone-600 mb-10 font-light text-lg">Everything you need to capture more leads</p>

                <div className="mb-10">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="text-6xl font-serif font-light text-zinc-900">
                      $97<span className="text-2xl text-stone-500 font-light">/month</span>
                    </span>
                  </div>
                  <p className="text-lg text-stone-600 font-light">No setup fees • Cancel anytime • 30-day money back guarantee</p>
                </div>
              </div>

              <ul className="space-y-5 mb-12">
                {[
                  "Unlimited conversations with your customers",
                  "Automatic lead capture and email notifications",
                  "We set up everything for you in 24 hours",
                  "Works on any website (WordPress, Shopify, etc.)",
                  "Email support when you need help",
                  "Custom training on your business information",
                  "Cancel anytime, no contracts or hidden fees",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="h-4 w-4 text-white" aria-hidden="true" />
                    </div>
                    <span className="text-stone-700 font-light text-lg">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full bg-gradient-to-r from-zinc-900 to-zinc-800 text-white py-5 rounded-2xl font-medium text-lg hover:from-zinc-800 hover:to-zinc-700 transition-all duration-300 shadow-xl hover:shadow-2xl relative overflow-hidden group focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">
                <span
                  className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  aria-hidden="true"
                ></span>
                <span className="relative">Get Started - $97/month</span>
              </button>

              <div className="text-center mt-8 space-y-2">
                <p className="text-sm text-stone-500 font-light">⚡ Setup completed within 24 hours</p>
                <p className="text-sm text-stone-500 font-light">💰 30-day money back guarantee</p>
                <p className="text-sm text-stone-500 font-light">📞 Talk to a real person, not a chatbot</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/50 rounded-2xl p-8 max-w-lg mx-auto">
              <div className="text-amber-800 font-serif font-medium text-lg mb-3">
                💡 Why Only $97/Month?
              </div>
              <p className="text-amber-700 text-sm font-light">
                We built this for small businesses like restaurants, contractors, and local service providers who need to capture leads but can't afford expensive enterprise software.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Contact Section */}
      <section id="contact" className="py-24 bg-zinc-900 text-white relative overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-emerald-900/20"
          aria-hidden="true"
        ></div>
        <div
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-emerald-500/10 to-transparent rounded-full -translate-y-48 translate-x-48"
          aria-hidden="true"
        ></div>

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light mb-6 leading-tight">
            Ready to Stop Missing
            <span className="block font-medium bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 bg-clip-text text-transparent mt-3 drop-shadow-sm">
              Potential Customers?
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-stone-300 mb-12 font-light leading-relaxed max-w-3xl mx-auto">
            Get started with your AI chatbot today. We'll have you capturing leads from your website in 24 hours.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <Mail
                className="h-8 w-8 text-emerald-400 mx-auto mb-4 group-hover:scale-110 transition-transform"
                aria-hidden="true"
              />
              <h3 className="font-serif text-lg font-medium mb-3">Email Us</h3>
              <p className="text-stone-300 mb-4 font-light text-sm">
                Questions? Want to see how it works? Just email us.
              </p>
              <a
                href="mailto:sales@leadaisy.com"
                className="text-emerald-400 hover:text-emerald-300 font-medium text-base transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-zinc-900 rounded-md px-2 py-1"
              >
                sales@leadaisy.com
              </a>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <Phone
                className="h-8 w-8 text-emerald-400 mx-auto mb-4 group-hover:scale-110 transition-transform"
                aria-hidden="true"
              />
              <h3 className="font-serif text-lg font-medium mb-3">Call Us</h3>
              <p className="text-stone-300 mb-4 font-light text-sm">Talk to a real person who can answer your questions</p>
              <a
                href="tel:+16729995648"
                className="text-emerald-400 hover:text-emerald-300 font-medium text-base transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-zinc-900 rounded-md px-2 py-1"
              >
                (672) 999-5648
              </a>
            </div>
          </div>

          <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-2xl font-medium text-base hover:from-emerald-500 hover:to-teal-500 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/25 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-zinc-900">
            Get Started Today - $97/month
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-800 text-stone-300 py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-emerald-600 rounded-xl flex items-center justify-center">
                  <Bot className="h-5 w-5 text-white" aria-hidden="true" />
                </div>
                <span className="font-serif text-lg font-medium text-white">Leadaisy</span>
              </div>
              <p className="text-stone-400 mb-4 font-light leading-relaxed text-sm">
                A simple AI chatbot that captures leads from your website and emails them to you. Perfect for small businesses who can't afford to miss opportunities.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-stone-400 text-sm">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:hello@leadaisy.com" className="hover:text-white transition-colors">hello@leadaisy.com</a>
                </div>
                <div className="flex items-center gap-2 text-stone-400 text-sm">
                  <Phone className="h-4 w-4" />
                  <a href="tel:+16729995648" className="hover:text-white transition-colors">(672) 999-5648</a>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-serif font-medium text-white mb-4">Platform</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/features"
                    className="hover:text-white transition-colors font-light text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-zinc-800 rounded-md px-1 py-0.5"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="/pricing"
                    className="hover:text-white transition-colors font-light text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-zinc-800 rounded-md px-1 py-0.5"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="/help"
                    className="hover:text-white transition-colors font-light text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-zinc-800 rounded-md px-1 py-0.5"
                  >
                    Help & FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="/blog"
                    className="hover:text-white transition-colors font-light text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-zinc-800 rounded-md px-1 py-0.5"
                  >
                    Blog
                  </a>
                </li>
              </ul>
              <h4 className="font-serif font-medium text-white mb-4 mt-6">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/about"
                    className="hover:text-white transition-colors font-light text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-zinc-800 rounded-md px-1 py-0.5"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-white transition-colors font-light text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-zinc-800 rounded-md px-1 py-0.5"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif font-medium text-white mb-4">Legal & Support</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/privacy"
                    className="hover:text-white transition-colors font-light text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-zinc-800 rounded-md px-1 py-0.5"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms"
                    className="hover:text-white transition-colors font-light text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-zinc-800 rounded-md px-1 py-0.5"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:support@leadaisy.com"
                    className="hover:text-white transition-colors font-light text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-zinc-800 rounded-md px-1 py-0.5"
                  >
                    Technical Support
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:security@leadaisy.com"
                    className="hover:text-white transition-colors font-light text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-zinc-800 rounded-md px-1 py-0.5"
                  >
                    Security & Compliance
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-zinc-700 pt-6 flex flex-col md:flex-row justify-between items-center">
            <div className="text-stone-400 mb-4 md:mb-0 font-light text-sm">© 2025 Leadaisy. All rights reserved.</div>
            <div className="text-stone-400 font-light text-sm">
              Helping small businesses capture more leads with simple AI technology
            </div>
          </div>
        </div>
      </footer>

      <OriginalChatWidget />
    </div>
  )
}
