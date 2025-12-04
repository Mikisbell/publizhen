import { ArrowRight, Printer, PenTool, Layout as LayoutIcon, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import ClientsSection from '../components/ClientsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import PortfolioSection from '../components/PortfolioSection';

const Home = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);

    return (
        <div className="pt-0">
            {/* Hero Section - Brutalist */}
            <section className="min-h-screen flex flex-col justify-center relative border-b border-black/10 overflow-hidden bg-[var(--color-canvas)]">
                {/* Background Image Parallax */}
                <motion.div
                    style={{ y: y1 }}
                    className="absolute inset-0 z-0"
                >
                    <img src="/images/hero.png" alt="Taller de Impresión" className="w-full h-[120%] object-cover opacity-20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-canvas)] via-transparent to-transparent" />
                </motion.div>

                <div className="container-fluid grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-32 relative z-10 pt-32">
                    <div className="lg:col-span-9">
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <span className="inline-block px-4 py-2 border border-black text-xs font-bold uppercase tracking-[0.2em] mb-6 bg-white">
                                Estudio de Producción Gráfica
                            </span>
                            <h1 className="text-[12vw] leading-[0.85] font-black tracking-tighter uppercase mb-8 mix-blend-multiply">
                                Impacto <br />
                                <span className="text-stroke">Visual</span> <br />
                                <span className="text-[var(--color-signal-pink)]">Total.</span>
                            </h1>
                        </motion.div>
                    </div>
                    <div className="lg:col-span-3 flex flex-col justify-end h-full pb-4">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            <p className="text-lg font-medium leading-relaxed mb-8 border-l-4 border-[var(--color-signal-orange)] pl-6 text-gray-800">
                                Soluciones de producción gráfica y publicidad para marcas que no piden permiso para destacar.
                            </p>
                            <div className="flex flex-col gap-4">
                                <Link to="/productos" className="btn-industrial w-full group bg-white/80 backdrop-blur-sm hover:bg-black hover:text-white">
                                    Ver Catálogo <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                                </Link>
                                <Link to="/contacto" className="btn-signal w-full shadow-lg shadow-[var(--color-signal-pink)]/30">
                                    Iniciar Proyecto
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    style={{ opacity: useTransform(scrollY, [0, 200], [1, 0]) }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
                >
                    <span className="text-[10px] font-bold uppercase tracking-widest">Scroll</span>
                    <ChevronDown className="animate-bounce" />
                </motion.div>
            </section>

            <ClientsSection />

            {/* Services Section - Editorial Grid */}
            <section className="py-0 bg-white relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3">
                    {/* Service 1 */}
                    <div className="group border-r border-b border-black/10 p-12 min-h-[600px] flex flex-col justify-between hover:bg-black hover:text-white transition-colors duration-500 relative overflow-hidden">
                        <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500">
                            <img src="/images/service-print.png" alt="Gran Formato" className="w-full h-full object-cover grayscale" />
                        </div>

                        <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity z-10 duration-500">
                            <Printer size={80} className="text-black group-hover:text-[var(--color-signal-pink)] transition-colors" />
                        </div>
                        <div className="relative z-10">
                            <span className="text-8xl font-black text-black/5 group-hover:text-[var(--color-signal-pink)] transition-colors duration-500 block -ml-2">01</span>
                            <h3 className="text-4xl font-black uppercase mt-4 mb-6 tracking-tight">Gran Formato</h3>
                            <p className="text-gray-500 group-hover:text-white/80 font-medium leading-relaxed transition-colors text-lg">
                                Impresión de alta resolución para cuando el tamaño sí importa. Lonas, vinilos y estructuras gigantes que dominan el espacio.
                            </p>
                        </div>
                        <Link to="/servicios" className="relative z-10 mt-12 text-sm font-bold uppercase tracking-widest flex items-center group-hover:text-[var(--color-signal-pink)] transition-colors">
                            Explorar Servicios <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </div>

                    {/* Service 2 */}
                    <div className="group border-r border-b border-black/10 p-12 min-h-[600px] flex flex-col justify-between hover:bg-black hover:text-white transition-colors duration-500 relative overflow-hidden">
                        <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500">
                            <img src="/images/product-rollup.png" alt="Displays" className="w-full h-full object-cover grayscale" />
                        </div>

                        <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity z-10 duration-500">
                            <LayoutIcon size={80} className="text-black group-hover:text-[var(--color-signal-orange)] transition-colors" />
                        </div>
                        <div className="relative z-10">
                            <span className="text-8xl font-black text-black/5 group-hover:text-[var(--color-signal-orange)] transition-colors duration-500 block -ml-2">02</span>
                            <h3 className="text-4xl font-black uppercase mt-4 mb-6 tracking-tight">Displays & BTL</h3>
                            <p className="text-gray-500 group-hover:text-white/80 font-medium leading-relaxed transition-colors text-lg">
                                Estructuras portátiles y módulos de atención diseñados para detener el tráfico y capturar miradas en cualquier evento.
                            </p>
                        </div>
                        <Link to="/productos" className="relative z-10 mt-12 text-sm font-bold uppercase tracking-widest flex items-center group-hover:text-[var(--color-signal-orange)] transition-colors">
                            Ver Productos <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </div>

                    {/* Service 3 */}
                    <div className="group border-b border-black/10 p-12 min-h-[600px] flex flex-col justify-between hover:bg-black hover:text-white transition-colors duration-500 relative overflow-hidden">
                        <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500">
                            <img src="/images/service-design.png" alt="Branding" className="w-full h-full object-cover grayscale" />
                        </div>

                        <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity z-10 duration-500">
                            <PenTool size={80} className="text-black group-hover:text-[var(--color-signal-yellow)] transition-colors" />
                        </div>
                        <div className="relative z-10">
                            <span className="text-8xl font-black text-black/5 group-hover:text-[var(--color-signal-yellow)] transition-colors duration-500 block -ml-2">03</span>
                            <h3 className="text-4xl font-black uppercase mt-4 mb-6 tracking-tight">Branding</h3>
                            <p className="text-gray-500 group-hover:text-white/80 font-medium leading-relaxed transition-colors text-lg">
                                Identidad visual que se queda en la mente. Desde el diseño del logotipo hasta la implementación física en tu local.
                            </p>
                        </div>
                        <Link to="/branding" className="relative z-10 mt-12 text-sm font-bold uppercase tracking-widest flex items-center group-hover:text-[var(--color-signal-yellow)] transition-colors">
                            Ver Portafolio <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            <PortfolioSection />

            <TestimonialsSection />

            {/* CTA Section */}
            <section className="py-32 border-b border-black/10 bg-[var(--color-signal-pink)] text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/hero.png')] opacity-10 mix-blend-multiply bg-cover bg-center"></div>
                <div className="container-fluid text-center relative z-10">
                    <h2 className="text-5xl md:text-9xl font-black uppercase mb-8 tracking-tighter leading-[0.8]">
                        ¿Tienes un <br />
                        <span className="text-black">proyecto?</span>
                    </h2>
                    <p className="text-xl md:text-2xl font-medium mb-12 max-w-2xl mx-auto text-white/90">
                        No dejes que tu marca pase desapercibida. Hagamos algo memorable juntos.
                    </p>
                    <Link to="/contacto" className="btn-industrial bg-black text-white border-none hover:bg-white hover:text-black text-xl px-16 py-6 shadow-2xl">
                        Hablemos Ahora
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
