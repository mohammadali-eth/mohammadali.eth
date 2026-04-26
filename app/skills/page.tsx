"use client";

import { motion } from "framer-motion";
import SEO from "@/components/SEO";

const techStack = [
  // --- FEATURED SKILLS ---
  {
    name: "JAVASCRIPT",
    color: "bg-[#f7df1e]",
    textColor: "text-black",
    featured: true,
    level: "Advanced",
    icon: "javascript",
  },
  {
    name: "REACT",
    color: "bg-[#61dafb]",
    textColor: "text-black",
    featured: true,
    level: "Expert",
    icon: "react",
  },
  {
    name: "NEXT",
    color: "bg-[#ffffff]",
    textColor: "text-black",
    featured: true,
    level: "Production",
    icon: "nextdotjs",
    invertOnHover: true,
  },
  {
    name: "REACT NATIVE",
    color: "bg-[#61dafb]",
    textColor: "text-black",
    featured: true,
    level: "Mobile",
    icon: "react",
  },
  {
    name: "TAILWIND CSS",
    color: "bg-[#38bdf8]",
    textColor: "text-black",
    featured: true,
    level: "Styling",
    icon: "tailwindcss",
  },
  {
    name: "RUBY ON RAILS",
    color: "bg-[#CC0000]",
    textColor: "text-white",
    featured: true,
    level: "Backend",
    icon: "rubyonrails",
  },
  {
    name: "NODE.JS",
    color: "bg-[#339933]",
    textColor: "text-white",
    featured: true,
    level: "Runtime",
    icon: "nodedotjs",
  },
  {
    name: "NESTJS",
    color: "bg-[#e0234e]",
    textColor: "text-white",
    featured: true,
    level: "Architecture",
    icon: "nestjs",
  },
  {
    name: "EXPRESS.JS",
    color: "bg-[#ffffff]",
    textColor: "text-black",
    featured: true,
    level: "API",
    icon: "express",
    invertOnHover: true,
  },
  {
    name: "MONGODB",
    color: "bg-[#47a248]",
    textColor: "text-white",
    featured: true,
    level: "NoSQL",
    icon: "mongodb",
  },
  {
    name: "POSTGRES",
    color: "bg-[#336791]",
    textColor: "text-white",
    featured: true,
    level: "SQL",
    icon: "postgresql",
  },
  {
    name: "PRISMA",
    color: "bg-[#2d3748]",
    textColor: "text-white",
    featured: true,
    level: "ORM",
    icon: "prisma",
  },
  {
    name: "SASS",
    color: "bg-[#cc6699]",
    textColor: "text-white",
    featured: true,
    level: "Pre-proc",
    icon: "sass",
  },
  {
    name: "GITHUB",
    color: "bg-white",
    textColor: "text-black",
    featured: true,
    level: "Version Control",
    icon: "github",
    invertOnHover: true,
  },
  {
    name: "POSTMAN",
    color: "bg-[#ff6c37]",
    textColor: "text-white",
    featured: true,
    level: "API Testing",
    icon: "postman",
  },
  {
    name: "VERCEL",
    color: "bg-white",
    textColor: "text-black",
    featured: true,
    level: "Deployment",
    icon: "vercel",
    invertOnHover: true,
  },

  // --- OTHERS ---
  { name: "TYPESCRIPT", color: "bg-[#3178c6]", icon: "typescript" },
  { name: "CSS3", color: "bg-[#264de4]", icon: "css3" },
  { name: "JAVA", color: "bg-[#007396]", icon: "openjdk" },
  { name: "HTML5", color: "bg-[#e34f26]", icon: "html5" },
  { name: "PYTHON", color: "bg-[#3776ab]", icon: "python" },
  { name: "SOLIDITY", color: "bg-[#363636]", icon: "solidity" },
  { name: "PHP", color: "bg-[#777bb4]", icon: "php" },
  { name: "VUE.JS", color: "bg-[#4fc08d]", icon: "vuedotjs" },
  { name: "ANGULAR", color: "bg-[#dd0031]", icon: "angular" },
  {
    name: "CONTEXT-API",
    color: "bg-[#00d8ff]",
    textColor: "text-black",
    icon: "react",
  },
  { name: "MYSQL", color: "bg-[#4479a1]", icon: "mysql" },
  { name: "REDIS", color: "bg-[#dc382d]", icon: "redis" },
  {
    name: "SUPABASE",
    color: "bg-[#3ecf8e]",
    textColor: "text-black",
    icon: "supabase",
  },
  {
    name: "FLASK",
    color: "bg-[#000000]",
    border: "border-white/20",
    icon: "flask",
  },
  {
    name: "AWS",
    color: "bg-[#ff9900]",
    textColor: "text-black",
    icon: "amazonwebservices",
  },
  { name: "GOOGLECLOUD", color: "bg-[#4285f4]", icon: "googlecloud" },
  {
    name: "FIREBASE",
    color: "bg-[#ffca28]",
    textColor: "text-black",
    icon: "firebase",
  },
  {
    name: "NETLIFY",
    color: "bg-[#00bebb]",
    textColor: "text-black",
    icon: "netlify",
  },
  {
    name: "RENDER",
    color: "bg-[#46e3b7]",
    textColor: "text-black",
    icon: "render",
  },
  { name: "DOCKER", color: "bg-[#2496ed]", icon: "docker" },
  { name: "GIT", color: "bg-[#f05032]", icon: "git" },
  { name: "YARN", color: "bg-[#2c8ebb]", icon: "yarn" },
  { name: "SHOPIFY", color: "bg-[#7ab55c]", icon: "shopify" },
  { name: "WORDPRESS", color: "bg-[#21759b]", icon: "wordpress" },
  { name: "FIGMA", color: "bg-[#f24e1e]", icon: "figma" },
  {
    name: "ADOBE ILLUSTRATOR",
    color: "bg-[#ff9a00]",
    textColor: "text-black",
    icon: "adobeillustrator",
  },
  {
    name: "ADOBE PHOTOSHOP",
    color: "bg-[#31a8ff]",
    textColor: "text-black",
    icon: "adobephotoshop",
  },
  {
    name: "CANVA",
    color: "bg-[#00c4cc]",
    textColor: "text-black",
    icon: "canva",
  },
  { name: ".NET", color: "bg-[#512bd4]", icon: "dotnet" },
  { name: "WEB3.JS", color: "bg-[#f16822]", icon: "web3dotjs" },
  {
    name: "PORTFOLIO",
    color: "bg-[#000000]",
    border: "border-white/10",
    icon: "visualstudiocode",
  },
];

