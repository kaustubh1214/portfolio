import { motion } from 'framer-motion'
import { HiArrowDown, HiCode, HiSparkles } from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    }

    const floatingVariants = {
        animate: {
            y: [-10, 10, -10],
            rotate: [-5, 5, -5],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
            },
        },
    }

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Decorative Elements */}
            <motion.div
                className="absolute top-32 left-10 w-20 h-20 rounded-full bg-gradient-to-br from-violet-400/30 to-cyan-400/30 blur-xl"
                variants={floatingVariants}
                animate="animate"
            />
            <motion.div
                className="absolute top-48 right-20 w-32 h-32 rounded-full bg-gradient-to-br from-pink-400/30 to-orange-400/30 blur-xl"
                variants={floatingVariants}
                animate="animate"
                style={{ animationDelay: '2s' }}
            />
            <motion.div
                className="absolute bottom-32 left-1/4 w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400/30 to-violet-400/30 blur-xl"
                variants={floatingVariants}
                animate="animate"
                style={{ animationDelay: '4s' }}
            />

            <div className="container-custom">
                <motion.div
                    className="text-center max-w-5xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Badge */}
                    <motion.div
                        variants={itemVariants}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
                    >
                        <HiSparkles className="w-5 h-5 text-violet-500" />
                        <span className="text-sm font-medium text-slate-600">
                            Available for exciting opportunities
                        </span>
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold font-[Space_Grotesk] mb-6 leading-tight"
                    >
                        Hi, I'm{' '}
                        <span className="gradient-text">Kaustubh</span>
                        <br />
                        <span className="text-slate-700">Shinde</span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap items-center justify-center gap-3 mb-8"
                    >
                        <span className="px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/10 to-cyan-500/10 border border-violet-200 text-violet-700 font-medium">
                            <HiCode className="inline w-4 h-4 mr-2" />
                            Full-Stack Developer
                        </span>
                        <span className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/10 to-orange-500/10 border border-pink-200 text-pink-700 font-medium">
                            <HiSparkles className="inline w-4 h-4 mr-2" />
                            AI Builder
                        </span>
                        <span className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-cyan-200 text-cyan-700 font-medium">
                            Product-Focused
                        </span>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        variants={itemVariants}
                        className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed"
                    >
                        MCA student at S.P.I.T. College with <span className="font-semibold text-violet-600">2+ years</span> of
                        experience building production-ready applications. I craft elegant solutions using{' '}
                        <span className="font-semibold text-cyan-600">MERN Stack, FastAPI, and AI technologies</span>.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap items-center justify-center gap-4 mb-12"
                    >
                        <motion.a
                            href="#projects"
                            className="gradient-btn flex items-center gap-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View My Work
                            <HiArrowDown className="w-5 h-5" />
                        </motion.a>
                        <motion.a
                            href="#contact"
                            className="px-8 py-4 rounded-full font-semibold glass-card text-slate-700 hover:shadow-lg transition-all duration-300"
                            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.9)' }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get In Touch
                        </motion.a>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        variants={itemVariants}
                        className="flex items-center justify-center gap-4"
                    >
                        <motion.a
                            href="https://github.com/kaustubhshinde"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 rounded-full glass-card text-slate-600 hover:text-violet-600 transition-all duration-300"
                            whileHover={{ scale: 1.1, y: -5 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaGithub className="w-6 h-6" />
                        </motion.a>
                        <motion.a
                            href="https://linkedin.com/in/kaustubhshinde"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 rounded-full glass-card text-slate-600 hover:text-cyan-600 transition-all duration-300"
                            whileHover={{ scale: 1.1, y: -5 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaLinkedin className="w-6 h-6" />
                        </motion.a>
                        <motion.a
                            href="https://twitter.com/kaustubhshinde"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 rounded-full glass-card text-slate-600 hover:text-pink-600 transition-all duration-300"
                            whileHover={{ scale: 1.1, y: -5 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaTwitter className="w-6 h-6" />
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
            >
                <motion.div
                    className="flex flex-col items-center gap-2 text-slate-400"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <span className="text-xs uppercase tracking-wider">Scroll Down</span>
                    <HiArrowDown className="w-4 h-4" />
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Hero
