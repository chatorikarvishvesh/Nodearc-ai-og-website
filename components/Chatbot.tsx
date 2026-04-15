import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const Chatbot: React.FC = () => {
  const whatsappNumber = "+918421022717";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}`;

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="group relative flex items-center justify-center bg-plum border border-gold/10 text-white w-16 h-16 md:w-20 md:h-20 rounded-sm shadow-[0_20px_60px_rgba(0,0,0,0.6)] hover:bg-plum-light hover:border-gold/20 transition-all duration-500 glass-card"
      >
        <MessageCircle className="w-8 h-8 text-gold" strokeWidth={1.5} />
        
        {/* Hover Label */}
        <span className="absolute right-24 bg-plum border border-gold/10 px-6 py-3 text-[10px] font-mono uppercase tracking-[0.4em] pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-500 hidden md:block whitespace-nowrap shadow-2xl translate-x-4 group-hover:translate-x-0 text-gold">
          Chat on WhatsApp
        </span>
      </motion.a>
    </div>
  );
};

export default Chatbot;