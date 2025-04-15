import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function MediaBajaTensionPage() {
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
        
        <h1 className="text-4xl font-bold mb-8">Media y Baja Tensión</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-gray-700 mb-6">
              Proporcionamos infraestructura integral que asegura la transmisión de
              energía eléctrica de manera eficiente y segura, cumpliendo con todas
              las normas y estándares de la industria.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">Nuestros servicios incluyen:</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Instalaciones eléctricas industriales</li>
              <li>Subestaciones eléctricas</li>
              <li>Transformadores</li>
              <li>Tableros de distribución</li>
              <li>Sistemas de tierra</li>
              <li>Protección contra descargas atmosféricas</li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <img
              src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2074&auto=format&fit=crop"
              alt="Media Tensión"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=2000&auto=format&fit=crop"
              alt="Instalaciones Eléctricas"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MediaBajaTensionPage;