import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, ShieldCheck } from 'lucide-react';

const ROI: React.FC = () => {
  return (
    <section className="py-24 bg-plum-radial text-white border-t border-gold/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-6 leading-[1.1] glow-text">
              Complete Lead Management System
            </h2>
            <p className="text-lg text-lavender font-light leading-relaxed max-w-lg">
              From first message to final conversion — handled automatically.
            </p>
          </motion.div>

          <div className="space-y-12">
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
                className="flex gap-8 items-start group"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
              >
                <div className="pt-1">
                  <item.icon className="w-6 h-6 text-gold/40 group-hover:text-gold transition-colors duration-500" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-white mb-2 tracking-tight group-hover:text-gold transition-colors duration-500">{item.label}</h3>
                  <p className="text-lavender leading-relaxed text-base font-light">{item.desc}</p>
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