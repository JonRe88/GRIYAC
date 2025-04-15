import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function CancelariaPage() {
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
        
        <h1 className="text-4xl font-bold mb-8">Cancelería y Aluminio</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-gray-700 mb-6">
              Especialistas en fabricación e instalación de elementos arquitectónicos
              en aluminio y cristal. Ofrecemos soluciones modernas y duraderas para
              proyectos residenciales y comerciales.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">Servicios especializados:</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Ventanas de aluminio</li>
              <li>Puertas corredizas</li>
              <li>Fachadas de cristal</li>
              <li>Barandales</li>
              <li>Domos y tragaluces</li>
              <li>Divisiones de baño</li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <img
              src="https://images.unsplash.com/photo-1545486332-9e0999c535b2?q=80&w=2000&auto=format&fit=crop"
              alt="Cancelería"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop"
              alt="Instalaciones"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CancelariaPage;