import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Zap, Wind, Building2, Pencil, Wrench, HardHat } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  path: string;
  imageUrl: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, path, imageUrl }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className="relative w-full h-[400px] cursor-pointer perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front of card */}
        <div
          className="absolute w-full h-full rounded-xl overflow-hidden shadow-lg"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white p-6">
            <div className="text-4xl mb-4">{icon}</div>
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <p className="text-center">{description}</p>
          </div>
        </div>

        {/* Back of card */}
        <div
          className="absolute w-full h-full rounded-xl bg-white p-6 flex flex-col items-center justify-center shadow-lg"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <h3 className="text-2xl font-bold mb-4">{title}</h3>
          <p className="text-gray-600 text-center mb-6">{description}</p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(path);
            }}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Ver más
          </button>
        </div>
      </motion.div>
    </div>
  );
};

function Services() {
  const services = [
    {
      title: 'Media y Baja Tensión',
      description: 'Infraestructura integral que asegura la transmisión de energía eléctrica de manera eficiente y segura.',
      icon: <Zap size={40} />,
      path: '/media-baja-tension',
      imageUrl: 'https://media.istockphoto.com/id/1340413200/photo/aerial-view-of-a-high-voltage-substation.jpg?s=1024x1024&w=is&k=20&c=U5p8G8bvWBAEqF5OoYLiDa9ep7q2Splo92HSm2EORGQ='
    },
    {
      title: 'Aire Acondicionado',
      description: 'Instalación y mantenimiento de sistemas de climatización para espacios comerciales e industriales.',
      icon: <Wind size={40} />,
      path: '/aire-acondicionado',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1683134512538-7b390d0adc9e?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Obra Civil',
      description: 'Construcción y remodelación de espacios con los más altos estándares de calidad.',
      icon: <HardHat size={40} />,
      path: '/obra-civil',
      imageUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Diseños y Acabados',
      description: 'Soluciones integrales en diseño de interiores y acabados de alta calidad.',
      icon: <Pencil size={40} />,
      path: '/diseno',
      imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop'
    },
    {
      title: 'Cancelería y Aluminio',
      description: 'Fabricación e instalación de elementos arquitectónicos en aluminio y cristal.',
      icon: <Building2 size={40} />,
      path: '/cancelaria',
      imageUrl: 'https://images.unsplash.com/photo-1545486332-9e0999c535b2?q=80&w=2000&auto=format&fit=crop'
    },
    {
      title: 'Mantenimiento',
      description: '12 años de experiencia brindando servicios de mantenimiento preventivo y correctivo.',
      icon: <Wrench size={40} />,
      path: '/mantenimiento',
      imageUrl: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2000&auto=format&fit=crop'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16" id="servicios">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4">Nuestros Servicios</h2>
        <p className="text-xl text-gray-600">Soluciones integrales para tus proyectos</p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <ServiceCard {...service} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Services;