import type { Metadata } from 'next'
import { Bot, Calendar, User, ArrowRight, Clock, TrendingUp, Zap } from 'lucide-react'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import NewsletterSignup from '@/components/NewsletterSignup'
import { getFeaturedPost, getAllBlogPosts, blogCategories } from '@/data/blog-posts'

export const metadata: Metadata = {
  title: 'Blog | Leadaisy - AI Chatbot & Lead Generation Best Practices',
  description: 'Learn about AI chatbots, lead generation strategies, customer service automation, and growing your business with intelligent conversation tools.',
  keywords: 'ai chatbot blog, lead generation tips, customer service automation, chatbot best practices, business growth strategies',
}

export default function BlogPage() {
  const featuredPost = getFeaturedPost()
  const allPosts = getAllBlogPosts()
  const recentPosts = allPosts.filter(post => !post.featured).slice(0, 6)

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="blog" />

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-50/30 via-stone-50 to-teal-50/40">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-zinc-900 mb-6 leading-tight">
            AI & Growth
            <span className="block font-medium bg-gradient-to-r from-emerald-700 via-teal-600 to-emerald-700 bg-clip-text text-transparent mt-3">
              Strategy Blog
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-stone-600 leading-relaxed mb-12 font-light">
            Insights, strategies, and case studies on using AI to capture more leads, 
            serve customers better, and grow your business faster.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-stone-500">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-emerald-600" />
              <span className="text-sm font-medium">Growth Strategies</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-emerald-600" />
              <span className="text-sm font-medium">AI Best Practices</span>
            </div>
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5 text-emerald-600" />
              <span className="text-sm font-medium">Case Studies</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {blogCategories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  index === 0
                    ? 'bg-emerald-600 text-white shadow-lg'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="font-serif text-2xl font-medium text-zinc-900 mb-2">Featured Article</h2>
              <p className="text-stone-600 font-light">Our most popular and impactful content</p>
            </div>
            
            <Link href={`/blog/${featuredPost.slug}`}>
              <div className="bg-gradient-to-br from-emerald-50/50 to-teal-50/50 rounded-3xl p-8 lg:p-12 border border-emerald-200/30 hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="bg-emerald-600 text-white px-3 py-1 rounded-xl text-sm font-medium">
                        {featuredPost.category}
                      </span>
                      <div className="flex items-center gap-2 text-stone-500 text-sm">
                        <Calendar className="h-4 w-4" />
                        <span>{featuredPost.date}</span>
                      </div>
                    </div>
                    
                    <h3 className="font-serif text-3xl lg:text-4xl font-medium text-zinc-900 mb-6 leading-tight group-hover:text-emerald-700 transition-colors">
                      {featuredPost.title}
                    </h3>
                    
                    <p className="text-stone-600 font-light leading-relaxed mb-8 text-lg">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <User className="h-5 w-5 text-stone-400" />
                        <span className="text-stone-600 font-medium">{featuredPost.author}</span>
                        <span className="text-stone-400">•</span>
                        <div className="flex items-center gap-1 text-stone-500">
                          <Clock className="h-4 w-4" />
                          <span className="text-sm">{featuredPost.readTime}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 text-emerald-600 font-medium group-hover:gap-3 transition-all">
                        <span>Read Article</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="aspect-[4/3] bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center">
                      <Bot className="h-24 w-24 text-emerald-600" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Recent Posts */}
      <section className="py-16 bg-stone-50/50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="font-serif text-2xl font-medium text-zinc-900 mb-2">Recent Articles</h2>
            <p className="text-stone-600 font-light">Latest insights and strategies for growing your business with AI</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <Link key={index} href={`/blog/${post.slug}`}>
                <article className="bg-white rounded-2xl shadow-sm border border-stone-200/50 hover:shadow-lg transition-all duration-300 group cursor-pointer overflow-hidden">
                  <div className="aspect-[16/9] bg-gradient-to-br from-stone-100 to-stone-200 flex items-center justify-center">
                    <Bot className="h-12 w-12 text-stone-400" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-stone-100 text-stone-600 px-2 py-1 rounded-lg text-xs font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1 text-stone-400 text-xs">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="font-serif text-lg font-medium text-zinc-900 mb-3 leading-tight group-hover:text-emerald-700 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-stone-600 font-light text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                      <div className="flex items-center gap-2 text-stone-500 text-xs">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                      </div>
                      
                      <ArrowRight className="h-4 w-4 text-emerald-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-zinc-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-6">
              Get Weekly AI & Growth Insights
            </h2>
            <p className="text-xl text-stone-300 mb-8 font-light">
              Join 5,000+ business owners getting actionable strategies delivered to their inbox every Tuesday.
            </p>
          </div>
          
          <div className="max-w-lg mx-auto">
            <div className="bg-white rounded-3xl p-8">
              <NewsletterSignup 
                title="Subscribe to Our Newsletter"
                description="Weekly insights on AI, automation, and business growth strategies."
                source="Blog Page"
                className="text-center"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
