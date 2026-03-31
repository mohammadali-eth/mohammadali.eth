"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { JSX } from "react";
import {
  Atom,
  BookOpen,
  BriefcaseBusiness,
  CircleDot,
  Clapperboard,
  FileCode,
  FileType,
  GitBranch,
  Globe2,
  GraduationCap,
  Languages,
  Leaf,
  MessageCircle,
  Network,
  Palette,
  PenTool,
  Rocket,
  Route,
  Server,
  Smartphone,
  Table,
  Trophy,
  UserRound,
  Waves,
  Wrench,
  Workflow,
} from "lucide-react";
import profile from "@/public/me.jpg";
import aboutMeData from "../../Config/aboutme.json";
import projectsData from "../../Config/projects.json";
import educationData from "../../Config/education.json";

const sharedStroke = 1.8;

const iconMap: Record<string, JSX.Element> = {
  JavaScript: <FileCode color="#f7df1e" strokeWidth={sharedStroke} />,
  TypeScript: <FileType color="#3178c6" strokeWidth={sharedStroke} />,
  React: <Atom color="#61dafb" strokeWidth={sharedStroke} />,
  "Next.js": <CircleDot color="#ffffff" strokeWidth={sharedStroke} />,
  "Node.js": <Server color="#339933" strokeWidth={sharedStroke} />,
  Python: <Workflow color="#3776ab" strokeWidth={sharedStroke} />,
  "Tailwind CSS": <Waves color="#38bdf8" strokeWidth={sharedStroke} />,
  "Framer Motion": <Clapperboard color="#e62aff" strokeWidth={sharedStroke} />,
  Git: <GitBranch color="#f34f29" strokeWidth={sharedStroke} />,
  Web3: <Network color="#27ae60" strokeWidth={sharedStroke} />,
  MongoDB: <Leaf color="#47a248" strokeWidth={sharedStroke} />,
  MySQL: <Table color="#00758f" strokeWidth={sharedStroke} />,
  "Express.js": <Route color="#ffffff" strokeWidth={sharedStroke} />,
  "React Native": <Smartphone color="#61dafb" strokeWidth={sharedStroke} />,
};

const courseIconMap: Record<string, JSX.Element> = {
  "MERN Stack Developer": <Atom color="#128c7e" strokeWidth={sharedStroke} />,
  "Adobe Software": <Palette color="#ff0000" strokeWidth={sharedStroke} />,
  "WordPress Bootcamp": <Globe2 color="#21759b" strokeWidth={sharedStroke} />,
  "IoT Blockchain Supply Chain Network": (
    <Network color="#f89c1d" strokeWidth={sharedStroke} />
  ),
};

const hackathonIconMap: Record<string, JSX.Element> = {
  "Smart India Hackathon – 2024 & 2025": (
    <Trophy color="#9fe870" strokeWidth={sharedStroke} />
  ),
  "DevFast – 2024": <Trophy color="#ffb347" strokeWidth={sharedStroke} />,
};

const languageIconMap: Record<string, JSX.Element> = {
  English: <Globe2 color="#4f8edc" strokeWidth={sharedStroke} />,
  Hindi: <Languages color="#ff9933" strokeWidth={sharedStroke} />,
  Gujarati: <Languages color="#008751" strokeWidth={sharedStroke} />,
};

const sectionIconMap: Record<string, JSX.Element> = {
  about: (
    <UserRound className="text-xl text-[#0ea5e9]" strokeWidth={sharedStroke} />
  ),
  highlights: (
    <Rocket className="text-xl text-[#ec4899]" strokeWidth={sharedStroke} />
  ),
  education: (
    <GraduationCap
      className="text-xl text-[#f59e42]"
      strokeWidth={sharedStroke}
    />
  ),
  hackathons: (
    <Trophy className="text-xl text-[#84cc16]" strokeWidth={sharedStroke} />
  ),
  courses: (
    <BookOpen className="text-xl text-[#8b5cf6]" strokeWidth={sharedStroke} />
  ),
  languages: (
    <Languages className="text-xl text-[#06b6d4]" strokeWidth={sharedStroke} />
  ),
  tools: (
    <Wrench className="text-xl text-[#fbbf24]" strokeWidth={sharedStroke} />
  ),
  connect: (
    <MessageCircle
      className="text-2xl text-[#0ea5e9]"
      strokeWidth={sharedStroke}
    />
  ),
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
      // ease: [0.6, -0.05, 0.01, 0.99],
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
      // ease: [0.6, -0.05, 0.01, 0.99],
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
    icon: (
      <Rocket color="#ec4899" className="text-lg" strokeWidth={sharedStroke} />
    ),
    title: "MERN & Next.js",
    desc: "Building modern, scalable, and responsive applications end to end.",
  },
  {
    icon: (
      <PenTool color="#14b8a6" className="text-lg" strokeWidth={sharedStroke} />
    ),
    title: "UI/UX focus",
    desc: "Clean, accessible interfaces with professional design tooling.",
  },
  {
    icon: (
      <BriefcaseBusiness
        color="#f59e42"
        className="text-lg"
        strokeWidth={sharedStroke}
      />
    ),
    title: "Freelance delivery",
    desc: "Hands-on with real projects, iterating with users and stakeholders.",
  },
];

const education = educationData.degrees.map((deg, idx) => ({
  icon: (
    <GraduationCap
      color={idx % 2 === 0 ? "#34d399" : "#818cf8"}
      className="text-xl"
      strokeWidth={sharedStroke}
    />
  ),
  title: deg.course,
  place: deg.name,
  time: deg.duration,
}));

