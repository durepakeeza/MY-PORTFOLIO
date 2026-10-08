import React, { useState, useEffect } from 'react';
import { DpMonogram } from './DpMonogram';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = [
        'home',
        'about',
        'experience',
        'education',
        'skills',
        'projects',
        'services',
        'contact',
      ];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0A0A0C]/85 backdrop-blur-md border-b border-[#D8D8E0]/10 py-3.5 shadow-2xl shadow-black/50'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Zone 1: Brand Zone */}
        <a
          href="#home"
          className="group flex items-center gap-3.5 transition-opacity hover:opacity-90"
        >
          <DpMonogram size={32} />
          <span className="font-serif tracking-[0.18em] text-sm sm:text-base font-semibold text-[#F3F1ED] uppercase">
            Dur E Pakeeza
          </span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-medium tracking-wide">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.label}
                href={link.href}
                className={`transition-colors duration-300 relative py-1 ${
                  isActive
                    ? 'text-[#F3F1ED]'
                    : 'text-[#A8A8B0] hover:text-[#F3F1ED]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#C9C7FF]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={onContactClick}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-medium tracking-wider uppercase text-[#0A0A0C] bg-[#F3F1ED] hover:bg-[#C9C7FF] transition-all duration-300 rounded-[2px] shadow-sm hover:shadow-[0_0_20px_rgba(201,199,255,0.25)] active:scale-95"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#A8A8B0] hover:text-[#F3F1ED] transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-[#0A0A0C]/98 backdrop-blur-2xl border-b border-[#D8D8E0]/10 px-6 py-8 shadow-2xl">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-serif tracking-wider text-[#A8A8B0] hover:text-[#F3F1ED] py-2 border-b border-[#D8D8E0]/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onContactClick();
                }}
                className="w-full py-3 text-xs tracking-widest uppercase font-medium text-[#0A0A0C] bg-[#F3F1ED] hover:bg-[#C9C7FF] transition-colors rounded-[2px] flex items-center justify-center gap-2"
              >
                <span>Let&apos;s Talk</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
