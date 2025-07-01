import type { Metadata } from 'next'
import { Bot, Shield, FileText, Clock, Users, AlertTriangle } from 'lucide-react'
import Header from '@/components/layout/Header'

export const metadata: Metadata = {
  title: 'Terms of Service | Leadaisy - Service Agreement & User Terms',
  description: 'Leadaisy Terms of Service. Understand your rights and responsibilities when using our AI chatbot and lead capture services.',
  keywords: 'terms of service, user agreement, service terms, legal terms, AI chatbot terms, software license',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-50/30 via-stone-50 to-teal-50/40">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-light text-zinc-900 mb-6 leading-tight">
            Terms of Service
          </h1>
          <p className="text-xl text-stone-600 leading-relaxed font-light">
            These terms govern your use of Leadaisy's AI-powered customer engagement platform and services.
          </p>
          <div className="flex items-center justify-center gap-2 mt-6 text-sm text-stone-500">
            <FileText className="h-4 w-4 text-emerald-600" />
            <span>Last updated: June 26, 2025</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <div className="bg-amber-50/50 border border-amber-200/50 rounded-2xl p-8 mb-12">
              <h2 className="font-serif text-2xl font-medium text-zinc-900 mb-4 flex items-center gap-3">
                <AlertTriangle className="h-6 w-6 text-amber-600" />
                Important Notice
              </h2>
              <p className="text-amber-800 mb-4">
                By accessing or using Leadaisy's services, you agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not use our services.
              </p>
              <p className="text-amber-700 text-sm">
                These terms include important information about your rights and obligations, as well as limitations and exclusions that may apply to you.
              </p>
            </div>

            <h2 className="font-serif text-2xl font-medium text-zinc-900 mb-6">1. Acceptance of Terms</h2>
            <p className="text-stone-600 mb-8">
              By accessing, browsing, or using the Leadaisy platform, website, or any of our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy. These terms apply to all visitors, users, and others who access or use our services.
            </p>

            <h2 className="font-serif text-2xl font-medium text-zinc-900 mb-6">2. Description of Service</h2>
            <p className="text-stone-600 mb-6">
              Leadaisy provides an AI-powered customer engagement platform that includes:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-stone-600">
              <li>Intelligent chatbot services for lead capture and customer support</li>
              <li>Automated conversation management and analytics</li>
              <li>CRM integration and lead management tools</li>
              <li>Custom branding and deployment options</li>
              <li>Supporting documentation, training, and customer support</li>
            </ul>

            <h2 className="font-serif text-2xl font-medium text-zinc-900 mb-6">3. User Accounts and Registration</h2>
            <h3 className="font-serif text-xl font-medium text-zinc-900 mb-4">Account Creation</h3>
            <p className="text-stone-600 mb-6">
              To access certain features of our service, you must create an account. You agree to:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-stone-600">
              <li>Provide accurate, current, and complete information during registration</li>
              <li>Maintain and update your account information as necessary</li>
              <li>Maintain the security of your account credentials</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
            </ul>

            <h3 className="font-serif text-xl font-medium text-zinc-900 mb-4">Account Eligibility</h3>
            <p className="text-stone-600 mb-8">
              You must be at least 18 years old and have the legal capacity to enter into contracts in your jurisdiction to use our services. By using our services, you represent and warrant that you meet these requirements.
            </p>

            <h2 className="font-serif text-2xl font-medium text-zinc-900 mb-6">4. Acceptable Use Policy</h2>
            <p className="text-stone-600 mb-6">
              You agree to use our services only for lawful purposes and in accordance with these terms. You may not:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-stone-600">
              <li>Use the service for any illegal or unauthorized purpose</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon or violate our intellectual property rights or those of others</li>
              <li>Harass, abuse, or harm another person</li>
              <li>Transmit any viruses, malware, or other malicious code</li>
              <li>Attempt to gain unauthorized access to our systems or networks</li>
              <li>Use our service to send spam or unsolicited communications</li>
              <li>Interfere with or disrupt the service or servers</li>
            </ul>

            <h2 className="font-serif text-2xl font-medium text-zinc-900 mb-6">5. Subscription Plans and Billing</h2>
            <h3 className="font-serif text-xl font-medium text-zinc-900 mb-4">Subscription Terms</h3>
            <p className="text-stone-600 mb-6">
              Our services are offered on a subscription basis. By subscribing, you agree to:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-stone-600">
              <li>Pay all applicable fees for your chosen subscription plan</li>
              <li>Automatic renewal of your subscription unless cancelled</li>
              <li>Price changes with 30 days advance notice</li>
              <li>No refunds for partial months of service</li>
            </ul>

            <h3 className="font-serif text-xl font-medium text-zinc-900 mb-4">Payment and Refunds</h3>
            <p className="text-stone-600 mb-8">
              Payment is due in advance for each billing cycle. We offer a 30-day money-back guarantee for new customers. Refund requests must be submitted within 30 days of initial payment. Founding member pricing is locked for the lifetime of the account.
            </p>

            <h2 className="font-serif text-2xl font-medium text-zinc-900 mb-6">6. Intellectual Property Rights</h2>
            <h3 className="font-serif text-xl font-medium text-zinc-900 mb-4">Our Rights</h3>
            <p className="text-stone-600 mb-6">
              Leadaisy owns all rights, title, and interest in and to the service, including:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-stone-600">
              <li>Software, algorithms, and artificial intelligence models</li>
              <li>Trademarks, service marks, and logos</li>
              <li>Website content, documentation, and materials</li>
              <li>Any improvements or modifications to the service</li>
            </ul>

            <h3 className="font-serif text-xl font-medium text-zinc-900 mb-4">Your Content</h3>
            <p className="text-stone-600 mb-8">
              You retain ownership of any content you provide to train or customize your AI assistant. By using our service, you grant us a license to use your content solely for the purpose of providing and improving our services to you.
            </p>

            <h2 className="font-serif text-2xl font-medium text-zinc-900 mb-6">7. Data Protection and Privacy</h2>
            <p className="text-stone-600 mb-8">
              Your privacy is important to us. Our collection, use, and disclosure of your information is governed by our Privacy Policy, which is incorporated into these terms by reference. We implement appropriate technical and organizational measures to protect your data.
            </p>

            <h2 className="font-serif text-2xl font-medium text-zinc-900 mb-6">8. Service Availability and Modifications</h2>
            <h3 className="font-serif text-xl font-medium text-zinc-900 mb-4">Service Level Agreement</h3>
            <p className="text-stone-600 mb-6">
              We strive to maintain 99.9% uptime for our services. However, we do not guarantee uninterrupted access and may experience downtime for:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-stone-600">
              <li>Scheduled maintenance and updates</li>
              <li>Emergency security patches</li>
              <li>Third-party service dependencies</li>
              <li>Force majeure events beyond our control</li>
            </ul>

            <h3 className="font-serif text-xl font-medium text-zinc-900 mb-4">Modifications to Service</h3>
            <p className="text-stone-600 mb-8">
              We reserve the right to modify, suspend, or discontinue any part of our service at any time. We will provide reasonable advance notice of material changes that adversely affect your use of the service.
            </p>

            <h2 className="font-serif text-2xl font-medium text-zinc-900 mb-6">9. Limitation of Liability</h2>
            <p className="text-stone-600 mb-8">
              To the maximum extent permitted by law, Leadaisy shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the service.
            </p>

            <h2 className="font-serif text-2xl font-medium text-zinc-900 mb-6">10. Indemnification</h2>
            <p className="text-stone-600 mb-8">
              You agree to defend, indemnify, and hold harmless Leadaisy and its affiliates from and against any claims, damages, obligations, losses, liabilities, costs, or debt arising from your use of the service or violation of these terms.
            </p>

            <h2 className="font-serif text-2xl font-medium text-zinc-900 mb-6">11. Termination</h2>
            <p className="text-stone-600 mb-6">
              Either party may terminate these terms at any time:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-stone-600">
              <li>You may cancel your subscription at any time through your account dashboard</li>
              <li>We may terminate your account for violation of these terms</li>
              <li>We may terminate the service with 30 days notice</li>
              <li>Upon termination, your access to the service will cease</li>
            </ul>

            <h2 className="font-serif text-2xl font-medium text-zinc-900 mb-6">12. Governing Law and Disputes</h2>
            <p className="text-stone-600 mb-8">
              These terms are governed by the laws of British Columbia, Canada. Any disputes arising from these terms or your use of the service will be resolved through binding arbitration in Vancouver, British Columbia.
            </p>

            <h2 className="font-serif text-2xl font-medium text-zinc-900 mb-6">13. Changes to Terms</h2>
            <p className="text-stone-600 mb-8">
              We may update these Terms of Service from time to time. We will notify you of any material changes by posting the new terms on our website and updating the "last updated" date. Your continued use of the service after such changes constitutes acceptance of the updated terms.
            </p>

            <h2 className="font-serif text-2xl font-medium text-zinc-900 mb-6">14. Contact Information</h2>
            <p className="text-stone-600 mb-6">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-stone-50/50 border border-stone-200/50 rounded-2xl p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-zinc-900 mb-2">Email</h4>
                  <a href="mailto:legal@leadaisy.com" className="text-emerald-600 hover:text-emerald-700">legal@leadaisy.com</a>
                </div>
                <div>
                  <h4 className="font-medium text-zinc-900 mb-2">Business Address</h4>
                  <p className="text-stone-600 text-sm">
                    Leadaisy<br />
                    Legal Department<br />
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
