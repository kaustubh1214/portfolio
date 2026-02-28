import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { HiExternalLink, HiCode, HiSparkles, HiStar, HiArrowRight, HiDownload } from 'react-icons/hi'
import { SiReact, SiNodedotjs, SiFastapi, SiMongodb, SiWordpress, SiShopify, SiFlutter, SiSqlite, SiSupabase } from 'react-icons/si'

const projects = [
    {
        id: 1,
        title: 'Nyaayvaad',
        subtitle: 'AI-Powered Legal Assistance Platform',
        description: 'A revolutionary AI system where users can talk to a lawyer-like AI after an incident. The system intelligently asks relevant follow-up questions, gathers structured case details, and generates professional legal documents and personalized guidance.',
        image: null,
        gradient: 'from-violet-600 via-purple-600 to-indigo-600',
        technologies: [
            { name: 'React', icon: SiReact },
            { name: 'FastAPI', icon: SiFastapi },
            { name: 'Node.js', icon: SiNodedotjs },
            { name: 'MongoDB', icon: SiMongodb },
        ],
        features: [
            'AI-powered legal consultation',
            'Intelligent follow-up questions',
            'Structured case data collection',
            'Automated document generation',
            'Personalized legal guidance',
        ],
        featured: true,
        demoUrl: '#',
        githubUrl: '#',
    },
    {
        id: 2,
        title: 'Travel To Revel',
        subtitle: 'Travel & Tourism Website',
        description: 'A comprehensive WordPress-based travel website featuring stunning destinations, tour packages, and seamless booking experiences for travelers seeking their next adventure.',
        image: null,
        gradient: 'from-cyan-500 via-teal-500 to-emerald-500',
        technologies: [
            { name: 'WordPress', icon: SiWordpress },
        ],
        features: [
            'Beautiful destination showcases',
            'Tour package listings',
            'Booking integration',
            'Mobile responsive design',
        ],
        featured: false,
        demoUrl: '#',
    },
    {
        id: 3,
        title: 'Just Fine Love Jewellery',
        subtitle: 'Luxury E-Commerce Store',
        description: 'An elegant Shopify-powered luxury jewellery e-commerce store featuring exquisite collections, sophisticated design, and seamless shopping experience for discerning customers.',
        image: null,
        gradient: 'from-pink-500 via-rose-500 to-red-500',
        technologies: [
            { name: 'Shopify', icon: SiShopify },
        ],
        features: [
            'Premium product showcase',
            'Secure payment processing',
            'Inventory management',
            'Customer-centric UX',
        ],
        featured: false,
        demoUrl: '#',
    },
    {
        id: 4,
        title: 'YoloGaming',
        subtitle: 'Gaming Content Platform',
        description: 'A dynamic WordPress gaming content platform featuring gaming news, reviews, tutorials, and community engagement for passionate gamers worldwide.',
        image: null,
        gradient: 'from-orange-500 via-amber-500 to-yellow-500',
        technologies: [
            { name: 'WordPress', icon: SiWordpress },
        ],
        features: [
            'Gaming news & reviews',
            'Engaging content layout',
            'Community features',
            'Performance optimized',
        ],
        featured: false,
        demoUrl: '#',
    },
    {
        id: 5,
        title: 'Kash Flow',
        subtitle: 'Personal Expense Tracker App',
        description: 'A mobile application built to easily track daily expenses locally. Features include intuitive charts for data visualization, CSV export functionality, and secure authentication originally using Supabase, now migrated to local SQLite for complete data privacy.',
        image: null,
        gradient: 'from-blue-500 via-indigo-500 to-cyan-500',
        technologies: [
            { name: 'Flutter', icon: SiFlutter },
            { name: 'SQLite', icon: SiSqlite },
            { name: 'Supabase', icon: SiSupabase },
        ],
        features: [
            'Local expense tracking',
            'Data visualization with charts',
            'Export data to CSV',
            'Fully local storage',
        ],
        featured: false,
        demoUrl: '#',
        downloadUrl: '/KashFlow.apk',
    },
]

