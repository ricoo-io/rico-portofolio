"use client";

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/ricoo-io",
      icon: FaGithub,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/deric-navino-79b505306?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3By5fVo7csTAKH0%2F3z%2BduX7g%3D%3D",
      icon: FaLinkedin,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/dericnavino/",
      icon: FaInstagram,
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      className="fixed bottom-6 left-0 right-0 flex justify-center items-center z-40 pointer-events-none"
    >
      <div className="flex items-center gap-6 px-6 py-3 bg-white/5 backdrop-blur-md rounded-full border border-white/10 shadow-lg pointer-events-auto">
        {socialLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
            aria-label={link.name}
          >
            <link.icon size={24} />
          </Link>
        ))}
      </div>
    </motion.footer>
  );
};

export default Footer;
