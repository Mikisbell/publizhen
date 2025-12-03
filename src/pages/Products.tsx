import { Package, Monitor, Gamepad2, Layers } from 'lucide-react';

const categories = [
    {
        id: 'materiales',
        title: 'Materiales y Herramientas',
        icon: <Package size={40} className="text-[var(--brand-pink)]" />,
        items: ['Láminas de PVC blanco (Celtx)', 'Vinilos', 'Laminados', 'Lonas']
    },
    {
        id: 'displays',
        title: 'Displays Publicitarios',
        icon: <Monitor size={40} className="text-[var(--brand-magenta)]" />,
        items: ['Rollscreen', 'X-banner', 'Banners con parante', 'Módulos', 'Backing', 'Pórticos', 'Tótems']
    },
    {
        id: 'btl',
        title: 'Juegos BTL',
        icon: <Gamepad2 size={40} className="text-[var(--brand-orange)]" />,
        items: ['Ruletas', 'Ánforas', 'Dados', 'Marcos selfie', 'Tiro al blanco', 'Metegol MDF', 'Juegos de memoria']
    },
    {
        id: 'corporeos',
        title: 'Corpóreos y Dummys',
        icon: <Layers size={40} className="text-[var(--brand-yellow)]" />,
        items: ['Letras volumétricas', 'Dummys de producto', 'Corpóreos en MDF/PVC']
    }
];

const Products = () => {
    return (
        <div className="pt-24 pb-16 animate-fade-in">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 neon-text">Nuestros Productos</h1>
                <p className="text-xl text-slate-600 text-center mb-16 max-w-2xl mx-auto">
                    Encuentra todo lo necesario para potenciar la visibilidad de tu marca con materiales de alta calidad.
                </p>

                <div className="bento-grid">
                    {categories.map((category) => (
                        <div key={category.id} className="glass-panel rounded-3xl p-8 bento-card neon-box hover:scale-[1.02] transition-transform duration-300">
                            <div className="flex items-center mb-6">
                                <div className="p-3 bg-white/50 rounded-xl mr-4 border border-white/60">
                                    {category.icon}
                                </div>
                                <h2 className="text-2xl font-bold text-slate-800">{category.title}</h2>
                            </div>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {category.items.map((item, index) => (
                                    <li key={index} className="flex items-center text-slate-600">
                                        <span className="w-2 h-2 bg-[var(--brand-pink)] rounded-full mr-3 shadow-[0_0_10px_var(--brand-pink)]"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;
