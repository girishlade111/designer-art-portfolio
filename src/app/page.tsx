"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/* ─── Animation Variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.17, 0.55, 0.55, 1] },
  },
};

const staggerParent = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const staggerChild = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.17, 0.55, 0.55, 1] },
  },
};

/* ─── Data ─── */
const projects = [
  {
    name: "REFLECTIONS",
    category: "3D DESIGN",
    image: "/images/reflections.png",
  },
  {
    name: "RELATION",
    category: "ART DIRECTION",
    image: "/images/relation.png",
  },
  {
    name: "GREY SPACE",
    category: "3D DESIGN",
    image: "/images/grey-space.png",
  },
  {
    name: "BUY HEJ",
    category: "3D DESIGN",
    image: "/images/buy-hej.png",
  },
  {
    name: "REACT",
    category: "3D DESIGN",
    image: "/images/react.png",
  },
  {
    name: "BUBBLE INTRODUCTION",
    category: "BRAND IDENTITY",
    image: "/images/bubble-introduction.png",
  },
];

const footerLinks = {
  col1: [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
  ],
  col2: [
    { label: "X (Twitter)", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],
  col3: [
    { label: "Buy templates", href: "#" },
    { label: "More templates", href: "#" },
  ],
};

const footerPills = ["About", "Services", "Portfolio", "Contact", "Blog"];

/* ─── Page ─── */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#000000] text-white overflow-x-hidden selection:bg-white/15">
      {/* ────────── HERO ────────── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full pt-32 lg:pt-48 pb-24">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 lg:gap-8">
          {/* Big heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.17, 0.55, 0.55, 1] }}
            className="uppercase leading-[0.9] tracking-[-0.04em] shrink-0"
            style={{
              fontSize: "clamp(3.5rem, 12vw, 10rem)",
              fontWeight: 700,
            }}
          >
            DESIGNER
            <br />
            AND ART
            <br />
            DIRECTOR
          </motion.h1>

          {/* Bio + portrait + link */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
              ease: [0.17, 0.55, 0.55, 1],
            }}
            className="lg:max-w-sm lg:text-right flex flex-col lg:items-end gap-6"
          >
            <div className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden shrink-0 lg:ml-auto">
              <Image
                src="/images/hero-portrait.png"
                alt="Jordan — Designer & Art Director"
                fill
                className="object-cover"
                sizes="160px"
              />
            </div>
            <p
              className="text-[#a1a1a1] text-[1.125rem] leading-relaxed max-w-[45ch] font-normal"
            >
              Hey I&apos;m Jordan. An experienced designer and art director.
              I&apos;m passionate about creativity and have a keen eye for
              detail. My work spans various mediums, blending artistry with
              strategic thinking to create impactful designs.
            </p>
            <motion.a
              href="#"
              whileHover={{ opacity: 0.7 }}
              transition={{ duration: 0.25 }}
              className="text-white text-sm uppercase tracking-[0.05em] font-medium hover:text-[#cccccc] transition-colors inline-block"
            >
              MORE ABOUT ME →
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ────────── SELECTED WORK ────────── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full py-32">
        {/* Section heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="uppercase leading-none font-bold mb-16 tracking-[-0.02em]"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
        >
          SELECTED
          <br />
          WORK
        </motion.h2>

        {/* Project grid */}
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 md:gap-y-16"
        >
          {projects.map((project) => (
            <motion.div key={project.name} variants={staggerChild} className="flex flex-col group">
              {/* Project image */}
              <div className="rounded-xl overflow-hidden relative aspect-[4/3]">
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </motion.div>
              </div>

              {/* Caption */}
              <div className="flex justify-between items-center pt-4">
                <span className="text-white font-bold uppercase text-[1.125rem] tracking-[0.05em]">
                  {project.name}
                </span>
                <span className="text-[#a1a1a1] font-normal uppercase text-[0.875rem] tracking-[0.05em]">
                  {project.category}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ────────── CTA ────────── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full py-40">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="flex flex-col items-center text-center"
        >
          <h2
            className="uppercase leading-none font-bold"
            style={{
              fontSize: "clamp(2.5rem, 8vw, 7rem)",
              letterSpacing: "-0.04em",
            }}
          >
            LET&apos;S MAKE
            <br />
            SOMETHING GREAT
          </h2>
          <motion.a
            href="#"
            whileHover={{ opacity: 0.7 }}
            transition={{ duration: 0.25 }}
            className="mt-8 text-white text-lg uppercase tracking-[0.05em] font-medium hover:text-[#cccccc] transition-colors inline-block"
          >
            CONTACT →
          </motion.a>
        </motion.div>
      </section>

      {/* ────────── FOOTER ────────── */}
      <footer className="mt-auto max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full pt-32 pb-12 border-t border-white/10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Link columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {/* Column 1 */}
            <nav className="flex flex-col gap-3" aria-label="Main navigation">
              {footerLinks.col1.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{ opacity: 0.7 }}
                  transition={{ duration: 0.2 }}
                  className="text-white text-sm hover:text-[#cccccc] transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            {/* Column 2 */}
            <nav className="flex flex-col gap-3" aria-label="Social links">
              {footerLinks.col2.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{ opacity: 0.7 }}
                  transition={{ duration: 0.2 }}
                  className="text-white text-sm hover:text-[#cccccc] transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            {/* Column 3 */}
            <nav className="flex flex-col gap-3" aria-label="Template links">
              {footerLinks.col3.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{ opacity: 0.7 }}
                  transition={{ duration: 0.2 }}
                  className="text-white text-sm hover:text-[#cccccc] transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            {/* Column 4 — Copyright */}
            <div className="flex flex-col gap-3 justify-end md:text-right">
              <p className="text-[#a1a1a1] text-xs leading-relaxed">
                © 2024 Jordan.
                <br />
                All rights reserved.
              </p>
            </div>
          </div>

          {/* Bottom pills */}
          <div className="flex flex-wrap gap-2">
            {footerPills.map((pill) => (
              <button
                key={pill}
                type="button"
                className="rounded-full border border-white/20 px-4 py-1 text-[10px] uppercase text-white/70 hover:text-white hover:border-white/40 transition-colors cursor-pointer"
              >
                {pill}
              </button>
            ))}
          </div>
        </motion.div>
      </footer>
    </div>
  );
}
