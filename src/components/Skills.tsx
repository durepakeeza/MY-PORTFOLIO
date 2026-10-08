import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Layout, Globe2, Palette, Wrench, Sparkles, Check } from 'lucide-react';

interface SkillGroup {
  id: string;
  category: string;
  icon: React.ReactNode;
  summary: string;
  skills: { name: string; note: string }[];
}

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const transitionConfig = {
    duration: 0.7,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  const skillGroups: SkillGroup[] = [
    {
      id: 'frontend',
      category: 'Frontend',
      icon: <Layout className="w-4 h-4 text-[#C9C7FF]" />,
      summary: 'Semantic structures, modern styling, dynamic interactions and flexible responsive layouts.',
      skills: [
        { name: 'HTML5', note: 'Semantic structure, accessibility & clean markup' },
        { name: 'CSS3', note: 'Modern layouts, flexbox, grid, transforms & animations' },
        { name: 'JavaScript', note: 'DOM manipulation, events, asynchronous logic & APIs' },
        { name: 'Responsive Web Design', note: 'Fluid viewports across mobile, tablet & desktop' },
      ],
    },
    {
      id: 'wordpress',
      category: 'WordPress',
      icon: <Globe2 className="w-4 h-4 text-[#C9C7FF]" />,
      summary: 'Bespoke website creation, deep customization, and high-conversion landing pages.',
      skills: [
        { name: 'WordPress', note: 'Architecture, theme setup, plugin management' },
        { name: 'Elementor', note: 'Visual page builder workflows & responsive sections' },
        { name: 'Elementor Pro', note: 'Theme builder, dynamic content, popups & templates' },
        { name: 'Website Development', note: 'Full-cycle site creation from wireframe to launch' },
        { name: 'Website Customization', note: 'Custom CSS tweaks, layout overhauls & feature adds' },
        { name: 'Landing Page Development', note: 'Conversion-centric, lightning-fast landing pages' },
      ],
    },
    {
      id: 'design',
      category: 'Design & Optimization',
      icon: <Palette className="w-4 h-4 text-[#C9C7FF]" />,
      summary: 'Aesthetic polish, search foundation, high-speed loading and cross-browser consistency.',
      skills: [
        { name: 'UI/UX Design', note: 'Visual hierarchy, typography scale & intuitive user flows' },
        { name: 'Basic SEO', note: 'Meta optimization, crawlable architecture & heading rules' },
        { name: 'Performance Optimization', note: 'Asset minification, lazy loading & core web vitals' },
        { name: 'Cross-Browser Compatibility', note: 'Tested across Safari, Chrome, Firefox & Edge' },
      ],
    },
    {
      id: 'tools',
      category: 'Tools & Workflow',
      icon: <Wrench className="w-4 h-4 text-[#C9C7FF]" />,
      summary: 'Version control and professional code editor toolchain.',
      skills: [
        { name: 'Git', note: 'Branching, committing & local version management' },
        { name: 'GitHub', note: 'Repository hosting, collaborative reviews & workflows' },
        { name: 'Visual Studio Code', note: 'Configured environment, linting & rapid debugging' },
      ],
    },
  ];

  const displayedGroups =
    activeTab === 'all'
      ? skillGroups
      : skillGroups.filter((g) => g.id === activeTab);

  return (
    <section id="skills" className="py-24 sm:py-32 relative border-b border-[#D8D8E0]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20">
          <div>
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] text-[#A8A8B0] uppercase mb-4 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9C7FF]" />
              <span>04 / Technical Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#F3F1ED] font-normal tracking-tight">
              Skills &amp; Expertise
            </h2>
          </div>

          {/* Interactive filter segmented buttons (Section 1A compliant: functional tabs) */}
          <div className="flex items-center gap-1.5 p-1 bg-[#121216] border border-[#D8D8E0]/15 rounded-lg overflow-x-auto self-start md:self-auto max-w-full">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                activeTab === 'all'
                  ? 'bg-[#F3F1ED] text-[#0A0A0C] shadow-sm'
                  : 'text-[#A8A8B0] hover:text-[#F3F1ED]'
              }`}
            >
              All Expertise
            </button>
            {skillGroups.map((group) => (
              <button
                key={group.id}
                onClick={() => setActiveTab(group.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  activeTab === group.id
                    ? 'bg-[#F3F1ED] text-[#0A0A0C] shadow-sm'
                    : 'text-[#A8A8B0] hover:text-[#F3F1ED]'
                }`}
              >
                {group.category}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedGroups.map((group, gIdx) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ ...transitionConfig, delay: gIdx * 0.1 }}
              className="p-8 rounded-2xl bg-[#121216]/70 border border-[#D8D8E0]/10 hover:border-[#C9C7FF]/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-[#D8D8E0]/10">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#C9C7FF]/10 flex items-center justify-center">
                      {group.icon}
                    </div>
                    <h3 className="text-xl font-serif text-[#F3F1ED] font-normal tracking-wide">
                      {group.category}
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-[#C9C7FF]">
                    {group.skills.length} Capabilities
                  </span>
                </div>

                <p className="text-xs text-[#A8A8B0] leading-relaxed mb-6 font-light">
                  {group.summary}
                </p>

                {/* Skills List: Refined typography instead of percentage bars */}
                <div className="space-y-4">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group/item flex items-baseline justify-between gap-4 py-2 border-b border-[#D8D8E0]/5 hover:border-[#C9C7FF]/20 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C9C7FF]/40 group-hover/item:bg-[#C9C7FF] transition-colors" />
                        <span className="text-sm font-medium text-[#F3F1ED] group-hover/item:text-[#C9C7FF] transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[11px] text-[#A8A8B0] text-right truncate max-w-[200px] sm:max-w-[260px] font-light">
                        {skill.note}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Signature */}
              <div className="mt-8 pt-4 border-t border-[#D8D8E0]/5 flex items-center justify-between text-[10px] text-[#A8A8B0]/60 font-mono tracking-widest uppercase">
                <span>Production Proven</span>
                <span>Crafted by Hand</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
