"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SocialIcons from "@/components/SocialIcons";
import {
  FaUser,
  FaEnvelope,
  FaProjectDiagram,
  FaMoneyBillWave,
  FaCommentDots,
  FaGlobe,
  FaTools,
  FaLocationArrow,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { MdEmail, MdWork, MdWeb } from "react-icons/md";
import { IconType } from "react-icons";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

function GridBG() {
  // Soft, subtle SVG grid lines, covers the viewport, does not interfere visually
  // Responsive pattern: thin grid every 32px, lighter color.
  return (
    <svg
      className="pointer-events-none absolute inset-0 w-full h-full opacity-30"
      style={{ zIndex: 0 }}
      width="100%"
      height="100%"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="smallGrid"
          width="32"
          height="32"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 32 0 L 0 0 0 32"
            fill="none"
            stroke="#ffffff1d"
            strokeWidth="1"
          />
        </pattern>
        <pattern id="grid" width="64" height="64" patternUnits="userSpaceOnUse">
          <rect width="64" height="64" fill="url(#smallGrid)" />
          <path
            d="M 64 0 L 0 0 0 64"
            fill="none"
            stroke="#ffffff1d"
            strokeWidth="1.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  );
}

// --- Icon Data Arrays ---

const headlineIcons = [
  {
    Icon: FaEnvelope,
    className: "text-pink-500",
    label: "Contact Mohammadali Dhanga",
    text: "Contact Mohammadali Dhanga",
  },
  {
    Icon: FaProjectDiagram,
    className: "text-blue-500",
    label: "Let's build your next experience",
    text: `Let's build your next experience`,
  },
  {
    Icon: FaLocationArrow,
    className: "text-green-500",
    label: "Location",
    text: `I'm Mohammadali Dhanga, a MERN Stack Developer based in Gandhinagar, India.`,
  },
];

const formFields = [
  {
    label: "Name",
    icon: FaUser,
    iconClass: "text-orange-500",
    type: "text",
    placeholder: "Your name",
  },
  {
    label: "Email",
    icon: MdEmail,
    iconClass: "text-pink-600",
    type: "email",
    placeholder: "you@example.com",
  },
  {
    label: "Project Type",
    icon: FaProjectDiagram,
    iconClass: "text-purple-500",
    type: "text",
    placeholder: "Website, SaaS, mobile, e-commerce...",
  },
  {
    label: "Budget (optional)",
    icon: FaMoneyBillWave,
    iconClass: "text-emerald-500",
    type: "text",
    placeholder: "Range or expectation",
  },
];

const serviceIcons = [
  {
    Icon: FaProjectDiagram,
    className: "text-purple-500",
    text: "MERN & Next.js development",
  },
  { Icon: FaGlobe, className: "text-cyan-500", text: "UI/UX design for web" },
  {
    Icon: FaMoneyBillWave,
    className: "text-emerald-500",
    text: "E-commerce & platforms",
  },
  {
    Icon: FaCommentDots,
    className: "text-sky-500",
    text: "Performance & accessibility",
  },
];

// --- End icon data arrays ---

export default function Contact() {
  return (
    <main className="relative overflow-hidden min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 pt-24 sm:pt-28 lg:pt-32">
      <GridBG />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ zIndex: 1 }}
      >
        <motion.div
          className="absolute inset-8 rounded-3xl border border-white/5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.35 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.05),_transparent_45%)]" />
      </div>

      <motion.div
        className="relative max-w-5xl mx-auto space-y-10 sm:space-y-14 lg:space-y-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ zIndex: 2 }}
      >
        <div className="space-y-4 sm:space-y-6 text-center">
          <motion.p
            className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-white/10 bg-white/5 text-xs sm:text-sm uppercase tracking-[0.18em] text-gray-300"
            variants={itemVariants}
          >
            <AnimatedShinyText className="inline-flex items-center justify-center gap-2 px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300">
              <FaEnvelope className="text-pink-500" /> Contact Mohammadali
              Dhanga
            </AnimatedShinyText>
          </motion.p>
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white flex justify-center items-center gap-2"
            variants={itemVariants}
          >
            <FaProjectDiagram className="text-blue-500" />
            Let&apos;s build your next experience
          </motion.h1>
          <motion.p
            className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto flex items-center justify-center gap-2"
            variants={itemVariants}
            style={{
              fontFamily:
                "Menlo, Monaco, 'Fira Mono', 'Liberation Mono', 'Courier New', monospace",
            }}
          >
            {/* <FaLocationArrow className="text-green-500" /> */}
            I&apos;m Mohammadali Dhanga, a MERN Stack Developer based in
            Gandhinagar, India.
          </motion.p>
          {/* 
          // Alternatively, using array (if you want to loop through)
          {headlineIcons.map(({ Icon, className, text }, idx) =>
            idx === 1 ? (
              <motion.h1
                key={idx}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white flex justify-center items-center gap-2"
                variants={itemVariants}
              >
                <Icon className={className} />
                {text}
              </motion.h1>
            ) : idx === 0 ? (
              <motion.p
                key={idx}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-white/10 bg-white/5 text-xs sm:text-sm uppercase tracking-[0.18em] text-gray-300"
                variants={itemVariants}
              >
                <Icon className={className} />
                {text}
              </motion.p>
            ) : (
              <motion.p
                key={idx}
                className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto flex items-center justify-center gap-2"
                variants={itemVariants}
              >
                <Icon className={className} />
                {text}
              </motion.p>
            )
          )}
          */}
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          <motion.div
            className="lg:col-span-2 p-5 sm:p-7 rounded-2xl border border-white/10 bg-white/5 backdrop-blur space-y-4 sm:space-y-5"
            variants={itemVariants}
          >
            <h2 className="text-lg sm:text-xl font-display font-bold text-white flex items-center gap-2">
              <MdWork className="text-yellow-500" />
              Project Inquiry
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 flex items-center gap-2 ">
              {/* <FaCommentDots className="text-sky-500" /> */}
              Share a bit about your project. I respond within 1–2 business
              days.
            </p>
            <form className="space-y-4 sm:space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                {formFields.slice(0, 2).map((field, idx) => (
                  <label
                    key={field.label}
                    className="flex flex-col gap-2 text-sm text-gray-200"
                  >
                    <span className="flex items-center gap-1">
                      <field.icon className={field.iconClass} /> {field.label}
                    </span>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      style={{
                        fontFamily:
                          "Menlo, Monaco, 'Fira Mono', 'Liberation Mono', 'Courier New', monospace",
                      }}
                      className="w-full rounded-lg bg-black/40 border border-white/15 px-3 py-2 sm:py-3 text-white placeholder:text-gray-500 focus:border-white/40 focus:outline-none"
                    />
                  </label>
                ))}
              </div>
              {formFields.slice(2).map((field, idx) => (
                <label
                  key={field.label}
                  className="flex flex-col gap-2 text-sm text-gray-200"
                >
                  <span className="flex items-center gap-1">
                    <field.icon className={field.iconClass} /> {field.label}
                  </span>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    style={{
                      fontFamily:
                        "Menlo, Monaco, 'Fira Mono', 'Liberation Mono', 'Courier New', monospace",
                    }}
                    className="w-full rounded-lg bg-black/40 border border-white/15 px-3 py-2 sm:py-3 text-white placeholder:text-gray-500 focus:border-white/40 focus:outline-none"
                  />
                </label>
              ))}
              <label className="flex flex-col gap-2 text-sm text-gray-200">
                <span className="flex items-center gap-1">
                  <FaCommentDots className="text-sky-500" /> Message
                </span>
                <textarea
                  style={{
                    fontFamily:
                      "Menlo, Monaco, 'Fira Mono', 'Liberation Mono', 'Courier New', monospace",
                  }}
                  rows={4}
                  placeholder="Project goals, timelines, and any links to share."
                  className="w-full rounded-lg bg-black/40 border border-white/15 px-3 py-2 sm:py-3 text-white placeholder:text-gray-500 focus:border-white/40 focus:outline-none"
                />
              </label>
              <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                <p className="text-xs sm:text-sm text-gray-400 flex items-center gap-1">
                  {/* <FaEnvelope className="text-pink-500" /> */}
                  By sending, you agree to be contacted about your inquiry.
                </p>
                <button
                  type="submit"
                  className="inline-flex justify-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-white text-black font-semibold text-sm sm:text-base hover:bg-gray-200 transition-colors duration-200 gap-2 items-center"
                >
                  <FaEnvelope className="text-pink-500" />
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>

          <motion.div
            className="w-full max-w-sm mx-auto md:mx-0 md:w-96 bg-[#16181a] border border-[#222327] rounded-xl shadow-lg p-6 flex flex-col gap-6"
            variants={itemVariants}
          >
            {/* Header Section */}
            <div className="flex flex-col gap-1.5">
              {/* <div className="flex items-center gap-2">
                <FaEnvelope className="text-pink-500 text-base" />
                <span className="uppercase text-gray-400 text-xs tracking-wider font-semibold">Contact</span>
              </div> */}
              <div className="flex items-center gap-2 mt-1">
                <FaUser className="text-orange-500 text-lg" />
                <h3 className="text-lg font-display font-bold text-white">
                  Direct details
                </h3>
              </div>
              <div className="flex flex-col gap-2 mt-1">
                <span className="block text-gray-400 text-xs uppercase tracking-wide font-semibold mb-0.5">
                  Location
                </span>
                {/* <FaGlobe className="text-cyan-500 text-base" /> */}
                <span
                  className="text-gray-300"
                  style={{
                    fontFamily:
                      "Menlo, Monaco, 'Fira Mono', 'Liberation Mono', 'Courier New', monospace",
                  }}
                >
                  Gandhinagar, Gujarat, India
                </span>
              </div>
            </div>

            {/* Direct Details Section */}
            <div className="flex flex-col gap-5 text-sm text-gray-200">
              {/* Email */}
              <div className="flex items-center gap-3">
                {/* <MdEmail className="text-pink-600 text-lg" /> */}
                <div>
                  <span className="block text-gray-400 text-xs uppercase tracking-wide font-semibold mb-0.5">
                    Email
                  </span>
                  <Link
                    href="mailto:malidhanga@gmail.com"
                    className="text-white hover:underline flex items-center gap-2"
                    style={{
                      fontFamily:
                        "Menlo, Monaco, 'Fira Mono', 'Liberation Mono', 'Courier New', monospace",
                    }}
                  >
                    malidhanga@gmail.com
                  </Link>
                </div>
              </div>
              {/* Portfolio */}
              <div className="flex items-center gap-3">
                {/* <MdWeb className="text-blue-600 text-lg" /> */}
                <div>
                  <span className="block text-gray-400 text-xs uppercase tracking-wide font-semibold mb-0.5">
                    Portfolio
                  </span>
                  <Link
                    href="https://mohammadali.com"
                    className="text-white hover:underline flex items-center gap-2"
                    style={{
                      fontFamily:
                        "Menlo, Monaco, 'Fira Mono', 'Liberation Mono', 'Courier New', monospace",
                    }}
                  >
                    {/* <FaExternalLinkAlt className="text-green-500 text-sm" /> */}
                    mohammadali.eth
                  </Link>
                </div>
              </div>
              {/* Social */}
              <div className="flex items-center gap-3">
                {/* <FaTools className="text-yellow-600 text-lg" /> */}
                <div>
                  <span className="block text-gray-400 text-xs uppercase tracking-wide font-semibold">
                    Social
                  </span>
                  <div>
                    <SocialIcons />
                  </div>
                </div>
              </div>
            </div>

            {/* Services Section */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                {/* <FaTools className="text-yellow-600 text-lg" /> */}
                <span className="text-gray-400 text-xs uppercase tracking-wide font-semibold">
                  Services
                </span>
              </div>
              <ul
                className="space-y-2 text-sm text-gray-200 mt-1"
                style={{
                  fontFamily:
                    "Menlo, Monaco, 'Fira Mono', 'Liberation Mono', 'Courier New', monospace",
                }}
              >
                {serviceIcons.map(({ Icon, className, text }) => (
                  <li key={text} className="flex items-center gap-3">
                    <Icon className={`${className} text-base`} />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}
