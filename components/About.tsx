import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Section 1: Philosophy (Hero-style, dark) */}
      <section className="py-40 bg-dark text-white border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
          >
            We build systems, not tools.
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto"
          >
            Automation as infrastructure. Reliability over experimentation. 
            Long-term operational thinking for businesses that plan to scale.
          </motion.div>
        </div>
      </section>

      {/* Section 2: How We Think (white) */}
      <section className="py-40 bg-white text-dark">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            {[
              {
                title: "Determinism over guesswork",
                desc: "Every input must have a predictable, reliable, and observable output."
              },
              {
                title: "Infrastructure over scripts",
                desc: "We engineer resilient environments, not fragile one-off sequences."
              },
              {
                title: "Outcomes over features",
                desc: "We prioritize business resolution and speed over technical novelty."
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="space-y-6"
              >
                <div className="h-[1px] w-12 bg-neutral-200 mb-8" />
                <h3 className="text-2xl font-bold tracking-tight">{item.title}</h3>
                <p className="text-neutral-500 font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Accountability (dark) */}
      <section className="py-40 bg-dark text-white border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="space-y-4"
          >
            <span className="text-xs font-mono uppercase tracking-[0.4em] text-neutral-500">The standard</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Founder-led delivery with hands-on execution.</h2>
            <p className="text-neutral-500 text-lg font-light pt-4">
              We operate with high agency and zero fluff. If it doesn't strengthen your business core, we don't build it.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;