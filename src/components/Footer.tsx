import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">GRIYAC</h3>
            <p className="text-gray-400">
              Construimos tus sueños, edificamos tu futuro.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:contacto@griyac.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/media-baja-tension" className="text-gray-400 hover:text-white transition-colors">
                  Media y Baja Tensión
                </Link>
              </li>
              <li>
                <Link to="/aire-acondicionado" className="text-gray-400 hover:text-white transition-colors">
                  Aire Acondicionado
                </Link>
              </li>
              <li>
                <Link to="/obra-civil" className="text-gray-400 hover:text-white transition-colors">
                  Obra Civil
                </Link>
              </li>
              <li>
                <Link to="/diseno" className="text-gray-400 hover:text-white transition-colors">
                  Diseños y Acabados
                </Link>
              </li>
              <li>
                <Link to="/cancelaria" className="text-gray-400 hover:text-white transition-colors">
                  Cancelería y Aluminio
                </Link>
              </li>
              <li>
                <Link to="/mantenimiento" className="text-gray-400 hover:text-white transition-colors">
                  Mantenimiento
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/sobre-nosotros" className="text-gray-400 hover:text-white transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-gray-400 hover:text-white transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <a href="#contacto" className="text-gray-400 hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Ciudad de México, México</li>
              <li>+52 (55) 1234-5678</li>
              <li>contacto@griyac.com</li>
              <li>Lunes a Viernes: 9:00 AM - 6:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} GRIYAC. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;