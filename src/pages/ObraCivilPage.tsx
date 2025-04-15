import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function ObraCivilPage() {
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
        
        <h1 className="text-4xl font-bold mb-8">Obra Civil</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-gray-700 mb-6">
              Expertos en construcción y remodelación de espacios con los más altos
              estándares de calidad. Nuestro equipo de profesionales garantiza la
              excelencia en cada proyecto.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">Servicios de construcción:</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Construcción residencial</li>
              <li>Edificios comerciales</li>
              <li>Remodelaciones</li>
              <li>Supervisión de obras</li>
              <li>Gestión de proyectos</li>
              <li>Diseño estructural</li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
              alt="Obra Civil"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop"
              alt="Construcción"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ObraCivilPage;