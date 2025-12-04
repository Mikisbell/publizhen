import { motion } from 'framer-motion';

const clients = [
    { name: 'Client 1', logo: 'https://placehold.co/200x80/e2e2e2/1a1a1a?text=CLIENTE+01' },
    { name: 'Client 2', logo: 'https://placehold.co/200x80/e2e2e2/1a1a1a?text=CLIENTE+02' },
    { name: 'Client 3', logo: 'https://placehold.co/200x80/e2e2e2/1a1a1a?text=CLIENTE+03' },
    { name: 'Client 4', logo: 'https://placehold.co/200x80/e2e2e2/1a1a1a?text=CLIENTE+04' },
    { name: 'Client 5', logo: 'https://placehold.co/200x80/e2e2e2/1a1a1a?text=CLIENTE+05' },
    { name: 'Client 6', logo: 'https://placehold.co/200x80/e2e2e2/1a1a1a?text=CLIENTE+06' },
];

const ClientsSection = () => {
    return (
        <section className="py-20 bg-white border-b border-black/10 overflow-hidden">
            <div className="container-fluid mb-12">
                <p className="text-sm font-bold uppercase tracking-widest text-gray-400 text-center">
                    Confían en nosotros
                </p>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <div className="animate-marquee whitespace-nowrap flex gap-20 items-center">
                    {[...clients, ...clients, ...clients].map((client, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.1, filter: "grayscale(0%)" }}
                            className="w-[200px] opacity-50 hover:opacity-100 grayscale transition-all duration-300 cursor-pointer"
                        >
                            <img src={client.logo} alt={client.name} className="w-full h-auto" />
                        </motion.div>
                    ))}
                </div>

                <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-20 items-center ml-20">
                    {[...clients, ...clients, ...clients].map((client, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.1, filter: "grayscale(0%)" }}
                            className="w-[200px] opacity-50 hover:opacity-100 grayscale transition-all duration-300 cursor-pointer"
                        >
                            <img src={client.logo} alt={client.name} className="w-full h-auto" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientsSection;
