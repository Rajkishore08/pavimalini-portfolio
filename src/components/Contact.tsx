'use client';

import React, { useState } from 'react';
import { PERSONAL_INFO, CONFIG } from '@/data/portfolioData';
import { Mail, Phone, MapPin, Send, Copy, Check, Sparkles, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import confetti from 'canvas-confetti';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => {
      setCopiedField(null);
    }, 2500);
  };

  const validate = (): boolean => {
    const errs: Partial<FormData> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please enter a subject.';
    if (!formData.message.trim()) errs.message = 'Please write your message.';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#0284c7', '#38bdf8', '#0ea5e9', '#bae6fd'],
      });
    } catch {
      // safe fallback
    }

    // Construct mailto link with prefilled subject and body
    const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
    const mailtoBody = encodeURIComponent(
      `Hello Pavimalini,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      window.location.href = mailtoUrl;
    }, 600);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden">
      
      {/* Ambient Glow Orbs */}
      <div
        className="absolute top-1/3 left-10 w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(186,230,253,0.35)_0%,rgba(224,242,254,0.15)_45%,transparent_70%)] -z-0 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.22)_0%,rgba(186,230,253,0.25)_45%,transparent_70%)] -z-0 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="section-overline inline-flex items-center gap-2 px-3 py-1 rounded-full mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0284c7]" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#070e1b] font-display tracking-tight">
            Have an idea? Let&apos;s build something meaningful.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#475569] max-w-2xl font-normal font-body leading-relaxed">
            I&apos;m always excited to explore new opportunities, collaborate on interesting projects, and connect with people who love building great products.
          </p>
        </div>

        {/* Two-Column Grid: Contact Details (Left) & Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start text-left">
          
          {/* Left Column: Direct Reachout Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <div className="frosted-card p-6 rounded-3xl">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#e0f2fe] text-[#0284c7] flex items-center justify-center border border-[#bae6fd]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#64748b] block">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-base font-bold text-[#070e1b] hover:text-[#0284c7] transition-colors font-display"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                  className="p-2 rounded-xl bg-[#f0f9ff] hover:bg-[#e0f2fe] text-[#0284c7] border border-[#bae6fd] transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedField === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {copiedField === 'email' && (
                <p className="text-xs text-emerald-600 font-mono font-semibold animate-in fade-in">
                  ✓ Copied email to clipboard!
                </p>
              )}
            </div>

            {/* Phone Card */}
            <div className="frosted-card p-6 rounded-3xl">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#e0f2fe] text-[#0284c7] flex items-center justify-center border border-[#bae6fd]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#64748b] block">
                      Direct Phone
                    </span>
                    <a
                      href={`tel:${PERSONAL_INFO.cleanPhone}`}
                      className="text-base font-bold text-[#070e1b] hover:text-[#0284c7] transition-colors font-mono"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => copyToClipboard(PERSONAL_INFO.cleanPhone, 'phone')}
                  className="p-2 rounded-xl bg-[#f0f9ff] hover:bg-[#e0f2fe] text-[#0284c7] border border-[#bae6fd] transition-colors cursor-pointer"
                  title="Copy phone number to clipboard"
                  aria-label="Copy phone number"
                >
                  {copiedField === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {copiedField === 'phone' && (
                <p className="text-xs text-emerald-600 font-mono font-semibold animate-in fade-in">
                  ✓ Copied phone number to clipboard!
                </p>
              )}
            </div>

            {/* Location Card */}
            <div className="frosted-card p-6 rounded-3xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#e0f2fe] text-[#0284c7] flex items-center justify-center border border-[#bae6fd]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#64748b] block">
                  Location
                </span>
                <span className="text-base font-bold text-[#070e1b] font-display">
                  {PERSONAL_INFO.location}
                </span>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="frosted-card p-6 rounded-3xl space-y-3">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#64748b] block">
                Connect Digitally
              </span>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-semibold text-[#070e1b] bg-[#e0f2fe] hover:bg-[#bae6fd] border border-[#bae6fd] transition-all shadow-2xs"
                >
                  <Mail className="w-3.5 h-3.5 text-[#0284c7]" />
                  <span>Email Me</span>
                </a>

                {CONFIG.LINKEDIN_URL ? (
                  <a
                    href={CONFIG.LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-semibold text-[#070e1b] bg-[#e0f2fe] hover:bg-[#bae6fd] border border-[#bae6fd] transition-all shadow-2xs"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5 text-[#0284c7]" />
                    <span>LinkedIn ↗</span>
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-semibold text-[#64748b] bg-[#f0f9ff] border border-[#bae6fd] cursor-default">
                    <LinkedinIcon className="w-3.5 h-3.5 text-[#64748b]" />
                    <span>LinkedIn (Configurable)</span>
                  </span>
                )}

                {CONFIG.GITHUB_URL ? (
                  <a
                    href={CONFIG.GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-semibold text-[#070e1b] bg-[#e0f2fe] hover:bg-[#bae6fd] border border-[#bae6fd] transition-all shadow-2xs"
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-[#0284c7]" />
                    <span>GitHub ↗</span>
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-semibold text-[#64748b] bg-[#f0f9ff] border border-[#bae6fd] cursor-default">
                    <GithubIcon className="w-3.5 h-3.5 text-[#64748b]" />
                    <span>GitHub (Configurable)</span>
                  </span>
                )}
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="frosted-card p-7 sm:p-9 rounded-3xl">
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#070e1b] mb-1 flex items-center gap-2 font-display">
                <MessageSquare className="w-5 h-5 text-[#0284c7]" />
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] mb-6 font-body">
                Have a project proposal, internship inquiry, or just want to say hi? Fill in the details below.
              </p>

              {submitSuccess && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-sm animate-in fade-in duration-300">
                  <p className="font-bold">Opening your mail client...</p>
                  <p className="text-xs text-emerald-700 mt-1">
                    Your inquiry has been compiled with all details ready to send directly to <strong>{PERSONAL_INFO.email}</strong>.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block font-mono text-xs font-bold uppercase tracking-wider text-[#070e1b] mb-1.5">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className={`w-full px-4 py-3 rounded-xl bg-white/70 backdrop-blur-md border ${
                      errors.name ? 'border-rose-400 focus:ring-rose-300' : 'border-[#bae6fd] focus:border-[#0284c7]'
                    } text-[#070e1b] placeholder-[#64748b]/70 text-sm focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]/30 focus:bg-white transition-all font-body font-medium`}
                  />
                  {errors.name && (
                    <p className="text-xs text-rose-500 mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block font-mono text-xs font-bold uppercase tracking-wider text-[#070e1b] mb-1.5">
                    Your Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@company.com"
                    className={`w-full px-4 py-3 rounded-xl bg-white/70 backdrop-blur-md border ${
                      errors.email ? 'border-rose-400 focus:ring-rose-300' : 'border-[#bae6fd] focus:border-[#0284c7]'
                    } text-[#070e1b] placeholder-[#64748b]/70 text-sm focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]/30 focus:bg-white transition-all font-body font-medium`}
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-500 mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block font-mono text-xs font-bold uppercase tracking-wider text-[#070e1b] mb-1.5">
                    Subject <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Software Engineering Opportunity / Collaboration"
                    className={`w-full px-4 py-3 rounded-xl bg-white/70 backdrop-blur-md border ${
                      errors.subject ? 'border-rose-400 focus:ring-rose-300' : 'border-[#bae6fd] focus:border-[#0284c7]'
                    } text-[#070e1b] placeholder-[#64748b]/70 text-sm focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]/30 focus:bg-white transition-all font-body font-medium`}
                  />
                  {errors.subject && (
                    <p className="text-xs text-rose-500 mt-1">{errors.subject}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block font-mono text-xs font-bold uppercase tracking-wider text-[#070e1b] mb-1.5">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, idea, or role..."
                    className={`w-full px-4 py-3 rounded-xl bg-white/70 backdrop-blur-md border ${
                      errors.message ? 'border-rose-400 focus:ring-rose-300' : 'border-[#bae6fd] focus:border-[#0284c7]'
                    } text-[#070e1b] placeholder-[#64748b]/70 text-sm focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]/30 focus:bg-white transition-all resize-none font-body font-medium`}
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-500 mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Send Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold font-display text-sm sm:text-base cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Preparing Transmission...' : 'Send Message'}</span>
                </button>
              </form>

              <div className="mt-4 pt-3 border-t border-[#bae6fd]/40 text-center">
                <p className="text-[11px] font-mono text-[#64748b]">
                  Dispatches directly to <strong>{PERSONAL_INFO.email}</strong> via secure client mail relay.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
