"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("#home");
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.substring(1));
      let current = activeSection;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = `#${section}`;
          }
        }
      }
      
      if (current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const smoothScrollTo = (targetY: number, duration: number = 800) => {
    const startY = window.scrollY;
    const distance = targetY - startY;
    let startTime: number | null = null;

    const easeInOutCubic = (t: number): number => {
      return t < 0.5
        ? 4 * t * t * t
        : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const step = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeInOutCubic(progress);

      window.scrollTo(0, startY + distance * easedProgress);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    if (pathname !== "/") {
      router.push(`/${href}`);
      setIsOpen(false);
      return;
    }
    
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      smoothScrollTo(y);
    }
    setIsOpen(false);
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 pointer-events-auto"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-6 px-6 md:px-10">
        <Link href="/" className="text-2xl font-bold tracking-tighter relative z-50">
          DN.
        </Link>
        

        <div className="hidden md:flex bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
          <ul className="flex space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              
              return (
                <li key={link.name} className="relative">
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`relative z-10 block px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                      isActive ? "text-black" : "text-zinc-200 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="navbar-indicator"
                        className="absolute inset-0 bg-white rounded-full"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        style={{ zIndex: -1 }}
                      />
                    )}
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative z-50 p-2 text-white hover:bg-white/10 rounded-full transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-24 right-10 w-48 bg-gray-900/30 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden md:hidden"
          >
            <ul className="flex flex-col py-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`block px-6 py-3 text-sm transition-colors ${
                      isActive 
                        ? "bg-white/10 text-white font-bold" 
                        : "text-zinc-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                  </a>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;