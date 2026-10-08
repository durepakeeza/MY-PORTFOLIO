import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight, Sparkles, Layers, Globe } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  const transitionConfig = {
    duration: 0.9,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden border-b border-[#D8D8E0]/10"
    >
      {/* Subtle luxury ambient glow: soft lavender beam behind composition */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#C9C7FF]/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#D8D8E0]/4 rounded-full blur-[100px] pointer-events-none" />

      {/* Editorial vertical text element on left margin (desktop) */}
      <div className="hidden 2xl:flex absolute left-8 top-1/2 -translate-y-1/2 items-center gap-4 -rotate-90 origin-center text-[10px] tracking-[0.35em] text-[#A8A8B0]/60 uppercase font-mono">
        <span className="w-8 h-[1px] bg-[#D8D8E0]/20" />
        <span>Based in Pakistan • Working Worldwide</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Prose */}
          <div className="lg:col-span-7 flex flex-col justify-center z-10">
            {/* Small eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transitionConfig, delay: 0.1 }}
              className="inline-flex items-center gap-3 text-xs tracking-[0.25em] text-[#A8A8B0] uppercase mb-6 font-medium"
            >
              <span className="w-2 h-2 rounded-full bg-[#C9C7FF]/80 animate-pulse" />
              <span>Frontend &amp; WordPress Developer</span>
            </motion.div>

            {/* Large headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transitionConfig, delay: 0.25 }}
              className="text-4xl sm:text-6xl xl:text-7xl font-serif text-[#F3F1ED] font-normal leading-[1.08] tracking-tight mb-8"
              style={{ textWrap: 'balance' }}
            >
              Turning Ideas
              <br />
              Into{' '}
              <span className="italic text-[#C9C7FF] font-light">
                Digital
              </span>
              <br />
              Experiences.
            </motion.h1>

            {/* Supporting description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transitionConfig, delay: 0.4 }}
              className="text-base sm:text-lg text-[#A8A8B0] font-light leading-relaxed max-w-xl mb-10"
            >
              I design and develop responsive websites that combine clean interfaces,
              thoughtful user experiences and reliable WordPress development.
            </motion.p>

            {/* Two Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transitionConfig, delay: 0.55 }}
              className="flex flex-wrap items-center gap-4 sm:gap-6"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 px-6 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#0A0A0C] bg-[#F3F1ED] hover:bg-[#C9C7FF] transition-all duration-300 rounded-[2px] shadow-lg shadow-black/40 hover:shadow-[0_0_25px_rgba(201,199,255,0.3)] active:scale-95"
              >
                <span>View My Work</span>
                <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <button
                onClick={onContactClick}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs font-medium tracking-wider uppercase text-[#F3F1ED] border border-[#D8D8E0]/30 hover:border-[#C9C7FF] hover:text-[#C9C7FF] bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 rounded-[2px] active:scale-95"
              >
                <span>Let&apos;s Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>

            {/* Subtle trust marker note (unboxed) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ...transitionConfig, delay: 0.7 }}
              className="mt-12 pt-8 border-t border-[#D8D8E0]/10 flex flex-wrap items-center gap-6 text-xs text-[#A8A8B0]"
            >
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-[#C9C7FF]" />
                <span>Sargodha, Pakistan</span>
              </div>
              <span className="text-[#D8D8E0]/30">/</span>
              <div className="flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-[#C9C7FF]" />
                <span>3 Years Experience</span>
              </div>
              <span className="text-[#D8D8E0]/30">/</span>
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#C9C7FF]" />
                <span>WordPress &amp; Elementor Pro</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Unique Art-Directed Digital Workspace Mockup */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ...transitionConfig, delay: 0.35 }}
              className="relative mx-auto max-w-lg lg:max-w-none"
            >
              {/* Outer luxury frame */}
              <div className="relative rounded-2xl p-2.5 bg-gradient-to-b from-[#D8D8E0]/15 via-[#D8D8E0]/5 to-transparent border border-[#D8D8E0]/15 shadow-2xl shadow-black/80">
                {/* Browser bar simulated header */}
                <div className="flex items-center justify-between px-3.5 py-2.5 mb-2 rounded-t-xl bg-[#0A0A0C]/90 border-b border-[#D8D8E0]/10 text-[11px] text-[#A8A8B0]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#D8D8E0]/30" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#D8D8E0]/20" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#C9C7FF]/40" />
                  </div>
                  <span className="font-mono text-[10px] tracking-wider text-[#A8A8B0]/70 truncate max-w-[180px]">
                    durepakeeza.studio/craft
                  </span>
                  <div className="w-4 h-1 bg-[#D8D8E0]/20 rounded-full" />
                </div>

                {/* Primary Unique Hero Visual */}
                <div className="relative overflow-hidden rounded-xl aspect-[4/3] bg-[#0A0A0C]">
                  <img
                    src="/src/assets/images/hero_digital_workspace_1791474966593.jpg"
                    alt="Editorial digital workspace mockup by Dur E Pakeeza"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transform hover:scale-[1.02] transition-transform duration-700 ease-out"
                  />
                  {/* Subtle edge vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C]/80 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Bottom luxury caption bar */}
                <div className="mt-3 px-3 py-2 flex items-center justify-between text-[11px] text-[#A8A8B0]/80 border-t border-[#D8D8E0]/10">
                  <span className="tracking-wide">Creative Layout Architecture</span>
                  <span className="font-mono text-[#C9C7FF] text-[10px]">Responsive 100%</span>
                </div>
              </div>

              {/* Floating interface card 1: Precision Engineering */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ ...transitionConfig, delay: 0.6 }}
                className="absolute -bottom-6 -left-6 sm:-left-8 bg-[#121216]/95 backdrop-blur-xl border border-[#D8D8E0]/20 p-4 rounded-xl shadow-2xl max-w-[210px] hidden sm:block"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#C9C7FF]" />
                  <span className="text-[10px] font-semibold tracking-wider uppercase text-[#F3F1ED]">
                    Clean Code
                  </span>
                </div>
                <p className="text-[11px] text-[#A8A8B0] leading-snug">
                  Tailored Elementor &amp; semantic frontend performance.
                </p>
              </motion.div>

              {/* Floating interface card 2: Cross-Browser & Device Fidelity */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ ...transitionConfig, delay: 0.7 }}
                className="absolute -top-6 -right-4 sm:-right-6 bg-[#121216]/95 backdrop-blur-xl border border-[#D8D8E0]/20 px-3.5 py-2.5 rounded-xl shadow-2xl hidden sm:flex items-center gap-3"
              >
                <div className="w-7 h-7 rounded-lg bg-[#C9C7FF]/15 flex items-center justify-center text-[#C9C7FF]">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div className="text-left">
                  <div className="text-[11px] font-semibold text-[#F3F1ED]">High Fidelity</div>
                  <div className="text-[10px] text-[#A8A8B0]">Pixel-perfect execution</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
