import React, { useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { Trophy, Medal, Activity, Gamepad2, Flame, Sparkles, Zap } from 'lucide-react';
import { achievementsData } from '../data/achievements';
import { TiltCard } from '../components/TiltCard';
import { Reveal } from '../components/Reveal';

interface AchievementsSectionProps {
  onPlaySuccess?: () => void;
}

export const AchievementsSection: React.FC<AchievementsSectionProps> = ({ onPlaySuccess }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const confettiTriggered = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !confettiTriggered.current) {
          confettiTriggered.current = true;
          if (onPlaySuccess) onPlaySuccess();

          confetti({
            particleCount: 60,
            spread: 80,
            origin: { y: 0.6 },
            colors: ['#f59e0b', '#06b6d4', '#f43f5e', '#6366f1'],
          });
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [onPlaySuccess]);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Trophy': return <Trophy className="w-6 h-6 text-amber-400" />;
      case 'Medal': return <Medal className="w-6 h-6 text-amber-300" />;
      case 'Activity': return <Activity className="w-6 h-6 text-cyan-400" />;
      default: return <Gamepad2 className="w-6 h-6 text-rose-400" />;
    }
  };

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="relative min-h-screen py-32 px-4 sm:px-6 lg:px-12 bg-[#060609] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Background Watermark */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 pointer-events-none select-none opacity-[0.02] whitespace-nowrap overflow-hidden">
        <span className="font-heading font-black text-[22vw] uppercase outlined-text">
          VICTORIES
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 font-mono text-xs mb-4">
              <Trophy className="w-3.5 h-3.5 text-amber-400" />
              05 // ATHLETIC HONORS & TEAM LEADERSHIP
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight mb-4">
              Discipline, Teamwork &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-yellow-200">
                Stamina Under Pressure
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Competitive athletics builds the mindset needed for top-tier engineering: lightning-fast pattern recognition, emotional composure under tight deadlines, and relentless team synergy.
            </p>
          </Reveal>
        </div>

        {/* 4 Athlete Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievementsData.map((item) => (
            <TiltCard
              key={item.id}
              glowColor="rgba(245, 158, 11, 0.2)"
              className="p-8 flex flex-col justify-between group"
            >
              <div>
                {/* Metric Counter & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(item.icon)}
                  </div>

                  <div className="text-right">
                    <span className="font-heading font-black text-3xl text-amber-400 leading-none">
                      {item.metric}
                    </span>
                    <p className="font-mono text-[9px] uppercase tracking-wider text-slate-400 mt-0.5">
                      {item.metricLabel}
                    </p>
                  </div>
                </div>

                <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/[0.04] text-amber-300 border border-white/5">
                  {item.category}
                </span>

                <h3 className="font-heading font-bold text-lg sm:text-xl text-white mt-4 mb-1 leading-snug">
                  {item.title}
                </h3>

                <p className="font-mono text-xs text-amber-400/90 mb-3">
                  {item.event}
                </p>

                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-slate-200">
                <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="text-[11px] leading-tight">{item.highlight}</span>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Big Athlete Creed Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-amber-500/10 via-orange-500/5 to-cyan-500/10 border border-amber-500/25 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-start sm:items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 shadow-lg">
              <Flame className="w-7 h-7 animate-pulse text-amber-400" />
            </div>
            <div>
              <div className="flex items-center gap-2 font-mono text-[11px] text-amber-400 uppercase tracking-widest mb-1">
                <Zap className="w-3.5 h-3.5" />
                <span>The Competitor's Edge</span>
              </div>
              <h4 className="font-heading font-black text-xl sm:text-2xl text-white">
                "An athlete in the arena, an architect at the keyboard."
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl leading-relaxed">
                Playing at state levels against the country's best teams taught me how to stay calm when systems break and solve problems with rapid precision.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <span className="px-4 py-2 rounded-full bg-black/60 border border-white/10 text-xs font-mono text-amber-300">
              Kho Kho Zonal Meets & 100m Athletics Gold
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
