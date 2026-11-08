import { Award, ShieldCheck, CheckCircle2, Sparkles, Target, Users, Cpu } from 'lucide-react';
import { certificationsData, personalStrengths } from '../data/achievements';
import { TiltCard } from '../components/TiltCard';
import { Reveal } from '../components/Reveal';

export const CertificationsSection: React.FC = () => {
  const getStrengthIcon = (icon: string) => {
    switch (icon) {
      case 'Shield': return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'Target': return <Target className="w-5 h-5 text-cyan-400" />;
      case 'Users': return <Users className="w-5 h-5 text-rose-400" />;
      default: return <Cpu className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section
      id="certifications"
      className="relative min-h-screen py-32 px-4 sm:px-6 lg:px-12 bg-[#060609] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Background Watermark */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 pointer-events-none select-none opacity-[0.02] whitespace-nowrap overflow-hidden">
        <span className="font-heading font-black text-[22vw] uppercase outlined-text">
          VALIDATION
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 font-mono text-xs mb-4">
              <Award className="w-3.5 h-3.5 text-indigo-400" />
              06 // FORMAL QUALIFICATIONS & WORK ETHIC
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight mb-4">
              Verified Diplomas & <span className="text-gradient-aurora">Core Tenets</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Rigorous 7-month foundational diploma training in C & C++ and industry-grade machine learning workshops backed by proven character pillars.
            </p>
          </Reveal>
        </div>

        {/* Certificate Cards with Metallic Foil Shine */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {certificationsData.map((cert) => (
            <TiltCard
              key={cert.id}
              glowColor="rgba(99, 102, 241, 0.25)"
              className="p-8 sm:p-12 shine-foil border-indigo-500/25 bg-gradient-to-br from-[#0c0c16] via-[#090912] to-[#060609] flex flex-col justify-between"
            >
              <div>
                {/* Certificate Seal Badge */}
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-600 via-cyan-500 to-teal-400 flex items-center justify-center text-white shadow-xl">
                      <Award className="w-7 h-7" />
                    </div>
                    <div>
                      <p className="font-mono text-xs text-cyan-300 uppercase tracking-widest font-semibold">{cert.organization}</p>
                      <span className="font-mono text-xs text-slate-400">{cert.period}</span>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 font-mono text-xs px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    {cert.status}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-3">
                  {cert.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-8">
                  {cert.description}
                </p>
              </div>

              {/* Skills covered */}
              <div className="pt-6 border-t border-white/10">
                <p className="font-mono text-xs text-slate-400 mb-3 uppercase tracking-wider">Certified Competencies:</p>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((s, idx) => (
                    <span
                      key={idx}
                      className="font-mono text-xs px-3 py-1 rounded-lg bg-white/[0.04] border border-white/5 text-slate-200"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Pillars of Character */}
        <div>
          <div className="flex items-center gap-2 mb-8">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <h3 className="font-heading font-bold text-xl text-white tracking-wide">
              Pillars of Character & Collaboration
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {personalStrengths.map((st, i) => (
              <TiltCard key={i} className="p-7 flex flex-col justify-between">
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-5">
                    {getStrengthIcon(st.icon)}
                  </div>
                  <h4 className="font-heading font-bold text-base text-white mb-2">
                    {st.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {st.description}
                  </p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
