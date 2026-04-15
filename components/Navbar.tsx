import React, { useState, useEffect } from 'react';
import Button from './Button';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-plum/80 backdrop-blur-md border-b border-gold/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <button onClick={() => onNavigate('home')} className="flex items-center gap-2 group">
            <div className="w-3 h-3 bg-gold rounded-full transition-transform group-hover:scale-125 shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>
            <span className="text-white font-display font-bold tracking-tighter text-lg">NodeArc AI</span>
        </button>
        
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'services', label: 'Services' }
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`text-[11px] font-mono uppercase tracking-[0.2em] transition-colors ${
                  currentPage === link.id ? 'text-gold' : 'text-lavender hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
          
          <Button 
            variant="outline" 
            onClick={() => onNavigate('about')} 
            className="h-10 px-8 text-xs uppercase font-semibold tracking-wider border-gold/20 hover:border-gold/50"
          >
            About
          </Button>
        </div>

        {/* Mobile Menu Button - Minimal */}
        <div className="md:hidden">
            <button onClick={() => onNavigate('about')} className="text-[10px] font-mono text-white border border-gold/20 px-4 py-2 uppercase tracking-widest hover:border-gold/50">
                About
            </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;