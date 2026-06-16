"use client"

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";

interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    details: string;
    image: string;
    techStack: string[];
    links: {
        demo: string;
        github: string;
    };
}

const projectsData: Project[] = [
    {
        id: 1,
        title: "Nexus Finance Dashboard",
        category: "Web Application",
        description: "A comprehensive crypto and stock trading visualization platform with real-time data integration.",
        details: "Nexus Finance is a high-performance dashboard built for traders who need real-time data visualization. It features interactive candlestick charts, live portfolio tracking, and instant market analysis tools. The app uses WebSockets for real-time updates and includes a dark-mode optimized UI for reduced eye strain during long trading sessions.",
        image: "/project_finance.png",
        techStack: ["React", "TypeScript", "Tailwind CSS", "Recharts", "Node.js"],
        links: {
            demo: "#",
            github: "#"
        }
    },
    {
        id: 2,
        title: "Aurora E-Commerce",
        category: "Web Application",
        description: "Modern e-commerce platform with a focus on minimalist design and seamless user experience.",
        details: "Aurora is a fully functional e-commerce storefront designed with a 'content-first' approach. It features a custom shopping cart implementation, stripe payment integration, and a CMS-backed product management system. The design emphasizes whitespace and high-quality imagery to increase conversion rates.",
        image: "/project_ecommerce.png",
        techStack: ["Next.js", "Stripe", "Sanity CMS", "Framer Motion"],
        links: {
            demo: "#",
            github: "#"
        }
    },
    {
        id: 3,
        title: "Stride Mobile App",
        category: "Mobile App",
        description: "Social fitness tracking application allowing users to compete in challenges and track workouts.",
        details: "Stride brings the social aspect to fitness tracking. Users can join weekly challenges, share running routes, and track their progress with detailed analytics. Built with React Native, it offers a native-like experience on both iOS and Android, including GPS tracking background services and push notifications.",
        image: "/project_mobile.png",
        techStack: ["React Native", "Firebase", "Redux", "Google Maps API"],
        links: {
            demo: "#",
            github: "#"
        }
    }
];

const ProjectCard = ({ project }: { project: Project }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="group bg-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-colors shadow-lg"
        >
            {/* Image Section */}
            <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80" />

                <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-xs font-semibold tracking-wide text-white bg-white/10 backdrop-blur-md border border-white/10 rounded-full">
                        {project.category}
                    </span>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>

                <p className="text-zinc-400 mb-4 line-clamp-2">
                    {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                        <span
                            key={tech}
                            className="text-xs text-blue-300 bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-500/20"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Expandable Details */}
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                        >
                            <p className="text-zinc-300 text-sm leading-relaxed mb-6 pt-2 border-t border-white/5">
                                {project.details}
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Actions */}
                <div className="flex items-center justify-between mt-auto">
                    <div className="flex gap-4">
                        <a href={project.links.github} className="text-zinc-400 hover:text-white transition-colors" title="View Code">
                            <FaGithub size={20} />
                        </a>
                        <a href={project.links.demo} className="text-zinc-400 hover:text-white transition-colors" title="Live Demo">
                            <FaExternalLinkAlt size={18} />
                        </a>
                    </div>

                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                    >
                        {isExpanded ? "Show Less" : "Read More"}
                        {isExpanded ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section className="font-nunito relative z-10 w-full max-w-6xl mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
                    Featured Projects
                </h2>
                <p className="text-zinc-400 max-w-2xl mx-auto">
                    A collection of work that showcases my passion for building clean, performant, and user-centric digital experiences.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                {projectsData.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
