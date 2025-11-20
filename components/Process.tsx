import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { Search, FileCheck, PiggyBank, UserPlus } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "Contáctanos",
    desc: "Rellena el formulario con tus datos básicos. Te contactaremos en menos de 24h para solicitar lo necesario.",
    icon: UserPlus,
  },
  {
    id: 2,
    title: "Análisis Profundo",
    desc: "Nuestro equipo estudia tu consumo y potencias actuales para encontrar cada céntimo de ahorro posible.",
    icon: Search,
  },
  {
    id: 3,
    title: "Propuesta de Ahorro",
    desc: "Te presentamos un informe detallado con el ahorro anual estimado. Tú decides si lo aplicas.",
    icon: FileCheck,
  },
  {
    id: 4,
    title: "Implementación",
    desc: "Nos encargamos de todos los trámites administrativos. Empiezas a pagar menos desde la siguiente factura.",
    icon: PiggyBank,
  },
];

const Process: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Map scroll progress to height of the line
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Calculate which step is active based on progress segments
    const stepSize = 1 / steps.length;
    if (latest < stepSize) setActiveStep(1);
    else if (latest < stepSize * 2) setActiveStep(2);
    else if (latest < stepSize * 3) setActiveStep(3);
    else setActiveStep(4);
    
    if (latest <= 0) setActiveStep(0);
  });

  return (
    <section id="proceso" ref={containerRef} className="py-32 px-4 sm:px-6 relative bg-dark-800/20">
      <div className="w-full max-w-[1200px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">¿Cómo Funciona?</h2>
          <p className="text-gray-400">Cuatro pasos simples hacia la eficiencia energética.</p>
        </motion.div>

        <div className="relative">
          {/* Base gray line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 transform md:-translate-x-1/2" />
          
          {/* Neon filling line */}
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-[20px] md:left-1/2 top-0 w-px bg-neon-green shadow-[0_0_15px_rgba(204,255,0,0.8)] transform md:-translate-x-1/2 origin-top z-0"
          />

          <div className="space-y-24 pb-24">
            {steps.map((step, index) => {
               const isReached = activeStep >= step.id;

               return (
              <div
                key={step.id}
                className={`flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-24 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex-1 pl-12 md:pl-0"
                >
                  <div className={`glass-panel p-8 rounded-2xl border transition-all duration-500 ${
                    isReached ? 'border-neon-green/30 bg-white/5 shadow-[0_0_30px_rgba(0,0,0,0.5)]' : 'border-white/5 opacity-50'
                  } ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <h3 className={`text-2xl font-display font-bold mb-2 transition-colors duration-300 ${isReached ? 'text-white' : 'text-gray-500'}`}>
                      {step.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>

                {/* Node / Icon */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center z-10">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 border-2 ${
                    isReached 
                      ? 'bg-dark-900 border-neon-green shadow-[0_0_20px_rgba(204,255,0,0.8)] scale-110' 
                      : 'bg-dark-900 border-gray-800 grayscale opacity-30 scale-90'
                  }`}>
                    <step.icon className={`w-5 h-5 transition-colors duration-300 ${isReached ? 'text-neon-green' : 'text-gray-600'}`} />
                  </div>
                </div>

                {/* Empty spacer for layout balance on desktop */}
                <div className="flex-1 hidden md:block" />
              </div>
            )})}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;