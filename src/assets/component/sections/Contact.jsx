import { useState } from 'react'
import emailjs from '@emailjs/browser'

const socials = [
  { label: 'GitHub', icon: '⌨️', href: 'https://github.com', handle: '@alexmorgan' },
  { label: 'LinkedIn', icon: '💼', href: 'https://linkedin.com', handle: 'in/alexmorgan' },
  { label: 'Twitter', icon: '🐦', href: 'https://twitter.com', handle: '@alex_codes' },
  { label: 'Dribbble', icon: '🏀', href: 'https://dribbble.com', handle: '@alexmorgan' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'loading' | 'success' | 'error'

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('loading')

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_5ya5yen'
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_mmvnynf'
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'rzSmw0C2enf9cnF3e'

    emailjs.init(publicKey)

    emailjs.send(
      serviceId,
      templateId,
      {
        from_name: form.name,
        from_email: form.email,
        subject: form.subject,
        message: form.message,
      },
      publicKey
    )
    .then(() => {
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus(null), 3000)
    })
    .catch((error) => {
      console.error('Failed to send email:', error)
      setStatus('error')
    })
  }

  return (
    <section className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4" id="contact">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-purple-400 font-semibold mb-2">Let's Talk</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to say hi? My inbox is always open.
            I'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left side - Contact Info */}
          <div className="space-y-6">
            <div className="bg-purple-600/20 border border-purple-400/50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
              
              {/* Email */}
              <div className="flex gap-4 mb-8">
                <div className="text-3xl">📧</div>
                <div>
                  <small className="text-gray-400">Email</small>
                  <a href="mailto:alex@example.com" className="text-white font-semibold block hover:text-purple-300 transition">
                    alex@example.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 mb-8">
                <div className="text-3xl">📱</div>
                <div>
                  <small className="text-gray-400">Phone</small>
                  <a href="tel:+14155551234" className="text-white font-semibold block hover:text-purple-300 transition">
                    +1 (415) 555-1234
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4 mb-8">
                <div className="text-3xl">📍</div>
                <div>
                  <small className="text-gray-400">Location</small>
                  <span className="text-white font-semibold block">San Francisco, CA — Remote OK</span>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div className="text-3xl">🕐</div>
                <div>
                  <small className="text-gray-400">Working Hours</small>
                  <span className="text-white font-semibold block">Mon–Fri, 9AM–6PM PST</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-violet-600/20 border border-violet-400/50 rounded-xl p-8">
              <h4 className="text-xl font-bold text-white mb-6">Find me on</h4>
              <div className="grid grid-cols-2 gap-3">
                {socials.map(s => (
                  <a 
                    key={s.label} 
                    href={s.href} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-3 p-3 bg-violet-600/20 hover:bg-violet-600/40 rounded-lg transition"
                  >
                    <span className="text-2xl">{s.icon}</span>
                    <div>
                      <strong className="text-white text-sm block">{s.label}</strong>
                      <small className="text-gray-400 text-xs">{s.handle}</small>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Badge */}
            <div className="bg-green-600/20 border border-green-400/50 rounded-xl p-4 flex items-center gap-3">
              <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-white font-semibold">Currently available for freelance work</span>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div>
            {status === 'success' ? (
              <div className="bg-green-600/20 border border-green-400/50 rounded-xl p-8 text-center">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-300 mb-6">Thanks for reaching out, {form.name || 'friend'}! I'll be in touch soon.</p>
                <button 
                  onClick={() => setStatus(null)}
                  className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition"
                >
                  Send Another
                </button>
              </div>
            ) : status === 'error' ? (
              <div className="bg-red-600/20 border border-red-400/50 rounded-xl p-8 text-center">
                <div className="text-6xl mb-4">❌</div>
                <h3 className="text-2xl font-bold text-white mb-2">Failed to Send</h3>
                <p className="text-gray-300 mb-6">Something went wrong. Please try again.</p>
                <button 
                  onClick={() => setStatus(null)}
                  className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition"
                >
                  Try Again
                </button>
              </div>
            ) : (
              <form className="bg-purple-600/20 border border-purple-400/50 rounded-xl p-8" onSubmit={handleSubmit}>
                <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

                {/* Name and Email Row */}
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-white font-semibold mb-2">Full Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Boun Synakhone"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-slate-800 border border-purple-400/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white font-semibold mb-2">Email *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Brahawar@gmail.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-slate-800 border border-purple-400/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 transition"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-white font-semibold mb-2">Subject *</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Project Inquiry"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-slate-800 border border-purple-400/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 transition"
                  />
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label htmlFor="message" className="block text-white font-semibold mb-2">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Tell me about your project or idea..."
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-slate-800 border border-purple-400/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 transition resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full px-6 py-3 bg-linear-to-r from-purple-600 to-violet-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-600/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      Sending...
                    </>
                  ) : (
                    <>Send Message <span>→</span></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}



/*

import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    position: '',
    salary: '',
    startDate: '',
    location: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData)
      setLoading(false)
      setSubmitted(true)

      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false)
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          position: '',
          salary: '',
          startDate: '',
          location: ''
        })
      }, 3000)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "Thanousith@gmail.com",
      link: "mailto:Thanousith@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+66 (0) XXX-XXXX",
      link: "tel:+66"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bangkok, Thailand",
      link: "#"
    }
  ]

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-violet-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 text-lg">Interested in working together? Let's discuss your opportunities.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            return (
              <a
                key={index}
                href={info.link}
                className="bg-gradient-to-br from-purple-600/20 to-violet-600/20 border border-purple-400/50 rounded-lg p-6 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-600/20 transition-all duration-300 text-center group"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-br from-purple-600 to-violet-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon size={24} className="text-white" />
                  </div>
                </div>
                <h3 className="text-white font-semibold mb-2">{info.label}</h3>
                <p className="text-purple-300 hover:text-purple-200 transition-colors">{info.value}</p>
              </a>
            )
          })}
        </div>

        {/* Contact Form */
        /*
        <div className="bg-gradient-to-br from-purple-600/20 to-violet-600/20 border border-purple-400/50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-white mb-8">Send Me a Message</h3>

          {submitted ? (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="mb-4 p-4 bg-green-600/20 border border-green-400/50 rounded-full">
                <CheckCircle size={48} className="text-green-400" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">Message Sent Successfully!</h4>
              <p className="text-gray-300 text-center">Thank you for reaching out. I'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Info */
              /*
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-purple-400/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-purple-400/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Subject */
              /*
              <div>
                <label className="block text-sm font-semibold text-white mb-2">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Why are you contacting?"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-purple-400/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 transition-all duration-300"
                />
              </div>

              {/* Job Opportunity Details */
              /*
              <div className="bg-purple-600/10 border border-purple-400/30 rounded-lg p-6">
                <h4 className="text-white font-semibold mb-4">Job Opportunity Details (Optional)</h4>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    placeholder="Position title"
                    className="px-4 py-2 bg-slate-800/50 border border-purple-400/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 transition-all duration-300"
                  />

                  <input
                    type="text"
                    name="salary"
                    value={formData.salary}
                    onChange={handleChange}
                    placeholder="Salary range"
                    className="px-4 py-2 bg-slate-800/50 border border-purple-400/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 transition-all duration-300"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    className="px-4 py-2 bg-slate-800/50 border border-purple-400/50 rounded-lg text-white focus:outline-none focus:border-purple-400 transition-all duration-300"
                  />

                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Work location"
                    className="px-4 py-2 bg-slate-800/50 border border-purple-400/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Message */
              /*
              <div>
                <label className="block text-sm font-semibold text-white mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me more about the opportunity or your inquiry..."
                  rows="6"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-purple-400/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit Button */
              /*
              <button
                type="submit"
                disabled={loading}
                className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-purple-600/50 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              <p className="text-gray-400 text-sm text-center">
                I'll respond to your message as soon as possible.
              </p>
            </form>
          )}
        </div>

        {/* CTA */
        /*
        <div className="mt-12 text-center">
          <p className="text-gray-300 mb-6">Or connect with me on social media:</p>
          <div className="flex justify-center gap-4">
            {['LinkedIn', 'GitHub', 'Twitter', 'Instagram'].map((social) => (
              <a
                key={social}
                href="#"
                className="px-6 py-2 bg-purple-600/20 border border-purple-400/50 text-purple-300 font-semibold rounded-lg hover:bg-purple-600/40 hover:border-purple-300 transition-all duration-300"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
*/