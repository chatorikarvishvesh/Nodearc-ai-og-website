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

FINAL CALL TO ACTION:
- When a user shows intent, say exactly: "If this feels relevant, the next step is a strategy call."
- This will trigger a button in the UI for them to request it.`,
          temperature: 0.5,
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
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="absolute bottom-20 right-0 w-[calc(100vw-3rem)] sm:w-96 bg-[#0A0A0A] border border-white/10 rounded-sm shadow-2xl flex flex-col h-[500px] md:h-[600px] overflow-hidden"
          >
            {/* Header */}
            <div className="p-5 border-b border-white/5 flex items-center justify-between bg-white/5">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full" />
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400">Assistant: Emily</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-neutral-500 hover:text-white transition-colors p-1">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-8 scrollbar-thin scrollbar-thumb-white/10">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[90%] p-4 text-sm leading-relaxed rounded-sm ${msg.role === 'user' ? 'bg-white text-black font-medium' : 'bg-white/5 text-neutral-300 border border-white/5'}`}>
                    {msg.text}
                    {msg.text.toLowerCase().includes('strategy call') && (
                      <button
                        onClick={() => {
                          setIsOpen(false);
                          onOpenModal();
                        }}
                        className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white bg-white/10 hover:bg-white hover:text-black py-3 px-4 transition-all w-full justify-center group"
                      >
                        Request Strategy Call <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/5 p-4 rounded-sm border border-white/5">
                    <div className="flex gap-1.5">
                      <div className="w-1 h-1 bg-neutral-600 rounded-full animate-pulse" />
                      <div className="w-1 h-1 bg-neutral-600 rounded-full animate-pulse [animation-delay:0.2s]" />
                      <div className="w-1 h-1 bg-neutral-600 rounded-full animate-pulse [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Section */}
            <div className="p-5 border-t border-white/5 bg-white/5">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask a question..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 transition-colors placeholder:text-neutral-600"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isTyping}
                  className="bg-white text-black p-3 rounded-sm disabled:opacity-30 hover:bg-neutral-200 transition-colors shadow-lg"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center bg-neutral-900 border border-white/10 text-white w-14 h-14 md:w-16 md:h-16 rounded-sm shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:bg-neutral-800 hover:border-white/20 transition-all duration-300"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Hover Label */}
        <span className="absolute right-20 bg-neutral-900 border border-white/10 px-4 py-2 text-[10px] font-mono uppercase tracking-[0.2em] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block whitespace-nowrap">
          Ask Emily
        </span>
      </button>
    </div>
  );
};

export default Chatbot;