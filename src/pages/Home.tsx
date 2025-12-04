import { ArrowRight, Printer, PenTool, Layout as LayoutIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroCinematic from '../components/HeroCinematic';
import ClientsSection from '../components/ClientsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import PortfolioSection from '../components/PortfolioSection';

const Home = () => {
    return (
        <div className="bg-[var(--color-canvas)]">
            <HeroCinematic />

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
                            <h3 className="text-4xl font-black uppercase mt-4 mb-6 tracking-tight">Dominio del Espacio</h3>
                            <p className="text-gray-500 group-hover:text-white/80 font-medium leading-relaxed transition-colors text-lg">
                                Gran Formato. Desde lonas gigantes hasta vinilos de precisión. Hacemos que tu mensaje sea el dueño del entorno físico.
                            </p>
                        </div>
                        <Link to="/servicios" className="relative z-10 mt-12 text-sm font-bold uppercase tracking-widest flex items-center group-hover:text-[var(--color-signal-pink)] transition-colors">
                            Explorar Soluciones <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
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
                            <h3 className="text-4xl font-black uppercase mt-4 mb-6 tracking-tight">Arquitectura Efímera</h3>
                            <p className="text-gray-500 group-hover:text-white/80 font-medium leading-relaxed transition-colors text-lg">
                                Displays & BTL. Estructuras portátiles diseñadas para ferias y eventos donde tienes segundos para captar un cliente.
                            </p>
                        </div>
                        <Link to="/productos" className="relative z-10 mt-12 text-sm font-bold uppercase tracking-widest flex items-center group-hover:text-[var(--color-signal-orange)] transition-colors">
                            Ver Catálogo <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
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
                            <h3 className="text-4xl font-black uppercase mt-4 mb-6 tracking-tight">Identidad Visual</h3>
                            <p className="text-gray-500 group-hover:text-white/80 font-medium leading-relaxed transition-colors text-lg">
                                Branding. No solo diseñamos logos, construimos sistemas visuales coherentes que transmiten autoridad y confianza.
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
        </div>
    );
};

export default Home;
