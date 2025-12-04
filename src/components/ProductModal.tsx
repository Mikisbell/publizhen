import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';

interface ProductModalProps {
    isOpen: boolean;
    onClose: () => void;
    product: any;
}

const ProductModal = ({ isOpen, onClose, product }: ProductModalProps) => {
    if (!product) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 50 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl relative grid grid-cols-1 md:grid-cols-2 max-h-[90vh] md:max-h-[80vh]"
                        >
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>

                            {/* Image Side */}
                            <div className="relative h-64 md:h-full bg-black/5">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden" />
                                <div className="absolute bottom-4 left-4 text-white md:hidden">
                                    <h2 className="text-2xl font-black uppercase">{product.title}</h2>
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="p-8 md:p-12 overflow-y-auto">
                                <div className="mb-8 hidden md:block">
                                    <span className="text-[var(--signal-orange)] font-bold uppercase tracking-widest text-sm mb-2 block">{product.subtitle}</span>
                                    <h2 className="text-4xl font-black uppercase leading-none">{product.title}</h2>
                                </div>

                                <p className="text-lg text-black/60 leading-relaxed mb-8">
                                    Soluciones de {product.title.toLowerCase()} diseñadas para maximizar la visibilidad de tu marca. Fabricación a medida con materiales de alta resistencia.
                                </p>

                                <div className="space-y-4 mb-8">
                                    <h3 className="font-bold uppercase tracking-widest text-sm border-b border-black/10 pb-2">Especificaciones</h3>
                                    <ul className="space-y-3">
                                        {product.items.map((item: string, idx: number) => (
                                            <li key={idx} className="flex items-start text-sm font-medium text-black/70">
                                                <Check size={16} className="text-[var(--signal-green)] mr-3 mt-0.5 flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex gap-4">
                                    <button className="flex-1 bg-black text-white font-bold uppercase tracking-widest py-4 rounded-xl hover:bg-[var(--signal-orange)] transition-colors">
                                        Cotizar Ahora
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ProductModal;
