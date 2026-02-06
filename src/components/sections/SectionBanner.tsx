import React from 'react';

interface SectionBannerProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
}

const SectionBanner: React.FC<SectionBannerProps> = ({
  backgroundImage,
  title,
  subtitle,
}) => {
  return (
    <div
      className="relative w-full h-80 bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 51, 102, 0.5), rgba(0, 51, 102, 0.5)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="text-center text-white px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-lg md:text-xl leading-relaxed">{subtitle}</p>
      </div>
    </div>
  );
};

export default SectionBanner;
