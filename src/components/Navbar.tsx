import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { path: '/', label: 'Inicio' },
        { path: '/productos', label: 'Productos' },
        { path: '/servicios', label: 'Servicios' },
        { path: '/branding', label: 'Branding' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 border-b border-black/5 ${scrolled ? 'bg-[var(--canvas)]/90 backdrop-blur-sm py-4' : 'bg-transparent py-6'}`}>
            <div className="container-fluid flex justify-between items-center">
                <Link to="/" className="text-2xl font-black tracking-tighter uppercase">
                    Publi<span className="text-[var(--signal-pink)]">zhen</span>.
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-12">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`text-sm font-bold uppercase tracking-widest hover:text-[var(--signal-orange)] transition-colors relative group ${location.pathname === link.path ? 'text-black' : 'text-black/60'}`}
                        >
                            {link.label}
                            <span className={`absolute -bottom-2 left-0 w-full h-[2px] bg-[var(--signal-orange)] transform origin-left transition-transform duration-300 ${location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                        </Link>
                    ))}
                    <Link to="/contacto" className="btn-signal">
                        Cotizar
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-black" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden fixed inset-0 bg-[var(--canvas)] z-40 flex flex-col items-center justify-center space-y-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className="text-3xl font-black uppercase tracking-tighter hover:text-[var(--signal-pink)] transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link to="/contacto" className="btn-signal text-xl px-12 py-6" onClick={() => setIsOpen(false)}>
                        Cotizar Proyecto
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
