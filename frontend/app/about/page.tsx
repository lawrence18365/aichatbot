import type { Metadata } from 'next'
import { Bot, Users, TrendingUp, Award, Mail, Phone } from 'lucide-react'
import Header from '@/components/layout/Header'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'About Leadaisy | AI-Powered Customer Engagement for Modern Businesses',
  description: 'Learn how Leadaisy was founded to help businesses capture more leads with intelligent AI assistants. Built by ex-Shopify growth experts.',
  keywords: 'about leadaisy, ai customer service, chatbot company, lead generation software, business automation',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="about" />

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-50/30 via-stone-50 to-teal-50/40">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-zinc-900 mb-6 leading-tight">
            Built by Growth Experts, 
            <span className="block font-medium bg-gradient-to-r from-emerald-700 via-teal-600 to-emerald-700 bg-clip-text text-transparent mt-3">
              For Growth-Minded Businesses
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-stone-600 leading-relaxed mb-12 font-light">
            Leadaisy was founded to solve a simple problem: businesses lose thousands of potential customers 
            because they can't respond instantly to every visitor. We built the AI assistant we wished existed.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-zinc-900 mb-12 text-center">Our Story</h2>
          
          <div className="prose prose-lg mx-auto text-stone-600 leading-relaxed">
            <p className="text-xl font-light mb-8">
              After years building growth systems at companies like Shopify, we noticed the same pattern everywhere: 
              businesses with amazing products were hemorrhaging potential customers due to slow response times.
            </p>
            
            <p className="mb-8">
              A visitor lands on your website at 2 AM with a question. They wait 5 minutes, then leave to find 
              a competitor who can help them immediately. This happens thousands of times per month, representing 
              millions in lost revenue.
            </p>
            
            <p className="mb-8">
              Traditional chatbots felt robotic and frustrating. Hiring 24/7 human staff was prohibitively expensive. 
              We knew there had to be a better way.
            </p>
            
            <p className="mb-8">
              That's when we discovered the potential of modern AI. Not the simple rule-based bots of the past, 
              but sophisticated AI that could understand context, provide helpful answers, and seamlessly capture 
              leads when human expertise was needed.
            </p>
            
            <p className="text-xl font-light">
              Leadaisy is the AI assistant we built for ourselves, then realized every business needs. 
              Professional, intelligent, and always available to turn your website visitors into customers.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-24 bg-stone-50/50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-light text-zinc-900 mb-6">Our Mission</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto font-light">
              To help every business capture more opportunities and serve customers better with intelligent AI assistance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-stone-200/50">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-emerald-700" />
              </div>
              <h3 className="font-serif text-xl font-medium text-zinc-900 mb-4">Customer-First</h3>
              <p className="text-stone-600 font-light">
                Every feature we build puts your customers' experience first. Fast, helpful, human-like interactions.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-stone-200/50">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-emerald-700" />
              </div>
              <h3 className="font-serif text-xl font-medium text-zinc-900 mb-4">Growth-Focused</h3>
              <p className="text-stone-600 font-light">
                We're obsessed with helping businesses grow. Every conversation should move the needle.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-stone-200/50">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-emerald-700" />
              </div>
              <h3 className="font-serif text-xl font-medium text-zinc-900 mb-4">Excellence</h3>
              <p className="text-stone-600 font-light">
                We hold ourselves to enterprise standards. Your AI assistant reflects your brand's quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Leadaisy */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-zinc-900 mb-12 text-center">
            Why Businesses Choose Leadaisy
          </h2>
          
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-medium text-sm">1</span>
              </div>
              <div>
                <h3 className="font-serif text-xl font-medium text-zinc-900 mb-3">Built by Growth Experts</h3>
                <p className="text-stone-600 font-light leading-relaxed">
                  Our team has helped scale companies from startup to IPO. We understand what drives growth 
                  and built those insights into Leadaisy.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-medium text-sm">2</span>
              </div>
              <div>
                <h3 className="font-serif text-xl font-medium text-zinc-900 mb-3">Enterprise-Grade Reliability</h3>
                <p className="text-stone-600 font-light leading-relaxed">
                  99.9% uptime, enterprise security, and the reliability your business deserves. 
                  No more worrying about your AI going offline.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-medium text-sm">3</span>
              </div>
              <div>
                <h3 className="font-serif text-xl font-medium text-zinc-900 mb-3">White-Glove Implementation</h3>
                <p className="text-stone-600 font-light leading-relaxed">
                  We don't just hand you software and walk away. Our team personally ensures your AI 
                  assistant is perfectly trained for your business.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-medium text-sm">4</span>
              </div>
              <div>
                <h3 className="font-serif text-xl font-medium text-zinc-900 mb-3">Proven Results</h3>
                <p className="text-stone-600 font-light leading-relaxed">
                  Our clients see an average 340% increase in lead capture rates within 30 days. 
                  We're not just selling software, we're delivering growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-stone-50/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-light text-zinc-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-stone-600 font-light">
              Have questions about how Leadaisy can help your business? We'd love to hear from you.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <ContactForm 
              title="Contact Our Team"
              description="Tell us about your business and how we can help you capture more leads."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-zinc-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-6">
            Ready to Learn More?
          </h2>
          <p className="text-xl text-stone-300 mb-12 font-light">
            Let's discuss how Leadaisy can transform your customer engagement and drive growth for your business.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
              <Mail className="h-8 w-8 text-emerald-400 mx-auto mb-4" />
              <h3 className="font-serif text-lg font-medium mb-3">Email Our Team</h3>
              <a href="mailto:hello@leadaisy.com" className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors">
                hello@leadaisy.com
              </a>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
              <Phone className="h-8 w-8 text-emerald-400 mx-auto mb-4" />
              <h3 className="font-serif text-lg font-medium mb-3">Call Us</h3>
              <a href="tel:+16729995648" className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors">
                (672) 999-5648
              </a>
            </div>
          </div>
          
          <a href="/" className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-2xl font-medium text-base hover:from-emerald-500 hover:to-teal-500 transition-all duration-300 shadow-xl hover:shadow-2xl inline-block">
            Get Started with Leadaisy
          </a>
        </div>
      </section>
    </div>
  )
}
