import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { HiMail, HiLocationMarker, HiPhone, HiPaperAirplane, HiCheckCircle, HiXCircle } from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Contact = () => {
    const ref = useRef(null)
    const formRef = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })
    const [status, setStatus] = useState({ type: '', message: '' })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setStatus({ type: '', message: '' })

        try {
            // EmailJS configuration
            // Service ID, Template ID, and Public Key need to be set up in EmailJS dashboard
            await emailjs.send(
                'service_3zvd22n', // Your EmailJS Service ID
                'template_kvcmsq6', // Your EmailJS Template ID
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    to_name: 'Kaustubh Shinde',
                },
                'AolFTXouYJTfTkiQK' // Your EmailJS Public Key
            )

            setStatus({
                type: 'success',
                message: 'Message sent successfully! I\'ll get back to you soon.',
            })
            setFormData({ name: '', email: '', subject: '', message: '' })
        } catch (error) {
            console.error('EmailJS Error:', error)
            setStatus({
                type: 'error',
                message: 'Form submission failed. Click below to email directly.',
            })
            // Open mailto as fallback
            setTimeout(() => {
                const mailtoLink = `mailto:kpshinde2003@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`
                window.open(mailtoLink, '_blank')
            }, 1500)
        } finally {
            setIsSubmitting(false)
        }
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

    const contactInfo = [
        {
            icon: HiMail,
            label: 'Email',
            value: 'kpshinde2003@gmail.com',
            href: 'mailto:kpshinde2003@gmail.com',
            color: 'from-violet-500 to-purple-500',
        },
        {
            icon: HiLocationMarker,
            label: 'Location',
            value: 'Vasai, Mumbai, India',
            href: null,
            color: 'from-cyan-500 to-blue-500',
        },
        {
            icon: HiPhone,
            label: 'Phone',
            value: '+91 98236 43294',
            href: 'tel:+919823643294',
            color: 'from-pink-500 to-rose-500',
        },
    ]

    const socials = [
        { icon: FaGithub, href: 'https://github.com/kaustubhshinde', label: 'GitHub', color: 'hover:text-slate-800' },
        { icon: FaLinkedin, href: 'https://linkedin.com/in/kaustubhshinde', label: 'LinkedIn', color: 'hover:text-blue-600' },
        { icon: FaTwitter, href: 'https://twitter.com/kaustubhshinde', label: 'Twitter', color: 'hover:text-sky-500' },
    ]

    return (
        <section id="contact" className="relative overflow-hidden">
            <div className="container-custom">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <h2 className="section-title gradient-text">Get In Touch</h2>
                        <p className="section-subtitle">
                            Have a project in mind or just want to chat? I'd love to hear from you!
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Left Side - Contact Info */}
                        <motion.div variants={itemVariants} className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold font-[Space_Grotesk] text-slate-800 mb-4">
                                    Let's Build Something Amazing Together
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Whether you have a project idea, want to collaborate, or just want to say hello,
                                    I'm always open to new opportunities and connections. Drop me a message and
                                    I'll get back to you as soon as possible!
                                </p>
                            </div>

                            {/* Contact Cards */}
                            <div className="space-y-4">
                                {contactInfo.map((item, index) => (
                                    <motion.div
                                        key={item.label}
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                                        transition={{ delay: 0.5 + index * 0.1 }}
                                        className="group"
                                    >
                                        {item.href ? (
                                            <a
                                                href={item.href}
                                                className="flex items-center gap-4 p-4 rounded-2xl glass-card hover:shadow-lg transition-all duration-300"
                                            >
                                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                                                    <item.icon className="w-6 h-6 text-white" />
                                                </div>
                                                <div>
                                                    <p className="text-sm text-slate-500">{item.label}</p>
                                                    <p className="font-semibold text-slate-800">{item.value}</p>
                                                </div>
                                            </a>
                                        ) : (
                                            <div className="flex items-center gap-4 p-4 rounded-2xl glass-card">
                                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                                                    <item.icon className="w-6 h-6 text-white" />
                                                </div>
                                                <div>
                                                    <p className="text-sm text-slate-500">{item.label}</p>
                                                    <p className="font-semibold text-slate-800">{item.value}</p>
                                                </div>
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                            </div>

                            {/* Social Links */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ delay: 0.8 }}
                            >
                                <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
                                    Connect with me
                                </h4>
                                <div className="flex gap-3">
                                    {socials.map((social) => (
                                        <motion.a
                                            key={social.label}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`p-4 rounded-xl glass-card text-slate-500 ${social.color} transition-all duration-300`}
                                            whileHover={{ scale: 1.1, y: -5 }}
                                            whileTap={{ scale: 0.95 }}
                                            aria-label={social.label}
                                        >
                                            <social.icon className="w-6 h-6" />
                                        </motion.a>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Right Side - Contact Form */}
                        <motion.div variants={itemVariants}>
                            <div className="relative">
                                {/* Gradient Border Effect */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 via-cyan-500 to-pink-500 rounded-3xl opacity-30 blur-sm" />

                                <form
                                    ref={formRef}
                                    onSubmit={handleSubmit}
                                    className="relative glass-card rounded-3xl p-8 space-y-6"
                                >
                                    {/* Name Input */}
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="John Doe"
                                            className="form-input"
                                        />
                                    </div>

                                    {/* Email Input */}
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="john@example.com"
                                            className="form-input"
                                        />
                                    </div>

                                    {/* Subject Input */}
                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            placeholder="Project Inquiry"
                                            className="form-input"
                                        />
                                    </div>

                                    {/* Message Input */}
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            placeholder="Tell me about your project..."
                                            className="form-input resize-none"
                                        />
                                    </div>

                                    {/* Status Message */}
                                    {status.message && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className={`flex items-center gap-2 p-4 rounded-xl ${status.type === 'success'
                                                ? 'bg-green-50 text-green-700 border border-green-200'
                                                : 'bg-red-50 text-red-700 border border-red-200'
                                                }`}
                                        >
                                            {status.type === 'success' ? (
                                                <HiCheckCircle className="w-5 h-5" />
                                            ) : (
                                                <HiXCircle className="w-5 h-5" />
                                            )}
                                            <span className="text-sm font-medium">{status.message}</span>
                                        </motion.div>
                                    )}

                                    {/* Submit Button */}
                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full gradient-btn flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <motion.div
                                                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                                />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <HiPaperAirplane className="w-5 h-5" />
                                                Send Message
                                            </>
                                        )}
                                    </motion.button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact
