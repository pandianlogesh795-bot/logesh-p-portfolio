import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Eye, RotateCw, CheckCircle, GraduationCap, Briefcase, Award } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { MagneticButton } from '../components/MagneticButton';

interface ResumeSectionProps {
  onOpenResumeModal: () => void;
  onPlayHover?: () => void;
  onPlayClick?: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({
  onOpenResumeModal,
  onPlayHover,
  onPlayClick,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    if (onPlayClick) onPlayClick();
    setIsFlipped((prev: boolean) => !prev);
  };

  return (
    <section
      id="resume"
      className="relative min-h-screen py-32 px-4 sm:px-6 lg:px-12 bg-[#060609] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Background Watermark */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 pointer-events-none select-none opacity-[0.02] whitespace-nowrap overflow-hidden">
        <span className="font-heading font-black text-[22vw] uppercase outlined-text">
          RESUME
        </span>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 font-mono text-xs mb-4">
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              07 // FORMAL DOSSIER & CV
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight mb-4">
              Curriculum Vitae & <span className="text-gradient-aurora">Record</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Explore my technical background, academic coursework, and athletic achievements in an interactive 3D card format or download the official PDF.
            </p>
          </Reveal>
        </div>

        {/* 3D Flip Card Container */}
        <div className="flex flex-col items-center">
          <div
            className="w-full max-w-2xl h-[470px] cursor-pointer select-none perspective-[1200px] mb-10"
            onClick={toggleFlip}
            onMouseEnter={onPlayHover}
          >
            <motion.div
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-full shadow-2xl rounded-3xl"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Card FRONT: Executive Summary */}
              <div
                className="absolute inset-0 rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[#0e0e18] via-[#0a0a14] to-[#060609] border border-cyan-500/30 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.7)]"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <div>
                  <div className="flex items-start justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center font-heading font-black text-2xl text-white shadow-xl">
                        LP
                      </div>
                      <div>
                        <h3 className="font-heading font-black text-2xl sm:text-3xl text-white">LOGESH P</h3>
                        <p className="font-mono text-xs text-cyan-300">B.Tech AI & Data Science Candidate</p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFlip();
                      }}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-xs font-mono text-slate-300 hover:text-white border border-white/10 transition-colors"
                    >
                      <RotateCw className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Flip Card</span>
                    </button>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                      <p className="font-mono text-[11px] text-cyan-400 uppercase tracking-wider mb-1 font-semibold">Academic Specialization</p>
                      <p className="text-sm font-semibold text-white">Anand Institute of Higher Technology</p>
                      <p className="text-xs text-slate-400 mt-0.5">B.Tech in Artificial Intelligence & Data Science (2024 - 2028)</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                      <p className="font-mono text-[11px] text-rose-400 uppercase tracking-wider mb-1 font-semibold">Hands-on Experience</p>
                      <p className="text-sm font-semibold text-white">MediMate Healthcare SaaS & DLK Technologies ML Intern</p>
                      <p className="text-xs text-slate-400 mt-0.5">Gemini AI Full-Stack Integration + Predictive Machine Learning Pipelines</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>Direct: pandianlogesh795@gmail.com</span>
                  </div>
                  <span className="font-mono text-[11px] text-cyan-400">Click anywhere to flip ↻</span>
                </div>
              </div>

              {/* Card BACK: Deep Highlights & Key Milestones */}
              <div
                className="absolute inset-0 rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[#121024] via-[#0d0c1c] to-[#070612] border border-indigo-500/30 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.7)]"
                style={{
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                }}
              >
                <div>
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h4 className="font-heading font-black text-2xl text-white">Detailed Credentials</h4>
                      <p className="font-mono text-xs text-indigo-300">Technical Foundation & Sportsmanship</p>
                    </div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFlip();
                      }}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-xs font-mono text-slate-300 hover:text-white border border-white/10"
                    >
                      <RotateCw className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Flip Back</span>
                    </button>
                  </div>

                  <div className="space-y-3.5 text-xs text-slate-300">
                    <div className="flex items-start gap-3">
                      <GraduationCap className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-white text-sm">7-Month CTC Programming Diploma:</span>
                        <p className="text-slate-400 text-xs mt-0.5">Procedural & object-oriented C and C++ programming with algorithms.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Briefcase className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-white text-sm">Machine Learning Workshop:</span>
                        <p className="text-slate-400 text-xs mt-0.5">DLK Technologies certified practical predictive modeling.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Award className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-white text-sm">Kho Kho Zonal Player & Sprinter:</span>
                        <p className="text-stone-400 text-xs mt-0.5">Competed in 4x District tournaments, Zonal meets, and won 100m Athletics Gold.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="font-mono text-xs text-slate-400">Mamallapuram, Tamil Nadu</span>
                  <span className="font-mono text-xs text-cyan-300 font-semibold">Class of 2028</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <MagneticButton>
              <button
                onClick={() => {
                  if (onPlayClick) onPlayClick();
                  onOpenResumeModal();
                }}
                onMouseEnter={onPlayHover}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-500 text-slate-950 font-heading font-bold text-xs tracking-wide transition-all shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)]"
              >
                <Eye className="w-4 h-4 text-slate-950" />
                <span>Open Interactive CV</span>
              </button>
            </MagneticButton>

            <MagneticButton>
              <a
                href="/resume.pdf"
                download="Logesh_P_Resume.pdf"
                onMouseEnter={onPlayHover}
                onClick={onPlayClick}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 text-white font-heading font-semibold text-xs tracking-wide transition-colors"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Official PDF</span>
              </a>
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
};
