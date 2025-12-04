import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import FlyoutLink from './FlyoutLink';
import { ProductsContent, ServicesContent, BrandingContent } from './MenuContent';
import { menuData } from '../data/menuData';

interface MenuItem {
    name: string;
    path: string;
    description?: string;
    icon?: React.ElementType;
}

interface MenuSection {
    category?: string;
    icon?: React.ElementType;
    color?: string;
    items: MenuItem[];
}

const MobileAccordion = ({ title, items, isOpen, onToggle }: { title: string, items: MenuSection[], isOpen: boolean, onToggle: () => void }) => {
    return (
        <div className="w-full">
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between text-3xl font-black uppercase tracking-tighter text-white py-2"
            >
                {title}
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <ChevronDown size={24} />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="pl-4 pb-4 space-y-4">
                            {items.map((section: MenuSection, idx: number) => (
                                <div key={idx} className="space-y-2">
                                    {section.category && (
                                        <h4 className="text-[var(--color-signal-pink)] text-sm font-bold uppercase tracking-widest mt-4 mb-2">
                                            {section.category}
                                        </h4>
                                    )}
                                    {section.items.map((item: MenuItem) => (
                                        <Link
                                            key={item.name}
                                            to={item.path}
                                            className="block text-white/80 text-lg font-medium hover:text-white transition-colors"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);
    const [openAccordion, setOpenAccordion] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const menuVariants: Variants = {
        closed: {
            opacity: 0,
            transition: {
                duration: 0.2,
                ease: "linear"
            }
        },
        open: {
            opacity: 1,
            transition: {
                duration: 0.2,
                ease: "linear"
            }
        }
    };

    const toggleAccordion = (title: string) => {
        setOpenAccordion(openAccordion === title ? null : title);
    };

    return (
        <nav className={`fixed w-full z-50 border-b border-white/5 ${isOpen ? 'transition-none' : 'transition-all duration-500'} ${scrolled && !isOpen ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
            <div className="container-fluid flex justify-between items-center">
                <Link to="/" className="relative z-50">
                    <img
                        src="/images/logo.png"
                        alt="Publizhen"
                        className="h-16 w-auto object-contain"
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <Link
                        to="/"
                        className={`text-sm font-bold uppercase tracking-widest transition-colors hover:text-[var(--color-signal-pink)] ${location.pathname === '/' || scrolled
                            ? 'text-white'
                            : 'text-black/80'
                            }`}
                    >
                        Inicio
                    </Link>

                    <FlyoutLink href="/productos" FlyoutContent={ProductsContent} whiteText={location.pathname === '/' || scrolled}>
                        Productos
                    </FlyoutLink>

                    <FlyoutLink href="/servicios" FlyoutContent={ServicesContent} whiteText={location.pathname === '/' || scrolled}>
                        Servicios
                    </FlyoutLink>

                    <FlyoutLink href="/branding" FlyoutContent={BrandingContent} whiteText={location.pathname === '/' || scrolled}>
                        Branding
                    </FlyoutLink>

                    <Link
                        to="/contacto"
                        className={`text-sm font-bold uppercase tracking-widest transition-colors hover:text-[var(--color-signal-pink)] ${location.pathname === '/contacto' || scrolled
                            ? 'text-white'
                            : 'text-black/80'
                            }`}
                    >
                        Contacto
                    </Link>

                    <a href="https://wa.me/51976277993?text=Hola,%20me%20gustar%C3%ADa%20cotizar%20un%20proyecto." target="_blank" rel="noopener noreferrer" className="btn-signal relative overflow-hidden group ml-4 flex items-center gap-2">
                        <span className="relative z-10 flex items-center gap-2">
                            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" /><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" /></svg>
                            Cotizar
                        </span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={`md:hidden relative z-50 p-2 transition-colors duration-300 ${isOpen || scrolled ? 'text-white' : 'text-black'}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        className="md:hidden fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col px-6 pt-24 pb-8 overflow-y-auto"
                    >
                        <div className="w-full max-w-md mx-auto space-y-6">
                            <Link
                                to="/"
                                className="block text-3xl font-black uppercase tracking-tighter text-white hover:text-[var(--color-signal-pink)] transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Inicio
                            </Link>

                            <MobileAccordion
                                title="Productos"
                                items={menuData.productos}
                                isOpen={openAccordion === 'Productos'}
                                onToggle={() => toggleAccordion('Productos')}
                            />

                            <MobileAccordion
                                title="Servicios"
                                items={menuData.servicios}
                                isOpen={openAccordion === 'Servicios'}
                                onToggle={() => toggleAccordion('Servicios')}
                            />

                            <MobileAccordion
                                title="Branding"
                                items={menuData.branding}
                                isOpen={openAccordion === 'Branding'}
                                onToggle={() => toggleAccordion('Branding')}
                            />

                            <Link
                                to="/contacto"
                                className="block text-3xl font-black uppercase tracking-tighter text-white hover:text-[var(--color-signal-pink)] transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Contacto
                            </Link>

                            <a
                                href="https://wa.me/51976277993?text=Hola,%20me%20gustar%C3%ADa%20cotizar%20un%20proyecto."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-signal text-xl w-full py-6 mt-8 flex justify-center items-center gap-3"
                                onClick={() => setIsOpen(false)}
                            >
                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" /><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" /></svg>
                                Cotizar Proyecto
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
