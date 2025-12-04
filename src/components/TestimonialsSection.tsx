import { Quote } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        text: "Publizhen transformó completamente nuestra presencia en ferias. El stand que diseñaron no solo fue funcional, sino que se convirtió en el centro de atención.",
        author: "Carlos Mendoza",
        role: "Gerente de Marketing, TechCorp",
        color: "var(--color-signal-pink)"
    },
    {
        id: 2,
        text: "La calidad de las gigantografías es impresionante. Incluso después de meses a la intemperie, los colores siguen vibrantes como el primer día.",
        author: "Ana Lucía Vega",
        role: "Directora Creativa, Studio 54",
        color: "var(--color-signal-orange)"
    },
    {
        id: 3,
        text: "Entendieron nuestra identidad visual a la perfección. El rebranding que hicieron para nuestra flota de vehículos nos ha traído nuevos clientes.",
        author: "Roberto Chang",
        role: "CEO, Logística Express",
        color: "var(--color-signal-yellow)"
    }
];

const TestimonialsSection = () => {
    return (
        <section className="py-32 bg-[var(--color-canvas)] border-b border-black/10">
            <div className="container-fluid">
                <div className="mb-20">
                    <span className="text-[var(--color-signal-pink)] font-black uppercase tracking-widest text-sm block mb-4">Testimonios</span>
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                        Lo que dicen <br />
                        <span className="text-stroke">nuestros clientes</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item) => (
                        <div key={item.id} className="bg-white p-10 border border-black/5 shadow-xl hover:-translate-y-2 transition-transform duration-300 relative group overflow-hidden">
                            <div className="absolute top-0 left-0 w-2 h-full transition-all duration-300 group-hover:w-full opacity-10" style={{ backgroundColor: item.color }}></div>

                            <Quote size={48} className="text-black/10 mb-8 relative z-10" />

                            <p className="text-lg font-medium leading-relaxed mb-8 relative z-10 text-gray-700">
                                "{item.text}"
                            </p>

                            <div className="relative z-10 border-t border-black/5 pt-6">
                                <h4 className="font-black uppercase text-sm tracking-wide">{item.author}</h4>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">{item.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
