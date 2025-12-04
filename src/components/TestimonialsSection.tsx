import { Quote } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const testimonials = [
    {
        quote: "La transformación de nuestra flota vehicular fue radical. Publizhen no solo instaló vinilos, creó una identidad móvil que ahora es reconocida en todo Lima.",
        author: "Carlos Rodríguez",
        role: "Gerente de Logística",
        company: "TransLogística Perú",
        initials: "CR",
        color: "bg-blue-600"
    },
    {
        quote: "Necesitábamos impactar en el lanzamiento de nuestra nueva bebida. Los juegos BTL y la activación que diseñaron superaron todas nuestras métricas de engagement.",
        author: "Ana María Flores",
        role: "Directora de Marketing",
        company: "Bebidas Andinas",
        initials: "AF",
        color: "bg-red-600"
    },
    {
        quote: "La señalética industrial de nuestra planta cumple con todas las normas ISO y además se ve increíble. Eficiencia y estética industrial pura.",
        author: "Ing. Miguel Ángel Torres",
        role: "Jefe de Planta",
        company: "Manufacturas del Sur",
        initials: "MT",
        color: "bg-yellow-600"
    }
];

const TestimonialsSection = () => {
    return (
        <section className="py-32 bg-white border-t border-black/10">
            <div className="container-fluid mb-20">
                <ScrollReveal>
                    <h2 className="text-[6vw] leading-none font-black uppercase tracking-tighter mb-8">
                        Voces de la <br />
                        <span className="text-transparent" style={{ WebkitTextStroke: "2px black" }}>Industria</span>
                    </h2>
                </ScrollReveal>
            </div>

            <div className="container-fluid grid grid-cols-1 md:grid-cols-3 gap-12">
                {testimonials.map((item, index) => (
                    <ScrollReveal key={index} delay={index * 0.2} className="flex flex-col justify-between h-full border-l-4 border-black pl-8 py-4 hover:bg-gray-50 transition-colors duration-300 group">
                        <div>
                            <Quote size={48} className="text-black/20 mb-8 group-hover:text-[var(--color-signal-pink)] transition-colors" />
                            <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8 text-black/80">
                                "{item.quote}"
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0`}>
                                {item.initials}
                            </div>
                            <div>
                                <h4 className="font-bold uppercase tracking-wider text-sm">{item.author}</h4>
                                <p className="text-xs font-bold text-black/40 uppercase tracking-widest">{item.role}</p>
                                <p className="text-xs text-[var(--color-signal-pink)] font-bold mt-1">{item.company}</p>
                            </div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
};

export default TestimonialsSection;
