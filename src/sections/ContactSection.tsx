import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MapPin, Check, Copy, Sparkles, MessageSquare, PhoneCall, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import { Reveal } from '../components/Reveal';
import { TiltCard } from '../components/TiltCard';
import { MagneticButton } from '../components/MagneticButton';

interface ContactSectionProps {
  onPlayHover?: () => void;
  onPlayClick?: () => void;
  onPlaySuccess?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onPlayHover,
  onPlayClick,
  onPlaySuccess,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('pandianlogesh795@gmail.com');
    setEmailCopied(true);
    if (onPlaySuccess) onPlaySuccess();
    setTimeout(() => setEmailCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    if (onPlayClick) onPlayClick();

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onPlaySuccess) onPlaySuccess();
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 6000);
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen py-32 px-4 sm:px-6 lg:px-12 bg-[#060609] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Background Watermark */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 pointer-events-none select-none opacity-[0.02] whitespace-nowrap overflow-hidden">
        <span className="font-heading font-black text-[22vw] uppercase outlined-text">
          CONNECT
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 font-mono text-xs mb-4">
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              08 // INITIATE COLLABORATION
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-tight mb-4">
              Let's Build Something <span className="text-gradient-aurora">Extraordinary</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Actively seeking Data Science & Machine Learning internships, technical challenges, and ambitious project collaborations. Let's start the conversation.
            </p>
          </Reveal>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Links & Studio Info */}
          <div className="lg:col-span-5 space-y-6">
            <TiltCard glowColor="rgba(6, 182, 212, 0.22)" className="p-8 sm:p-10 space-y-6">
              <div>
                <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest font-semibold">
                  Personal Channels
                </span>
                <h3 className="font-heading font-bold text-2xl text-white mt-1">
                  Connect Directly
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  I review inquiries personally and prioritize engineering discussions.
                </p>
              </div>

              {/* Email Box */}
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3.5 overflow-hidden">
                  <div className="w-11 h-11 rounded-2xl bg-cyan-500/15 text-cyan-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">Primary Email</p>
                    <a
                      href="mailto:pandianlogesh795@gmail.com"
                      className="text-xs sm:text-sm text-white hover:text-cyan-300 font-mono truncate block mt-0.5"
                    >
                      pandianlogesh795@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={copyEmail}
                  onMouseEnter={onPlayHover}
                  className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white transition-colors shrink-0"
                  title="Copy email to clipboard"
                >
                  {emailCopied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Protected Phone Reveal */}
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-indigo-500/15 text-indigo-400 flex items-center justify-center shrink-0">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">Direct Phone & WhatsApp</p>
                    {showPhone ? (
                      <span className="font-mono text-sm text-cyan-300 font-semibold mt-0.5 block">+91 9600784369</span>
                    ) : (
                      <span className="font-mono text-xs text-slate-500 mt-0.5 block">Encrypted against scraping</span>
                    )}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setShowPhone(!showPhone)}
                  className="px-3.5 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-xs font-mono text-cyan-300 transition-colors"
                >
                  {showPhone ? 'Hide' : 'Reveal'}
                </button>
              </div>

              {/* Location */}
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-rose-500/15 text-rose-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">Current Residence</p>
                  <p className="text-xs sm:text-sm text-white font-medium mt-0.5">Mamallapuram, Tamil Nadu, India</p>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href="https://github.com/pandianlogesh795-bot"
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={onPlayHover}
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-mono text-slate-200 hover:text-white transition-all group"
                >
                  <GithubIcon className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:text-cyan-300" />
                </a>

                <a
                  href="https://linkedin.com/in/logesh-p-6297a639a"
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={onPlayHover}
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-mono text-slate-200 hover:text-white transition-all group"
                >
                  <LinkedinIcon className="w-4 h-4 text-indigo-400 group-hover:scale-110 transition-transform" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:text-indigo-300" />
                </a>
              </div>
            </TiltCard>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <TiltCard glowColor="rgba(99, 102, 241, 0.22)" className="p-8 sm:p-12">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-8">
                <MessageSquare className="w-4 h-4" />
                <span>Send a Direct Dispatch</span>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-10 rounded-3xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3"
                >
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto shadow-md">
                    <Check className="w-7 h-7" />
                  </div>
                  <h4 className="font-heading font-black text-2xl text-white">Message Dispatched!</h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm mx-auto">
                    Thank you! Your inquiry has been transmitted directly. Logesh will follow up promptly via your provided email address.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-2.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe / Tech Lead"
                        className="w-full px-5 py-3.5 rounded-2xl bg-black/50 border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-sm transition-colors placeholder:text-slate-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-2.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="recruiter@innovate.com"
                        className="w-full px-5 py-3.5 rounded-2xl bg-black/50 border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-sm transition-colors placeholder:text-slate-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Internship / AI Project Collaboration"
                      className="w-full px-5 py-3.5 rounded-2xl bg-black/50 border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-sm transition-colors placeholder:text-slate-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2.5">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your team goals or project requirements..."
                      className="w-full px-5 py-3.5 rounded-2xl bg-black/50 border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-sm transition-colors placeholder:text-slate-600 resize-none"
                    />
                  </div>

                  <MagneticButton>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-500 text-slate-950 font-heading font-bold text-sm tracking-wide transition-all shadow-[0_0_25px_rgba(6,182,212,0.35)] hover:shadow-[0_0_35px_rgba(6,182,212,0.55)] hover:scale-105 active:scale-95 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Sparkles className="w-4 h-4 animate-spin text-slate-950" />
                          <span>Transmitting...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-slate-950" />
                          <span>Transmit Message</span>
                        </>
                      )}
                    </button>
                  </MagneticButton>
                </form>
              )}
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
};
