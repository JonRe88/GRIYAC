import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import DisenoPage from './pages/DisenoPage';
import CancelariaPage from './pages/CancelariaPage';
import MantenimientoPage from './pages/MantenimientoPage';
import MediaBajaTensionPage from './pages/MediaBajaTensionPage';
import AireAcondicionadoPage from './pages/AireAcondicionadoPage';
import ObraCivilPage from './pages/ObraCivilPage';
import NuestrosClientes from './pages/NuestrosClientes';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <NuestrosClientes />          
            </>
          } />
           <Route path="/contact" element={<Contact />} />
          <Route path="/sobre-nosotros" element={<AboutPage />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/diseno" element={<DisenoPage />} />
          <Route path="/cancelaria" element={<CancelariaPage />} />
          <Route path="/mantenimiento" element={<MantenimientoPage />} />
          <Route path="/media-baja-tension" element={<MediaBajaTensionPage />} />
          <Route path="/aire-acondicionado" element={<AireAcondicionadoPage />} />
          <Route path="/obra-civil" element={<ObraCivilPage />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
