import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Database, Clock, BarChart3 } from 'lucide-react';

const systems = [
  {
    title: "Instant replies",
    description: "Your customers get a reply within seconds — every time.",
    icon: MessageSquare,
    animation: (
      <div className="flex gap-1 mt-2">
        <div className="w-1 h-1 bg-gold rounded-full animate-bounce" />
        <div className="w-1 h-1 bg-gold rounded-full animate-bounce [animation-delay:0.2s]" />
        <div className="w-1 h-1 bg-gold rounded-full animate-bounce [animation-delay:0.4s]" />
      </div>
    )
  },
  {
    title: "Leads never get lost",
    description: "All customer details are captured and stored automatically.",
    icon: Database,
    animation: (
      <div className="relative mt-2 w-full h-1 bg-plum/5 rounded-full overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gold"
          initial={{ x: '-100%' }}
          whileInView={{ x: '100%' }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      </div>
    )
  },
  {
    title: "Follow-ups on autopilot",
    description: "No manual work. Every lead is followed up automatically.",
    icon: Clock,
    animation: (
      <div className="mt-2 flex items-center gap-2">
        <div className="text-[8px] font-mono text-gold/40 uppercase tracking-tighter">Scheduled</div>
        <div className="w-2 h-2 border border-gold/20 rounded-full animate-ping" />
      </div>
    )
  },
  {
    title: "More conversions",
    description: "Faster replies + consistent follow-ups = more sales.",
    icon: BarChart3,
    animation: (
      <div className="flex items-end gap-1 mt-2 h-3">
        <motion.div className="w-1 bg-gold/20" animate={{ height: ['20%', '60%', '20%'] }} transition={{ duration: 2, repeat: Infinity }} />
        <motion.div className="w-1 bg-gold/40" animate={{ height: ['40%', '100%', '40%'] }} transition={{ duration: 2, repeat: Infinity, delay: 0.2 }} />
        <motion.div className="w-1 bg-gold" animate={{ height: ['60%', '80%', '60%'] }} transition={{ duration: 2, repeat: Infinity, delay: 0.4 }} />
      </div>
    )
  }
];

const Services: React.FC = () => {
  return (
    <section className="py-24 bg-violet-white relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-plum mb-4 leading-tight">What you get</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {systems.map((system, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group p-8 border border-plum/5 hover:border-gold/30 transition-all duration-700 bg-white hover:-translate-y-1 shadow-sm hover:shadow-lg flex flex-col"
            >
              <div className="w-12 h-12 bg-plum/5 rounded-sm flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-700">
                <system.icon className="w-6 h-6 text-plum group-hover:text-dark transition-colors duration-700" strokeWidth={1.2} />
              </div>
              <h3 className="text-xl font-display font-bold text-plum mb-4 tracking-tight">{system.title}</h3>
              <p className="text-plum/60 leading-relaxed text-base font-light mb-6 flex-1">{system.description}</p>
              
              <div className="pt-6 border-t border-plum/5">
                {system.animation}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;