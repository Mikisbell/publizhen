import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';

const services = [
    {
        id: 'gran-formato',
        title: 'Gran Formato',
        subtitle: 'Dominio Visual',
        description: 'Impresión de alto impacto para campañas que exigen ser vistas. Tecnología UV y Ecosolvente para una durabilidad extrema en exteriores.',
        details: ['Gigantografías', 'Rollers y Pendones', 'Backlite', 'Microperforado', 'Bastidores y Lonas'],
        color: 'var(--color-signal-pink)',
        image: '/images/service-gran-formato.png'
    },
    {
        id: 'papeleria',
        title: 'Papelería',
        subtitle: 'Identidad Tangible',
        description: 'Materiales corporativos que comunican profesionalismo en cada interacción táctil. Acabados premium para marcas exigentes.',
        details: ['Tarjetas Personales', 'Flyers y Volantes', 'Carpetas', 'Brochures', 'Credenciales', 'Calendarios'],
        color: 'var(--color-signal-orange)',
        image: '/images/service-papeleria.png'
    },
    {
        id: 'senaletica',
        title: 'Señalética',
        subtitle: 'Arquitectura de Marca',
        description: 'Sistemas de orientación y rotulación que integran tu marca en el espacio físico. Funcionalidad y estética en perfecta armonía.',
        details: ['Letreros Luminosos', 'Cajas de Luz', 'Señalética de Seguridad', 'Vinilos Decorativos', 'Placas'],
        color: 'var(--color-signal-yellow)',
        image: '/images/service-senaletica.png'
    },
    {
        id: 'branding',
        title: 'Branding',
        subtitle: 'ADN Visual',
        description: 'Estrategia y diseño de identidad para marcas que lideran. Construimos sistemas visuales coherentes y memorables.',
        details: ['Diseño de Logotipos', 'Identidad Corporativa', 'Manual de Marca', 'Rediseño de Marca', 'Piezas Publicitarias'],
        color: 'var(--color-signal-magenta)',
        image: '/images/service-branding.png'
    },
    {
        id: 'merchandising',
        title: 'Merchandising',
        subtitle: 'Experiencia de Marca',
        description: 'Artículos personalizados que extienden la presencia de tu marca. Calidad que tus clientes querrán conservar.',
        details: ['Regalos Corporativos', 'Textiles', 'Tecnología', 'Artículos de Oficina'],
        color: '#fff',
        image: '/images/service-merchandising.png'
    }
];

const ServiceCard = ({ service, index, setVisibleService }: { service: any, index: number, setVisibleService: (id: string) => void }) => {
    const ref = useRef(null);
    // Use a simpler intersection observer approach or framer-motion's whileInView
    // But to trigger the state change for the sticky image, onViewportEnter is good.

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3, margin: "-100px" }}
            onViewportEnter={() => setVisibleService(service.id)}
            className="min-h-[80vh] lg:min-h-screen flex flex-col justify-center py-12 px-6 md:px-20 lg:border-l border-white/10 lg:ml-12"
        >
            <div className="flex items-center gap-4 mb-6">
                <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/20 text-white/60">
                    0{index + 1}
                </span>
                <span className="text-[var(--color-signal-orange)] font-bold uppercase tracking-widest text-sm">
                    {service.subtitle}
                </span>
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.9] mb-6 text-white">
                {service.title}
            </h2>

            <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-xl mb-10">
                {service.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 mb-10">
                {service.details.map((detail: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-3 text-white/80 group/item">
                        <CheckCircle2 size={16} className="text-[var(--color-signal-green)] group-hover/item:scale-125 transition-transform" />
                        <span className="text-sm font-medium uppercase tracking-wider">{detail}</span>
                    </div>
                ))}
            </div>

            <button className="group flex items-center gap-3 bg-white text-black px-6 py-3 rounded-lg font-bold uppercase tracking-widest hover:bg-[var(--color-signal-orange)] hover:text-white transition-all duration-300 w-fit">
                Cotizar Servicio
                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
        </motion.div>
    );
};

const Services = () => {
    const [activeServiceId, setActiveServiceId] = useState(services[0].id);
    const activeService = services.find(s => s.id === activeServiceId) || services[0];

    const scrollToService = (id: string) => {
        const element = document.getElementById(`service-${id}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-[#050505] min-h-screen text-white selection:bg-[var(--color-signal-orange)] selection:text-black font-sans">
            <SEO
                title="Servicios | Publizhen"
                description="Soluciones integrales de impresión y branding. Gran Formato, Señalética, Papelería y Merchandising de nivel mundial."
            />

            {/* Navigation Dots (Desktop Only) */}
            <div className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
                {services.map((service) => (
                    <button
                        key={service.id}
                        onClick={() => scrollToService(service.id)}
                        className="group flex items-center gap-4"
                    >
                        <div className={`w-2 h-2 rounded-full transition-all duration-300 ${activeServiceId === service.id ? 'bg-[var(--color-signal-orange)] scale-150' : 'bg-white/20 group-hover:bg-white/50'}`} />
                        <span className={`text-xs font-bold uppercase tracking-widest transition-all duration-300 ${activeServiceId === service.id ? 'text-white opacity-100 translate-x-0' : 'text-white/0 opacity-0 -translate-x-4 group-hover:opacity-50 group-hover:translate-x-0'}`}>
                            {service.title}
                        </span>
                    </button>
                ))}
            </div>

            <div className="flex flex-col lg:flex-row">
                {/* Sticky Image Section */}
                <div className="lg:w-1/2 h-[40vh] lg:h-screen sticky top-0 right-0 overflow-hidden z-0 order-1 lg:order-2 border-b lg:border-b-0 lg:border-l border-white/10">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeService.id}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.6, ease: "circOut" }}
                            className="absolute inset-0"
                        >
                            <img
                                src={activeService.image}
                                alt={activeService.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent lg:bg-black/20" />

                            {/* Decorative Elements on Image */}
                            <div className="absolute bottom-8 left-8 lg:bottom-12 lg:left-12 z-10">
                                <h3 className="text-4xl lg:text-8xl font-black text-transparent stroke-text opacity-30 lg:opacity-20">
                                    {activeService.title}
                                </h3>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Scrollable Content Section */}
                <div className="lg:w-1/2 relative z-10 order-2 lg:order-1 bg-[#050505] lg:bg-transparent">
                    <div className="pt-20 pb-10 px-6 md:px-20 lg:pt-32 lg:pb-20">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-[var(--text-display)] leading-none font-black uppercase tracking-tighter mb-6 text-white"
                        >
                            Servicios <span className="text-[var(--color-signal-orange)]">.</span>
                        </motion.h1>
                        <p className="text-lg md:text-xl text-white/50 max-w-md leading-relaxed mb-10">
                            Excelencia técnica y visión creativa. Transformamos ideas en experiencias tangibles.
                        </p>
                    </div>

                    <div className="pb-20 lg:pb-32">
                        {services.map((service, index) => (
                            <div id={`service-${service.id}`} key={service.id}>
                                <ServiceCard
                                    service={service}
                                    index={index}
                                    setVisibleService={setActiveServiceId}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                .stroke-text {
                    -webkit-text-stroke: 1px white;
                }
                @media (min-width: 1024px) {
                    .stroke-text {
                        -webkit-text-stroke: 2px white;
                    }
                }
            `}</style>
        </div>
    );
};

export default Services;
