import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Volume2, VolumeX, Menu, X, FileText, Send, Sparkles } from 'lucide-react';
import { ScrambleText } from './ScrambleText';

interface NavbarProps {
  soundEnabled: boolean;
  onToggleSound: () => void;
  onOpenResume: () => void;
  onPlayHover?: () => void;
  onPlayClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  soundEnabled,
  onToggleSound,
  onOpenResume,
  onPlayHover,
  onPlayClick,
}) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll Progress indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Projects', href: '#projects' },
    { label: 'Athletics', href: '#achievements' },
    { label: 'Credentials', href: '#certifications' },
    { label: 'Résumé', href: '#resume' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['hero', 'about', 'skills', 'education', 'projects', 'achievements', 'certifications', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 220;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    if (onPlayClick) onPlayClick();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Warm Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 origin-left z-50 shadow-[0_0_12px_#f59e0b]"
        style={{ scaleX }}
      />

      {/* Floating Pill Navbar Container */}
      <header
        className={`fixed top-4 sm:top-6 left-0 right-0 z-40 flex justify-center px-4 transition-all duration-300 pointer-events-none`}
      >
        <div
          className={`pointer-events-auto flex items-center justify-between gap-3 px-4 py-2.5 rounded-full transition-all duration-300 ${
            isScrolled
              ? 'bg-[#121118]/90 backdrop-blur-xl border border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.6)]'
              : 'bg-[#16151f]/65 backdrop-blur-md border border-white/5 shadow-lg'
          }`}
        >
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className="flex items-center gap-2.5 group mr-2"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center font-heading font-black text-sm text-slate-950 shadow-sm group-hover:scale-105 transition-transform">
              LP
            </div>
            <span className="font-heading font-bold text-sm tracking-tight text-white hidden sm:inline-block">
              LOGESH<span className="text-amber-400">.P</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  onMouseEnter={() => onPlayHover && onPlayHover()}
                  className={`relative px-3 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${
                    isActive
                      ? 'text-amber-300 font-semibold'
                      : 'text-stone-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 rounded-full bg-amber-500/15 border border-amber-400/40 shadow-[0_0_15px_rgba(245,158,11,0.25)]"
                      transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                    />
                  )}
                  <span className="relative z-10">
                    <ScrambleText text={link.label} scrambleOnHover />
                  </span>
                </a>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2">
            {/* Audio Toggle */}
            <button
              onClick={() => {
                onToggleSound();
                if (onPlayClick) onPlayClick();
              }}
              title={soundEnabled ? 'Mute Audio Effects' : 'Enable Studio Audio FX'}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 text-stone-300 hover:text-amber-300 transition-colors"
            >
              {soundEnabled ? (
                <Volume2 className="w-4 h-4 text-amber-400 animate-pulse" />
              ) : (
                <VolumeX className="w-4 h-4 text-stone-500" />
              )}
            </button>

            {/* Quick Resume Button */}
            <button
              onClick={() => {
                onOpenResume();
                if (onPlayClick) onPlayClick();
              }}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-heading text-xs font-bold transition-all shadow-sm group"
            >
              <FileText className="w-3.5 h-3.5 text-slate-950 group-hover:rotate-6 transition-transform" />
              <span>CV</span>
            </button>

            {/* Contact CTA */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-400/10 hover:bg-amber-400/20 border border-amber-400/30 text-amber-300 font-mono text-xs font-medium transition-colors"
            >
              <Send className="w-3 h-3" />
              <span className="hidden xs:inline">Connect</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full bg-white/5 hover:bg-white/10 text-stone-300 hover:text-white transition-colors"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-x-4 top-20 z-40 p-6 rounded-3xl bg-[#14131d]/95 backdrop-blur-2xl border border-white/10 shadow-2xl lg:hidden"
        >
          <div className="flex flex-col gap-3">
            <div className="text-xs font-mono text-stone-500 uppercase tracking-widest px-2 mb-1 flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-amber-400" />
              Navigation
            </div>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`px-4 py-2.5 rounded-xl font-heading text-sm transition-colors ${
                  activeSection === link.href.substring(1)
                    ? 'bg-amber-500/15 text-amber-300 border border-amber-500/25 font-semibold'
                    : 'text-stone-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 mt-2 border-t border-white/10 flex items-center justify-between">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 font-heading text-xs font-bold"
              >
                <FileText className="w-4 h-4 text-slate-950" />
                View Résumé
              </button>

              <button
                onClick={onToggleSound}
                className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white/5 text-stone-300 text-xs font-mono"
              >
                {soundEnabled ? <Volume2 className="w-4 h-4 text-amber-400" /> : <VolumeX className="w-4 h-4 text-stone-500" />}
                {soundEnabled ? 'Sound On' : 'Sound Off'}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};
