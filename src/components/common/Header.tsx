import React from 'react';
import { Link } from 'react-router-dom';
import { PillButton } from '../buttons';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const navItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Nosotros', href: '#' },
    { label: 'Servicios', href: '#' },
    { label: 'Pregunta al experto', href: '#' },
    { label: 'Blog', href: '/blog' },
  ];

  const dropdownItems = [
    { label: 'Pacientes', href: '/pacientes' },
    { label: 'Profesionales', href: '/profesionales' },
  ];

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src="/header/Logo icon.png" alt="Fullness Logo Icon" className="h-8" />
            <img src="/header/Fullness.png" alt="Fullness" className="h-8" />
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-gray-700 hover:text-primary transition font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side - Buttons and Dropdowns */}
          <div className="flex items-center gap-4">
            {dropdownItems.map((item) => (
              <div key={item.label} className="relative group">
                <PillButton variant="outline" className="group-hover:bg-primary group-hover:text-white">
                  {item.label}
                  <svg
                    className="w-6 transition group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </PillButton>
                
                {/* Dropdown Menu */}
                <div className="absolute right-0 mt-0 w-full bg-[#D9D9D9] rounded-[16px] shadow-lg z-10 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <a href="#" className="block px-4 py-3 hover:underline hover:text-primary transition text-center">
                    Inicia sesión
                  </a>
                  <a href="#" className="block px-4 py-3 hover:underline hover:text-primary transition text-center">
                    Regístrate
                  </a>
                </div>
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
