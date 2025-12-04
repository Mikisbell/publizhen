import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroCinematic = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-black text-white">
            {/* 1. Background Visual - The "Hero" */}
            <div className="absolute inset-0 z-0">
                {/* Video Background with Fallback */}
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    poster="/images/hero-printer.webp"
                >
                    <source src="/videos/hero-background.mp4" type="video/mp4" />
                    {/* Fallback to Cinematic Motion if video fails/missing */}
                </video>

                {/* Cinematic Motion (Ken Burns Effect) - Visible only if video doesn't load (handled via CSS/JS usually, but here we layer it behind or use it as poster) 
                    For this implementation, we'll keep the motion div as a backup layer that shows if the video is transparent or missing.
                */}
                <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.1 }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "linear"
                    }}
                    className="absolute inset-0 w-full h-full -z-10"
                >
                    <img
                        src="/images/hero-printer.webp"
                        alt="Industrial Print Lab"
                        className="w-full h-full object-cover opacity-60"
                    />
                </motion.div>

                {/* Gradient Overlay for Text Readability - Top (Navbar) & Left (Text) */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 z-10" />

                {/* Noise Texture Overlay */}
                <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay z-10" />
            </div>

            {/* 2. Content - Focused & Minimal */}
            <div className="relative z-10 container-fluid h-full flex flex-col justify-center">
                <div className="max-w-4xl">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-3 py-1 border border-[var(--color-signal-pink)] rounded-full mb-8 backdrop-blur-md bg-black/30"
                    >
                        <span className="w-2 h-2 rounded-full bg-[var(--color-signal-pink)] animate-pulse" />
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-signal-pink)]">
                            Laboratorio Industrial
                        </span>
                    </motion.div>

                    {/* Main Title - Huge & Clean */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-[12vw] leading-[0.85] font-black uppercase tracking-tighter mb-8"
                    >
                        Revolución <br />
                        <span className="text-transparent text-stroke-white hover:text-white transition-colors duration-500 cursor-default">
                            Visual
                        </span>
                        <span className="text-[var(--color-signal-pink)]">.</span>
                    </motion.h1>

                    {/* Subtitle - The "Hook" */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl font-medium text-gray-300 max-w-2xl mb-12 border-l-4 border-[var(--color-signal-pink)] pl-6"
                    >
                        Ingeniería visual de alto calibre. <br />
                        Transformamos espacios y marcas con precisión industrial.
                    </motion.p>

                    {/* CTA - Single Primary Action */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-6"
                    >
                        <a href="https://wa.me/51976277993?text=Hola,%20me%20gustar%C3%ADa%20cotizar%20un%20proyecto." target="_blank" rel="noopener noreferrer" className="btn-signal text-lg px-12 py-6 group flex items-center gap-3 !bg-[#25D366] hover:!bg-black rounded-full">
                            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" /><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" /></svg>
                            Iniciar Proyecto
                            <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                        </a>
                        <Link to="/productos" className="px-12 py-6 text-sm font-bold uppercase tracking-widest text-white hover:text-[var(--color-signal-pink)] transition-colors flex items-center">
                            Explorar Catálogo
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* 3. Footer/Scroll Indicator */}
            <div className="absolute bottom-10 left-0 w-full px-8 flex justify-between items-end z-20 opacity-50">
                <div className="hidden md:block text-xs font-mono">
                    COORD: 34.0522° N, 118.2437° W <br />
                    ESTADO: OPERATIVO
                </div>
                <div className="animate-bounce">
                    <span className="text-[10px] font-bold uppercase tracking-widest writing-vertical-rl">Desliza</span>
                </div>
            </div>
        </section>
    );
};

export default HeroCinematic;
