import React from 'react';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const Features: React.FC = () => {
  const features: Feature[] = [
    {
      icon: '🏥',
      title: 'Profesionales Certificados',
      description: 'Nuestro equipo cuenta con certificaciones internacionales y amplia experiencia'
    },
    {
      icon: '⚡',
      title: 'Resultados Rápidos',
      description: 'Tratamientos efectivos con protocolos modernos basados en evidencia científica'
    },
    {
      icon: '🎯',
      title: 'Atención Personalizada',
      description: 'Cada paciente recibe un plan de tratamiento adaptado a sus necesidades específicas'
    },
    {
      icon: '🕐',
      title: 'Horarios Flexibles',
      description: 'Disponibilidad en horarios que se adapten a tu rutina diaria'
    },
    {
      icon: '💪',
      title: 'Equipamiento Moderno',
      description: 'Contamos con la tecnología más avanzada en fisioterapia'
    },
    {
      icon: '✨',
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
              <div className="text-5xl mb-4">{feature.icon}</div>
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
