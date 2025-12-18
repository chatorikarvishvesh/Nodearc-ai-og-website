import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, ShieldCheck } from 'lucide-react';

const ROI: React.FC = () => {
  return (
    <section className="py-40 bg-dark text-white border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
              Designed for Businesses <br /> That Plan to Scale
            </h2>
            <p className="text-xl text-neutral-400 font-light leading-relaxed mb-8">
              Automation isn't just about speed. It's about consistency, scalability, and removing the bottleneck of human bandwidth.
            </p>
          </motion.div>

          <div className="space-y-16">
            {[
              {
                icon: Clock,
                label: "Response Speed",
                desc: "Systems respond instantly. Humans don’t."
              },
              {
                icon: TrendingUp,
                label: "Cost Compression",
                desc: "Growth without proportional hiring."
              },
              {
                icon: ShieldCheck,
                label: "Error Elimination",
                desc: "Automation doesn’t forget steps or make typos."
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                className="flex gap-8 items-start"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.25 }}
              >
                <div className="pt-1">
                  <item.icon className="w-6 h-6 text-neutral-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">{item.label}</h3>
                  <p className="text-neutral-400 leading-relaxed text-lg font-light">{item.desc}</p>
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