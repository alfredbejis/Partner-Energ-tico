import React from 'react';
import { Instagram, Video, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-display font-bold text-white mb-2">PARTNER ENERGÉTICO</h3>
          <p className="text-gray-500 text-sm">Optimizando tus recursos, maximizando tu ahorro.</p>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://instagram.com/partnerenergetico" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-neon-purple hover:text-white transition-all duration-300 text-gray-400">
            <Instagram size={20} />
          </a>
          <a href="https://tiktok.com/@partnerenergetico" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-neon-cyan hover:text-black transition-all duration-300 text-gray-400">
            <Video size={20} />
          </a>
          <a href="mailto:info@partnerenergetico.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-neon-green hover:text-black transition-all duration-300 text-gray-400">
            <Mail size={20} />
          </a>
        </div>

        <div className="text-gray-600 text-sm text-center md:text-right">
          <p>© {new Date().getFullYear()} Partner Energético.</p>
          <p>Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
