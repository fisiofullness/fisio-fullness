import React from 'react';
import { PillButton } from '../buttons';
import { HERO_IMAGES } from '../../constants/images';

const Features: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img
              src={HERO_IMAGES.BIENESTAR}
              alt="Bienestar y salud"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="font-semibold mb-2" style={{ color: '#104E75' }}>ACERCA DE FULLNESS</p>
            <h2 className="text-4xl font-bold text-primary mb-6 leading-tight">
              Priorizarte es avanzar
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              En un mundo que nunca se detiene, cuidar de tu bienestar no debería sentirse
              como un lujo, sino como una parte esencial de tu día a día.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              En Fullness creemos que la vida funciona mejor cuando te sientes bien para
              seguir construyendo lo que te importa.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Aquí estás acompañado, no solo atendido.
            </p>
            <PillButton variant="primary">
              Conoce más sobre nosotros
            </PillButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
