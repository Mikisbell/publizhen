import { PenTool, Layers, Image } from 'lucide-react';

const Branding = () => {
    return (
        <div className="pt-24 pb-16 animate-fade-in">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 neon-text">Branding & Identidad</h1>
                <p className="text-xl text-slate-600 text-center mb-16 max-w-2xl mx-auto">
                    Construimos marcas memorables con diseño estratégico y creatividad.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div className="glass-panel p-8 rounded-3xl neon-box hover:scale-[1.02] transition-transform">
                            <PenTool size={40} className="text-[var(--brand-magenta)] mb-4" />
                            <h2 className="text-2xl font-bold mb-4 text-slate-800">Diseño de Logotipos</h2>
                            <p className="text-slate-600">
                                Creamos la cara de tu empresa. Un buen logo es el primer paso para diferenciarte en el mercado.
                            </p>
                        </div>
                        <div className="glass-panel p-8 rounded-3xl neon-box hover:scale-[1.02] transition-transform">
                            <Layers size={40} className="text-[var(--brand-pink)] mb-4" />
                            <h2 className="text-2xl font-bold mb-4 text-slate-800">Identidad Corporativa</h2>
                            <p className="text-slate-600">
                                Desarrollamos todo el universo visual de tu marca: papelería, uniformes, vehículos y más.
                            </p>
                        </div>
                    </div>

                    <div className="glass-panel rounded-3xl p-8 flex items-center justify-center min-h-[400px] relative overflow-hidden neon-box">
                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-pink)]/10 to-[var(--brand-orange)]/10"></div>
                        <div className="text-center relative z-10">
                            <Image size={64} className="mx-auto text-slate-400 mb-4" />
                            <p className="text-xl font-semibold text-slate-500">Portafolio en construcción</p>
                            <p className="text-sm text-slate-400 mt-2">Pronto verás nuestros mejores trabajos aquí.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Branding;
