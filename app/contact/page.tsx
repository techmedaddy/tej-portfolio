'use client';

import { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { WebGLShader } from '@/components/ui/web-gl-shader';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <WebGLShader />
      <Navigation />
      
      <div className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-4 tracking-tight">
              Let's Connect
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Have a project in mind or want to discuss opportunities? I'd love to hear from you.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  {/* Email */}
                  <a 
                    href="mailto:pratap.tps@outlook.com"
                    className="flex items-center gap-4 text-white/80 hover:text-purple-400 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="16" x="2" y="4" rx="2"/>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-white/50 uppercase tracking-wider">Email</p>
                      <p className="text-sm font-medium">pratap.tps@outlook.com</p>
                    </div>
                  </a>

                  {/* Phone */}
                  <a 
                    href="tel:+916202015451"
                    className="flex items-center gap-4 text-white/80 hover:text-cyan-400 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-white/50 uppercase tracking-wider">Phone</p>
                      <p className="text-sm font-medium">+91-6202015451</p>
                    </div>
                  </a>

                  {/* LinkedIn */}
                  <a 
                    href="https://linkedin.com/in/tej-pratap-singh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-white/80 hover:text-purple-400 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                        <rect width="4" height="12" x="2" y="9"/>
                        <circle cx="4" cy="4" r="2"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-white/50 uppercase tracking-wider">LinkedIn</p>
                      <p className="text-sm font-medium">Connect on LinkedIn</p>
                    </div>
                  </a>

                  {/* GitHub */}
                  <a 
                    href="https://github.com/tej-pratap-singh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-white/80 hover:text-cyan-400 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                        <path d="M9 18c-4.51 2-5-2-7-2"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-white/50 uppercase tracking-wider">GitHub</p>
                      <p className="text-sm font-medium">View Code Portfolio</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Availability */}
              <div className="bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                  </span>
                  <p className="text-green-400 font-semibold">Available for New Projects</p>
                </div>
                <p className="text-white/70 text-sm">
                  Currently open to product roles, strategy consulting, and exciting collaborations.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-colors resize-none"
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:scale-105 transition-transform duration-300"
                >
                  Send Message
                </button>

                {/* Success Message */}
                {isSubmitted && (
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 text-green-400 text-sm text-center">
                    ✓ Message sent successfully! I'll get back to you soon.
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-white/10 text-center">
            <p className="text-white/50 text-sm">
              © 2026 Tej Pratap Singh. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
