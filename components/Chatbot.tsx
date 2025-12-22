import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Send, X, ArrowRight } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

interface Message {
  role: 'user' | 'bot';
  text: string;
}

interface ChatbotProps {
  onOpenModal: () => void;
}

const Chatbot: React.FC<ChatbotProps> = ({ onOpenModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'bot',
      text: "Hi, I’m Emily. I can explain how NodeArc works, or help you decide if automation makes sense for your business."
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...messages.map(m => ({
          role: m.role === 'bot' ? 'model' : 'user',
          parts: [{ text: m.text }]
        })), { role: 'user', parts: [{ text: userMessage }] }],
        config: {
          systemInstruction: `You are Emily, a clarity assistant for NodeArc AI.
NodeArc AI designs and deploys production-grade automation systems for businesses.

TONE RULES:
- Calm, professional, intelligent, and serious.
- Absolutely NO emojis.
- No casual language.
- Concise answers (max 2-3 sentences).

ROLE RULES:
- You are a clarity assistant, NOT a sales bot.
- Your primary goal is to help visitors understand how NodeArc works and assess automation feasibility.
- Translate technical concepts like "orchestration" or "webhooks" only if explicitly asked.
- COLLECT NO PERSONAL DATA. Do not ask for name, email, or phone number.
- If the user shows serious intent or asks for a consultation, suggest the Strategy Call.
- Ask max 2-3 light questions to help the user think through their needs.

FINAL CALL TO ACTION:
- When a user shows intent, say exactly: "If this feels relevant, the next step is a strategy call."
- This will trigger a button in the UI for them to request it.`,
          temperature: 0.4,
        },
      });

      const botText = response.text || "I apologize, I'm having trouble connecting to my systems. The best step would be to request a strategy call for specific assistance.";
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error) {
      console.error('Chatbot error:', error);
      setMessages(prev => [...prev, { role: 'bot', text: "I'm sorry, I'm currently experiencing technical difficulties. You may want to request a strategy call directly." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-24 right-0 w-[calc(100vw-4rem)] sm:w-[420px] bg-[#0A0A0A] border border-white/10 rounded-sm shadow-[0_40px_100px_rgba(0,0,0,0.8)] flex flex-col h-[600px] md:h-[700px] overflow-hidden"
          >
            {/* Header */}
            <div className="p-8 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
              <div className="flex items-center gap-4">
                <div className="w-1.5 h-1.5 bg-neutral-600 rounded-full" />
                <span className="text-[11px] font-mono uppercase tracking-[0.4em] text-neutral-500">Assistant: Emily</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-neutral-600 hover:text-white transition-colors p-2">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-8 space-y-10 scrollbar-thin scrollbar-thumb-white/10 overscroll-contain">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[90%] p-6 text-[15px] leading-relaxed rounded-sm ${msg.role === 'user' ? 'bg-white text-black font-semibold' : 'bg-white/[0.03] text-neutral-300 border border-white/5'}`}>
                    {msg.text}
                    {msg.text.toLowerCase().includes('strategy call') && (
                      <button
                        onClick={() => {
                          setIsOpen(false);
                          onOpenModal();
                        }}
                        className="mt-8 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-white bg-white/10 hover:bg-white hover:text-black py-5 px-6 transition-all w-full justify-center group"
                      >
                        Request Strategy Call <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" strokeWidth={2.5} />
                      </button>
                    )}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/[0.03] p-5 rounded-sm border border-white/5">
                    <div className="flex gap-2">
                      <div className="w-1.5 h-1.5 bg-neutral-700 rounded-full animate-pulse" />
                      <div className="w-1.5 h-1.5 bg-neutral-700 rounded-full animate-pulse [animation-delay:0.2s]" />
                      <div className="w-1.5 h-1.5 bg-neutral-700 rounded-full animate-pulse [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Section */}
            <div className="p-8 border-t border-white/5 bg-white/[0.02]">
              <div className="flex gap-4">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask a question..."
                  className="flex-1 bg-white/[0.03] border border-white/10 rounded-sm px-5 py-4 text-base text-white focus:outline-none focus:border-white/30 transition-colors placeholder:text-neutral-700"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isTyping}
                  className="bg-white text-black p-4 rounded-sm disabled:opacity-20 hover:bg-neutral-200 transition-colors shadow-2xl"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center bg-neutral-900 border border-white/10 text-white w-16 h-16 md:w-20 md:h-20 rounded-sm shadow-[0_20px_60px_rgba(0,0,0,0.6)] hover:bg-neutral-800 hover:border-white/20 transition-all duration-500"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.5 }}>
              <X className="w-8 h-8" strokeWidth={1.5} />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.5 }}>
              <MessageCircle className="w-8 h-8" strokeWidth={1.5} />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Hover Label */}
        <span className="absolute right-24 bg-neutral-900 border border-white/10 px-6 py-3 text-[10px] font-mono uppercase tracking-[0.4em] pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-500 hidden md:block whitespace-nowrap shadow-2xl translate-x-4 group-hover:translate-x-0">
          Ask Emily
        </span>
      </button>
    </div>
  );
};

export default Chatbot;