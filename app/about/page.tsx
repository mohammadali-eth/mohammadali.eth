"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiTailwindcss,
  SiFramer,
  SiGit,
  SiWeb3Dotjs,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiReactivex,
  SiAdobe,
  SiWordpress,
  SiHiveBlockchain,
  SiHackthebox,
  SiCoursera,
  SiProtools,
} from "react-icons/si";
import {
  FaRobot,
  FaGlobeAmericas,
  FaLanguage,
  FaPaintBrush,
  FaLaptopCode,
  FaBriefcase,
  FaUser,
  FaSignLanguage,
} from "react-icons/fa";
import SocialIcons from "@/components/SocialIcons";
import { MdSchool, MdWork, MdOutlineDesignServices } from "react-icons/md";
import {
  IoIosRocket,
  IoMdRibbon,
  IoIosCode,
  IoIosChatboxes,
} from "react-icons/io";
import { BiSolidBookOpen, BiSolidTrophy } from "react-icons/bi";
import { JSX } from "react";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";

const iconMap: Record<string, JSX.Element> = {
  JavaScript: <SiJavascript color="#f7df1e" />,
  TypeScript: <SiTypescript color="#3178c6" />,
  React: <SiReact color="#61dafb" />,
  "Next.js": <SiNextdotjs color="#ffffff" />,
  "Node.js": <SiNodedotjs color="#339933" />,
  Python: <SiPython color="#3776ab" />,
  "Tailwind CSS": <SiTailwindcss color="#38bdf8" />,
  "Framer Motion": <SiFramer color="#e62aff" />,
  Git: <SiGit color="#f34f29" />,
  Web3: <SiWeb3Dotjs color="#27ae60" />,
  MongoDB: <SiMongodb color="#47a248" />,
  MySQL: <SiMysql color="#00758f" />,
  "Express.js": <SiExpress color="#ffffff" />,
  "React Native": <SiReactivex color="#61dafb" />,
};

const courseIconMap: Record<string, JSX.Element> = {
  "MERN Stack Developer": <FaRobot color="#128c7e" />,
  "Adobe Software": <SiAdobe color="#ff0000" />,
  "WordPress Bootcamp": <SiWordpress color="#21759b" />,
  "IoT Blockchain Supply Chain Network": <SiHiveBlockchain color="#f89c1d" />,
};

const hackathonIconMap: Record<string, JSX.Element> = {
  "Smart India Hackathon – 2024 & 2025": <SiHackthebox color="#9fe870" />,
  "DevFast – 2024": <SiHackthebox color="#ffb347" />,
};

const languageIconMap: Record<string, JSX.Element> = {
  English: <FaGlobeAmericas color="#4f8edc" />,
  Hindi: <FaLanguage color="#ff9933" />,
  Gujarati: <FaLanguage color="#008751" />,
};

const sectionIconMap: Record<string, JSX.Element> = {
  about: <FaUser className="text-xl text-[#0ea5e9]" />,
  highlights: <IoIosRocket className="text-xl text-[#ec4899]" />,
  education: <MdSchool className="text-xl text-[#f59e42]" />,
  hackathons: <BiSolidTrophy className="text-xl text-[#84cc16]" />,
  courses: <BiSolidBookOpen className="text-xl text-[#8b5cf6]" />,
  languages: <FaSignLanguage className="text-xl text-[#06b6d4]" />,
  tools: <SiProtools className="text-xl text-[#fbbf24]" />,
  connect: <IoIosChatboxes className="text-2xl text-[#0ea5e9]" />,
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.3,
    },
  },
};

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Tailwind CSS",
  "Framer Motion",
  "Git",
  "Web3",
  "MongoDB",
  "MySQL",
  "Express.js",
  "React Native",
];

const highlights = [
  {
    icon: <IoIosRocket color="#ec4899" className="text-lg" />,
    title: "MERN & Next.js",
    desc: "Building modern, scalable, and responsive applications end to end.",
  },
  {
    icon: <MdOutlineDesignServices color="#14b8a6" className="text-lg" />,
    title: "UI/UX focus",
    desc: "Clean, accessible interfaces with professional design tooling.",
  },
  {
    icon: <FaBriefcase color="#f59e42" className="text-lg" />,
    title: "Freelance delivery",
    desc: "Hands-on with real projects, iterating with users and stakeholders.",
  },
];

const education = [
  {
    icon: <MdSchool color="#34d399" className="text-xl" />,
    title: "Master’s in Computer Application",
    place: "LDRP Institute of Technology and Research",
    time: "2024 – Present",
  },
  {
    icon: <MdSchool color="#818cf8" className="text-xl" />,
    title: "Bachelor’s in Computer Application",
    place:
      "Acharya Motibhai Patel Institute of Computer Studies – Ganpat University",
    time: "2022 – 2025",
  },
];

