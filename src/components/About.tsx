import React from 'react';
import { motion } from 'motion/react';
import { Compass, Code2, Sparkles, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const transitionConfig = {
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  const coreFocusAreas = [
    {
      title: 'Bespoke WordPress & Elementor',
      description:
        'Crafting custom layouts, robust themes, and pixel-precise Elementor Pro implementations tailored to distinct brand identities.',
    },
    {
      title: 'Semantic Frontend Development',
      description:
        'Writing clean HTML5, modern CSS3, and JavaScript that ensure fluid responsiveness, fast load speeds, and web standards.',
    },
    {
      title: 'UI/UX & Performance Optimization',
      description:
        'Eliminating friction with thoughtful hierarchy, cross-browser compatibility, and lightweight asset optimization.',
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 relative border-b border-[#D8D8E0]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] text-[#A8A8B0] uppercase mb-4 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9C7FF]" />
            <span>01 / Profile &amp; Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#F3F1ED] font-normal tracking-tight">
            About
          </h2>
        </div>

        {/* Big Editorial Statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={transitionConfig}
          className="mb-16 md:mb-24 max-w-4xl"
        >
          <p
            className="text-2xl sm:text-4xl lg:text-5xl font-serif text-[#F3F1ED] leading-[1.25] font-light"
            style={{ textWrap: 'balance' }}
          >
            &ldquo;Building websites that look refined, feel intuitive and work beautifully across every screen.&rdquo;
          </p>
        </motion.div>

        {/* Split Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Unique Visual Art Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={transitionConfig}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#D8D8E0]/15 bg-[#121216] shadow-2xl">
              <img
                src="/src/assets/images/about_creative_workspace_1791474978096.jpg"
                alt="Creative studio and typography workspace of Dur E Pakeeza"
                referrerPolicy="no-referrer"
                className="w-full h-auto aspect-[3/4] object-cover filter contrast-[1.03] hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C]/90 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0A0A0C]/75 backdrop-blur-md border border-[#D8D8E0]/15 text-xs">
                <div className="flex items-center justify-between text-[#F3F1ED] font-serif text-sm mb-1">
                  <span>Dur E Pakeeza</span>
                  <span className="text-[#C9C7FF] text-xs font-mono">3+ Years Active</span>
                </div>
                <p className="text-[#A8A8B0] text-[11px] leading-relaxed">
                  Frontend &amp; WordPress Developer based in Sargodha, Pakistan.
                </p>
              </div>
            </div>

            {/* Subtle decorative architectural quote tag */}
            <div className="mt-4 px-2 flex items-center justify-between text-[11px] text-[#A8A8B0] font-mono tracking-wider">
              <span>DESIGN DISCIPLINE</span>
              <span className="text-[#C9C7FF]">EST. 2022</span>
            </div>
          </motion.div>

          {/* Right Column: Detailed Narrative & Core Focus */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={transitionConfig}
              className="space-y-6 text-[#A8A8B0] text-base sm:text-lg leading-relaxed font-light"
            >
              <p>
                Hello, I am <strong className="text-[#F3F1ED] font-medium">Dur E Pakeeza</strong>,
                a dedicated Frontend Developer and WordPress Developer with 3 years of
                hands-on experience engineering high-performing websites and digital interfaces.
              </p>
              <p>
                My work centers at the intersection of aesthetic poise and dependable code.
                Whether developing bespoke WordPress platforms from scratch, customizing Elementor
                and Elementor Pro layouts, or hand-crafting responsive frontend architectures with
                HTML5, CSS3, and JavaScript, I treat every project with meticulous attention to detail.
              </p>
              <p>
                I prioritize clean structures, cross-browser compatibility, swift loading times,
                and seamless user journeys that honor your brand vision and convert visitors.
              </p>
            </motion.div>

            {/* Three Pillar Cards */}
            <div className="grid grid-cols-1 gap-4 pt-4">
              {coreFocusAreas.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...transitionConfig, delay: index * 0.1 }}
                  className="p-5 sm:p-6 rounded-xl bg-[#121216]/60 border border-[#D8D8E0]/10 hover:border-[#C9C7FF]/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-xs font-mono text-[#C9C7FF] mt-1 shrink-0">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="text-lg font-serif text-[#F3F1ED] mb-1.5 font-normal">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#A8A8B0] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Unboxed Metadata List (Zero-Pill Discipline) */}
            <div className="pt-6 border-t border-[#D8D8E0]/10">
              <span className="text-xs tracking-wider uppercase text-[#A8A8B0] font-mono block mb-3">
                Core Competencies &amp; Technical Scope
              </span>
              <p className="text-sm text-[#F3F1ED]/90 leading-loose">
                WordPress <span className="text-[#C9C7FF]">·</span> Elementor Pro <span className="text-[#C9C7FF]">·</span> HTML5 &amp; Modern CSS3 <span className="text-[#C9C7FF]">·</span> JavaScript <span className="text-[#C9C7FF]">·</span> Responsive Layouts <span className="text-[#C9C7FF]">·</span> UI/UX Refinement <span className="text-[#C9C7FF]">·</span> Website Customization <span className="text-[#C9C7FF]">·</span> Landing Page Engineering <span className="text-[#C9C7FF]">·</span> Performance Optimization <span className="text-[#C9C7FF]">·</span> Git &amp; GitHub
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
