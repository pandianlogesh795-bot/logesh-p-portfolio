import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Preloader } from './components/Preloader';
import { MagneticCursor } from './components/MagneticCursor';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { KhoKhoEasterEgg } from './components/KhoKhoEasterEgg';
import { ResumeModal } from './components/ResumeModal';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { SkillsSection } from './sections/SkillsSection';
import { EducationSection } from './sections/EducationSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { AchievementsSection } from './sections/AchievementsSection';
import { CertificationsSection } from './sections/CertificationsSection';
import { ResumeSection } from './sections/ResumeSection';
import { ContactSection } from './sections/ContactSection';
import { useSoundEffects } from './hooks/useSoundEffects';

export function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const {
    soundEnabled,
    toggleSound,
    playHover,
    playClick,
    playSuccess,
  } = useSoundEffects();

  // Initialize Lenis buttery smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    let animationFrameId: number;
    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0c0b10] text-[#fdfbf7] relative selection:bg-amber-400 selection:text-black">
      {/* Solo Letter-by-Letter Center Stage Arrival */}
      {isLoading && (
        <Preloader onComplete={() => setIsLoading(false)} />
      )}

      {/* Custom magnetic glowing cursor */}
      <MagneticCursor />

      {/* Floating Pill Navbar with active section indicator */}
      <Navbar
        soundEnabled={soundEnabled}
        onToggleSound={toggleSound}
        onOpenResume={() => setIsResumeOpen(true)}
        onPlayHover={playHover}
        onPlayClick={playClick}
      />

      {/* Main 9 Sections */}
      <main className="relative z-10 flex flex-col">
        {/* 1. Hero */}
        <HeroSection
          onOpenResume={() => setIsResumeOpen(true)}
          onPlayHover={playHover}
          onPlayClick={playClick}
        />

        {/* 2. About Me */}
        <AboutSection />

        {/* 3. Skills */}
        <SkillsSection
          onPlayHover={playHover}
          onPlayClick={playClick}
        />

        {/* 4. Education Timeline */}
        <EducationSection />

        {/* 5. Projects & Experience */}
        <ProjectsSection
          onPlayHover={playHover}
          onPlayClick={playClick}
        />

        {/* 6. Achievements & Sports */}
        <AchievementsSection onPlaySuccess={playSuccess} />

        {/* 7. Certifications & Strengths */}
        <CertificationsSection />

        {/* 8. Resume Preview */}
        <ResumeSection
          onOpenResumeModal={() => setIsResumeOpen(true)}
          onPlayHover={playHover}
          onPlayClick={playClick}
        />

        {/* 9. Contact */}
        <ContactSection
          onPlayHover={playHover}
          onPlayClick={playClick}
          onPlaySuccess={playSuccess}
        />
      </main>

      {/* Footer */}
      <Footer onPlayHover={playHover} onPlayClick={playClick} />

      {/* Kho Kho Easter Egg Runner & Confetti (Press 'K') */}
      <KhoKhoEasterEgg onTriggerSound={playSuccess} />

      {/* Interactive CV Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default App;
