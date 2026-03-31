"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { JSX } from "react";
import Cal from "@/components/ui/cal";
import {
  Atom,
  Camera,
  CheckCircle2,
  CircleDot,
  Clapperboard,
  Cloud,
  Cog,
  Database,
  DraftingCompass,
  FileCode,
  FileType,
  Figma,
  Github,
  Globe2,
  GraduationCap,
  Languages,
  LayoutDashboard,
  Leaf,
  Lightbulb,
  Mail,
  Monitor,
  MonitorSmartphone,
  Network,
  Palette,
  Paintbrush,
  PenTool,
  Rocket,
  Route,
  Server,
  ShoppingBag,
  Smartphone,
  Shield,
  Table,
  Trophy,
  UserRound,
  Waves,
  BookOpen,
  Code2,
} from "lucide-react";
import SocialIcons from "@/components/SocialIcons";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";

import aboutMeData from "../Config/aboutme.json";
import projectsData from "../Config/projects.json";
import educationData from "../Config/education.json";
import contactData from "../Config/contact.json";
import experienceData from "../Config/experience.json";

// --- DATA DEFINITIONS ---

const floatingElements = [
  { top: "10%", left: "10%", size: "w-40 h-40", delay: 0 },
  { top: "60%", left: "80%", size: "w-36 h-36", delay: 5 },
  { top: "80%", left: "20%", size: "w-24 h-24", delay: 3 },
];

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const buttonVariants = {
  hover: { scale: 1.05, transition: { duration: 0.2 } },
  tap: { scale: 0.97, transition: { duration: 0.1 } },
};

// Sample service tracks
const serviceTracks = [
  {
    title: "Product & UX",
    desc: "Turning ideas into wireframes, design systems, and finished user experiences.",
    points: [
      "Wireframing & prototyping",
      "Figma collaboration",
      "System thinking",
    ],
  },
  {
    title: "Engineering",
    desc: "Production-grade full-stack development from Figma handoff through deployment.",
    points: [
      "Frontend & backend",
      "Web apps & APIs",
      "Performance & scalability",
    ],
  },
  {
    title: "Web3 & Integrations",
    desc: "Smart contracts, API connections, and ecosystem integrations.",
    points: ["dApp & blockchain", "API integrations", "Automation & scaling"],
  },
];

// Sample process steps
const process = [
  {
    title: "Discover",
    detail: "Understand your ideas, goals, and users.",
  },
  {
    title: "Design",
    detail: "Sketch, wireframe, and make it user-focused.",
  },
  {
    title: "Build",
    detail: "Code, iterate, and instrument progress.",
  },
  {
    title: "Launch",
    detail: "Deliver, ship, optimize, and iterate live.",
  },
];

// Featured work samples
const featured = [
  {
    label: "Realtime dashboards",
    detail: "Dashboards with live data, metrics, and actionable insights.",
  },
  {
    label: "Creative launches",
    detail: "Fast delivery of creative products and features.",
  },
  {
    label: "Secure systems",
    detail: "Authentication, audit trails, and secure-by-default code.",
  },
];

// Skills from JSON or hardcoded if specific icons needed
const skills = {
  frontend: [
    "React.js",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "React Native",
  ],
  backend: ["Node.js", "Express.js", "MongoDB", "MySQL"],
  uiux: [
    "Figma",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Adobe Lightroom",
  ],
};

// Platforms/tools
const platforms = [
  "WordPress",
  "Shopify",
  "Git",
  "Figma",
  "Adobe Creative Suite",
];

// Combine projects from lists
const allProjects = [
  ...projectsData.dataList1,
  ...projectsData.dataList2,
  ...projectsData.dataList3,
];

const projects = allProjects.map(proj => ({
  title: proj.name,
  desc: proj.desc,
  link: proj.live || proj.code || "#",
})).slice(0, 6);

// Education from JSON
const education = educationData.degrees.map(deg => ({
  title: deg.course,
  place: deg.name,
  time: deg.duration,
}));

// Hackathons/Courses - taking from certifiedCourses
const hackathons = ["Smart India Hackathon", "DevFast", "Odoo x Adani Hackathon"];
const courses = educationData.certifiedCourses.map(c => c.course).slice(0, 4);

// Languages from JSON
const languages = aboutMeData.Language;

// --- END DATA DEFINITIONS ---


const sharedStroke = 1.8;

