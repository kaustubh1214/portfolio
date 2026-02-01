import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import {
    SiReact, SiNextdotjs, SiTailwindcss, SiHtml5, SiCss3, SiJavascript, SiFlutter,
    SiNodedotjs, SiExpress, SiFastapi, SiPython,
    SiMongodb, SiMysql, SiPostgresql,
    SiGit, SiGithub, SiDocker, SiVercel, SiPostman, SiFigma
} from 'react-icons/si'
import { HiCode, HiServer, HiDatabase, HiCog } from 'react-icons/hi'

const skillCategories = [
    {
        id: 'frontend',
        name: 'Frontend',
        icon: HiCode,
        color: 'from-violet-500 to-purple-500',
        bgColor: 'from-violet-50 to-purple-50',
        skills: [
            { name: 'React', icon: SiReact, color: '#61DAFB' },
            { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
            { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
            { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
            { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
            { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
            { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
        ],
    },
    {
        id: 'backend',
        name: 'Backend',
        icon: HiServer,
        color: 'from-cyan-500 to-blue-500',
        bgColor: 'from-cyan-50 to-blue-50',
        skills: [
            { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
            { name: 'Express.js', icon: SiExpress, color: '#000000' },
            { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
            { name: 'Python', icon: SiPython, color: '#3776AB' },
        ],
    },
    {
        id: 'databases',
        name: 'Databases',
        icon: HiDatabase,
        color: 'from-pink-500 to-rose-500',
        bgColor: 'from-pink-50 to-rose-50',
        skills: [
            { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
            { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
            { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
        ],
    },
    {
        id: 'tools',
        name: 'Tools & DevOps',
        icon: HiCog,
        color: 'from-orange-500 to-amber-500',
        bgColor: 'from-orange-50 to-amber-50',
        skills: [
            { name: 'Git', icon: SiGit, color: '#F05032' },
            { name: 'GitHub', icon: SiGithub, color: '#181717' },
            { name: 'Docker', icon: SiDocker, color: '#2496ED' },
            { name: 'Vercel', icon: SiVercel, color: '#000000' },
            { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
            { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
        ],
    },
]

const Skills = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })
    const [activeCategory, setActiveCategory] = useState('frontend')

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut' },
        },
    }

    const activeData = skillCategories.find(cat => cat.id === activeCategory)

    return (
        <section id="skills" className="relative overflow-hidden">
            <div className="container-custom">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <h2 className="section-title gradient-text">Skills & Technologies</h2>
                        <p className="section-subtitle">
                            Technologies I've been working with to build amazing products
                        </p>
                    </motion.div>

                    {/* Category Tabs */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap justify-center gap-3 mb-12"
                    >
                        {skillCategories.map((category) => (
                            <motion.button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeCategory === category.id
                                        ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                                        : 'glass-card text-slate-600 hover:text-slate-800'
                                    }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <category.icon className="w-5 h-5" />
                                {category.name}
                            </motion.button>
                        ))}
                    </motion.div>

                    {/* Skills Grid */}
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className={`glass-card rounded-3xl p-8 bg-gradient-to-br ${activeData.bgColor}`}>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                {activeData.skills.map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.08 }}
                                        className="group"
                                    >
                                        <motion.div
                                            className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-white shadow-sm hover:shadow-xl transition-all duration-300 cursor-default"
                                            whileHover={{ scale: 1.08, y: -5 }}
                                        >
                                            <motion.div
                                                className="w-14 h-14 rounded-xl flex items-center justify-center"
                                                style={{ backgroundColor: `${skill.color}15` }}
                                                whileHover={{ rotate: 360 }}
                                                transition={{ duration: 0.6 }}
                                            >
                                                <skill.icon
                                                    className="w-8 h-8"
                                                    style={{ color: skill.color }}
                                                />
                                            </motion.div>
                                            <span className="text-sm font-medium text-slate-700 text-center">
                                                {skill.name}
                                            </span>
                                        </motion.div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* All Skills Overview */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-16 text-center"
                    >
                        <h3 className="text-xl font-semibold text-slate-700 mb-6">All Technologies at a Glance</h3>
                        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                            {skillCategories.flatMap(cat => cat.skills).map((skill, index) => (
                                <motion.div
                                    key={`${skill.name}-${index}`}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                    transition={{ delay: 0.8 + index * 0.03 }}
                                    whileHover={{ scale: 1.1, y: -3 }}
                                    className="skill-badge cursor-default"
                                >
                                    <skill.icon style={{ color: skill.color }} className="w-4 h-4" />
                                    {skill.name}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Skills
