import React from 'react';
import { motion } from 'framer-motion';

const Trust: React.FC = () => {
  return (
    <section id="how-it-works" className="py-48 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          className="text-center mb-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 mb-10 max-w-4xl mx-auto leading-tight">
            We don’t deploy experiments. <br/> We deploy infrastructure.
          </h2>
          <div className="h-[1px] w-32 bg-neutral-200 mx-auto mb-12" />
          <p className="text-[11px] font-mono text-neutral-400 uppercase tracking-[0.4em]">
            Every automation we build follows a clear input → action → result structure.
          </p>
        </motion.div>

        {/* Simplified Business Flow Visualization */}
        <div className="relative w-full max-w-6xl mx-auto h-auto md:h-[400px] flex items-center justify-center py-12 md:py-0">
            {/* Connecting Lines - SVG Animated */}
            <svg className="absolute inset-0 w-full h-full text-neutral-200 z-0 hidden md:block" fill="none" stroke="currentColor" strokeWidth="1">
                <motion.path 
                    d="M50,200 L200,200" 
                    initial={{ pathLength: 0 }} 
                    whileInView={{ pathLength: 1 }} 
                    viewport={{ once: true }}
                    transition={{ duration: 2.5, ease: "easeInOut" }}
                />
                <motion.path 
                    d="M300,200 L450,200" 
                    initial={{ pathLength: 0 }} 
                    whileInView={{ pathLength: 1 }} 
                    viewport={{ once: true }}
                    transition={{ duration: 2.5, delay: 0.3, ease: "easeInOut" }}
                />
                <motion.path 
                    d="M550,200 L700,200" 
                    initial={{ pathLength: 0 }} 
                    whileInView={{ pathLength: 1 }} 
                    viewport={{ once: true }}
                    transition={{ duration: 2.5, delay: 0.6, ease: "easeInOut" }}
                />
                <motion.path 
                    d="M800,200 L950,200" 
                    initial={{ pathLength: 0 }} 
                    whileInView={{ pathLength: 1 }} 
                    viewport={{ once: true }}
                    transition={{ duration: 2.5, delay: 0.9, ease: "easeInOut" }}
                />
                 <motion.path 
                    d="M1050,200 L1150,200" 
                    initial={{ pathLength: 0 }} 
                    whileInView={{ pathLength: 1 }} 
                    viewport={{ once: true }}
                    transition={{ duration: 2.5, delay: 1.2, ease: "easeInOut" }}
                />
            </svg>

            {/* Nodes */}
            <div className="flex flex-col md:flex-row justify-between items-center w-full z-10 relative gap-8 md:gap-0">
                {[
                    { label: "Customer Message", sub: "Incoming Contact" },
                    { label: "AI Chatbot", sub: "Intelligent Reply" },
                    { label: "Data Saved", sub: "CRM / Excel" },
                    { label: "Follow-up Done", sub: "Automated Loop" },
                    { label: "Autonomous", sub: "Manual Replaced", highlight: true }
                ].map((node, i) => (
                    <motion.div
                        key={i}
                        className={`bg-white border ${node.highlight ? 'border-neutral-900 shadow-2xl' : 'border-neutral-100 shadow-sm'} px-4 py-8 w-44 text-center group transition-all duration-700 hover:border-neutral-400`}
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.25, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className={`text-[11px] font-bold ${node.highlight ? 'text-neutral-900' : 'text-neutral-700'} mb-2 uppercase tracking-widest leading-tight`}>{node.label}</div>
                        <div className="text-[8px] text-neutral-400 font-mono tracking-widest">{node.sub}</div>
                        <div className="mt-4 flex justify-center gap-1">
                           {[1,2].map(dot => (
                             <div key={dot} className={`w-1 h-1 ${node.highlight ? 'bg-neutral-900' : 'bg-neutral-200'} rounded-full`} />
                           ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center mt-32 opacity-20 grayscale hover:opacity-40 transition-all duration-1000">
            {['OpenAI', 'WhatsApp', 'Google Sheets', 'CRM'].map((brand, i) => (
                <div key={i} className="text-[10px] font-bold text-neutral-400 tracking-[0.5em] uppercase border-t border-neutral-50 pt-10">{brand}</div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;