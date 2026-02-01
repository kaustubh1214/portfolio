import { motion } from 'framer-motion'
import { HiHeart, HiArrowUp } from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ]

    const socials = [
        { icon: FaGithub, href: 'https://github.com/kaustubhshinde', label: 'GitHub' },
        { icon: FaLinkedin, href: 'https://linkedin.com/in/kaustubhshinde', label: 'LinkedIn' },
        { icon: FaTwitter, href: 'https://twitter.com/kaustubhshinde', label: 'Twitter' },
    ]

    return (
        <footer className="relative overflow-hidden">
            {/* Top Gradient Border */}
            <div className="h-1 bg-gradient-to-r from-violet-500 via-cyan-500 to-pink-500" />

            <div className="glass py-12">
                <div className="container-custom">
                    <div className="grid md:grid-cols-3 gap-8 items-center mb-8">
                        {/* Logo & Description */}
                        <div className="text-center md:text-left">
                            <motion.a
                                href="#home"
                                className="inline-flex items-center gap-2 mb-4"
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 via-cyan-500 to-pink-500 flex items-center justify-center shadow-lg">
                                    <span className="text-white font-bold text-lg font-[Space_Grotesk]">K</span>
                                </div>
                                <span className="text-xl font-bold font-[Space_Grotesk] gradient-text">
                                    Kaustubh Shinde
                                </span>
                            </motion.a>
                            <p className="text-slate-500 text-sm">
                                Full-Stack Developer & AI Builder crafting digital experiences that matter.
                            </p>
                        </div>

                        {/* Navigation Links */}
                        <div className="flex flex-wrap justify-center gap-4">
                            {navLinks.map((link) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm text-slate-500 hover:text-violet-600 transition-colors"
                                    whileHover={{ y: -2 }}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="flex justify-center md:justify-end gap-3">
                            {socials.map((social) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-xl glass-card text-slate-500 hover:text-violet-600 transition-all duration-300"
                                    whileHover={{ scale: 1.1, y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-8" />

                    {/* Bottom Section */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-slate-500 text-center md:text-left">
                            © {new Date().getFullYear()} Kaustubh Shinde. All rights reserved.
                        </p>

                        <p className="flex items-center gap-1 text-sm text-slate-500">
                            Made with{' '}
                            <motion.span
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 1, repeat: Infinity }}
                            >
                                <HiHeart className="w-4 h-4 text-pink-500" />
                            </motion.span>
                            {' '}using React & Tailwind CSS
                        </p>
                    </div>
                </div>
            </div>

            {/* Scroll to Top Button */}
            <motion.button
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 p-4 rounded-full gradient-btn shadow-xl z-50"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Scroll to top"
            >
                <HiArrowUp className="w-5 h-5" />
            </motion.button>
        </footer>
    )
}

export default Footer
