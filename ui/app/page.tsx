"use client"

import type React from "react"

import { useState, useCallback, memo } from "react"
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

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      if (!email.trim() || isLoading) return

      setIsLoading(true)

      try {
        // TODO: Implement actual email capture logic
        await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API call
        setIsSubmitted(true)
        setEmail("")
        setTimeout(() => setIsSubmitted(false), 3000)
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
                href="#features"
                className="text-stone-600 hover:text-zinc-900 font-light transition-colors tracking-wide focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-md px-2 py-1"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-stone-600 hover:text-zinc-900 font-light transition-colors tracking-wide focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-md px-2 py-1"
              >
                How It Works
              </a>
              <a
                href="#pricing"
                className="text-stone-600 hover:text-zinc-900 font-light transition-colors tracking-wide focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-md px-2 py-1"
              >
                Pricing
              </a>
              <a
                href="#contact"
                className="text-stone-600 hover:text-zinc-900 font-light transition-colors tracking-wide focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-md px-2 py-1"
              >
                Contact
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
                Stop losing
                <span className="block font-medium bg-gradient-to-r from-amber-600 via-orange-500 to-rose-600 bg-clip-text text-transparent mt-3 drop-shadow-sm">
                  customers
                </span>
                <span className="block text-3xl lg:text-4xl xl:text-5xl font-mono font-light text-zinc-700 mt-4 tracking-wide">
                  while you sleep
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl lg:text-2xl text-zinc-600 leading-relaxed mb-12 max-w-2xl font-light">
                Turn your website into a{" "}
                <span className="text-zinc-900 font-medium bg-gradient-to-r from-amber-100 to-orange-100 px-1 rounded">
                  24/7 sales machine
                </span>
                . Leadaisy captures every visitor, answers their questions, and
                <span className="text-zinc-900 font-medium bg-gradient-to-r from-rose-100 to-pink-100 px-1 rounded">
                  delivers hot leads to your inbox
                </span>{" "}
                — even at 3 AM.
              </p>

              {/* Social Proof */}
              <div className="flex flex-wrap items-center gap-6 text-zinc-500">
                <div className="flex items-center gap-3 group cursor-default">
                  <div className="relative">
                    <div className="w-3 h-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full shadow-sm"></div>
                    <div className="absolute -inset-1 w-5 h-5 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-300"></div>
                  </div>
                  <span className="text-sm font-medium group-hover:text-zinc-700 transition-colors">
                    Never offline, never tired ⚡
                  </span>
                </div>
                <div className="flex items-center gap-3 group cursor-default">
                  <div className="relative">
                    <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full shadow-sm"></div>
                    <div className="absolute -inset-1 w-5 h-5 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-300"></div>
                  </div>
                  <span className="text-sm font-medium group-hover:text-zinc-700 transition-colors">
                    Setup in under 5 minutes 🚀
                  </span>
                </div>
                <div className="flex items-center gap-3 group cursor-default">
                  <div className="relative">
                    <div className="w-3 h-3 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full shadow-sm"></div>
                    <div className="absolute -inset-1 w-5 h-5 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-300"></div>
                  </div>
                  <span className="text-sm font-medium group-hover:text-zinc-700 transition-colors">
                    Works with any website ✨
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
                      <h2 className="text-xl font-serif font-medium text-zinc-900 mb-2">Start capturing leads</h2>
                      <p className="text-zinc-600 text-sm font-light">Join thousands who never miss an opportunity</p>
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
                              Get my AI assistant
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
                          Enterprise
                        </p>
                      </div>
                    </div>

                    <p className="text-xs text-zinc-500 text-center mt-4 font-light">
                      No spam, ever. Unsubscribe with one click. ✨
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
              description="Capture opportunities even when your team is offline."
            />
            <BenefitCard
              icon={Zap}
              title="Instant Engagement"
              description="Connect with visitors the moment they show interest."
            />
            <BenefitCard
              icon={Sparkles}
              title="Effortless Setup"
              description="Enterprise deployment in minutes, not months."
            />
            <BenefitCard
              icon={TrendingUp}
              title="Proven Results"
              description="Focus your team on closing, not just collecting."
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-zinc-900 mb-6 leading-tight">
              An AI Partner Built for
              <span className="block font-medium bg-gradient-to-r from-amber-700 via-orange-600 to-rose-700 bg-clip-text text-transparent mt-3 drop-shadow-sm">
                Your Enterprise
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-stone-600 max-w-3xl mx-auto font-light leading-relaxed">
              Sophisticated features designed to provide seamless experiences for your customers and deliver qualified
              opportunities directly to your team
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            <FeatureCard
              icon={Bot}
              title="Intelligent Conversation Engine"
              description="Advanced natural language processing designed to understand your business context. We train your AI on your specific solutions and expertise to provide accurate, contextually-aware responses that build trust."
              features={[
                "Sophisticated conversation flows",
                "Business-specific knowledge training",
                "Multi-language capability",
              ]}
            />
            <FeatureCard
              icon={Zap}
              title="Rapid Enterprise Deployment"
              description="Experience enterprise-grade deployment without the enterprise timeline. Our sophisticated yet streamlined approach delivers personalized setup and dedicated support you won't find elsewhere."
              features={[
                "One-click enterprise integration",
                "Zero technical complexity",
                "White-glove implementation support",
              ]}
            />
            <FeatureCard
              icon={BarChart3}
              title="Enterprise Analytics"
              description="Sophisticated analytics dashboard designed for enterprise decision-making. Track engagement patterns, monitor lead quality, and gain deep insights into your customer journey—all in real-time."
              features={[
                "Real-time performance metrics",
                "Advanced conversation analytics",
                "Executive-level reporting",
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
              Our Collaborative
              <span className="block font-medium bg-gradient-to-r from-amber-700 via-orange-600 to-rose-700 bg-clip-text text-transparent mt-3 drop-shadow-sm">
                Implementation Process
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-stone-600 max-w-3xl mx-auto font-light leading-relaxed">
              From consultation to launch, we work with you every step of the way to ensure your AI assistant becomes a
              perfect extension of your enterprise
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-16">
              {[
                {
                  step: 1,
                  title: "We Understand Your Enterprise",
                  description:
                    "We begin with a comprehensive analysis of your business ecosystem, customer journey, and strategic objectives to create a tailored AI solution that aligns with your enterprise goals.",
                },
                {
                  step: 2,
                  title: "We Build Your Custom Intelligence",
                  description:
                    "Our team develops and trains your AI assistant using your enterprise knowledge base and our advanced machine learning algorithms to ensure optimal performance and authentic brand representation.",
                },
                {
                  step: 3,
                  title: "We Deploy & Optimize",
                  description:
                    "We handle enterprise-grade deployment across your digital ecosystem. Our team ensures seamless integration and provides ongoing optimization to maximize opportunity conversion and customer satisfaction.",
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
              Transparent,
              <span className="block font-medium bg-gradient-to-r from-amber-700 via-orange-600 to-rose-700 bg-clip-text text-transparent mt-3 drop-shadow-sm">
                Value-Driven Pricing
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-stone-600 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
              Enterprise-grade solution designed for forward-thinking businesses. All plans include our sophisticated
              features and dedicated support.
            </p>
            <div className="bg-emerald-50 border border-emerald-200/50 rounded-2xl p-8 max-w-2xl mx-auto">
              <div className="text-emerald-800 font-serif text-xl font-medium mb-3">
                Exclusive Offer for Founding Partners
              </div>
              <p className="text-emerald-700 font-light">
                Our Founding Partners receive exclusive access to enterprise pricing. Contact us to discuss your
                specific requirements.
              </p>
            </div>
          </div>

          {/* Pricing Card */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-white to-stone-50/50 p-12 rounded-3xl shadow-2xl border-2 border-emerald-500/20 relative overflow-hidden">
              <div
                className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full -translate-y-16 translate-x-16 opacity-50"
                aria-hidden="true"
              ></div>

              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-2xl text-sm font-medium shadow-lg">
                🎉 FOUNDING MEMBER EXCLUSIVE
              </div>

              <div className="relative text-center mb-12 mt-8">
                <h3 className="font-serif text-3xl font-medium text-zinc-900 mb-6">Enterprise AI Support</h3>
                <p className="text-stone-600 mb-10 font-light text-lg">Everything your enterprise needs to excel</p>

                <div className="mb-10">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="text-3xl text-stone-400 line-through font-light">$297</span>
                    <span className="text-6xl font-serif font-light text-zinc-900">
                      $97<span className="text-2xl text-stone-500 font-light">/month</span>
                    </span>
                  </div>
                  <div className="text-lg text-emerald-700 font-medium mb-3">
                    <span className="line-through text-stone-400">Setup investment of $297</span>
                  </div>
                  <p className="text-sm text-stone-500 font-light">Save $297 as a founding member</p>
                </div>

                <div className="bg-emerald-50/50 border border-emerald-200/50 rounded-2xl p-8 mb-10">
                  
                  <div className="text-emerald-700 font-light">
                    Your founding member investment: <span className="text-2xl font-medium">$97/month</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-5 mb-12">
                {[
                  "Unlimited enterprise conversations",
                  "Instant opportunity capture & notifications",
                  "Enterprise white-glove implementation",
                  "Advanced analytics & reporting suite",
                  "24/7 enterprise priority support",
                  "Custom branding & seamless integration",
                  "Flexible terms, cancel anytime",
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
                <span className="relative">🎯 Secure Your Founding Member Position</span>
              </button>

              <div className="text-center mt-8 space-y-2">
                <p className="text-sm text-stone-500 font-light">⚡ Implementation completed within 24 hours</p>
                <p className="text-sm text-stone-500 font-light">💰 30-day satisfaction guarantee</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/50 rounded-2xl p-8 max-w-lg mx-auto">
              <div className="text-amber-800 font-serif font-medium text-lg mb-3">
                ⏰ Limited Founding Member Availability
              </div>
              <p className="text-amber-700 text-sm font-light">
                Accepting only 50 founding members at this exclusive rate. Standard enterprise pricing begins at
                <span className="font-medium"> $997/month</span> + implementation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founding Partner Section */}
      <section className="py-24 bg-stone-50/30">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-zinc-900 mb-6 leading-tight">
              Become a Founding Partner &
              <span className="block font-medium bg-gradient-to-r from-amber-700 via-orange-600 to-rose-700 bg-clip-text text-transparent mt-3 drop-shadow-sm">
                Shape the Future
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-stone-600 max-w-3xl mx-auto font-light leading-relaxed">
              Exceptional solutions are built with exceptional partners. We're launching Leadaisy and seeking a select
              group of forward-thinking enterprises to join us at the foundation.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-white via-stone-50/50 to-emerald-50/30 border border-emerald-200/30 rounded-3xl p-12 relative overflow-hidden">
              <div
                className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-emerald-100/50 to-teal-100/50 rounded-full -translate-x-20 -translate-y-20"
                aria-hidden="true"
              ></div>
              <div
                className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-emerald-100/30 to-teal-100/30 rounded-full translate-x-16 translate-y-16"
                aria-hidden="true"
              ></div>

              <div className="relative">
                <h3 className="font-serif text-2xl lg:text-3xl font-medium text-zinc-900 mb-12 text-center">
                  As a Founding Partner, you receive:
                </h3>

                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    {
                      icon: TrendingUp,
                      title: "Exclusive Enterprise Pricing",
                      description:
                        "Secure Leadaisy at our special founder's rate for life, or receive your first 6 months completely complimentary.",
                    },
                    {
                      icon: Users,
                      title: "Executive White-Glove Implementation",
                      description:
                        "As founder and lead architect, I personally oversee your entire implementation and AI training.",
                    },
                    {
                      icon: Shield,
                      title: "Direct Executive Access",
                      description:
                        "Receive direct access to our executive team. Your insights become our immediate priority.",
                    },
                    {
                      icon: Sparkles,
                      title: "Strategic Product Influence",
                      description: "Your enterprise requirements directly influence our development roadmap.",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-stone-200/50 group hover:shadow-lg transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-emerald-200 transition-colors">
                        <item.icon className="h-6 w-6 text-emerald-700" aria-hidden="true" />
                      </div>
                      <h4 className="font-serif text-lg font-medium text-zinc-900 mb-3">{item.title}</h4>
                      <p className="text-stone-600 font-light leading-relaxed text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-12">
                  <button className="bg-gradient-to-r from-zinc-900 to-zinc-800 text-white px-8 py-4 rounded-2xl font-medium text-base hover:from-zinc-800 hover:to-zinc-700 transition-all duration-300 shadow-xl hover:shadow-2xl relative overflow-hidden group focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">
                    <span
                      className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      aria-hidden="true"
                    ></span>
                    <span className="relative">Apply for Founding Partnership</span>
                  </button>
                </div>
              </div>
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
            Ready to Transform Your
            <span className="block font-medium bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 bg-clip-text text-transparent mt-3 drop-shadow-sm">
              Customer Experience?
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-stone-300 mb-12 font-light leading-relaxed max-w-3xl mx-auto">
            Be among the first enterprises to leverage Leadaisy. Begin capturing more opportunities, delighting
            customers with instant support, and accelerating your growth trajectory.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <Mail
                className="h-8 w-8 text-emerald-400 mx-auto mb-4 group-hover:scale-110 transition-transform"
                aria-hidden="true"
              />
              <h3 className="font-serif text-lg font-medium mb-3">Email Our Executive Team</h3>
              <p className="text-stone-300 mb-4 font-light text-sm">
                Schedule a personalized demo and enterprise consultation
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
              <h3 className="font-serif text-lg font-medium mb-3">Direct Executive Line</h3>
              <p className="text-stone-300 mb-4 font-light text-sm">Speak with our enterprise specialists today</p>
              <a
                href="tel:+16729995648"
                className="text-emerald-400 hover:text-emerald-300 font-medium text-base transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-zinc-900 rounded-md px-2 py-1"
              >
                (672) 999-5648
              </a>
            </div>
          </div>

          <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-2xl font-medium text-base hover:from-emerald-500 hover:to-teal-500 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/25 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-zinc-900">
            Begin Your Enterprise Trial Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-800 text-stone-300 py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-emerald-600 rounded-xl flex items-center justify-center">
                  <Bot className="h-5 w-5 text-white" aria-hidden="true" />
                </div>
                <span className="font-serif text-lg font-medium text-white">Leadaisy</span>
              </div>
              <p className="text-stone-400 mb-4 font-light leading-relaxed text-sm">
                An intelligent AI-powered customer engagement platform designed to help enterprises capture more
                opportunities and accelerate growth.
              </p>
            </div>
            <div>
              <h4 className="font-serif font-medium text-white mb-4">Platform</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#features"
                    className="hover:text-white transition-colors font-light text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-zinc-800 rounded-md px-1 py-0.5"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="hover:text-white transition-colors font-light text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-zinc-800 rounded-md px-1 py-0.5"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors font-light text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-zinc-800 rounded-md px-1 py-0.5"
                  >
                    Integrations
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors font-light text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-zinc-800 rounded-md px-1 py-0.5"
                  >
                    Enterprise API
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif font-medium text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors font-light text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-zinc-800 rounded-md px-1 py-0.5"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors font-light text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-zinc-800 rounded-md px-1 py-0.5"
                  >
                    Leadership
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors font-light text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-zinc-800 rounded-md px-1 py-0.5"
                  >
                    Careers
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
              <h4 className="font-serif font-medium text-white mb-4">Support</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors font-light text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-zinc-800 rounded-md px-1 py-0.5"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors font-light text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-zinc-800 rounded-md px-1 py-0.5"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors font-light text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-zinc-800 rounded-md px-1 py-0.5"
                  >
                    System Status
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors font-light text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-zinc-800 rounded-md px-1 py-0.5"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-zinc-700 pt-6 flex flex-col md:flex-row justify-between items-center">
            <div className="text-stone-400 mb-4 md:mb-0 font-light text-sm">© 2025 Leadaisy. All rights reserved.</div>
            <div className="text-stone-400 font-light text-sm">
              Empowering enterprises with intelligent customer engagement solutions
            </div>
          </div>
        </div>
      </footer>

      <OriginalChatWidget />
    </div>
  )
}
