import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const ManifestoSection = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.8", "end 0.5"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
    const y = useTransform(scrollYProgress, [0, 0.2], [50, 0]);

    const words = [
        { text: "Somos", highlight: false },
        { text: "una", highlight: false },
        { text: "fuerza", highlight: true, color: "var(--color-signal-pink)" },
        { text: "de", highlight: false },
        { text: "impacto", highlight: true, color: "var(--color-signal-orange)" },
        { text: "visual.", highlight: false },
        { text: "No", highlight: false },
        { text: "hacemos", highlight: false },
        { text: "solo", highlight: false },
        { text: "publicidad,", highlight: false },
        { text: "creamos", highlight: false },
        { text: "dominio", highlight: true, color: "var(--color-signal-yellow)" },
        { text: "del", highlight: false },
        { text: "espacio.", highlight: false },
    ];

    return (
        <section ref={containerRef} className="py-32 bg-black text-white relative overflow-hidden">
            {/* Background Noise is applied globally via CSS, but we can add specific texture here if needed */}

            <div className="container-fluid relative z-10">
                <motion.div
                    style={{ opacity, y }}
                    className="max-w-6xl mx-auto"
                >
                    <h2 className="text-[5vw] leading-[1.1] font-black uppercase tracking-tighter text-center md:text-left">
                        {words.map((word, i) => (
                            <span key={i} className="inline-block mr-[0.2em]" style={{ color: word.highlight ? word.color : 'white' }}>
                                {word.text}
                            </span>
                        ))}
                    </h2>

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/20 pt-12">
                        <p className="text-xl text-gray-400 font-medium leading-relaxed">
                            Especializados en diseño y producción gráfica industrial. Nuestra obsesión es la calidad que se ve y se siente. Desde el primer pixel hasta la instalación final.
                        </p>
                        <p className="text-xl text-gray-400 font-medium leading-relaxed">
                            Acompañamos a marcas que entienden que en un mundo saturado, ser invisible es el único riesgo real. Convertimos tus ideas en estructuras, colores y formas que exigen atención.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ManifestoSection;
