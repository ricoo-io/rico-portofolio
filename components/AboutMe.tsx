"use client"

import { motion } from "framer-motion"
import Link from "next/link";

const AboutMe = () => {
    return (
        <section className="font-nunito relative z-10 w-full max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-6 ">
                
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="md:col-span-4 bg-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col justify-center shadow-xl border border-white/20"
                >
                    <motion.h1 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 tracking-tight"
                    >
                        Who I Am
                    </motion.h1>
                    
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-lg text-zinc-300 leading-relaxed space-y-4"
                    >
                        <p>
                            Hello there, I am <span className="text-white font-bold border-b border-blue-400/30 pb-0.5">Deric Navino</span>, an <span className="text-white font-semibold">undergraduate CS Student</span> at <span className="text-white font-semibold">State University Of Jakarta</span>.
                            A junior developer who enjoys creating convenient, useful and beautiful digital experiences.
                        </p>
                        <p>
                            Right now, I'm focused on <span className="text-white font-semibold">Full-Stack Web</span> and <span className="text-white font-semibold flex-nowrap">Mobile App Development</span>. But I'm also deeply interested in <span className="text-white font-semibold">Data Analysis</span> and <span className="text-white font-semibold">Machine Learning</span>.
                        </p>
                    </motion.div>
                </motion.div>

                <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-1 gap-4">
                    {[
                        { label: "Location", value: "Indonesia" },
                        { label: "Experience", value: "2+ Years" },
                        { label: "Focus", value: "Full Stack" },
                        { label: "Status", value: "Available", statusColor: "text-green-400", indicator: true }
                    ].map((item, index) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + (index * 0.1) }}
                            whileHover={{ y: -2, backgroundColor: "rgba(17, 24, 39, 0.8)" }}
                            className="bg-gray-900/50 backdrop-blur-lg border border-white/20 rounded-2xl p-5 flex flex-col items-center justify-center text-center transition-colors"
                        >
                            <span className="text-xs uppercase tracking-widest text-white mb-1">{item.label}</span>
                            <div className={`text-lg font-semibold text-white flex items-center gap-2 ${item.statusColor || ''}`}>
                                {item.indicator && (
                                    <span className="relative flex h-2 w-2">
                                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                    </span>
                                )}
                                {item.value}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="md:col-span-6"
                >
                    <a href="/Deric Navino - CV.pdf" download className="block group">
                        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 hover:from-blue-600/30 hover:to-purple-600/30 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex items-center justify-between transition-all duration-300 group-hover:border-white/20">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1">Interested in working together?</h3>
                                <p className="text-zinc-400 text-sm">Download my resume to see my full professional history.</p>
                            </div>
                            
                            <div className="hidden sm:flex h-12 w-12 bg-white text-black rounded-full items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M12 9.75v8.25m0 0l3-3m-3 3l-3-3" />
                                </svg>
                            </div>
                        </div>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutMe;