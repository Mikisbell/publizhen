import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <div className="pt-24 pb-16 animate-fade-in">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Contáctanos</h1>
                <p className="text-xl text-gray-400 text-center mb-16 max-w-2xl mx-auto">
                    Estamos listos para hacer realidad tus proyectos. Escríbenos o visítanos.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="flex items-start space-x-4">
                            <div className="bg-blue-500/10 p-4 rounded-lg">
                                <Phone size={24} className="text-blue-500" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Llámanos</h3>
                                <p className="text-gray-400">+51 999 999 999</p>
                                <p className="text-gray-400">+51 999 999 999</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="bg-purple-500/10 p-4 rounded-lg">
                                <Mail size={24} className="text-purple-500" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Escríbenos</h3>
                                <p className="text-gray-400">contacto@publizhen.com</p>
                                <p className="text-gray-400">ventas@publizhen.com</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="bg-pink-500/10 p-4 rounded-lg">
                                <MapPin size={24} className="text-pink-500" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Visítanos</h3>
                                <p className="text-gray-400">Av. Principal 123, Distrito</p>
                                <p className="text-gray-400">Ciudad, País</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form className="bg-slate-900 p-8 rounded-2xl border border-slate-800 space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Nombre Completo</label>
                            <input type="text" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Juan Pérez" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Correo Electrónico</label>
                            <input type="email" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="juan@empresa.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Mensaje</label>
                            <textarea className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors h-32" placeholder="Cuéntanos sobre tu proyecto..."></textarea>
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
