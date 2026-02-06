import React from 'react';

interface TopbarProps {}

const Topbar: React.FC<TopbarProps> = () => {
  return (
    <div className="bg-primary text-white text-sm">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Left side - Contact info */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span>📞 +51 999 999 999</span>
          </div>
          <div className="flex items-center gap-2">
            <span>📧 contactanos@fullness.com</span>
          </div>
          <div className="flex items-center gap-2">
            <span>📍 Los Claveles 123, San Miguel</span>
          </div>
        </div>

        {/* Right side - Social media */}
        <div className="flex items-center gap-4">
          <a href="#" className="hover:opacity-80 transition">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a href="#" className="hover:opacity-80 transition">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 15.892c-2.102.144-6.784.144-8.883 0C5.282 15.664 5.017 14.461 5 12c.017-2.462.285-3.661.558-4.892 2.099-.144 6.782-.144 8.883 0 .272 1.231.537 2.434.558 4.892-.021 2.461-.286 3.661-.558 4.892z"/>
            </svg>
          </a>
          <a href="#" className="hover:opacity-80 transition">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
