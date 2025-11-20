import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import Services from './components/Services';
import Process from './components/Process';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-dark-900 min-h-screen text-white selection:bg-neon-green selection:text-black relative overflow-x-hidden">
      {/* Global Noise Overlay for Texture */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-[100] bg-noise mix-blend-overlay"></div>
      
      <Navbar />
      
      <main>
        {/* HERO SECTION */}
        <section className="relative h-screen flex items-center px-6">
          <Hero3D />
          
          <div className="max-w-7xl mx-auto w-full relative z-10 grid md:grid-cols-2 gap-12 items-center pt-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-block px-4 py-1 rounded-full border border-neon-green/30 bg-neon-green/5 text-neon-green text-xs font-bold tracking-widest mb-6 backdrop-blur-md">
                AUDITORÍA 100% GRATUITA
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.9] mb-8 tracking-tight">
                OPTIMIZA <br />
                TU GASTO <br />
                <span className="shimmer-text bg-gradient-to-r from-white via-gray-400 to-white bg-[length:200%_auto] animate-text-shimmer text-transparent bg-clip-text">
                  ENERGÉTICO
                </span>
              </h1>
              <p className="text-lg text-gray-400 max-w-md mb-10 leading-relaxed">
                Analizamos tus facturas, ajustamos potencias y negociamos precios. Sin costes, sin compromiso y sin cambiar tu instalación. Solo pagas menos.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <motion.a 
                  href="#contacto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-neon-green text-black font-bold rounded-full hover:bg-white transition-colors shadow-[0_0_20px_rgba(204,255,0,0.3)] cursor-pointer z-20"
                >
                  Analiza mi Factura
                </motion.a>
                <motion.a 
                  href="#servicios"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-white/20 rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm cursor-pointer z-20"
                >
                  Nuestros Servicios
                </motion.a>
              </div>
            </motion.div>

            {/* The right side is reserved for the 3D visual, ensuring text doesn't overlap improperly on desktop */}
            <div className="hidden md:block h-full"></div>
          </div>

          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ delay: 1, duration: 2, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500 flex flex-col items-center gap-2 z-20"
          >
            <span className="text-[10px] uppercase tracking-widest">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-neon-green to-transparent"></div>
          </motion.div>
        </section>

        <Services />
        <Process />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}

export default App;