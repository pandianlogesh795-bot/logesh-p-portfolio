import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Printer, Check, Copy, ExternalLink, GraduationCap, Award, Briefcase, Mail } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('pandianlogesh795@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0e0e17] border border-cyan-500/30 shadow-[0_0_50px_rgba(34,211,238,0.2)] text-slate-100 z-10 flex flex-col"
          >
            {/* Header Bar */}
            <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0e0e17]/95 backdrop-blur-md border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center font-heading font-black text-white text-lg">
                  LP
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-white">Logesh P — Curriculum Vitae</h3>
                  <p className="font-mono text-xs text-cyan-400">B.Tech AI & Data Science • Anand Institute</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 transition-colors"
                  title="Print Resume"
                >
                  <Printer className="w-3.5 h-3.5 text-cyan-400" />
                  Print
                </button>

                <a
                  href="/resume.pdf"
                  download="Logesh_P_Resume.pdf"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-semibold text-xs transition-all shadow-md"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download PDF
                </a>

                <button
                  onClick={onClose}
                  className="p-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Resume Content Body */}
            <div className="p-6 sm:p-10 space-y-8 font-sans print:p-0 print:bg-white print:text-black">
              {/* Top Resume Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    LOGESH P
                  </h1>
                  <p className="text-cyan-400 font-medium text-base mt-1">
                    B.Tech Artificial Intelligence & Data Science Student
                  </p>
                  <p className="text-slate-400 text-xs sm:text-sm mt-1">
                    Mamallapuram, Tamil Nadu, India • Anand Institute of Higher Technology
                  </p>
                </div>

                <div className="flex flex-col gap-1.5 text-xs font-mono text-slate-300">
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-cyan-400" />
                    <span>pandianlogesh795@gmail.com</span>
                    <button
                      onClick={copyEmail}
                      className="p-1 hover:text-cyan-300 transition-colors"
                      title="Copy email address"
                    >
                      {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <ExternalLink className="w-3.5 h-3.5 text-violet-400" />
                    <a
                      href="https://linkedin.com/in/logesh-p-6297a639a"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-cyan-300 underline underline-offset-2"
                    >
                      linkedin.com/in/logesh-p-6297a639a
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <ExternalLink className="w-3.5 h-3.5 text-pink-400" />
                    <a
                      href="https://github.com/pandianlogesh795-bot"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-cyan-300 underline underline-offset-2"
                    >
                      github.com/pandianlogesh795-bot
                    </a>
                  </div>
                </div>
              </div>

              {/* Professional Summary */}
              <div>
                <h4 className="font-heading font-bold text-sm tracking-wider uppercase text-cyan-400 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" /> Professional Summary
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Motivated and detail-oriented B.Tech Artificial Intelligence & Data Science student at Anand Institute of Higher Technology, seeking an internship opportunity to apply technical and problem-solving skills to real-world projects. Hands-on exposure to Machine Learning through an internship at DLK Technologies and a 7-month diploma course in C and C++. Disciplined, hardworking, and a quick learner with a strong interest in building a career in Data Science, eager to learn from industry experts and contribute to innovative solutions.
                </p>
              </div>

              {/* Education */}
              <div>
                <h4 className="font-heading font-bold text-sm tracking-wider uppercase text-violet-400 mb-3 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-violet-400" /> Education
                </h4>
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                      <span className="font-semibold text-white">B.Tech — Artificial Intelligence & Data Science</span>
                      <span className="font-mono text-xs text-violet-400">2024 — 2028 (Currently Pursuing, 3rd Year)</span>
                    </div>
                    <p className="text-slate-400 text-xs mt-1">Anand Institute of Higher Technology, Kazhipattur, Chengalpattu</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex justify-between items-center">
                      <span className="text-slate-300">12th Standard (HSC)</span>
                      <span className="font-mono font-bold text-cyan-400">75%</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex justify-between items-center">
                      <span className="text-slate-300">10th Standard (SSLC)</span>
                      <span className="font-mono font-bold text-cyan-400">81%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Skills */}
              <div>
                <h4 className="font-heading font-bold text-sm tracking-wider uppercase text-pink-400 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-pink-400" /> Technical Skills
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="space-y-1.5">
                    <p className="font-mono text-slate-400">Programming Languages:</p>
                    <p className="text-white font-medium">Python, C, C++, SQL (Basic), JavaScript</p>
                  </div>
                  <div className="space-y-1.5">
                    <p className="font-mono text-slate-400">AI & Data Specializations:</p>
                    <p className="text-white font-medium">Machine Learning, Artificial Intelligence, Data Science, Problem Solving</p>
                  </div>
                  <div className="space-y-1.5">
                    <p className="font-mono text-slate-400">Libraries & Tools:</p>
                    <p className="text-white font-medium">Scikit-Learn, Pandas, NumPy, Git & GitHub, React, Node.js</p>
                  </div>
                  <div className="space-y-1.5">
                    <p className="font-mono text-slate-400">Soft Skills:</p>
                    <p className="text-white font-medium">Communication, Teamwork, Time Management, Adaptability, Stamina</p>
                  </div>
                </div>
              </div>

              {/* Projects & Experience */}
              <div>
                <h4 className="font-heading font-bold text-sm tracking-wider uppercase text-cyan-400 mb-3 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-cyan-400" /> Featured Projects & Experience
                </h4>
                <div className="space-y-3">
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                    <div className="flex justify-between items-center text-sm font-semibold text-white">
                      <span>MediMate — AI Healthcare & Prescription Assistant</span>
                      <span className="font-mono text-xs text-cyan-400">Lead Developer</span>
                    </div>
                    <p className="text-slate-300 text-xs mt-1 leading-relaxed">
                      Designed and developed a healthcare web application integrated with Google Gemini API, featuring automated dosage alarm reminders, low-stock warnings, and adherence tracking.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                    <div className="flex justify-between items-center text-sm font-semibold text-white">
                      <span>Machine Learning Intern — DLK Technologies</span>
                      <span className="font-mono text-xs text-violet-400">1 Month Intensive</span>
                    </div>
                    <p className="text-slate-300 text-xs mt-1 leading-relaxed">
                      Hands-on experience in machine learning pipelines, data cleaning, exploratory analysis, and model evaluation. Completed the DLK workshop with certification.
                    </p>
                  </div>
                </div>
              </div>

              {/* Achievements & Certifications */}
              <div>
                <h4 className="font-heading font-bold text-sm tracking-wider uppercase text-amber-400 mb-3 flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-400" /> Key Achievements & Sports
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-slate-200">
                    🏆 <span className="font-bold text-amber-300">Kho Kho Zonal Meets</span> & 4x District Athlete
                  </div>
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-slate-200">
                    🥇 <span className="font-bold text-amber-300">District Winner</span> — 100m Athletics Champion
                  </div>
                  <div className="p-3 rounded-xl bg-violet-500/10 border border-violet-500/20 text-slate-200">
                    📜 <span className="font-bold text-violet-300">CTC DCA & DCP</span> — 7-Month Diploma in C & C++
                  </div>
                  <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-slate-200">
                    📜 <span className="font-bold text-cyan-300">DLK Technologies</span> — Machine Learning Certified
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div className="pt-2 border-t border-white/10 text-xs flex items-center justify-between text-slate-400">
                <div>
                  <span className="font-semibold text-white">Languages:</span> Tamil (Native Speaker), English (Professional Working Proficiency)
                </div>
                <div className="font-mono text-[11px]">
                  Place: Mamallapuram, Tamil Nadu
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
