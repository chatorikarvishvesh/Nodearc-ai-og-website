import React from 'react';
import Button from './Button';

interface FinalCTAProps {
  onNavigate?: (page: string) => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 bg-violet-white border-t border-plum/5">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-plum mb-6 leading-[1.1] max-w-4xl mx-auto">
          Let your system handle your leads.
        </h2>
        <p className="text-lg md:text-xl text-plum/60 font-light mb-12">While you focus on growing your business.</p>
        
        <Button 
          variant="primary" 
          onClick={() => window.open('https://n8n.srv988293.hstgr.cloud/form/b8b21e79-6c6e-49ef-8b64-b01d44e039a9', '_blank')} 
          withArrow 
          className="h-16 px-12 text-lg font-bold"
        >
          Get started
        </Button>
      </div>

      <footer className="max-w-6xl mx-auto px-6 mt-32 pt-12 border-t border-plum/5 flex flex-col md:flex-row justify-between items-start text-sm text-plum/50 gap-12">
        <div className="space-y-8">
          <div className="space-y-3">
            <div className="font-bold text-plum tracking-tight text-2xl">NodeArc AI</div>
            <p className="max-w-xs font-light leading-relaxed text-plum/40">Production-grade systems engineering. Infrastructure that scales without chaos.</p>
          </div>
          
          <div className="space-y-1.5 text-[11px] text-plum/40 font-mono uppercase tracking-[0.2em] pt-4">
            <p className="text-plum font-bold">NodeArc Systems Ltd.</p>
            <p>enquiry@nodearcai.com</p>
            <p>+91 7769004033</p>
            <p>Pune · Chhatrapati Sambhaji Nagar</p>
          </div>
          
          <div className="pt-8 text-[10px] font-mono uppercase tracking-[0.3em] text-plum/20">© 2024 NodeArc AI</div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-20">
          <div className="space-y-6">
            <h4 className="text-plum font-bold uppercase tracking-[0.4em] text-[10px]">Company</h4>
            <div className="flex flex-col gap-4 text-[11px] font-mono uppercase tracking-widest">
              <button onClick={() => onNavigate?.('home')} className="hover:text-gold transition-colors text-left">Home</button>
              <button onClick={() => onNavigate?.('about')} className="hover:text-gold transition-colors text-left">About</button>
              <button onClick={() => onNavigate?.('services')} className="hover:text-gold transition-colors text-left">Services</button>
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-plum font-bold uppercase tracking-[0.4em] text-[10px]">Access</h4>
            <div className="flex flex-col gap-4 text-[11px] font-mono uppercase tracking-widest">
              <a href="#" className="hover:text-gold transition-colors">Twitter</a>
              <a href="#" className="hover:text-gold transition-colors">LinkedIn</a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-plum font-bold uppercase tracking-[0.4em] text-[10px]">Legal</h4>
            <div className="flex flex-col gap-4 text-[11px] font-mono uppercase tracking-widest">
              <a href="#" className="hover:text-gold transition-colors">Privacy</a>
              <a href="#" className="hover:text-gold transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default FinalCTA;