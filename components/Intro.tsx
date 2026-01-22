"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Intro = () => {
  return (
    <div className="relative z-10 text-center px-4 font-nunito flex flex-col items-center justify-center min-h-[60vh]">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-zinc-300 text-sm md:text-base font-medium tracking-[0.2em] uppercase mb-6"
      >
        Hello There, I am
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        className="text-6xl md:text-8xl lg:text-9xl font-light mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-blue-100 to-blue-300"
      >
        <span className="font-semibold block md:inline">
          Deric Navino
        </span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-lg md:text-xl text-blue-100 font-medium mb-12 max-w-lg mx-auto leading-relaxed"
      >
        A Junior <span className="text-white font-bold">Full-Stack Web & Mobile Developer</span>.
        <br />
        <div className="text-indigo-200 font-medium mt-2">
          Based in <span className="text-white font-bold">Indonesia</span>.
        </div>
        
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-6"
      >
        <Link href="/projects">
          <motion.button
            
            whileTap={{ scale: 0.98 }}
            className="px-10 py-4 bg-white text-black font-medium text-sm rounded-full shadow-lg shadow-white/5 transition-colors hover:bg-zinc-200"
          >
            View Projects
          </motion.button>
        </Link>
        <Link href="/contact">
          <motion.button
            
            whileTap={{ scale: 0.98 }}
            className="px-10 py-4 border border-white/20 bg-white/5 backdrop-blur-sm text-white font-medium text-sm rounded-full transition-colors hover:bg-white/10 hover:border-white/40"
          >
            Contact Me
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Intro;
