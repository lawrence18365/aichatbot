import type { Metadata } from 'next'
import { Bot, HelpCircle, Search, MessageSquare, Settings, Zap, Users, Shield } from 'lucide-react'
import Header from '@/components/layout/Header'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Help & FAQ | Leadaisy Support - AI Chatbot Setup & Troubleshooting',
  description: 'Get help with Leadaisy AI chatbot setup, troubleshooting, and frequently asked questions. Learn how to maximize your lead capture results.',
  keywords: 'ai chatbot help, leadaisy support, chatbot setup guide, FAQ, troubleshooting, customer support, how to use ai chatbot',
}

export default function HelpPage() {
  const faqCategories = [
    {
      icon: Zap,
      title: "Getting Started",
      faqs: [
        {
          question: "How quickly can I get my AI assistant up and running?",
          answer: "Most customers are live within 24 hours. Our team handles the complete setup process including AI training, customization, and integration with your website."
        },
        {
          question: "Do I need technical knowledge to use Leadaisy?",
          answer: "Not at all! We provide white-glove implementation and handle all technical aspects. You simply provide us with information about your business, and we take care of the rest."
        },
        {
          question: "What information do you need to set up my AI assistant?",
          answer: "We'll need basic business information (services, pricing, FAQs), your website details, and any specific conversation flows you'd like. Our team guides you through this process."
        },
        {
          question: "Can I try Leadaisy before committing?",
          answer: "Yes! We offer a 30-day free trial with full access to all features. No credit card required to start, and you can cancel anytime during the trial period."
        }
      ]
    },
    {
      icon: Settings,
      title: "Setup & Configuration",
      faqs: [
        {
          question: "How do I customize my AI assistant's responses?",
          answer: "Our team trains your AI using your business knowledge base, FAQs, and specific requirements. You can request updates anytime, and we'll refine the responses to match your brand voice."
        },
        {
          question: "Can I integrate Leadaisy with my existing CRM?",
          answer: "Yes! We support 50+ CRM integrations including Salesforce, HubSpot, Pipedrive, and Zoho. Leads are automatically synced with custom field mapping."
        },
        {
          question: "How do I add the chatbot to my website?",
          answer: "We provide a simple code snippet that you (or your web developer) can add to your website. It works with all major platforms including WordPress, Shopify, Squarespace, and custom sites."
        },
        {
          question: "Can I customize the appearance of the chat widget?",
          answer: "Absolutely! We customize colors, fonts, positioning, and branding to match your website perfectly. Enterprise customers can even white-label the entire experience."
        }
      ]
    },
    {
      icon: MessageSquare,
      title: "Lead Capture & Conversations",
      faqs: [
        {
          question: "How does the AI know when to capture lead information?",
          answer: "Our AI is trained to detect purchase intent and naturally guide conversations toward lead capture. It identifies high-value prospects and seamlessly collects contact information."
        },
        {
          question: "What happens when a lead is captured?",
          answer: "You receive instant notifications via email, SMS, or your preferred channel. The lead is automatically added to your CRM with full conversation context and contact details."
        },
        {
          question: "Can customers reach a human if needed?",
          answer: "Yes! Your AI assistant can seamlessly transfer conversations to your team when requested, or automatically escalate complex issues that require human expertise."
        },
        {
          question: "Does the AI work in multiple languages?",
          answer: "Yes, our AI supports 95+ languages and can automatically detect and respond in the customer's preferred language, making it perfect for global businesses."
        }
      ]
    },
    {
      icon: Users,
      title: "Team & Collaboration",
      faqs: [
        {
          question: "Can multiple team members access the Leadaisy dashboard?",
          answer: "Yes! You can add unlimited team members with different permission levels. Managers get full access while agents can view conversations and manage specific aspects."
        },
        {
          question: "How do I train my team to work with the AI assistant?",
          answer: "We provide comprehensive training materials and onboarding sessions. Your team learns how to review conversations, take over chats, and optimize the AI's performance."
        },
        {
          question: "Can I see all conversations and analytics?",
          answer: "Absolutely! Your dashboard shows all conversations, lead capture rates, customer satisfaction scores, and detailed analytics to help you optimize performance."
        },
        {
          question: "What kind of support do you provide?",
          answer: "All customers get 24/7 email support. Enterprise customers receive priority phone support and dedicated account management for ongoing optimization."
        }
      ]
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      faqs: [
        {
          question: "Is my customer data secure with Leadaisy?",
          answer: "Yes! We're SOC 2 Type II certified with bank-level security. All data is encrypted in transit and at rest, with strict access controls and regular security audits."
        },
        {
          question: "Are you GDPR and CCPA compliant?",
          answer: "Absolutely. We're fully compliant with GDPR, CCPA, and other privacy regulations. We provide data processing agreements and help you maintain compliance."
        },
        {
          question: "Where is my data stored?",
          answer: "Data is stored in secure, SOC 2 certified data centers with redundancy and backup systems. We can accommodate specific data residency requirements for enterprise customers."
        },
        {
          question: "Can I export or delete my data?",
          answer: "Yes! You have full control over your data. You can export conversation history, lead data, and analytics at any time, or request complete data deletion."
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="help" />

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-50/30 via-stone-50 to-teal-50/40">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-zinc-900 mb-6 leading-tight">
            How Can We
            <span className="block font-medium bg-gradient-to-r from-emerald-700 via-teal-600 to-emerald-700 bg-clip-text text-transparent mt-3">
              Help You Today?
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-stone-600 leading-relaxed mb-12 font-light">
            Find answers to common questions about Leadaisy, or get in touch with our support team for personalized help.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-stone-400" />
              <input 
                type="text"
                placeholder="Search for help articles, guides, and FAQs..."
                className="w-full pl-12 pr-4 py-4 bg-white border-2 border-stone-200 rounded-2xl focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 text-stone-900 placeholder-stone-400"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-stone-500">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-emerald-600" />
              <span className="text-sm font-medium">24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-emerald-600" />
              <span className="text-sm font-medium">Quick Setup</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-emerald-600" />
              <span className="text-sm font-medium">Secure & Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-emerald-50/50 rounded-2xl border border-emerald-200/50 hover:shadow-lg transition-shadow group">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-200 transition-colors">
                <Zap className="h-8 w-8 text-emerald-700" />
              </div>
              <h3 className="font-serif text-xl font-medium text-zinc-900 mb-3">Getting Started Guide</h3>
              <p className="text-stone-600 font-light mb-6">Step-by-step instructions to set up your AI assistant and start capturing leads.</p>
              <button className="text-emerald-600 hover:text-emerald-700 font-medium">View Guide →</button>
            </div>
            
            <div className="text-center p-8 bg-blue-50/50 rounded-2xl border border-blue-200/50 hover:shadow-lg transition-shadow group">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                <MessageSquare className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="font-serif text-xl font-medium text-zinc-900 mb-3">Contact Support</h3>
              <p className="text-stone-600 font-light mb-6">Need personalized help? Our support team is available 24/7 to assist you.</p>
              <button className="text-blue-600 hover:text-blue-700 font-medium">Contact Us →</button>
            </div>
            
            <div className="text-center p-8 bg-purple-50/50 rounded-2xl border border-purple-200/50 hover:shadow-lg transition-shadow group">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
                <Settings className="h-8 w-8 text-purple-700" />
              </div>
              <h3 className="font-serif text-xl font-medium text-zinc-900 mb-3">API Documentation</h3>
              <p className="text-stone-600 font-light mb-6">Technical documentation for developers integrating with Leadaisy's API.</p>
              <button className="text-purple-600 hover:text-purple-700 font-medium">View Docs →</button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 bg-stone-50/50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-light text-zinc-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto font-light">
              Find quick answers to the most common questions about Leadaisy's features, setup, and best practices.
            </p>
          </div>
          
          <div className="space-y-16">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center">
                    <category.icon className="h-6 w-6 text-emerald-700" />
                  </div>
                  <h3 className="font-serif text-2xl font-medium text-zinc-900">{category.title}</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {category.faqs.map((faq, faqIndex) => (
                    <div key={faqIndex} className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200/50 hover:shadow-md transition-shadow">
                      <h4 className="font-serif text-lg font-medium text-zinc-900 mb-3">{faq.question}</h4>
                      <p className="text-stone-600 font-light leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-light text-zinc-900 mb-6">
              Need Personalized Help?
            </h2>
            <p className="text-xl text-stone-600 font-light">
              Can't find what you're looking for? Send us a message and we'll get back to you quickly.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <ContactForm 
              title="Contact Support"
              description="Describe your issue or question and we'll provide personalized assistance."
              showCompany={false}
            />
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-24 bg-zinc-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-6">
            Still Need Help?
          </h2>
          <p className="text-xl text-stone-300 mb-12 font-light">
            Our support team is here to help you succeed with Leadaisy. Get personalized assistance for your specific needs.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <MessageSquare className="h-12 w-12 text-emerald-400 mx-auto mb-6" />
              <h3 className="font-serif text-xl font-medium mb-4">Email Support</h3>
              <p className="text-stone-300 mb-6 font-light">Get detailed help via email. We typically respond within 2 hours during business hours.</p>
              <a href="mailto:support@leadaisy.com" className="text-emerald-400 hover:text-emerald-300 font-medium">support@leadaisy.com</a>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <Users className="h-12 w-12 text-emerald-400 mx-auto mb-6" />
              <h3 className="font-serif text-xl font-medium mb-4">Live Chat</h3>
              <p className="text-stone-300 mb-6 font-light">Chat with our support team in real-time. Available 24/7 for urgent issues.</p>
              <button className="text-emerald-400 hover:text-emerald-300 font-medium">Start Live Chat</button>
            </div>
          </div>
          
          <div className="bg-emerald-50/10 border border-emerald-500/20 rounded-2xl p-8">
            <h3 className="font-serif text-xl font-medium text-emerald-300 mb-4">Enterprise Support</h3>
            <p className="text-stone-300 font-light">
              Enterprise customers get priority support with dedicated account management and phone support. 
              <a href="/pricing" className="text-emerald-400 hover:text-emerald-300 ml-1">Learn more about Enterprise plans →</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
