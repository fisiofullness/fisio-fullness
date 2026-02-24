import React from 'react';

// Íconos representativos para cada comunidad
const icons = {
    fisioterapia: (
        <svg className="w-12 h-12 mx-auto mb-4" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="20" fill="#194977" />
            <circle cx="20" cy="14" r="3.5" fill="#fff" />
            <path d="M20 18v8M16 22h8" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    ),
    psicologia: (
        <svg className="w-12 h-12 mx-auto mb-4" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="20" fill="#194977" />
            <text x="9" y="29" fontSize="18" fontWeight="bold" fill="#fff">Ψ</text>
        </svg>
    ),
    nutricion: (
        <svg className="w-12 h-12 mx-auto mb-4" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="20" fill="#194977" />
            <circle cx="20" cy="14" r="4" fill="#fff" />
            <rect x="18" y="19" width="4" height="10" fill="#fff" />
        </svg>
    ),
    comunidad: (
        <svg className="w-12 h-12 mx-auto mb-4" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="20" fill="#194977" />
            <circle cx="12" cy="24" r="3" fill="#fff" />
            <circle cx="28" cy="24" r="3" fill="#fff" />
            <circle cx="20" cy="16" r="4" fill="#fff" />
        </svg>
    ),
};

// Avatar para usuarios en línea
const OnlineAvatar = () => (
    <svg className="w-5 h-5 inline-block ml-1" viewBox="0 0 20 20" fill="#90e0ef">
        <circle cx="10" cy="10" r="10" />
    </svg>
);

interface Community {
    icon: React.ReactNode;
    title: string;
    members: string;
    description: string;
    onlineCount: number;
}

const Communities: React.FC = () => {
    const communities: Community[] = [
        {
            icon: icons.fisioterapia,
            title: "Fisioterapia",
            members: "+1000 miembros activos",
            description: "Este es un espacio creado para compartir conocimientos, recursos y experiencias en el campo de la fisioterapia",
            onlineCount: 4,
        },
        {
            icon: icons.psicologia,
            title: "Psicología",
            members: "+800 miembros activos",
            description: "Este es un espacio creado para compartir conocimientos, recursos y experiencias en el campo de la psicología.",
            onlineCount: 4,
        },
        {
            icon: icons.nutricion,
            title: "Nutrición",
            members: "+500 miembros activos",
            description: "Este es un espacio creado para compartir conocimientos, recursos y experiencias en el campo de la nutrición",
            onlineCount: 4,
        },
        {
            icon: icons.comunidad,
            title: "Mi camino Fullness",
            members: "+600 miembros activos",
            description: "Este es una comunidad para acompañarte a desarrollar y mantener hábitos de bienestar sin presión, ni perfección.",
            onlineCount: 4,
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-14">
                    <h2 className="text-5xl font-bold text-blue-900 mb-3">Comunidades Activas</h2>
                    <p className="text-lg text-blue-500">Únete a grupos especializados en tiempo real</p>
                </div>

                {/* Communities Grid */}
                <div className="grid md:grid-cols-4 gap-6">
                    {communities.map((community, index) => (
                        <div
                            key={index}
                            className="bg-gray-100 rounded-2xl p-8 text-center flex flex-col items-center hover:shadow-lg transition-shadow"
                        >
                            {/* Icon */}
                            {community.icon}

                            {/* Title */}
                            <h3 className="text-xl font-bold text-blue-900 mb-2">
                                {community.title}
                            </h3>

                            {/* Members count */}
                            <p className="text-sm font-semibold text-gray-700 mb-4">
                                {community.members}
                            </p>

                            {/* Description */}
                            <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                                {community.description}
                            </p>

                            {/* Divider */}
                            <div className="w-full border-t border-gray-300 my-4"></div>

                            {/* Online users */}
                            <div className="text-sm text-blue-900 font-semibold mb-6 w-full">
                                En línea ahora{" "}
                                <span className="ml-1">
                                    {[...Array(community.onlineCount)].map((_, i) => (
                                        <OnlineAvatar key={i} />
                                    ))}
                                </span>
                            </div>

                            {/* Join button */}
                            <button className="w-full border-2 border-blue-700 text-blue-700 font-semibold px-6 py-2 rounded-full hover:bg-blue-700 hover:text-white transition-colors">
                                Unirse al grupo
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Communities;