const hackathons = [
  {
    icon: hackathonIconMap["Smart India Hackathon – 2024 & 2025"] ?? (
      <SiHackthebox color="#44a832" />
    ),
    label: "Smart India Hackathon – 2024 & 2025",
  },
  {
    icon: hackathonIconMap["DevFast – 2024"] ?? (
      <SiHackthebox color="#44a832" />
    ),
    label: "DevFast – 2024",
  },
];

const courses = [
  {
    icon: courseIconMap["MERN Stack Developer"] ?? (
      <SiCoursera color="#2a73cc" />
    ),
    label: "MERN Stack Developer",
  },
  {
    icon: courseIconMap["Adobe Software"] ?? <SiCoursera color="#2a73cc" />,
    label: "Adobe Software",
  },
  {
    icon: courseIconMap["WordPress Bootcamp"] ?? <SiCoursera color="#2a73cc" />,
    label: "WordPress Bootcamp",
  },
  {
    icon: courseIconMap["IoT Blockchain Supply Chain Network"] ?? (
      <SiCoursera color="#2a73cc" />
    ),
    label: "IoT Blockchain Supply Chain Network",
  },
];

const languages = [
  {
    icon: languageIconMap["English"],
    label: "English",
  },
  {
    icon: languageIconMap["Hindi"],
    label: "Hindi",
  },
  {
    icon: languageIconMap["Gujarati"],
    label: "Gujarati",
  },
];

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

