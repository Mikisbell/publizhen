import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const FeaturedProduct = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);

    return (
        <div ref={ref} className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
            {/* Background Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                <h2 className="text-[20vw] font-black text-black/5 whitespace-nowrap">
                    NEW ARRIVAL
                </h2>
            </div>

            <div className="container-fluid relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div style={{ y, opacity }} className="relative">
                    <div className="aspect-[4/5] bg-black/5 rounded-3xl overflow-hidden relative group">
                        <img
                            src="/images/product-neon.webp"
                            alt="Neon Sign"
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-8 left-8 text-white">
                            <span className="bg-[var(--signal-pink)] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">
                                Tendencia 2025
                            </span>
                            <h3 className="text-4xl font-black uppercase">Neon Flex 2.0</h3>
                        </div>
                    </div>
                </motion.div>

                <div className="space-y-8">
                    <h3 className="text-5xl md:text-7xl font-black uppercase leading-[0.9]">
                        Iluminación <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--signal-pink)] to-[var(--signal-orange)]">
                            Sin Límites
                        </span>
                    </h3>
                    <p className="text-xl font-medium text-black/60 max-w-md leading-relaxed">
                        La evolución del neón tradicional. Más brillante, más duradero y 100% personalizable. Ideal para interiores comerciales y señalética de alto impacto.
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { label: "Vida Útil", val: "50,000h" },
                            { label: "Consumo", val: "-80%" },
                            { label: "Material", val: "Silicón IP67" },
                            { label: "Garantía", val: "3 Años" }
                        ].map((spec, idx) => (
                            <div key={idx} className="border border-black/10 p-4 rounded-xl">
                                <div className="text-xs font-bold uppercase text-black/40 mb-1">{spec.label}</div>
                                <div className="text-xl font-black">{spec.val}</div>
                            </div>
                        ))}
                    </div>

                    <button className="btn-signal text-lg px-8 py-4 w-full md:w-auto">
                        Solicitar Ficha Técnica
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProduct;
