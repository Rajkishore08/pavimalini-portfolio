'use client';

import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { ArrowUpRight, Menu, X, FileText } from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    let ticking = false;
    let lastScrolled = false;
    let currentSection = 'hero';

    const sectionIds = ['hero', 'about', 'experience', 'projects', 'achievements', 'education', 'leadership', 'skills', 'contact'];

    const updateScrollState = () => {
      const scrollY = window.scrollY;
      const shouldBeScrolled = scrollY > 20;
      if (shouldBeScrolled !== lastScrolled) {
        lastScrolled = shouldBeScrolled;
        setIsScrolled(shouldBeScrolled);
      }

      const scrollPosition = scrollY + 180;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            if (sectionIds[i] !== currentSection) {
              currentSection = sectionIds[i];
              setActiveSection(sectionIds[i]);
            }
            break;
          }
        }
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollState);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateScrollState();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Update hash without jumping
      window.history.pushState(null, '', href);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 md:py-4 px-4 sm:px-6 lg:px-8 ${
          isScrolled ? 'backdrop-blur-md bg-white/75 shadow-[0_8px_30px_rgb(168,199,250,0.12)] border-b border-[#A8C7FA]/30' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left: Minimal Monogram Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] rounded-xl px-1 py-1"
            aria-label="Pavimalini T Portfolio - Back to top"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#e0f2fe] to-[#bae6fd]/60 border border-[#bae6fd] flex items-center justify-center font-bold text-[#070e1b] text-sm tracking-wider shadow-sm group-hover:scale-105 group-hover:border-[#0284c7] transition-all">
              {PERSONAL_INFO.monogram}
            </div>
            <div className="flex flex-col text-left">
              <span className="font-semibold text-sm sm:text-base text-[#0b192c] group-hover:text-[#0284c7] transition-colors leading-tight font-display">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[11px] text-[#64748b] font-medium tracking-tight">
                Full Stack &amp; Product Design
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-xl border border-white/70 shadow-sm"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs lg:text-sm transition-all duration-200 ${
                    isActive
                      ? 'text-[#0284c7] font-bold bg-[#e0f2fe]/90 border border-[#bae6fd] shadow-xs'
                      : 'text-[#1e293b] font-medium hover:text-[#0284c7] hover:bg-white/80'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#0ea5e9]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right: Actions */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            <a
              href={PERSONAL_INFO.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold cursor-pointer"
              title="View Resume in new tab"
            >
              <FileText className="w-3.5 h-3.5 text-[#0284c7]" />
              <span>Resume</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="btn-primary group inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold cursor-pointer"
            >
              <span>Let&apos;s Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-white/90 border border-[#bae6fd] text-[#070e1b] hover:bg-[#e0f2fe] transition-all shadow-xs"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden flex flex-col">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-[#070e1b]/40 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer content */}
          <div className="relative mt-20 mx-4 p-6 rounded-2xl bg-white/95 backdrop-blur-xl border border-[#bae6fd] shadow-2xl flex flex-col gap-4 animate-in fade-in zoom-in-95 duration-200">
            <nav className="flex flex-col gap-1.5" aria-label="Mobile Navigation">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`px-4 py-2.5 rounded-xl text-base font-medium transition-all flex items-center justify-between ${
                      isActive
                        ? 'text-[#070e1b] font-bold bg-[#e0f2fe] border border-[#bae6fd]'
                        : 'text-[#475569] hover:text-[#070e1b] hover:bg-[#f0f9ff]'
                    }`}
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className={`w-4 h-4 ${isActive ? 'text-[#0284c7]' : 'opacity-40'}`} />
                  </a>
                );
              })}
            </nav>

            <div className="pt-3 border-t border-[#bae6fd]/50 flex flex-col gap-2">
              <a
                href={PERSONAL_INFO.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold text-sm text-[#0369a1] bg-[#e0f2fe] border border-[#bae6fd] shadow-xs"
              >
                <FileText className="w-4 h-4" />
                <span>View Resume PDF ↗</span>
              </a>

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="btn-primary w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold text-sm"
              >
                <span>Let&apos;s Connect</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