function DraggableProfileImage() {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  return (
    <div
      ref={constraintsRef}
      style={{ position: "relative", width: "100%" }}
      className="lg:w-2/3 flex justify-center lg:justify-start lg:col-span-2 lg:sticky lg:top-32 lg:self-start"
    >
      <motion.div
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.22}
        dragTransition={{ bounceStiffness: 320, bounceDamping: 28 }}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        className={`
          cursor-grab active:cursor-grabbing
          select-none
        `}
        style={{ zIndex: 3, touchAction: "none" }}
        variants={imageVariants}
        whileHover="hover"
        animate={{
          transition: {
            type: "spring",
            stiffness: isDragging ? 320 : 220,
            damping: isDragging ? 24 : 34,
          },
        }}
      >
        <div className="relative w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] lg:w-[460px] lg:h-[460px] rounded-2xl overflow-hidden border-2 border-white/10 bg-white/5 backdrop-blur">
          <div className="absolute inset-0" />
          <div className="w-full h-full flex items-center justify-center">
            <img
              src="me.jpg"
              alt="Mohammadali Dhanga"
              className="object-cover w-full h-full rounded-2xl select-none"
              loading="eager"
              draggable={false}
            />
          </div>
          <motion.div
            className="absolute left-1/2 top-1/2 pointer-events-none transition"
            initial={{ opacity: 0 }}
            animate={{ opacity: isDragging ? 0.17 : 0 }}
            style={{ transform: "translate(-50%, -50%)" }}
          >
            <div className="text-white text-xs bg-black/70 rounded px-2 py-1">
              Drag me!
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

// --- Draggable Profile Image Component END ---

export default function About() {
  return (
    <main className="relative overflow-hidden min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-20 pt-24 sm:pt-28 lg:pt-32">
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.06),_transparent_45%)]" />
      </div>

      <div className="relative max-w-6xl mx-auto space-y-14 sm:space-y-16 lg:space-y-20">
        <motion.div
          className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-center"
          style={{ zIndex: 2 }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Profile Image - Draggable */}
          <DraggableProfileImage />

          {/* Content - Mobile: Below, Desktop: Right */}
          <motion.div
            className="w-full lg:col-span-3 space-y-6 sm:space-y-8 lg:space-y-10"
            variants={containerVariants}
          >
            <motion.div className="space-y-3" variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-white/10 bg-white/5 text-xs sm:text-sm uppercase tracking-[0.2em] text-gray-300">
                <AnimatedShinyText className="inline-flex items-center justify-center gap-2 px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300">
                  {sectionIconMap.about}
                  About of Mohammadali dhanga
                </AnimatedShinyText>
              </div>

              <h1 className="flex items-center gap-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold">
                {/* <FaUser className="text-2xl text-[#0ea5e9] hidden sm:inline" /> */}
                About Me
              </h1>
              <p className="flex items-start gap-2 text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                {/* <FaRobot className="mt-[2px] text-lg text-[#128c7e]" /> */}I
                am Mohammadali Dhanga, a MERN Stack Developer and Web Designer
                with hands-on experience in building modern, scalable, and
                responsive websites and applications.
              </p>
              <p className="flex items-start gap-2 text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                {/* <IoIosCode className="mt-[2px] text-lg text-[#38bdf8]" /> */}
                I have strong skills in frontend and backend development using
                technologies like React.js, Next.js, Node.js, Express.js,
                MongoDB, and MySQL. I also have a good eye for UI/UX design and
                experience with professional design tools.
              </p>
              <p className="flex items-start gap-2 text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                {/* <MdWork className="mt-[2px] text-lg text-[#fbbf24]" /> */}
                Currently, I work as a freelance developer and continuously
                improve my skills by learning new technologies, building
                real-world projects, and participating in hackathons across
                India.
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-3 gap-4 sm:gap-5"
              variants={itemVariants}
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="p-4 sm:p-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur space-y-2 flex flex-col"
                  whileHover={{ y: -4 }}
                  transition={{ delay: 0.05 * index }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    {/* Use highlight icon */}
                    {item.icon}
                    <span className="text-sm uppercase tracking-wide text-gray-400">
                      {item.title}
                    </span>
                  </div>
                  <p className="text-gray-200 text-sm sm:text-base leading-relaxed" style={{
      fontFamily:
      "Menlo, Monaco, 'Fira Mono', 'Liberation Mono', 'Courier New', monospace",
    }}>
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div className="space-y-4" variants={itemVariants}>
              <div className="flex items-center gap-2 mb-1">
                {sectionIconMap.education}
                <h2 className="text-xl sm:text-2xl font-display font-bold">
                  Education
                </h2>
              </div>
              <div className="space-y-3">
                {education.map((item, index) => (
                  <motion.div
                    key={item.title}
                    className="flex gap-4 items-start p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <div className="flex flex-col gap-1">
                      <span>{item.icon}</span>
                    </div>
                    <div className="space-y-1">
                      <p className="text-base sm:text-lg font-semibold text-white">
                        {item.title}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-300">
                        {item.place}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-400" style={{
      fontFamily:
      "Menlo, Monaco, 'Fira Mono', 'Liberation Mono', 'Courier New', monospace",
    }}  >
                        {item.time}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div className="space-y-4" variants={itemVariants}>
              <div className="flex items-center gap-2 mb-1">
                {sectionIconMap.hackathons}
                <h2 className="text-xl sm:text-2xl font-display font-bold">
                  Hackathons
                </h2>
              </div>
              <div className="space-y-3">
                {hackathons.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 text-gray-200"
                  >
                    <span className="mt-1 text-lg">{item.icon}</span>
                    <p className="text-xs sm:text-sm" style={{
      fontFamily:
      "Menlo, Monaco, 'Fira Mono', 'Liberation Mono', 'Courier New', monospace",
    }}>{item.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div className="space-y-4" variants={itemVariants}>
              <div className="flex items-center gap-2 mb-1">
                {sectionIconMap.courses}
                <h2 className="text-xl sm:text-2xl font-display font-bold">
                  Courses
                </h2>
              </div>
              <div className="space-y-3">
                {courses.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 text-gray-200"
                  >
                    <span className="mt-1 text-lg">{item.icon}</span>
                    <p className="text-xs sm:text-sm" style={{
      fontFamily:
      "Menlo, Monaco, 'Fira Mono', 'Liberation Mono', 'Courier New', monospace",
    }}>{item.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div className="space-y-4" variants={itemVariants}>
              <div className="flex items-center gap-2 mb-1">
                {sectionIconMap.languages}
                <h2 className="text-xl sm:text-2xl font-display font-bold">
                  Languages
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <span
                    key={lang.label}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 bg-white/5 text-xs sm:text-sm text-gray-200"style={{
                      fontFamily:
                      "Menlo, Monaco, 'Fira Mono', 'Liberation Mono', 'Courier New', monospace",
                    }}
                  >
                    <span className="text-base" >{lang.icon}</span>
                    {lang.label}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Skills Section */}
            <motion.div variants={itemVariants}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4 sm:mb-6">
                <div className="flex items-center gap-2">
                  {sectionIconMap.tools}
                  <h2 className="text-2xl sm:text-3xl font-display font-bold">
                    Tools & Skills
                  </h2>
                </div>
                <p className="flex items-center gap-1 text-sm text-gray-400" style={{
      fontFamily:
      "Menlo, Monaco, 'Fira Mono', 'Liberation Mono', 'Courier New', monospace",
    }}>
                  <IoIosRocket className="inline text-base text-[#ec4899]" />
                  Always learning, always shipping.
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    className="flex flex-col items-center justify-center gap-2 w-full h-20 sm:h-24 bg-white/5 border border-white/10 rounded-lg sm:rounded-xl text-center text-sm sm:text-base md:text-lg font-medium hover:bg-white/10 hover:border-white/20 transition-colors duration-200"
                    style={{
                      fontFamily:
                      "Menlo, Monaco, 'Fira Mono', 'Liberation Mono', 'Courier New', monospace", minWidth: "0" }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 0.15 + index * 0.04,
                      duration: 0.35,
                    }}
                    whileHover={{ scale: 1.05 }}
                    
                  >
                    <span className="text-xl md:text-2xl" >
                      {iconMap[skill] ?? <FaRobot color="#888" />}
                    </span>
                    <span className="truncate">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            {/* <motion.div variants={itemVariants} className="pt-2 sm:pt-4">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                {sectionIconMap.connect}
                <h2 className="text-2xl sm:text-3xl font-display font-bold">
                  Connect With Me
                </h2>
              </div>
              <SocialIcons />
            </motion.div> */}
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
