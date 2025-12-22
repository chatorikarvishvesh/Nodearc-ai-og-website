import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquareText, GitMerge, Bot } from 'lucide-react';

const systems = [
  {
    title: "WhatsApp Chatbots",
    description: "Instant replies to customers on WhatsApp — even when your team is offline.",
    icon: MessageSquareText
  },
  {
    title: "Chatbot → CRM Automation",
    description: "Customer messages are captured automatically and saved into your CRM or Excel sheet.",
    icon: GitMerge
  },
  {
    title: "AI Call & Support Agents",
    description: "AI handles routine customer calls and support without hiring extra staff.",
    icon: Bot
  }
];

const Services: React.FC = () => {
  return (
    <section className="py-48 bg-white relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          className="mb-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="text-[10px] font-mono text-neutral-400 tracking-[0.4em] uppercase mb-6 block">The Scope</span>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-neutral-900 mb-8 leading-tight">What We Build</h2>
          <p className="text-xl text-neutral-500 max-w-xl font-light">Simple systems. Production-grade execution.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {systems.map((system, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group p-12 border border-neutral-100 hover:border-neutral-300 transition-all duration-700 bg-white hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-neutral-50 rounded-sm flex items-center justify-center mb-10 group-hover:bg-neutral-900 transition-colors duration-700">
                <system.icon className="w-7 h-7 text-neutral-900 group-hover:text-white transition-colors duration-700" strokeWidth={1.2} />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-6 tracking-tight">{system.title}</h3>
              <p className="text-neutral-500 leading-relaxed text-lg font-light">{system.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;