import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Instagram, Video } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSocialDropdownOpen, setIsSocialDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/partnerenergetico' },
    { name: 'TikTok', icon: Video, url: 'https://tiktok.com/@partnerenergetico' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center glass-panel rounded-2xl px-6 py-4">
        
        {/* Logo & Dropdown Area */}
        <div className="relative">
          <button 
            onClick={() => setIsSocialDropdownOpen(!isSocialDropdownOpen)}
            className="flex items-center gap-2 text-white font-display font-bold text-lg tracking-tighter hover:text-neon-green transition-colors"
          >
            PARTNER ENERGÉTICO
            <ChevronDown className={`w-4 h-4 transition-transform ${isSocialDropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          <AnimatePresence>
            {isSocialDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute top-full left-0 mt-2 w-48 bg-dark-800 border border-white/10 rounded-xl shadow-2xl overflow-hidden"
              >
                <div className="p-1">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 rounded-lg text-gray-300 hover:text-neon-green transition-colors group"
                    >
                      <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium">@{link.url.split('/').pop()?.replace('@','')}</span>
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#servicios" className="text-sm text-gray-400 hover:text-white transition-colors">Servicios</a>
          <a href="#proceso" className="text-sm text-gray-400 hover:text-white transition-colors">Cómo Funciona</a>
          <a 
            href="#contacto" 
            className="bg-white text-black px-6 py-2 rounded-full font-semibold text-sm hover:bg-neon-green transition-colors duration-300"
          >
            Empezar Gratis
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} className="md:hidden text-white">
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 glass-panel rounded-2xl overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              <a href="#servicios" onClick={toggleMenu} className="text-lg font-display text-white">Servicios</a>
              <a href="#proceso" onClick={toggleMenu} className="text-lg font-display text-white">Cómo Funciona</a>
              <a href="#contacto" onClick={toggleMenu} className="text-lg font-display text-neon-green">Contactar</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
