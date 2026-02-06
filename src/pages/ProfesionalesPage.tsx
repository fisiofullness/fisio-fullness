import React from 'react';
import { Topbar, Header, Footer } from '../components/common';
import { SectionBanner } from '../components/sections';

const ProfesionalesPage: React.FC = () => {
  return (
    <div className="w-full">
      <Topbar />
      <Header />
      <SectionBanner
        backgroundImage="/section-banners/nosotros.png"
        title="Cuidar tu bienestar es nuestra prioridad"
        subtitle="En Fullness creemos que sentirte bien no debería ser complicado. Aquí encontrará atención en salud es simple, humana y accesible."
      />
      <Footer />
    </div>
  );
};

export default ProfesionalesPage;
