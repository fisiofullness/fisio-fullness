import React from 'react';

interface TopbarProps {}

const Topbar: React.FC<TopbarProps> = () => {
  return (
    <div className="bg-primary text-white text-sm">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Left side - Contact info */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <img src="/top-banner/phone.png" alt="phone" className="w-4 h-4" />
            <span>+51 999 999 999</span>
          </div>
          <div className="flex items-center gap-2">
            <img src="/top-banner/email.png" alt="email" className="w-4 h-4" />
            <span>contactanos@fullness.com</span>
          </div>
          <div className="flex items-center gap-2">
            <img src="/top-banner/place.png" alt="place" className="w-4 h-4" />
            <span>Los Claveles 123, San Miguel</span>
          </div>
        </div>

        {/* Right side - Social media */}
        <div className="flex items-center gap-4">
          <a href="#" className="hover:opacity-80 transition">
            <img src="/top-banner/Facebook.png" alt="facebook" className="w-5 h-5" />
          </a>
          <a href="#" className="hover:opacity-80 transition">
            <img src="/top-banner/Instagram.png" alt="instagram" className="w-5 h-5" />
          </a>
          <a href="#" className="hover:opacity-80 transition">
            <img src="/top-banner/YouTube.png" alt="youtube" className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
