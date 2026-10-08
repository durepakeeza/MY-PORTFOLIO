import React from 'react';
import { motion } from 'motion/react';
import { Globe, Layers, Laptop, Zap, Settings, Paintbrush } from 'lucide-react';

export const Services: React.FC = () => {
  const transitionConfig = {
    duration: 0.7,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  const services = [
    {
      number: '01',
      title: 'WordPress Development',
      description:
        'Complete end-to-end WordPress websites built with security, robust content structures, and seamless administrative control.',
      icon: <Globe className="w-5 h-5 text-[#C9C7FF]" />,
    },
    {
      number: '02',
      title: 'Elementor Website Development',
      description:
        'Custom page layouts and theme systems built with Elementor & Elementor Pro, offering visual editing without compromising code cleanliness.',
      icon: <Layers className="w-5 h-5 text-[#C9C7FF]" />,
    },
    {
      number: '03',
      title: 'Responsive Frontend Development',
      description:
        'Pixel-accurate translation of designs into semantic HTML5, modern CSS3, and JavaScript that adapt flawlessly across every screen size.',
      icon: <Laptop className="w-5 h-5 text-[#C9C7FF]" />,
    },
    {
      number: '04',
      title: 'Landing Page Development',
      description:
        'Focused, high-impact landing pages engineered to highlight key offers, build brand trust, and drive user engagement.',
      icon: <Zap className="w-5 h-5 text-[#C9C7FF]" />,
    },
    {
      number: '05',
      title: 'Website Customization',
      description:
        'Tailoring existing WordPress themes, restructuring difficult layouts, integrating custom styles, and resolving frontend bottlenecks.',
      icon: <Settings className="w-5 h-5 text-[#C9C7FF]" />,
    },
    {
      number: '06',
      title: 'UI-focused Website Design',
      description:
        'Thoughtful visual hierarchies, subtle typography scales, and elegant micro-interactions that elevate digital brand perception.',
      icon: <Paintbrush className="w-5 h-5 text-[#C9C7FF]" />,
    },
  ];

  return (
    <section id="services" className="py-24 sm:py-32 relative border-b border-[#D8D8E0]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20">
          <div>
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] text-[#A8A8B0] uppercase mb-4 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9C7FF]" />
              <span>06 / Service Offerings</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#F3F1ED] font-normal tracking-tight">
              What I Can Build
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#A8A8B0] max-w-md font-light leading-relaxed">
            Reliable engineering services tailored for agencies, founders, and creative businesses seeking refined digital execution.
          </p>
        </div>

        {/* 6 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ ...transitionConfig, delay: index * 0.08 }}
              className="group p-8 rounded-2xl bg-[#121216]/70 border border-[#D8D8E0]/10 hover:border-[#C9C7FF]/35 transition-all duration-300 flex flex-col justify-between hover:bg-[#121216] hover:shadow-2xl"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-[#D8D8E0]/10 flex items-center justify-center group-hover:border-[#C9C7FF]/40 transition-colors">
                    {service.icon}
                  </div>
                  <span className="font-mono text-xs text-[#C9C7FF]/70">
                    {service.number}
                  </span>
                </div>

                <h3 className="text-xl font-serif text-[#F3F1ED] font-normal mb-3 group-hover:text-[#C9C7FF] transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-[#A8A8B0] leading-relaxed font-light">
                  {service.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#D8D8E0]/5 flex items-center justify-between text-[11px] text-[#A8A8B0]/60">
                <span className="tracking-wider uppercase font-mono">Precision Crafted</span>
                <span className="group-hover:translate-x-1 transition-transform text-[#C9C7FF]">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
