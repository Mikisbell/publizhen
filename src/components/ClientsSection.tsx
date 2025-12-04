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
        <section className="py-24 bg-[var(--color-signal-yellow)] border-b border-black overflow-hidden relative">
            {/* Header */}
            <div className="container-fluid mb-16 px-8 md:px-16">
                <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-black"></div>
                    <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-black/60">
                        Respaldado por los Líderes de la Industria
                    </h2>
                </div>
            </div>

            {/* Gradient Masks for "Infinite" Illusion */}
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[var(--color-signal-yellow)] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[var(--color-signal-yellow)] to-transparent z-10 pointer-events-none"></div>

            {/* Marquee Container */}
            <div className="relative flex overflow-hidden group">
                {/* Inner Track - Duplicated for seamless loop */}
                <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap">
                    {[...clients, ...clients].map((client, index) => (
                        <div key={index} className="flex items-center">
                            {/* Client Card */}
                            <div className="flex flex-col items-center justify-center w-[300px] md:w-[400px] px-8 py-8 border-r border-black/5 relative transition-colors duration-300 hover:bg-black/5">
                                {/* Technical Label */}
                                <span className="text-xs font-bold uppercase tracking-widest text-black/40 mb-6">
                                    {client.name}
                                </span>

                                {/* Logo Container */}
                                <div className="h-20 md:h-24 w-full flex items-center justify-center transition-all duration-300 filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:scale-110 cursor-pointer">
                                    {client.logo ? (
                                        <img
                                            src={client.logo}
                                            alt={client.name}
                                            className="h-full w-auto object-contain mix-blend-multiply"
                                        />
                                    ) : (
                                        client.Component && <div className="scale-75"><client.Component /></div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Decoration */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-black/5"></div>
        </section>
    );
};

export default ClientsSection;
