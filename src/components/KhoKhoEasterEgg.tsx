import React, { useEffect, useState, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Trophy, Flame } from 'lucide-react';

interface KhoKhoEasterEggProps {
  onTriggerSound?: () => void;
}

export const KhoKhoEasterEgg: React.FC<KhoKhoEasterEggProps> = ({ onTriggerSound }) => {
  const [isActive, setIsActive] = useState(false);

  const triggerCelebration = useCallback(() => {
    setIsActive(true);
    if (onTriggerSound) onTriggerSound();

    // Fire multi-stage athletic confetti cannons
    const end = Date.now() + 2.5 * 1000;
    const colors = ['#22d3ee', '#f472b6', '#7c3aed', '#10b981', '#f59e0b'];

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors: colors,
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();

    setTimeout(() => {
      setIsActive(false);
    }, 4500);
  }, [onTriggerSound]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input or textarea
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') return;

      if (e.key === 'k' || e.key === 'K') {
        triggerCelebration();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [triggerCelebration]);

  return (
    <>
      {/* Floating subtle trigger chip at bottom left */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
        onClick={triggerCelebration}
        title="Press 'K' on your keyboard or tap here to trigger athlete sprint mode!"
        className="fixed bottom-6 left-6 z-40 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-white/10 hover:border-amber-400/50 backdrop-blur-md text-xs font-mono text-slate-300 hover:text-amber-300 transition-all shadow-lg group"
      >
        <span className="w-5 h-5 rounded-md bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-[10px] border border-amber-500/30 group-hover:scale-110 transition-transform">
          K
        </span>
        <span className="text-[11px] text-slate-400 group-hover:text-slate-200">
          Athlete Mode
        </span>
        <Flame className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
      </motion.button>

      {/* Screen takeover animation banner when triggered */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 pointer-events-none flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm overflow-hidden"
          >
            {/* Athletic sprinting banner */}
            <motion.div
              initial={{ scale: 0.7, y: 60, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: -40, opacity: 0 }}
              transition={{ type: 'spring', damping: 15 }}
              className="p-8 rounded-3xl bg-slate-950/90 border border-amber-400/40 shadow-[0_0_50px_rgba(245,158,11,0.3)] max-w-lg mx-4 text-center pointer-events-auto"
            >
              <div className="inline-flex p-3 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-400 mb-4 animate-bounce">
                <Trophy className="w-10 h-10" />
              </div>

              <div className="font-mono text-xs tracking-widest text-amber-400 uppercase mb-2 flex items-center justify-center gap-2">
                <Zap className="w-3.5 h-3.5" />
                State Athlete & Kho Kho Champion
                <Zap className="w-3.5 h-3.5" />
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white mb-2">
                "Speed in Body, Precision in Mind"
              </h3>

              <p className="text-stone-300 text-sm leading-relaxed mb-4">
                Logesh competed as a <span className="text-amber-400 font-semibold">4-Time District Kho Kho Athlete</span>, won <span className="text-orange-400 font-semibold">District 100m Athletics Gold</span>, and represented in Zonal Tournament Meets!
              </p>

              <div className="flex items-center justify-center gap-3 text-xs font-mono text-stone-400">
                <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10">Kho Kho Zonal Player</span>
                <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10">100m Athletics Gold</span>
                <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10">Team Captain Mindset</span>
              </div>
            </motion.div>

            {/* Runner animation moving across bottom screen */}
            <motion.div
              initial={{ x: '-120%' }}
              animate={{ x: '120%' }}
              transition={{ duration: 2.8, ease: 'linear' }}
              className="absolute bottom-16 flex items-center gap-3 px-6 py-3 rounded-full bg-amber-500/20 border border-amber-400/50 backdrop-blur-md"
            >
              <Flame className="w-6 h-6 text-amber-400 animate-spin" />
              <span className="font-heading font-black text-amber-300 text-lg tracking-wider">
                LOGESH SPRINTING TO VICTORY 🏃💨
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
