import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, TrendingUp, MessageSquare, DollarSign } from 'lucide-react';
import Button from './Button';

const successEvents = [
  { id: 1, type: 'lead', text: 'New Hot Lead from WhatsApp', icon: MessageSquare, color: 'text-gold' },
  { id: 2, type: 'sale', text: 'Sale Converted: $1,250', icon: DollarSign, color: 'text-green-400' },
  { id: 3, type: 'lead', text: 'Instagram Inquiry Replied by AI', icon: Zap, color: 'text-blue-400' },
  { id: 4, type: 'growth', text: 'Revenue Milestone: +24%', icon: TrendingUp, color: 'text-gold' },
];

const Hero: React.FC = () => {
  const [currentEvent, setCurrentEvent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEvent((prev) => (prev + 1) % successEvents.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-plum-radial overflow-hidden pt-32 pb-20">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#D4AF3708_1px,transparent_1px),linear-gradient(to_bottom,#D4AF3708_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      
      {/* Radial fade for focus */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,transparent,rgba(26,15,31,0.8))]"></div>

      {/* Floating Success Notifications */}
      <div className="absolute top-40 right-10 md:right-20 z-20 hidden sm:block">
        <AnimatePresence mode="wait">
          <motion.div
            key={successEvents[currentEvent].id}
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, scale: 0.9 }}
            className="bg-plum/40 backdrop-blur-xl border border-gold/20 p-4 rounded-sm shadow-2xl flex items-center gap-4 min-w-[280px] glass-card"
          >
            <div className={`w-10 h-10 rounded-full bg-gold/5 flex items-center justify-center border border-gold/10 ${successEvents[currentEvent].color}`}>
              {React.createElement(successEvents[currentEvent].icon, { size: 18 })}
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-gold/60 mb-1">Live Activity</div>
              <div className="text-sm font-medium text-white">{successEvents[currentEvent].text}</div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-block py-1 px-4 rounded-full border border-gold/10 bg-gold/5 text-gold text-[10px] font-mono tracking-[0.3em] uppercase">
            Sales Acceleration Engine
          </span>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-white mb-8 leading-[1.1] glow-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Scale your sales <br className="hidden md:block" /> <span className="text-gold">on autopilot.</span>
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          NodeArc AI builds the systems that capture, qualify, and convert your leads 24/7. Stop chasing—start growing.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="flex flex-col items-center gap-8"
        >
          <Button 
            variant="primary" 
            onClick={() => window.open('https://n8n.srv988293.hstgr.cloud/form/b8b21e79-6c6e-49ef-8b64-b01d44e039a9', '_blank')} 
            withArrow 
            className="h-16 px-12 text-lg font-bold shadow-[0_0_30px_rgba(212,175,55,0.2)]"
          >
            See how it works
          </Button>

          {/* Live Stats Ticker */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 pt-8 border-t border-white/5">
            <div className="text-center">
              <div className="text-2xl font-display font-bold text-white">1,284</div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-gold/60">Leads Captured Today</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-display font-bold text-gold">$14,205</div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-gold/60">Revenue Generated</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-display font-bold text-white">99.9%</div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-gold/60">Uptime Reliability</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Decorative Element */}
      <motion.div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-64 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)] blur-3xl pointer-events-none"
        animate={{ 
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
    </section>
  );
};

export default Hero;