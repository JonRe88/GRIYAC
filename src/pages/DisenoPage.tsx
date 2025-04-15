import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function DisenoPage() {
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
        
        <h1 className="text-4xl font-bold mb-8">Diseños y Acabados</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-gray-700 mb-6">
              Ofrecemos soluciones integrales en diseño de interiores y acabados de alta calidad.
              Nuestro equipo de expertos trabaja para crear espacios únicos que reflejen tu visión
              y necesidades específicas.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">Nuestros servicios incluyen:</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Diseño de interiores residencial y comercial</li>
              <li>Acabados de lujo</li>
              <li>Remodelación de espacios</li>
              <li>Asesoría en selección de materiales</li>
              <li>Diseño de iluminación</li>
              <li>Mobiliario y decoración</li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
              alt="Diseño Interior"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2000&auto=format&fit=crop"
              alt="Acabados"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisenoPage;