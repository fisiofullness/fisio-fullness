import React from 'react';
import { HEROQ_IMAGES } from '../../constants/images';

interface IllustrationProps {
    sofaImage: string;
    hombreImage: string;
    interrogacionGrande: string;
}

const HeroQuestionsIllustration: React.FC<IllustrationProps> = ({
    sofaImage,
    hombreImage,
    interrogacionGrande,
}) => (
    <div className="relative w-full max-w-2xl h-96 md:h-full">

        {/* Sofá - Fondo principal (z-10) */}
        <div className="absolute bottom-0 left-0 w-[80%] h-auto z-10">
            <img
                src={sofaImage}
                alt="Sofá"
                className="w-full h-auto object-contain"
            />
        </div>

        {/* Hombre - Centro (z-20) */}
        <div className="absolute bottom-0 left-[50%] translate-x-[-50%] w-[40%] h-auto z-20">
            <img
                src={hombreImage}
                alt="Persona"
                className="w-full h-auto object-contain"
            />
        </div>

        {/* Interrogación Grande - Arriba a la derecha (z-15) */}
        <div className="absolute top-[-10%] right-[-5%] w-[30%] h-auto z-15">
            <img
                src={interrogacionGrande}
                alt="Interrogación grande"
                className="w-full h-auto object-contain opacity-80"
            />
        </div>

        {/* Interrogación Pequeña - Arriba a la izquierda (z-5) */}
        <div className="absolute top-[5%] left-[5%] w-[15%] h-auto z-5">
            <img
                src={interrogacionGrande}
                alt="Interrogación pequeña"
                className="w-full h-auto object-contain opacity-60"
            />
        </div>

    </div>
);

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
                            sofaImage={HEROQ_IMAGES.SOFA}
                            hombreImage={HEROQ_IMAGES.HOMBRE}
                            interrogacionGrande={HEROQ_IMAGES.INTERROGACION_GRANDE}
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroQuestions;