import React from 'react';
import Button from './Button';

interface FinalCTAProps {
  onOpenModal: () => void;
  onNavigate?: (page: string) => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenModal, onNavigate }) => {
  return (
    <section className="py-48 bg-white border-t border-neutral-100">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-neutral-900 mb-16 leading-[1.1] max-w-4xl mx-auto">
          Want to see how this would work for your business?
        </h2>
        
        <Button variant="secondary" onClick={onOpenModal} withArrow className="h-24 px-20 text-2xl font-bold">
          Understand the solution
        </Button>
      </div>

      <footer className="max-w-6xl mx-auto px-6 mt-64 pt-16 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-start text-sm text-neutral-500 gap-16">
        <div className="space-y-8">
          <div className="space-y-3">
            <div className="font-bold text-neutral-900 tracking-tight text-2xl">NodeArc AI</div>
            <p className="max-w-xs font-light leading-relaxed text-neutral-400">Production-grade systems engineering. Infrastructure that scales without chaos.</p>
          </div>
          
          <div className="space-y-1.5 text-[11px] text-neutral-400 font-mono uppercase tracking-[0.2em] pt-4">
            <p className="text-neutral-900 font-bold">NodeArc Systems Ltd.</p>
            <p>enquiry@nodearcai.com</p>
            <p>+91 7769004033</p>
            <p>Pune · Chhatrapati Sambhaji Nagar</p>
          </div>
          
          <div className="pt-8 text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-300">© 2024 NodeArc AI</div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-20">
          <div className="space-y-6">
            <h4 className="text-neutral-900 font-bold uppercase tracking-[0.4em] text-[10px]">Company</h4>
            <div className="flex flex-col gap-4 text-[11px] font-mono uppercase tracking-widest">
              <button onClick={() => onNavigate?.('home')} className="hover:text-neutral-900 transition-colors text-left">Home</button>
              <button onClick={() => onNavigate?.('about')} className="hover:text-neutral-900 transition-colors text-left">About</button>
              <button onClick={() => onNavigate?.('services')} className="hover:text-neutral-900 transition-colors text-left">Services</button>
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-neutral-900 font-bold uppercase tracking-[0.4em] text-[10px]">Access</h4>
            <div className="flex flex-col gap-4 text-[11px] font-mono uppercase tracking-widest">
              <a href="#" className="hover:text-neutral-900 transition-colors">Twitter</a>
              <a href="#" className="hover:text-neutral-900 transition-colors">LinkedIn</a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-neutral-900 font-bold uppercase tracking-[0.4em] text-[10px]">Legal</h4>
            <div className="flex flex-col gap-4 text-[11px] font-mono uppercase tracking-widest">
              <a href="#" className="hover:text-neutral-900 transition-colors">Privacy</a>
              <a href="#" className="hover:text-neutral-900 transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default FinalCTA;