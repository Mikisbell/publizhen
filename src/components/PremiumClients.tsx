import { useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame,
    useMotionTemplate
} from "framer-motion";
import { wrap } from "@motionone/utils";
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

function Card({ client, mouseX, mouseY }: { client: any; mouseX: any; mouseY: any }) {
    return (
        <div className="group relative h-40 w-[300px] shrink-0 overflow-hidden rounded-xl bg-neutral-800 border border-white/10">
            {/* Spotlight Effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                          650px circle at ${mouseX}px ${mouseY}px,
                          rgba(255, 255, 255, 0.15),
                          transparent 80%
                        )
                    `,
                }}
            />

            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center p-6">
                {/* Logo */}
                <div className="h-16 w-full flex items-center justify-center transition-all duration-500 group-hover:scale-150">
                    {client.logo ? (
                        <img
                            src={client.logo}
                            alt={client.name}
                            className="h-full w-auto object-contain"
                        />
                    ) : (
                        client.Component && <div className="scale-75"><client.Component /></div>
                    )}
                </div>

                {/* Label */}
                <div className="mt-4 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/60">
                        {client.name}
                    </span>
                </div>
            </div>
        </div>
    );
}

function ParallaxText({ children, baseVelocity = 100 }: { children: any; baseVelocity: number }) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });

    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef<number>(1);
    const isDragging = useRef(false);
    const isHovered = useRef(false);

    useAnimationFrame((_, delta) => {
        if (isDragging.current || isHovered.current) return;

        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className="overflow-hidden m-0 flex flex-nowrap whitespace-nowrap">
            <motion.div
                className="scroller flex flex-nowrap gap-8 cursor-grab active:cursor-grabbing"
                style={{ x }}
                onMouseEnter={() => isHovered.current = true}
                onMouseLeave={() => isHovered.current = false}
                onPanStart={() => isDragging.current = true}
                onPanEnd={() => isDragging.current = false}
                onPan={(_, info) => {
                    // Convert pixel delta to percentage-like units for the wrap function
                    // Adjust sensitivity (0.05) as needed
                    baseX.set(baseX.get() + info.delta.x * 0.05);
                }}
            >
                {children}
                {children}
                {children}
                {children}
            </motion.div>
        </div>
    );
}

const PremiumClients = () => {
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <section
            className="py-32 bg-black text-white overflow-hidden relative"
            onMouseMove={handleMouseMove}
        >
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="container-fluid mb-20 relative z-10 px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div>
                        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">
                            Ecosistema
                            <span className="text-[var(--color-signal-yellow)]">.</span>
                        </h2>
                        <p className="text-white/40 font-mono text-sm max-w-md">
                            // ALIANZAS ESTRATÉGICAS
                            <br />
                            Potenciando marcas que definen el mercado peruano.
                        </p>
                    </div>
                    <div className="hidden md:block">
                        <div className="flex items-center gap-2 text-xs font-mono text-[var(--color-signal-yellow)]">
                            <span className="w-2 h-2 bg-[var(--color-signal-yellow)] rounded-full animate-pulse"></span>
                            LIVE SYSTEM
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative z-10 -rotate-1 scale-110">
                <ParallaxText baseVelocity={-1.4}>
                    {clients.map((client, index) => (
                        <Card key={index} client={client} mouseX={mouseX} mouseY={mouseY} />
                    ))}
                </ParallaxText>
            </div>

            <div className="mt-12 relative z-10 rotate-1 scale-110 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                <ParallaxText baseVelocity={1.4}>
                    {clients.reverse().map((client, index) => (
                        <Card key={index} client={client} mouseX={mouseX} mouseY={mouseY} />
                    ))}
                </ParallaxText>
            </div>
        </section>
    );
};

export default PremiumClients;