const skillIcons: Record<string, JSX.Element> = {
  "React.js": <Atom size={20} color="#61dafb" strokeWidth={sharedStroke} />,
  "Next.js": (
    <CircleDot
      size={20}
      color="#000000"
      strokeWidth={sharedStroke}
      style={{ background: "#fff", borderRadius: 4, padding: 2 }}
    />
  ),
  JavaScript: <FileCode size={20} color="#f7df1e" strokeWidth={sharedStroke} />,
  TypeScript: <FileType size={20} color="#2d79c7" strokeWidth={sharedStroke} />,
  "Tailwind CSS": (
    <Waves size={20} color="#06b6d4" strokeWidth={sharedStroke} />
  ),
  "React Native": (
    <Smartphone size={18} color="#4DD0E1" strokeWidth={sharedStroke} />
  ),
  "Node.js": <Server size={20} color="#3c873a" strokeWidth={sharedStroke} />,
  "Express.js": (
    <Route
      size={20}
      color="#ffffff"
      strokeWidth={sharedStroke}
      style={{ background: "#222", borderRadius: 4, padding: 2 }}
    />
  ),
  MongoDB: <Leaf size={20} color="#47A248" strokeWidth={sharedStroke} />,
  MySQL: <Table size={20} color="#00758f" strokeWidth={sharedStroke} />,
  Figma: <Figma size={20} color="#a259ff" strokeWidth={sharedStroke} />,
  "Adobe Photoshop": (
    <Palette size={20} color="#0a74c3" strokeWidth={sharedStroke} />
  ),
  "Adobe Illustrator": (
    <PenTool size={20} color="#fb9d06" strokeWidth={sharedStroke} />
  ),
  "Adobe Lightroom": (
    <Camera size={20} color="#3652ff" strokeWidth={sharedStroke} />
  ),
};

const platformIcons: Record<string, JSX.Element> = {
  WordPress: <Globe2 size={18} color="#21759b" strokeWidth={sharedStroke} />,
  Shopify: <ShoppingBag size={18} color="#7ab55c" strokeWidth={sharedStroke} />,
  Git: <Github size={18} color="#333" strokeWidth={sharedStroke} />,
  Figma: <Figma size={18} color="#a259ff" strokeWidth={sharedStroke} />,
  "Adobe Creative Suite": (
    <Cloud size={18} color="#d84d3b" strokeWidth={sharedStroke} />
  ),
};

const serviceTrackIcons: Record<string, JSX.Element> = {
  "Product & UX": (
    <PenTool size={22} color="#7c3aed" strokeWidth={sharedStroke} />
  ),
  Engineering: <Cog size={22} color="#f59e42" strokeWidth={sharedStroke} />,
  "Web3 & Integrations": (
    <Network size={22} color="#1de9b6" strokeWidth={sharedStroke} />
  ),
};

const processIcons = [
  <Lightbulb
    key="discover"
    size={22}
    color="#facc15"
    strokeWidth={sharedStroke}
  />,
  <DraftingCompass
    key="design"
    size={22}
    color="#c026d3"
    strokeWidth={sharedStroke}
  />,
  <Cog key="build" size={22} color="#60a5fa" strokeWidth={sharedStroke} />,
  <Rocket key="launch" size={22} color="#fb7185" strokeWidth={sharedStroke} />,
];

const processBorderColors = ["#facc15", "#c026d3", "#60a5fa", "#fb7185"];

const featuredIcons = [
  <LayoutDashboard
    key="Realtime dashboards"
    size={20}
    color="#0ea5e9"
    strokeWidth={sharedStroke}
  />,
  <Clapperboard
    key="Creative launches"
    size={20}
    color="#f59e42"
    strokeWidth={sharedStroke}
  />,
  <Shield
    key="Secure systems"
    size={20}
    color="#f43f5e"
    strokeWidth={sharedStroke}
  />,
];

const featuredBorderColors = ["#0ea5e9", "#f59e42", "#f43f5e"];

