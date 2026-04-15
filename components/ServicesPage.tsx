import React from 'react';
import { motion } from 'framer-motion';

const ServicesPage: React.FC = () => {
  const systems = [
    {
      title: "Instant Customer Replies",
      replaces: "Manual customer replies and human support bottlenecks.",
      guarantees: "Instant, accurate resolution 24/7.",
      desc: "Your customers get a reply within seconds — every time. We build systems that answer questions and collect lead details automatically on WhatsApp, Instagram, and your website."
    },
    {
      title: "Automated Lead Tracking",
      replaces: "Manual data entry and inconsistent follow-ups.",
      guarantees: "Every lead is captured and saved automatically.",
      desc: "All customer details are captured and stored automatically in your CRM or Excel sheet. No more manual data entry or lost opportunities."
    },
    {
      title: "Follow-ups on Autopilot",
      replaces: "Repetitive routine calls and manual workflow coordination.",
      guarantees: "Consistent follow-ups without manual effort.",
      desc: "No manual work. Every lead is followed up automatically via call or message. Faster replies + consistent follow-ups = more sales."
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-24 bg-plum-radial text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-8 glow-text"
          >
            What you get
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-lavender font-light max-w-2xl mx-auto leading-relaxed tracking-wide"
          >
            Complete systems designed to manage your leads, follow up automatically, and help you convert more customers.
          </motion.p>
        </div>
      </section>

      {systems.map((system, idx) => (
        <section key={idx} className={`py-24 ${idx % 2 === 0 ? 'bg-violet-white text-plum' : 'bg-plum text-white border-y border-gold/5'}`}>
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-8 leading-tight">{system.title}</h2>
              <div className="space-y-8 text-base font-light leading-relaxed">
                <p className={idx % 2 === 0 ? 'text-plum/70' : 'text-lavender'}>{system.desc}</p>
                <div className={`space-y-4 pt-8 border-t ${idx % 2 === 0 ? 'border-plum/10' : 'border-gold/10'}`}>
                  <div className="flex gap-4 items-start">
                    <span className={`text-[9px] font-mono uppercase tracking-[0.4em] pt-1.5 shrink-0 ${idx % 2 === 0 ? 'text-plum/40' : 'text-gold/40'}`}>Replaces</span>
                    <span className="flex-1 leading-relaxed text-sm">{system.replaces}</span>
                  </div>
                  <div className="flex gap-4 items-start">
                    <span className={`text-[9px] font-mono uppercase tracking-[0.4em] pt-1.5 shrink-0 ${idx % 2 === 0 ? 'text-plum/40' : 'text-gold/40'}`}>Guarantees</span>
                    <span className={`flex-1 font-display font-bold leading-relaxed text-sm ${idx % 2 === 0 ? 'text-plum' : 'text-gold'}`}>{system.guarantees}</span>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="hidden lg:flex items-center justify-center">
               <div className={`w-full aspect-[16/9] border ${idx % 2 === 0 ? 'border-plum/5 bg-white' : 'border-gold/10 bg-plum-light/10'} flex items-center justify-center p-12 relative overflow-hidden shadow-sm`}>
                  <div className="w-full space-y-4 relative z-10">
                    <motion.div 
                      initial={{ width: 0 }} 
                      whileInView={{ width: '75%' }} 
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className={`h-1 rounded-full ${idx % 2 === 0 ? 'bg-gold' : 'bg-gold/40'}`}
                    ></motion.div>
                    <motion.div 
                      initial={{ width: 0 }} 
                      whileInView={{ width: '45%' }} 
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.7 }}
                      className={`h-1 rounded-full ${idx % 2 === 0 ? 'bg-plum/10' : 'bg-white/10'}`}
                    ></motion.div>
                    <motion.div 
                      initial={{ width: 0 }} 
                      whileInView={{ width: '90%' }} 
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.9 }}
                      className={`h-1 rounded-full ${idx % 2 === 0 ? 'bg-plum/30' : 'bg-white/30'}`}
                    ></motion.div>
                  </div>
                  {/* Decorative faint background element */}
                  <div className={`absolute top-0 right-0 w-48 h-48 blur-3xl opacity-10 rounded-full translate-x-1/2 -translate-y-1/2 ${idx % 2 === 0 ? 'bg-gold' : 'bg-plum-light'}`} />
               </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ServicesPage;