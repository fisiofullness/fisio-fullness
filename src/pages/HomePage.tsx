import React from 'react';
import { Topbar, Header, Footer } from '../components/common';
import { Hero, StatsSection, Features, Services } from '../components/sections';

const HomePage: React.FC = () => {
  return (
    <div className="w-full">
      <Topbar />
      <Header />
      <Hero />
      <StatsSection />
      <Features />
      <Services />
      <Footer />
    </div>
  );
};

export default HomePage;
