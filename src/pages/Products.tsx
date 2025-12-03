import { Package, Monitor, Gamepad2, Layers } from 'lucide-react';

const categories = [
    {
        id: 'materiales',
        title: 'Materiales y Herramientas',
        icon: <Package size={40} className="text-blue-500" />,
        items: ['Láminas de PVC blanco (Celtx)', 'Vinilos', 'Laminados', 'Lonas']
    },
    {
        id: 'displays',
        title: 'Displays Publicitarios',
        icon: <Monitor size={40} className="text-purple-500" />,
        items: ['Rollscreen', 'X-banner', 'Banners con parante', 'Módulos', 'Backing', 'Pórticos', 'Tótems']
    },
    {
        id: 'btl',
        title: 'Juegos BTL',
        icon: <Gamepad2 size={40} className="text-pink-500" />,
        items: ['Ruletas', 'Ánforas', 'Dados', 'Marcos selfie', 'Tiro al blanco', 'Metegol MDF', 'Juegos de memoria']
    },
    {
        id: 'corporeos',
        title: 'Corpóreos y Dummys',
        icon: <Layers size={40} className="text-amber-500" />,
        items: ['Letras volumétricas', 'Dummys de producto', 'Corpóreos en MDF/PVC']
    }
];

const Products = () => {
    return (
        <div className="pt-24 pb-16 animate-fade-in">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Nuestros Productos</h1>
                <p className="text-xl text-gray-400 text-center mb-16 max-w-2xl mx-auto">
                    Encuentra todo lo necesario para potenciar la visibilidad de tu marca con materiales de alta calidad.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {categories.map((category) => (
                        <div key={category.id} className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-slate-700 transition-all hover:shadow-lg hover:shadow-blue-900/10">
                            <div className="flex items-center mb-6">
                                <div className="p-3 bg-slate-800 rounded-lg mr-4">
                                    {category.icon}
                                </div>
                                <h2 className="text-2xl font-bold">{category.title}</h2>
                            </div>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {category.items.map((item, index) => (
                                    <li key={index} className="flex items-center text-gray-300">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
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
