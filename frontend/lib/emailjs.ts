// EmailJS Configuration and Service Functions
// Service ID: service_vmko5v4
// Public Key: JMxj_fYItDO1SUMas  
// Private Key: Ilvob-QltFYYg6cNChPzA
// Template ID: template_m6nefpd

export const EMAILJS_CONFIG = {
  serviceId: 'service_vmko5v4',
  templateId: 'template_m6nefpd',
  publicKey: 'JMxj_fYItDO1SUMas'
}

// Initialize EmailJS (call this in your app startup)
export const initEmailJS = () => {
  if (typeof window !== 'undefined') {
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js'
    script.onload = () => {
      if (window.emailjs) {
        window.emailjs.init(EMAILJS_CONFIG.publicKey)
      }
    }
    document.head.appendChild(script)
  }
}

// Send contact form email
export interface ContactFormData {
  name: string
  email: string
  phone?: string
  company?: string
  message: string
}

export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    if (!window.emailjs) {
      throw new Error('EmailJS not loaded')
    }

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone || 'Not provided',
      company: formData.company || 'Not provided',
      message: formData.message,
      time: new Date().toLocaleString()
    }

    const result = await window.emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams
    )

    return result.status === 200
  } catch (error) {
    console.error('Failed to send email:', error)
    return false
  }
}

// Send newsletter signup email
export interface NewsletterData {
  email: string
  source?: string
}

export const sendNewsletterSignup = async (formData: NewsletterData): Promise<boolean> => {
  try {
    if (!window.emailjs) {
      throw new Error('EmailJS not loaded')
    }

    const templateParams = {
      name: 'Newsletter Subscriber',
      email: formData.email,
      phone: 'Not provided',
      company: formData.source || 'Newsletter Signup',
      message: 'Newsletter subscription request',
      time: new Date().toLocaleString()
    }

    const result = await window.emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams
    )

    return result.status === 200
  } catch (error) {
    console.error('Failed to send newsletter signup:', error)
    return false
  }
}

// Add EmailJS type definitions
declare global {
  interface Window {
    emailjs: {
      init: (publicKey: string) => void
      send: (serviceId: string, templateId: string, templateParams: any) => Promise<{status: number}>
    }
  }
}
