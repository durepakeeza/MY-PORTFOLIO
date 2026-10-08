import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Smartphone, Monitor } from 'lucide-react';

export interface ProjectData {
  id: string;
  number: string;
  title: string;
  category: string;
  tech: string[];
  image: string;
  shortDesc: string;
  overview: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  metrics: { label: string; value: string }[];
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#0A0A0C]/90 backdrop-blur-xl overflow-y-auto animate-in fade-in duration-300"
    >
      <div className="relative w-full max-w-4xl bg-[#121216] border border-[#D8D8E0]/20 rounded-2xl shadow-2xl overflow-hidden my-auto">
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#121216]/95 backdrop-blur-md border-b border-[#D8D8E0]/10">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#C9C7FF]">
              Case Study {project.number}
            </span>
            <span className="text-[#A8A8B0]/40">·</span>
            <span className="text-xs uppercase tracking-wider text-[#A8A8B0]">
              {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#A8A8B0] hover:text-[#F3F1ED] hover:bg-white/[0.05] rounded-full transition-colors"
            aria-label="Close case study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="max-h-[82vh] overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Main Visual Presentation */}
          <div className="relative rounded-xl overflow-hidden border border-[#D8D8E0]/15 bg-[#0A0A0C] aspect-[16/9] shadow-2xl">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Title & Tech */}
          <div>
            <h2 id="case-study-title" className="text-2xl sm:text-4xl font-serif text-[#F3F1ED] font-normal mb-3">
              {project.title}
            </h2>

            {/* Unboxed tech stack metadata */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#C9C7FF]">
              {project.tech.map((t, idx) => (
                <React.Fragment key={t}>
                  <span>{t}</span>
                  {idx < project.tech.length - 1 && (
                    <span className="text-[#A8A8B0]/40">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Overview */}
          <div className="space-y-4 text-sm sm:text-base text-[#A8A8B0] leading-relaxed font-light">
            <p>{project.overview}</p>
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#D8D8E0]/10">
            <div className="p-5 rounded-xl bg-white/[0.02] border border-[#D8D8E0]/10">
              <h4 className="text-sm font-mono uppercase tracking-wider text-[#F3F1ED] mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9C7FF]" />
                The Challenge
              </h4>
              <p className="text-xs sm:text-sm text-[#A8A8B0] leading-relaxed font-light">
                {project.challenge}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white/[0.02] border border-[#D8D8E0]/10">
              <h4 className="text-sm font-mono uppercase tracking-wider text-[#F3F1ED] mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9C7FF]" />
                The Solution &amp; Engineering
              </h4>
              <p className="text-xs sm:text-sm text-[#A8A8B0] leading-relaxed font-light">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Deliverables List */}
          <div className="pt-4 border-t border-[#D8D8E0]/10">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#F3F1ED] mb-4">
              Key Deliverables &amp; Architectural Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.deliverables.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 text-xs text-[#A8A8B0]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#C9C7FF] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Metrics summary */}
          <div className="p-5 rounded-xl bg-[#0A0A0C] border border-[#D8D8E0]/10 flex flex-wrap items-center justify-around gap-6">
            {project.metrics.map((m) => (
              <div key={m.label} className="text-center">
                <div className="font-serif text-2xl text-[#F3F1ED] font-normal">
                  {m.value}
                </div>
                <div className="text-[10px] tracking-wider uppercase font-mono text-[#A8A8B0]">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Modal Footer Actions */}
          <div className="pt-4 flex items-center justify-end gap-4 border-t border-[#D8D8E0]/10">
            <button
              onClick={onClose}
              className="px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-[#A8A8B0] hover:text-[#F3F1ED] transition-colors"
            >
              Close
            </button>
            <a
              href="#contact"
              onClick={onClose}
              className="px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-[#0A0A0C] bg-[#F3F1ED] hover:bg-[#C9C7FF] rounded-[2px] transition-colors"
            >
              Inquire About Similar Build
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
