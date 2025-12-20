import { motion, AnimatePresence } from 'framer-motion';
import logo from '/src/assets/Orbit logo_1.png';

interface LogoLoaderProps {
    isVisible: boolean;
}

export default function LogoLoader({ isVisible }: LogoLoaderProps) {
    const DURATION = 2.0;

    return (
        <AnimatePresence mode="wait">
            {isVisible && (
                <motion.div
                    key="loader"
                    initial={{ opacity: 1, backgroundColor: '#0f172a' }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed inset-0 z-[100] flex items-center justify-center"
                >
                    <div className="relative w-64 h-64 flex items-center justify-center perspective-[1000px]">
                        {/* Glow Effect */}
                        <motion.div
                            className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: [0, 1, 1], scale: [0.5, 1.2, 1.2] }}
                            transition={{ duration: DURATION, times: [0, 0.5, 1] }}
                        />

                        {/* Upper Half */}
                        <motion.div
                            className="absolute inset-0 flex items-center justify-center"
                            style={{ clipPath: 'inset(0 0 50% 0)' }}
                            initial={{ scale: 0.8, opacity: 0, rotate: 0 }}
                            animate={{
                                scale: [0.8, 1, 1],
                                opacity: 1,
                                rotate: [0, 360],
                            }}
                            transition={{
                                duration: DURATION,
                                ease: [0.34, 1.56, 0.64, 1],
                            }}
                        >
                            <img
                                src={logo}
                                alt="Orbit Logo Upper"
                                className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(56,189,248,0.5)] filter brightness-110 contrast-125"
                            />
                        </motion.div>

                        {/* Lower Half */}
                        <motion.div
                            className="absolute inset-0 flex items-center justify-center"
                            style={{ clipPath: 'inset(50% 0 0 0)' }}
                            initial={{ scale: 0.8, opacity: 0, rotate: 0 }}
                            animate={{
                                scale: [0.8, 1, 1],
                                opacity: 1,
                                rotate: [0, -360],
                            }}
                            transition={{
                                duration: DURATION,
                                ease: [0.34, 1.56, 0.64, 1],
                            }}
                        >
                            <img
                                src={logo}
                                alt="Orbit Logo Lower"
                                className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(56,189,248,0.5)] filter brightness-110 contrast-125"
                            />
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
