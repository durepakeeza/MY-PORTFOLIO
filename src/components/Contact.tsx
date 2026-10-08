import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Copy, Check, ArrowUpRight, Send, Globe, MessageSquare } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'WordPress Development',
    message: '',
  });

  const emailAddress = 'durepakeeza.web@gmail.com';
  const linkedInUrl = 'https://linkedin.com/in/dure-pakeeza7';
  const behanceUrl = 'https://behance.net/pakeeza';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-36 relative overflow-hidden">
      {/* Subtle background ambient glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#C9C7FF]/6 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 text-left">
          <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] text-[#A8A8B0] uppercase mb-4 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9C7FF]" />
            <span>08 / Direct Engagement</span>
          </div>

          <h2
            className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#F3F1ED] font-normal leading-tight tracking-tight mb-6 max-w-3xl"
            style={{ textWrap: 'balance' }}
          >
            Have an idea in mind?
          </h2>

          <p className="text-lg sm:text-2xl text-[#A8A8B0] font-light max-w-2xl">
            Let&apos;s turn it into a thoughtful digital experience.
          </p>
        </div>

        {/* Luxury Split Layout: Direct Contact Info & Minimal Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Inquiries & Links */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-2xl bg-[#121216]/80 border border-[#D8D8E0]/10 shadow-2xl">
              <span className="text-xs uppercase font-mono tracking-widest text-[#A8A8B0] block mb-4">
                Primary Inquiries
              </span>

              {/* Email with 1-click Copy */}
              <div className="mb-8">
                <div className="text-xs text-[#A8A8B0] mb-1 font-light">Email Address</div>
                <div className="flex items-center justify-between gap-3 p-3 bg-white/[0.02] border border-[#D8D8E0]/10 rounded-xl">
                  <a
                    href={`mailto:${emailAddress}`}
                    className="text-sm sm:text-base font-serif text-[#F3F1ED] hover:text-[#C9C7FF] transition-colors truncate"
                  >
                    {emailAddress}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 text-[#A8A8B0] hover:text-[#F3F1ED] transition-colors rounded-lg bg-white/[0.03] hover:bg-white/[0.08]"
                    title="Copy email to clipboard"
                    aria-label="Copy email"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-[#C9C7FF]" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {copied && (
                  <span className="text-[11px] text-[#C9C7FF] font-mono mt-1.5 inline-block">
                    ✓ Email address copied to clipboard
                  </span>
                )}
              </div>

              {/* Direct Network Channels */}
              <div className="space-y-3 pt-6 border-t border-[#D8D8E0]/10">
                <span className="text-xs uppercase font-mono tracking-widest text-[#A8A8B0] block mb-2">
                  Professional Networks
                </span>

                <a
                  href={linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-[#D8D8E0]/5 hover:border-[#C9C7FF]/30 transition-all text-xs text-[#F3F1ED] group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-4 h-4 text-[#C9C7FF]" />
                    <span>linkedin.com/in/dure-pakeeza7</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#A8A8B0] group-hover:text-[#F3F1ED] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={behanceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-[#D8D8E0]/5 hover:border-[#C9C7FF]/30 transition-all text-xs text-[#F3F1ED] group"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-4 h-4 rounded-sm bg-[#C9C7FF]/20 text-[#C9C7FF] text-[10px] font-bold flex items-center justify-center font-mono">
                      Bē
                    </span>
                    <span>behance.net/pakeeza</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#A8A8B0] group-hover:text-[#F3F1ED] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              {/* Location & Availability */}
              <div className="pt-6 mt-6 border-t border-[#D8D8E0]/10 text-xs text-[#A8A8B0] space-y-2">
                <div className="flex items-center gap-2">
                  <Globe className="w-3.5 h-3.5 text-[#C9C7FF]" />
                  <span>Sargodha, Pakistan · UTC+5</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C9C7FF] animate-pulse" />
                  <span className="text-[#F3F1ED]">Open to remote contracts &amp; select freelance projects</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Refined Minimal Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#121216]/90 border border-[#D8D8E0]/10 shadow-2xl relative">
              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#C9C7FF]/10 text-[#C9C7FF] mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-serif text-[#F3F1ED]">
                    Message Received
                  </h3>
                  <p className="text-sm text-[#A8A8B0] max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-[#F3F1ED]">{formData.name}</span>. Your inquiry has been noted. I will review your requirements and reach out to <span className="text-[#F3F1ED]">{formData.email}</span> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        service: 'WordPress Development',
                        message: '',
                      });
                    }}
                    className="mt-4 px-5 py-2.5 text-xs uppercase tracking-wider font-medium text-[#F3F1ED] border border-[#D8D8E0]/20 hover:border-[#C9C7FF] rounded-[2px] transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <span className="text-xs uppercase font-mono tracking-widest text-[#A8A8B0] block mb-2">
                      Start a Conversation
                    </span>
                    <p className="text-xs text-[#A8A8B0]/80 mb-6 font-light">
                      Please share a few details about your project or timeline.
                    </p>
                  </div>

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-medium text-[#F3F1ED] uppercase tracking-wider mb-2 font-mono"
                      >
                        Your Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Elena Vance"
                        className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-[#D8D8E0]/15 text-sm text-[#F3F1ED] placeholder-[#A8A8B0]/40 focus:outline-none focus:border-[#C9C7FF] transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-medium text-[#F3F1ED] uppercase tracking-wider mb-2 font-mono"
                      >
                        Your Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="elena@studio.com"
                        className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-[#D8D8E0]/15 text-sm text-[#F3F1ED] placeholder-[#A8A8B0]/40 focus:outline-none focus:border-[#C9C7FF] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Scope / Service Selector */}
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-xs font-medium text-[#F3F1ED] uppercase tracking-wider mb-2 font-mono"
                    >
                      Project Interest
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg bg-[#121216] border border-[#D8D8E0]/15 text-sm text-[#F3F1ED] focus:outline-none focus:border-[#C9C7FF] transition-colors"
                    >
                      <option value="WordPress Development">WordPress Website Development</option>
                      <option value="Elementor Pro Customization">Elementor / Elementor Pro Theme Design</option>
                      <option value="Frontend Engineering">Responsive Frontend Development (HTML/CSS/JS)</option>
                      <option value="Landing Page">High-Conversion Landing Page</option>
                      <option value="Performance & Bug Fixes">Website Customization &amp; Optimization</option>
                      <option value="Other Inquiries">General Collaboration / Freelance Contract</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-medium text-[#F3F1ED] uppercase tracking-wider mb-2 font-mono"
                    >
                      Project Vision &amp; Notes *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Briefly describe your objectives, design preferences, and timeline..."
                      className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-[#D8D8E0]/15 text-sm text-[#F3F1ED] placeholder-[#A8A8B0]/40 focus:outline-none focus:border-[#C9C7FF] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-semibold tracking-widest uppercase text-[#0A0A0C] bg-[#F3F1ED] hover:bg-[#C9C7FF] transition-all duration-300 rounded-[2px] shadow-lg hover:shadow-[0_0_25px_rgba(201,199,255,0.3)] active:scale-95"
                    >
                      <span>Start a Conversation</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
