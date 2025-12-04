import { PenTool, Layers } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';
import SEO from '../components/SEO';

const Branding = () => {
    return (
        <div className="pt-32 pb-20 min-h-screen">
            <SEO
                title="Agencia de Branding y Diseño Gráfico"
                description="Creamos identidades visuales poderosas. Diseño de Logotipos, Manuales de Marca y Sistemas Visuales para empresas que buscan destacar."
                keywords="Diseño de Logotipos, Identidad Corporativa, Manual de Marca, Diseño Gráfico Lima, Estrategia de Marca, Rebranding"
                url="/branding"
            />
            <div className="container-fluid mb-20">
                <h1 className="text-[8vw] leading-none font-black uppercase tracking-tighter mb-4">
                    Identidad <span className="text-[var(--signal-yellow)]">.</span>
                </h1>
                <p className="text-xl font-medium text-black/60 max-w-2xl border-l-2 border-black pl-6">
                    Construimos marcas que no necesitan presentación.
                </p>
            </div>

            <div className="container-fluid">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                    <ScrollReveal delay={0.2} className="bg-white p-12 border border-black/10 hover:border-black transition-colors">
                        <PenTool size={48} className="text-[var(--signal-magenta)] mb-8" />
                        <h2 className="text-3xl font-black uppercase mb-4">Diseño de Logotipos</h2>
                        <p className="text-lg text-black/70 leading-relaxed">
                            Sintetizamos la esencia de tu empresa en un símbolo perdurable. Geometría, tipografía y color aplicados con rigor estratégico.
                        </p>
                    </ScrollReveal>
                    <ScrollReveal delay={0.4} className="bg-white p-12 border border-black/10 hover:border-black transition-colors">
                        <Layers size={48} className="text-[var(--signal-pink)] mb-8" />
                        <h2 className="text-3xl font-black uppercase mb-4">Sistemas Visuales</h2>
                        <p className="text-lg text-black/70 leading-relaxed">
                            Más que un logo, creamos lenguajes. Patrones, iconografía y guías de estilo para una comunicación coherente en todos los canales.
                        </p>
                    </ScrollReveal>
                </div>

                {/* Portfolio Placeholder - Brutalist Style */}
                <div className="border-t border-black/10 pt-20">
                    <ScrollReveal>
                        <h3 className="text-2xl font-black uppercase mb-12 tracking-widest">Trabajos Recientes</h3>
                    </ScrollReveal>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ScrollReveal delay={0.1} className="aspect-square bg-black/5 flex items-center justify-center relative group overflow-hidden">
                            <img src="/images/service-design.webp" alt="Project 1" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                                <span className="text-white font-bold uppercase tracking-widest border border-white px-6 py-3 backdrop-blur-sm">Ver Proyecto</span>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={0.2} className="aspect-square bg-black/5 flex items-center justify-center relative group overflow-hidden">
                            <img src="/images/product-neon.webp" alt="Project 2" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                                <span className="text-white font-bold uppercase tracking-widest border border-white px-6 py-3 backdrop-blur-sm">Ver Proyecto</span>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={0.3} className="aspect-square bg-black/5 flex items-center justify-center relative group overflow-hidden">
                            <img src="/images/product-rollup.webp" alt="Project 3" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                                <span className="text-white font-bold uppercase tracking-widest border border-white px-6 py-3 backdrop-blur-sm">Ver Proyecto</span>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Branding;
