import { useState } from 'react';
import { Package, Monitor, Gamepad2, Layers, ArrowUpRight, Sticker, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import FeaturedProduct from '../components/FeaturedProduct';
import ProductModal from '../components/ProductModal';

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
    const [selectedProduct, setSelectedProduct] = useState<any>(null);

    return (
        <div className="pt-32 pb-20 min-h-screen bg-[var(--color-canvas)] relative">
            <SEO
                title="Catálogo de Productos Publicitarios"
                description="Displays, Roll Screens, Juegos BTL, Corpóreos 3D y Materiales de Impresión. Todo lo que necesitas para activar tu marca en el punto de venta."
                keywords="Displays Publicitarios, Roll Screen, Módulos BTL, Juegos BTL, Ruletas Publicitarias, Corpóreos 3D, Materiales Publicitarios"
                url="/productos"
            />

            <ProductModal
                isOpen={!!selectedProduct}
                onClose={() => setSelectedProduct(null)}
                product={selectedProduct}
            />

            <div className="container-fluid mb-20 relative z-10">
                <h1 className="text-[var(--text-display)] leading-none font-black uppercase tracking-tighter mb-4 mix-blend-multiply">
                    Catálogo <span className="text-[var(--color-signal-orange)]">.</span>
                </h1>
                <p className="text-xl font-medium text-black/60 max-w-2xl border-l-2 border-black pl-6">
                    Herramientas físicas para potenciar tu comunicación visual.
                </p>
            </div>

            {/* Featured Product Section */}
            <FeaturedProduct />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/10 border-t border-black/10">
                {categories.map((category, index) => (
                    <motion.div
                        key={category.id}
                        className="group bg-white relative overflow-hidden cursor-pointer min-h-[400px] flex flex-col justify-between p-8 hover:bg-black transition-colors duration-500"
                        onClick={() => setSelectedProduct(category)}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        {/* Background Image Reveal */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none">
                            <img src={category.image} alt={category.title} className="w-full h-full object-cover grayscale" />
                        </div>

                        {/* Header */}
                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-xs font-bold uppercase tracking-widest text-black/40 group-hover:text-white/60 transition-colors">0{index + 1}</span>
                                <div className="text-black/20 group-hover:text-[var(--color-signal-orange)] transition-colors transform group-hover:rotate-45 duration-300">
                                    <ArrowUpRight size={24} />
                                </div>
                            </div>
                            <div className="mb-2 text-[var(--color-signal-orange)] opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                {category.icon}
                            </div>
                            <h2 className="text-3xl font-black uppercase mb-2 text-black group-hover:text-white transition-colors duration-300 leading-none">
                                {category.title}
                            </h2>
                            <p className="text-sm font-medium text-black/60 group-hover:text-white/80 transition-colors">{category.subtitle}</p>
                        </div>

                        {/* Items List (Compact) */}
                        <div className="relative z-10 mt-8">
                            <div className="flex flex-wrap gap-2">
                                {category.items.slice(0, 3).map((item, idx) => (
                                    <span key={idx} className="text-[10px] font-bold uppercase tracking-wider border border-black/10 px-2 py-1 rounded-sm group-hover:border-white/20 group-hover:text-white/80 transition-colors">
                                        {item}
                                    </span>
                                ))}
                                {category.items.length > 3 && (
                                    <span className="text-[10px] font-bold uppercase tracking-wider border border-black/10 px-2 py-1 rounded-sm group-hover:border-white/20 group-hover:text-[var(--color-signal-orange)] transition-colors">
                                        +{category.items.length - 3}
                                    </span>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Products;
