import { motion } from 'framer-motion';

const clients = [
    "BANCO DE CRÉDITO",
    "INTERBANK",
    "ALICORP",
    "GLORIA",
    "BACKUS",
    "FERREYROS",
    "BBVA",
    "SCOTIABANK",
    "PRIMAX",
    "CEMENTOS PACASMAYO",
    "AJE GROUP",
    "GRAÑA Y MONTERO"
];

const ClientsSection = () => {
    return (
        <section className="py-20 bg-[var(--color-signal-yellow)] border-b border-black overflow-hidden">
            <div className="container-fluid mb-12">
                <h2 className="text-2xl font-black uppercase tracking-widest text-black/40">
                    Confían en nosotros
                </h2>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <motion.div
                    className="flex whitespace-nowrap gap-20 animate-marquee"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30
                    }}
                >
                    {[...clients, ...clients].map((client, index) => (
                        <span
                            key={index}
                            className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-black opacity-80 hover:opacity-100 transition-opacity cursor-default"
                            style={{ WebkitTextStroke: "2px black", color: "transparent" }}
                        >
                            {client}
                        </span>
                    ))}
                </motion.div>

                <motion.div
                    className="flex whitespace-nowrap gap-20 absolute top-0 left-0 animate-marquee2"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30
                    }}
                    style={{ display: 'none' }} // Fallback/Duplicate handling handled by single motion div above for simplicity
                >
                    {/* Redundant for simple Framer Motion loop */}
                </motion.div>
            </div>
        </section>
    );
};

export default ClientsSection;
