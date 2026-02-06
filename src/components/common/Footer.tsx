import React from 'react';
import { ImageButton } from '../buttons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Top section */}
        <div className="flex justify-between items-start mb-12">
          {/* Left: Logo and Button */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <img src="/footer/Logo White.png" alt="Fullness Logo" className="h-12" />
            </div>
            <ImageButton 
              href="#" 
              src="/footer/Btn Agendar cita.png" 
              alt="Agendar cita"
              imageClassName="h-12"
            />
          </div>

          {/* Center: Links columns */}
          <div className="grid grid-cols-2 gap-16">
            {/* Column 1 */}
            <div>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-200 hover:text-white transition">Inicio</a></li>
                <li><a href="#" className="text-gray-200 hover:text-white transition">Nosotros</a></li>
                <li><a href="#" className="text-gray-200 hover:text-white transition">Servicios</a></li>
                <li><a href="#" className="text-gray-200 hover:text-white transition">Pregúntale al experto</a></li>
                <li><a href="#" className="text-gray-200 hover:text-white transition">Blog</a></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-200 hover:text-white transition">Términos y Condiciones</a></li>
                <li><a href="#" className="text-gray-200 hover:text-white transition">Política de Privacidad</a></li>
                <li><a href="#" className="text-gray-200 hover:text-white transition">Política de Cookies</a></li>
                <li><a href="#" className="text-gray-200 hover:text-white transition">Consentimiento para usos adicionales</a></li>
                <li><a href="#" className="text-gray-200 hover:text-white transition">Comprobante electrónico</a></li>
                <li><a href="#" className="text-gray-200 hover:text-white transition">Canal de Integridad</a></li>
                <li><a href="#" className="text-gray-200 hover:text-white transition">Gestión de Ética y cumplimiento</a></li>
              </ul>
            </div>
          </div>

          {/* Right: Social and Book */}
          <div className="flex flex-col items-end gap-8">
            {/* Social icons */}
            <div className="flex gap-4">
              <a href="#" className="text-white hover:opacity-80 transition">
                <img src="/footer/ic_baseline-facebook.png" alt="facebook" className="w-8 h-8" />
              </a>
              <a href="#" className="text-white hover:opacity-80 transition">
                <img src="/footer/Instagram.png" alt="instagram" className="w-8 h-8" />
              </a>
              <a href="#" className="text-white hover:opacity-80 transition">
                <img src="/footer/YouTube.png" alt="youtube" className="w-8 h-8" />
              </a>
            </div>

            {/* Libro de Reclamaciones */}
            <ImageButton 
              href="#" 
              src="/footer/Libro de Reclamaciones.png" 
              alt="Libro de Reclamaciones"
              imageClassName="h-24"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 pt-8">
          <p className="text-center text-gray-400 text-sm">&copy; 2026 Fullness. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
