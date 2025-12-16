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
} from "lucide-react";
import SocialIcons from "@/components/SocialIcons";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";

// --- DATA DEFINITIONS (to solve errors regarding undefined variables) ---

// Example arrays/objects. Replace with actual content if available.
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

// Skills (example only; replace with real values as needed)
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
    // "Git",
  ],
};

// Platforms/tools (example, replace with real)
const platforms = [
  "WordPress",
  "Shopify",
  "Git",
  "Figma",
  "Adobe Creative Suite",
];

// Projects (example, up to 6 to match projectIcons length)
const projects = [
  {
    title: "AI Based Crop Recommendation System",
    desc: "A platform to optimize farming with AI-driven suggestions.",
  },
  {
    title: "Hotel Management System",
    desc: "Comprehensive web-based hotel/room booking interface.",
  },
  {
    title: "Professional Company Website",
    desc: "Responsive SMB/CORP site showcasing brand and services.",
  },
  {
    title: "WordPress E-commerce Website",
    desc: "Custom WooCommerce store for growing online businesses.",
  },
  {
    title: "Real-Time Blog & Chat Uploading Website",
    desc: "Collaborative blogging platform with live chat features.",
  },
  {
    title: "Weather Forecast UI/UX Project",
    desc: "Beautiful weather dashboard focused on clarity and experience.",
  },
];

// Education (example)
const education = [
  {
    title: "Master of Computer Applications",
    place: "LDRP institute of technology and research",
    time: "Aug 2025 – Present",
  },
  {
    title: "Bachelor of Computer Applications",
    place: "A.M.Patel Intitute Of Computer Studies Ganpat University",
    time: "Aug 2022 – Apr 2025",
  },
];

// Hackathons (example)
const hackathons = ["Smart India Hackathon", "DevFast"];

// Courses (example)
const courses = [
  "MERN Stack Developer",
  "Adobe Software",
  "WordPress Bootcamp",
  "IoT Blockchain",
];

// Languages (example)
const languages = ["English", "Hindi", "Gujarati"];

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
];

