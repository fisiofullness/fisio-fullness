import React from 'react';
import { Topbar, Header, Footer } from '../components/common';
import { Hero, StatsSection, Features, Services } from '../components/sections';
import Articles from '../components/sections/Articles';
import Communities from '../components/sections/Communities';
import HeroQuestions from '../components/sections/HeroQuestions';

const HomePage: React.FC = () => {
  return (
    <div className="w-full">
      <Topbar />
      <Header />
      <Hero />
      <StatsSection />
      <Features />
      <Services />
      <HeroQuestions />
      <Articles />
      <Communities />
      <Footer />
    </div>
  );
};

export default HomePage;
