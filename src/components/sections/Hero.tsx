import React from 'react';
import { PillButton, WhatsAppButton } from '../buttons';
import { HERO_IMAGES } from '../../constants/images';

const Hero: React.FC = () => {
  return (
    <>
      <WhatsAppButton url="https://web.whatsapp.com" />

      <section className="relative bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="z-10">
              <h1 className="text-5xl font-bold text-primary mb-6 leading-tight">
                ¡Recupera tu <span className="text-primary-light">equilibrio con un clic!</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Conecta con especialistas en fisioterapia, psicología y nutrición desde un solo lugar.
              </p>
              <div className="flex gap-4">
                <PillButton variant="primary">
                  Agenda una cita
                </PillButton>
                <PillButton variant="outline">
                  Únete como profesional
                </PillButton>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative">
              <img 
                src={HERO_IMAGES.PORTADA}
                alt="Profesionales de salud" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