const projectIcons = [
  <CheckCircle2
    key="AI Based Crop Recommendation System"
    size={20}
    color="#14b8a6"
    strokeWidth={sharedStroke}
  />,
  <LayoutDashboard
    key="Hotel Management System"
    size={20}
    color="#0ea5e9"
    strokeWidth={sharedStroke}
  />,
  <MonitorSmartphone
    key="Professional Company Website"
    size={20}
    color="#818cf8"
    strokeWidth={sharedStroke}
  />,
  <Globe2
    key="WordPress E-commerce Website"
    size={20}
    color="#21759b"
    strokeWidth={sharedStroke}
  />,
  <Cloud
    key="Real-Time Blog & Chat Uploading Website"
    size={20}
    color="#06b6d4"
    strokeWidth={sharedStroke}
  />,
  <Paintbrush
    key="Weather Forecast UI/UX Project"
    size={20}
    color="#f59e42"
    strokeWidth={sharedStroke}
  />,
];

const projectBorderColors = ["#14b8a6", "#0ea5e9", "#818cf8", "#21759b", "#06b6d4", "#f59e42"];

const educationIcons = [
  <GraduationCap
    key="Master"
    size={20}
    color="#6366f1"
    strokeWidth={sharedStroke}
  />,
  <GraduationCap
    key="Bachelor"
    size={20}
    color="#f59e42"
    strokeWidth={sharedStroke}
  />,
];

const hackathonIcons = [
  <UserRound
    key="Smart India Hackathon"
    size={20}
    color="#eab308"
    strokeWidth={sharedStroke}
  />,
  <Trophy key="DevFast" size={20} color="#a21caf" strokeWidth={sharedStroke} />,
  <Code2
    key="Odoo x Adani Hackathon"
    size={20}
    color="#0ea5e9"
    strokeWidth={sharedStroke}
  />,
];

const courseIcons = [
  <Atom
    key="MERN Stack Developer"
    size={16}
    color="#61dafb"
    strokeWidth={sharedStroke}
  />,

  <BookOpen
    key="Python Mastery: The Complete Web Programming Course"
    size={16}
    color="#ff0000"
    strokeWidth={sharedStroke}
  />,
  <Globe2
    key="WordPress Bootcamp"
    size={16}
    color="#21759b"
    strokeWidth={sharedStroke}
  />,
  <Network
    key="IoT Blockchain"
    size={16}
    color="#10b981"
    strokeWidth={sharedStroke}
  />,
];

