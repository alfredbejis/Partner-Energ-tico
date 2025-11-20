import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Target, Map, Users, Award, Globe, Percent, CheckCircle } from 'lucide-react';

const stats = [
  { 
    value: "+100K", 
    label: "Clientes Satisfechos", 
    desc: "Clientes confían en nosotros",
    icon: Users 
  },
  { 
    value: "+15", 
    label: "Años de Experiencia", 
    desc: "Experiencia acumulada en el sector",
    icon: Award 
  },
  { 
    value: "17", 
    label: "Comunidades Autónomas", 
    desc: "Cobertura nacional completa",
    icon: Globe 
  },
  { 
    value: "25%", 
    label: "Ahorro Medio", 
    desc: "Reducción media en la factura anual",
    icon: Percent 
  },
];

const features = [
  {
    title: "Nuestra Trayectoria",
    description: "Con más de 15 años de experiencia en el sector energético, hemos ayudado a más de 100.000 clientes a optimizar sus facturas de luz.",
    points: [
      "Expertos en análisis de consumo",
      "Especialistas en tarifas energéticas",
      "Profesionales con amplia experiencia"
    ],
    icon: TrendingUp
  },
  {
    title: "Nuestra Misión",
    description: "Facilitar la transición sostenible de las organizaciones mediante soluciones energéticas integrales y personalizadas.",
    points: [
      "Optimizar el consumo energético",
      "Reducir el impacto ambiental",
      "Alinear con objetivos de sostenibilidad"
    ],
    icon: Target
  },
  {
    title: "Nuestro Alcance",
    description: "Trabajamos en todas las comunidades autónomas de España, llevando nuestro servicio a todo el territorio nacional.",
    points: [
      "17 comunidades autónomas",
      "Cobertura nacional",
      "Servicio adaptado a cada región"
    ],
    icon: Map
  }
];

const About: React.FC = () => {
  return (
    <section id="nosotros" className="py-24 px-4 sm:px-6 relative bg-dark-800/20 border-t border-white/5">
      <div className="w-full max-w-[1400px] mx-auto">
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-32">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-8 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-neon-green/30 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-neon-green/10 flex items-center justify-center text-neon-green group-hover:scale-110 transition-transform duration-300 border border-neon-green/20">
                <stat.icon size={28} />
              </div>
              <div className="text-5xl font-display font-bold text-white mb-2">{stat.value}</div>
              <div className="text-neon-green font-medium uppercase tracking-wider text-sm mb-3">{stat.label}</div>
              <p className="text-gray-500 text-sm leading-relaxed">{stat.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Info Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (index * 0.1) }}
              className="glass-panel p-8 lg:p-10 rounded-3xl border border-white/5 relative overflow-hidden group hover:bg-white/5 transition-colors duration-300"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity duration-500 transform group-hover:scale-110">
                <feature.icon size={120} />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl lg:text-3xl font-display font-bold text-white mb-6 group-hover:text-neon-green transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 mb-8 leading-relaxed h-auto min-h-[80px] text-lg">
                  {feature.description}
                </p>
                
                <ul className="space-y-4">
                  {feature.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300 text-base group/item">
                      <CheckCircle className="w-5 h-5 text-neon-green shrink-0 opacity-70 group-hover/item:opacity-100 transition-opacity mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;