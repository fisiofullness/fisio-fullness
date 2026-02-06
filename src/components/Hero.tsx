import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary to-primary-light text-white overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="z-10">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Transformamos tu bienestar
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Descubre nuestros servicios de fisioterapia especializados diseñados para mejorar tu calidad de vida.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition">
                Conocer más
              </button>
              <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition">
                Agendar cita
              </button>
            </div>
          </div>

          {/* Right decorative element */}
          <div className="hidden md:block relative">
            <div className="w-96 h-96 bg-white bg-opacity-10 rounded-full absolute -right-20 -top-20 blur-3xl"></div>
            <div className="w-80 h-80 bg-white bg-opacity-10 rounded-full absolute -right-40 -bottom-20 blur-3xl"></div>
            <div className="relative z-10 text-center">
              <div className="w-64 h-64 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <svg className="w-32 h-32 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
