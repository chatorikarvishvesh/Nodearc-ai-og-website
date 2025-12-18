import React from 'react';
import { motion } from 'framer-motion';

const Process: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Diagnose",
      desc: "Identify friction, waste, and failure points."
    },
    {
      num: "02",
      title: "Engineer",
      desc: "Design deterministic automation systems."
    },
    {
      num: "03",
      title: "Deploy",
      desc: "Monitor, iterate, and harden."
    }
  ];

  return (
    <section className="py-40 bg-dark text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
            className="mb-32"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm font-mono text-neutral-500 tracking-widest uppercase mb-4">The Process</h2>
          <h3 className="text-4xl font-bold tracking-tight">From manual to autonomous.</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.25 }}
              className="relative group"
            >
              <div className="text-7xl font-bold text-neutral-800 mb-8 font-mono opacity-40 group-hover:opacity-60 transition-opacity duration-500">{step.num}</div>
              <h4 className="text-2xl font-bold text-white mb-4 tracking-tight">{step.title}</h4>
              <p className="text-neutral-400 text-lg leading-relaxed max-w-xs">{step.desc}</p>
              
              {/* Decorative line */}
              {idx !== steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 right-0 w-full h-[1px] bg-neutral-800 -z-10 translate-x-1/2" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;