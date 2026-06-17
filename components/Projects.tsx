"use client"

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { getTechLink } from "@/lib/techLinks";

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
        documentation: string;
    };
}

const projectsData: Project[] = [
    {
        id: 1,
        title: "SIM-Sekolah",
        category: "Full-stack Web Development",
        description: "SIM-Sekolah is an end-to-end educational management platform designed to digitize and automate core academic administrative workflows, from student records to grading systems.",
        details: "Developed collaboratively in a 2-person team (Oct - Dec 2025), I contributed across the entire full-stack spectrum—from conceptualizing the database architecture to implementing dynamic frontend interfaces. The system utilizes React (TypeScript) for a highly responsive UI, and Express.js with MySQL for reliable data handling. A standout feature is the granular Role-Based Access Control (RBAC) implementation, which intelligently scopes data access and system permissions based on user roles (Teachers vs. Administrators). I also engineered an automated grading module that dynamically calculates student performance metrics, significantly reducing manual administrative overhead.",
        image: "/project-documentation/sim-sekolah/dashboardAdmin.png",
        techStack: ["React", "TypeScript", "Express.js", "MySQL"],
        links: {
            demo: "#",
            github: "#",
            documentation: "/projects/sim-sekolah"
        }
    },
    {
        id: 2,
        title: "VZ.ID",
        category: "E-Commerce Web",
        description: "VZ.ID is a premium, high-performance e-commerce storefront crafted to deliver a frictionless online shopping experience, featuring a dynamic product catalog and robust cart system.",
        details: "Serving as the Backend Developer in a 4-person team (Jun - Jul 2025), my primary focus was architecting a scalable database and writing secure, efficient server-side logic using PHP. I engineered the core transactional features of the platform, including real-time cart state management, product filtering algorithms, and wishlist synchronization. By working closely with the frontend team, we successfully integrated these backend services to a polished HTML/CSS and JavaScript interface. The resulting architecture ensures fast product queries and guarantees data integrity during user checkouts, establishing a solid foundation for digital retail.",
        image: "/project-documentation/vz-id/home_1.png",
        techStack: ["HTML", "CSS", "PHP", "JavaScript"],
        links: {
            demo: "#",
            github: "#",
            documentation: "/projects/vz-id"
        }
    },
    {
        id: 3,
        title: "Simple Billiard Game",
        category: "Desktop Application",
        description: "Simple Billiard Game is a 2D physics-based billiard simulation application designed to deliver realistic gameplay mechanics, ball-to-ball elastic collisions, and clean graphical rendering in a desktop environment.",
        details: "Developed collaboratively in a 4-person team, I served as the Backend Developer focusing primarily on the game's core physics and logic engine. Written in C++ using the SFML library, my main contributions included implementing accurate collision mechanics, momentum transfer, and bounce physics to ensure a realistic billiard experience. I also engineered the foundational game rules, state management, and integrated sound effects to enhance the overall gameplay feedback loop, demonstrating solid object-oriented design and mathematical application in a gaming context.",
        image: "/project-documentation/billiard/gameStart.png",
        techStack: ["C++", "SFML"],
        links: {
            demo: "#",
            github: "#",
            documentation: "/projects/simple-billiard-game"
        }
    },
    {
        id: 4,
        title: "PanDana",
        category: "Mobile Application",
        description: "PanDana is a premium personal finance companion mobile application that helps users monitor their balance, record income and expenses, analyze transaction history, and visualize budget distribution.",
        details: "Developed collaboratively in a 3-person team (Dec 2025), I served a key role in engineering the backend features for the core personal finance management system. This involved architecting robust data models and CRUD operations that enable users to seamlessly log, edit, and delete their daily income and expense data. Furthermore, I developed comprehensive data visualization components including interactive charts and graphs to help users effectively monitor and analyze their expense percentages across customizable daily, weekly, monthly, and yearly intervals. The application integrates modern Android technologies like Kotlin and Jetpack Compose to deliver a premium, analytics-driven user experience.",
        image: "/project-documentation/pandana/profile.png",
        techStack: ["Kotlin", "Jetpack Compose", "Android Studio", "Room Database (SQLite)", "Material Design 3"],
        links: {
            demo: "#",
            github: "#",
            documentation: "/projects/pandana"
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
            className="group flex flex-col md:flex-row bg-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-colors shadow-lg"
        >
            {/* Image Section */}
            <div className="relative w-full md:w-5/12 lg:w-1/2 h-64 md:h-auto overflow-hidden flex-shrink-0 bg-black/30 flex items-center justify-center">
                <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-contain p-4 md:p-8 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-gray-900 via-gray-900/10 to-transparent opacity-60 pointer-events-none" />

                <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 text-xs font-semibold tracking-wide text-white bg-white/10 backdrop-blur-md border border-white/10 rounded-full shadow-md">
                        {project.category}
                    </span>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>

                <p className="text-zinc-400 mb-4">
                    {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                        <a
                            key={tech}
                            href={getTechLink(tech)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-blue-300 bg-blue-500/10 hover:bg-blue-500/20 px-2.5 py-1 rounded-md border border-blue-500/20 transition-colors"
                        >
                            {tech}
                        </a>
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
                <div className="flex flex-col gap-4 mt-auto">
                    <div className="flex items-center justify-between">
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

                    {/* Documentation Link */}
                    <a
                        href={project.links.documentation}
                        className="w-full text-center py-2.5 mt-2 rounded-xl text-sm font-semibold bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all duration-300"
                    >
                        View Full Documentation
                    </a>
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

            <div className="flex flex-col gap-12 max-w-5xl mx-auto">
                {projectsData.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
