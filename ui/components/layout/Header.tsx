import { Bot } from 'lucide-react'

interface HeaderProps {
  currentPage?: string
}

export default function Header({ currentPage = '' }: HeaderProps) {
  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-stone-200/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="flex justify-between items-center py-6">
          {/* Logo - Always links to homepage */}
          <a href="/" className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
              <Bot className="h-7 w-7 text-white" aria-hidden="true" />
            </div>
            <div>
              <h1 className="font-serif text-2xl font-medium text-zinc-900">Leadaisy</h1>
              <p className="text-xs text-stone-500 font-light tracking-wide">AI-Powered Customer Engagement</p>
            </div>
          </a>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-10" role="navigation" aria-label="Main navigation">
            <a
              href="/"
              className={`font-light transition-colors tracking-wide focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-md px-2 py-1 ${
                currentPage === 'home' ? 'text-zinc-900 font-medium' : 'text-stone-600 hover:text-zinc-900'
              }`}
            >
              Home
            </a>
            <a
              href="/features"
              className={`font-light transition-colors tracking-wide focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-md px-2 py-1 ${
                currentPage === 'features' ? 'text-zinc-900 font-medium' : 'text-stone-600 hover:text-zinc-900'
              }`}
            >
              Features
            </a>
            <a
              href="/pricing"
              className={`font-light transition-colors tracking-wide focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-md px-2 py-1 ${
                currentPage === 'pricing' ? 'text-zinc-900 font-medium' : 'text-stone-600 hover:text-zinc-900'
              }`}
            >
              Pricing
            </a>
            <a
              href="/blog"
              className={`font-light transition-colors tracking-wide focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-md px-2 py-1 ${
                currentPage === 'blog' ? 'text-zinc-900 font-medium' : 'text-stone-600 hover:text-zinc-900'
              }`}
            >
              Blog
            </a>
            <a
              href="/about"
              className={`font-light transition-colors tracking-wide focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-md px-2 py-1 ${
                currentPage === 'about' ? 'text-zinc-900 font-medium' : 'text-stone-600 hover:text-zinc-900'
              }`}
            >
              About
            </a>
            <a
              href="/help"
              className={`font-light transition-colors tracking-wide focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-md px-2 py-1 ${
                currentPage === 'help' ? 'text-zinc-900 font-medium' : 'text-stone-600 hover:text-zinc-900'
              }`}
            >
              Help
            </a>
            <a href="/#contact" className="bg-gradient-to-r from-zinc-900 to-zinc-800 text-white px-6 py-3 rounded-xl font-medium hover:from-zinc-800 hover:to-zinc-700 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative">Get Started</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
