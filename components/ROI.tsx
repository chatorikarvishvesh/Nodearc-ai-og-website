import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, ShieldCheck } from 'lucide-react';

const ROI: React.FC = () => {
  return (
    <section className="py-48 bg-dark text-white border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-[10px] font-mono text-neutral-500 tracking-[0.4em] uppercase mb-8 block">Results</span>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-10 leading-[1.1]">
              Why Businesses Choose Automation
            </h2>
            <p className="text-xl text-neutral-400 font-light leading-relaxed max-w-lg">
              Factual results without the hype. Infrastructure designed to create immediate operational leverage.
            </p>
          </motion.div>

          <div className="space-y-20">
            {[
              {
                icon: Clock,
                label: "Faster Replies",
                desc: "Customers get instant responses, even at night."
              },
              {
                icon: ShieldCheck,
                label: "Less Manual Work",
                desc: "No copy-pasting. No missed leads."
              },
              {
                icon: TrendingUp,
                label: "Lower Costs",
                desc: "Systems work 24/7 without extra staff."
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                className="flex gap-10 items-start"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.3 }}
              >
                <div className="pt-2">
                  <item.icon className="w-7 h-7 text-neutral-600" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{item.label}</h3>
                  <p className="text-neutral-500 leading-relaxed text-lg font-light">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ROI;