const ProjectCard = ({ project, index, isInView }) => {
    const [isHovered, setIsHovered] = useState(false)

    if (project.featured) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="col-span-full mb-12"
            >
                <div
                    className="relative group"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Featured Badge */}
                    <motion.div
                        className="absolute -top-4 left-8 z-20 flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full text-white text-sm font-semibold shadow-lg"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <HiStar className="w-4 h-4" />
                        Featured Project
                    </motion.div>

                    {/* Main Card */}
                    <motion.div
                        className="glass-card rounded-3xl overflow-hidden"
                        whileHover={{ scale: 1.01 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="grid lg:grid-cols-2 gap-0">
                            {/* Visual Side */}
                            <div className={`relative h-64 lg:h-auto min-h-[400px] bg-gradient-to-br ${project.gradient} p-8 flex items-center justify-center overflow-hidden`}>
                                {/* Decorative Elements */}
                                <motion.div
                                    className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"
                                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                />
                                <motion.div
                                    className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"
                                    animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                                    transition={{ duration: 5, repeat: Infinity }}
                                />

                                {/* AI Chat Illustration */}
                                <div className="relative z-10 text-white text-center">
                                    <motion.div
                                        className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center"
                                        animate={{ rotate: isHovered ? 360 : 0 }}
                                        transition={{ duration: 1 }}
                                    >
                                        <HiSparkles className="w-12 h-12" />
                                    </motion.div>
                                    <h3 className="text-3xl font-bold font-[Space_Grotesk] mb-2">{project.title}</h3>
                                    <p className="text-white/80">{project.subtitle}</p>
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="p-8 lg:p-12 flex flex-col justify-center">
                                <p className="text-slate-600 leading-relaxed mb-6">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-3 mb-6">
                                    {project.technologies.map((tech) => (
                                        <motion.div
                                            key={tech.name}
                                            className="flex items-center gap-2 px-3 py-2 rounded-full bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-100"
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            <tech.icon className="w-4 h-4 text-violet-600" />
                                            <span className="text-sm font-medium text-violet-700">{tech.name}</span>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Features */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                                    {project.features.map((feature, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                            transition={{ delay: 0.6 + i * 0.1 }}
                                            className="flex items-center gap-2 text-sm text-slate-600"
                                        >
                                            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-violet-500 to-purple-500" />
                                            {feature}
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Actions */}
                                <div className="flex flex-wrap gap-4">
                                    <motion.a
                                        href={project.demoUrl}
                                        className="gradient-btn flex items-center gap-2 text-sm"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <HiExternalLink className="w-4 h-4" />
                                        View Live Demo
                                    </motion.a>
                                    {project.githubUrl && (
                                        <motion.a
                                            href={project.githubUrl}
                                            className="px-6 py-3 rounded-full glass-card text-slate-700 font-semibold flex items-center gap-2 text-sm hover:shadow-lg transition-all"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <HiCode className="w-4 h-4" />
                                            Source Code
                                        </motion.a>
                                    )}
                                    {project.downloadUrl && (
                                        <motion.a
                                            href={project.downloadUrl}
                                            download
                                            className="px-6 py-3 rounded-full glass-card text-slate-700 font-semibold flex items-center gap-2 text-sm hover:shadow-lg transition-all"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <HiDownload className="w-4 h-4" />
                                            Download APK
                                        </motion.a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        )
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                className="glass-card rounded-3xl overflow-hidden h-full hover-card"
                whileHover={{ scale: 1.02 }}
            >
                {/* Visual Header */}
                <div className={`relative h-48 bg-gradient-to-br ${project.gradient} p-6 flex items-center justify-center overflow-hidden`}>
                    <motion.div
                        className="absolute inset-0 bg-black/10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered ? 0.2 : 0 }}
                    />
                    {(() => {
                        const IconComponent = project.technologies[0].icon
                        return (
                            <motion.div
                                className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center"
                                animate={{ rotate: isHovered ? 360 : 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <IconComponent className="w-8 h-8 text-white" />
                            </motion.div>
                        )
                    })()}
                </div>

                {/* Content */}
                <div className="p-6">
                    <h3 className="text-xl font-bold font-[Space_Grotesk] text-slate-800 mb-1">
                        {project.title}
                    </h3>
                    <p className="text-sm text-slate-500 mb-4">{project.subtitle}</p>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                        {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                            <span
                                key={tech.name}
                                className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-600"
                            >
                                {tech.name}
                            </span>
                        ))}
                    </div>

                    {/* Features */}
                    <ul className="space-y-1 mb-6">
                        {project.features.slice(0, 3).map((feature, i) => (
                            <li key={i} className="flex items-center gap-2 text-xs text-slate-500">
                                <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${project.gradient}`} />
                                {feature}
                            </li>
                        ))}
                    </ul>

                    {/* Action */}
                    <div className="flex items-center gap-4">
                        <motion.a
                            href={project.demoUrl}
                            className="inline-flex items-center gap-2 text-sm font-semibold text-violet-600 hover:text-violet-700 transition-colors group/link"
                            whileHover={{ x: 5 }}
                        >
                            View Project
                            <HiArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                        </motion.a>
                        {project.downloadUrl && (
                            <motion.a
                                href={project.downloadUrl}
                                download
                                className="inline-flex items-center gap-2 text-sm font-semibold text-violet-600 hover:text-violet-700 transition-colors group/link"
                                whileHover={{ x: 5 }}
                            >
                                Download APK
                                <HiDownload className="w-4 h-4 transition-transform group-hover/link:-translate-y-1" />
                            </motion.a>
                        )}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

const Projects = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="projects" className="relative overflow-hidden">
            <div className="container-custom">
                <motion.div ref={ref}>
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="section-title gradient-text">Featured Projects</h2>
                        <p className="section-subtitle">
                            Real products I've built that solve actual problems and deliver value
                        </p>
                    </motion.div>

                    {/* Projects Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                index={index}
                                isInView={isInView}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Projects
