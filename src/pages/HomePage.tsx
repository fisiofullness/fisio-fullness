import React from 'react';
import { Topbar, Header, Footer } from '../components/common';
import { Hero, StatsSection, Features, Services, ExpertSection } from '../components/sections';
import Testimonials from '../components/sections/Testimonials';

const HomePage: React.FC = () => {
  return (
    <div className="w-full">
      <Topbar />
      <Header />
      <Hero />
      <StatsSection />
      <Features />
      <Services />
      <Testimonials />
      <ExpertSection />
      <Footer />
    </div>
  );
};

export default HomePage;
