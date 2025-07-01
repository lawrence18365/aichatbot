import type { Metadata } from 'next'
import { Bot, Shield, Eye, Lock, Users, FileText } from 'lucide-react'
import Header from '@/components/layout/Header'

export const metadata: Metadata = {
  title: 'Privacy Policy | Leadaisy - Your Data Security & Privacy Protection',
  description: 'Leadaisy Privacy Policy. Learn how we collect, use, and protect your personal information. GDPR and CCPA compliant data practices.',
  keywords: 'privacy policy, data protection, GDPR compliance, CCPA compliance, data security, user privacy',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-50/30 via-stone-50 to-teal-50/40">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-light text-zinc-900 mb-6 leading-tight">
            Privacy Policy
          </h1>
          <p className="text-xl text-stone-600 leading-relaxed font-light">
            Your privacy and data security are our top priorities. Learn how we protect and handle your information.
          </p>
          <div className="flex items-center justify-center gap-2 mt-6 text-sm text-stone-500">
            <Shield className="h-4 w-4 text-emerald-600" />
            <span>Last updated: June 26, 2025</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <div className="bg-emerald-50/50 border border-emerald-200/50 rounded-2xl p-8 mb-12">
              <h2 className="font-serif text-2xl font-medium text-zinc-900 mb-4 flex items-center gap-3">
                <Eye className="h-6 w-6 text-emerald-600" />
                Summary of Our Commitment
              </h2>
              <ul className="space-y-3 text-stone-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>We collect only the minimum data necessary to provide our service</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>We never sell your personal information to third parties</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>You have full control over your data and can request deletion at any time</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>We use enterprise-grade security to protect your information</span>
                </li>
              </ul>
            </div>

            <h2 className="font-serif text-2xl font-medium text-zinc-900 mb-6">1. Information We Collect</h2>
            
            <h3 className="font-serif text-xl font-medium text-zinc-900 mb-4">Information You Provide</h3>
            <p className="text-stone-600 mb-6">
              When you sign up for Leadaisy or use our services, we may collect:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-stone-600">
              <li>Name and email address for account creation</li>
              <li>Company information and website details</li>
              <li>Payment information (processed securely by our payment processor)</li>
              <li>Communication preferences and support requests</li>
            </ul>

            <h3 className="font-serif text-xl font-medium text-zinc-900 mb-4">Information Collected Automatically</h3>
            <p className="text-stone-600 mb-6">
              When you visit our website or use our AI assistant, we may automatically collect:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-stone-600">
              <li>Usage data and interaction patterns with our AI assistant</li>
              <li>Technical information like IP address, browser type, and device information</li>
              <li>Cookies and similar tracking technologies for website functionality</li>
              <li>Analytics data to improve our service performance</li>
            </ul>

            <h2 className="font-serif text-2xl font-medium text-zinc-900 mb-6">2. How We Use Your Information</h2>
            <p className="text-stone-600 mb-6">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-stone-600">
              <li>Provide, maintain, and improve our AI assistant services</li>
              <li>Process transactions and send related information</li>
              <li>Send technical notices, updates, and security alerts</li>
              <li>Respond to comments, questions, and customer service requests</li>
              <li>Monitor and analyze usage patterns to enhance user experience</li>
              <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
            </ul>

            <h2 className="font-serif text-2xl font-medium text-zinc-900 mb-6">3. Information Sharing and Disclosure</h2>
            <p className="text-stone-600 mb-6">
              We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-stone-600">
              <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist in operating our platform</li>
              <li><strong>Legal Requirements:</strong> When required by law, regulation, or legal process</li>
              <li><strong>Business Transfers:</strong> In connection with any merger, sale of assets, or acquisition of our business</li>
              <li><strong>Consent:</strong> When you have given us explicit consent to share your information</li>
            </ul>

            <h2 className="font-serif text-2xl font-medium text-zinc-900 mb-6">4. Data Security</h2>
            <p className="text-stone-600 mb-6">
              We implement industry-standard security measures to protect your personal information:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-stone-600">
              <li>End-to-end encryption for all data transmission</li>
              <li>SOC 2 Type II certified infrastructure and processes</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Restricted access to personal information on a need-to-know basis</li>
              <li>Secure data centers with physical and digital access controls</li>
            </ul>

            <h2 className="font-serif text-2xl font-medium text-zinc-900 mb-6">5. Your Rights and Choices</h2>
            <p className="text-stone-600 mb-6">
              You have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-stone-600">
              <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Portability:</strong> Request a copy of your data in a machine-readable format</li>
              <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
            </ul>

            <h2 className="font-serif text-2xl font-medium text-zinc-900 mb-6">6. Cookies and Tracking Technologies</h2>
            <p className="text-stone-600 mb-6">
              We use cookies and similar technologies to enhance your experience on our website. These technologies help us:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-stone-600">
              <li>Remember your preferences and settings</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Provide personalized content and recommendations</li>
              <li>Ensure website security and prevent fraud</li>
            </ul>
            <p className="text-stone-600 mb-8">
              You can control cookie settings through your browser preferences. However, disabling cookies may limit some functionality of our website.
            </p>

            <h2 className="font-serif text-2xl font-medium text-zinc-900 mb-6">7. International Data Transfers</h2>
            <p className="text-stone-600 mb-8">
              Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy and applicable laws.
            </p>

            <h2 className="font-serif text-2xl font-medium text-zinc-900 mb-6">8. Children's Privacy</h2>
            <p className="text-stone-600 mb-8">
              Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it promptly.
            </p>

            <h2 className="font-serif text-2xl font-medium text-zinc-900 mb-6">9. Changes to This Privacy Policy</h2>
            <p className="text-stone-600 mb-8">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on our website and updating the "last updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
            </p>

            <h2 className="font-serif text-2xl font-medium text-zinc-900 mb-6">10. Contact Us</h2>
            <p className="text-stone-600 mb-6">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-stone-50/50 border border-stone-200/50 rounded-2xl p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-zinc-900 mb-2">Email</h4>
                  <a href="mailto:privacy@leadaisy.com" className="text-emerald-600 hover:text-emerald-700">privacy@leadaisy.com</a>
                </div>
                <div>
                  <h4 className="font-medium text-zinc-900 mb-2">Postal Address</h4>
                  <p className="text-stone-600 text-sm">
                    Leadaisy<br />
                    Privacy Officer<br />
                    Vancouver, BC, Canada
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
