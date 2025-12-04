import { motion } from 'framer-motion';
import { PlaceholderLogo } from './BrandLogos';

const clients = [
    { name: "BANCO DE CRÉDITO", logo: "/images/clients/bcp.png" },
    { name: "INTERBANK", logo: "/images/clients/interbank.png" },
    { name: "ALICORP", logo: "/images/clients/alicorp.png" },
    { name: "GLORIA", logo: "/images/clients/gloria.png" },
    { name: "BACKUS", logo: "/images/clients/backus.png" },
    { name: "FERREYROS", logo: "/images/clients/ferreyros.png" },
    { name: "BBVA", logo: "/images/clients/bbva.png" },
    { name: "SCOTIABANK", logo: "/images/clients/scotiabank.png" },
    { name: "PRIMAX", logo: "/images/clients/primax.png" },
    { name: "CEMENTOS PACASMAYO", logo: "/images/clients/pacasmayo.png" },
    { name: "AJE GROUP", logo: "/images/clients/aje.png" },
    { name: "AENZA (G&M)", logo: "/images/clients/aenza.png" },
    { name: "FREECLOUD", Component: () => <PlaceholderLogo text="FREECLOUD" /> },
    { name: "JUNTAY", Component: () => <PlaceholderLogo text="JUNTAY" /> },
    { name: "RIVAMEZ", Component: () => <PlaceholderLogo text="RIVAMEZ" /> }
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
                    className="flex whitespace-nowrap gap-32 items-center"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 300 // Slower animation
                    }}
                >
                    {[...clients, ...clients].map((client, index) => (
                        <div key={index} className="flex flex-col items-center justify-center gap-6 shrink-0">
                            <span
                                className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-black opacity-80 hover:opacity-100 transition-opacity cursor-default"
                                style={{ WebkitTextStroke: "1px black", color: "transparent" }}
                            >
                                {client.name}
                            </span>
                            <div className="opacity-80 hover:opacity-100 transition-opacity scale-125 h-16 flex items-center justify-center">
                                {client.logo ? (
                                    <img src={client.logo} alt={client.name} className="h-full w-auto object-contain mix-blend-multiply" />
                                ) : (
                                    client.Component && <client.Component />
                                )}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ClientsSection;
