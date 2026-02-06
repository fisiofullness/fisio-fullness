import React, { useState } from 'react';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const navItems = [
    { label: 'Inicio', href: '#' },
    { label: 'Nosotros', href: '#' },
    { label: 'Servicios', href: '#' },
    { label: 'Pregunta al experto', href: '#' },
    { label: 'Blog', href: '#' },
  ];

  const dropdownItems = [
    { label: 'Pacientes', href: '#' },
    { label: 'Profesionales', href: '#' },
  ];

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
              F
            </div>
            <span className="text-2xl font-bold text-primary">Fullness</span>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-primary transition font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right side - Buttons and Dropdowns */}
          <div className="flex items-center gap-4">
            {dropdownItems.map((item) => (
              <div key={item.label} className="relative group">
                <button
                  onClick={() => setOpenMenu(openMenu === item.label ? null : item.label)}
                  className="px-6 py-2 border-2 border-primary text-primary font-semibold rounded hover:bg-primary hover:text-white transition flex items-center gap-2"
                >
                  {item.label}
                  <svg
                    className="w-4 h-4 transition group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </button>
                
                {/* Dropdown Menu */}
                {openMenu === item.label && (
                  <div className="absolute right-0 mt-0 w-48 bg-white rounded-lg shadow-lg z-10">
                    <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-gray-100">
                      Opción 1
                    </a>
                    <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-gray-100">
                      Opción 2
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button className="lg:hidden text-primary">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
