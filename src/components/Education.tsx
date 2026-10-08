import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

export const Education: React.FC = () => {
  const transitionConfig = {
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  const educations = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Sargodha',
      location: 'Sargodha, Pakistan',
      period: '2017 – 2021',
      details:
        'Four-year comprehensive computer science curriculum encompassing software fundamentals, algorithms, web technologies, and computational architecture.',
    },
    {
      degree: 'ICS – Intermediate in Computer Science',
      institution: 'Punjab Group of Colleges',
      location: 'Pakistan',
      period: '2015 – 2017',
      details:
        'Higher secondary pre-engineering and computing studies focusing on mathematics, computer fundamentals, and programming logic.',
    },
  ];

  return (
    <section id="education" className="py-24 sm:py-32 relative border-b border-[#D8D8E0]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] text-[#A8A8B0] uppercase mb-4 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9C7FF]" />
            <span>03 / Academic Foundations</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#F3F1ED] font-normal tracking-tight">
            Education
          </h2>
        </div>

        {/* Academic Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central line */}
          <div className="absolute left-4 sm:left-8 top-3 bottom-3 w-[1px] bg-gradient-to-b from-[#C9C7FF]/40 via-[#D8D8E0]/20 to-transparent pointer-events-none" />

          <div className="space-y-12 sm:space-y-16">
            {educations.map((item, index) => (
              <motion.div
                key={item.degree + item.period}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ ...transitionConfig, delay: index * 0.15 }}
                className="relative pl-12 sm:pl-20 group"
              >
                {/* Node indicator with subtle lavender pulse */}
                <div className="absolute left-4 sm:left-8 -translate-x-1/2 top-2 flex items-center justify-center">
                  <span className="relative flex h-4 w-4 items-center justify-center">
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#C9C7FF] border border-[#0A0A0C]" />
                  </span>
                </div>

                {/* Content Card */}
                <div className="p-6 sm:p-8 rounded-2xl bg-[#121216]/80 border border-[#D8D8E0]/10 hover:border-[#C9C7FF]/30 transition-all duration-300 shadow-xl group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
                  {/* Top Row: Year Highlight & Degree */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4 pb-4 border-b border-[#D8D8E0]/10">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-serif text-[#F3F1ED] font-normal tracking-wide">
                        {item.degree}
                      </h3>
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-[#A8A8B0] mt-1.5 font-light">
                        <span className="text-[#C9C7FF] font-medium">{item.institution}</span>
                        <span>·</span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-[#A8A8B0]" />
                          {item.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-baseline gap-2 self-start sm:self-auto">
                      <span className="font-serif text-2xl sm:text-3xl text-[#F3F1ED]/90 tracking-tight">
                        {item.period}
                      </span>
                    </div>
                  </div>

                  {/* Program Summary */}
                  <p className="text-[#A8A8B0] text-sm sm:text-base leading-relaxed font-light">
                    {item.details}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
