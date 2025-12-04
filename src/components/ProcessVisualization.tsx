import { motion } from 'framer-motion';
import { Search, PenTool, Printer, Hammer } from 'lucide-react';

const steps = [
    {
        icon: <Search size={32} />,
        title: "Descubrimiento",
        desc: "Análisis de necesidades y medición técnica en campo."
    },
    {
        icon: <PenTool size={32} />,
        title: "Diseño & Prototipado",
        desc: "Propuestas visuales y renderizado 3D para validación."
    },
    {
        icon: <Printer size={32} />,
        title: "Producción Industrial",
        desc: "Impresión UV y corte CNC con materiales de primera."
    },
    {
        icon: <Hammer size={32} />,
        title: "Instalación & Montaje",
        desc: "Implementación segura y acabados finales en sitio."
    }
];

const ProcessVisualization = () => {
    return (
        <div className="py-32 bg-black text-white overflow-hidden relative">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />

            <div className="container-fluid relative z-10">
                <div className="mb-20 text-center">
                    <span className="text-[var(--signal-yellow)] font-bold uppercase tracking-widest mb-4 block">Nuestro Método</span>
                    <h2 className="text-5xl md:text-7xl font-black uppercase">El Proceso <br /> Industrial</h2>
                </div>

                <div className="relative">
                    {/* Connecting Line (Animated) */}
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 hidden md:block">
                        <motion.div
                            className="h-full bg-[var(--signal-yellow)] origin-left"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.3, duration: 0.5 }}
                                className="relative group"
                            >
                                {/* Step Number */}
                                <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-[120px] font-black text-white/5 leading-none select-none">
                                    0{index + 1}
                                </div>

                                {/* Card */}
                                <div className="bg-[#111] border border-white/10 p-8 relative z-10 hover:border-[var(--signal-yellow)] transition-colors duration-300 h-full flex flex-col items-center text-center group-hover:-translate-y-4 transition-transform">
                                    <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6 text-[var(--signal-yellow)] group-hover:scale-110 transition-transform duration-300">
                                        {step.icon}
                                    </div>
                                    <h3 className="text-xl font-black uppercase mb-4">{step.title}</h3>
                                    <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProcessVisualization;
