import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Building2, Users } from 'lucide-react';

const AboutPage = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: 'Certificados',
      description: 'Personal altamente calificado y certificado'
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: 'Experiencia',
      description: 'Más de 10 años de experiencia en el sector'
    },
    {
      icon: <Building2 className="w-8 h-8 text-blue-600" />,
      title: 'Infraestructura',
      description: 'Especialistas en proyectos de gran escala'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: 'Compromiso',
      description: 'Servicio 100% apegado a las normas'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Sobre Nosotros</h1>
          <p className="text-xl text-blue-600">Construimos tus sueños, edificamos tu futuro.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-gray-700 mb-6">
              Somos una empresa 100% mexicana que inició operaciones en 2013 con el nombre de C.E.Y.C.A,
              realizando trabajos de mantenimiento e instalaciones eléctricas, con un grupo de profesionales
              altamente calificados y certificados.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              En 2019 reestructuramos nuestro equipo de trabajo para abarcar la coordinación de trabajos
              especializados en infraestructura, incluyendo Aires Acondicionados, Electricidad, Plantas
              generadoras de energía eléctrica y obra civil.
            </p>
            <p className="text-lg text-gray-700">
              Contamos con personal altamente capacitado para la ejecución de los proyectos, cumpliendo
              siempre con los requisitos y exigencias de la Norma Oficial Mexicana, relativa a las
              Instalaciones Eléctricas, bajo las normas y protocolos de Comisión Federal de Electricidad.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;