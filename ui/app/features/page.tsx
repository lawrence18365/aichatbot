import type { Metadata } from 'next'
import { Bot, Zap, Users, BarChart3, Shield, Clock, Globe, Settings, MessageSquare, Target, Brain, Sparkles } from 'lucide-react'
import Header from '@/components/layout/Header'
import NewsletterSignup from '@/components/NewsletterSignup'

export const metadata: Metadata = {
  title: 'Features | Leadaisy AI Chatbot - Lead Capture & Customer Support Automation',
  description: 'Discover Leadaisy\'s powerful AI chatbot features: 24/7 lead capture, intelligent conversations, CRM integration, analytics, and more.',
  keywords: 'ai chatbot features, lead capture software, customer support automation, chatbot analytics, CRM integration, conversation AI',
}

export default function FeaturesPage() {
  const features = [
    {
      icon: MessageSquare,
      title: "Talks to Your Customers",
      description: "When someone visits your website, the chatbot starts a friendly conversation to see if they need help or want to buy something.",
      benefits: [
        "Answers common questions about your business",
        "Asks what they're looking for", 
        "Explains your services in simple terms",
        "Keeps them engaged so they don't leave"
      ]
    },
    {
      icon: Target,
      title: "Gets Their Contact Info",
      description: "When someone is interested in your services, the chatbot asks for their name and phone number so you can follow up with them.",
      benefits: [
        "Gets name and phone number naturally",
        "Finds out what they want to buy",
        "Asks when they want to be contacted",
        "Records everything they said"
      ]
    },
    {
      icon: Zap,
      title: "Emails You Immediately",
      description: "As soon as someone gives their contact info, you get an email with their details and what they're interested in buying.",
      benefits: [
        "Email arrives within 30 seconds",
        "Includes their name and phone number",
        "Shows exactly what they want",
        "No more checking a dashboard"
      ]
    },
    {
      icon: Clock,
      title: "Works While You Sleep",
      description: "Your chatbot never takes a day off. It's working on your website 24 hours a day, even when you're closed or busy.",
      benefits: [
        "Captures leads at 2am on Sunday",
        "Works holidays and weekends",
        "Never misses a visitor",
        "No salary or time off needed"
      ]
    },
    {
      icon: Settings,
      title: "We Set It Up For You",
      description: "You don't need to learn any complicated software. We handle all the technical stuff and have your chatbot ready in 24 hours.",
      benefits: [
        "No technical skills required",
        "We train it on your business",
        "Works on any website platform",
        "Ready in 24 hours or less"
      ]
    },
    {
      icon: Bot,
      title: "Simple and Affordable",
      description: "No complicated contracts, setup fees, or hidden costs. Just $97/month for a tool that works every day to get you more customers.",
      benefits: [
        "Only $97 per month",
        "No setup fees or contracts",
        "Cancel anytime",
        "30-day money back guarantee"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="features" />

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-50/30 via-stone-50 to-teal-50/40">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-zinc-900 mb-6 leading-tight">
            Simple AI Chatbot
            <span className="block font-medium bg-gradient-to-r from-emerald-700 via-teal-600 to-emerald-700 bg-clip-text text-transparent mt-3">
              That Actually Works
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-stone-600 leading-relaxed mb-12 font-light">
            No complicated features or confusing dashboards. Just a simple chatbot that talks to your website visitors and emails you their contact info when they're interested.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-stone-500">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-emerald-600" />
              <span className="text-sm font-medium">Works 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-emerald-600" />
              <span className="text-sm font-medium">$97/month</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-emerald-600" />
              <span className="text-sm font-medium">We set it up for you</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-stone-50/50 p-8 rounded-3xl border border-stone-200/50 hover:shadow-xl hover:shadow-stone-500/5 transition-all duration-300 group">
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-200 transition-colors">
                  <feature.icon className="h-8 w-8 text-emerald-700" />
                </div>
                <h3 className="font-serif text-xl font-medium text-zinc-900 mb-4">{feature.title}</h3>
                <p className="text-stone-600 leading-relaxed mb-6 font-light">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start gap-3 text-sm text-stone-600">
                      <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-stone-50/50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-light text-zinc-900 mb-6">How It Works</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto font-light">
              Three simple steps to start capturing leads from your website.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="font-serif text-lg font-medium text-zinc-900 mb-3">1. Tell Us About Your Business</h3>
              <p className="text-stone-600 font-light text-sm mb-4">
                We ask you some simple questions about what you sell and who your customers are.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Settings className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="font-serif text-lg font-medium text-zinc-900 mb-3">2. We Set Up Your Chatbot</h3>
              <p className="text-stone-600 font-light text-sm mb-4">
                We train the chatbot on your business and add it to your website. Takes about 24 hours.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-purple-700" />
              </div>
              <h3 className="font-serif text-lg font-medium text-zinc-900 mb-3">3. Start Getting Leads</h3>
              <p className="text-stone-600 font-light text-sm mb-4">
                Your chatbot starts working immediately, and you get an email every time someone is interested.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-stone-50/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <NewsletterSignup 
              title="Stay Updated on AI & Lead Generation"
              description="Get expert insights, feature updates, and best practices delivered to your inbox monthly."
              source="Features Page"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-zinc-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-6">
            Ready to Experience These Features?
          </h2>
          <p className="text-xl text-stone-300 mb-12 font-light">
            Stop missing potential customers. Get your chatbot working on your website today.
          </p>
          <a href="/" className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-2xl font-medium text-base hover:from-emerald-500 hover:to-teal-500 transition-all duration-300 shadow-xl hover:shadow-2xl inline-block">
            Get Started - $97/month
          </a>
        </div>
      </section>
    </div>
  )
}
