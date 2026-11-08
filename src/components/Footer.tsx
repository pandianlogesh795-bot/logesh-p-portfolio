import { ArrowUp, Mail, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { MagneticButton } from './MagneticButton';

interface FooterProps {
  onPlayHover?: () => void;
  onPlayClick?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onPlayHover, onPlayClick }) => {
  const scrollToTop = () => {
    if (onPlayClick) onPlayClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#07070b] border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8 text-slate-400 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center font-heading font-black text-white text-sm shadow-md">
            LP
          </div>
          <div>
            <p className="font-heading font-bold text-white text-sm">
              Designed & Built with <Heart className="w-3.5 h-3.5 inline text-pink-500 mx-0.5 fill-pink-500" /> by Logesh P
            </p>
            <p className="font-mono text-xs text-slate-500">
              © {new Date().getFullYear()} • B.Tech Artificial Intelligence & Data Science
            </p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/pandianlogesh795-bot"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={onPlayHover}
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            title="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href="https://linkedin.com/in/logesh-p-6297a639a"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={onPlayHover}
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            title="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <a
            href="mailto:pandianlogesh795@gmail.com"
            onMouseEnter={onPlayHover}
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            title="Send Email"
          >
            <Mail className="w-4 h-4" />
          </a>

          {/* Back to Top */}
          <MagneticButton>
            <button
              onClick={scrollToTop}
              onMouseEnter={onPlayHover}
              className="p-2.5 rounded-full bg-cyan-400/10 hover:bg-cyan-400/20 text-cyan-400 border border-cyan-400/30 transition-all shadow-sm"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </MagneticButton>
        </div>
      </div>
    </footer>
  );
};
