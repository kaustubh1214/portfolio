import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiAcademicCap, HiBookOpen, HiLocationMarker } from 'react-icons/hi'

const educationData = [
    {
        id: 1,
        degree: 'Master of Computer Applications (MCA)',
        institution: 'S.P.I.T. College',
        location: 'Mumbai, India',
        period: 'Current',
        description: 'Pursuing advanced studies in computer applications with focus on software development, AI/ML, and system design.',
        color: 'from-violet-500 to-purple-600',
        bgColor: 'from-violet-50 to-purple-50',
        current: true,
    },
    {
        id: 2,
        degree: 'Bachelor of Commerce (B.Com)',
        institution: 'St. Gonsalo Garcia College',
        location: 'Mumbai, India',
        period: 'Completed',
        description: 'Strong foundation in commerce and business principles with additional focus on computer fundamentals.',
        color: 'from-cyan-500 to-blue-500',
        bgColor: 'from-cyan-50 to-blue-50',
        current: false,
    },
    {
        id: 3,
        degree: 'Higher Secondary Certificate (HSC)',
        institution: 'New English School',
        location: 'Mumbai, India',
        period: 'Completed',
        description: 'Completed higher secondary education with focus on commerce stream.',
        color: 'from-pink-500 to-rose-500',
        bgColor: 'from-pink-50 to-rose-50',
        current: false,
    },
    {
        id: 4,
        degree: 'Secondary School Certificate (SSC)',
        institution: 'New English School',
        location: 'Mumbai, India',
        period: 'Completed',
        description: 'Completed secondary education with strong academic performance.',
        color: 'from-orange-500 to-amber-500',
        bgColor: 'from-orange-50 to-amber-50',
        current: false,
    },
]

const Education = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

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
        <section id="education" className="relative overflow-hidden">
            <div className="container-custom">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <h2 className="section-title gradient-text">Education</h2>
                        <p className="section-subtitle">
                            My academic journey that shaped my technical foundation
                        </p>
                    </motion.div>

                    {/* Timeline */}
                    <div className="max-w-4xl mx-auto relative">
                        {/* Central Timeline Line */}
                        <div className="absolute left-8 lg:left-1/2 lg:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-500 via-cyan-500 via-pink-500 to-orange-500" />

                        {/* Education Cards */}
                        <div className="space-y-12">
                            {educationData.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    variants={itemVariants}
                                    className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                        }`}
                                >
                                    {/* Timeline Dot */}
                                    <motion.div
                                        className={`absolute left-8 lg:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br ${item.color} shadow-lg z-10`}
                                        initial={{ scale: 0 }}
                                        animate={isInView ? { scale: 1 } : { scale: 0 }}
                                        transition={{ delay: 0.5 + index * 0.15, type: 'spring' }}
                                    >
                                        {item.current && (
                                            <motion.div
                                                className="absolute inset-0 rounded-full bg-violet-500"
                                                animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                            />
                                        )}
                                    </motion.div>

                                    {/* Content */}
                                    <div className={`w-full lg:w-1/2 pl-20 lg:pl-0 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'
                                        }`}>
                                        <motion.div
                                            className={`glass-card rounded-2xl p-6 bg-gradient-to-br ${item.bgColor} hover-card`}
                                            whileHover={{ scale: 1.02 }}
                                        >
                                            {/* Current Badge */}
                                            {item.current && (
                                                <motion.div
                                                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 text-white text-xs font-semibold mb-3"
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                                                    transition={{ delay: 0.8 }}
                                                >
                                                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                                                    Currently Pursuing
                                                </motion.div>
                                            )}

                                            {/* Icon */}
                                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-lg`}>
                                                {item.current ? (
                                                    <HiAcademicCap className="w-6 h-6 text-white" />
                                                ) : (
                                                    <HiBookOpen className="w-6 h-6 text-white" />
                                                )}
                                            </div>

                                            {/* Degree */}
                                            <h3 className="text-xl font-bold font-[Space_Grotesk] text-slate-800 mb-2">
                                                {item.degree}
                                            </h3>

                                            {/* Institution */}
                                            <p className="text-lg font-medium text-slate-600 mb-2">
                                                {item.institution}
                                            </p>

                                            {/* Location & Period */}
                                            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 mb-3">
                                                <span className="flex items-center gap-1">
                                                    <HiLocationMarker className="w-4 h-4" />
                                                    {item.location}
                                                </span>
                                                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${item.current
                                                        ? 'bg-green-100 text-green-700'
                                                        : 'bg-slate-100 text-slate-600'
                                                    }`}>
                                                    {item.period}
                                                </span>
                                            </div>

                                            {/* Description */}
                                            <p className="text-sm text-slate-500 leading-relaxed">
                                                {item.description}
                                            </p>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Education
