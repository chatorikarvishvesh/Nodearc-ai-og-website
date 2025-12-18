import React from 'react';
import Hero from './Hero';
import Services from './Services';
import ROI from './ROI';
import Trust from './Trust';
import Process from './Process';
import FinalCTA from './FinalCTA';

interface HomeProps {
  onOpenModal: () => void;
  onNavigate: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onOpenModal, onNavigate }) => {
  return (
    <main>
      <Hero onOpenModal={onOpenModal} />
      <Services />
      <ROI />
      <Trust />
      <Process />
      <FinalCTA onOpenModal={onOpenModal} onNavigate={onNavigate} />
    </main>
  );
};

export default Home;