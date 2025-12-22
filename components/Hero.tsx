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
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      
      {/* Radial fade for focus */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,transparent,rgba(5,5,5,1))]"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.h1 
          className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white mb-10 leading-[0.95]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Manual work is<br className="hidden md:block" /> a liability.
        </motion.h1>

        <motion.p 
          className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto mb-16 font-light leading-relaxed tracking-wide"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          NodeArc AI builds automation systems that reply to customers, capture leads, <br className="hidden lg:block"/> and manage operations automatically — so businesses grow without chaos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <Button variant="primary" onClick={onOpenModal} withArrow className="h-20 px-16 text-xl">
            Understand the solution
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;