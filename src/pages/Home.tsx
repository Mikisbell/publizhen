import { ArrowRight, Printer, PenTool, Layout as LayoutIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 z-0" />
                {/* Placeholder background - replace with actual high-quality image later */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10 z-[-1]" />

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">
                        Impacto Visual <br /> que Trasciende
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                        Soluciones innovadoras en publicidad, diseño y producción gráfica para marcas que buscan destacar.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-4">
                        <Link to="/productos" className="btn btn-primary text-lg px-8 py-4">
                            Ver Productos <ArrowRight className="ml-2" />
                        </Link>
                        <Link to="/contacto" className="px-8 py-4 rounded-lg border border-white/20 hover:bg-white/10 transition-colors font-semibold">
                            Cotizar Proyecto
                        </Link>
                    </div>
                </div>
            </section>

            {/* Services Preview */}
            <section className="section bg-slate-900">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Nuestras Especialidades</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-2xl bg-slate-800 hover:bg-slate-750 transition-colors border border-slate-700">
                            <Printer size={48} className="text-blue-500 mb-6" />
                            <h3 className="text-2xl font-bold mb-4">Impresión Gran Formato</h3>
                            <p className="text-gray-400 mb-6">Gigantografías, banners, vinilos y todo lo necesario para campañas de alto impacto visual.</p>
                            <Link to="/servicios" className="text-blue-400 hover:text-blue-300 font-semibold flex items-center">
                                Saber más <ArrowRight size={16} className="ml-2" />
                            </Link>
                        </div>
                        <div className="p-8 rounded-2xl bg-slate-800 hover:bg-slate-750 transition-colors border border-slate-700">
                            <LayoutIcon size={48} className="text-purple-500 mb-6" />
                            <h3 className="text-2xl font-bold mb-4">Displays & BTL</h3>
                            <p className="text-gray-400 mb-6">Rollscreens, módulos, ruletas y juegos publicitarios para activar tu marca en cualquier evento.</p>
                            <Link to="/productos" className="text-purple-400 hover:text-purple-300 font-semibold flex items-center">
                                Ver catálogo <ArrowRight size={16} className="ml-2" />
                            </Link>
                        </div>
                        <div className="p-8 rounded-2xl bg-slate-800 hover:bg-slate-750 transition-colors border border-slate-700">
                            <PenTool size={48} className="text-pink-500 mb-6" />
                            <h3 className="text-2xl font-bold mb-4">Branding & Diseño</h3>
                            <p className="text-gray-400 mb-6">Creación de identidad corporativa, logos y líneas gráficas que conectan con tu audiencia.</p>
                            <Link to="/branding" className="text-pink-400 hover:text-pink-300 font-semibold flex items-center">
                                Ver portafolio <ArrowRight size={16} className="ml-2" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
