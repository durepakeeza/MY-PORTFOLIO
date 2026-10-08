import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, ArrowUpRight } from 'lucide-react';

export const Experience: React.FC = () => {
  const transitionConfig = {
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  const experiences = [
    {
      role: 'WordPress Developer',
      company: 'FoxDev Studio',
      location: 'Remote',
      period: 'Oct 2024 – Apr 2026',
      description:
        'Developed and customized responsive WordPress websites using WordPress, Elementor and Elementor Pro. Created modern layouts focused on usability, responsiveness and visual consistency. Customized pages, landing pages and components while optimizing websites across desktop, tablet and mobile devices.',
      skills: [
        'WordPress',
        'Elementor Pro',
        'Responsive Design',
        'Landing Pages',
        'Performance Optimization',
      ],
    },
    {
      role: 'WordPress Developer',
      company: 'CodeHub',
      location: 'Remote',
      period: 'Aug 2022 – Apr 2024',
      description:
        'Developed and maintained WordPress websites, customized layouts and content using WordPress and Elementor, created responsive designs and worked on troubleshooting and frontend improvements.',
      skills: [
        'WordPress',
        'Elementor',
        'Layout Customization',
        'Troubleshooting',
        'Frontend Enhancements',
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 sm:py-32 relative border-b border-[#D8D8E0]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] text-[#A8A8B0] uppercase mb-4 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9C7FF]" />
            <span>02 / Career Trajectory</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#F3F1ED] font-normal tracking-tight">
            Experience
          </h2>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Subtle central vertical line */}
          <div className="absolute left-4 sm:left-8 top-3 bottom-3 w-[1px] bg-gradient-to-b from-[#C9C7FF]/40 via-[#D8D8E0]/20 to-transparent pointer-events-none" />

          <div className="space-y-12 sm:space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company + exp.period}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ ...transitionConfig, delay: index * 0.15 }}
                className="relative pl-12 sm:pl-20 group"
              >
                {/* Node indicator */}
                <div className="absolute left-4 sm:left-8 -translate-x-1/2 top-2 flex items-center justify-center">
                  <span className="relative flex h-4 w-4 items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C9C7FF]/20 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#C9C7FF] border border-[#0A0A0C]" />
                  </span>
                </div>

                {/* Content Card */}
                <div className="p-6 sm:p-8 rounded-2xl bg-[#121216]/80 border border-[#D8D8E0]/10 hover:border-[#C9C7FF]/30 transition-all duration-300 shadow-xl group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
                  {/* Header Row: Role & Period */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 mb-4 pb-4 border-b border-[#D8D8E0]/10">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-serif text-[#F3F1ED] font-normal tracking-wide">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-[#A8A8B0] mt-1 font-light">
                        <span className="text-[#C9C7FF] font-medium">{exp.company}</span>
                        <span>·</span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-[#A8A8B0]" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#D8D8E0] tracking-wider self-start sm:self-auto px-3 py-1 bg-white/[0.03] rounded border border-[#D8D8E0]/10">
                      <Calendar className="w-3 h-3 text-[#C9C7FF]" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Narrative Body */}
                  <p className="text-[#A8A8B0] text-sm sm:text-base leading-relaxed font-light mb-6">
                    {exp.description}
                  </p>

                  {/* Skills tags as clean unboxed text list */}
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#D8D8E0]/80">
                    <span className="text-[#A8A8B0]/60 uppercase tracking-wider font-mono text-[10px]">
                      Key Highlights:
                    </span>
                    {exp.skills.map((skill, sIdx) => (
                      <React.Fragment key={skill}>
                        <span className="text-[#F3F1ED]/90">{skill}</span>
                        {sIdx < exp.skills.length - 1 && (
                          <span className="text-[#C9C7FF]/60 select-none">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
