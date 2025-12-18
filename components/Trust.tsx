import React from 'react';
import { motion } from 'framer-motion';

const Trust: React.FC = () => {
  return (
    <section className="py-40 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 mb-6 max-w-3xl mx-auto leading-tight">
            We don’t deploy experiments. <br/> We deploy infrastructure.
          </h2>
          <p className="text-neutral-500 max-w-2xl mx-auto text-lg mb-8">
            Built on enterprise-grade foundations. No brittle scripts. No black boxes.
          </p>
          <div className="h-[1px] w-24 bg-neutral-200 mx-auto mb-16" />
          <p className="text-xs font-mono text-neutral-400 uppercase tracking-[0.3em]">
            Every automation we build follows this structure — from input to action.
          </p>
        </motion.div>

        {/* Technical Visualization */}
        <div className="relative w-full max-w-4xl mx-auto h-[300px] md:h-[400px] flex items-center justify-center">
            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full text-neutral-200 z-0" fill="none" stroke="currentColor" strokeWidth="1.5">
                <motion.path 
                    d="M100,200 C200,200 200,200 300,200" 
                    initial={{ pathLength: 0 }} 
                    whileInView={{ pathLength: 1 }} 
                    viewport={{ once: true }}
                    transition={{ duration: 1.8, ease: "easeInOut" }}
                />
                <motion.path 
                    d="M500,200 C600,200 600,200 700,200" 
                    initial={{ pathLength: 0 }} 
                    whileInView={{ pathLength: 1 }} 
                    viewport={{ once: true }}
                    transition={{ duration: 1.8, delay: 0.6, ease: "easeInOut" }}
                />
                 <motion.path 
                    d="M300,200 C400,200 400,100 500,200" 
                    initial={{ pathLength: 0 }} 
                    whileInView={{ pathLength: 1 }} 
                    viewport={{ once: true }}
                    transition={{ duration: 1.8, delay: 0.3, ease: "easeInOut" }}
                />
            </svg>

            {/* Nodes */}
            <div className="flex justify-between w-full z-10 relative px-4 md:px-0">
                {[
                    { label: "Data Source", sub: "API / Webhook" },
                    { label: "Orchestration", sub: "NodeArc Core" },
                    { label: "Execution", sub: "CRM / Action" }
                ].map((node, i) => (
                    <motion.div
                        key={i}
                        className="bg-white border border-neutral-200 px-6 py-4 shadow-sm w-48 text-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.4, duration: 0.6 }}
                    >
                        <div className="text-sm font-semibold text-neutral-900">{node.label}</div>
                        <div className="text-xs text-neutral-400 mt-1 font-mono">{node.sub}</div>
                    </motion.div>
                ))}
            </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mt-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            {['OpenAI', 'Anthropic', 'Make', 'Meta'].map((brand, i) => (
                <div key={i} className="text-sm font-bold text-neutral-500 tracking-widest uppercase border-t border-neutral-100 pt-8">{brand}</div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;