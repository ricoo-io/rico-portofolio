"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope, FaPaperPlane, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";
import ContactMe from "@/components/ContactMe";

export default function Contact() {
    return (
    <div className="flex min-h-screen items-center justify-center">
      <ContactMe/>
    </div>
  );
}
