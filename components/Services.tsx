import React from 'react';
import { motion } from 'framer-motion';
import { 
  ThermometerSun, 
  Activity, 
  Car, 
  Leaf, 
  ClipboardCheck, 
  Lightbulb, 
  Package, 
  BadgeEuro, 
  Flame, 
  Wind, 
  Droplets, 
  Battery 
} from 'lucide-react';

const services = [
  {
    title: "Auditorías Energéticas",
    description: "Análisis exhaustivo de consumo para identificar oportunidades de ahorro y eficiencia energética.",
    icon: ClipboardCheck,
    color: "text-neon-green"
  },
  {
    title: "Monitorización",
    description: "Sistemas inteligentes para centralizar la gestión, optimizar el consumo y reducir costes en tiempo real.",
    icon: Activity,
    color: "text-neon-cyan"
  },
  {
    title: "CAEs",
    description: "Monetizamos tus ahorros gestionando los Certificados de Ahorro Energético de tu empresa.",
    icon: BadgeEuro,
    color: "text-neon-purple"
  },
  {
    title: "Aerotermia",
    description: "Aprovechamos la energía del aire para climatización, eliminando la dependencia de combustibles fósiles.",
    icon: ThermometerSun,
    color: "text-yellow-400"
  },
  {
    title: "Iluminación LED",
    description: "Proyectos de sustitución tecnológica para reducir drásticamente el consumo y mejorar la calidad lumínica.",
    icon: Lightbulb,
    color: "text-white"
  },
  {
    title: "Movilidad Eléctrica",
    description: "Infraestructuras de recarga de vehículos para facilitar la transición hacia una flota sostenible.",
    icon: Car,
    color: "text-blue-400"
  },
  {
    title: "Huella de Carbono",
    description: "Medición y consultoría para cumplir con los alcances 1, 2 y 3 de sostenibilidad corporativa.",
    icon: Leaf,
    color: "text-green-500"
  },
  {
    title: "Geotermia",
    description: "Energía renovable de alta eficiencia que genera calor y electricidad aprovechando el subsuelo.",
    icon: Flame,
    color: "text-orange-500"
  },
  {
    title: "Mini Eólica",
    description: "Generación distribuida a pequeña escala para autoconsumo eficiente, ideal para zonas ventosas.",
    icon: Wind,
    color: "text-cyan-200"
  },
  {
    title: "Hidrógeno Verde",
    description: "Soluciones avanzadas de energía limpia para descarbonizar procesos industriales complejos.",
    icon: Droplets,
    color: "text-blue-300"
  },
  {
    title: "Baterías de Condensadores",
    description: "Eliminamos las penalizaciones por energía reactiva en tu factura mediante compensación técnica.",
    icon: Battery,
    color: "text-red-400"
  },
  {
    title: "Pack Sostenibilidad",
    description: "Proyectos integrales diseñados 100% a la medida de las necesidades estratégicas de tu cliente.",
    icon: Package,
    color: "text-purple-400"
  }
];

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-32 px-6 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Soluciones <br />
            <span className="shimmer-text bg-gradient-to-r from-neon-green via-white to-neon-green bg-[length:200%_auto] animate-text-shimmer text-transparent bg-clip-text">
              Integrales 360°
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Desde la auditoría inicial hasta la implementación de tecnologías renovables. Todo lo que tu empresa necesita.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative bg-dark-800/40 border border-white/5 hover:border-white/20 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-dark-800/60 hover:shadow-[0_0_30px_rgba(0,0,0,0.3)]"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className={`p-3 rounded-xl bg-white/5 ${service.color}`}>
                  <service.icon size={28} />
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity text-white/20">
                  <service.icon size={48} />
                </div>
              </div>
              
              <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-neon-green transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;