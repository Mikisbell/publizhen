import { Link } from 'react-router-dom';
import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-950 text-gray-400 py-12 border-t border-slate-900">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-2xl font-bold text-white mb-4">PUBLI<span className="text-blue-500">ZHEN</span></h3>
                    <p className="mb-4">Soluciones innovadoras y de alta calidad para marcas que buscan destacar.</p>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-blue-500 transition-colors"><Facebook size={20} /></a>
                        <a href="#" className="hover:text-pink-500 transition-colors"><Instagram size={20} /></a>
                    </div>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4">Productos</h4>
                    <ul className="space-y-2">
                        <li><Link to="/productos" className="hover:text-white transition-colors">Displays Publicitarios</Link></li>
                        <li><Link to="/productos" className="hover:text-white transition-colors">Juegos BTL</Link></li>
                        <li><Link to="/productos" className="hover:text-white transition-colors">Merchandising</Link></li>
                        <li><Link to="/productos" className="hover:text-white transition-colors">Señalética</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4">Servicios</h4>
                    <ul className="space-y-2">
                        <li><Link to="/servicios" className="hover:text-white transition-colors">Impresión Gran Formato</Link></li>
                        <li><Link to="/servicios" className="hover:text-white transition-colors">Branding Corporativo</Link></li>
                        <li><Link to="/servicios" className="hover:text-white transition-colors">Instalación</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4">Contacto</h4>
                    <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                            <MapPin size={20} className="text-blue-500 shrink-0" />
                            <span>Av. Bolivia N° 148 - Int. 3095, Lima, Peru</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <Phone size={20} className="text-blue-500 shrink-0" />
                            <span>+51 976 277 993</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <Mail size={20} className="text-blue-500 shrink-0" />
                            <span>contacto@publizhen.com</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto px-4 mt-12 pt-8 border-t border-slate-900 text-center text-sm">
                <p>&copy; {new Date().getFullYear()} FreeCloud. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
