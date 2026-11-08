import React from 'react';

interface MarqueeProps {
  items: string[];
  reverse?: boolean;
  speedClass?: string;
  className?: string;
  onItemClick?: (item: string) => void;
}

export const Marquee: React.FC<MarqueeProps> = ({
  items,
  reverse = false,
  className = '',
  onItemClick,
}) => {
  // Double the items for seamless continuous looping
  const duplicated = [...items, ...items, ...items];

  return (
    <div className={`relative overflow-hidden w-full select-none py-2 ${className}`}>
      {/* Left and Right Fade Gradients */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a0a0f] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0a0f] to-transparent z-10" />

      <div
        className={`flex w-max gap-4 ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        } hover:[animation-play-state:paused]`}
      >
        {duplicated.map((item, index) => (
          <div
            key={index}
            onClick={() => onItemClick && onItemClick(item)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-cyan-400/40 backdrop-blur-md text-sm font-medium text-slate-300 hover:text-cyan-300 transition-all cursor-pointer shadow-sm group"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80 group-hover:bg-pink-400 transition-colors" />
            <span className="font-mono tracking-tight">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
