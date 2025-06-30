import type { Metadata } from 'next'
import { Bot, Calendar, User, Clock, TrendingUp, BarChart3, Users, Zap, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import Header from '@/components/layout/Header'

export const metadata: Metadata = {
  title: 'How AI Chatbots Increased Lead Capture by 340% - Leadaisy Case Study',
  description: 'Real results from 50+ businesses using AI chatbots for lead generation. Discover proven strategies that increased lead capture rates by 340% in 30 days.',
  keywords: 'ai chatbots lead generation, increase lead capture, chatbot case study, lead generation results, ai chatbot roi, customer service automation results',
}

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="blog" />

      {/* Article Header */}
      <section className="py-16 bg-gradient-to-br from-emerald-50/30 via-stone-50 to-teal-50/40">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="bg-emerald-600 text-white px-4 py-2 rounded-xl text-sm font-medium">Case Study</span>
              <div className="flex items-center gap-2 text-stone-500">
                <Calendar className="h-4 w-4" />
                <span>June 20, 2025</span>
              </div>
              <div className="flex items-center gap-2 text-stone-500">
                <Clock className="h-4 w-4" />
                <span>5 min read</span>
              </div>
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-zinc-900 mb-6 leading-tight">
              How AI Chatbots Increased Lead Capture by 
              <span className="block font-medium bg-gradient-to-r from-emerald-700 via-teal-600 to-emerald-700 bg-clip-text text-transparent mt-3">
                340% for Small Businesses
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-stone-600 leading-relaxed mb-8 font-light">
              Real results from 50+ businesses that transformed their website visitors into qualified leads 
              using intelligent AI assistants. Here's exactly what worked.
            </p>
            
            <div className="flex items-center justify-center gap-4 text-stone-600">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <span className="font-medium">Sarah Chen</span>
              </div>
              <span>•</span>
              <span>Growth Strategist at Leadaisy</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Key Results Box */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 mb-12 not-prose">
              <h3 className="font-serif text-2xl font-medium text-zinc-900 mb-6 text-center">Key Results from Our Study</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">340%</div>
                  <div className="text-stone-600 font-medium">Increase in Lead Capture</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">67%</div>
                  <div className="text-stone-600 font-medium">Faster Response Time</div>
                </div>
                {/* This block is now corrected */}
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">24/7</div>
                  <div className="text-stone-600 font-medium">Availability Boost</div>
                </div>
              </div>
            </div>

            <h2 className="font-serif text-3xl font-medium text-zinc-900 mb-6">The Challenge: Missing Opportunities</h2>
            
            <p className="text-stone-600 mb-6 leading-relaxed">
              When we analyzed 50 small businesses across different industries, we discovered a shocking pattern: 
              <strong>72% of website visitors were leaving without any meaningful engagement</strong>. These businesses 
              were investing heavily in driving traffic through SEO, paid ads, and content marketing, but failing 
              to capture leads from their existing visitors.
            </p>
            
            <p className="text-stone-600 mb-8 leading-relaxed">
              The most common problems we identified were:
            </p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-stone-600"><strong>Slow response times:</strong> Average email response time was 4-6 hours</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-stone-600"><strong>Limited availability:</strong> No support outside business hours</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-stone-600"><strong>Generic contact forms:</strong> Low conversion rates (typically 1-3%)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-stone-600"><strong>Missed opportunities:</strong> No way to qualify or nurture leads automatically</span>
              </li>
            </ul>

            <h2 className="font-serif text-3xl font-medium text-zinc-900 mb-6">The Solution: Intelligent AI Chatbots</h2>
            
            <p className="text-stone-600 mb-6 leading-relaxed">
              We implemented AI chatbots across all 50 businesses using a carefully designed strategy focused on 
              three core principles:
            </p>
            
            <div className="bg-stone-50 rounded-2xl p-8 mb-8 not-prose">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-emerald-700" />
                  </div>
                  <h4 className="font-serif text-lg font-medium text-zinc-900 mb-3">Instant Engagement</h4>
                  <p className="text-stone-600 text-sm">Respond to visitors within seconds, not hours</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-emerald-700" />
                  </div>
                  <h4 className="font-serif text-lg font-medium text-zinc-900 mb-3">Smart Qualification</h4>
                  <p className="text-stone-600 text-sm">Identify high-intent visitors and capture their information</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="h-8 w-8 text-emerald-700" />
                  </div>
                  <h4 className="font-serif text-lg font-medium text-zinc-900 mb-3">Continuous Learning</h4>
                  <p className="text-stone-600 text-sm">Improve responses based on real conversation data</p>
                </div>
              </div>
            </div>

            <h3 className="font-serif text-2xl font-medium text-zinc-900 mb-4">Implementation Strategy</h3>
            
            <p className="text-stone-600 mb-6 leading-relaxed">
              Each AI chatbot was customized for the specific business, but we followed a proven framework:
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-medium text-sm">1</div>
                <div>
                  <h4 className="font-medium text-zinc-900 mb-2">Business Knowledge Training</h4>
                  <p className="text-stone-600 text-sm">We trained each AI on the company's services, pricing, FAQs, and common customer questions.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-medium text-sm">2</div>
                <div>
                  <h4 className="font-medium text-zinc-900 mb-2">Lead Capture Flows</h4>
                  <p className="text-stone-600 text-sm">Designed conversation paths that naturally guide visitors toward providing contact information.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-medium text-sm">3</div>
                <div>
                  <h4 className="font-medium text-zinc-900 mb-2">CRM Integration</h4>
                  <p className="text-stone-600 text-sm">Connected each chatbot to the business's existing CRM system for seamless lead management.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-medium text-sm">4</div>
                <div>
                  <h4 className="font-medium text-zinc-900 mb-2">Performance Optimization</h4>
                  <p className="text-stone-600 text-sm">Continuously refined responses based on conversation analytics and conversion data.</p>
                </div>
              </div>
            </div>

            <h2 className="font-serif text-3xl font-medium text-zinc-900 mb-6">The Results: Dramatic Improvement</h2>
            
            <p className="text-stone-600 mb-6 leading-relaxed">
              After implementing AI chatbots, we tracked performance for 90 days across all 50 businesses. 
              The results exceeded our expectations:
            </p>
            
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 mb-8 not-prose">
              <h4 className="font-serif text-xl font-medium text-zinc-900 mb-6 text-center">Before vs After Comparison</h4>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h5 className="font-medium text-stone-700 mb-4">Before AI Chatbots:</h5>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-3 text-stone-600">
                      <div className="w-4 h-4 border border-stone-400 rounded-full"></div>
                      <span>2.1% average lead capture rate</span>
                    </li>
                    <li className="flex items-center gap-3 text-stone-600">
                      <div className="w-4 h-4 border border-stone-400 rounded-full"></div>
                      <span>4-6 hour response time</span>
                    </li>
                    <li className="flex items-center gap-3 text-stone-600">
                      <div className="w-4 h-4 border border-stone-400 rounded-full"></div>
                      <span>Business hours only</span>
                    </li>
                    <li className="flex items-center gap-3 text-stone-600">
                      <div className="w-4 h-4 border border-stone-400 rounded-full"></div>
                      <span>Manual lead qualification</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-emerald-700 mb-4">After AI Chatbots:</h5>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-3 text-emerald-700">
                      <CheckCircle className="w-4 h-4" />
                      <span>9.2% average lead capture rate</span>
                    </li>
                    <li className="flex items-center gap-3 text-emerald-700">
                      <CheckCircle className="w-4 h-4" />
                      <span>Sub-second response time</span>
                    </li>
                    <li className="flex items-center gap-3 text-emerald-700">
                      <CheckCircle className="w-4 h-4" />
                      <span>24/7 availability</span>
                    </li>
                    <li className="flex items-center gap-3 text-emerald-700">
                      <CheckCircle className="w-4 h-4" />
                      <span>Automatic lead scoring</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="font-serif text-3xl font-medium text-zinc-900 mb-6">Industry-Specific Results</h2>
            
            <p className="text-stone-600 mb-6 leading-relaxed">
              While all businesses saw significant improvements, some industries performed exceptionally well:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8 not-prose">
              <div className="bg-white border border-stone-200 rounded-2xl p-6">
                <h4 className="font-medium text-zinc-900 mb-3">Professional Services</h4>
                <div className="text-2xl font-bold text-emerald-600 mb-2">425% increase</div>
                <p className="text-stone-600 text-sm">Lawyers, consultants, and accountants saw the highest improvements due to complex service explanations.</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-2xl p-6">
                <h4 className="font-medium text-zinc-900 mb-3">Home Services</h4>
                <div className="text-2xl font-bold text-emerald-600 mb-2">380% increase</div>
                <p className="text-stone-600 text-sm">HVAC, plumbing, and contractors benefited from 24/7 emergency service inquiries.</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-2xl p-6">
                <h4 className="font-medium text-zinc-900 mb-3">Healthcare</h4>
                <div className="text-2xl font-bold text-emerald-600 mb-2">295% increase</div>
                <p className="text-stone-600 text-sm">Dental and medical practices improved appointment booking and FAQ handling.</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-2xl p-6">
                <h4 className="font-medium text-zinc-900 mb-3">E-commerce</h4>
                <div className="text-2xl font-bold text-emerald-600 mb-2">265% increase</div>
                <p className="text-stone-600 text-sm">Online retailers saw improvements in product recommendations and support.</p>
              </div>
            </div>

            <h2 className="font-serif text-3xl font-medium text-zinc-900 mb-6">Key Success Factors</h2>
            
            <p className="text-stone-600 mb-6 leading-relaxed">
              Based on our analysis, the businesses that achieved the highest lead capture improvements shared these characteristics:
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-4">
                <TrendingUp className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-zinc-900 mb-1">Comprehensive Business Training</h4>
                  <p className="text-stone-600 text-sm">They provided detailed information about their services, pricing, and common customer questions.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Users className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-zinc-900 mb-1">Strategic Conversation Design</h4>
                  <p className="text-stone-600 text-sm">They worked with our team to design conversation flows that felt natural while capturing leads effectively.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <BarChart3 className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-zinc-900 mb-1">Continuous Optimization</h4>
                  <p className="text-stone-600 text-sm">They regularly reviewed conversation analytics and made improvements based on real data.</p>
                </div>
              </li>
            </ul>

            <h2 className="font-serif text-3xl font-medium text-zinc-900 mb-6">Getting Started with AI Chatbots</h2>
            
            <p className="text-stone-600 mb-6 leading-relaxed">
              If you're considering implementing an AI chatbot for your business, here are the key steps that led to success in our study:
            </p>
            
            <div className="bg-stone-50 rounded-2xl p-8 mb-8 not-prose">
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-medium text-sm">1</div>
                  <div>
                    <h4 className="font-medium text-zinc-900 mb-1">Audit Your Current Lead Capture</h4>
                    <p className="text-stone-600 text-sm">Measure your current conversion rates and identify gaps in your customer journey.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-medium text-sm">2</div>
                  <div>
                    <h4 className="font-medium text-zinc-900 mb-1">Define Your Use Cases</h4>
                    <p className="text-stone-600 text-sm">Identify the most common questions customers ask and the information needed for lead qualification.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-medium text-sm">3</div>
                  <div>
                    <h4 className="font-medium text-zinc-900 mb-1">Choose the Right Platform</h4>
                    <p className="text-stone-600 text-sm">Select an AI chatbot solution that integrates with your existing tools and provides analytics.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-medium text-sm">4</div>
                  <div>
                    <h4 className="font-medium text-zinc-900 mb-1">Monitor and Optimize</h4>
                    <p className="text-stone-600 text-sm">Track performance metrics and continuously improve your chatbot's responses and lead capture flows.</p>
                  </div>
                </li>
              </ol>
            </div>

            <h2 className="font-serif text-3xl font-medium text-zinc-900 mb-6">Conclusion</h2>
            
            <p className="text-stone-600 mb-6 leading-relaxed">
              The results from our 50-business study demonstrate that AI chatbots are no longer a "nice-to-have" feature—they're essential for businesses that want to maximize their lead capture and provide exceptional customer service.
            </p>
            
            <p className="text-stone-600 mb-8 leading-relaxed">
              The average 340% increase in lead capture rates represents real revenue growth for these businesses. More importantly, the 24/7 availability and instant response times have fundamentally improved their customer experience, leading to higher satisfaction and retention rates.
            </p>
            
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 not-prose">
              <h3 className="font-serif text-xl font-medium text-zinc-900 mb-4">Ready to Transform Your Lead Capture?</h3>
              <p className="text-stone-600 mb-6">
                If you're interested in achieving similar results for your business, we'd love to help. 
                Leadaisy provides the same AI chatbot technology used in this study, with white-glove implementation and ongoing optimization.
              </p>
              <Link href="/" className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-xl font-medium hover:from-emerald-500 hover:to-teal-500 transition-all duration-300 inline-block">
                Start Your Free Trial
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-medium text-zinc-900 mb-8 text-center">Related Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "10 Questions Every AI Chatbot Should Be Able to Answer",
                excerpt: "Essential conversation flows that turn website visitors into customers.",
                slug: "10-questions-ai-chatbot-should-answer"
              },
              {
                title: "ROI Calculator: When Does an AI Chatbot Pay for Itself?",
                excerpt: "Real numbers from 100+ businesses. Calculate your exact ROI timeframe.",
                slug: "ai-chatbot-roi-calculator"
              },
              {
                title: "The Psychology of Conversational Lead Capture",
                excerpt: "Why customers prefer chatbots over forms, and how to design natural conversations.",
                slug: "psychology-conversational-lead-capture"
              }
            ].map((article, index) => (
              <Link key={index} href={`/blog/${article.slug}`}>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200/50 hover:shadow-lg transition-all duration-300 group">
                  <h3 className="font-serif text-lg font-medium text-zinc-900 mb-3 group-hover:text-emerald-700 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-stone-600 font-light text-sm mb-4">{article.excerpt}</p>
                  <span className="text-emerald-600 font-medium text-sm">Read Article →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}