export default function Skills() {
  return (
    <div className="px-6 py-12 md:py-24 md:px-16 min-h-screen">
      <SEO 
        title="Technical Skills & Stack | Mohammadali Dhanga - Full Stack Expert"
        description="Explore the technical capabilities of Mohammadali Dhanga, including expertise in MERN stack, Ruby on Rails, AI integration, and modern UI/UX design."
        keywords="Mohammadali Dhanga, AliDev, Skills, Tech Stack, Gandhinagar, India, JavaScript, React.js, Node.js, TypeScript, Next.js, MySQL, MongoDB, Tailwind CSS, PostgreSQL, Ruby on Rails, React Native, PHP, GitHub, Figma, Vercel, WordPress, Shopify, Adobe Photoshop, Render, Netlify, CSS3, Java, HTML5, Python, Solidity, AWS, Google Cloud, Firebase, .Net, Angular, Context-API, Express.js, Flask, SASS, Web3.js, Vue.js, Yarn, Redis, Supabase, Prisma, Adobe Illustrator, Canva, Git, Docker, Postman, Portfolio"
        url="https://www.alidev.in/skills"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-6xl mx-auto space-y-24 md:space-y-32"
      >
        <section>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16 border-b border-white/10 pb-8 md:pb-10">
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight uppercase">
              Capabilities
            </h1>
            <p className="text-gray-600 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.4em] pb-2">
              Technology Stack & Expertise
            </p>
          </div>

          <div className="pt-8 space-y-24">
            {/* Featured Skills Section */}
            <div>
              <div className="flex items-center gap-4 mb-12">
                <div className="w-12 h-px bg-white/20"></div>
                <h2 className="text-[10px] md:text-xs font-mono uppercase tracking-[0.5em] text-gray-400 font-black">
                  Core Expertise
                </h2>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-white/10 border border-white/10 overflow-hidden">
                {techStack
                  .filter((t) => t.featured)
                  .map((tech, idx) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: idx * 0.05 }}
                      className="relative group bg-black p-6 md:p-8 transition-all hover:bg-white/[0.03] cursor-default border-r border-b border-white/10 last:border-r-0"
                    >
                      <div className="space-y-4 text-center sm:text-left">
                        <div className="flex justify-between items-start">
                          {/* Real Tech Icon from CDN */}
                          <div
                            className={`w-6 h-6 grayscale group-hover:grayscale-0 transition-all duration-500 opacity-40 group-hover:opacity-100 ${tech.invertOnHover ? "invert group-hover:invert-0" : ""}`}
                          >
                            <img
                              src={`https://cdn.simpleicons.org/${tech.icon}`}
                              alt={`${tech.name} - Mohammadali Dhanga portfolio`}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <span className="text-[8px] font-mono text-gray-600 uppercase tracking-widest hidden sm:block">
                            {tech.level}
                          </span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter leading-none group-hover:pl-2 transition-all duration-300">
                          {tech.name}
                        </h3>
                        <div className="h-0.5 bg-white/10 w-6 group-hover:w-full transition-all duration-500"></div>
                      </div>
                      {/* Hover reveal color bar */}
                      <div
                        className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-700 ${tech.color}`}
                      ></div>
                    </motion.div>
                  ))}
              </div>
            </div>

            {/* Other Technologies Section */}
            <div>
              <div className="flex items-center gap-4 mb-12">
                <div className="w-12 h-px bg-white/20"></div>
                <h2 className="text-[10px] md:text-xs font-mono uppercase tracking-[0.5em] text-gray-400 font-black">
                  Additional Stack
                </h2>
              </div>
              <div className="flex flex-wrap gap-2 md:gap-4">
                {techStack
                  .filter((t) => !t.featured)
                  .map((tech, idx) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: idx * 0.01 }}
                      className={`px-4 py-2 md:px-6 md:py-3 text-[9px] md:text-xs font-bold uppercase tracking-[0.2em] ${tech.color} ${tech.textColor || "text-white"} border border-white/5 transition-all hover:border-white/40 cursor-default opacity-60 hover:opacity-100 flex-grow sm:flex-grow-0 text-center flex items-center justify-center gap-3`}
                    >
                      <img
                        src={`https://cdn.simpleicons.org/${tech.icon}/ffffff`}
                        alt={`${tech.name} - AliDev web application`}
                        className="w-3 h-3 md:w-4 md:h-4"
                      />
                      <span>{tech.name}</span>
                    </motion.div>
                  ))}
              </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32 py-16 md:py-24 border-y border-white/5">
          <div className="space-y-8 md:space-y-12">
            <div className="space-y-2 md:space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter">
                Core Principles
              </h3>
              <p className="text-gray-600 text-[9px] md:text-[10px] font-mono uppercase tracking-[0.4em]">
                Development Philosophy
              </p>
            </div>
            <ul className="space-y-6 md:space-y-8 text-gray-400 font-light text-lg md:text-xl">
              <li className="flex gap-4 md:gap-6 group">
                <span className="text-white/20 font-mono text-xs md:text-sm pt-1 group-hover:text-white transition-colors">
                  01
                </span>
                <span className="leading-relaxed">
                  Building modern, scalable high-performance web applications
                </span>
              </li>
              <li className="flex gap-4 md:gap-6 group">
                <span className="text-white/20 font-mono text-xs md:text-sm pt-1 group-hover:text-white transition-colors">
                  02
                </span>
                <span className="leading-relaxed">
                  Turning complex ideas into real-world products
                </span>
              </li>
              <li className="flex gap-4 md:gap-6 group">
                <span className="text-white/20 font-mono text-xs md:text-sm pt-1 group-hover:text-white transition-colors">
                  03
                </span>
                <span className="leading-relaxed">
                  Scalable, structured backend architectures
                </span>
              </li>
              <li className="flex gap-4 md:gap-6 group">
                <span className="text-white/20 font-mono text-xs md:text-sm pt-1 group-hover:text-white transition-colors">
                  04
                </span>
                <span className="leading-relaxed">
                  Deep focus on UX and frontend performance
                </span>
              </li>
            </ul>
          </div>
          <div className="space-y-8 md:space-y-12">
            <div className="space-y-2 md:space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter">
                Focus Areas
              </h3>
              <p className="text-gray-600 text-[9px] md:text-[10px] font-mono uppercase tracking-[0.4em]">
                Specialized Industries
              </p>
            </div>
            <ul className="space-y-6 md:space-y-8 text-gray-400 font-light text-lg md:text-xl">
              <li className="flex gap-4 md:gap-6 items-center group">
                <div className="w-1.5 h-1.5 bg-white/20 group-hover:bg-white transition-colors"></div>
                <span className="leading-relaxed">
                  Startups & SaaS Projects
                </span>
              </li>
              <li className="flex gap-4 md:gap-6 items-center group">
                <div className="w-1.5 h-1.5 bg-white/20 group-hover:bg-white transition-colors"></div>
                <span className="leading-relaxed">
                  Web3 & Blockchain Integration
                </span>
              </li>
              <li className="flex gap-4 md:gap-6 items-center group">
                <div className="w-1.5 h-1.5 bg-white/20 group-hover:bg-white transition-colors"></div>
                <span className="leading-relaxed">
                  Custom ERP & Management Systems
                </span>
              </li>
              <li className="flex gap-4 md:gap-6 items-center group">
                <div className="w-1.5 h-1.5 bg-white/20 group-hover:bg-white transition-colors"></div>
                <span className="leading-relaxed">Mobile App Development</span>
              </li>
            </ul>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
