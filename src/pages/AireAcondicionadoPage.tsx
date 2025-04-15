import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function AireAcondicionadoPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-blue-600 mb-8 hover:text-blue-800"
        >
          <ArrowLeft className="mr-2" /> Volver a servicios
        </button>
        
        <h1 className="text-4xl font-bold mb-8">Aire Acondicionado</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-gray-700 mb-6">
              Expertos en instalación y mantenimiento de sistemas de climatización
              para espacios comerciales e industriales. Ofrecemos soluciones
              eficientes y sostenibles para el control de temperatura.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">Servicios especializados:</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Instalación de sistemas HVAC</li>
              <li>Mantenimiento preventivo</li>
              <li>Reparación de equipos</li>
              <li>Optimización de sistemas</li>
              <li>Auditorías energéticas</li>
              <li>Sistemas de ventilación</li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <img
              src="https://media.istockphoto.com/id/2149885331/photo/rooftop-air-conditioners.jpg?s=2048x2048&w=is&k=20&c=GlHdH9r7WVIkVtAwUYDGSsSz0U_C2JS0YmEzeWU5DTI="
              alt="Aire Acondicionado"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <img
              src="https://media.istockphoto.com/id/1688513642/es/foto/instalaci%C3%B3n-de-aire-acondicionado.jpg?s=2048x2048&w=is&k=20&c=UTOIzkPznP3tevP2p90yYSnkxvON-tW64PXMvDbNM6Q="
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AireAcondicionadoPage;