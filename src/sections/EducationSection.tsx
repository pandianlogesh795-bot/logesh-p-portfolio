import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { GraduationCap, Award, BookOpen, MapPin, Calendar } from 'lucide-react';
import { educationTimeline } from '../data/timeline';
import { TiltCard } from '../components/TiltCard';
import { Reveal } from '../components/Reveal';

export const EducationSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.9'],
  });

  const lineHeight = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <section
      id="education"
      ref={containerRef}
      className="relative min-h-screen py-32 px-4 sm:px-6 lg:px-12 bg-[#0c0b10] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Background Section Title Outline */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 pointer-events-none select-none opacity-[0.02] whitespace-nowrap overflow-hidden">
        <span className="font-heading font-black text-[20vw] uppercase outlined-text">
          ACADEMICS
        </span>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 font-mono text-xs mb-4">
              <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
              03 // ACADEMIC ROADMAP
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight mb-4">
              Education & <span className="text-gradient-warm">Foundation</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
              Synthesizing rigorous computer engineering principles with specialized AI and data science research.
            </p>
          </Reveal>
        </div>

        {/* Vertical Animated Timeline */}
        <div className="relative">
          {/* Animated Background Progress Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-1 bg-white/10 -translate-x-1/2 rounded-full overflow-hidden">
            <motion.div
              style={{ scaleY: lineHeight }}
              className="w-full h-full bg-gradient-to-b from-amber-400 via-orange-500 to-rose-500 origin-top shadow-[0_0_15px_rgba(245,158,11,0.4)]"
            />
          </div>

          <div className="space-y-12 sm:space-y-16">
            {educationTimeline.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node Icon */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-[#14131d] border-2 border-amber-400 flex items-center justify-center text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.35)] z-20">
                    {item.type === 'education' ? (
                      <GraduationCap className="w-5 h-5" />
                    ) : item.type === 'certification' ? (
                      <Award className="w-5 h-5 text-orange-400" />
                    ) : (
                      <BookOpen className="w-5 h-5 text-rose-400" />
                    )}
                  </div>

                  {/* Content Card */}
                  <div
                    className={`ml-12 sm:ml-0 sm:w-1/2 ${
                      isEven ? 'sm:pl-10' : 'sm:pr-10'
                    }`}
                  >
                    <TiltCard className="p-7 sm:p-9">
                      {/* Badge & Year */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="font-mono text-xs px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300">
                          {item.badge}
                        </span>

                        <div className="flex items-center gap-1.5 font-mono text-xs text-stone-400">
                          <Calendar className="w-3.5 h-3.5 text-amber-400" />
                          <span>{item.year}</span>
                        </div>
                      </div>

                      {/* Title & Institution */}
                      <h3 className="font-heading font-bold text-lg sm:text-xl text-white mb-1.5">
                        {item.title}
                      </h3>

                      <p className="font-medium text-xs sm:text-sm text-amber-200/90 mb-2">
                        {item.institution}
                      </p>

                      <div className="flex items-center gap-2 text-xs text-stone-400 mb-4">
                        <MapPin className="w-3.5 h-3.5 text-rose-400" />
                        <span>{item.location}</span>
                        {item.grade && (
                          <span className="font-mono font-bold text-amber-400 ml-auto">
                            • {item.grade}
                          </span>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Skills Acquired Chips */}
                      <div className="flex flex-wrap gap-1.5">
                        {item.skillsLearned.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="font-mono text-[10px] px-2.5 py-0.5 rounded-md bg-white/[0.04] text-stone-300 border border-white/5"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </TiltCard>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
