import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquareText, GitMerge, Bot } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: "Autonomous Support Systems",
    description: "Always-on resolution without human bottlenecks.",
    icon: MessageSquareText
  },
  {
    title: "Revenue Infrastructure",
    description: "Every inquiry captured, qualified, and followed up — automatically.",
    icon: GitMerge
  },
  {
    title: "Operational Automation",
    description: "Manual workflows replaced with deterministic systems.",
    icon: Bot
  }
];

const Services: React.FC = () => {
  return (
    <section className="py-40 bg-white relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          className="mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-6">What We Engineer</h2>
          <p className="text-xl text-neutral-500 max-w-xl">We don't sell tools. We engineer outcomes.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="group p-10 border border-neutral-200 hover:border-neutral-400 transition-colors duration-500 bg-white"
            >
              <div className="w-12 h-12 bg-neutral-100 rounded-sm flex items-center justify-center mb-8 group-hover:bg-neutral-900 transition-colors duration-500">
                <service.icon className="w-6 h-6 text-neutral-900 group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4 tracking-tight">{service.title}</h3>
              <p className="text-neutral-600 leading-relaxed text-base">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;