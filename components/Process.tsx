import React from 'react';
import { motion } from 'framer-motion';

const Process: React.FC = () => {
  const steps = [
    {
      title: "Understand",
      desc: "We study where time and money are being wasted."
    },
    {
      title: "Build",
      desc: "We design automation that fits your business."
    },
    {
      title: "Deploy",
      desc: "Systems go live and start working immediately."
    }
  ];

  return (
    <section className="py-48 bg-dark text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
            className="mb-40"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
          <h2 className="text-[10px] font-mono text-neutral-600 tracking-[0.5em] uppercase mb-6">The Process</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight">From manual to autonomous.</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: idx * 0.3 }}
              className="relative group"
            >
              <div className="flex items-center gap-6 mb-10">
                <div className="text-[10px] font-mono text-neutral-700 tracking-widest border-b border-neutral-800 pb-1">0{idx + 1}</div>
                <h4 className="text-2xl font-bold text-white tracking-tight">{step.title}</h4>
              </div>
              <p className="text-neutral-500 text-lg leading-relaxed font-light max-w-xs">{step.desc}</p>
              
              {/* Connector line - minimal */}
              {idx !== steps.length - 1 && (
                  <div className="hidden md:block absolute top-4 right-0 w-full h-[1px] bg-neutral-900 -z-10 translate-x-1/2" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;