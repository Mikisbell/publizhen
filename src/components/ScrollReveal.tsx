import { motion, useInView, useAnimation, type Variant, type Variants } from 'framer-motion';
import { useRef, useEffect } from 'react';

interface ScrollRevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    staggerChildren?: number;
    className?: string;
}

export const ScrollReveal = ({ children, width = "fit-content", delay = 0, staggerChildren = 0, className = "" }: ScrollRevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    const variants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: delay,
                staggerChildren: staggerChildren
            }
        }
    };

    return (
        <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={mainControls}
            className={className}
            style={{ width }}
        >
            {children}
        </motion.div>
    );
};

export const RevealItem = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
    const itemVariants: Record<string, Variant> = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div variants={itemVariants} className={className}>
            {children}
        </motion.div>
    );
};
