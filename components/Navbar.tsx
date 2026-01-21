"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 max-w-7xl mx-auto flex justify-between items-center py-6 px-10 font-nunito text-white z-50 pointer-events-auto"
    >
      <div className="text-2xl font-bold tracking-tighter">
        DN.
      </div>
      
      <ul className="flex space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          
          return (
            <li key={link.name} className="relative">
              <Link
                href={link.href}
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
              </Link>
            </li>
          );
        })}
      </ul>
    </motion.nav>
  );
};

export default Navbar;