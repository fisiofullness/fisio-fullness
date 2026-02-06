import React from 'react';
import { HERO_IMAGES } from '../../constants/images';

interface WhatsAppButtonProps {
  url?: string;
  imageAlt?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  url = 'https://web.whatsapp.com',
  imageAlt = 'WhatsApp',
}) => {
  return (
    <a 
      href={url}
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 animate-bounce hover:scale-110 transition-transform"
    >
      <img src={HERO_IMAGES.WHATSAPP_BUTTON} alt={imageAlt} className="w-16 h-16" />
    </a>
  );
};

export default WhatsAppButton;
