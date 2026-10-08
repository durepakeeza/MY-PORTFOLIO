import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Eye } from 'lucide-react';
import { ProjectModal, ProjectData } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const transitionConfig = {
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  const projects: ProjectData[] = [
    {
      id: 'ecommerce-aeterna',
      number: '01',
      title: 'E-Commerce Website',
      category: 'Commerce Architecture',
      tech: ['WordPress', 'WooCommerce', 'Elementor Pro'],
      image: '/src/assets/images/project_ecommerce_luxury_1791474990023.jpg',
      shortDesc:
        'A bespoke luxury digital storefront crafted for high-end artisanal products, featuring custom catalog hierarchies, seamless checkout, and fluid responsiveness.',
      overview:
        'Engineered an immersive e-commerce shopping experience built on WordPress and WooCommerce. The interface pairs editorial typography with high-fidelity product galleries, custom micro-interactions, and high-performance caching for instant catalog navigation.',
      challenge:
        'Balancing high-resolution editorial photography and bespoke brand aesthetics with lightning-fast load times and seamless mobile checkout conversions.',
      solution:
        'Architected custom Elementor Pro single-product templates, optimized image asset pipelines, streamlined WooCommerce checkout fields, and implemented rigorous responsive layouts across all mobile screen widths.',
      deliverables: [
        'Custom WooCommerce product archives & single-product templates',
        'Mobile-first responsive drawer cart & checkout flow',
        'Performance optimization achieving rapid Core Web Vitals',
        'Tailored Elementor Pro header, footer & mega-menu components',
      ],
      metrics: [
        { label: 'Responsive Fidelity', value: '100%' },
        { label: 'Platform', value: 'WooCommerce' },
        { label: 'Custom Templates', value: '12+' },
      ],
    },
    {
      id: 'portfolio-aleksei',
      number: '02',
      title: 'Personal Portfolio Website',
      category: 'Creative Editorial Showcase',
      tech: ['WordPress', 'Elementor Pro', 'HTML', 'CSS', 'JavaScript'],
      image: '/src/assets/images/project_portfolio_studio_1791475002295.jpg',
      shortDesc:
        'An avant-garde editorial personal portfolio for a creative director, featuring asymmetric typography, custom grid alignments, and refined micro-interactions.',
      overview:
        'Designed and developed a sophisticated portfolio experience tailored for creative storytelling. Leveraging WordPress and Elementor Pro with custom CSS and JavaScript extensions, the site achieves high-fashion editorial presence with zero layout shift.',
      challenge:
        'Translating complex asymmetrical print-inspired magazine aesthetics into a fully responsive, pixel-perfect web layout that adapts gracefully without breaking.',
      solution:
        'Utilized custom CSS grid and flex structures combined with Elementor Pro theme builder. Crafted bespoke cursor and hover states in JavaScript to emphasize visual hierarchy and artistic intent.',
      deliverables: [
        'Asymmetric editorial layout system with fluid typography',
        'Custom JavaScript micro-interactions and smooth scroll transitions',
        'Dynamic case study showcase templates in Elementor Pro',
        'Cross-browser tested across Safari, Chrome, and Firefox',
      ],
      metrics: [
        { label: 'Visual Hierarchy', value: 'Editorial' },
        { label: 'Builder', value: 'Elementor Pro' },
        { label: 'Custom CSS', value: 'Handcrafted' },
      ],
    },
    {
      id: 'notes-lumina',
      number: '03',
      title: 'Notes Taking App',
      category: 'Interface & Productivity App',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI'],
      image: '/src/assets/images/project_notes_app_1791475012575.jpg',
      shortDesc:
        'A sleek minimalist dark-mode note-taking application interface with markdown typography, distraction-free writing pane, and serene organizational flows.',
      overview:
        'Engineered a focused productivity interface emphasizing typographic clarity and spatial tranquility. Built with clean semantic HTML5, modern CSS3 styling, and modular JavaScript for intuitive note creation and organization.',
      challenge:
        'Designing a dense data application (notebooks, tags, active editor, card lists) that remains calm, spacious, and delightful on both mobile and widescreen desktop views.',
      solution:
        'Implemented collapsible navigation columns, subtle lavender cursor focus rings, responsive typography scale, and instant state handling using native JavaScript and CSS grid.',
      deliverables: [
        'Modular sidebar, notes list, and markdown reading/editing panes',
        'Distraction-free dark mode theme with soft lavender accents',
        'Semantic HTML5 structure ensuring high accessibility standards',
        'Zero external layout bloat for maximum execution speed',
      ],
      metrics: [
        { label: 'Architecture', value: 'Vanilla JS' },
        { label: 'Style System', value: 'Modern CSS3' },
        { label: 'Mode', value: 'Dark Theme' },
      ],
    },
  ];

  return (
    <section id="projects" className="py-24 sm:py-32 relative border-b border-[#D8D8E0]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
          <div>
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] text-[#A8A8B0] uppercase mb-4 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9C7FF]" />
              <span>05 / Curated Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#F3F1ED] font-normal tracking-tight">
              Selected Work
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#A8A8B0] max-w-md font-light leading-relaxed">
            A selection of hand-crafted WordPress platforms, bespoke client themes, and responsive frontend interfaces built with precision.
          </p>
        </div>

        {/* Projects List / Case Studies */}
        <div className="space-y-20 sm:space-y-28">
          {projects.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ ...transitionConfig, delay: 0.1 }}
                className="group relative"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                    isReversed ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Visual Preview Container */}
                  <div
                    className={`lg:col-span-7 relative ${
                      isReversed ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div
                      onClick={() => setSelectedProject(project)}
                      className="cursor-pointer relative rounded-2xl overflow-hidden border border-[#D8D8E0]/15 bg-[#121216] shadow-2xl transition-all duration-500 group-hover:border-[#C9C7FF]/40 group-hover:shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
                    >
                      {/* Browser Mockup Top Hairline */}
                      <div className="flex items-center justify-between px-4 py-2.5 bg-[#0A0A0C]/90 border-b border-[#D8D8E0]/10 text-[10px] text-[#A8A8B0] font-mono">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-[#D8D8E0]/30" />
                          <span className="w-2 h-2 rounded-full bg-[#D8D8E0]/20" />
                          <span className="w-2 h-2 rounded-full bg-[#C9C7FF]/40" />
                        </div>
                        <span className="text-[#A8A8B0]/60 tracking-wider">
                          CASE_{project.number} // {project.category.toUpperCase()}
                        </span>
                        <div className="flex items-center gap-1 text-[#C9C7FF]">
                          <Eye className="w-3 h-3" />
                          <span>Inspect</span>
                        </div>
                      </div>

                      {/* Image Preview with Hover Zoom */}
                      <div className="relative aspect-[16/9] overflow-hidden bg-[#0A0A0C]">
                        <img
                          src={project.image}
                          alt={project.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover filter contrast-[1.02] transform transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        {/* Hover Overlay Button */}
                        <div className="absolute inset-0 bg-[#0A0A0C]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                          <span className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#0A0A0C] bg-[#F3F1ED] rounded-[2px] shadow-2xl">
                            <span>View Case Study</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Details Description */}
                  <div
                    className={`lg:col-span-5 flex flex-col justify-center ${
                      isReversed ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    {/* Index & Category (Zero-pill text) */}
                    <div className="flex items-center gap-3 text-xs font-mono text-[#C9C7FF] mb-3">
                      <span>{project.number}</span>
                      <span className="text-[#D8D8E0]/30">/</span>
                      <span className="tracking-wider text-[#A8A8B0]">
                        {project.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#F3F1ED] font-normal tracking-tight mb-4 group-hover:text-[#C9C7FF] transition-colors">
                      {project.title}
                    </h3>

                    {/* Tech Stack (Unboxed metadata with separators) */}
                    <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-[#D8D8E0] mb-5 font-light">
                      {project.tech.map((t, tIdx) => (
                        <React.Fragment key={t}>
                          <span>{t}</span>
                          {tIdx < project.tech.length - 1 && (
                            <span className="text-[#C9C7FF]/50 select-none">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>

                    {/* Short Description */}
                    <p className="text-[#A8A8B0] text-sm sm:text-base leading-relaxed font-light mb-8">
                      {project.shortDesc}
                    </p>

                    {/* Interactive Action Button */}
                    <div>
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-2.5 text-xs font-semibold tracking-wider uppercase text-[#F3F1ED] hover:text-[#C9C7FF] pb-1 border-b border-[#D8D8E0]/30 hover:border-[#C9C7FF] transition-all group/btn"
                      >
                        <span>View Project Details</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
