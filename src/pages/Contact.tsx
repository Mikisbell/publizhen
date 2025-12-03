import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <div className="pt-24 pb-16 animate-fade-in">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 neon-text">Contáctanos</h1>
                <p className="text-xl text-slate-600 text-center mb-16 max-w-2xl mx-auto">
                    Estamos listos para hacer realidad tus proyectos. Escríbenos o visítanos.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="flex items-start space-x-4 glass-panel p-6 rounded-2xl neon-box">
                            <div className="bg-[var(--brand-pink)]/10 p-4 rounded-lg">
                                <Phone size={24} className="text-[var(--brand-pink)]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2 text-slate-800">Llámanos</h3>
                                <p className="text-slate-600">+51 976 277 993</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4 glass-panel p-6 rounded-2xl neon-box">
                            <div className="bg-[var(--brand-magenta)]/10 p-4 rounded-lg">
                                <Mail size={24} className="text-[var(--brand-magenta)]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2 text-slate-800">Escríbenos</h3>
                                <p className="text-slate-600">contacto@publizhen.com</p>
                                <p className="text-slate-600">ventas@publizhen.com</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4 glass-panel p-6 rounded-2xl neon-box">
                            <div className="bg-[var(--brand-yellow)]/10 p-4 rounded-lg">
                                <MapPin size={24} className="text-[var(--brand-orange)]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2 text-slate-800">Visítanos</h3>
                                <p className="text-slate-600">Av. Bolivia N° 148 - Int. 3095, Lima, Peru</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form className="glass-panel p-8 rounded-3xl border border-white/50 space-y-6 neon-box">
                        <div>
                            <label className="block text-sm font-medium text-slate-600 mb-2">Nombre Completo</label>
                            <input type="text" className="w-full bg-white/50 border border-slate-200 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:border-[var(--brand-pink)] focus:shadow-[0_0_10px_rgba(242,39,93,0.2)] transition-all" placeholder="Juan Pérez" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-600 mb-2">Correo Electrónico</label>
                            <input type="email" className="w-full bg-white/50 border border-slate-200 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:border-[var(--brand-pink)] focus:shadow-[0_0_10px_rgba(242,39,93,0.2)] transition-all" placeholder="juan@empresa.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-600 mb-2">Mensaje</label>
                            <textarea className="w-full bg-white/50 border border-slate-200 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:border-[var(--brand-pink)] focus:shadow-[0_0_10px_rgba(242,39,93,0.2)] transition-all h-32" placeholder="Cuéntanos sobre tu proyecto..."></textarea>
                        </div>
                        <button type="submit" className="w-full btn btn-primary py-4 text-lg">
                            Enviar Mensaje <Send size={20} className="ml-2" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
