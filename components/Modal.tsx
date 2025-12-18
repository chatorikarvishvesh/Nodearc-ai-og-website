import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Button from './Button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setSubmitted(false); // Reset state on open
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop - Premium blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[60]"
          />
          
          {/* Modal Centering Container */}
          <div className="fixed inset-0 z-[70] flex items-start md:items-center justify-center p-4 md:p-6 pointer-events-none pt-12 md:pt-6">
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-lg bg-[#0A0A0A] border border-white/10 rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col pointer-events-auto max-h-[90vh]"
            >
              {/* Header / Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-neutral-500 hover:text-white transition-colors z-[80] p-2"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Scrollable Form Content */}
              <div className="overflow-y-auto p-8 md:p-12 scrollbar-thin scrollbar-thumb-white/10 overscroll-contain">
                {!submitted ? (
                  <div className="space-y-10">
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">Request a Strategy Call</h2>
                      <p className="text-base text-neutral-500 font-light">This is not a sales call. We’ll understand your use case and assess feasibility.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="space-y-2">
                        <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500 block">Full Name *</label>
                        <input
                          required
                          type="text"
                          className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3.5 text-white focus:outline-none focus:border-white/40 transition-colors placeholder:text-neutral-700"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500 block">Company / Role</label>
                        <input
                          type="text"
                          className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3.5 text-white focus:outline-none focus:border-white/40 transition-colors placeholder:text-neutral-700"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500 block">Email ID *</label>
                        <input
                          required
                          type="email"
                          className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3.5 text-white focus:outline-none focus:border-white/40 transition-colors placeholder:text-neutral-700"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500 block">Mobile / WhatsApp Number *</label>
                        <input
                          required
                          type="tel"
                          className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3.5 text-white focus:outline-none focus:border-white/40 transition-colors placeholder:text-neutral-700"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500 block">Brief Description</label>
                        <textarea
                          rows={3}
                          placeholder="What are you trying to automate?"
                          className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3.5 text-white focus:outline-none focus:border-white/40 transition-colors placeholder:text-neutral-700 resize-none"
                        />
                      </div>

                      <Button variant="primary" fullWidth className="h-16 text-base font-bold tracking-widest uppercase">
                        Request Call
                      </Button>
                      
                      {/* Safety padding for mobile viewports */}
                      <div className="h-6" />
                    </form>
                  </div>
                ) : (
                  <div className="py-24 text-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="space-y-6"
                    >
                      <div className="w-16 h-16 bg-white rounded-full mx-auto flex items-center justify-center">
                        <motion.div
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          <svg className="w-8 h-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </motion.div>
                      </div>
                      <h3 className="text-3xl font-bold text-white tracking-tight">Request Received</h3>
                      <p className="text-neutral-500 text-lg font-light">Thanks. If there’s a fit, we’ll reach out.</p>
                      <div className="pt-8">
                        <button onClick={onClose} className="text-neutral-400 border-b border-neutral-800 hover:border-neutral-500 pb-1 transition-all text-sm uppercase tracking-widest font-mono">Return to site</button>
                      </div>
                    </motion.div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;