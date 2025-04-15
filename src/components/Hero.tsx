import React from 'react';
import { Building2, Zap, Wind, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative h-screen">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-6xl font-bold mb-4">GRIYAC</h1>
        <p className="text-xl text-blue-400 mb-8">Construimos tus sueños, edificamos tu futuro.</p>
        <h2 className="text-2xl mb-12 max-w-2xl">
          Expertos en Obra Civil, Arquitectura, Alta y Baja Tensión, Aire Acondicionado y Plantas Generadoras de Energía
        </h2>

        {/* Service icons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="flex flex-col items-center">
            <Building2 className="h-12 w-12 mb-2" />
            <span>Obra Civil</span>
          </div>
          <div className="flex flex-col items-center">
            <Zap className="h-12 w-12 mb-2" />
            <span>Alta y Baja Tensión</span>
          </div>
          <div className="flex flex-col items-center">
            <Wind className="h-12 w-12 mb-2" />
            <span>Aire Acondicionado</span>
          </div>
          <div className="flex flex-col items-center">
            <Wrench className="h-12 w-12 mb-2" />
            <span>Mantenimiento</span>
          </div>
        </div>

        <Link
          to="/servicios"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300"
        >
          Conoce Nuestros Servicios
        </Link>
      </div>
    </div>
  );
};

export default Hero;