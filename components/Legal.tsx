import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

interface LegalPageProps {
  onBack: () => void;
}

const LegalLayout: React.FC<{ title: string; date: string; children: React.ReactNode; onBack: () => void }> = ({ title, date, children, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-dark-900 text-gray-300 pt-32 pb-20 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-neon-green hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Volver al inicio
        </button>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10"
        >
          <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">{title}</h1>
          <p className="text-sm text-gray-500 mb-8">Última actualización: <strong>{date}</strong></p>
          
          <div className="prose prose-invert prose-p:text-gray-300 prose-headings:text-neon-green prose-headings:font-display prose-a:text-blue-400 max-w-none space-y-6">
            {children}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export const CookiePolicy: React.FC<LegalPageProps> = ({ onBack }) => (
  <LegalLayout title="Política de Cookies" date="23/10/2025" onBack={onBack}>
    <p>Esta política explica qué son las cookies, qué tipos usamos en <strong>partnerenergetico.netlify.app</strong>, con qué finalidad y cómo puedes gestionarlas o revocar tu consentimiento.</p>

    <h3>¿Qué es una cookie?</h3>
    <p>Una cookie es un fichero que se descarga en tu dispositivo al acceder a determinadas páginas web. Permite, por ejemplo, recordar tus preferencias o medir el uso del sitio.</p>

    <h3>¿Qué cookies utilizamos en esta web?</h3>
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse my-4">
        <thead>
          <tr className="border-b border-white/20 text-white">
            <th className="p-4">Nombre / Proveedor</th>
            <th className="p-4">Finalidad</th>
            <th className="p-4">Tipo</th>
            <th className="p-4">Duración</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10">
          <tr>
            <td className="p-4 font-bold text-white">_ga / Google Analytics</td>
            <td className="p-4">Analítica: medir visitas y comportamiento de usuarios.</td>
            <td className="p-4">Terciaria / Analítica</td>
            <td className="p-4">2 años</td>
          </tr>
          <tr>
            <td className="p-4 font-bold text-white">netlify</td>
            <td className="p-4">Cookies de sesión del hosting.</td>
            <td className="p-4">Técnica</td>
            <td className="p-4">Sesión</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3>Clasificación simplificada</h3>
    <ul className="list-disc pl-5 space-y-2">
      <li><strong>Cookies estrictamente necesarias:</strong> necesarias para el correcto funcionamiento del sitio.</li>
      <li><strong>Cookies de analítica:</strong> recogen información estadística (Google Analytics).</li>
    </ul>

    <div className="bg-white/5 p-6 rounded-lg border-l-4 border-neon-green my-6">
      <strong>Importante:</strong> No activaremos cookies de analítica ni marketing hasta que el usuario haya aceptado expresamente mediante el banner de cookies.
    </div>

    <h3>Cómo gestionar o rechazar cookies</h3>
    <p>Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de las opciones del navegador (Chrome, Firefox, Safari, Edge).</p>
  </LegalLayout>
);

export const PrivacyPolicy: React.FC<LegalPageProps> = ({ onBack }) => (
  <LegalLayout title="Política de Privacidad" date="23/10/2025" onBack={onBack}>
    <p>En cumplimiento del Reglamento (UE) 2016/679 (GDPR) y la normativa española aplicable (LOPDGDD), facilitamos la siguiente información sobre el tratamiento de los datos personales recogidos a través de esta web.</p>

    <h3>1. Identidad del responsable</h3>
    <p>
      Responsable: <strong>Partner Energético</strong><br/>
      Dirección: <strong>Valencia, Comunidad Valenciana, España</strong><br/>
      Email: <a href="mailto:energialfred@gmail.com">energialfred@gmail.com</a>
    </p>

    <h3>2. Finalidades del tratamiento</h3>
    <ul className="list-disc pl-5 space-y-2">
      <li>Gestionar solicitudes de contacto, presupuestos y la prestación de nuestros servicios.</li>
      <li>Mejorar la experiencia del usuario y la seguridad del sitio web.</li>
    </ul>

    <h3>3. Legitimación</h3>
    <p>La base legal es el consentimiento del interesado cuando rellena el formulario y marca la casilla de aceptación.</p>

    <h3>4. Derechos del interesado</h3>
    <p>Puedes ejercer los derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad enviando tu solicitud a <a href="mailto:energialfred@gmail.com">energialfred@gmail.com</a>.</p>
  </LegalLayout>
);

export const LegalNotice: React.FC<LegalPageProps> = ({ onBack }) => (
  <LegalLayout title="Aviso Legal" date="23/10/2025" onBack={onBack}>
    <p>En cumplimiento con el deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico, a continuación se reflejan los siguientes datos:</p>

    <h3>Identificación del titular</h3>
    <p>
      <strong>Denominación social:</strong> Partner Energético<br/>
      <strong>Domicilio:</strong> Valencia, Comunidad Valenciana, España<br/>
      <strong>Email:</strong> energialfred@gmail.com
    </p>

    <h3>Propiedad intelectual</h3>
    <p>Todos los contenidos del sitio web (textos, imágenes, diseños, logos, etc.) están protegidos por la legislación en materia de propiedad intelectual e industrial.</p>

    <h3>Exclusión de garantías</h3>
    <p>Partner Energético no se hace responsable de los daños y perjuicios de cualquier naturaleza que puedan deberse a la falta de disponibilidad o continuidad del funcionamiento del sitio web.</p>
  </LegalLayout>
);

export const TermsOfUse: React.FC<LegalPageProps> = ({ onBack }) => (
  <LegalLayout title="Condiciones de Uso" date="23/10/2025" onBack={onBack}>
    <p>El acceso y utilización del sitio web de Partner Energético atribuye la condición de usuario, por lo que se aceptan las condiciones de uso aquí reflejadas.</p>

    <h3>Obligaciones del usuario</h3>
    <ul className="list-disc pl-5 space-y-2">
      <li>Hacer un uso correcto del sitio web conforme a las leyes y buenas costumbres.</li>
      <li>No realizar actividades ilícitas o contrarias a la moral.</li>
      <li>No provocar daños en los sistemas físicos o lógicos del sitio web.</li>
    </ul>

    <h3>Modificaciones</h3>
    <p>Partner Energético se reserva el derecho de modificar en cualquier momento las condiciones generales de uso.</p>
  </LegalLayout>
);