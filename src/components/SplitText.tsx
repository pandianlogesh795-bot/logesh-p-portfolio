import React from 'react';
import { motion } from 'framer-motion';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  wordMode?: boolean;
}

export const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 0,
  wordMode = false,
}) => {
  if (wordMode) {
    const words = text.split(' ');
    return (
      <span className={`inline-block ${className}`}>
        {words.map((word, index) => (
          <span key={index} className="inline-block overflow-hidden mr-[0.28em] align-top">
            <motion.span
              initial={{ y: '100%', opacity: 0, rotateX: -60 }}
              animate={{ y: 0, opacity: 1, rotateX: 0 }}
              transition={{
                duration: 0.65,
                delay: delay + index * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block origin-bottom"
            >
              {word}
            </motion.span>
          </span>
        ))}
      </span>
    );
  }

  const chars = text.split('');
  return (
    <span className={`inline-block ${className}`}>
      {chars.map((char, index) => (
        <span key={index} className="inline-block overflow-hidden">
          <motion.span
            initial={{ y: '120%', opacity: 0, rotateX: -90 }}
            animate={{ y: 0, opacity: 1, rotateX: 0 }}
            transition={{
              duration: 0.7,
              delay: delay + index * 0.035,
              type: 'spring',
              damping: 12,
              stiffness: 100,
            }}
            className="inline-block origin-bottom-left"
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        </span>
      ))}
    </span>
  );
};
