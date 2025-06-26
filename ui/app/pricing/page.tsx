import type { Metadata } from 'next'
import { Bot, Check, Zap, Users, Shield, Clock, Award, Star } from 'lucide-react'
import Header from '@/components/layout/Header'

export const metadata: Metadata = {
  title: 'Pricing | Leadaisy AI Chatbot - Affordable Lead Capture & Customer Support',
  description: 'Simple, transparent pricing for Leadaisy AI chatbot. Starting at $97/month for unlimited conversations and enterprise features. 30-day free trial.',
  keywords: 'ai chatbot pricing, lead capture software cost, customer support automation price, chatbot subscription, business AI assistant pricing',
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="pricing" />

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-50/30 via-stone-50 to-teal-50/40">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-zinc-900 mb-6 leading-tight">
            Simple, Honest
            <span className="block font-medium bg-gradient-to-r from-emerald-700 via-teal-600 to-emerald-700 bg-clip-text text-transparent mt-3">
              Pricing
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-stone-600 leading-relaxed mb-8 font-light">
            $97/month for a chatbot that captures leads from your website. No hidden fees, no complicated contracts, no tricks.
          </p>
          <div className="bg-emerald-50 border border-emerald-200/50 rounded-2xl p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Star className="h-5 w-5 text-emerald-600 fill-current" />
              <span className="text-emerald-800 font-serif font-medium">What You Get</span>
            </div>
            <p className="text-emerald-700 font-light">
              A simple AI chatbot that talks to your website visitors and emails you when someone is interested in buying.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Card */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-white to-stone-50/50 p-12 rounded-3xl shadow-2xl border-2 border-emerald-500/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>

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

              <div className="mb-12">
                <h4 className="font-serif text-xl font-medium text-zinc-900 mb-8 text-center">What's Included:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Unlimited conversations with customers",
                    "Chatbot works 24/7, even while you sleep",
                    "Automatic lead capture and email alerts",
                    "We set up everything for you in 24 hours",
                    "Works on any website (WordPress, Shopify, etc.)",
                    "Custom training on your business information",
                    "Email support when you need help",
                    "Simple dashboard to see your leads",
                    "Cancel anytime, no contracts",
                    "30-day money-back guarantee",
                    "Phone support for setup questions",
                    "Works on mobile and desktop"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-stone-700 font-light">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-zinc-900 to-zinc-800 text-white py-5 rounded-2xl font-medium text-lg hover:from-zinc-800 hover:to-zinc-700 transition-all duration-300 shadow-xl hover:shadow-2xl relative overflow-hidden group">
                <span className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="relative">Get Started - $97/month</span>
              </button>

              <div className="text-center mt-8 space-y-2">
                <p className="text-sm text-stone-500 font-light">⚡ Setup completed within 24 hours</p>
                <p className="text-sm text-stone-500 font-light">💰 30-day money back guarantee</p>
                <p className="text-sm text-stone-500 font-light">📞 Talk to a real person for support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Price */}
      <section className="py-24 bg-stone-50/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-light text-zinc-900 mb-6">Why $97/Month?</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto font-light">
              We built this for small businesses who need to capture leads but can't afford expensive enterprise software.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200/50">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-serif text-lg font-medium text-zinc-900 mb-4">What We Could Charge</h3>
                <ul className="space-y-3 text-stone-600">
                  <li>• Most similar tools cost $300-500/month</li>
                  <li>• Big companies charge thousands for setup</li>
                  <li>• Many require long-term contracts</li>
                  <li>• Most are built for large enterprises</li>
                </ul>
              </div>
              <div>
                <h3 className="font-serif text-lg font-medium text-zinc-900 mb-4">Why We Don't</h3>
                <ul className="space-y-3 text-stone-600">
                  <li>• Small businesses deserve good tools too</li>
                  <li>• We want to help, not squeeze every dollar</li>
                  <li>• Simple pricing means more customers can afford it</li>
                  <li>• We'd rather have happy customers than high prices</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 p-6 bg-emerald-50 border border-emerald-200/50 rounded-xl">
              <p className="text-emerald-800 font-medium text-center">
                Our goal: Help 1,000 small businesses capture more leads without breaking the bank.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-light text-zinc-900 mb-6">Pricing Questions</h2>
            <p className="text-xl text-stone-600 font-light">
              Get answers to common questions about Leadaisy pricing and plans.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-stone-50/50 p-8 rounded-2xl border border-stone-200/50">
              <h3 className="font-serif text-lg font-medium text-zinc-900 mb-3">Is there a free trial?</h3>
              <p className="text-stone-600 font-light">
                Yes! All new customers get a 30-day free trial with full access to all features. No credit card required to start.
              </p>
            </div>
            
            <div className="bg-stone-50/50 p-8 rounded-2xl border border-stone-200/50">
              <h3 className="font-serif text-lg font-medium text-zinc-900 mb-3">Are there any setup fees?</h3>
              <p className="text-stone-600 font-light">
                For founding members, all setup fees are waived (normally $997). We handle the complete implementation at no extra cost.
              </p>
            </div>
            
            <div className="bg-stone-50/50 p-8 rounded-2xl border border-stone-200/50">
              <h3 className="font-serif text-lg font-medium text-zinc-900 mb-3">Can I cancel anytime?</h3>
              <p className="text-stone-600 font-light">
                Absolutely. There are no long-term contracts. You can cancel your subscription at any time, and you'll retain access until the end of your billing period.
              </p>
            </div>
            
            <div className="bg-stone-50/50 p-8 rounded-2xl border border-stone-200/50">
              <h3 className="font-serif text-lg font-medium text-zinc-900 mb-3">Is the founding member price guaranteed?</h3>
              <p className="text-stone-600 font-light">
                Yes! As a founding member, your $97/month price is locked in for life, even as we raise prices for new customers.
              </p>
            </div>
            
            <div className="bg-stone-50/50 p-8 rounded-2xl border border-stone-200/50">
              <h3 className="font-serif text-lg font-medium text-zinc-900 mb-3">What support is included?</h3>
              <p className="text-stone-600 font-light">
                All plans include 24/7 customer support, white-glove implementation, and ongoing optimization. Founding members get priority access to our team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-zinc-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-stone-300 mb-8 font-light">
            Join the exclusive group of founding members and secure enterprise AI at an unbeatable price.
          </p>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-8 max-w-lg mx-auto">
            <div className="text-emerald-400 font-medium mb-2">⏰ Limited Time Offer</div>
            <p className="text-stone-300 text-sm">Only 50 founding member spots available at this exclusive rate.</p>
          </div>
          <a href="/" className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-2xl font-medium text-base hover:from-emerald-500 hover:to-teal-500 transition-all duration-300 shadow-xl hover:shadow-2xl inline-block">
            Claim Your Founding Member Spot
          </a>
        </div>
      </section>
    </div>
  )
}