const languageIcons: Record<string, JSX.Element> = {
  English: <Languages size={16} color="#60a5fa" strokeWidth={sharedStroke} />,
  Hindi: <Languages size={16} color="#22c55e" strokeWidth={sharedStroke} />,
  Gujarati: <Languages size={16} color="#f59e42" strokeWidth={sharedStroke} />,
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

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-white/20 selection:text-white overflow-x-hidden">
      {/* Decorative grid background for design */}
      <GridBG />

      {/* Animated background elements - Refined for subtlety */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {floatingElements.map((orb, idx) => (
          <motion.div
            key={idx}
            className={`absolute ${orb.size} rounded-full bg-white/[0.03] blur-3xl`}
            style={{ ...orb }}
            initial={{ opacity: 0.1, scale: 0.9 }}
            animate={{
              opacity: [0.1, 0.2, 0.1],
              scale: [0.9, 1.1, 0.9],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: orb.delay,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.02),_transparent_40%)]" />
      </div>

      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 sm:py-32 lg:py-40 space-y-32 sm:space-y-40"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <section className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7 flex flex-col justify-center space-y-10">
            <motion.div variants={itemVariants} className="w-fit">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                <AnimatedShinyText className="inline-flex items-center justify-center text-xs sm:text-sm uppercase tracking-widest text-[#facc15]/80 font-medium">
                  <span>✨ MERN Stack Developer · Next.js Specialist</span>
                </AnimatedShinyText>
              </div>
            </motion.div>

            <div className="space-y-6">
              <motion.h1
                className="text-5xl sm:text-7xl lg:text-8xl font-display font-bold tracking-tighter leading-[0.95] text-white"
                variants={itemVariants}
              >
                {aboutMeData.Name.split(" ")[0]} <br />
                <span className="text-white/40">{aboutMeData.Name.split(" ").slice(1).join(" ")}</span>
              </motion.h1>

              <motion.p
                className="text-xl sm:text-2xl text-gray-300 font-light max-w-2xl leading-relaxed"
                variants={itemVariants}
              >
                {aboutMeData.Role} <span className="text-white/20 mx-2">|</span>
                Next.js Specialist <span className="text-white/20 mx-2">|</span>
                UI/UX Focused Developer
              </motion.p>
            </div>

            <motion.p
              className="text-base sm:text-lg text-gray-400 leading-loose max-w-xl font-light"
              variants={itemVariants}
              style={{
                fontFamily: "Menlo, Monaco, 'Fira Mono', monospace",
              }}
            >
              I’m {aboutMeData.Name}, a {aboutMeData.Role} building modern, responsive web applications with the MERN Stack and Next.js. I keep UI/UX clean, performant, and focused on the user.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-6 pt-4"
              variants={itemVariants}
            >
              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                <Cal />
              </motion.div>


              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-black border border-white/10 text-white font-semibold text-lg rounded-xl transition-all duration-300 hover:bg-white hover:text-black hover:border-white"
                >
                  <Mail
                    size={20}
                    className="transition-transform group-hover:scale-110"
                    strokeWidth={2}
                  />
                  <span>Contact</span>
                </Link>
              </motion.div>

            </motion.div>

            <motion.div variants={itemVariants} className="pt-4">
              <SocialIcons />
            </motion.div>
          </div>

          {/* Minimal Code Block - Replaced "About Me" Window */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 relative mt-8 lg:mt-0"
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-white/10 to-transparent rounded-2xl blur-sm opacity-50"></div>
              <div className="relative bg-[#0a0a0a] rounded-2xl border border-white/5 p-8 sm:p-10 shadow-2xl">
                {/* Minimal Header */}
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">AboutMe.tsx</span>
                  <div className="flex gap-2">
                    <span className="w-2 h-2 rounded-full bg-white/10"></span>
                    <span className="w-2 h-2 rounded-full bg-white/10"></span>
                  </div>
                </div>

                {/* Code Content */}
                <div
                  className="font-mono text-sm leading-7 overflow-x-auto"
                  style={{ fontFamily: "Menlo, Monaco, 'Fira Mono', monospace" }}
                >
                  <p><span style={{ color: "#c678dd" }}>const</span> <span style={{ color: "#e5c07b" }}>AboutMe</span> <span style={{ color: "#abb2bf" }}>=</span> <span style={{ color: "#abb2bf" }}>{"{"}</span></p>
                  <div className="pl-6 space-y-1">
                    <p><span style={{ color: "#e06c75" }}>name</span><span style={{ color: "#abb2bf" }}>:</span> <span style={{ color: "#98c379" }}>&quot;{aboutMeData.Name}&quot;</span><span style={{ color: "#abb2bf" }}>,</span></p>
                    <p><span style={{ color: "#e06c75" }}>role</span><span style={{ color: "#abb2bf" }}>:</span> <span style={{ color: "#98c379" }}>&quot;{aboutMeData.Role}&quot;</span><span style={{ color: "#abb2bf" }}>,</span></p>
                    <p><span style={{ color: "#e06c75" }}>age</span><span style={{ color: "#abb2bf" }}>:</span> <span style={{ color: "#d19a66" }}>{aboutMeData.Age}</span><span style={{ color: "#abb2bf" }}>,</span></p>
                    <p><span style={{ color: "#e06c75" }}>gender</span><span style={{ color: "#abb2bf" }}>:</span> <span style={{ color: "#98c379" }}>&quot;{aboutMeData.Gender}&quot;</span><span style={{ color: "#abb2bf" }}>,</span></p>
                    <p><span style={{ color: "#e06c75" }}>address</span><span style={{ color: "#abb2bf" }}>:</span> <span style={{ color: "#98c379" }}>&quot;{aboutMeData.Address}&quot;</span><span style={{ color: "#abb2bf" }}>,</span></p>
                    <p><span style={{ color: "#e06c75" }}>phone</span><span style={{ color: "#abb2bf" }}>:</span> <span style={{ color: "#98c379" }}>&quot;{aboutMeData.Phone}&quot;</span><span style={{ color: "#abb2bf" }}>,</span></p>
                    <p><span style={{ color: "#e06c75" }}>email</span><span style={{ color: "#abb2bf" }}>:</span> <span style={{ color: "#98c379" }}>&quot;{aboutMeData.Email}&quot;</span><span style={{ color: "#abb2bf" }}>,</span></p>
                    <p><span style={{ color: "#e06c75" }}>languages</span><span style={{ color: "#abb2bf" }}>:</span> <span style={{ color: "#abb2bf" }}>[</span>{aboutMeData.Language.map((lang, i) => (
                      <span key={lang}><span style={{ color: "#98c379" }}>&quot;{lang}&quot;</span>{i < aboutMeData.Language.length - 1 ? ", " : ""}</span>
                    ))}<span style={{ color: "#abb2bf" }}>]</span></p>
                  </div>
                  <p><span style={{ color: "#abb2bf" }}>{"}"}</span><span style={{ color: "#abb2bf" }}>;</span></p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Services / Capability Tracks */}
        <motion.section variants={containerVariants}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-white tracking-tight">
              Capability tracks
            </h2>
            <p className="text-gray-400 font-mono text-sm max-w-sm border-l border-white/20 pl-4">
              Choose the lane you need — or mix them for a full-stack launch.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {serviceTracks.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="group space-y-6"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                  {serviceTrackIcons[service.title]}
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-gray-200 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed min-h-[3rem]">
                  {service.desc}
                </p>

                <div className="space-y-4 pt-4 border-t border-white/5">
                  {service.points.map((point) => (
                    <div key={point} className="flex items-center gap-3 text-sm text-gray-300 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-white/50 transition-colors" />
                      {point}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Process */}
        <motion.section variants={containerVariants}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-white tracking-tight">
              Process that ships
            </h2>
            <p className="text-gray-400 font-mono text-sm max-w-sm border-l border-white/20 pl-4">
              Tight loops, visible progress, and instrumentation from day one.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Gentle connecting line for desktop */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {process.map((step, index) => (
              <motion.div
                key={step.title}
                variants={itemVariants}
                className="relative pt-8 space-y-4"
              >
                {/* Step Number/Icon */}
                <div className="absolute top-4 left-0 md:left-1/2 md:-translate-x-1/2 -translate-y-1/2 bg-black px-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full border border-white/10 bg-white/5 text-white/60">
                    {processIcons[index]}
                  </span>
                </div>

                <div className="pt-6 md:text-center space-y-2">
                  <span className="text-xs uppercase tracking-widest text-gray-500 font-mono block mb-2">Step 0{index + 1}</span>
                  <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-mono">{step.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Featured / Work Snapshots */}
        <motion.section variants={containerVariants}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-white tracking-tight">
              Work snapshots
            </h2>
            <p className="text-gray-400 font-mono text-sm max-w-sm border-l border-white/20 pl-4">
              A few lanes I keep building in.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featured.map((item, index) => (
              <motion.div
                key={item.label}
                variants={itemVariants}
                className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors"
                whileHover={{ y: -4 }}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-400 group-hover:text-white transition-colors">
                    {featuredIcons[index]}
                    <span className="text-xs uppercase tracking-widest font-mono">{item.label}</span>
                  </div>
                  <p className="text-xl font-medium text-white leading-snug">
                    {item.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section variants={containerVariants}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-white tracking-tight">
              Skills
            </h2>
            <p className="text-gray-400 font-mono text-sm max-w-sm border-l border-white/20 pl-4">
              Focused on modern, responsive web experiences.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">
            {/* Frontend */}
            <div className="space-y-8">
              <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                <Monitor size={24} className="text-gray-400" strokeWidth={1.5} />
                <h3 className="text-xl font-bold text-white">Frontend</h3>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-4">
                {skills.frontend.map(skill => (
                  <span key={skill} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-mono cursor-default">
                    <span className="opacity-70">{skillIcons[skill]}</span>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="space-y-8">
              <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                <Database size={24} className="text-gray-400" strokeWidth={1.5} />
                <h3 className="text-xl font-bold text-white">Backend</h3>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-4">
                {skills.backend.map(skill => (
                  <span key={skill} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-mono cursor-default">
                    <span className="opacity-70">{skillIcons[skill]}</span>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* UI/UX */}
            <div className="space-y-8">
              <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                <Paintbrush size={24} className="text-gray-400" strokeWidth={1.5} />
                <h3 className="text-xl font-bold text-white">UI/UX & Tools</h3>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-4">
                {skills.uiux.map(skill => (
                  <span key={skill} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-mono cursor-default">
                    <span className="opacity-70">{skillIcons[skill]}</span>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Platforms & Tools - Inline Flow */}
        <motion.section variants={containerVariants} className="py-8 border-y border-white/5">
          <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
            <div className="flex items-center gap-3">
              <Cloud size={20} className="text-gray-500" />
              <span className="text-sm font-mono text-gray-500 uppercase tracking-widest">Platforms & Tools SELECTION</span>
            </div>
            <div className="flex flex-wrap gap-6 justify-center md:justify-end">
              {platforms.map(tool => (
                <span key={tool} className="flex items-center gap-2 text-gray-300 hover:text-white text-sm transition-colors">
                  <span className="opacity-60">{platformIcons[tool]}</span>
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Projects - The Premium List Layout */}
        {/* Projects - Horizontal Scroll Layout */}
        <motion.section variants={containerVariants} className="overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-6">
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-white tracking-tight">
              Projects
            </h2>
            <div className="flex items-center gap-4">
              <p className="text-gray-400 font-mono text-sm max-w-sm border-l border-white/20 pl-4 hidden sm:block">
                Selected work as Mohammadali Dhanga.
              </p>
              <div className="text-xs font-mono text-gray-600 uppercase tracking-widest animate-pulse">
                &larr; Scroll &rarr;
              </div>
            </div>
          </div>

          <div
            className="flex overflow-x-auto gap-6 pb-12 -mx-6 px-6 sm:-mx-0 sm:px-0 snap-x snap-mandatory scroll-smooth no-scrollbar"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="flex-none w-[85vw] sm:w-[450px] group relative bg-[#0a0a0a] border border-white/10 p-8 rounded-2xl flex flex-col justify-between hover:border-white/20 transition-all duration-300 snap-center"
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-white group-hover:bg-white/10 transition-colors">
                      {projectIcons[index] || <LayoutDashboard size={20} />}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-gray-400 text-base leading-relaxed font-light mb-8">
                    {project.desc}
                  </p>
                </div>

                {project.link && (
                  <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                    <Link
                      href={project.link}
                      target="_blank"
                      className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white hover:text-blue-400 transition-colors"
                    >
                      <span>View Details</span>
                      <ArrowRightIcon className="w-3 h-3" />
                    </Link>
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education, Hackathons & More */}
        <motion.section variants={containerVariants} className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Education Column */}
          <div className="space-y-12">
            <h3 className="text-3xl font-bold font-display flex items-center gap-3">
              <GraduationCap className="text-[#6366f1]" strokeWidth={1.5} />
              Education
            </h3>
            <div className="relative border-l border-white/10 pl-8 space-y-12">
              {education.map((item, idx) => (
                <div key={item.title} className="relative">
                  <span className="absolute -left-[37px] top-1 h-4 w-4 rounded-full border-2 border-black bg-white/20" />
                  <h4 className="text-xl font-bold text-white">{item.title}</h4>
                  <p className="text-base text-gray-400 mt-2">{item.place}</p>
                  <p className="text-sm font-mono text-gray-500 mt-1">{item.time}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hackathons / Courses / Languages Column */}
          <div className="space-y-12">
            <div>
              <h3 className="text-3xl font-bold font-display flex items-center gap-3 mb-8">
                <Trophy className="text-[#eab308]" strokeWidth={1.5} />
                Honors & More
              </h3>

              <div className="space-y-8">
                {/* Hackathons */}
                <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-4">
                  <h4 className="text-sm font-mono uppercase tracking-widest text-gray-500">Hackathons</h4>
                  <div className="space-y-3">
                    {hackathons.map((item, idx) => (
                      <div key={item} className="flex items-center gap-3 text-white">
                        <span className="text-[#eab308]">{hackathonIcons[idx]}</span>
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Courses */}
                <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-4">
                  <h4 className="text-sm font-mono uppercase tracking-widest text-gray-500">Courses & Certifications</h4>
                  <div className="grid grid-cols-1 gap-3">
                    {courses.map((item, idx) => (
                      <div key={item} className="flex items-center gap-3 text-gray-300">
                        <span className="opacity-70">{courseIcons[idx]}</span>
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div className="flex flex-wrap gap-3 pt-2">
                  {languages.map(lang => (
                    <span key={lang} className="px-3 py-1.5 rounded-md bg-white/5 border border-white/5 text-xs font-mono text-gray-300 flex items-center gap-2">
                      {languageIcons[lang]} {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

      </motion.div>
    </main>
  );
}

// Simple arrow icon helper for the Project link
function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 12h14" />
      <path d="M12 5l7 7-7 7" />
    </svg>
  );
}
