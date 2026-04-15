import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col pt-20">
      <section className="flex-1 flex items-center justify-center bg-plum-radial text-white px-6">
        <div className="max-w-4xl mx-auto text-center space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-8 leading-tight glow-text">
              Request a strategy call.
            </h1>
            <Button 
              variant="primary" 
              onClick={() => window.open('https://n8n.srv988293.hstgr.cloud/form/b8b21e79-6c6e-49ef-8b64-b01d44e039a9', '_blank')} 
              className="h-16 px-12 text-lg font-bold"
            >
              Get started
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="pt-16 border-t border-gold/10 space-y-8"
          >
            <p className="text-gold/40 font-mono text-[11px] tracking-[0.5em] uppercase">Direct Channel</p>
            <div className="space-y-3">
              <p className="text-2xl text-white tracking-wide font-light">enquiry@nodearcai.com</p>
              <p className="text-xl text-lavender font-light">+91 7769004033</p>
            </div>
            <p className="text-sm text-gold/20 font-mono tracking-[0.3em] uppercase pt-6">NodeArc AI — Pune · Chhatrapati Sambhaji Nagar</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;