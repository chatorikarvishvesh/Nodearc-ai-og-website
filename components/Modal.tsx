import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2 } from 'lucide-react';
import Button from './Button';
import { supabase } from '../supabase';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setSubmitted(false);
      setError(null);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const payload = {
      full_name: formData.get('full_name'),
      company_role: formData.get('company_role'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      description: formData.get('description'),
    };

    try {
      const { error: supabaseError } = await supabase
        .from('leads')
        .insert([payload]);

      if (supabaseError) throw supabaseError;
      
      setSubmitted(true);
    } catch (err: any) {
      console.error('Error submitting form:', err);
      setError('Something went wrong. Please try again or email us directly.');
    } finally {
      setLoading(false);
    }
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
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-[110]"
          />
          
          {/* Modal Centering Container */}
          <div className="fixed inset-0 z-[120] flex items-start md:items-center justify-center p-4 md:p-8 pointer-events-none pt-12 md:pt-8">
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.98 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-xl bg-[#0A0A0A] border border-white/10 rounded-sm shadow-[0_30px_100px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col pointer-events-auto max-h-[90vh]"
            >
              {/* Header / Close Button */}
              <button
                onClick={onClose}
                className="absolute top-8 right-8 text-neutral-600 hover:text-white transition-colors z-[130] p-2"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" strokeWidth={1.5} />
              </button>

              {/* Scrollable Form Content */}
              <div className="overflow-y-auto p-10 md:p-16 scrollbar-thin scrollbar-thumb-white/10 overscroll-contain">
                {!submitted ? (
                  <div className="space-y-12">
                    <div>
                      <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">Request a Demo</h2>
                      <p className="text-lg text-neutral-500 font-light leading-relaxed">We'll show you a demo of how automation can suit your business.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-10">
                      {error && (
                        <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 text-xs font-mono uppercase tracking-widest text-center">
                          {error}
                        </div>
                      )}

                      <div className="space-y-3">
                        <label className="text-[10px] font-mono uppercase tracking-[0.4em] text-neutral-600 block">Full Name *</label>
                        <input
                          required
                          name="full_name"
                          type="text"
                          className="w-full bg-white/[0.03] border border-white/10 rounded-sm px-5 py-4 text-white focus:outline-none focus:border-white/40 transition-colors placeholder:text-neutral-800 text-lg"
                        />
                      </div>

                      <div className="space-y-3">
                        <label className="text-[10px] font-mono uppercase tracking-[0.4em] text-neutral-600 block">Company / Role</label>
                        <input
                          name="company_role"
                          type="text"
                          className="w-full bg-white/[0.03] border border-white/10 rounded-sm px-5 py-4 text-white focus:outline-none focus:border-white/40 transition-colors placeholder:text-neutral-800 text-lg"
                        />
                      </div>

                      <div className="space-y-3">
                        <label className="text-[10px] font-mono uppercase tracking-[0.4em] text-neutral-600 block">Email ID *</label>
                        <input
                          required
                          name="email"
                          type="email"
                          className="w-full bg-white/[0.03] border border-white/10 rounded-sm px-5 py-4 text-white focus:outline-none focus:border-white/40 transition-colors placeholder:text-neutral-800 text-lg"
                        />
                      </div>

                      <div className="space-y-3">
                        <label className="text-[10px] font-mono uppercase tracking-[0.4em] text-neutral-600 block">Mobile / WhatsApp Number *</label>
                        <input
                          required
                          name="phone"
                          type="tel"
                          className="w-full bg-white/[0.03] border border-white/10 rounded-sm px-5 py-4 text-white focus:outline-none focus:border-white/40 transition-colors placeholder:text-neutral-800 text-lg"
                        />
                      </div>

                      <div className="space-y-3">
                        <label className="text-[10px] font-mono uppercase tracking-[0.4em] text-neutral-600 block">Brief Description</label>
                        <textarea
                          name="description"
                          rows={4}
                          placeholder="What are you trying to automate?"
                          className="w-full bg-white/[0.03] border border-white/10 rounded-sm px-5 py-4 text-white focus:outline-none focus:border-white/40 transition-colors placeholder:text-neutral-800 resize-none text-lg leading-relaxed"
                        />
                      </div>

                      <Button 
                        variant="primary" 
                        fullWidth 
                        type="submit"
                        disabled={loading}
                        className="h-20 text-xl font-bold"
                      >
                        {loading ? (
                          <div className="flex items-center gap-3">
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>Processing...</span>
                          </div>
                        ) : (
                          "Request Demo"
                        )}
                      </Button>
                      
                      <div className="h-8" />
                    </form>
                  </div>
                ) : (
                  <div className="py-32 text-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="space-y-8"
                    >
                      <div className="w-20 h-20 bg-white rounded-full mx-auto flex items-center justify-center">
                        <motion.div
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.8, delay: 0.3 }}
                        >
                          <svg className="w-10 h-10 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </motion.div>
                      </div>
                      <h3 className="text-4xl font-bold text-white tracking-tight">Request Received</h3>
                      <p className="text-xl text-neutral-500 font-light">Our team will get in touch with you.</p>
                      <div className="pt-12">
                        <button onClick={onClose} className="text-neutral-500 border-b border-neutral-900 hover:border-neutral-500 pb-1.5 transition-all text-[11px] uppercase tracking-[0.4em] font-mono">Return to site</button>
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