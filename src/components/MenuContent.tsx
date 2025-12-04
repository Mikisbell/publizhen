import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Printer, Package, PenTool, Layers, Monitor, Megaphone, ArrowRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const fadeVariants = {
    initial: { opacity: 0, scale: 1.05 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
    exit: { opacity: 0, transition: { duration: 0.2 } }
};

const AnimatedIcon = ({ icon: Icon, color }: { icon: React.ElementType, color: string }) => {
    return (
        <motion.div
            whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="p-2 rounded-lg bg-gray-50"
        >
            <Icon size={20} className={color} />
        </motion.div>
    );
};

export const ProductsContent = () => {
    const [activeImage, setActiveImage] = useState('/images/product-rollup.webp');
    const [activeText, setActiveText] = useState('Calidad que destaca en cada impresión.');

    const handleHover = (image: string, text: string) => {
        setActiveImage(image);
        setActiveText(text);
    };

    return (
        <div className="w-[800px] bg-white shadow-2xl border-t-4 border-[var(--color-signal-pink)] flex overflow-hidden rounded-b-xl">
            <div className="flex-1 p-8 grid grid-cols-2 gap-8">
                <div>
                    <h3 className="font-black uppercase text-lg mb-4 flex items-center gap-2">
                        <AnimatedIcon icon={Printer} color="text-[var(--color-signal-pink)]" />
                        Gran Formato
                    </h3>
                    <ul className="space-y-3">
                        {[
                            { name: 'Gigantografías', img: '/images/service-print.webp', txt: 'Impacto visual a gran escala.' },
                            { name: 'Vinilos Adhesivos', img: '/images/product-rollup.webp', txt: 'Adhesivos de alta durabilidad.' },
                            { name: 'Lonas Mesh', img: '/images/service-print.webp', txt: 'Resistencia y visibilidad exterior.' },
                            { name: 'Microperforado', img: '/images/product-rollup.webp', txt: 'Privacidad sin perder luz.' },
                            { name: 'Backlight', img: '/images/product-neon.webp', txt: 'Iluminación que cautiva.' }
                        ].map((item) => (
                            <li key={item.name}>
                                <Link
                                    to="/productos"
                                    className="block text-sm font-medium text-gray-600 hover:text-black hover:translate-x-1 transition-all duration-200"
                                    onMouseEnter={() => handleHover(item.img, item.txt)}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="font-black uppercase text-lg mb-4 flex items-center gap-2">
                        <AnimatedIcon icon={Package} color="text-[var(--color-signal-orange)]" />
                        Material P.O.P
                    </h3>
                    <ul className="space-y-3">
                        {[
                            { name: 'Exhibidores', img: '/images/product-rollup.webp', txt: 'Destaca tu producto en el punto de venta.' },
                            { name: 'Stands', img: '/images/service-print.webp', txt: 'Estructuras modulares para ferias.' },
                            { name: 'Roll-ups', img: '/images/product-rollup.webp', txt: 'Portabilidad y elegancia.' },
                            { name: 'Cajas de Luz', img: '/images/product-neon.webp', txt: 'Brillo que atrae miradas.' },
                            { name: 'Señalética', img: '/images/service-design.webp', txt: 'Orientación clara y estética.' }
                        ].map((item) => (
                            <li key={item.name}>
                                <Link
                                    to="/productos"
                                    className="block text-sm font-medium text-gray-600 hover:text-black hover:translate-x-1 transition-all duration-200"
                                    onMouseEnter={() => handleHover(item.img, item.txt)}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Link to="/productos" className="mt-6 inline-flex items-center text-xs font-bold uppercase tracking-widest text-[var(--color-signal-pink)] hover:underline">
                        Ver todo el catálogo <ArrowRight size={14} className="ml-1" />
                    </Link>
                </div>
            </div>
            <div className="w-1/3 bg-gray-100 relative overflow-hidden group cursor-pointer">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeImage}
                        variants={fadeVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="absolute inset-0"
                    >
                        <img src={activeImage} alt="Preview" className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <div className="flex items-center gap-2 text-[var(--color-signal-pink)] mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Sparkles size={16} />
                                    <span className="text-xs font-black uppercase tracking-widest">Destacado</span>
                                </div>
                                <p className="text-white font-bold text-sm leading-tight group-hover:text-white/90 transition-colors">
                                    {activeText}
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export const ServicesContent = () => {
    const [activeImage, setActiveImage] = useState('/images/service-print.webp');

    return (
        <div className="w-[700px] bg-white shadow-2xl border-t-4 border-[var(--color-signal-orange)] flex overflow-hidden rounded-b-xl">
            <div className="flex-1 p-8 grid grid-cols-1 gap-6">
                <div
                    className="group cursor-pointer"
                    onMouseEnter={() => setActiveImage('/images/service-print.webp')}
                >
                    <h3 className="font-black uppercase text-lg mb-2 flex items-center gap-2 group-hover:text-[var(--color-signal-orange)] transition-colors">
                        <AnimatedIcon icon={Monitor} color="text-black group-hover:text-[var(--color-signal-orange)]" />
                        Instalación
                    </h3>
                    <p className="text-sm text-gray-500 mb-2 pl-11">Montaje profesional de estructuras y vinilos en altura o superficie.</p>
                </div>
                <div
                    className="group cursor-pointer"
                    onMouseEnter={() => setActiveImage('/images/product-neon.webp')}
                >
                    <h3 className="font-black uppercase text-lg mb-2 flex items-center gap-2 group-hover:text-[var(--color-signal-orange)] transition-colors">
                        <AnimatedIcon icon={Layers} color="text-black group-hover:text-[var(--color-signal-orange)]" />
                        Mantenimiento
                    </h3>
                    <p className="text-sm text-gray-500 mb-2 pl-11">Reparación y limpieza de letreros luminosos y estructuras publicitarias.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg mt-2 ml-11">
                    <p className="text-xs font-bold text-gray-400 uppercase mb-1">¿Necesitas algo a medida?</p>
                    <Link to="/contacto" className="text-sm font-bold text-black hover:text-[var(--color-signal-orange)]">
                        Solicita una visita técnica &rarr;
                    </Link>
                </div>
            </div>
            <div className="w-2/5 bg-gray-100 relative overflow-hidden group">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={activeImage}
                        src={activeImage}
                        variants={fadeVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        alt="Servicios"
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                </AnimatePresence>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
            </div>
        </div>
    );
};

export const BrandingContent = () => {
    const [activeImage, setActiveImage] = useState('/images/service-design.webp');

    return (
        <div className="w-[600px] bg-white shadow-2xl border-t-4 border-[var(--color-signal-magenta)] flex overflow-hidden rounded-b-xl">
            <div className="flex-1 p-8 space-y-6">
                <Link
                    to="/branding"
                    className="group block"
                    onMouseEnter={() => setActiveImage('/images/service-design.webp')}
                >
                    <h3 className="font-black uppercase text-lg mb-1 flex items-center gap-2 group-hover:text-[var(--color-signal-magenta)] transition-colors">
                        <AnimatedIcon icon={PenTool} color="text-black group-hover:text-[var(--color-signal-magenta)]" />
                        Identidad Visual
                    </h3>
                    <p className="text-sm text-gray-500 pl-11">Logotipos, manuales de marca y papelería corporativa.</p>
                </Link>
                <Link
                    to="/branding"
                    className="group block"
                    onMouseEnter={() => setActiveImage('/images/hero.webp')}
                >
                    <h3 className="font-black uppercase text-lg mb-1 flex items-center gap-2 group-hover:text-[var(--color-signal-magenta)] transition-colors">
                        <AnimatedIcon icon={Megaphone} color="text-black group-hover:text-[var(--color-signal-magenta)]" />
                        Diseño Publicitario
                    </h3>
                    <p className="text-sm text-gray-500 pl-11">Campañas visuales para redes sociales y medios impresos.</p>
                </Link>
            </div>
            <div className="w-2/5 bg-gray-100 relative overflow-hidden group">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={activeImage}
                        src={activeImage}
                        variants={fadeVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        alt="Branding"
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 flex items-end p-6">
                    <span className="text-white font-black uppercase tracking-widest text-xs group-hover:translate-y-[-10px] transition-transform duration-300">Design Studio</span>
                </div>
            </div>
        </div>
    );
};
