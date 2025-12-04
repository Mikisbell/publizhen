import { motion } from 'framer-motion';
import {
    BCPLogo, InterbankLogo, AlicorpLogo, GloriaLogo, BackusLogo, FerreyrosLogo,
    BBVALogo, ScotiabankLogo, PrimaxLogo, PacasmayoLogo, AjeLogo, GrañaLogo, PlaceholderLogo
} from './BrandLogos';

const clients = [
    { name: "BANCO DE CRÉDITO", Logo: BCPLogo },
    { name: "INTERBANK", Logo: InterbankLogo },
    { name: "ALICORP", Logo: AlicorpLogo },
    { name: "GLORIA", Logo: GloriaLogo },
    { name: "BACKUS", Logo: BackusLogo },
    { name: "FERREYROS", Logo: FerreyrosLogo },
    { name: "BBVA", Logo: BBVALogo },
    { name: "SCOTIABANK", Logo: ScotiabankLogo },
    { name: "PRIMAX", Logo: PrimaxLogo },
    { name: "CEMENTOS PACASMAYO", Logo: PacasmayoLogo },
    { name: "AJE GROUP", Logo: AjeLogo },
    { name: "GRAÑA Y MONTERO", Logo: GrañaLogo },
    { name: "FREECLOUD", Logo: () => <PlaceholderLogo text="FREECLOUD" /> },
    { name: "JUNTAY", Logo: () => <PlaceholderLogo text="JUNTAY" /> },
    { name: "RIVAMEZ", Logo: () => <PlaceholderLogo text="RIVAMEZ" /> }
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
                    className="flex whitespace-nowrap gap-32 animate-marquee items-center"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 60 // Slower animation
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
                            <div className="opacity-80 hover:opacity-100 transition-opacity scale-125">
                                <client.Logo />
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ClientsSection;
