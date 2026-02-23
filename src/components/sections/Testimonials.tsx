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
        'Las terapias que llevé se adaptaron perfectamente a mi rutina laboral. Ahora puedo trabajar sin dolor',
      image: TESTIMONIAL_IMAGES.THERESA,
    },
    {
      id: 2,
      name: 'Leslie Alexander',
      role: 'Paciente de Nutrición',
      quote:
        'Hace meses que tenía anemia, ahora ya esta controlada. Mi nutriólogo me dio confianza y me guió en el proceso',
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

  const renderStars = () => {
    const viewBox = "0 0 38 35";
    
    return (
      <div className="flex justify-center mt-auto gap-[6px]">
        {[1, 2, 3, 4].map((s) => (
          <svg key={s} width="28" height="26" viewBox={viewBox} className="lg:w-[38px] lg:h-[35px]">
            <path
              d="M19 0L23.18 12.8633H36.7063L25.7631 20.8135L29.9431 33.6767L19 25.7265L8.05688 33.6767L12.2369 20.8135L1.29366 12.8633H14.8199L19 0Z"
              fill="#D0A21B"
            />
          </svg>
        ))}
        <svg width="28" height="26" viewBox={viewBox} className="lg:w-[38px] lg:h-[35px]">
          <path
            d="M19 0L23.18 12.8633H36.7063L25.7631 20.8135L29.9431 33.6767L19 25.7265L8.05688 33.6767L12.2369 20.8135L1.29366 12.8633H14.8199L19 0Z"
            fill="#D0A21B"
            fillOpacity="0.3"
          />
        </svg>
      </div>
    );
  };

  return (
    <section className="relative w-full bg-white flex justify-center items-center overflow-hidden min-h-[630px] py-20">
      <div className="w-full max-w-[1440px] px-4 lg:px-12 relative flex flex-col items-center">
        
        <div className="text-center mb-28">
          <h2
            style={{
              fontFamily: 'Raleway, sans-serif',
              fontWeight: 700,
              fontSize: '48.83px',
              color: '#104E75',
              lineHeight: '57px',
            }}
          >
            Lo que dicen nuestros pacientes
          </h2>

          <p
            className="mt-4"
            style={{
              fontFamily: 'Raleway, sans-serif',
              fontWeight: 400,
              fontSize: '20px',
              color: '#488FAD',
            }}
          >
            Fullness ayuda a mejorar el bienestar físico, emocional y nutricional de muchas personas
          </p>
        </div>

        <div className="relative w-full flex justify-center items-center">
          
          <button className="absolute left-0 xl:left-2 top-1/2 -translate-y-1/2 z-20 hidden md:block">
            <img
              src={TESTIMONIAL_IMAGES.ARROW_LEFT}
              alt="Anterior"
              className="w-[48px] h-[48px] opacity-80 hover:opacity-100 hover:scale-110 transition-all cursor-pointer"
            />
          </button>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-8 w-full max-w-[1200px]">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="relative flex flex-col items-center flex-shrink-0 transition-all duration-300"
                style={{
                  width: item.isMain ? '400px' : '340px',
                }}
              >
                <div
                  className="absolute z-10 rounded-full overflow-hidden border-[5px] border-white bg-white shadow-sm"
                  style={{
                    width: item.isMain ? '140px' : '100px',
                    height: item.isMain ? '140px' : '100px',
                    top: item.isMain ? '-70px' : '-50px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                  }}
                >
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>

                <div
                  className="w-full relative flex flex-col items-center text-center px-8 pb-8"
                  style={{
                    backgroundColor: item.isMain ? 'rgba(68, 139, 169, 0.2)' : 'rgba(68, 139, 169, 0.12)',
                    paddingTop: item.isMain ? '85px' : '65px',
                    paddingLeft: item.isMain ? '32px' : '48px',
                    paddingRight: item.isMain ? '32px' : '48px',
                    height: item.isMain ? '340px' : '310px',
                  }}
                >
                  <img
                    src={TESTIMONIAL_IMAGES.QUOTE_ICON}
                    alt="Quote"
                    className="absolute z-0 pointer-events-none"
                    style={{
                      width: item.isMain ? '75px' : '55px',
                      left: item.isMain ? '24px' : '16px',
                      top: item.isMain ? '24px' : '16px',
                      opacity: item.isMain ? 1 : 0.6,
                    }}
                  />

                  <div className="relative z-10 flex flex-col items-center h-full w-full">
                    <h3
                      style={{
                        fontFamily: 'Raleway, sans-serif',
                        fontWeight: 700,
                        fontSize: '24px',
                        color: '#104E75',
                        marginBottom: '4px',
                      }}
                    >
                      {item.name}
                    </h3>

                    <p
                      style={{
                        fontFamily: 'Open Sans, sans-serif',
                        fontWeight: 600,
                        fontSize: '14px',
                        color: '#404143',
                        marginBottom: item.isMain ? '20px' : '16px',
                      }}
                    >
                      {item.role}
                    </p>

                    <p
                      className="flex items-center justify-center flex-grow"
                      style={{
                        fontFamily: 'Open Sans, sans-serif',
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: '26px',
                        color: '#104E75',
                      }}
                    >
                      "{item.quote}"
                    </p>

                    {renderStars()}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="absolute right-0 xl:right-2 top-1/2 -translate-y-1/2 z-20 hidden md:block">
            <img
              src={TESTIMONIAL_IMAGES.ARROW_RIGHT}
              alt="Siguiente"
              className="w-[48px] h-[48px] opacity-80 hover:opacity-100 hover:scale-110 transition-all cursor-pointer"
            />
          </button>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;