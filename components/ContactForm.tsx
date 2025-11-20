import React from 'react';
import { motion } from 'framer-motion';

const ContactForm: React.FC = () => {
  return (
    <section id="contacto" className="py-32 px-4 sm:px-6 relative overflow-hidden scroll-mt-20">
      {/* Decorative Glows */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neon-purple/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="w-full max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-panel p-8 md:p-16 rounded-3xl border border-white/10 backdrop-blur-xl bg-dark-900/60"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Empieza a Ahorrar Hoy</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Déjanos tus datos y en un plazo de 24 horas, te contactaremos para pedir tu factura y realizar el estudio.
            </p>
          </div>

          <form 
            name="contact" 
            method="POST" 
            data-netlify="true"
            className="space-y-8"
          >
            <input type="hidden" name="form-name" value="contact" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="group relative">
                <input 
                  type="text" 
                  name="name"
                  required
                  className="peer w-full bg-transparent border-b border-gray-700 py-3 text-white focus:outline-none focus:border-neon-green transition-colors placeholder-transparent text-lg"
                  placeholder="Tu nombre"
                  id="name"
                />
                <label htmlFor="name" className="absolute left-0 -top-3.5 text-xs text-gray-500 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-neon-green">
                  NOMBRE
                </label>
              </div>
              <div className="group relative">
                <input 
                  type="text" 
                  name="company"
                  className="peer w-full bg-transparent border-b border-gray-700 py-3 text-white focus:outline-none focus:border-neon-green transition-colors placeholder-transparent text-lg"
                  placeholder="Empresa"
                  id="company"
                />
                <label htmlFor="company" className="absolute left-0 -top-3.5 text-xs text-gray-500 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-neon-green">
                  EMPRESA (OPCIONAL)
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="group relative">
                <input 
                  type="email" 
                  name="email"
                  required
                  className="peer w-full bg-transparent border-b border-gray-700 py-3 text-white focus:outline-none focus:border-neon-green transition-colors placeholder-transparent text-lg"
                  placeholder="Email"
                  id="email"
                />
                <label htmlFor="email" className="absolute left-0 -top-3.5 text-xs text-gray-500 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-neon-green">
                  EMAIL
                </label>
              </div>
              <div className="group relative">
                <input 
                  type="tel" 
                  name="phone"
                  required
                  className="peer w-full bg-transparent border-b border-gray-700 py-3 text-white focus:outline-none focus:border-neon-green transition-colors placeholder-transparent text-lg"
                  placeholder="Teléfono"
                  id="phone"
                />
                <label htmlFor="phone" className="absolute left-0 -top-3.5 text-xs text-gray-500 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-neon-green">
                  TELÉFONO
                </label>
              </div>
            </div>

            <div className="group relative">
              <textarea 
                rows={4}
                name="message"
                className="peer w-full bg-transparent border-b border-gray-700 py-3 text-white focus:outline-none focus:border-neon-green transition-colors resize-none placeholder-transparent text-lg"
                placeholder="Mensaje"
                id="message"
              />
              <label htmlFor="message" className="absolute left-0 -top-3.5 text-xs text-gray-500 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-neon-green">
                MENSAJE
              </label>
            </div>

            <div className="pt-6 flex justify-center">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-black px-12 py-5 rounded-full font-display font-bold text-lg hover:bg-neon-green transition-colors duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(204,255,0,0.4)]"
              >
                SOLICITAR AUDITORÍA GRATUITA
              </motion.button>
            </div>
            <p className="text-center text-xs text-gray-600 mt-4">
              Al enviar este formulario, aceptas nuestra política de privacidad.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;