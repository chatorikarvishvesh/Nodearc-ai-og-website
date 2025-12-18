import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

interface HeroProps {
  onOpenModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-dark overflow-hidden pt-20">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Radial fade for focus */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,transparent,rgba(5,5,5,1))]"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block py-1 px-3 rounded-full border border-white/10 bg-white/5 text-neutral-400 text-xs font-mono tracking-widest mb-8">
            SYSTEMS ENGINEERING
          </span>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 leading-[1.1]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          Manual work is<br className="hidden md:block" /> a liability.
        </motion.h1>

        <motion.p 
          className="text-xl text-neutral-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          NodeArc AI designs production-grade automation systems that remove operational drag, reduce headcount dependency, and scale without chaos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <Button variant="primary" onClick={onOpenModal} withArrow className="h-16 px-12 text-lg">
            Book a Strategy Call
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;