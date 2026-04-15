import React from 'react';
import { motion } from 'framer-motion';

const Positioning: React.FC = () => {
  return (
    <section className="py-24 bg-violet-white border-y border-plum/5">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-plum mb-8 leading-tight">
            This is not a chatbot.
          </h2>
          <p className="text-lg md:text-xl text-plum/60 font-light leading-relaxed max-w-3xl mx-auto">
            This is a complete system that manages your leads, follows up automatically, and helps you convert more customers without increasing your workload.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Positioning;
