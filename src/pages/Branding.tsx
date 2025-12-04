import { PenTool, Layers, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';
import SEO from '../components/SEO';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

const Branding = () => {
    return (
        <div className="pt-32 pb-20 min-h-screen bg-[#f5f5f5]">
            <SEO
                title="Agencia de Branding y Diseño Gráfico"
                description="Creamos identidades visuales poderosas. Diseño de Logotipos, Manuales de Marca y Sistemas Visuales para empresas que buscan destacar."
                keywords="Diseño de Logotipos, Identidad Corporativa, Manual de Marca, Diseño Gráfico Lima, Estrategia de Marca, Rebranding"
                url="/branding"
            />

            {/* Editorial Header */}
            <div className="container-fluid mb-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
                    <div className="lg:col-span-8">
                        <h1 className="text-[10vw] leading-[0.85] font-black uppercase tracking-tighter mb-8 text-black">
                            Identidad <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--signal-magenta)] to-[var(--signal-pink)]">Visual</span>
                        </h1>
                    </div>
                    <div className="lg:col-span-4 pb-4">
                        <p className="text-xl font-medium text-black/60 border-l-2 border-black pl-6 leading-relaxed">
                            No diseñamos logos. Construimos sistemas visuales que cuentan la historia de tu éxito antes de que digas una palabra.
                        </p>
                    </div>
                </div>
            </div>

            {/* Rebranding Case Study (Interactive) */}
            <div className="container-fluid mb-32">
                <ScrollReveal>
                    <div className="flex items-center justify-between mb-12">
                        <h2 className="text-4xl font-black uppercase">El Poder del Rebranding</h2>
                        <span className="hidden md:inline-block px-4 py-2 border border-black rounded-full text-sm font-bold uppercase">Caso de Estudio: Industrias Alpha</span>
                    </div>
                    <div className="rounded-3xl overflow-hidden shadow-2xl border border-black/10">
                        <BeforeAfterSlider
                            beforeImage="/images/hero-printer.webp" // Using existing images as placeholders for demo
                            afterImage="/images/hero-new.webp"
                            beforeLabel="Marca Anterior"
                            afterLabel="Nueva Identidad 2025"
                        />
                    </div>
                    <p className="mt-6 text-sm text-black/50 font-mono uppercase tracking-widest text-center">Desliza para ver la transformación</p>
                </ScrollReveal>
            </div>

            {/* Services Grid - Swiss Style */}
            <div className="container-fluid mb-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-black/10 border border-black/10">
                    <div className="bg-[#f5f5f5] p-16 hover:bg-white transition-colors duration-500 group">
                        <PenTool size={48} className="text-[var(--signal-magenta)] mb-8 group-hover:scale-110 transition-transform duration-500" />
                        <h3 className="text-4xl font-black uppercase mb-6">Logotipos</h3>
                        <p className="text-lg text-black/60 leading-relaxed mb-8">
                            Sintetizamos la esencia de tu empresa en un símbolo perdurable. Geometría, tipografía y color aplicados con rigor estratégico.
                        </p>
                        <ul className="space-y-2 mb-8">
                            {['Investigación', 'Bocetaje', 'Vectorización', 'Entrega de Editables'].map(item => (
                                <li key={item} className="flex items-center text-sm font-bold uppercase tracking-wider text-black/40">
                                    <div className="w-1.5 h-1.5 bg-[var(--signal-magenta)] rounded-full mr-3" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-[#f5f5f5] p-16 hover:bg-white transition-colors duration-500 group">
                        <Layers size={48} className="text-[var(--signal-pink)] mb-8 group-hover:scale-110 transition-transform duration-500" />
                        <h3 className="text-4xl font-black uppercase mb-6">Sistemas Visuales</h3>
                        <p className="text-lg text-black/60 leading-relaxed mb-8">
                            Más que un logo, creamos lenguajes. Patrones, iconografía y guías de estilo para una comunicación coherente en todos los canales.
                        </p>
                        <ul className="space-y-2 mb-8">
                            {['Manual de Marca', 'Papelería Corporativa', 'Plantillas RRSS', 'Merchandising'].map(item => (
                                <li key={item} className="flex items-center text-sm font-bold uppercase tracking-wider text-black/40">
                                    <div className="w-1.5 h-1.5 bg-[var(--signal-pink)] rounded-full mr-3" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Masonry Portfolio */}
            <div className="container-fluid">
                <div className="flex items-end justify-between mb-16 border-b border-black pb-8">
                    <h2 className="text-[6vw] leading-none font-black uppercase">Portafolio</h2>
                    <div className="hidden md:flex items-center gap-2 text-lg font-bold uppercase group cursor-pointer">
                        Ver Todos los Proyectos <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </div>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {[
                        { img: "/images/service-design.webp", title: "Neo Tech", cat: "Branding" },
                        { img: "/images/product-neon.webp", title: "Lumina", cat: "Señalética" },
                        { img: "/images/product-rollup.webp", title: "Expo Stand", cat: "BTL" },
                        { img: "/images/hero-new.webp", title: "Industrial Co.", cat: "Rebranding" },
                        { img: "/images/btl-new.webp", title: "Summer Fest", cat: "Eventos" },
                    ].map((project, idx) => (
                        <ScrollReveal key={idx} delay={idx * 0.1} className="break-inside-avoid">
                            <div className="group relative overflow-hidden rounded-2xl cursor-pointer">
                                <img src={project.img} alt={project.title} className="w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                    <span className="text-[var(--signal-yellow)] text-xs font-bold uppercase tracking-widest mb-2">{project.cat}</span>
                                    <h3 className="text-white text-2xl font-black uppercase">{project.title}</h3>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Branding;
