import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Globe, Compass, Flame, Brain, Award } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { TiltCard } from '../components/TiltCard';

const ABOUT_PARAGRAPH = "Motivated and detail-oriented B.Tech Artificial Intelligence & Data Science student at Anand Institute of Higher Technology, seeking an internship opportunity to apply technical and problem-solving skills to real-world projects. Disciplined, hardworking, and a quick learner with a strong interest in building a career in Data Science, eager to learn from industry experts and contribute to innovative solutions.";

export const AboutSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.4'],
  });

  const words = ABOUT_PARAGRAPH.split(' ');

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative min-h-screen py-32 px-4 sm:px-6 lg:px-12 bg-[#060609] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Background Watermark */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 pointer-events-none select-none opacity-[0.02] whitespace-nowrap overflow-hidden">
        <span className="font-heading font-black text-[22vw] uppercase outlined-text">
          NARRATIVE
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 font-mono text-xs mb-4">
              <Compass className="w-3.5 h-3.5 text-indigo-400" />
              01 // THE MANIFESTO & ORIGIN
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight">
              Where Algorithmic Logic Meets{' '}
              <span className="text-gradient-aurora">Athletic Tenacity</span>
            </h2>
          </Reveal>
        </div>

        {/* Human Magazine / Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Manifesto with Scroll-Linked Word Luminosity Reveal */}
          <div className="lg:col-span-7 space-y-6">
            <TiltCard glowColor="rgba(99, 102, 241, 0.22)" className="p-8 sm:p-12">
              <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/10 font-mono text-xs text-slate-400">
                <span className="flex items-center gap-2 text-cyan-300 uppercase tracking-widest font-semibold">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  Personal Statement
                </span>
                <span className="text-slate-500">Logesh P • AI & DS</span>
              </div>

              {/* Word-by-Word Scroll Reveal */}
              <p className="text-xl sm:text-2xl md:text-3xl font-light leading-relaxed flex flex-wrap gap-x-2 gap-y-1.5 select-none">
                {words.map((word, idx) => {
                  const start = idx / words.length;
                  const end = start + 1 / words.length;
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  const opacity = useTransform(scrollYProgress, [start, end], [0.22, 1]);
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  const color = useTransform(
                    scrollYProgress,
                    [start, end],
                    ['#475569', '#f8fafc']
                  );

                  return (
                    <motion.span
                      key={idx}
                      style={{ opacity, color }}
                      className="inline-block transition-colors"
                    >
                      {word}
                    </motion.span>
                  );
                })}
              </p>

              <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-slate-400">
                <span>Anand Institute of Higher Technology</span>
                <span className="text-cyan-400">Class of 2024 — 2028</span>
              </div>
            </TiltCard>

            {/* Dual Engine Philosophy: The Engineer & The Athlete */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <TiltCard className="p-7">
                <div className="w-11 h-11 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 text-indigo-400 flex items-center justify-center mb-4">
                  <Brain className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-lg text-white mb-2">
                  The Engineering Core
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Deep foundations in C & C++ procedural algorithms extended into Python, machine learning workflows at DLK Technologies, and building full-stack products like MediMate.
                </p>
              </TiltCard>

              <TiltCard className="p-7">
                <div className="w-11 h-11 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-4">
                  <Flame className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-lg text-white mb-2">
                  The Athlete Mindset
                </h4>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Competing as a 4-time District Kho Kho athlete and winning District Gold in 100m sprint taught me that high-stakes execution requires daily consistency and fast tactical pivots.
                </p>
              </TiltCard>
            </div>
          </div>

          {/* Right Column: Roots, Languages & Authentic Milestones */}
          <div className="lg:col-span-5 space-y-6">
            {/* Roots & Heritage Card */}
            <TiltCard glowColor="rgba(245, 158, 11, 0.2)" className="p-8">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="font-mono text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/25">
                  Origin & Base
                </span>
              </div>

              <h3 className="font-heading font-bold text-2xl text-white mb-1">
                Mamallapuram
              </h3>
              <p className="font-mono text-xs text-cyan-300 mb-4">
                Tamil Nadu, India • Coastal Tech Hub Proximity
              </p>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Rooted in Mamallapuram’s storied history, crafting software for global users. Excited to relocate or contribute via on-site, hybrid, or remote engineering teams.
              </p>

              {/* Language Proficiency */}
              <div className="p-5 rounded-2xl bg-black/40 border border-white/5 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <Globe className="w-4 h-4 text-cyan-400" />
                  <span>Bilingual Fluency</span>
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-white font-medium">Tamil</span>
                    <span className="text-cyan-400 font-mono text-[11px]">Native Speaker</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-r from-cyan-400 to-teal-300" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-white font-medium">English</span>
                    <span className="text-indigo-400 font-mono text-[11px]">Professional Working</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-11/12 h-full bg-gradient-to-r from-indigo-500 to-cyan-400" />
                  </div>
                </div>
              </div>
            </TiltCard>

            {/* Quick Metrics Capsule */}
            <TiltCard glowColor="rgba(244, 63, 94, 0.15)" className="p-7">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-widest mb-4">
                <Award className="w-4 h-4 text-rose-400" />
                <span>Quick Snapshot</span>
              </div>

              <div className="space-y-3 font-mono text-xs text-slate-300">
                <div className="flex justify-between items-center pb-2.5 border-b border-white/5">
                  <span className="text-slate-400 font-sans">College:</span>
                  <span className="text-white font-medium text-right">Anand Institute of Higher Tech</span>
                </div>
                <div className="flex justify-between items-center pb-2.5 border-b border-white/5">
                  <span className="text-slate-400 font-sans">Current Year:</span>
                  <span className="text-emerald-400 font-bold">3rd Year (AI & DS)</span>
                </div>
                <div className="flex justify-between items-center pb-2.5 border-b border-white/5">
                  <span className="text-slate-400 font-sans">Internship:</span>
                  <span className="text-cyan-300">DLK Technologies ML Intern</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 font-sans">Flagship App:</span>
                  <span className="text-rose-300 font-bold">MediMate Healthcare AI</span>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
};
