import { useState } from 'react';
import { Package, Monitor, Gamepad2, Layers, ArrowUpRight, Sticker, Lightbulb } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
    {
        id: 'materiales',
        title: 'Materiales',
        subtitle: 'Insumos de Producción',
        icon: <Package size={32} />,
        color: 'var(--color-signal-pink)',
        items: ['Láminas de PVC (Celtx)', 'Vinilos Adhesivos', 'Laminados Mate/Brillo', 'Lonas Front/Back', 'Banners', 'Papeles Especiales'],
        image: '/images/service-print.webp'
    },
    {
        id: 'displays',
        title: 'Displays',
        subtitle: 'Sistemas de Exhibición',
        icon: <Monitor size={32} />,
        color: 'var(--color-signal-orange)',
        items: ['Rollscreen Aluminio', 'X-banner', 'Banners con Parante', 'Módulos PVC', 'Backing de Prensa', 'Pórticos Publicitarios', 'Tótems'],
        image: '/images/product-rollup.webp'
    },
    {
        id: 'btl',
        title: 'Juegos BTL',
        subtitle: 'Dinámicas de Activación',
        icon: <Gamepad2 size={32} />,
        color: 'var(--color-signal-yellow)',
        items: ['Ruletas de Premio', 'Ánforas Acrílicas', 'Dados Gigantes', 'Marcos Selfie', 'Tiro al Blanco', 'Metegol MDF', 'Juegos de Memoria'],
        image: '/images/btl-new.webp'
    },
    {
        id: 'corporeos',
        title: 'Corpóreos',
        subtitle: 'Volumetría y 3D',
        icon: <Layers size={32} />,
        color: 'var(--color-signal-magenta)',
        items: ['Letras Block (MDF/PVC)', 'Logos Volumétricos', 'Dummys de Producto', 'Señalética 3D', 'Corpóreos Iluminados'],
        image: '/images/service-design.webp'
    },
    {
        id: 'papeleria',
        title: 'Papelería',
        subtitle: 'Identidad Corporativa',
        icon: <Sticker size={32} />,
        color: '#333',
        items: ['Tarjetas Personales', 'Flyers y Volantes', 'Afiches', 'Magnéticos', 'Credenciales y Fotochecks', 'Calendarios', 'Talonarios', 'Etiquetas'],
        image: '/images/service-print.webp'
    },
    {
        id: 'letreros',
        title: 'Señalética',
        subtitle: 'Visibilidad Permanente',
        icon: <Lightbulb size={32} />,
        color: 'var(--color-signal-pink)',
        items: ['Letreros Luminosos', 'Cajas de Luz', 'Señalética de Seguridad', 'Placas Grabadas', 'Vinilos Decorativos', 'Ploteos'],
        image: '/images/product-neon.webp'
    }
];

const Products = () => {
    const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

    return (
        <div className="pt-32 pb-20 min-h-screen bg-[var(--color-canvas)] relative">
            <div className="container-fluid mb-20 relative z-10">
                <h1 className="text-[var(--text-display)] leading-none font-black uppercase tracking-tighter mb-4 mix-blend-multiply">
                    Catálogo <span className="text-[var(--color-signal-orange)]">.</span>
                </h1>
                <p className="text-xl font-medium text-black/60 max-w-2xl border-l-2 border-black pl-6">
                    Herramientas físicas para potenciar tu comunicación visual.
                </p>
            </div>

            <div className="border-t border-black relative z-10">
                {categories.map((category, index) => (
                    <motion.div
                        key={category.id}
                        className="group border-b border-black/10 relative overflow-hidden cursor-pointer"
                        onMouseEnter={() => setHoveredCategory(category.id)}
                        onMouseLeave={() => setHoveredCategory(null)}
                        initial="rest"
                        whileHover="hover"
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        animate="rest"
                        variants={{
                            rest: { opacity: 0, y: 50 },
                            hover: { opacity: 1, y: 0 }
                        }}
                    >
                        {/* Background Reveal */}
                        <motion.div
                            className="absolute inset-0 z-0 bg-black"
                            variants={{
                                rest: { opacity: 0 },
                                hover: { opacity: 1 }
                            }}
                            transition={{ duration: 0.3 }}
                        />

                        {/* Image Reveal on Hover (Large, Fixed or Absolute) */}
                        <AnimatePresence>
                            {hoveredCategory === category.id && (
                                <motion.div
                                    className="absolute right-0 top-0 h-full w-1/2 z-0 hidden lg:block pointer-events-none opacity-50 mix-blend-luminosity"
                                    initial={{ x: 100, opacity: 0 }}
                                    animate={{ x: 0, opacity: 0.4 }}
                                    exit={{ x: 100, opacity: 0 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                >
                                    <img src={category.image} alt={category.title} className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black" />
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="container-fluid py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
                            {/* Header */}
                            <div className="lg:col-span-5 flex flex-col justify-center">
                                <div className="flex items-baseline gap-4">
                                    <span className="text-sm font-bold uppercase tracking-widest text-black/40 group-hover:text-white/40 mb-2 block transition-colors">0{index + 1}</span>
                                    <h2 className="text-6xl font-black uppercase mb-2 text-black group-hover:text-white transition-colors duration-300">
                                        {category.title}
                                    </h2>
                                </div>
                                <p className="text-lg font-medium text-black/60 group-hover:text-[var(--color-signal-orange)] transition-colors pl-10">{category.subtitle}</p>
                            </div>

                            {/* Items Grid - Auto Reveal */}
                            <div className="lg:col-span-7 flex items-center">
                                <motion.div
                                    className="flex flex-wrap gap-3"
                                    variants={{
                                        rest: { opacity: 0.6 },
                                        hover: { opacity: 1 }
                                    }}
                                >
                                    {category.items.map((item, idx) => (
                                        <span
                                            key={idx}
                                            className="px-4 py-2 border border-black/10 bg-white/50 text-sm font-bold uppercase tracking-wider text-black group-hover:bg-transparent group-hover:border-white/30 group-hover:text-white transition-all duration-300"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </motion.div>
                            </div>

                            <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[var(--color-signal-orange)]">
                                <ArrowUpRight size={64} />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Products;
