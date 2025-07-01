// Blog Post Data Schema and Utilities

export interface BlogPostMetadata {
  title: string
  description: string
  keywords: string
  slug: string
  author: string
  authorRole?: string
  date: string
  readTime: string
  category: string
  featured?: boolean
}

export interface BlogPostHero {
  title: string
  subtitle?: string
  description: string
  highlights?: string[]
}

export interface ContentBlock {
  type: 'paragraph' | 'heading' | 'list' | 'callout' | 'grid' | 'stats' | 'steps' | 'quote' | 'cta'
  data: any
}

export interface ParagraphBlock {
  type: 'paragraph'
  data: {
    text: string
    emphasis?: 'normal' | 'strong' | 'italic'
  }
}

export interface HeadingBlock {
  type: 'heading'
  data: {
    text: string
    level: 2 | 3 | 4
  }
}

export interface ListBlock {
  type: 'list'
  data: {
    style: 'bullet' | 'numbered'
    items: string[]
  }
}

export interface CalloutBlock {
  type: 'callout'
  data: {
    title?: string
    style: 'info' | 'success' | 'warning' | 'stats'
    items?: Array<{
      label: string
      value: string
      description?: string
    }>
    content?: string
  }
}

export interface GridBlock {
  type: 'grid'
  data: {
    columns: number
    items: Array<{
      icon?: string
      title: string
      description: string
    }>
  }
}

export interface StatsBlock {
  type: 'stats'
  data: {
    title?: string
    items: Array<{
      value: string
      label: string
      description?: string
    }>
  }
}

export interface StepsBlock {
  type: 'steps'
  data: {
    title?: string
    items: Array<{
      title: string
      description: string
    }>
  }
}

export interface CTABlock {
  type: 'cta'
  data: {
    title: string
    description: string
    buttonText: string
    buttonLink: string
    style: 'primary' | 'secondary'
  }
}

export interface BlogPost {
  metadata: BlogPostMetadata
  hero: BlogPostHero
  content: ContentBlock[]
  relatedPosts?: string[] // Array of slugs
}

export interface BlogPostIndex {
  posts: BlogPostMetadata[]
  categories: string[]
  featured?: string // slug of featured post
}

// Utility functions
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const response = await fetch(`/data/blog/posts/${slug}.json`)
    if (!response.ok) return null
    return await response.json()
  } catch (error) {
    console.error('Error loading blog post:', error)
    return null
  }
}

export async function getBlogIndex(): Promise<BlogPostIndex> {
  try {
    const response = await fetch('/data/blog/index.json')
    if (!response.ok) {
      throw new Error('Failed to load blog index')
    }
    return await response.json()
  } catch (error) {
    console.error('Error loading blog index:', error)
    return { posts: [], categories: [] }
  }
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export function getEstimatedReadTime(content: ContentBlock[]): string {
  // Simple estimation: ~200 words per minute
  const wordCount = content.reduce((count, block) => {
    switch (block.type) {
      case 'paragraph':
        return count + (block.data.text?.split(' ').length || 0)
      case 'heading':
        return count + (block.data.text?.split(' ').length || 0)
      case 'list':
        return count + (block.data.items?.join(' ').split(' ').length || 0)
      case 'callout':
        return count + (block.data.content?.split(' ').length || 0)
      default:
        return count + 50 // Estimate for other block types
    }
  }, 0)
  
  const minutes = Math.ceil(wordCount / 200)
  return `${minutes} min read`
}
