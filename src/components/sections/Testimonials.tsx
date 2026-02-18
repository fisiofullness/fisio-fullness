
import React from 'react';
import { TESTIMONIAL_IMAGES } from '../../constants/images';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
  isMain?: boolean;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Theresa Webb',
      role: 'Paciente de Fisioterapia',
      quote:
        'Las terapias que llevé se adapataron perfectamente a mi rutina laboral. Ahora puedo trabajar sin dolor',
      image: TESTIMONIAL_IMAGES.THERESA,
    },
    {
      id: 2,
      name: 'Leslie Alexander',
      role: 'Paciente de Nutrición',
      quote:
        'Hace meses que tenía anemia, ahora ya esta controlada. Mi nutriólogo me dio confianza y me guío en el proceso',
      image: TESTIMONIAL_IMAGES.LESLIE,
      isMain: true,
    },
    {
      id: 3,
      name: 'Annette Black',
      role: 'Paciente de Psicología',
      quote:
        'Al fin, puedo sentir que todo esta bien. Me devolvieron la calidad de vida que habia perdido, 100% recomendados',
      image: TESTIMONIAL_IMAGES.ANNETTE,
    },
  ];

  const renderStars = () => (
    <div className="flex gap-[5px] justify-center mt-6">
      {[1, 2, 3, 4].map((s) => (
        <svg key={s} width="38" height="35" viewBox="0 0 38 35">
          <path
            d="M19 0L23.18 12.8633H36.7063L25.7631 20.8135L29.9431 33.6767L19 25.7265L8.05688 33.6767L12.2369 20.8135L1.29366 12.8633H14.8199L19 0Z"
            fill="#D0A21B"
          />
        </svg>
      ))}
      <svg width="38" height="35" viewBox="0 0 38 35">
        <path
          d="M19 0L23.18 12.8633H36.7063L25.7631 20.8135L29.9431 33.6767L19 25.7265L8.05688 33.6767L12.2369 20.8135L1.29366 12.8633H14.8199L19 0Z"
          fill="#D0A21B"
          fillOpacity="0.3"
        />
      </svg>
    </div>
  );

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-[1440px]">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2
            style={{
              fontFamily: 'Raleway',
              fontWeight: 700,
              fontSize: '48.83px',
              color: '#104E75',
            }}
          >
            Lo que dicen nuestros pacientes
          </h2>

          <p
            className="mt-4"
            style={{
              fontFamily: 'Raleway',
              fontSize: '20px',
              color: '#488FAD',
            }}
          >
            Fullness ayuda a mejorar el bienestar físico, emocional y nutricional de muchas personas
          </p>
        </div>

        {/* WRAPPER CARDS + FLECHAS */}
        <div className="relative flex justify-center items-center">

          {/* Flecha Izquierda */}
          <button className="absolute -left-16 top-1/2 -translate-y-1/2 z-20">
            <img
              src={TESTIMONIAL_IMAGES.ARROW_LEFT}
              className="w-[40px] h-[40px] opacity-60 hover:opacity-100 transition"
            />
          </button>

          {/* Flecha Derecha */}
          <button className="absolute -right-16 top-1/2 -translate-y-1/2 z-20">
            <img
              src={TESTIMONIAL_IMAGES.ARROW_RIGHT}
              className="w-[40px] h-[40px] opacity-60 hover:opacity-100 transition"
            />
          </button>

          {/* CARDS */}
          <div className="flex gap-12 items-end">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className={`relative flex flex-col items-center ${
                  item.isMain ? 'mt-0' : 'mt-10'
                }`}
                style={{ width: item.isMain ? 400 : 350 }}
              >
                {/* Avatar */}
                <div className="absolute -top-16 z-10">
                  <div
                    className="rounded-full overflow-hidden border-4 border-white"
                    style={{
                      width: item.isMain ? 140 : 120,
                      height: item.isMain ? 140 : 120,
                    }}
                  >
                    <img src={item.image} className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* Card */}
                <div
                  className="pt-20 pb-8 px-8 flex flex-col items-center text-center w-full relative"
                  style={{
                    background: 'rgba(68,139,169,0.2)',
                    minHeight: item.isMain ? 320 : 280,
                  }}
                >
                  {/* Quote */}
                  <img
                    src={TESTIMONIAL_IMAGES.QUOTE_ICON}
                    className="absolute"
                    style={{
                      width: item.isMain ? 80 : 62,
                      left: item.isMain ? 28 : 33,
                      top: item.isMain ? 32 : 29,
                    }}
                  />

                  {/* Name */}
                  <h3
                    className="mt-2"
                    style={{
                      fontFamily: 'Raleway',
                      fontWeight: 700,
                      fontSize: item.isMain ? 25 : 20,
                      color: '#104E75',
                    }}
                  >
                    {item.name}
                  </h3>

                  {/* Role */}
                  <p
                    className="mt-1"
                    style={{
                      fontFamily: 'Open Sans',
                      fontSize: 16,
                      color: '#404143',
                    }}
                  >
                    {item.role}
                  </p>

                  {/* Quote Text */}
                  <p
                    className="mt-4"
                    style={{
                      fontFamily: 'Open Sans',
                      fontSize: 16,
                      lineHeight: '24px',
                      color: '#104E75',
                      maxWidth: item.isMain ? 340 : 296,
                    }}
                  >
                    “{item.quote}”
                  </p>

                  {renderStars()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
