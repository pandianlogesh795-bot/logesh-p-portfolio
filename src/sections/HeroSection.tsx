import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Sparkles, MapPin, ArrowUpRight, Trophy } from 'lucide-react';
import { HeroCanvas } from '../components/HeroCanvas';
import { SplitText } from '../components/SplitText';
import { MagneticButton } from '../components/MagneticButton';

interface HeroSectionProps {
  onOpenResume: () => void;
  onPlayHover?: () => void;
  onPlayClick?: () => void;
}

const ROLES = [
  'AI & Data Science Student',
  'Lead Creator of MediMate',
  'Python & Machine Learning Developer',
  'District Winner — 100m Athletics Gold',
  'Kho Kho Zonal Player & Strategist',
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenResume,
  onPlayHover,
  onPlayClick,
}) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    const speed = isDeleting ? 30 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedRole(currentRole.substring(0, displayedRole.length + 1));
        if (displayedRole === currentRole) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayedRole(currentRole.substring(0, displayedRole.length - 1));
        if (displayedRole === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayedRole, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-24 px-4 sm:px-6 lg:px-12 overflow-hidden warm-studio-bg grain-subtle"
    >
      {/* Warm Ambient Floating Particles (No Spinning Rings) */}
      <HeroCanvas />

      {/* Subtle Background Watermark Typography */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-[0.02]">
        <span className="font-heading font-black text-[22vw] uppercase tracking-tighter leading-none outlined-text whitespace-nowrap">
          LOGESH P
        </span>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col items-center text-center">
        {/* Top Status Capsule */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(245,158,11,0.15)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400" />
          </span>
          <span className="font-mono text-[11px] font-semibold text-amber-300 tracking-wider uppercase">
            Available for Internships • 2026
          </span>
        </motion.div>

        {/* Typewriter Dynamic Line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center gap-2 font-mono text-xs sm:text-sm text-amber-200/90 mb-4 tracking-wide"
        >
          <span className="text-amber-400 font-bold">&gt;</span>
          <span className="text-stone-400">Focus:</span>
          <span className="text-warm-ivory font-medium">{displayedRole}</span>
          <span className="inline-block w-1.5 h-4 bg-amber-400 animate-pulse ml-0.5" />
        </motion.div>

        {/* Giant Centered Headline */}
        <h1 className="font-heading font-black text-5xl sm:text-7xl md:text-8xl tracking-tight text-white mb-6 leading-[1.05]">
          <SplitText text="LOGESH" delay={0.2} />{' '}
          <span className="text-gradient-warm">
            <SplitText text="P" delay={0.45} />
          </span>
        </h1>

        {/* Human Storytelling Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="text-base sm:text-lg text-stone-300 font-normal max-w-2xl mb-8 leading-relaxed"
        >
          B.Tech in <span className="text-white font-semibold">Artificial Intelligence & Data Science</span> at Anand Institute of Higher Technology. I build real-world AI software with the relentless discipline of an athlete: decomposing complex challenges, maintaining split-second focus, and delivering clean, reliable solutions like{' '}
          <span className="text-amber-300 font-mono font-semibold">MediMate</span>.
        </motion.p>

        {/* Quick Location & Experience Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65 }}
          className="flex flex-wrap items-center justify-center gap-2.5 mb-10 font-mono text-xs text-stone-300"
        >
          <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
            <MapPin className="w-3.5 h-3.5 text-rose-400" />
            <span>Mamallapuram, Tamil Nadu</span>
          </div>

          <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>DLK Tech ML Intern</span>
          </div>

          <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
            <Trophy className="w-3.5 h-3.5 text-amber-300" />
            <span>District 100m Athletics Gold</span>
          </div>
        </motion.div>

        {/* Action Buttons Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <MagneticButton>
            <a
              href="#projects"
              onMouseEnter={onPlayHover}
              onClick={onPlayClick}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 via-orange-400 to-rose-500 text-slate-950 font-heading font-bold text-sm tracking-wide transition-all shadow-[0_0_30px_rgba(245,158,11,0.35)] hover:shadow-[0_0_40px_rgba(245,158,11,0.55)] hover:scale-105 active:scale-95"
            >
              <span>Explore Selected Work</span>
              <ArrowUpRight className="w-4 h-4 text-slate-950" />
            </a>
          </MagneticButton>

          <MagneticButton>
            <button
              onClick={() => {
                if (onPlayClick) onPlayClick();
                onOpenResume();
              }}
              onMouseEnter={onPlayHover}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-white font-heading font-semibold text-sm tracking-wide border border-white/15 backdrop-blur-md transition-all hover:border-amber-400/40 hover:scale-105 active:scale-95"
            >
              <Download className="w-4 h-4 text-amber-400" />
              <span>Download Résumé</span>
            </button>
          </MagneticButton>
        </motion.div>

        {/* Centered Photo in Natural Flow Below the Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-72 sm:w-80 md:w-96"
        >
          {/* Warm Ambient Backlight Glow (No harsh blue rings) */}
          <div className="absolute -inset-6 rounded-[36px] bg-gradient-to-tr from-amber-500/25 via-orange-500/20 to-rose-500/20 blur-3xl opacity-70 -z-10 animate-pulse-warm" />

          {/* Luxury Frame Container */}
          <div className="relative rounded-[32px] p-2.5 bg-gradient-to-b from-white/20 via-white/5 to-white/10 backdrop-blur-2xl border border-white/20 shadow-luxury-card overflow-hidden group">
            <div className="relative rounded-[24px] overflow-hidden aspect-[4/5] bg-[#0c0b10]">
              <img
                src="/profile.png"
                alt="Logesh P — Artificial Intelligence & Data Science Engineer"
                className="w-full h-full object-cover object-top filter contrast-[1.04] saturate-[1.06] group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Gentle Cinematic Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0b10] via-transparent to-transparent opacity-80" />

              {/* Bottom Clean Nameplate */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#121118]/90 backdrop-blur-xl border border-white/10 shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="text-left">
                    <h4 className="font-heading font-bold text-white text-base">Logesh P</h4>
                    <p className="font-mono text-xs text-amber-300">AI Engineer & Athlete</p>
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-slate-950 font-heading font-black text-xs shadow-md">
                    LP
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Left Pill */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
            className="absolute -top-4 -left-8 hidden sm:flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-[#14131d]/90 backdrop-blur-md border border-amber-400/30 shadow-xl"
          >
            <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xs">
              3rd
            </div>
            <div className="text-left">
              <p className="font-mono text-[10px] text-stone-400 uppercase">Undergrad Year</p>
              <p className="font-heading font-bold text-xs text-white">B.Tech AI & DS</p>
            </div>
          </motion.div>

          {/* Floating Right Pill: Athletic Achievement */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 5.4, ease: 'easeInOut', delay: 1 }}
            className="absolute -bottom-4 -right-8 hidden sm:flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-[#14131d]/90 backdrop-blur-md border border-amber-400/30 shadow-xl"
          >
            <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xs">
              🥇
            </div>
            <div className="text-left">
              <p className="font-mono text-[10px] text-stone-400 uppercase">Track & Court</p>
              <p className="font-heading font-bold text-xs text-white">Kho Kho & 100m Gold</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
        className="mt-16 flex flex-col items-center gap-1.5 text-stone-500 text-xs font-mono select-none pointer-events-none"
      >
        <span className="tracking-widest uppercase text-[10px]">SCROLL TO EXPLORE</span>
        <ArrowDown className="w-3.5 h-3.5 text-amber-400" />
      </motion.div>
    </section>
  );
};
