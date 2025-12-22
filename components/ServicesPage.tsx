import React from 'react';
import { motion } from 'framer-motion';

const ServicesPage: React.FC = () => {
  const systems = [
    {
      title: "WhatsApp Chatbots",
      replaces: "Manual customer replies and human support bottlenecks.",
      guarantees: "Instant, accurate resolution 24/7 on WhatsApp.",
      desc: "We build chatbots that don't just 'chat'—they solve. By integrating with your existing documentation, we create a layer of support that scales infinitely without hiring more staff."
    },
    {
      title: "Chatbot → CRM Automation",
      replaces: "Manual data entry and inconsistent follow-ups.",
      guarantees: "Every lead is captured and saved automatically.",
      desc: "A lead-to-reporting pipeline that removes human delay. We build the architecture that identifies high-value customer intent and saves it directly into your CRM or Google Sheets."
    },
    {
      title: "AI Call & Support Agents",
      replaces: "Repetitive routine calls and manual workflow coordination.",
      guarantees: "Drastic reduction in missed calls and support delay.",
      desc: "Internal and external systems hardened by AI. We handle your most critical repetitive tasks—from support calls to order status updates—and build automation that never sleeps."
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-48 bg-dark text-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl font-bold tracking-tight mb-12 leading-none"
          >
            What We Build
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl text-neutral-400 font-light max-w-3xl leading-relaxed tracking-wide"
          >
            Automation systems designed to reply to customers, capture leads, and remove operational drag.
          </motion.p>
        </div>
      </section>

      {systems.map((system, idx) => (
        <section key={idx} className={`py-48 ${idx % 2 === 0 ? 'bg-white text-dark' : 'bg-dark text-white border-y border-white/5'}`}>
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-10 leading-tight">{system.title}</h2>
              <div className="space-y-10 text-xl font-light leading-relaxed">
                <p>{system.desc}</p>
                <div className="space-y-6 pt-12 border-t border-current/10">
                  <div className="flex gap-6 items-start">
                    <span className="text-[10px] font-mono uppercase tracking-[0.4em] opacity-40 pt-2 shrink-0">Replaces</span>
                    <span className="flex-1 leading-relaxed">{system.replaces}</span>
                  </div>
                  <div className="flex gap-6 items-start">
                    <span className="text-[10px] font-mono uppercase tracking-[0.4em] opacity-40 pt-2 shrink-0">Guarantees</span>
                    <span className="flex-1 font-semibold leading-relaxed">{system.guarantees}</span>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="hidden lg:flex items-center justify-center">
               <div className={`w-full aspect-[4/3] border ${idx % 2 === 0 ? 'border-neutral-100 bg-neutral-50' : 'border-white/5 bg-white/5'} flex items-center justify-center p-16 relative overflow-hidden`}>
                  <div className="w-full space-y-6 relative z-10">
                    <motion.div 
                      initial={{ width: 0 }} 
                      whileInView={{ width: '75%' }} 
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className={`h-1.5 rounded-full ${idx % 2 === 0 ? 'bg-neutral-900' : 'bg-white/20'}`}
                    ></motion.div>
                    <motion.div 
                      initial={{ width: 0 }} 
                      whileInView={{ width: '45%' }} 
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.7 }}
                      className={`h-1.5 rounded-full ${idx % 2 === 0 ? 'bg-neutral-200' : 'bg-white/10'}`}
                    ></motion.div>
                    <motion.div 
                      initial={{ width: 0 }} 
                      whileInView={{ width: '90%' }} 
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.9 }}
                      className={`h-1.5 rounded-full ${idx % 2 === 0 ? 'bg-neutral-400' : 'bg-white/30'}`}
                    ></motion.div>
                  </div>
                  {/* Decorative faint background element */}
                  <div className={`absolute top-0 right-0 w-64 h-64 blur-3xl opacity-10 rounded-full translate-x-1/2 -translate-y-1/2 ${idx % 2 === 0 ? 'bg-black' : 'bg-white'}`} />
               </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ServicesPage;