import React from 'react';
import { motion } from 'motion/react';

export const Process: React.FC = () => {
  const transitionConfig = {
    duration: 0.7,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  const steps = [
    {
      number: '01',
      title: 'Understand',
      tagline: 'Discovery & Scope',
      description:
        'Understand the business, audience and goals. Clarifying functional requirements, content structure, and technical boundaries before writing code.',
    },
    {
      number: '02',
      title: 'Design',
      tagline: 'Visual Architecture',
      description:
        'Create a clean and purposeful visual direction. Establishing typographic scale, layout hierarchies, color harmony, and responsive UI wireframes.',
    },
    {
      number: '03',
      title: 'Develop',
      tagline: 'Engineering & WordPress',
      description:
        'Build responsive and reliable frontend/WordPress experiences. Implementing custom Elementor components, semantic HTML/CSS, and structured code.',
    },
    {
      number: '04',
      title: 'Refine',
      tagline: 'QA & Optimization',
      description:
        'Test, optimize and polish the final experience. Auditing cross-browser behavior, mobile breakpoints, page load speed, and interaction smoothness.',
    },
  ];

  return (
    <section className="py-24 sm:py-32 relative border-b border-[#D8D8E0]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20">
          <div>
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] text-[#A8A8B0] uppercase mb-4 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9C7FF]" />
              <span>07 / Structured Methodology</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#F3F1ED] font-normal tracking-tight">
              How I Work
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#A8A8B0] max-w-md font-light leading-relaxed">
            A methodical four-stage workflow ensuring every project is delivered on schedule with unwavering design fidelity.
          </p>
        </div>

        {/* 4 Process Steps in Horizontal Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ ...transitionConfig, delay: index * 0.12 }}
              className="p-6 sm:p-7 rounded-2xl bg-[#121216]/60 border border-[#D8D8E0]/10 hover:border-[#C9C7FF]/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Large architectural step number */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-serif text-3xl sm:text-4xl text-[#F3F1ED]/80 font-normal">
                    {step.number}
                  </span>
                  <span className="text-[10px] font-mono tracking-widest text-[#C9C7FF] uppercase">
                    Stage
                  </span>
                </div>

                <div className="text-xs uppercase tracking-wider text-[#A8A8B0] font-mono mb-2">
                  {step.tagline}
                </div>

                <h3 className="text-xl font-serif text-[#F3F1ED] font-normal mb-3">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#A8A8B0] leading-relaxed font-light">
                  {step.description}
                </p>
              </div>

              {/* Fine timeline connector bar */}
              <div className="mt-8 pt-4 border-t border-[#D8D8E0]/10 flex items-center justify-between text-[10px] text-[#A8A8B0]/50 font-mono">
                <span>Phase 0{index + 1}</span>
                <span>Ready</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
