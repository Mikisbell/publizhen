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
        items: [
            { name: 'Láminas de PVC (Celtx)', image: '/images/item-pvc.png' },
            { name: 'Vinilos Adhesivos', image: '/images/item-vinilos.png' },
            { name: 'Laminados Mate/Brillo', image: '/images/item-laminados.png' },
            { name: 'Lonas Front/Back', image: '/images/item-lonas.png' },
            { name: 'Banners', image: '/images/item-banners-mat.png' },
            { name: 'Papeles Especiales', image: '/images/item-papeles.png' }
        ],
        image: '/images/category-materiales.png'
    },
    {
        id: 'displays',
        title: 'Displays',
        subtitle: 'Sistemas de Exhibición',
        icon: <Monitor size={32} />,
        color: 'var(--color-signal-orange)',
        items: [
            { name: 'Rollscreen Aluminio', image: '/images/item-rollscreen.png' },
            { name: 'X-banner', image: '/images/item-xbanner.png' },
            { name: 'Banners con Parante', image: '/images/item-parante.png' },
            { name: 'Módulos PVC', image: '/images/item-modulos.png' },
            { name: 'Backing de Prensa', image: '/images/item-backing.png' },
            { name: 'Pórticos Publicitarios', image: '/images/item-porticos.png' },
            { name: 'Tótems', image: '/images/item-totems.png' }
        ],
        image: '/images/category-displays.png'
    },
    {
        id: 'btl',
        title: 'Juegos BTL',
        subtitle: 'Dinámicas de Activación',
        icon: <Gamepad2 size={32} />,
        color: 'var(--color-signal-yellow)',
        items: [
            { name: 'Ruletas de Premio', image: '/images/item-ruletas.png' },
            { name: 'Ánforas Acrílicas', image: '/images/item-anforas.png' },
            { name: 'Dados Gigantes', image: '/images/item-dados.png' },
            { name: 'Marcos Selfie', image: '/images/item-marcos.png' },
            { name: 'Tiro al Blanco', image: '/images/item-tiro.png' },
            { name: 'Metegol MDF', image: '/images/item-metegol.png' },
            { name: 'Juegos de Memoria', image: '/images/item-memoria.png' }
        ],
        image: '/images/category-btl.png'
    },
    {
        id: 'corporeos',
        title: 'Corpóreos',
        subtitle: 'Volumetría y 3D',
        icon: <Layers size={32} />,
        color: 'var(--color-signal-magenta)',
        items: [
            { name: 'Letras Block (MDF/PVC)', image: '/images/item-letras.png' },
            { name: 'Logos Volumétricos', image: '/images/item-logos.png' },
            { name: 'Dummys de Producto', image: '/images/item-dummys.png' },
            { name: 'Señalética 3D', image: '/images/item-senaletica3d.png' },
            { name: 'Corpóreos Iluminados', image: '/images/item-corporeos.png' }
        ],
        image: '/images/category-corporeos.png'
    },
    {
        id: 'papeleria',
        title: 'Papelería',
        subtitle: 'Identidad Corporativa',
        icon: <Sticker size={32} />,
        color: '#333',
        items: [
            { name: 'Tarjetas Personales', image: '/images/item-tarjetas.png' },
            { name: 'Flyers y Volantes', image: '/images/item-flyers.png' },
            { name: 'Afiches', image: '/images/item-afiches.png' },
            { name: 'Magnéticos', image: '/images/item-magneticos.png' },
            { name: 'Credenciales y Fotochecks', image: '/images/item-credenciales.png' },
            { name: 'Calendarios', image: '/images/item-calendarios.png' },
            { name: 'Talonarios', image: '/images/item-talonarios.png' },
            { name: 'Etiquetas', image: '/images/item-etiquetas.png' }
        ],
        image: '/images/category-papeleria.png'
    },
    {
        id: 'letreros',
        title: 'Señalética',
        subtitle: 'Visibilidad Permanente',
        icon: <Lightbulb size={32} />,
        color: 'var(--color-signal-pink)',
        items: [
            { name: 'Letreros Luminosos', image: '/images/item-letreros.png' },
            { name: 'Cajas de Luz', image: '/images/item-cajas.png' },
            { name: 'Señalética de Seguridad', image: '/images/item-seguridad.png' },
            { name: 'Placas Grabadas', image: '/images/item-placas.png' },
            { name: 'Vinilos Decorativos', image: '/images/item-vinilos-dec.png' },
            { name: 'Ploteos', image: '/images/item-ploteos.png' }
        ],
        image: '/images/category-senaletica.png'
    }
];

const Products = () => {
    const [selectedProduct, setSelectedProduct] = useState<any>(null);

    const featuredProductData = {
        id: 'neon-flex',
        title: 'Neon Flex Ultra 2.0',
        subtitle: 'New Arrival 2025',
        image: '/images/product-neon.webp',
        items: [
            { name: 'Voltaje: 12V DC' },
            { name: 'Protección: IP67 (Waterproof)' },
            { name: 'Material: Silicón 100% Reciclable' },
            { name: 'Vida Útil: 50,000 Horas' },
            { name: 'Corte: Cada 2.5 cm' },
            { name: 'Colores: RGB, Pixel, Monocromático' }
        ]
    };

    return (
        <div className="pt-32 pb-20 min-h-screen bg-[var(--color-canvas)] relative">
            <SEO
                title="Productos | Publizhen"
                description="Catálogo completo de soluciones publicitarias: Neon Flex, Gigantografías, Merchandising y más."
            />

            <ProductModal
                isOpen={!!selectedProduct}
                onClose={() => setSelectedProduct(null)}
                product={selectedProduct}
            />

            <div className="container-fluid mb-8 relative z-10">
                <h1 className="text-[var(--text-display)] leading-none font-black uppercase tracking-tighter mb-4 mix-blend-multiply">
                    Catálogo <span className="text-[var(--color-signal-orange)]">.</span>
                </h1>
            </div>

            {/* Featured Product Section */}
            <FeaturedProduct onOpenSpecs={() => setSelectedProduct(featuredProductData)} />

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
                                        {item.name}
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
