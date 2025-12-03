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
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-panel py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link to="/" className="text-3xl font-bold text-slate-900 tracking-tighter neon-text">
                    PUBLI<span className="text-[var(--brand-pink)]">ZHEN</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <Link to="/" className="text-slate-600 hover:text-[var(--brand-pink)] transition-colors text-sm uppercase tracking-widest font-medium">Inicio</Link>
                    <Link to="/productos" className="text-slate-600 hover:text-[var(--brand-pink)] transition-colors text-sm uppercase tracking-widest font-medium">Productos</Link>
                    <Link to="/servicios" className="text-slate-600 hover:text-[var(--brand-pink)] transition-colors text-sm uppercase tracking-widest font-medium">Servicios</Link>
                    <Link to="/branding" className="text-slate-600 hover:text-[var(--brand-pink)] transition-colors text-sm uppercase tracking-widest font-medium">Branding</Link>
                    <Link to="/contacto" className="btn btn-primary">
                        Contáctanos
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full glass-panel p-4 flex flex-col space-y-4 shadow-xl">
                    <Link to="/" className="text-slate-700 hover:text-[var(--brand-pink)] font-medium" onClick={() => setIsOpen(false)}>Inicio</Link>
                    <Link to="/productos" className="text-slate-700 hover:text-[var(--brand-pink)] font-medium" onClick={() => setIsOpen(false)}>Productos</Link>
                    <Link to="/servicios" className="text-slate-700 hover:text-[var(--brand-pink)] font-medium" onClick={() => setIsOpen(false)}>Servicios</Link>
                    <Link to="/branding" className="text-slate-700 hover:text-[var(--brand-pink)] font-medium" onClick={() => setIsOpen(false)}>Branding</Link>
                    <Link to="/contacto" className="btn btn-primary text-center" onClick={() => setIsOpen(false)}>Contáctanos</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
