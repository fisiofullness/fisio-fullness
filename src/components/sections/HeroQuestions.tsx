import React from 'react';

interface IllustrationProps {
    sofaImage: string;
    hombreImage: string;
    interrogacionGrande: string;
    interrogacionPequena: string;
}

/**
 * Componente de ilustración compuesta para HeroQuestions
 * Superpone 4 imágenes diferentes en posiciones específicas
 */
const HeroQuestionsIllustration: React.FC<IllustrationProps> = ({
    sofaImage,
    hombreImage,
    interrogacionGrande,
    interrogacionPequena,
}) => (
    <div className="relative w-full max-w-2xl h-96 md:h-full">

        {/* Sofá - Fondo principal (z-10) */}
        <div className="absolute inset-0 flex items-end justify-end">
            <img
                src={sofaImage}
                alt="Sofá"
                className="w-full h-auto object-contain"
            />
        </div>

        {/* Hombre - Centro (z-20) */}
        <div className="absolute inset-0 flex items-center justify-center">
            <img
                src={hombreImage}
                alt="Persona"
                className="w-1/2 h-auto object-contain"
            />
        </div>

        {/* Interrogación Grande - Arriba a la derecha (z-15) */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3">
            <img
                src={interrogacionGrande}
                alt="Interrogación grande"
                className="w-full h-full object-contain opacity-80"
            />
        </div>

        {/* Interrogación Pequeña - Arriba a la izquierda (z-5) */}
        <div className="absolute top-10 left-0 w-1/5 h-1/5">
            <img
                src={interrogacionPequena}
                alt="Interrogación pequeña"
                className="w-full h-full object-contain opacity-70"
            />
        </div>

    </div>
);

/**
 * Hero Banner para "Pregunta al Experto"
 */
const HeroQuestions: React.FC = () => {
    return (
        <section className="bg-gradient-to-r from-[#16577A] to-[#1a6a95] w-full py-20 md:py-32">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">

                    {/* Contenido Izquierdo */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            Tu tranquilidad es primero
                        </h1>

                        <p className="text-lg md:text-xl text-gray-100 mb-10 leading-relaxed max-w-lg mx-auto md:mx-0">
                            Envía tu consulta a un experto sin costo y recibe una respuesta personalizada.
                        </p>

                        <button className="bg-white text-blue-700 font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl">
                            Haz tu pregunta aquí
                        </button>
                    </div>

                    {/* Contenido Derecho - Ilustración Compuesta */}
                    <div className="w-full md:w-1/2 flex justify-center items-center">
                        <HeroQuestionsIllustration
                            sofaImage="/images/sofa.png"
                            hombreImage="/images/hombre.png"
                            interrogacionGrande="/images/interrogacion-grande.png"
                            interrogacionPequena="/images/interrogacion-pequena.png"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroQuestions;