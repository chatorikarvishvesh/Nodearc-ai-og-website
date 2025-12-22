import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

interface ContactProps {
  onOpenModal: () => void;
}

const Contact: React.FC<ContactProps> = ({ onOpenModal }) => {
  return (
    <div className="min-h-screen flex flex-col pt-20">
      <section className="flex-1 flex items-center justify-center bg-dark text-white px-6">
        <div className="max-w-4xl mx-auto text-center space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-12 leading-tight">
              For serious inquiries, request a strategy call.
            </h1>
            <Button variant="primary" onClick={onOpenModal} className="h-24 px-20 text-2xl font-bold">
              Request a Strategy Call
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="pt-16 border-t border-white/5 space-y-8"
          >
            <p className="text-neutral-600 font-mono text-[11px] tracking-[0.5em] uppercase">Direct Channel</p>
            <div className="space-y-3">
              <p className="text-2xl text-neutral-200 tracking-wide font-light">enquiry@nodearcai.com</p>
              <p className="text-xl text-neutral-400 font-light">+91 7769004033</p>
            </div>
            <p className="text-sm text-neutral-600 font-mono tracking-[0.3em] uppercase pt-6">NodeArc AI — Pune · Chhatrapati Sambhaji Nagar</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;