import { Printer, PenTool, Lightbulb, Image } from 'lucide-react';

const services = [
    {
        title: 'Gran Formato',
        description: 'Impresión de alta resolución para campañas que dominan el espacio visual.',
        details: ['Gigantografías', 'Vinilos', 'Lonas Mesh', 'Microperforado'],
        color: 'var(--signal-pink)',
        image: '/images/service-print.png'
    },
    {
        title: 'Papelería',
        description: 'Materiales corporativos que comunican profesionalismo en cada detalle.',
        details: ['Tarjetas', 'Flyers', 'Carpetas', 'Brochures'],
        color: 'var(--signal-orange)',
        image: '/images/product-rollup.png' // Placeholder reuse
    },
    {
        title: 'Señalética',
        description: 'Sistemas de orientación y rotulación para espacios comerciales e industriales.',
        details: ['Letreros Luminosos', 'Cajas de Luz', 'Señalética de Seguridad', 'Vinilo Pavimento'],
        color: 'var(--signal-yellow)',
        image: '/images/product-neon.png'
    },
    {
        title: 'Branding',
        description: 'Estrategia visual y diseño de identidad para marcas líderes.',
        details: ['Logotipos', 'Manual de Marca', 'Rebranding', 'Diseño Publicitario'],
        color: 'var(--signal-magenta)',
        image: '/images/service-design.png'
    }
];

const Services = () => {
    return (
        <div className="pt-32 pb-20 min-h-screen">
            <div className="container-fluid mb-20">
                <h1 className="text-[8vw] leading-none font-black uppercase tracking-tighter mb-4">
                    Servicios <span className="text-[var(--signal-pink)]">.</span>
                </h1>
                <p className="text-xl font-medium text-black/60 max-w-2xl border-l-2 border-black pl-6">
                    Capacidades industriales al servicio de tu creatividad.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 border-t border-black/10">
                {services.map((service, index) => (
                    <div key={index} className="group border-b border-r border-black/10 min-h-[500px] relative overflow-hidden">
                        {/* Image Background */}
                        <div className="absolute inset-0">
                            <img src={service.image} alt={service.title} className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-105 group-hover:scale-100" />
                            <div className="absolute inset-0 bg-[var(--canvas)] group-hover:bg-black/80 transition-colors duration-500" />
                        </div>

                        <div className="absolute top-8 right-8 w-12 h-12 rounded-full border-2 border-black/10 flex items-center justify-center font-bold text-sm z-10 group-hover:border-white group-hover:text-white transition-colors">
                            0{index + 1}
                        </div>

                        <div className="relative z-10 h-full flex flex-col justify-end p-12">
                            <h2 className="text-4xl font-black uppercase mb-6 group-hover:text-white transition-colors duration-300" style={{ color: service.color }}>
                                {service.title}
                            </h2>
                            <p className="text-xl font-bold text-black mb-8 max-w-md group-hover:text-white/90 transition-colors">
                                {service.description}
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {service.details.map((detail, idx) => (
                                    <span key={idx} className="px-3 py-1 border border-black/20 text-sm font-bold uppercase tracking-wider group-hover:border-white/30 group-hover:text-white transition-colors cursor-default">
                                        {detail}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
