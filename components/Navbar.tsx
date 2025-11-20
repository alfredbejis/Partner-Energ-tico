import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Instagram } from 'lucide-react';

type ViewState = 'home' | 'cookies' | 'privacy' | 'legal' | 'terms';

interface NavbarProps {
  onNavigate: (view: ViewState, hash?: string) => void;
}

// Custom TikTok Icon Component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSocialDropdownOpen, setIsSocialDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/partnerenergetico' },
    { name: 'TikTok', icon: TikTokIcon, url: 'https://tiktok.com/@partnerenergetico' },
  ];

  const handleNavClick = (e: React.MouseEvent, hash: string) => {
    e.preventDefault();
    onNavigate('home', hash);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center glass-panel rounded-2xl px-6 py-4">
        
        {/* Unified Logo & Dropdown Button */}
        <div className="relative">
          <button 
            onClick={() => setIsSocialDropdownOpen(!isSocialDropdownOpen)}
            className="flex items-center gap-2 group focus:outline-none"
            aria-label="Abrir redes sociales"
          >
            <span className="text-white font-display font-bold text-lg tracking-tighter group-hover:text-neon-green transition-colors">
              PARTNER ENERGÉTICO
            </span>
            <ChevronDown 
              className={`w-4 h-4 text-white group-hover:text-neon-green transition-all duration-300 ${isSocialDropdownOpen ? 'rotate-180' : ''}`} 
            />
          </button>

          <AnimatePresence>
            {isSocialDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute top-full left-0 mt-2 w-48 bg-dark-800 border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50"
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
          <a 
            href="#servicios" 
            onClick={(e) => handleNavClick(e, '#servicios')} 
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            Servicios
          </a>
          <a 
            href="#proceso" 
            onClick={(e) => handleNavClick(e, '#proceso')} 
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            Cómo Funciona
          </a>
          <a 
            href="#contacto" 
            onClick={(e) => handleNavClick(e, '#contacto')}
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
              <a 
                href="#servicios" 
                onClick={(e) => handleNavClick(e, '#servicios')} 
                className="text-lg font-display text-white"
              >
                Servicios
              </a>
              <a 
                href="#proceso" 
                onClick={(e) => handleNavClick(e, '#proceso')} 
                className="text-lg font-display text-white"
              >
                Cómo Funciona
              </a>
              <a 
                href="#contacto" 
                onClick={(e) => handleNavClick(e, '#contacto')} 
                className="text-lg font-display text-neon-green"
              >
                Contactar
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;