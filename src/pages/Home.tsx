import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroCinematic from '../components/HeroCinematic';
import ClientsSection from '../components/ClientsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import PortfolioSection from '../components/PortfolioSection';
import { ScrollReveal } from '../components/ScrollReveal';

const Home = () => {
    const services = [
        {
            title: "Dominio del Espacio",
            description: "Gran Formato. Desde lonas gigantes hasta vinilos de precisión. Hacemos que tu mensaje sea el dueño del entorno físico.",
            link: "/servicios"
        },
        {
            title: "Arquitectura Efímera",
            description: "Displays & BTL. Estructuras portátiles diseñadas para ferias y eventos donde tienes segundos para captar un cliente.",
            link: "/productos"
        },
        {
            title: "Identidad Visual",
            description: "Branding. No solo diseñamos logos, construimos sistemas visuales coherentes que transmiten autoridad y confianza.",
            link: "/branding"
        }
    ];

    return (
        <div className="bg-[var(--color-canvas)]">
            {/* Hero Section */}
            <HeroCinematic />

            {/* Clients Marquee */}
            <ClientsSection />

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-b border-black/10">
                {services.map((service, index) => (
                    <ScrollReveal key={index} width="100%" delay={index * 0.1} className="group border-r border-black/10 min-h-[60vh] relative overflow-hidden flex flex-col justify-between p-12 hover:bg-black hover:text-white transition-colors duration-500">
                        <div className="relative z-10">
                            <span className="text-8xl font-black text-black/5 group-hover:text-[var(--color-signal-pink)] transition-colors duration-500 block -ml-2 mb-8">
                                0{index + 1}
                            </span>
                            <h3 className="text-4xl font-black uppercase mb-4">{service.title}</h3>
                            <p className="text-xl font-medium opacity-80 max-w-sm">{service.description}</p>
                        </div>
                        <div className="relative z-10 flex justify-end mt-12">
                            <Link to={service.link} className="btn-signal border-black group-hover:border-white group-hover:text-white flex items-center gap-2">
                                Explorar <ArrowRight size={16} />
                            </Link>
                        </div>
                    </ScrollReveal>
                ))}
            </div>

            {/* Portfolio Section */}
            <PortfolioSection />

            {/* Testimonials Section */}
            <TestimonialsSection />
        </div>
    );
};

export default Home;
