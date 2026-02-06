import React from 'react';

interface Service {
  title: string;
  description: string;
  icon: string;
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      title: 'Rehabilitación Deportiva',
      description: 'Recuperación completa de lesiones deportivas con protocolos avanzados',
      icon: '/modalidades/gridicons_house.png'
    },
    {
      title: 'Fisioterapia Respiratoria',
      description: 'Mejora de la función respiratoria y capacidad pulmonar',
      icon: '/modalidades/material-symbols_computer-rounded.png'
    },
    {
      title: 'Masoterapia Terapéutica',
      description: 'Tratamientos con masaje especializado para aliviar tensiones',
      icon: '/beneficios/perfil.png'
    },
    {
      title: 'Terapia Manual Avanzada',
      description: 'Técnicas manuales efectivas para diferentes patologías',
      icon: '/beneficios/doctor.png'
    },
    {
      title: 'Cinesiterapia',
      description: 'Ejercicios terapéuticos para mejorar movilidad y fuerza',
      icon: '/modalidades/mingcute_hospital-fill.png'
    },
    {
      title: 'Electroestimulación',
      description: 'Tratamiento con tecnología de punta para aceleración de recuperación',
      icon: '/beneficios/hospital.png'
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Nuestros Servicios</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Contamos con una amplia gama de servicios diseñados para tu recuperación y bienestar
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 p-8 rounded-2xl hover:border-primary hover:shadow-xl transition-all cursor-pointer"
            >
              <img src={service.icon} alt={service.title} className="w-16 h-16 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-primary mb-3">{service.title}</h3>
              <p className="text-gray-600 group-hover:text-gray-800 transition">{service.description}</p>
              
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="px-10 py-4 bg-primary text-white font-bold text-lg rounded-lg hover:bg-primary-light transition">
            Ver todos los servicios
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
