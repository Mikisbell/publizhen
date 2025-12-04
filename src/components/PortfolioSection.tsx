import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const projects = [
    {
        id: 1,
        title: "Campaña Verano 2025",
        category: "Gran Formato",
        image: "/images/service-print.png",
        size: "col-span-1 md:col-span-2 row-span-2",
        color: "var(--color-signal-pink)"
    },
    {
        id: 2,
        title: "Stand Tech Summit",
        category: "Arquitectura Efímera",
        image: "/images/product-rollup.png",
        size: "col-span-1 row-span-1",
        color: "var(--color-signal-orange)"
    },
    {
        id: 3,
        title: "Rebranding EcoStore",
        category: "Identidad Visual",
        image: "/images/service-design.png",
        size: "col-span-1 row-span-1",
        color: "var(--color-signal-yellow)"
    },
    {
        id: 4,
        title: "Señalética Corp.",
        category: "Instalación",
        image: "/images/hero.png",
        size: "col-span-1 md:col-span-2 row-span-1",
        color: "var(--color-signal-magenta)"
    }
];

const PortfolioSection = () => {
    return (
        <section className="py-32 bg-black text-white overflow-hidden">
            <div className="container-fluid">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div>
                        <span className="text-[var(--color-signal-yellow)] font-black uppercase tracking-widest text-sm block mb-4">Portafolio Reciente</span>
                        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                            Trabajo que <br />
                            <span className="text-transparent stroke-white" style={{ WebkitTextStroke: "1px white" }}>hace ruido</span>
                        </h2>
                    </div>
                    <Link to="/productos" className="btn-signal bg-white text-black hover:bg-[var(--color-signal-yellow)] hover:text-black mb-2">
                        Ver Todos los Proyectos
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className={`relative group overflow-hidden bg-gray-900 ${project.size}`}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                            />

                            <div className="absolute inset-0 p-8 flex flex-col justify-between">
                                <div className="flex justify-end translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black">
                                        <ArrowUpRight size={24} />
                                    </div>
                                </div>

                                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <span
                                        className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest text-black mb-3"
                                        style={{ backgroundColor: project.color }}
                                    >
                                        {project.category}
                                    </span>
                                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
                                        {project.title}
                                    </h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
