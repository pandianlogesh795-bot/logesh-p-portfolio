import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, ExternalLink, Sparkles, CheckCircle2, ArrowUpRight, Layers, ShieldCheck } from 'lucide-react';
import { GithubIcon } from '../components/Icons';
import { projectsData, type Project } from '../data/projects';
import { TiltCard } from '../components/TiltCard';
import { Reveal } from '../components/Reveal';
import { MagneticButton } from '../components/MagneticButton';

interface ProjectsSectionProps {
  onPlayHover?: () => void;
  onPlayClick?: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onPlayHover,
  onPlayClick,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [mediMateTab, setMediMateTab] = useState<'overview' | 'architecture' | 'ai'>('overview');

  const filterOptions = ['All', 'Full Stack', 'Internship', 'AI / ML', 'Data Science'];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="relative min-h-screen py-32 px-4 sm:px-6 lg:px-12 bg-[#060609] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Background Watermark */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 pointer-events-none select-none opacity-[0.02] whitespace-nowrap overflow-hidden">
        <span className="font-heading font-black text-[22vw] uppercase outlined-text">
          CREATIONS
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/25 text-rose-300 font-mono text-xs mb-4">
                <Briefcase className="w-3.5 h-3.5 text-rose-400" />
                04 // SELECTED CASE STUDIES
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight">
                Crafted with <span className="text-gradient-aurora">Code & Data</span>
              </h2>
            </Reveal>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => {
                  if (onPlayClick) onPlayClick();
                  setActiveFilter(filter);
                }}
                onMouseEnter={onPlayHover}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-cyan-400/20 text-cyan-300 border border-cyan-400/50 shadow-[0_0_20px_rgba(6,182,212,0.3)]'
                    : 'bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-white border border-white/5'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Case Study: MediMate (Award-Style Presentation) */}
        {activeFilter === 'All' && (
          <div className="mb-16">
            <TiltCard glowColor="rgba(6, 182, 212, 0.28)" className="p-8 sm:p-12 lg:p-14 border-cyan-500/30 bg-gradient-to-br from-[#0c0c16] via-[#090912] to-[#060609]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Left Overview Column */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 font-mono text-[11px] text-cyan-300 font-semibold flex items-center gap-1.5 uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                      FLAGSHIP HEALTHCARE AI
                    </span>
                    <span className="font-mono text-xs text-slate-400">Full-Stack SaaS Application</span>
                  </div>

                  <h3 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
                    MediMate — Medication Management & AI Health Assistant
                  </h3>

                  {/* Interactive Sub-Tabs */}
                  <div className="flex items-center gap-2 p-1 rounded-xl bg-black/40 border border-white/5 w-fit">
                    <button
                      onClick={() => setMediMateTab('overview')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                        mediMateTab === 'overview'
                          ? 'bg-cyan-500/20 text-cyan-300 font-bold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Overview
                    </button>
                    <button
                      onClick={() => setMediMateTab('ai')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                        mediMateTab === 'ai'
                          ? 'bg-indigo-500/20 text-indigo-300 font-bold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Gemini AI Engine
                    </button>
                    <button
                      onClick={() => setMediMateTab('architecture')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                        mediMateTab === 'architecture'
                          ? 'bg-rose-500/20 text-rose-300 font-bold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Architecture
                    </button>
                  </div>

                  {/* Tab Content */}
                  <div className="text-sm text-slate-300 leading-relaxed min-h-[70px]">
                    {mediMateTab === 'overview' && (
                      <p>
                        MediMate solves patient medication non-adherence by merging automated timed dosage alarms, text-to-speech voice reminders, and real-time stock replenishment alerts with an intelligent conversational health assistant.
                      </p>
                    )}
                    {mediMateTab === 'ai' && (
                      <p>
                        Powered by Google Gemini API with guardrails for medical safety. It guides patients on dose schedules, drug interactions, and safe storage instructions, automatically falling back to an offline rule-based triage system when offline.
                      </p>
                    )}
                    {mediMateTab === 'architecture' && (
                      <p>
                        Engineered with a responsive dark glassmorphism UI, Node.js and Express REST services, Web Audio API chime synthesis, Web Speech API vocalization, and adherence analytics charts.
                      </p>
                    )}
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {projectsData[0].highlights.map((hl, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {projectsData[0].tags.map((tag) => (
                      <span key={tag} className="font-mono text-xs px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-cyan-300">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action CTAs */}
                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    <MagneticButton>
                      <a
                        href={projectsData[0].githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-slate-950 font-heading font-bold text-xs tracking-wide transition-all hover:bg-cyan-300 shadow-md"
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>View Repository</span>
                      </a>
                    </MagneticButton>

                    <MagneticButton>
                      <button
                        onClick={() => setSelectedProject(projectsData[0])}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 text-white font-medium text-xs transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 text-cyan-400" />
                        <span>Technical Specs</span>
                      </button>
                    </MagneticButton>
                  </div>
                </div>

                {/* Right Architecture & Metric Visuals */}
                <div className="lg:col-span-5 p-7 rounded-3xl bg-black/60 border border-white/10 space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10 font-mono text-xs text-slate-400">
                    <span className="flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5 text-cyan-400" />
                      Live Architecture Specs
                    </span>
                    <span className="text-emerald-400">Production Ready</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {projectsData[0].metrics?.map((m: { label: string; value: string }, i: number) => (
                      <div key={i} className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 text-center">
                        <p className="font-heading font-black text-xl text-cyan-300">{m.value}</p>
                        <p className="font-mono text-[10px] text-slate-400 mt-1">{m.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-950/40 via-cyan-950/30 to-black/60 border border-cyan-500/20 text-xs text-slate-300 leading-relaxed font-mono space-y-2">
                    <div className="flex items-center gap-2 text-cyan-300 font-bold">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Zero-Failure Offline Resilience</span>
                    </div>
                    <p className="text-[11px] text-slate-400">
                      When network drops occur, MediMate's custom fallback engine automatically manages dosage scheduling locally without interrupting medication alarms.
                    </p>
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>
        )}

        {/* Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <TiltCard className="p-8 h-full flex flex-col justify-between group">
                  <div>
                    {/* Category & Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="font-mono text-[11px] px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-cyan-300">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 font-semibold">
                          Featured
                        </span>
                      )}
                    </div>

                    <h3 className="font-heading font-bold text-xl text-white group-hover:text-cyan-300 transition-colors mb-2 leading-snug">
                      {project.title}
                    </h3>

                    <p className="font-mono text-xs text-indigo-400 mb-3">
                      {project.subtitle}
                    </p>

                    <p className="text-xs text-slate-400 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2 mb-6">
                      {project.highlights.slice(0, 2).map((hl: string, i: number) => (
                        <div key={i} className="flex items-start gap-2 text-[11px] text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((t) => (
                        <span key={t} className="font-mono text-[10px] px-2.5 py-0.5 rounded-md bg-white/[0.04] text-slate-400 border border-white/5">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1.5 font-mono text-xs text-slate-400 hover:text-white transition-colors"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>Source Code</span>
                        </a>
                      )}

                      <button
                        onClick={() => setSelectedProject(project)}
                        className="flex items-center gap-1.5 font-mono text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <span>Deep Dive</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-2xl rounded-3xl bg-[#090912] border border-cyan-500/30 p-6 sm:p-10 shadow-2xl text-slate-100 z-10 space-y-6 max-h-[85vh] overflow-y-auto"
            >
              <div className="flex justify-between items-start">
                <div>
                  <span className="font-mono text-xs px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
                    {selectedProject.category}
                  </span>
                  <h3 className="font-heading font-black text-2xl sm:text-3xl text-white mt-3">
                    {selectedProject.title}
                  </h3>
                  <p className="font-mono text-xs text-indigo-400 mt-1">
                    {selectedProject.subtitle}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedProject.longDescription || selectedProject.description}
              </p>

              <div>
                <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-cyan-400 mb-3">
                  Technical Architecture & Key Highlights:
                </h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  {selectedProject.highlights.map((h: string, i: number) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-cyan-400 font-bold">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {selectedProject.metrics && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {selectedProject.metrics.map((m: { label: string; value: string }, i: number) => (
                    <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/5 text-center">
                      <p className="font-heading font-bold text-base text-cyan-300">{m.value}</p>
                      <p className="font-mono text-[10px] text-slate-400">{m.label}</p>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-cyan-400 text-slate-950 font-bold text-xs hover:bg-cyan-300"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
