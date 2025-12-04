import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroGrid = () => {
    return (
        <section className="min-h-screen pt-32 pb-10 px-4 bg-[var(--color-canvas)]">
            <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-12 grid-rows-[auto_400px_300px] md:grid-rows-[500px_300px] gap-4">

                {/* 1. Main Headline Area (Top Left) */}
                <div className="md:col-span-8 row-span-1 bg-black text-white p-8 md:p-16 flex flex-col justify-between relative overflow-hidden group">
                    <div className="absolute top-4 right-4 flex gap-2">
                        <Star className="text-[var(--color-signal-pink)] animate-spin-slow" size={32} />
                        <Star className="text-[var(--color-signal-yellow)] animate-spin-slow delay-75" size={32} />
                    </div>

                    <div className="relative z-10">
                        <motion.h1
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="text-[10vw] md:text-[6vw] leading-[0.9] font-black uppercase tracking-tighter mb-6"
                        >
                            Print <br />
                            <span className="text-transparent text-stroke-white">Lab</span> <span className="text-[var(--color-signal-pink)]">.</span>
                        </motion.h1>
                        <p className="text-xl md:text-2xl font-medium text-gray-400 max-w-xl">
                            Donde la ingeniería industrial se encuentra con el arte gráfico.
                        </p>
                    </div>

                    <div className="mt-8">
                        <Link to="/contacto" className="inline-flex items-center gap-4 text-xl font-bold uppercase tracking-widest hover:text-[var(--color-signal-pink)] transition-colors group-hover:translate-x-4 duration-300">
                            Iniciar Proyecto <ArrowRight />
                        </Link>
                    </div>

                    {/* Abstract Background Element */}
                    <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[var(--color-signal-pink)] rounded-full blur-[100px] opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                </div>

                {/* 2. Visual: The Machine (Top Right) */}
                <div className="md:col-span-4 row-span-1 relative overflow-hidden bg-gray-900 group">
                    <img
                        src="/images/hero-printer.png"
                        alt="Industrial Printer Action"
                        className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                        <span className="text-white font-mono text-sm uppercase tracking-widest border border-white/30 px-3 py-1 rounded-full backdrop-blur-md">
                            Tecnología UV 8K
                        </span>
                    </div>
                </div>

                {/* 3. Visual: The Craft (Bottom Left) */}
                <div className="md:col-span-5 row-span-1 relative overflow-hidden bg-gray-900 group">
                    <img
                        src="/images/hero-craft.png"
                        alt="Neon Sign Craftsmanship"
                        className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-8 left-8">
                        <span className="text-white font-mono text-sm uppercase tracking-widest border border-white/30 px-3 py-1 rounded-full backdrop-blur-md">
                            Acabado Artesanal
                        </span>
                    </div>
                </div>

                {/* 4. Value Prop / Texture (Bottom Center) */}
                <div className="md:col-span-4 row-span-1 bg-[var(--color-signal-orange)] p-8 flex flex-col justify-center relative overflow-hidden">
                    <img
                        src="/images/hero-texture.png"
                        alt="Texture"
                        className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-40"
                    />
                    <div className="relative z-10">
                        <h3 className="text-4xl font-black uppercase leading-none mb-4 text-black">
                            Materiales <br /> Premium
                        </h3>
                        <p className="font-bold text-black/80">
                            No imprimimos en papel. Imprimimos en experiencias. Vinilo, Lona, PVC, Acrílico.
                        </p>
                    </div>
                </div>

                {/* 5. Stats / Trust (Bottom Right) */}
                <div className="md:col-span-3 row-span-1 bg-white border-2 border-black p-8 flex flex-col justify-between hover:bg-black hover:text-white transition-colors duration-300 group">
                    <div>
                        <h4 className="text-6xl font-black mb-2">15+</h4>
                        <span className="text-sm font-bold uppercase tracking-widest opacity-60">Años de Experiencia</span>
                    </div>
                    <div className="w-full h-[2px] bg-current opacity-20"></div>
                    <div>
                        <h4 className="text-6xl font-black mb-2">5k+</h4>
                        <span className="text-sm font-bold uppercase tracking-widest opacity-60">Proyectos Entregados</span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HeroGrid;
