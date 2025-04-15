import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function MantenimientoPage() {
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
        
        <h1 className="text-4xl font-bold mb-8">Mantenimiento</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-gray-700 mb-6">
              Con 12 años de experiencia, brindamos servicios integrales de mantenimiento
              preventivo y correctivo para asegurar el óptimo funcionamiento de sus
              instalaciones y equipos.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">Servicios de mantenimiento:</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Mantenimiento preventivo programado</li>
              <li>Mantenimiento correctivo</li>
              <li>Diagnóstico de equipos</li>
              <li>Optimización de sistemas</li>
              <li>Gestión de activos</li>
              <li>Reportes técnicos</li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2000&auto=format&fit=crop"
              alt="Mantenimiento"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2000&auto=format&fit=crop"
              alt="Equipos"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MantenimientoPage;