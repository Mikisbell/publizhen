import { ArrowRight, Printer, PenTool, Layout as LayoutIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-pink)]/10 to-[var(--brand-orange)]/10 z-0" />
                {/* Placeholder background - replace with actual high-quality image later */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-5 z-[-1]" />

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[var(--brand-pink)] to-[var(--brand-orange)] drop-shadow-sm">
                        Impacto Visual <br /> que Trasciende
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto font-medium">
                        Soluciones innovadoras en publicidad, diseño y producción gráfica para marcas que buscan destacar.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-4">
                        <Link to="/productos" className="btn btn-primary text-lg px-8 py-4">
                            Ver Productos <ArrowRight className="ml-2" />
                        </Link>
                        <Link to="/contacto" className="px-8 py-4 rounded-full border-2 border-slate-300 text-slate-700 hover:border-[var(--brand-pink)] hover:text-[var(--brand-pink)] transition-colors font-bold uppercase tracking-wider text-sm flex items-center justify-center">
                            Cotizar Proyecto
                        </Link>
                    </div>
                </div>
            </section>

            {/* Services Preview */}
            <section className="section relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--brand-yellow)_0%,_transparent_70%)] opacity-10 pointer-events-none"></div>
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl md:text-6xl font-bold text-center mb-20 neon-text">Nuestras Especialidades</h2>
                    <div className="bento-grid">
                        <div className="glass-panel p-10 bento-card neon-box group">
                            <Printer size={64} className="text-[var(--brand-pink)] mb-8 group-hover:scale-110 transition-transform duration-300" />
                            <h3 className="text-3xl font-bold mb-4 text-slate-800">Impresión Gran Formato</h3>
                            <p className="text-slate-600 mb-8 leading-relaxed">Gigantografías, banners, vinilos y todo lo necesario para campañas de alto impacto visual.</p>
                            <Link to="/servicios" className="text-[var(--brand-pink)] hover:text-[var(--brand-magenta)] font-bold flex items-center tracking-wider">
                                SABER MÁS <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                        <div className="glass-panel p-10 bento-card neon-box group">
                            <LayoutIcon size={64} className="text-[var(--brand-orange)] mb-8 group-hover:scale-110 transition-transform duration-300" />
                            <h3 className="text-3xl font-bold mb-4 text-slate-800">Displays & BTL</h3>
                            <p className="text-slate-600 mb-8 leading-relaxed">Rollscreens, módulos, ruletas y juegos publicitarios para activar tu marca en cualquier evento.</p>
                            <Link to="/productos" className="text-[var(--brand-orange)] hover:text-[var(--brand-pink)] font-bold flex items-center tracking-wider">
                                VER CATÁLOGO <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                        <div className="glass-panel p-10 bento-card neon-box group">
                            <PenTool size={64} className="text-[var(--brand-yellow)] mb-8 group-hover:scale-110 transition-transform duration-300" />
                            <h3 className="text-3xl font-bold mb-4 text-slate-800">Branding & Diseño</h3>
                            <p className="text-slate-600 mb-8 leading-relaxed">Creación de identidad corporativa, logos y líneas gráficas que conectan con tu audiencia.</p>
                            <Link to="/branding" className="text-[var(--brand-yellow)] hover:text-[var(--brand-orange)] font-bold flex items-center tracking-wider">
                                VER PORTAFOLIO <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
