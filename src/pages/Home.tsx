import { ArrowRight, Printer, PenTool, Layout as LayoutIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <div className="pt-20">
            {/* Hero Section - Brutalist */}
            <section className="min-h-[90vh] flex flex-col justify-center relative border-b border-black/10 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img src="/images/hero.png" alt="Taller de Impresión" className="w-full h-full object-cover opacity-20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--canvas)] via-transparent to-transparent" />
                </div>

                <div className="container-fluid grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-20 relative z-10">
                    <div className="lg:col-span-9">
                        <motion.h1
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-[12vw] leading-[0.85] font-black tracking-tighter uppercase mb-8"
                        >
                            Impacto <br />
                            <span className="text-stroke">Visual</span> <br />
                            <span className="text-[var(--signal-pink)]">Total.</span>
                        </motion.h1>
                    </div>
                    <div className="lg:col-span-3 flex flex-col justify-end h-full pb-4">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            <p className="text-lg font-medium leading-relaxed mb-8 border-l-2 border-[var(--signal-orange)] pl-6">
                                Soluciones de producción gráfica y publicidad para marcas que no piden permiso.
                            </p>
                            <div className="flex flex-col gap-4">
                                <Link to="/productos" className="btn-industrial w-full group bg-white/80 backdrop-blur-sm">
                                    Ver Catálogo <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                                </Link>
                                <Link to="/contacto" className="btn-signal w-full">
                                    Iniciar Proyecto
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Decorative Ticker */}
                <div className="absolute bottom-0 w-full overflow-hidden border-t border-black/10 py-4 bg-white/90 backdrop-blur-md z-20">
                    <div className="whitespace-nowrap animate-marquee flex gap-12">
                        {[...Array(10)].map((_, i) => (
                            <span key={i} className="text-sm font-bold uppercase tracking-widest text-black/40">
                                Gigantografías • Branding • Displays • Señalética • BTL •
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section - Editorial Grid */}
            <section className="py-0">
                <div className="grid grid-cols-1 md:grid-cols-3">
                    {/* Service 1 */}
                    <div className="group border-r border-b border-black/10 p-12 min-h-[600px] flex flex-col justify-between hover:text-white transition-colors relative overflow-hidden">
                        <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <img src="/images/service-print.png" alt="Gran Formato" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/60" />
                        </div>

                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity z-10">
                            <Printer size={120} className="text-[var(--signal-pink)]" />
                        </div>
                        <div className="relative z-10">
                            <span className="text-6xl font-black text-black/10 group-hover:text-[var(--signal-pink)] transition-colors">01</span>
                            <h3 className="text-3xl font-black uppercase mt-8 mb-4">Gran Formato</h3>
                            <p className="text-black/60 group-hover:text-white/80 font-medium leading-relaxed transition-colors">
                                Impresión de alta resolución para cuando el tamaño sí importa. Lonas, vinilos y estructuras gigantes.
                            </p>
                        </div>
                        <Link to="/servicios" className="relative z-10 mt-8 text-sm font-bold uppercase tracking-widest flex items-center group-hover:text-[var(--signal-pink)] transition-colors">
                            Explorar <ArrowRight size={16} className="ml-2" />
                        </Link>
                    </div>

                    {/* Service 2 */}
                    <div className="group border-r border-b border-black/10 p-12 min-h-[600px] flex flex-col justify-between hover:text-white transition-colors relative overflow-hidden">
                        <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <img src="/images/product-rollup.png" alt="Displays" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/60" />
                        </div>

                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity z-10">
                            <LayoutIcon size={120} className="text-[var(--signal-orange)]" />
                        </div>
                        <div className="relative z-10">
                            <span className="text-6xl font-black text-black/10 group-hover:text-[var(--signal-orange)] transition-colors">02</span>
                            <h3 className="text-3xl font-black uppercase mt-8 mb-4">Displays & BTL</h3>
                            <p className="text-black/60 group-hover:text-white/80 font-medium leading-relaxed transition-colors">
                                Estructuras portátiles y módulos de atención que detienen el tráfico en cualquier evento.
                            </p>
                        </div>
                        <Link to="/productos" className="relative z-10 mt-8 text-sm font-bold uppercase tracking-widest flex items-center group-hover:text-[var(--signal-orange)] transition-colors">
                            Ver Productos <ArrowRight size={16} className="ml-2" />
                        </Link>
                    </div>

                    {/* Service 3 */}
                    <div className="group border-b border-black/10 p-12 min-h-[600px] flex flex-col justify-between hover:text-white transition-colors relative overflow-hidden">
                        <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <img src="/images/service-design.png" alt="Branding" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/60" />
                        </div>

                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity z-10">
                            <PenTool size={120} className="text-[var(--signal-yellow)]" />
                        </div>
                        <div className="relative z-10">
                            <span className="text-6xl font-black text-black/10 group-hover:text-[var(--signal-yellow)] transition-colors">03</span>
                            <h3 className="text-3xl font-black uppercase mt-8 mb-4">Branding</h3>
                            <p className="text-black/60 group-hover:text-white/80 font-medium leading-relaxed transition-colors">
                                Identidad visual que se queda en la mente. Desde el logo hasta la implementación física.
                            </p>
                        </div>
                        <Link to="/branding" className="relative z-10 mt-8 text-sm font-bold uppercase tracking-widest flex items-center group-hover:text-[var(--signal-yellow)] transition-colors">
                            Portafolio <ArrowRight size={16} className="ml-2" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 border-b border-black/10 bg-black text-white">
                <div className="container-fluid text-center">
                    <h2 className="text-5xl md:text-8xl font-black uppercase mb-12 tracking-tighter">
                        ¿Tienes un <span className="text-[var(--signal-pink)]">proyecto?</span>
                    </h2>
                    <Link to="/contacto" className="btn-signal text-xl px-16 py-8 hover:bg-white hover:text-black">
                        Hablemos Ahora
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
