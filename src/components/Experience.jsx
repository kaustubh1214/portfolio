import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiBriefcase, HiCode, HiDatabase, HiLightningBolt, HiUsers } from 'react-icons/hi'

const Experience = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    const experience = {
        company: 'Ikshvaku Solutions',
        role: 'Full-Stack Developer',
        duration: '2+ Years',
        type: 'Professional Experience',
        description: 'Working on full-stack development, building and maintaining production-grade applications, APIs, and databases. Focused on performance optimization and delivering real-world client features.',
        responsibilities: [
            {
                icon: HiCode,
                title: 'Full-Stack Development',
                description: 'Building complete web applications from frontend to backend using modern technologies',
                color: 'from-violet-500 to-purple-500',
            },
            {
                icon: HiDatabase,
                title: 'API & Database Design',
                description: 'Designing and implementing RESTful APIs and optimizing database schemas',
                color: 'from-cyan-500 to-blue-500',
            },
            {
                icon: HiLightningBolt,
                title: 'Performance Optimization',
                description: 'Analyzing and improving application performance for better user experience',
                color: 'from-pink-500 to-rose-500',
            },
            {
                icon: HiUsers,
                title: 'Client Features',
                description: 'Developing and deploying features based on real client requirements',
                color: 'from-orange-500 to-amber-500',
            },
        ],
        technologies: ['React', 'Node.js', 'FastAPI', 'MongoDB', 'MySQL', 'PostgreSQL'],
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
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

    return (
        <section id="experience" className="relative overflow-hidden">
            <div className="container-custom">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <h2 className="section-title gradient-text">Professional Experience</h2>
                        <p className="section-subtitle">
                            Where I've honed my skills and delivered real-world impact
                        </p>
                    </motion.div>

                    {/* Experience Card */}
                    <motion.div
                        variants={itemVariants}
                        className="max-w-5xl mx-auto"
                    >
                        <div className="relative">
                            {/* Timeline Dot */}
                            <motion.div
                                className="absolute -left-3 top-8 timeline-dot hidden lg:block"
                                initial={{ scale: 0 }}
                                animate={isInView ? { scale: 1 } : { scale: 0 }}
                                transition={{ delay: 0.5, type: 'spring' }}
                            />

                            {/* Timeline Line */}
                            <div className="absolute -left-[5px] top-12 bottom-0 w-[2px] bg-gradient-to-b from-violet-500 to-transparent hidden lg:block" />

                            {/* Main Card */}
                            <motion.div
                                className="glass-card rounded-3xl p-8 lg:p-12 lg:ml-8 hover-card"
                                whileHover={{ scale: 1.01 }}
                            >
                                {/* Header */}
                                <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
                                    <div className="flex items-start gap-4">
                                        <motion.div
                                            className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg"
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <HiBriefcase className="w-8 h-8 text-white" />
                                        </motion.div>
                                        <div>
                                            <h3 className="text-2xl font-bold font-[Space_Grotesk] text-slate-800">
                                                {experience.company}
                                            </h3>
                                            <p className="text-lg text-violet-600 font-medium">{experience.role}</p>
                                            <div className="flex items-center gap-3 mt-2">
                                                <span className="px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700">
                                                    {experience.duration}
                                                </span>
                                                <span className="text-sm text-slate-500">{experience.type}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                                    {experience.description}
                                </p>

                                {/* Responsibilities Grid */}
                                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                    {experience.responsibilities.map((item, index) => (
                                        <motion.div
                                            key={item.title}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                            transition={{ delay: 0.6 + index * 0.1 }}
                                            className="p-5 rounded-2xl bg-white/60 border border-white/80 hover:shadow-lg transition-all duration-300 group"
                                        >
                                            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                                                <item.icon className="w-5 h-5 text-white" />
                                            </div>
                                            <h4 className="font-semibold text-slate-800 mb-1">{item.title}</h4>
                                            <p className="text-sm text-slate-500">{item.description}</p>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Technologies Used */}
                                <div>
                                    <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">
                                        Technologies Used
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {experience.technologies.map((tech, index) => (
                                            <motion.span
                                                key={tech}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                                transition={{ delay: 1 + index * 0.05 }}
                                                whileHover={{ scale: 1.1 }}
                                                className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-slate-50 to-slate-100 text-slate-700 border border-slate-200 hover:border-violet-300 transition-colors cursor-default"
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Experience
