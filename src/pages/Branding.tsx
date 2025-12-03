import { PenTool, Layers, Image } from 'lucide-react';

const Branding = () => {
    return (
        <div className="pt-24 pb-16 animate-fade-in">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Branding & Identidad</h1>
                <p className="text-xl text-gray-400 text-center mb-16 max-w-2xl mx-auto">
                    Construimos marcas memorables con diseño estratégico y creatividad.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
                            <PenTool size={40} className="text-pink-500 mb-4" />
                            <h2 className="text-2xl font-bold mb-4">Diseño de Logotipos</h2>
                            <p className="text-gray-400">
                                Creamos la cara de tu empresa. Un buen logo es el primer paso para diferenciarte en el mercado.
                            </p>
                        </div>
                        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
                            <Layers size={40} className="text-purple-500 mb-4" />
                            <h2 className="text-2xl font-bold mb-4">Identidad Corporativa</h2>
                            <p className="text-gray-400">
                                Desarrollamos todo el universo visual de tu marca: papelería, uniformes, vehículos y más.
                            </p>
                        </div>
                    </div>

                    <div className="bg-slate-800 rounded-2xl p-8 flex items-center justify-center min-h-[400px] relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20"></div>
                        <div className="text-center relative z-10">
                            <Image size={64} className="mx-auto text-gray-500 mb-4" />
                            <p className="text-xl font-semibold text-gray-400">Portafolio en construcción</p>
                            <p className="text-sm text-gray-500 mt-2">Pronto verás nuestros mejores trabajos aquí.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Branding;