const hackathons = [
  {
    icon: hackathonIconMap["Smart India Hackathon – 2024 & 2025"] ?? (
      <Trophy color="#44a832" strokeWidth={sharedStroke} />
    ),
    label: "Smart India Hackathon – 2024 & 2025",
  },
  {
    icon: hackathonIconMap["DevFast – 2024"] ?? (
      <Trophy color="#44a832" strokeWidth={sharedStroke} />
    ),
    label: "DevFast – 2024",
  },
  {
    icon: hackathonIconMap["Odoo x Adani Hackathon – 2026"] ?? (
      <Trophy color="#44a832" strokeWidth={sharedStroke} />
    ),
    label: "Odoo x Adani Hackathon – 2026",
  },
];

const courses = educationData.certifiedCourses.map(c => ({
  icon: courseIconMap[c.course] ?? (
    <BookOpen color="#2a73cc" strokeWidth={sharedStroke} />
  ),
  label: c.course,
}));

const languages = aboutMeData.Language.map(lang => ({
  icon: languageIconMap[lang] ?? <Globe2 color="#4f8edc" strokeWidth={sharedStroke} />,
  label: lang,
}));

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

export default function About() {
  return (
    <main className="relative bg-black text-white min-h-screen px-6 py-24 sm:py-32 selection:bg-white/20 selection:text-white overflow-x-hidden">
      {/* Background */}
      <GridBG />
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-600/5 blur-[100px] rounded-full mix-blend-screen" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        {/* Profile Image - Left Column */}

        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          className="lg:col-span-5 lg:sticky lg:top-32"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl">
            <Image
              src={profile}
              alt="Mohammadali Dhanga"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </motion.div>

        {/* Content - Right Column */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 space-y-20 lg:pt-10"
        >

          {/* About Text */}
          <motion.div variants={itemVariants} className="space-y-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm w-fit">
              <span className="text-xs uppercase tracking-widest text-[#0ea5e9] flex items-center gap-2">
                {sectionIconMap.about} About {aboutMeData.Name}
              </span>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl font-display font-bold leading-[0.95] tracking-tight">
                Building the web of <br /><span className="text-gray-500">tomorrow.</span>
              </h1>

              <div className="space-y-6 text-lg text-gray-400 font-light leading-relaxed max-w-2xl">
                <p>
                  {aboutMeData.Introduction}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Highlights - Simple Grid */}
          <motion.div variants={itemVariants} className="grid sm:grid-cols-3 gap-8 border-y border-white/5 py-12">
            {highlights.map((item, index) => (
              <div key={item.title} className="space-y-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 text-white border border-white/5">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed font-mono mt-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Education & Achievements */}
          <motion.div variants={itemVariants} className="space-y-16">
            {/* Education */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold flex items-center gap-3">
                {sectionIconMap.education} Education
              </h2>
              <div className="space-y-10 border-l border-white/10 pl-8 ml-3 relative">
                {education.map((item, idx) => (
                  <div key={item.title} className="relative group">
                    <div className="absolute -left-[39px] top-1 w-5 h-5 rounded-full border border-white/20 bg-black flex items-center justify-center group-hover:border-white/50 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/50 group-hover:bg-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{item.title}</h3>
                    <p className="text-gray-400 text-base mt-1">{item.place}</p>
                    <p className="text-sm font-mono text-gray-600 mt-2">{item.time}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hackathons / Courses - Two Columns */}
            <div className="grid sm:grid-cols-2 gap-12 sm:gap-16">
              <div className="space-y-8">
                <h2 className="text-2xl font-bold flex items-center gap-3 text-white">
                  {sectionIconMap.hackathons} Hackathons
                </h2>
                <ul className="space-y-6">
                  {hackathons.map(item => (
                    <li key={item.label} className="flex items-start gap-4 text-gray-300 group">
                      <span className="mt-1 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all">{item.icon}</span>
                      <span className="text-sm font-medium leading-snug group-hover:text-white transition-colors">{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-8">
                <h2 className="text-2xl font-bold flex items-center gap-3 text-white">
                  {sectionIconMap.courses} Courses
                </h2>
                <ul className="space-y-6">
                  {courses.map(item => (
                    <li key={item.label} className="flex items-start gap-4 text-gray-300 group">
                      <span className="mt-1 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all">{item.icon}</span>
                      <span className="text-sm font-medium leading-snug group-hover:text-white transition-colors">{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-8">
                <h2 className="text-2xl font-bold flex items-center gap-3 text-white">
                  {sectionIconMap.languages} Languages
                </h2>
                <ul className="space-y-6">
                  {languages.map(item => (
                    <li key={item.label} className="flex items-start gap-4 text-gray-300 group">
                      <span className="mt-1 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all">{item.icon}</span>
                      <span className="text-sm font-medium leading-snug group-hover:text-white transition-colors">{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Skills Cloud */}
          <motion.div variants={itemVariants} className="space-y-10 pt-10 border-t border-white/5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h2 className="text-3xl font-bold flex items-center gap-3">
                {sectionIconMap.tools} Tools & Skills
              </h2>
              <span className="text-xs font-mono text-gray-500 uppercase tracking-widest flex items-center gap-2">
                <Rocket className="w-3 h-3 text-pink-500" />
                Always learning, always shipping
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {skills.map(skill => (
                <div key={skill} className="px-4 py-3 rounded-lg bg-white/5 border border-white/5 flex items-center gap-3 text-gray-300 hover:text-white hover:bg-white/10 transition-all hover:scale-105 cursor-default group">
                  <span className="opacity-70 group-hover:opacity-100 transition-opacity scale-90">{iconMap[skill]}</span>
                  <span className="text-sm font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </main>
  );
}
