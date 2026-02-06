import React from 'react';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const Features: React.FC = () => {
  const features: Feature[] = [
    {
      icon: '/beneficios/doctor.png',
      title: 'Profesionales Certificados',
      description: 'Nuestro equipo cuenta con certificaciones internacionales y amplia experiencia'
    },
    {
      icon: '/beneficios/hospital.png',
      title: 'Resultados Rápidos',
      description: 'Tratamientos efectivos con protocolos modernos basados en evidencia científica'
    },
    {
      icon: '/beneficios/doc.png',
      title: 'Atención Personalizada',
      description: 'Cada paciente recibe un plan de tratamiento adaptado a sus necesidades específicas'
    },
    {
      icon: '/beneficios/calendar.png',
      title: 'Horarios Flexibles',
      description: 'Disponibilidad en horarios que se adapten a tu rutina diaria'
    },
    {
      icon: '/beneficios/perfil.png',
      title: 'Equipamiento Moderno',
      description: 'Contamos con la tecnología más avanzada en fisioterapia'
    },
    {
      icon: '/beneficios/cashpay.png',
      title: 'Garantía de Satisfacción',
      description: 'Tu bienestar es nuestra prioridad número uno'
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">¿Por qué elegirnos?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Más de 10 años cuidando la salud de nuestros pacientes con excelencia y profesionalismo
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow"
            >
              <img src={feature.icon} alt={feature.title} className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
