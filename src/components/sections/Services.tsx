import React from 'react';
import { SPECIALTIES_IMAGES } from '../../constants/images';
import { PillButton } from '../buttons';

interface Specialty {
  title: string;
  description: string;
  icon: string;
  image: string;
}

const Services: React.FC = () => {
  const specialties: Specialty[] = [
    {
      title: 'Nutrición',
      description: 'Planes alimenticios personalizados para lograr hábitos sostenibles, controlar peso y mejorar tu relación con la comida.',
      icon: SPECIALTIES_IMAGES.NUTRITION.icon,
      image: SPECIALTIES_IMAGES.NUTRITION.background,
    },
    {
      title: 'Fisioterapia',
      description: 'Tratamientos especializados para dolor muscular, lesiones y movilidad, con ejercicios guiados para una recuperación continua.',
      icon: SPECIALTIES_IMAGES.PHYSIOTHERAPY.icon,
      image: SPECIALTIES_IMAGES.PHYSIOTHERAPY.background,
    },
    {
      title: 'Psicología',
      description: 'Recupera tu bienestar emocional con acompañamiento profesional para ansiedad, estrés, autoestima y más.',
      icon: SPECIALTIES_IMAGES.PSYCHOLOGY.icon,
      image: SPECIALTIES_IMAGES.PSYCHOLOGY.background,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Nuestras especialidades</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Da el primer paso para sentirte bien de cuerpo y mente. Elige la especialidad que necesites y recibe atención sin complicaciones.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-visible shadow-lg hover:shadow-xl transition-shadow border-2"
              style={{ borderColor: '#104E75' }}
            >
              <div className="relative h-56">
                <img 
                  src={specialty.image} 
                  alt={specialty.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col items-center">
                <img 
                  src={specialty.icon} 
                  alt={specialty.title} 
                  className="w-12 h-12 -mt-6 relative z-10"
                />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-primary mb-3">{specialty.title}</h3>
                <p className="text-gray-600 mb-6">{specialty.description}</p>
                <div className="flex justify-center">
                  <PillButton variant="primary">
                    Agenda una cita
                  </PillButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
