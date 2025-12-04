import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, Leaf } from 'lucide-react';

const FeaturedProduct = () => {
    return (
        <div className="container-fluid py-20">
            <div className="relative rounded-[2.5rem] bg-[#0a0a0a] overflow-hidden text-white shadow-2xl">
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--signal-pink)] rounded-full blur-[150px] opacity-20 pointer-events-none -translate-y-1/2 translate-x-1/2" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 p-12 lg:p-20 items-center relative z-10">

                    {/* Content Side */}
                    <div className="lg:col-span-7 space-y-10">
                        <div className="flex items-center gap-4">
                            <span className="bg-white/10 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[var(--signal-pink)]">
                                New Arrival 2025
                            </span>
                            <span className="text-white/40 text-sm font-medium uppercase tracking-widest">Edición Limitada</span>
                        </div>

                        <h2 className="text-6xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tight">
                            Neon Flex <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--signal-pink)] to-white">Ultra 2.0</span>
                        </h2>

                        <p className="text-xl text-white/60 max-w-xl leading-relaxed font-light">
                            Olvida el vidrio frágil. Nuestra nueva tecnología de silicón IP67 ofrece la misma intensidad lumínica con cero riesgo de rotura y 50,000 horas de vida útil.
                        </p>

                        {/* Specs Grid */}
                        <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
                            <div>
                                <Zap className="text-[var(--signal-yellow)] mb-3" size={24} />
                                <div className="text-2xl font-bold">12V</div>
                                <div className="text-xs text-white/40 uppercase tracking-wider">Bajo Consumo</div>
                            </div>
                            <div>
                                <Shield className="text-[var(--signal-pink)] mb-3" size={24} />
                                <div className="text-2xl font-bold">IP67</div>
                                <div className="text-xs text-white/40 uppercase tracking-wider">Waterproof</div>
                            </div>
                            <div>
                                <Leaf className="text-[var(--signal-green)] mb-3" size={24} />
                                <div className="text-2xl font-bold">ECO</div>
                                <div className="text-xs text-white/40 uppercase tracking-wider">Silicón Reciclable</div>
                            </div>
                        </div>

                        <button className="group flex items-center gap-4 bg-white text-black px-8 py-4 rounded-xl font-bold uppercase tracking-wider hover:bg-[var(--signal-pink)] hover:text-white transition-all duration-300">
                            Ver Especificaciones
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* Image Side (Parallax/Floating) */}
                    <div className="lg:col-span-5 relative h-full min-h-[400px] flex items-center justify-center">
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative w-full aspect-square"
                        >
                            {/* Decorative Circle */}
                            <div className="absolute inset-0 border border-white/10 rounded-full scale-90 animate-[spin_10s_linear_infinite]" />
                            <div className="absolute inset-0 border border-white/5 rounded-full scale-110" />

                            {/* Product Image */}
                            <img
                                src="/images/product-neon.webp"
                                alt="Neon Flex Product"
                                className="absolute inset-0 w-full h-full object-cover rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700 hover:scale-105 z-10"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProduct;
