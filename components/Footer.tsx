import React from 'react';
import { Instagram, Mail } from 'lucide-react';

type ViewState = 'home' | 'cookies' | 'privacy' | 'legal' | 'terms';

interface FooterProps {
  onNavigate?: (page: ViewState, hash?: string) => void;
}

// Custom TikTok Icon Component
const TikTokIcon = ({ size = 20 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (e: React.MouseEvent, page: ViewState) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(page);
    }
  };

  return (
    <footer className="bg-black border-t border-white/10 py-12 px-6 relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-display font-bold text-white mb-2">PARTNER ENERGÉTICO</h3>
            <p className="text-gray-500 text-sm">Optimizando tus recursos, maximizando tu ahorro.</p>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://instagram.com/partnerenergetico" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-neon-purple hover:text-white transition-all duration-300 text-gray-400">
              <Instagram size={20} />
            </a>
            <a href="https://tiktok.com/@partnerenergetico" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-neon-cyan hover:text-black transition-all duration-300 text-gray-400">
              <TikTokIcon size={20} />
            </a>
            <a href="mailto:energialfred@gmail.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-neon-green hover:text-black transition-all duration-300 text-gray-400">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" onClick={(e) => handleNav(e, 'legal')} className="hover:text-neon-green transition-colors">Aviso Legal</a>
            <a href="#" onClick={(e) => handleNav(e, 'privacy')} className="hover:text-neon-green transition-colors">Política de Privacidad</a>
            <a href="#" onClick={(e) => handleNav(e, 'cookies')} className="hover:text-neon-green transition-colors">Política de Cookies</a>
            <a href="#" onClick={(e) => handleNav(e, 'terms')} className="hover:text-neon-green transition-colors">Condiciones de Uso</a>
          </div>
          
          <p>© {new Date().getFullYear()} Partner Energético. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;