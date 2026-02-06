import React from 'react';
import { LANDING_STATS_IMAGES } from '../../constants/images';

interface Stat {
  icon: string;
  number: string;
  label: string;
}

interface StatsSectionProps {
  stats?: Stat[];
  backgroundColor?: string;
}

const StatsSection: React.FC<StatsSectionProps> = ({
  stats = [
    {
      icon: LANDING_STATS_IMAGES.DOCTOR,
      number: '+150',
      label: 'Profesionales certificados',
    },
    {
      icon: LANDING_STATS_IMAGES.PATIENTS,
      number: '+120',
      label: 'Pacientes atendidos',
    },
    {
      icon: LANDING_STATS_IMAGES.SATISFACTION,
      number: '95%',
      label: 'De satisfacción',
    },
    {
      icon: LANDING_STATS_IMAGES.SECURITY,
      number: '100%',
      label: 'De seguridad en los datos',
    },
  ],
  backgroundColor = 'bg-primary',
}) => {
  return (
    <section className={`${backgroundColor} py-8`} style={{ minHeight: '120px' }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center text-white"
            >
              <img
                src={stat.icon}
                alt={stat.label}
                className="w-14 h-14 mb-3"
              />
              <h3 className="text-4xl font-bold mb-2">{stat.number}</h3>
              <p className="text-sm md:text-base leading-relaxed">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
