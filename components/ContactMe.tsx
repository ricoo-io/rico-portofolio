import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope, FaPaperPlane, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";

const ContactMe = () => {

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const socialLinks = [
        {
        name: "GitHub",
        href: "https://github.com/ricoo-io",
        icon: FaGithub,
        color: "hover:text-white",
        },
        {
        name: "LinkedIn",
        href: "https://linkedin.com/in/deric-navino", 
        icon: FaLinkedin,
        color: "hover:text-blue-400",
        },
        {
        name: "Instagram",
        href: "https://www.instagram.com/dericnavino/",
        icon: FaInstagram,
        color: "hover:text-pink-400",
        },
    ];

    return (
        <div className="min-h-screen pt-24 pb-12 px-6 flex items-center justify-center font-nunito">
            <div className="w-full max-w-4xl flex justify-center items-center">     
                <motion.div 
                initial="hidden"
                animate="visible"
                variants={{
                    visible: { transition: { staggerChildren: 0.1 } }
                }}
                className="bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col justify-center w-full max-w-2xl"
                >
                <motion.div variants={fadeInUp}>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight text-center">
                    Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">Touch</span>
                    </h1>
                    <p className="text-zinc-200 text-lg leading-relaxed mb-10 text-center">
                    Have a project in mind or just want to say hi? I'm always open to discuss new projects, creative ideas or opportunities.
                    </p>
                </motion.div>

                <motion.div variants={fadeInUp} className="space-y-8 max-w-lg mx-auto w-full">
                    <div className="flex items-center space-x-5 text-white">
                    <div className="w-14 h-14 flex flex-shrink-0 items-center justify-center rounded-full bg-blue-500/20 border border-blue-400/20 backdrop-blur-md">
                        <FaEnvelope className="text-2xl text-blue-200" />
                    </div>
                    <div>
                        <p className="text-sm text-blue-200 font-semibold uppercase tracking-wider mb-1">Email Me</p>
                        <a href="mailto:dericnavino@gmail.com" className="text-xl md:text-2xl font-bold hover:text-blue-300 transition-colors">
                        dericnavino.10@gmail.com
                        </a>
                    </div>
                    </div>

                    <div className="flex items-center space-x-5 text-white">
                    <div className="w-14 h-14 flex flex-shrink-0 items-center justify-center rounded-full bg-pink-500/20 border border-pink-400/20 backdrop-blur-md">
                        <FaMapMarkerAlt className="text-2xl text-pink-200" />
                    </div>
                    <div>
                        <p className="text-sm text-pink-200 font-semibold uppercase tracking-wider mb-1">Location</p>
                        <p className="text-xl md:text-2xl font-bold">Indonesia</p>
                    </div>
                    </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="mt-12 text-center">
                    <p className="text-sm text-zinc-300 font-semibold uppercase tracking-wider mb-4">Connect on Socials</p>
                    <div className="flex gap-4 justify-center">
                    {socialLinks.map((link) => (
                        <Link
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-14 h-14 flex items-center justify-center rounded-full bg-white/10 border border-white/10 backdrop-blur-md text-white transition-all duration-300 transform hover:scale-110 hover:border-white/30 hover:bg-white/20 ${link.color}`}
                        >
                        <link.icon size={26} />
                        </Link>
                    ))}
                    </div>
                </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default ContactMe;
