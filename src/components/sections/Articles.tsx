import React from 'react';
import { ARTICLES_IMAGES } from '../../constants/images';
import { PillButton } from '../buttons';

interface Article {
  title: string;
  description: string;
  date: Date;
  image: string;
  category: string;
}

const Articles: React.FC = () => {
  const articles: Article[] = [
    {
      title: 'Guía práctica para cuidar de la salud mental tuya y de tu familia.',
      description: 'La salud mental que irradias es importante no solo para tu entorno laboral, sino también para cómo te...',
      date: new Date('2025-11-12'),
      image: ARTICLES_IMAGES.PREVENTION,
      category: 'Prevención',
    },
    {
      title: '¿Problemas en los isquiotibiales? Te presentamos 3 ejercicios',
      description: 'Muchas veces los isquiotibiales son un músculo sensible para las personas que les gusta hacer deporte, el no saberlos...',
      date: new Date('2025-11-10'),
      image: ARTICLES_IMAGES.REHABILITATION,
      category: 'Rehabilitación',
    },
    {
      title: 'Practicar pilates, la mejor forma para la tonicidad muscular.',
      description: 'Según la mayoría de fisioterapeutas, practicar pilates es quizá la mejor forma de adquirir tonicidad muscular mucho...',
      date: new Date('2025-11-02'),
      image: ARTICLES_IMAGES.WELLB,
      category: 'Bienestar',
    },
  ];

  const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-blue-900 mb-4">#FullnessEsBienestar</h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            Descubre consejos, historias y conocimientos para cuidar tu cuerpo y mente.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              {/* Article Image with Category Badge */}
              <div className="relative h-64">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-700 text-white px-3 py-1 rounded text-xs font-semibold">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-blue-900 mb-2 leading-tight h-14">
                  {article.title}
                </h3>

                <div className="flex items-center text-xs text-gray-600 mb-3 gap-4">
                  <span>{formatDate(article.date)}</span>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 11-2 0 1 1 0 012 0zm-1 4a1 1 0 100-2 1 1 0 000 2zm3-3a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
                    </svg>
                    3 minutos
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                  {article.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Ver más button */}
        <div className="flex justify-center">
          <button className="px-8 py-2 border-2 border-blue-700 text-blue-700 font-semibold rounded-full hover:bg-blue-700 hover:text-white transition-colors">
            Ver más artículos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Articles;