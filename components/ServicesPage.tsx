import React from 'react';
import { motion } from 'framer-motion';

const ServicesPage: React.FC = () => {
  const systems = [
    {
      title: "Autonomous Support Systems",
      replaces: "Fragmented customer tickets and human support bottlenecks.",
      guarantees: "Instant, accurate resolution 24/7 with deep context awareness.",
      desc: "We engineer systems that don't just 'chat'—they solve. By integrating with your existing documentation and internal APIs, we create a layer of support that scales infinitely without headcount."
    },
    {
      title: "Revenue Infrastructure",
      replaces: "Manual lead qualification and inconsistent follow-ups.",
      guarantees: "Every inquiry is captured, qualified, and routed within seconds.",
      desc: "A lead-to-reporting pipeline that removes human delay. We build the architecture that identifies high-value intent and triggers the necessary follow-up sequences across CRM, Email, and WhatsApp automatically."
    },
    {
      title: "Operational Automation",
      replaces: "Repetitive internal data entry and manual workflow coordination.",
      guarantees: "Drastic reduction in operational drag and failure points.",
      desc: "Internal workflows hardened by systems engineering. We map your most critical repetitive tasks—from fulfillment to reporting—and build deterministic automation that never sleeps, never misses a step, and never scales costs."
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-40 bg-dark text-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
          >
            What We Engineer
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl text-neutral-400 font-light max-w-2xl leading-relaxed"
          >
            Production-grade systems designed to remove operational bottlenecks permanently.
          </motion.p>
        </div>
      </section>

      {systems.map((system, idx) => (
        <section key={idx} className={`py-40 ${idx % 2 === 0 ? 'bg-white text-dark' : 'bg-dark text-white'}`}>
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold tracking-tight mb-8">{system.title}</h2>
              <div className="space-y-8 text-lg font-light leading-relaxed">
                <p>{system.desc}</p>
                <div className="space-y-4 pt-8">
                  <div className="flex gap-4 items-start">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 pt-1.5">Replaces</span>
                    <span className="flex-1">{system.replaces}</span>
                  </div>
                  <div className="flex gap-4 items-start">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 pt-1.5">Guarantees</span>
                    <span className="flex-1 font-medium">{system.guarantees}</span>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="hidden lg:flex items-center justify-center">
               <div className={`w-full aspect-video border ${idx % 2 === 0 ? 'border-neutral-200 bg-neutral-50' : 'border-white/5 bg-white/5'} flex items-center justify-center p-12`}>
                  <div className="w-full space-y-4">
                    <div className={`h-2 rounded-full ${idx % 2 === 0 ? 'bg-neutral-200' : 'bg-white/10'} w-3/4`}></div>
                    <div className={`h-2 rounded-full ${idx % 2 === 0 ? 'bg-neutral-100' : 'bg-white/5'} w-1/2`}></div>
                    <div className={`h-2 rounded-full ${idx % 2 === 0 ? 'bg-neutral-200' : 'bg-white/10'} w-5/6`}></div>
                  </div>
               </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ServicesPage;