import React from 'react';
import Button from './Button';

interface FinalCTAProps {
  onOpenModal: () => void;
  onNavigate?: (page: string) => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenModal, onNavigate }) => {
  return (
    <section className="py-40 bg-white border-t border-neutral-100">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 mb-12 leading-[1.1]">
          If manual work is slowing<br className="hidden md:block" /> your business, it’s time to remove it.
        </h2>
        
        <Button variant="secondary" onClick={onOpenModal} withArrow className="h-20 px-16 text-xl font-bold">
          Book a Strategy Call
        </Button>
      </div>

      <footer className="max-w-6xl mx-auto px-6 mt-48 pt-12 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-start text-sm text-neutral-500 gap-12">
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="font-bold text-neutral-900 tracking-tight text-lg">NodeArc AI</div>
            <p className="max-w-xs font-light leading-relaxed">Production-grade systems engineering. Infrastructure that scales without chaos.</p>
          </div>
          
          <div className="space-y-1 text-xs text-neutral-400 font-light">
            <p>enquiry@nodearcai.com</p>
            <p>+91 7769004033</p>
            <p>Pune · Chhatrapati Sambhaji Nagar</p>
          </div>
          
          <div className="pt-4 text-[10px] font-mono uppercase tracking-widest text-neutral-400">© 2024 NodeArc Systems Ltd.</div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24">
          <div className="space-y-4">
            <h4 className="text-neutral-900 font-bold uppercase tracking-widest text-[10px]">Company</h4>
            <div className="flex flex-col gap-3">
              <button onClick={() => onNavigate?.('about')} className="hover:text-neutral-900 transition-colors text-left">About</button>
              <button onClick={() => onNavigate?.('services')} className="hover:text-neutral-900 transition-colors text-left">Services</button>
              <button onClick={() => onNavigate?.('contact')} className="hover:text-neutral-900 transition-colors text-left">Contact</button>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-neutral-900 font-bold uppercase tracking-widest text-[10px]">Social</h4>
            <div className="flex flex-col gap-3">
              <a href="#" className="hover:text-neutral-900 transition-colors">Twitter</a>
              <a href="#" className="hover:text-neutral-900 transition-colors">LinkedIn</a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-neutral-900 font-bold uppercase tracking-widest text-[10px]">Legal</h4>
            <div className="flex flex-col gap-3">
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