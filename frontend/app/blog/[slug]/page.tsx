import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Bot, Calendar, User, Clock, TrendingUp, BarChart3, Users, Zap, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import { getBlogPost, getRelatedPosts, getAllBlogPosts } from '@/data/blog-posts'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map(post => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPost(params.slug)
  
  if (!post) {
    return {
      title: 'Blog Post Not Found - Leadaisy',
    }
  }

  return {
    title: `${post.title} - Leadaisy`,
    description: post.description,
    keywords: post.keywords,
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPost(params.slug)
  
  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(post.slug, post.relatedPosts)

  const renderSection = (section: any, index: number) => {
    switch (section.type) {
      case 'stats':
        return (
          <div key={index} className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 mb-12 not-prose">
            <h3 className="font-serif text-2xl font-medium text-zinc-900 mb-6 text-center">{section.title}</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {section.stats?.map((stat: any, statIndex: number) => (
                <div key={statIndex} className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">{stat.label}</div>
                  <div className="text-stone-600 font-medium">{stat.value}</div>
                  {stat.description && (
                    <div className="text-stone-500 text-sm mt-1">{stat.description}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )

      case 'list':
        return (
          <div key={index} className="mb-8">
            <h2 className="font-serif text-3xl font-medium text-zinc-900 mb-6">{section.title}</h2>
            {section.content && <p className="text-stone-600 mb-6 leading-relaxed">{section.content}</p>}
            <ul className="space-y-3 mb-8">
              {section.items?.map((item: string, itemIndex: number) => (
                <li key={itemIndex} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-stone-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )

      case 'steps':
        return (
          <div key={index} className="mb-8">
            <h3 className="font-serif text-2xl font-medium text-zinc-900 mb-4">{section.title}</h3>
            {section.content && <p className="text-stone-600 mb-6 leading-relaxed">{section.content}</p>}
            <div className="space-y-6 mb-8">
              {section.items?.map((item: string, itemIndex: number) => {
                const [title, description] = item.split(': ')
                return (
                  <div key={itemIndex} className="flex gap-4">
                    <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-medium text-sm">
                      {itemIndex + 1}
                    </div>
                    <div>
                      <h4 className="font-medium text-zinc-900 mb-2">{title}</h4>
                      {description && <p className="text-stone-600 text-sm">{description}</p>}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )

      case 'comparison':
        return (
          <div key={index} className="mb-8">
            <h2 className="font-serif text-3xl font-medium text-zinc-900 mb-6">{section.title}</h2>
            {section.content && <p className="text-stone-600 mb-6 leading-relaxed">{section.content}</p>}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 mb-8 not-prose">
              <h4 className="font-serif text-xl font-medium text-zinc-900 mb-6 text-center">Before vs After Comparison</h4>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h5 className="font-medium text-stone-700 mb-4">Before AI Chatbots:</h5>
                  <ul className="space-y-2">
                    {section.comparison?.before.map((item: string, itemIndex: number) => (
                      <li key={itemIndex} className="flex items-center gap-3 text-stone-600">
                        <div className="w-4 h-4 border border-stone-400 rounded-full"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-emerald-700 mb-4">After AI Chatbots:</h5>
                  <ul className="space-y-2">
                    {section.comparison?.after.map((item: string, itemIndex: number) => (
                      <li key={itemIndex} className="flex items-center gap-3 text-emerald-700">
                        <CheckCircle className="w-4 h-4" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )

      case 'text':
      default:
        return (
          <div key={index} className="mb-8">
            <h2 className="font-serif text-3xl font-medium text-zinc-900 mb-6">{section.title}</h2>
            <p className="text-stone-600 mb-6 leading-relaxed">{section.content}</p>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="blog" />

      {/* Article Header */}
      <section className="py-16 bg-gradient-to-br from-emerald-50/30 via-stone-50 to-teal-50/40">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="bg-emerald-600 text-white px-4 py-2 rounded-xl text-sm font-medium">{post.category}</span>
              <div className="flex items-center gap-2 text-stone-500">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2 text-stone-500">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-zinc-900 mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl lg:text-2xl text-stone-600 leading-relaxed mb-8 font-light">
              {post.excerpt}
            </p>
            
            <div className="flex items-center justify-center gap-4 text-stone-600">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <span className="font-medium">{post.author}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <p className="text-stone-600 mb-8 leading-relaxed text-lg">
              {post.content.introduction}
            </p>

            {/* Dynamic Sections */}
            {post.content.sections.map(renderSection)}

            {/* Conclusion */}
            <h2 className="font-serif text-3xl font-medium text-zinc-900 mb-6">Conclusion</h2>
            <p className="text-stone-600 mb-8 leading-relaxed">
              {post.content.conclusion}
            </p>
            
            {/* CTA */}
            {post.content.cta && (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 not-prose">
                <h3 className="font-serif text-xl font-medium text-zinc-900 mb-4">{post.content.cta.title}</h3>
                <p className="text-stone-600 mb-6">
                  {post.content.cta.description}
                </p>
                <Link href={post.content.cta.buttonLink} className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-xl font-medium hover:from-emerald-500 hover:to-teal-500 transition-all duration-300 inline-block">
                  {post.content.cta.buttonText}
                </Link>
              </div>
            )}
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-stone-50">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-medium text-zinc-900 mb-8 text-center">Related Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <Link key={index} href={`/blog/${relatedPost.slug}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200/50 hover:shadow-lg transition-all duration-300 group">
                    <h3 className="font-serif text-lg font-medium text-zinc-900 mb-3 group-hover:text-emerald-700 transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-stone-600 font-light text-sm mb-4">{relatedPost.excerpt}</p>
                    <span className="text-emerald-600 font-medium text-sm">Read Article →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}