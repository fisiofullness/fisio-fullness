import React from 'react';
import { EXPERT_IMAGES } from '../../constants/images';

const ExpertSection: React.FC = () => {
  return (
    <section className="w-full bg-[#104E75] flex justify-center">
      <div className="relative w-full max-w-[1443px] h-[400px] overflow-hidden mx-auto">
        
        {/* Mistery Box */}
        <img
          src={EXPERT_IMAGES.LEFT_ILLUSTRATION}
          alt="Mistery box"
          className="absolute hidden lg:block"
          style={{ 
            left: '84px', 
            top: '173px', 
            height: '227px', 
            width: 'auto',
            objectFit: 'contain'
          }}
        />

        {/* Plant */}
        <img
          src={EXPERT_IMAGES.PLANT_ILUSTRATION}
          alt="Plant"
          className="absolute hidden lg:block z-10"
          style={{ 
            left: '182px', 
            top: '273px', 
            height: '124px', 
            width: 'auto',
            objectFit: 'contain'
          }}
        />

        {/* Right Illustration (Rafiki) */}
        <img
          src={EXPERT_IMAGES.RIGHT_ILLUSTRATION}
          alt="Expert questions"
          className="absolute hidden lg:block z-0"
          style={{ 
            left: '813px', 
            top: '16px', 
            width: '550px', 
            height: '383px',
            objectFit: 'contain'
          }}
        />

        {/* Content Container */}
        <div 
          className="absolute flex flex-col items-center text-center z-20 px-4 lg:px-0 w-full lg:w-[678px] left-1/2 -translate-x-1/2 lg:transform-none lg:left-[189px] top-[70px] lg:top-[103px]"
        >
          <h2
            className="text-white mb-[10px]"
            style={{
              fontFamily: 'Raleway, sans-serif',
              fontWeight: 700,
              fontSize: '48.83px',
              lineHeight: '57px',
            }}
          >
            Tu tranquilidad es primero
          </h2>
          
          <p
            className="text-white mb-[38px] w-full lg:w-[600px]"
            style={{
              fontFamily: 'Raleway, sans-serif',
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: '23px',
            }}
          >
            Envía tu consulta a un experto sin costo y recibe una respuesta personalizada.
          </p>

          <button
            className="flex flex-row items-center justify-center bg-white border border-[#104E75] rounded-[16px] transition-all hover:bg-gray-100 hover:scale-105"
            style={{
              padding: '10px 24px',
              gap: '10px',
              width: '211px',
              height: '44px',
              fontFamily: 'Open Sans, sans-serif',
              fontWeight: 600,
              fontSize: '16px',
              lineHeight: '24px',
              color: '#104E75',
            }}
          >
            Haz tu pregunta aquí
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExpertSection;