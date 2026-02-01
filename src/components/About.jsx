import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiLightningBolt, HiPuzzle, HiChip, HiTrendingUp } from 'react-icons/hi'

const About = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
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

    const highlights = [
        {
            icon: HiLightningBolt,
            title: 'Fast Learner',
            description: 'Quick to adapt to new technologies and frameworks',
            color: 'from-violet-500 to-purple-500',
        },
        {
            icon: HiPuzzle,
            title: 'Problem Solver',
            description: 'Love breaking down complex problems into elegant solutions',
            color: 'from-cyan-500 to-blue-500',
        },
        {
            icon: HiChip,
            title: 'AI Enthusiast',
            description: 'Passionate about integrating AI into practical applications',
            color: 'from-pink-500 to-rose-500',
        },
        {
            icon: HiTrendingUp,
            title: 'Product Focused',
            description: 'Building features that create real value for users',
            color: 'from-orange-500 to-amber-500',
        },
    ]

    return (
        <section id="about" className="relative overflow-hidden">
            <div className="container-custom">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <h2 className="section-title gradient-text">About Me</h2>
                        <p className="section-subtitle">
                            A passionate developer who turns ideas into impactful digital experiences
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Image/Visual */}
                        <motion.div variants={itemVariants} className="relative">
                            <div className="relative mx-auto w-full max-w-md">
                                {/* Main Card */}
                                <motion.div
                                    className="glass-card rounded-3xl p-8 relative z-10"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {/* Profile Visual */}
                                    <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-violet-500 via-cyan-500 to-pink-500 p-1 mb-6">
                                        <img
                                            src="/kaustubh.jpg"
                                            alt="Kaustubh Shinde"
                                            className="w-full h-full rounded-2xl object-cover"
                                        />
                                    </div>

                                    {/* Quick Stats */}
                                    <div className="grid grid-cols-3 gap-4 text-center">
                                        <div className="p-3 rounded-xl bg-gradient-to-br from-violet-50 to-violet-100">
                                            <div className="text-2xl font-bold text-violet-600">2+</div>
                                            <div className="text-xs text-slate-500">Years Exp.</div>
                                        </div>
                                        <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-50 to-cyan-100">
                                            <div className="text-2xl font-bold text-cyan-600">10+</div>
                                            <div className="text-xs text-slate-500">Projects</div>
                                        </div>
                                        <div className="p-3 rounded-xl bg-gradient-to-br from-pink-50 to-pink-100">
                                            <div className="text-2xl font-bold text-pink-600">5+</div>
                                            <div className="text-xs text-slate-500">Clients</div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Decorative Elements */}
                                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-violet-400/20 to-cyan-400/20 rounded-full blur-2xl" />
                                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-2xl" />
                            </div>
                        </motion.div>

                        {/* Right Side - Content */}
                        <motion.div variants={itemVariants} className="space-y-6">
                            <div className="space-y-4">
                                <h3 className="text-3xl font-bold font-[Space_Grotesk] text-slate-800">
                                    Crafting Digital Experiences That Matter
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    I'm <span className="font-semibold text-violet-600">Kaustubh Shinde</span>, an MCA student at
                                    <span className="font-semibold text-cyan-600"> S.P.I.T. College</span>, Mumbai, with a deep passion
                                    for building products that solve real-world problems.
                                </p>
                                <p className="text-slate-600 leading-relaxed">
                                    With <span className="font-semibold">2+ years of professional experience</span> at
                                    <span className="font-semibold text-violet-600"> Ikshvaku Solutions</span>, I've worked on
                                    full-stack development, APIs, databases, performance optimization, and delivered features
                                    that real users depend on every day.
                                </p>
                                <p className="text-slate-600 leading-relaxed">
                                    My expertise spans across <span className="font-semibold text-cyan-600">MERN Stack, FastAPI,
                                        React, Node.js</span>, and various databases. I'm particularly excited about
                                    <span className="font-semibold text-pink-600"> AI integration</span> and building intelligent
                                    systems that make a difference.
                                </p>
                            </div>

                            {/* Highlights Grid */}
                            <div className="grid sm:grid-cols-2 gap-4 pt-4">
                                {highlights.map((item, index) => (
                                    <motion.div
                                        key={item.title}
                                        className="glass-card rounded-2xl p-4 hover-card cursor-default"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                        transition={{ delay: 0.5 + index * 0.1 }}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-3`}>
                                            <item.icon className="w-5 h-5 text-white" />
                                        </div>
                                        <h4 className="font-semibold text-slate-800 mb-1">{item.title}</h4>
                                        <p className="text-sm text-slate-500">{item.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default About
