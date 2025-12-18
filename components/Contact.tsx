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
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
              For serious inquiries, request a strategy call.
            </h1>
            <Button variant="primary" onClick={onOpenModal} className="h-20 px-16 text-xl font-bold">
              Request a Strategy Call
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="pt-12 border-t border-white/5 space-y-4"
          >
            <p className="text-neutral-500 font-mono text-[10px] tracking-[0.3em] uppercase">Direct Channel</p>
            <div className="space-y-2">
              <p className="text-xl text-neutral-300">enquiry@nodearcai.com</p>
              <p className="text-lg text-neutral-400 font-light">+91 7769004033</p>
            </div>
            <p className="text-sm text-neutral-600 font-light tracking-wide pt-4">Pune · Chhatrapati Sambhaji Nagar</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;