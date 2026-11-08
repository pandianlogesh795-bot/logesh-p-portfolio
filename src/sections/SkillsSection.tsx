import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, Terminal, Database, Brain, Network, BarChart3, 
  Zap, Sliders, Boxes, Table, GitBranch, Layers, Server, 
  Award, MessageSquare, Clock, Sparkles, Cpu, Binary
} from 'lucide-react';
import { skillsData, marqueeSkills } from '../data/skills';
import { Marquee } from '../components/Marquee';
import { TiltCard } from '../components/TiltCard';
import { Reveal } from '../components/Reveal';

interface SkillsSectionProps {
  onPlayHover?: () => void;
  onPlayClick?: () => void;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({
  onPlayHover,
  onPlayClick,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'languages' | 'core' | 'tools' | 'soft'>('all');

  const categories = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'languages', label: 'Languages' },
    { id: 'core', label: 'AI & Data Science' },
    { id: 'tools', label: 'Frameworks & Tools' },
    { id: 'soft', label: 'Leadership & Soft Skills' },
  ] as const;

  const filteredSkills = selectedCategory === 'all'
    ? skillsData
    : skillsData.filter((s) => s.category === selectedCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Terminal': return <Terminal className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'Binary': return <Binary className="w-5 h-5" />;
      case 'Database': return <Database className="w-5 h-5" />;
      case 'Code': return <Code className="w-5 h-5" />;
      case 'Brain': return <Brain className="w-5 h-5" />;
      case 'Network': return <Network className="w-5 h-5" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5" />;
      case 'Zap': return <Zap className="w-5 h-5" />;
      case 'Sliders': return <Sliders className="w-5 h-5" />;
      case 'Boxes': return <Boxes className="w-5 h-5" />;
      case 'Table': return <Table className="w-5 h-5" />;
      case 'GitBranch': return <GitBranch className="w-5 h-5" />;
      case 'Layers': return <Layers className="w-5 h-5" />;
      case 'Server': return <Server className="w-5 h-5" />;
      case 'Award': return <Award className="w-5 h-5" />;
      case 'MessageSquare': return <MessageSquare className="w-5 h-5" />;
      case 'Clock': return <Clock className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section
      id="skills"
      className="relative min-h-screen py-32 px-4 sm:px-6 lg:px-12 bg-[#0c0b10] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Background Watermark */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 pointer-events-none select-none opacity-[0.02] whitespace-nowrap overflow-hidden">
        <span className="font-heading font-black text-[22vw] uppercase outlined-text">
          ARSENAL
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 font-mono text-xs mb-4">
                <Brain className="w-3.5 h-3.5 text-amber-400" />
                02 // TECHNICAL PROFICIENCIES
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight">
                Modern Tools & <span className="text-gradient-warm">Intelligent Systems</span>
              </h2>
            </Reveal>
          </div>

          {/* Interactive Category Selector Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  if (onPlayClick) onPlayClick();
                  setSelectedCategory(cat.id);
                }}
                onMouseEnter={onPlayHover}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-400/50 shadow-[0_0_20px_rgba(245,158,11,0.25)] font-semibold'
                    : 'bg-white/[0.04] hover:bg-white/[0.08] text-stone-400 hover:text-white border border-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Infinite Skill Marquees */}
        <div className="mb-16 space-y-4">
          <Marquee items={marqueeSkills} />
          <Marquee items={[...marqueeSkills].reverse()} reverse />
        </div>

        {/* Skills Bento Grid with 3D Tilt Cards */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <TiltCard className="p-7 h-full flex flex-col justify-between group">
                  <div>
                    {/* Top Icon & Category Tag */}
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className="w-11 h-11 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm"
                        style={{
                          backgroundColor: `${skill.color}15`,
                          borderColor: `${skill.color}35`,
                          borderWidth: '1px',
                          color: skill.color,
                        }}
                      >
                        {getIcon(skill.iconName)}
                      </div>

                      <span className="font-mono text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-md bg-white/[0.04] text-stone-400 border border-white/5">
                        {skill.category}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-lg text-white group-hover:text-amber-300 transition-colors mb-2">
                      {skill.name}
                    </h3>

                    <p className="text-xs text-stone-400 leading-relaxed mb-6">
                      {skill.description}
                    </p>
                  </div>

                  {/* Proficiency Meter */}
                  <div>
                    <div className="flex justify-between items-center text-xs font-mono text-stone-400 mb-2">
                      <span>Proficiency</span>
                      <span className="font-bold text-stone-200">{skill.level}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full rounded-full bg-gradient-to-r from-amber-400 to-orange-500"
                      />
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
