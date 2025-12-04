import { useState } from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import SEO from '../components/SEO';
import MagneticButton from '../components/MagneticButton';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className="pt-32 pb-20 min-h-screen relative">
            <SEO
                title="Contacto - Cotiza tu Proyecto"
                description="Contáctanos para cotizar tus proyectos de publicidad industrial, branding o BTL. Estamos ubicados en Lima, Perú."
                keywords="Agencia de Publicidad Lima, Contacto Publizhen, Cotizar Gigantografías, Taller de Impresión, Imprenta Lima"
                url="/contacto"
            />

            {/* Focus Mode Overlay */}
            <AnimatePresence>
                {isFocused && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 z-40 pointer-events-none transition-opacity duration-500"
                    />
                )}
            </AnimatePresence>

            <div className={`container-fluid mb-20 relative z-30 transition-opacity duration-500 ${isFocused ? 'opacity-20 blur-sm' : 'opacity-100'}`}>
                <h1 className="text-[8vw] leading-none font-black uppercase tracking-tighter mb-4">
                    Contacto <span className="text-[var(--signal-pink)]">.</span>
                </h1>
                <p className="text-xl font-medium text-black/60 max-w-2xl border-l-2 border-black pl-6">
                    Inicia tu próximo gran proyecto con nosotros.
                </p>
            </div>

            <div className="container-fluid grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-50">
                {/* Info */}
                <div className={`space-y-12 transition-all duration-500 ${isFocused ? 'opacity-20 blur-sm' : 'opacity-100'}`}>
                    <div className="group">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-black/40 mb-2 flex items-center gap-2"><Phone size={16} /> Teléfono</h3>
                        <p className="text-3xl font-black group-hover:text-[var(--signal-pink)] transition-colors">+51 976 277 993</p>
                    </div>
                    <div className="group">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-black/40 mb-2 flex items-center gap-2"><Mail size={16} /> Email</h3>
                        <p className="text-3xl font-black group-hover:text-[var(--signal-pink)] transition-colors">contacto@publizhen.com</p>
                        <p className="text-xl font-bold text-black/60">ventas@publizhen.com</p>
                    </div>
                    <div className="group">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-black/40 mb-2 flex items-center gap-2"><MapPin size={16} /> Ubicación</h3>
                        <p className="text-2xl font-bold leading-relaxed max-w-md">
                            Av. Bolivia N° 148 - Int. 3095<br />
                            Lima, Peru
                        </p>
                    </div>
                </div>

                {/* Form */}
                <form className={`bg-white p-12 border border-black/10 shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] transition-all duration-500 ${isFocused ? 'scale-105 shadow-[0px_0px_50px_rgba(255,255,255,0.2)] border-white/20' : ''}`}>
                    <div className="space-y-8">
                        <div>
                            <label className={`block text-sm font-bold uppercase tracking-widest mb-2 transition-colors ${isFocused ? 'text-[var(--signal-pink)]' : 'text-black'}`}>Nombre</label>
                            <input
                                type="text"
                                className="w-full bg-transparent border-b-2 border-black/20 py-4 text-xl font-bold focus:outline-none focus:border-[var(--signal-pink)] transition-colors"
                                placeholder="Tu nombre"
                                onFocus={() => setIsFocused(true)}
                                onBlur={() => setIsFocused(false)}
                            />
                        </div>
                        <div>
                            <label className={`block text-sm font-bold uppercase tracking-widest mb-2 transition-colors ${isFocused ? 'text-[var(--signal-pink)]' : 'text-black'}`}>Email</label>
                            <input
                                type="email"
                                className="w-full bg-transparent border-b-2 border-black/20 py-4 text-xl font-bold focus:outline-none focus:border-[var(--signal-pink)] transition-colors"
                                placeholder="tu@email.com"
                                onFocus={() => setIsFocused(true)}
                                onBlur={() => setIsFocused(false)}
                            />
                        </div>
                        <div>
                            <label className={`block text-sm font-bold uppercase tracking-widest mb-2 transition-colors ${isFocused ? 'text-[var(--signal-pink)]' : 'text-black'}`}>Mensaje</label>
                            <textarea
                                className="w-full bg-transparent border-b-2 border-black/20 py-4 text-xl font-bold focus:outline-none focus:border-[var(--signal-pink)] transition-colors h-32 resize-none"
                                placeholder="Cuéntanos sobre tu proyecto..."
                                onFocus={() => setIsFocused(true)}
                                onBlur={() => setIsFocused(false)}
                            ></textarea>
                        </div>
                        <MagneticButton className="btn-signal w-full text-lg py-6 flex items-center justify-center">
                            Enviar Mensaje <Send size={20} className="ml-2" />
                        </MagneticButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
