import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import ServicesPage from './components/ServicesPage';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'about':
        return <About />;
      case 'services':
        return <ServicesPage />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="w-full min-h-screen bg-dark text-neutral-200 selection:bg-neutral-800 selection:text-white overflow-x-hidden">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      
      {renderPage()}

      {/* Global Footer for non-home pages (Home has its own built-in FinalCTA footer) */}
      {currentPage !== 'home' && (
        <footer className="bg-white border-t border-neutral-100 py-20">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500 gap-8">
            <button 
              onClick={() => setCurrentPage('home')} 
              className="font-bold text-neutral-900 tracking-tight text-lg"
            >
              NodeArc AI
            </button>
            <div className="flex gap-8 font-mono uppercase tracking-widest text-[10px]">
              <button onClick={() => setCurrentPage('about')} className="hover:text-neutral-900 transition-colors">About</button>
              <button onClick={() => setCurrentPage('services')} className="hover:text-neutral-900 transition-colors">Services</button>
              <button onClick={() => setCurrentPage('contact')} className="hover:text-neutral-900 transition-colors">Contact</button>
            </div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
              © 2024 NodeArc Systems Ltd.
            </div>
          </div>
        </footer>
      )}

      <Chatbot />
    </div>
  );
};

export default App;