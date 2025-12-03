import { Printer, PenTool, Lightbulb, Image } from 'lucide-react';

const services = [
    {
        title: 'Impresión Gran Formato',
        description: 'Ideal para campañas de alto impacto. Calidad fotográfica y durabilidad garantizada.',
        icon: <Printer size={32} />,
        items: ['Gigantografías', 'Rollers', 'Pendones', 'Backlite', 'Microperforado', 'Bastidores', 'Lonas']
    },
    {
        title: 'Papelería Publicitaria',
        description: 'Materiales impresos esenciales para la comunicación diaria de tu empresa.',
        icon: <Image size={32} />,
        items: ['Tarjetas de presentación', 'Flyers y Volantes', 'Afiches', 'Magnéticos', 'Credenciales y Fotochecks', 'Calendarios', 'Talonarios y Etiquetas']
    },
    {
        title: 'Señalética y Letreros',
        description: 'Guía a tus clientes y destaca tu ubicación con letreros de alto impacto.',
        icon: <Lightbulb size={32} />,
        items: ['Letreros luminosos', 'Letras volumétricas', 'Señalética interna/externa', 'Placas', 'Vinilos decorativos', 'Stickers y Ploteos']
    },
    {
        title: 'Branding Corporativo',
        description: 'Diseñamos la identidad visual que tu marca necesita para diferenciarse.',
        icon: <PenTool size={32} />,
        items: ['Diseño de logotipos', 'Identidad corporativa', 'Líneas gráficas', 'Piezas publicitarias', 'Rediseño de marca', 'Asesoría en identidad']
    }
];

const Services = () => {
    return (
        <div className="pt-24 pb-16 animate-fade-in">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 neon-text">Servicios Integrales</h1>
                <p className="text-xl text-slate-600 text-center mb-16 max-w-2xl mx-auto">
                    Soluciones completas de impresión y diseño para cubrir todas las necesidades de tu negocio.
                </p>

                <div className="space-y-12">
                    {services.map((service, index) => (
                        <div key={index} className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                            <div className="flex-1 glass-panel p-8 rounded-3xl w-full neon-box hover:border-[var(--brand-pink)] transition-colors">
                                <div className="text-[var(--brand-pink)] mb-4 drop-shadow-sm">{service.icon}</div>
                                <h2 className="text-3xl font-bold mb-4 text-slate-800">{service.title}</h2>
                                <p className="text-slate-600 mb-6 text-lg">{service.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {service.items.map((item, idx) => (
                                        <span key={idx} className="px-3 py-1 bg-white/50 rounded-full text-sm text-slate-700 border border-slate-200 hover:border-[var(--brand-pink)] transition-colors">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="flex-1">
                                {/* Placeholder for service image */}
                                <div className="aspect-video glass-panel rounded-3xl overflow-hidden relative group neon-box">
                                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-bg)] to-transparent opacity-80"></div>
                                    <div className="absolute bottom-0 left-0 p-6">
                                        <span className="text-5xl font-bold text-slate-900/10">{String(index + 1).padStart(2, '0')}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
