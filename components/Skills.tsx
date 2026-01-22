"use client";

import { motion } from "framer-motion";
import { 
  SiKotlin, SiJetpackcompose, SiAndroidstudio, SiMaterialdesignicons,
  SiHtml5, SiCss3, SiReact, SiTailwindcss, SiTypescript, SiLaravel, SiMysql, SiExpress, SiNextdotjs,
  SiCplusplus, SiPython, SiJavascript,
  SiGit, SiGithub, SiFigma
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const Skills = () => {
    const skillCategories = [
        {
            title: "Mobile Development",
            skills: [
                { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
                { name: "Jetpack Compose", icon: SiJetpackcompose, color: "#4285F4" },
                { name: "Android Studio", icon: SiAndroidstudio, color: "#3DDC84" },
                { name: "Material Design", icon: SiMaterialdesignicons, color: "#757575" },
            ]
        },
        {
            title: "Web Development",
            skills: [
                { name: "HTML", icon: SiHtml5, color: "#E34F26" },
                { name: "CSS", icon: SiCss3, color: "#1572B6" },
                { name: "React", icon: SiReact, color: "#61DAFB" },
                { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
                { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
                { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
                { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
                { name: "MySQL", icon: SiMysql, color: "#4479A1" },
                { name: "Express", icon: SiExpress, color: "#FFFFFF" },
            ]
        },
        {
            title: "Programming Languages",
            skills: [
                { name: "C++", icon: SiCplusplus, color: "#00599C" },
                { name: "Python", icon: SiPython, color: "#3776AB" },
                { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
            ]
        },
        {
            title: "Tools & Design",
            skills: [
                { name: "Git", icon: SiGit, color: "#F05032" },
                { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
                { name: "VS Code", icon: VscVscode, color: "#007ACC" },
                { name: "Figma", icon: SiFigma, color: "#F24E1E" },
                { name: "Android Studio", icon: SiAndroidstudio, color: "#3DDC84" },
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section className="font-nunito relative z-10 w-full max-w-6xl mx-auto px-4 py-8">
            <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-200"
            >
                My Skills & Tech Stack
            </motion.h1>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
                {skillCategories.map((category, idx) => (
                    <motion.div 
                        key={idx}
                        variants={itemVariants}
                        className="bg-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-white/20 transition-colors duration-300"
                    >
                        <h3 className="text-xl font-semibold text-blue-100 mb-6 border-b border-white/10 pb-2 inline-block">
                            {category.title}
                        </h3>
                        
                        <div className="flex flex-wrap gap-4">
                            {category.skills.map((skill, sIdx) => (
                                <div 
                                    key={sIdx}
                                    className="group flex flex-col items-center gap-2 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 transition-all duration-300 min-w-[80px]"
                                    style={{ "--skill-color": skill.color } as React.CSSProperties}
                                >
                                    <skill.icon 
                                        className="text-3xl text-zinc-400 transition-colors duration-300 group-hover:text-[var(--skill-color)]" 
                                    />
                                    <span className="text-xs text-zinc-400 group-hover:text-white transition-colors duration-300 font-medium">
                                        {skill.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Skills;