const courseIcons = [
  <Atom
    key="MERN Stack Developer"
    size={16}
    color="#61dafb"
    strokeWidth={sharedStroke}
  />,
  <Palette
    key="Adobe Software"
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
    <main className="relative overflow-hidden min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 pt-24 sm:pt-28 lg:pt-32">
      {/* Decorative grid background for design */}
      <GridBG />
      {/* Animated background elements */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ zIndex: 1 }}
      >
        {floatingElements.map((orb, idx) => (
          <motion.div
            key={idx}
            className={`absolute ${orb.size} rounded-full bg-white/5 blur-3xl`}
            style={{ ...orb }}
            initial={{ opacity: 0.15, scale: 0.9 }}
            animate={{
              opacity: [0.12, 0.25, 0.12],
              scale: [0.9, 1.08, 0.9],
              rotate: [0, 6, -6, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: orb.delay,
            }}
          />
        ))}
        <motion.div
          className="absolute inset-8 rounded-3xl border border-white/5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.45 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.05),_transparent_45%)]" />
      </div>

      <motion.div
        className="relative w-full max-w-6xl mx-auto space-y-14 sm:space-y-16 lg:space-y-20"
        style={{ zIndex: 2 }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero */}
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-center ">
          <div className="lg:col-span-3 space-y-6 sm:space-y-8">
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-white/10 bg-white/5 text-xs sm:text-sm uppercase tracking-widest text-gray-300"
              variants={itemVariants}
            >
          
              <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300">
                <span>✨ MERN Stack Developer · Next.js Specialist</span>
              </AnimatedShinyText>

            </motion.div>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-display font-bold tracking-tight"
              variants={itemVariants}
            >
            
              Mohammadali Dhanga
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 font-light"
              variants={itemVariants}
            >

              MERN Stack Developer | Next.js Specialist | UI/UX Focused
              Developer
            </motion.p>
            <motion.p
              className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl text-gray-400 leading-relaxed"
              variants={itemVariants}
              style={{
                fontFamily:
                  "Menlo, Monaco, 'Fira Mono', 'Liberation Mono', 'Courier New', monospace",
              }}
            >
            
              I’m Mohammadali Dhanga, a Web Designer and Developer building
              modern, responsive web applications with the MERN Stack and
              Next.js. I keep UI/UX clean, performant, and focused on the user.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center"
              variants={itemVariants}
            >
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Cal />
              </motion.div>

              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Link
                  href="/contact"
                  className="inline-block px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 border-2 border-white text-white font-semibold text-base sm:text-lg md:text-xl rounded-lg sm:rounded-xl transition-colors duration-200 hover:bg-white hover:text-black min-w-[200px] sm:min-w-[240px] text-center"
                >
                  <Mail
                    size={18}
                    color="#f59e42"
                    strokeWidth={sharedStroke}
                    className="inline mr-2"
                  />
                  Contact
                </Link>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <SocialIcons />
            </motion.div>
          </div>

          {/* About Me */}
          <motion.div
            variants={itemVariants}
            data-aos="zoom-in-left"
            className="mx-auto order-1 md:order-2"
          >
            <div
              className="relative bg-[#18181b] rounded-xl shadow-lg border border-white/10 font-mono resize group overflow-hidden"
              style={{
                minWidth: "18rem",
                minHeight: "12rem",
                width: "25rem",
                height: "20rem",
                maxWidth: "100%",
                maxHeight: "500px",
                fontFamily:
                  "Menlo, Monaco, 'Fira Mono', 'Liberation Mono', 'Courier New', monospace",
              }}
            >
              {/* MacBook window bar */}
              <div className="flex items-center gap-2 px-4 py-2 bg-[#232326] border-b border-white/10 select-none">
                <span className="h-3 w-3 rounded-full bg-[#ff5f56] border border-black/10" />
                <span className="h-3 w-3 rounded-full bg-[#ffbd2e] border border-black/10" />
                <span className="h-3 w-3 rounded-full bg-[#27c93f] border border-black/10" />
                <span className="ml-5 text-xs text-gray-400 font-semibold tracking-wide">
                  AboutMe.tsx
                </span>
              </div>
              {/* Code block (not a textarea, just styled spans) */}
              <div className="px-5 py-2 text-sm h-full w-full font-mono">
                <div
                  className="leading-6 w-full h-full min-h-[200px] bg-transparent border-none outline-none font-mono"
                  style={{
                    color: "#d4d4d4",
                    margin: 0,
                    overflow: "auto",
                    whiteSpace: "pre",
                  }}
                  tabIndex={-1}
                  aria-label="AboutMe code block"
                >
                  {/* React code color style */}
                  <span style={{ color: "#61dafb" }}>const</span>{" "}
                  <span style={{ color: "#dcdcaa" }}>AboutMe</span>{" "}
                  <span style={{ color: "#d4d4d4" }}>= {"{"}</span>
                  {"\n"}
                  {"  "}
                  <span style={{ color: "#9CDCFE" }}>name</span>:{" "}
                  <span style={{ color: "#CE9178" }}>
                    &quot;Mohammadali Dhanga&quot;
                  </span>
                  ,{"\n"}
                  {"  "}
                  <span style={{ color: "#9CDCFE" }}>role</span>:{" "}
                  <span style={{ color: "#CE9178" }}>
                    &quot;MERN Stack Developer&quot;
                  </span>
                  ,{"\n"}
                  {"  "}
                  <span style={{ color: "#9CDCFE" }}>age</span>:{" "}
                  <span style={{ color: "#B5CEA8" }}>21</span>,{"\n"}
                  {"  "}
                  <span style={{ color: "#9CDCFE" }}>gender</span>:{" "}
                  <span style={{ color: "#CE9178" }}>&quot;Male&quot;</span>,
                  {"\n"}
                  {"  "}
                  <span style={{ color: "#9CDCFE" }}>address</span>:{" "}
                  <span style={{ color: "#CE9178" }}>
                    &quot;Gandhinagar, India&quot;
                  </span>
                  ,{"\n"}
                  {"  "}
                  <span style={{ color: "#9CDCFE" }}>phone</span>:{" "}
                  <span style={{ color: "#CE9178" }}>
                    &quot;9016999984&quot;
                  </span>
                  ,{"\n"}
                  {"  "}
                  <span style={{ color: "#9CDCFE" }}>email</span>:{" "}
                  <span style={{ color: "#CE9178" }}>
                    &quot;malidhanga@gmail.com&quot;
                  </span>
                  ,{"\n"}
                  {"  "}
                  <span style={{ color: "#9CDCFE" }}>languages</span>: [
                  <span style={{ color: "#CE9178" }}>
                    &quot;English&quot;, &quot;Hindi&quot;, &quot;Gujarati&quot;
                  </span>
                  ]{"\n"}
                  <span style={{ color: "#d4d4d4" }}>{"}"}</span>;
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Services */}
        <motion.section
          className="space-y-6 sm:space-y-8"
          variants={itemVariants}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-white">
              <Cog
                size={20}
                color="#f59e42"
                strokeWidth={sharedStroke}
                className="inline mr-2"
              />
              Capability tracks
            </h2>
            <p
              className="text-gray-400 text-xs sm:text-sm"
              style={{
                fontFamily:
                  "Menlo, Monaco, 'Fira Mono', 'Liberation Mono', 'Courier New', monospace",
              }}
            >
              Choose the lane you need — or mix them for a full-stack launch.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            {serviceTracks.map((service, index) => (
              <motion.div
                key={service.title}
                className="p-5 sm:p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur space-y-3"
                variants={itemVariants}
                transition={{ delay: 0.05 * index }}
                whileHover={{ y: -6, scale: 1.01 }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-display font-semibold text-white flex items-center gap-2">
                    <span>{serviceTrackIcons[service.title]}</span>
                    {service.title}
                  </h3>
                  <span className="text-xs text-gray-400 uppercase tracking-wide">
                    Focus
                  </span>
                </div>
                <p
                  className="text-gray-300 text-sm sm:text-base"
                  style={{
                    fontFamily:
                      "Menlo, Monaco, 'Fira Mono', 'Liberation Mono', 'Courier New', monospace",
                  }}
                >
                  {service.desc}
                </p>
                <div className="space-y-1.5 text-xs sm:text-sm text-gray-300">
                  {service.points.map((point) => (
                    <div key={point} className="flex items-start gap-2">
                      <span className="h-0.5 w-2 bg-[#ffffff60] mt-2 inline-block" />
                      {/* Removed icon for specific key points */}
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Process */}
        <motion.section
          className="space-y-6 sm:space-y-8"
          variants={itemVariants}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-white">
              <Lightbulb
                size={20}
                color="#facc15"
                strokeWidth={sharedStroke}
                className="inline mr-2"
              />
              Process that ships
            </h2>
            <p
              className="text-gray-400 text-xs sm:text-sm"
              style={{
                fontFamily:
                  "Menlo, Monaco, 'Fira Mono', 'Liberation Mono', 'Courier New', monospace",
              }}
            >
              Tight loops, visible progress, and instrumentation from day one.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-4 sm:gap-6">
            {process.map((step, index) => (
              <motion.div
                key={step.title}
                className="p-4 sm:p-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur space-y-3"
                variants={itemVariants}
                transition={{ delay: 0.05 * index }}
              >
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <span className="h-6 w-6 rounded-full border border-white/20 flex items-center justify-center text-white">
                    {processIcons[index]}
                  </span>
                  <span>Step</span>
                </div>
                <p className="text-base sm:text-lg font-semibold text-white">
                  {step.title}
                </p>
                <p
                  className="text-base sm:text-lg text-gray-300"
                  style={{
                    fontFamily:
                      "Menlo, Monaco, 'Fira Mono', 'Liberation Mono', 'Courier New', monospace",
                  }}
                >
                  {step.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Featured strip */}
        <motion.section
          className="space-y-6 sm:space-y-8"
          variants={containerVariants}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-white">
              <LayoutDashboard
                size={20}
                color="#0ea5e9"
                strokeWidth={sharedStroke}
                className="inline mr-2"
              />
              Work snapshots
            </h2>
            <p
              className="text-gray-400 text-xs sm:text-sm"
              style={{
                fontFamily:
                  "Menlo, Monaco, 'Fira Mono', 'Liberation Mono', 'Courier New', monospace",
              }}
            >
              A few lanes I keep building in.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            {featured.map((item, index) => (
              <motion.div
                key={item.label}
                className="p-5 sm:p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur"
                variants={itemVariants}
                transition={{ delay: 0.08 * index }}
                whileHover={{ y: -6, scale: 1.01 }}
              >
                <p className="text-sm uppercase tracking-widest text-gray-400 mb-2 flex items-center gap-2">
                  {featuredIcons[index]}
                  {item.label}
                </p>
                <p
                  className="text-base sm:text-lg text-white"
                  style={{
                    fontFamily:
                      "Menlo, Monaco, 'Fira Mono', 'Liberation Mono', 'Courier New', monospace",
                  }}
                >
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section
          className="space-y-6 sm:space-y-8"
          variants={itemVariants}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-white">
              <Cog
                size={20}
                color="#60a5fa"
                strokeWidth={sharedStroke}
                className="inline mr-2"
              />
              Skills
            </h2>
            <p
              className="text-gray-400 text-xs sm:text-sm"
              style={{
                fontFamily:
                  "Menlo, Monaco, 'Fira Mono', 'Liberation Mono', 'Courier New', monospace",
              }}
            >
              Focused on modern, responsive web experiences.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            <div className="p-5 sm:p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur space-y-3">
              <p className="text-base sm:text-lg font-semibold text-white flex items-center gap-2">
                <Monitor size={18} color="#1e293b" strokeWidth={sharedStroke} />
                Frontend
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-2 rounded-lg border border-white/10 bg-white/5 text-xs sm:text-sm text-gray-200 flex items-center gap-2 "
                    style={{
                      fontFamily:
                        "Menlo, Monaco, 'Fira Mono', 'Liberation Mono', 'Courier New', monospace",
                    }}
                  >
                    {skillIcons[skill]} {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-5 sm:p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur space-y-3">
              <p className="text-base sm:text-lg font-semibold text-white flex items-center gap-2">
                <Database
                  size={18}
                  color="#16a34a"
                  strokeWidth={sharedStroke}
                />
                Backend
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-2 rounded-lg border border-white/10 bg-white/5 text-xs sm:text-sm text-gray-200 flex items-center gap-2"
                    style={{
                      fontFamily:
                        "Menlo, Monaco, 'Fira Mono', 'Liberation Mono', 'Courier New', monospace",
                    }}
                  >
                    {skillIcons[skill]} {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-5 sm:p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur space-y-3">
              <p className="text-base sm:text-lg font-semibold text-white flex items-center gap-2">
                <Paintbrush
                  size={18}
                  color="#f59e42"
                  strokeWidth={sharedStroke}
                />
                UI/UX & Tools
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.uiux.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-2 rounded-lg border border-white/10 bg-white/5 text-xs sm:text-sm text-gray-200 flex items-center gap-2"
                    style={{
                      fontFamily:
                        "Menlo, Monaco, 'Fira Mono', 'Liberation Mono', 'Courier New', monospace",
                    }}
                  >
                    {skillIcons[skill]} {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Platforms & Tools */}
        <motion.section
          className="space-y-6 sm:space-y-8"
          variants={itemVariants}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-white">
              <Cloud
                size={20}
                color="#d84d3b"
                strokeWidth={sharedStroke}
                className="inline mr-2"
              />
              Platforms & Tools
            </h2>
            <p
              className="text-gray-400 text-xs sm:text-sm"
              style={{
                fontFamily:
                  "Menlo, Monaco, 'Fira Mono', 'Liberation Mono', 'Courier New', monospace",
              }}
            >
              Ecosystems I build and design with.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {platforms.map((tool) => (
              <span
                key={tool}
                className="px-3 sm:px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-xs sm:text-sm text-gray-200 flex items-center gap-2"
                style={{
                  fontFamily:
                    "Menlo, Monaco, 'Fira Mono', 'Liberation Mono', 'Courier New', monospace",
                }}
              >
                {platformIcons[tool]} {tool}
              </span>
            ))}
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section
          className="space-y-6 sm:space-y-8"
          variants={itemVariants}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-white">
              <CheckCircle2
                size={20}
                color="#14b8a6"
                strokeWidth={sharedStroke}
                className="inline mr-2"
              />
              Projects
            </h2>
            <p
              className="text-gray-400 text-xs sm:text-sm"
              style={{
                fontFamily:
                  "Menlo, Monaco, 'Fira Mono', 'Liberation Mono', 'Courier New', monospace",
              }}
            >
              Selected work as Mohammadali Dhanga (Dhanga Mohammadali).
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="p-5 sm:p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur space-y-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 * index }}
                whileHover={{ y: -6, scale: 1.01 }}
              >
                <p className="text-lg font-semibold text-white flex items-center gap-2">
                  {projectIcons[index]}
                  {project.title}
                </p>
                <p
                  className="text-sm sm:text-base text-gray-300"
                  style={{
                    fontFamily:
                      "Menlo, Monaco, 'Fira Mono', 'Liberation Mono', 'Courier New', monospace",
                  }}
                >
                  {project.desc}
                </p>
                <Link
                  href="https://mohammadalidhanga.dev"
                  className="text-sm font-semibold text-white underline"
                >
                  View Project
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education, Hackathons, Courses, Languages */}
        <motion.section
          className="space-y-6 sm:space-y-8"
          variants={itemVariants}
        >
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            <div className="space-y-4 p-5 sm:p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
              <h3 className="text-lg sm:text-xl font-display font-bold text-white flex items-center gap-2">
                <GraduationCap
                  size={20}
                  color="#6366f1"
                  strokeWidth={sharedStroke}
                />
                Education
              </h3>
              <div className="space-y-3">
                {education.map((item, idx) => (
                  <div
                    key={item.title}
                    className="border-b border-white/10 pb-3 last:border-0 last:pb-0"
                  >
                    <p className="text-base sm:text-lg font-semibold text-white flex items-center gap-2">
                      {educationIcons[idx]} {item.title}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-300">
                      {item.place}
                    </p>
                    <p
                      className="text-xs sm:text-sm text-gray-400"
                      style={{
                        fontFamily:
                          "Menlo, Monaco, 'Fira Mono', 'Liberation Mono', 'Courier New', monospace",
                      }}
                    >
                      {item.time}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4 p-5 sm:p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
              <h3 className="text-lg sm:text-xl font-display font-bold text-white flex items-center gap-2">
                <Trophy size={18} color="#eab308" strokeWidth={sharedStroke} />
                Hackathons
              </h3>
              <div className="space-y-2 text-sm text-gray-200">
                {hackathons.map((item, idx) => (
                  <div
                    key={item}
                    className="flex items-start gap-2"
                    style={{
                      fontFamily:
                        "Menlo, Monaco, 'Fira Mono', 'Liberation Mono', 'Courier New', monospace",
                    }}
                  >
                    {hackathonIcons[idx]}
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <h3 className="text-lg sm:text-xl font-display font-bold text-white pt-4 flex items-center gap-2">
                <BookOpen
                  size={18}
                  color="#f59e42"
                  strokeWidth={sharedStroke}
                />
                Courses
              </h3>
              <div className="space-y-2 text-sm text-gray-200">
                {courses.map((item, idx) => (
                  <div
                    key={item}
                    className="flex items-start gap-2"
                    style={{
                      fontFamily:
                        "Menlo, Monaco, 'Fira Mono', 'Liberation Mono', 'Courier New', monospace",
                    }}
                  >
                    {courseIcons[idx]}
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <h3 className="text-lg sm:text-xl font-display font-bold text-white pt-4 flex items-center gap-2">
                <Languages
                  size={18}
                  color="#60a5fa"
                  strokeWidth={sharedStroke}
                />
                Languages
              </h3>
              <div
                className="flex flex-wrap gap-2"
                style={{
                  fontFamily:
                    "Menlo, Monaco, 'Fira Mono', 'Liberation Mono', 'Courier New', monospace",
                }}
              >
                {languages.map((lang) => (
                  <span
                    key={lang}
                    className="px-3 py-2 rounded-lg border border-white/10 bg-white/5 text-xs sm:text-sm text-gray-200 flex items-center gap-2"
                  >
                    {languageIcons[lang]} {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      </motion.div>
    </main>
  );
}
