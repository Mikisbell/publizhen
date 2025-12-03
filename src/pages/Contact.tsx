import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <div className="pt-32 pb-20 min-h-screen">
            <div className="container-fluid mb-20">
                <h1 className="text-[8vw] leading-none font-black uppercase tracking-tighter mb-4">
                    Contacto <span className="text-[var(--signal-pink)]">.</span>
                </h1>
                <p className="text-xl font-medium text-black/60 max-w-2xl border-l-2 border-black pl-6">
                    Inicia tu próximo gran proyecto con nosotros.
                </p>
            </div>

            <div className="container-fluid grid grid-cols-1 lg:grid-cols-2 gap-20">
                {/* Info */}
                <div className="space-y-12">
                    <div className="group">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-black/40 mb-2">Teléfono</h3>
                        <p className="text-3xl font-black group-hover:text-[var(--signal-pink)] transition-colors">+51 976 277 993</p>
                    </div>
                    <div className="group">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-black/40 mb-2">Email</h3>
                        <p className="text-3xl font-black group-hover:text-[var(--signal-pink)] transition-colors">contacto@publizhen.com</p>
                        <p className="text-xl font-bold text-black/60">ventas@publizhen.com</p>
                    </div>
                    <div className="group">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-black/40 mb-2">Ubicación</h3>
                        <p className="text-2xl font-bold leading-relaxed max-w-md">
                            Av. Bolivia N° 148 - Int. 3095<br />
                            Lima, Peru
                        </p>
                    </div>
                </div>

                {/* Form */}
                <form className="bg-white p-12 border border-black/10 shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]">
                    <div className="space-y-8">
                        <div>
                            <label className="block text-sm font-bold uppercase tracking-widest mb-2">Nombre</label>
                            <input type="text" className="w-full bg-transparent border-b-2 border-black/20 py-4 text-xl font-bold focus:outline-none focus:border-[var(--signal-pink)] transition-colors" placeholder="Tu nombre" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold uppercase tracking-widest mb-2">Email</label>
                            <input type="email" className="w-full bg-transparent border-b-2 border-black/20 py-4 text-xl font-bold focus:outline-none focus:border-[var(--signal-pink)] transition-colors" placeholder="tu@email.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold uppercase tracking-widest mb-2">Mensaje</label>
                            <textarea className="w-full bg-transparent border-b-2 border-black/20 py-4 text-xl font-bold focus:outline-none focus:border-[var(--signal-pink)] transition-colors h-32 resize-none" placeholder="Cuéntanos sobre tu proyecto..."></textarea>
                        </div>
                        <button type="submit" className="btn-signal w-full text-lg py-6">
                            Enviar Mensaje <Send size={20} className="ml-2" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
