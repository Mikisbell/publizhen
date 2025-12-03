import { Link } from 'react-router-dom';
import { Facebook, Instagram, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-20 pb-10 border-t-4 border-[var(--color-signal-pink)]">
            <div className="container-fluid grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                <div>
                    <h3 className="text-4xl font-black uppercase tracking-tighter mb-6">
                        Publi<span className="text-[var(--color-signal-pink)]">zhen</span>.
                    </h3>
                    <p className="text-gray-400 font-medium mb-8 max-w-xs">
                        Soluciones de impacto visual para marcas que se atreven a destacar.
                    </p>
                    <div className="flex space-x-4">
                        <a href="#" className="w-10 h-10 flex items-center justify-center border border-white/20 hover:bg-[var(--color-signal-pink)] hover:border-[var(--color-signal-pink)] hover:text-white transition-all duration-300">
                            <Facebook size={20} />
                        </a>
                        <a href="#" className="w-10 h-10 flex items-center justify-center border border-white/20 hover:bg-[var(--color-signal-magenta)] hover:border-[var(--color-signal-magenta)] hover:text-white transition-all duration-300">
                            <Instagram size={20} />
                        </a>
                    </div>
                </div>

                <div>
                    <h4 className="text-[var(--color-signal-orange)] font-black uppercase tracking-widest text-sm mb-6">Productos</h4>
                    <ul className="space-y-3">
                        {['Displays Publicitarios', 'Juegos BTL', 'Merchandising', 'Señalética'].map((item) => (
                            <li key={item}>
                                <Link to="/productos" className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-flex items-center group">
                                    <span className="w-0 group-hover:w-6 overflow-hidden transition-all duration-300 text-[var(--color-signal-orange)] flex items-center">
                                        <ArrowRight size={14} className="mr-2" />
                                    </span>
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="text-[var(--color-signal-yellow)] font-black uppercase tracking-widest text-sm mb-6">Servicios</h4>
                    <ul className="space-y-3">
                        {['Impresión Gran Formato', 'Branding Corporativo', 'Instalación', 'Mantenimiento'].map((item) => (
                            <li key={item}>
                                <Link to="/servicios" className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-flex items-center group">
                                    <span className="w-0 group-hover:w-6 overflow-hidden transition-all duration-300 text-[var(--color-signal-yellow)] flex items-center">
                                        <ArrowRight size={14} className="mr-2" />
                                    </span>
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="text-[var(--color-signal-pink)] font-black uppercase tracking-widest text-sm mb-6">Contacto</h4>
                    <ul className="space-y-4">
                        <li className="flex items-start space-x-4 group">
                            <MapPin size={24} className="text-gray-500 group-hover:text-[var(--color-signal-pink)] transition-colors shrink-0" />
                            <span className="text-gray-300">Av. Bolivia N° 148 - Int. 3095,<br />Lima, Peru</span>
                        </li>
                        <li className="flex items-center space-x-4 group">
                            <Phone size={24} className="text-gray-500 group-hover:text-[var(--color-signal-pink)] transition-colors shrink-0" />
                            <span className="text-gray-300">+51 976 277 993</span>
                        </li>
                        <li className="flex items-center space-x-4 group">
                            <Mail size={24} className="text-gray-500 group-hover:text-[var(--color-signal-pink)] transition-colors shrink-0" />
                            <span className="text-gray-300">contacto@publizhen.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-white/10 pt-8">
                <div className="container-fluid flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-widest text-gray-600">
                    <p>&copy; {new Date().getFullYear()} Publizhen. Todos los derechos reservados.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacidad</a>
                        <a href="#" className="hover:text-white transition-colors">Términos</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
