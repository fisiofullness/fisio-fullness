import React from 'react';
import { Topbar, Header, Footer } from '../components/common';
import { SectionBanner } from '../components/sections';

const PacientesPage: React.FC = () => {
  return (
    <div className="w-full">
      <Topbar />
      <Header />
      <SectionBanner
        backgroundImage="/section-banners/servicios.png"
        title="Tu bienestar, en un solo lugar"
        subtitle="Accede a servicios de psicología, nutrición y fisioterapia desde cualquier lugar, con profesionales verificados y en horarios flexibles."
      />
      <Footer />
    </div>
  );
};

export default PacientesPage;
