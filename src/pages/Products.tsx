import { Package, Monitor, Gamepad2, Layers, ArrowUpRight } from 'lucide-react';

const categories = [
    {
        id: 'materiales',
        title: 'Materiales',
        subtitle: 'Insumos de Producción',
        icon: <Package size={32} />,
        color: 'var(--signal-pink)',
        items: ['Láminas de PVC (Celtx)', 'Vinilos Adhesivos', 'Laminados Mate/Brillo', 'Lonas Front/Back'],
        image: '/images/service-print.png'
    },
    {
        id: 'displays',
        title: 'Displays',
        subtitle: 'Sistemas de Exhibición',
        icon: <Monitor size={32} />,
        color: 'var(--signal-orange)',
        items: ['Rollscreen Aluminio', 'X-banner', 'Módulos PVC', 'Backing de Prensa', 'Pórticos Publicitarios'],
        image: '/images/product-rollup.png'
    },
    {
        id: 'btl',
        title: 'Activación BTL',
        subtitle: 'Juegos y Dinámicas',
        icon: <Gamepad2 size={32} />,
        color: 'var(--signal-yellow)',
        items: ['Ruletas de Premio', 'Ánforas Acrílicas', 'Dados Gigantes', 'Marcos Selfie', 'Juegos de Memoria'],
        image: '/images/product-neon.png'
    },
    {
        id: 'corporeos',
        title: 'Corpóreos',
        subtitle: 'Volumetría y 3D',
        icon: <Layers size={32} />,
        color: 'var(--signal-magenta)',
        items: ['Letras Block (MDF/PVC)', 'Logos Volumétricos', 'Dummys de Producto', 'Señalética 3D'],
        image: '/images/service-design.png'
    }
];

const Products = () => {
    return (
        <div className="pt-32 pb-20 min-h-screen">
            <div className="container-fluid mb-20">
                <h1 className="text-[8vw] leading-none font-black uppercase tracking-tighter mb-4">
                    Catálogo <span className="text-[var(--signal-orange)]">.</span>
                </h1>
                <p className="text-xl font-medium text-black/60 max-w-2xl border-l-2 border-black pl-6">
                    Herramientas físicas para potenciar tu comunicación visual.
                </p>
            </div>

            <div className="border-t border-black/10">
                {categories.map((category, index) => (
                    <div key={category.id} className="group border-b border-black/10 hover:bg-white transition-colors duration-500 overflow-hidden relative">
                        {/* Subtle Background Image on Hover */}
                        <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none">
                            <img src={category.image} alt={category.title} className="w-full h-full object-cover" />
                        </div>

                        <div className="container-fluid py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
                            {/* Header */}
                            <div className="lg:col-span-4 flex flex-col justify-between">
                                <div>
                                    <span className="text-sm font-bold uppercase tracking-widest text-black/40 mb-2 block">0{index + 1}</span>
                                    <h2 className="text-5xl font-black uppercase mb-2 group-hover:text-[var(--ink)] transition-colors" style={{ color: category.color }}>
                                        {category.title}
                                    </h2>
                                    <p className="text-lg font-medium text-black/60">{category.subtitle}</p>
                                </div>
                                <div className="mt-8 lg:mt-0 hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <ArrowUpRight size={48} style={{ color: category.color }} />
                                </div>
                            </div>

                            {/* Items Grid */}
                            <div className="lg:col-span-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                                    {category.items.map((item, idx) => (
                                        <div key={idx} className="flex items-center border-b border-black/5 pb-4 group/item">
                                            <div className="w-2 h-2 rounded-full mr-4 transition-all duration-300 group-hover/item:scale-150" style={{ backgroundColor: category.color }}></div>
                                            <span className="text-xl font-bold text-black/80 group-hover/item:text-black transition-colors">
                                                {item}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
