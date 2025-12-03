import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-white tracking-tighter">
                    PUBLI<span className="text-blue-500">ZHEN</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <Link to="/" className="text-gray-300 hover:text-white transition-colors">Inicio</Link>
                    <Link to="/productos" className="text-gray-300 hover:text-white transition-colors">Productos</Link>
                    <Link to="/servicios" className="text-gray-300 hover:text-white transition-colors">Servicios</Link>
                    <Link to="/branding" className="text-gray-300 hover:text-white transition-colors">Branding</Link>
                    <Link to="/contacto" className="btn btn-primary">
                        Contáctanos
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-t border-slate-800 p-4 flex flex-col space-y-4 shadow-xl">
                    <Link to="/" className="text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>Inicio</Link>
                    <Link to="/productos" className="text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>Productos</Link>
                    <Link to="/servicios" className="text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>Servicios</Link>
                    <Link to="/branding" className="text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>Branding</Link>
                    <Link to="/contacto" className="btn btn-primary text-center" onClick={() => setIsOpen(false)}>Contáctanos</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
