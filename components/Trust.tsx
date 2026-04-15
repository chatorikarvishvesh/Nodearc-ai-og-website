import React from 'react';
import { motion } from 'framer-motion';

const Trust: React.FC = () => {
  const steps = [
    { label: "Customer messages you", sub: "Website / WhatsApp / Instagram" },
    { label: "AI Chatbot replies instantly", sub: "Answers questions, collects details" },
    { label: "Lead stored in CRM", sub: "Name, number, requirements tracked" },
    { label: "AI Call Agent follows up", sub: "Calls the lead in their language" },
    { label: "Automated follow-ups", sub: "Day 1, Day 3, Day 7 — all automatic" },
    { label: "Lead converts", sub: "Sales team closes faster with context", highlight: true }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-violet-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-plum mb-6 max-w-4xl mx-auto leading-tight">
            How it works
          </h2>
          <div className="h-[1px] w-24 bg-gold/20 mx-auto" />
        </motion.div>

        {/* Simplified Business Flow Visualization */}
        <div className="relative w-full max-w-7xl mx-auto h-auto flex flex-col items-center justify-center py-8">
            {/* Nodes */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 w-full z-10 relative">
                {steps.map((node, i) => (
                    <motion.div
                        key={i}
                        className={`bg-white border ${node.highlight ? 'border-gold shadow-[0_0_20px_rgba(212,175,55,0.15)]' : 'border-plum/5 shadow-sm'} px-4 py-6 text-center group transition-all duration-700 hover:border-gold/40 flex flex-col justify-between h-full`}
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div>
                          <div className="text-[9px] font-mono text-plum/20 mb-3">STEP 0{i + 1}</div>
                          <div className={`text-[12px] font-display font-bold ${node.highlight ? 'text-plum' : 'text-plum/80'} mb-2 uppercase tracking-widest leading-tight`}>{node.label}</div>
                          <div className="text-[9px] text-plum/40 font-mono tracking-widest leading-relaxed">{node.sub}</div>
                        </div>
                        <div className="mt-4 flex justify-center gap-1">
                           {[1,2,3].map(dot => (
                             <div key={dot} className={`w-1 h-1 ${node.highlight ? 'bg-gold' : 'bg-plum/10'} rounded-full`} />
                           ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default Trust;