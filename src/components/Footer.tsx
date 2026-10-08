import React from 'react';
import { DpMonogram } from './DpMonogram';
import { ArrowUp, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#D8D8E0]/10 bg-[#0A0A0C] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center justify-between">
          {/* Left: DP Monogram & Mark */}
          <div className="md:col-span-4 flex items-center gap-4">
            <DpMonogram size={40} />
            <div>
              <span className="font-serif tracking-[0.2em] text-sm font-semibold text-[#F3F1ED] uppercase block">
                Dur E Pakeeza
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#A8A8B0] uppercase font-light">
                Digital Atelier
              </span>
            </div>
          </div>

          {/* Center: Title & Identity */}
          <div className="md:col-span-4 text-left md:text-center">
            <p className="text-xs tracking-wider uppercase font-mono text-[#D8D8E0]">
              Frontend Developer <span className="text-[#C9C7FF]">|</span> WordPress Developer
            </p>
            <p className="text-[11px] text-[#A8A8B0] mt-1 font-light">
              Sargodha, Pakistan · Delivering Globally
            </p>
          </div>

          {/* Right: Direct Social and Network Links */}
          <div className="md:col-span-4 flex items-center justify-start md:justify-end gap-6 text-xs text-[#A8A8B0]">
            <a
              href="https://linkedin.com/in/dure-pakeeza7"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F3F1ED] transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-[#D8D8E0]/20">·</span>
            <a
              href="https://behance.net/pakeeza"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F3F1ED] transition-colors"
            >
              Behance
            </a>
            <span className="text-[#D8D8E0]/20">·</span>
            <a
              href="mailto:durepakeeza.web@gmail.com"
              className="hover:text-[#F3F1ED] transition-colors"
            >
              Email
            </a>
          </div>
        </div>

        {/* Bottom Line & Back to Top */}
        <div className="mt-12 pt-8 border-t border-[#D8D8E0]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#A8A8B0]/70 font-light">
          <div>
            &copy; {currentYear} Dur E Pakeeza. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs text-[#A8A8B0] hover:text-[#C9C7FF] transition-colors py-1"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <div className="w-6 h-6 rounded-full bg-white/[0.04] border border-[#D8D8E0]/10 flex items-center justify-center group-hover:border-[#C9C7FF]/40 transition-colors">
              <ArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};
