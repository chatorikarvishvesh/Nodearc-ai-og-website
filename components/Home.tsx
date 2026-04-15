import React from 'react';
import Hero from './Hero';
import Services from './Services';
import ROI from './ROI';
import Trust from './Trust';
import Process from './Process';
import Positioning from './Positioning';
import FinalCTA from './FinalCTA';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <main>
      <Hero />
      <Services />
      <ROI />
      <Trust />
      <Process />
      <Positioning />
      <FinalCTA onNavigate={onNavigate} />
    </main>
  );
};

export default Home;