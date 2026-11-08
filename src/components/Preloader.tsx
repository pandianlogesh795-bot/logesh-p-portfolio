import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

const SOLO_LETTERS = ['L', 'O', 'G', 'E', 'S', 'H', 'P'];

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [currentSoloIdx, setCurrentSoloIdx] = useState<number>(0);
  const [showFullSignature, setShowFullSignature] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Phase 1: Cycle through each letter SOLO in the exact center of the screen
    // Each letter stays for 450ms
    const letterDuration = 480;

    const interval = setInterval(() => {
      setCurrentSoloIdx((prev) => {
        if (prev < SOLO_LETTERS.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          // Transition to full signature reveal
          setTimeout(() => {
            setShowFullSignature(true);
          }, 300);
          return prev;
        }
      });
    }, letterDuration);

    // Phase 2: Full signature holds for ~1.2s, then smooth cinematic fade into website
    const totalTimer = setTimeout(() => {
      setIsClosing(true);
      setTimeout(() => {
        onComplete();
      }, 700);
    }, 4900);

    return () => {
      clearInterval(interval);
      clearTimeout(totalTimer);
    };
  }, [onComplete]);

  const currentLetter = SOLO_LETTERS[currentSoloIdx];

  return (
    <AnimatePresence>
      {!isClosing && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            filter: 'blur(16px)',
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0c0b10] text-warm-ivory overflow-hidden select-none"
        >
          {/* Subtle Warm Atmospheric Backlight Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.12)_0%,rgba(244,63,94,0.06)_40%,transparent_70%)] pointer-events-none" />

          {/* Organic Grain Texture */}
          <div
            className="absolute inset-0 opacity-25 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 0)',
              backgroundSize: '28px 28px',
            }}
          />

          {/* Center Stage: SOLO Letters OR Assembled Signature */}
          <div className="relative z-10 flex flex-col items-center justify-center min-h-[220px]">
            {!showFullSignature ? (
              /* Phase 1: SOLO Letter Entering the Center */
              <div className="relative flex items-center justify-center w-40 h-40">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentLetter + currentSoloIdx}
                    initial={{ scale: 0.4, opacity: 0, y: 35, filter: 'blur(8px)' }}
                    animate={{ scale: 1, opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ scale: 1.3, opacity: 0, y: -25, filter: 'blur(6px)' }}
                    transition={{
                      duration: 0.38,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute font-heading font-black text-7xl sm:text-9xl tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-amber-100 via-amber-400 to-orange-500 drop-shadow-[0_0_35px_rgba(245,158,11,0.5)]"
                  >
                    {currentLetter}
                  </motion.div>
                </AnimatePresence>
              </div>
            ) : (
              /* Phase 2: Full Name Concurrently Assembled */
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center"
              >
                <div className="flex items-center space-x-2 sm:space-x-3 mb-4">
                  <span className="font-heading font-black text-5xl sm:text-7xl md:text-8xl text-white tracking-tight">
                    LOGESH
                  </span>
                  <span className="font-heading font-black text-5xl sm:text-7xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-400">
                    P
                  </span>
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.5 }}
                  className="font-mono text-xs sm:text-sm tracking-[0.25em] text-amber-200/80 uppercase"
                >
                  AI & DATA SCIENCE • ATHLETE
                </motion.p>
              </motion.div>
            )}
          </div>

          {/* Minimal Bottom Location Tag */}
          <div className="absolute bottom-8 font-mono text-[10px] tracking-[0.25em] text-stone-500 uppercase">
            MAMALLAPURAM, TAMIL NADU
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
