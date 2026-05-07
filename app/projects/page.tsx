"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import projectsData from "../../Config/projects.json";
import SEO from "@/components/SEO";

export default function Projects() {
  const allProjects = [
    ...projectsData.dataList1,
    ...projectsData.dataList2,
    ...projectsData.dataList3,
  ];

  return (
    <div className="px-6 py-12 md:py-24 md:px-16 min-h-[85vh]">
      <SEO
        title="Projects Portfolio | Mohammadali Dhanga - Full Stack Showcase"
        description="Explore the portfolio of Mohammadali Dhanga, featuring AI-powered applications, MERN stack platforms, and innovative software solutions."
        keywords="Mohammadali Dhanga, AliDev, Projects, Portfolio, Full Stack, AI, Gandhinagar, India, JavaScript, React.js, Node.js, TypeScript, Next.js, MySQL, MongoDB, Tailwind CSS, PostgreSQL, Ruby on Rails, React Native, PHP, GitHub, Figma, Vercel, WordPress, Shopify, Adobe Photoshop, Render, Netlify, CSS3, Java, HTML5, Python, Solidity, AWS, Google Cloud, Firebase, .Net, Angular, Context-API, Express.js, Flask, SASS, Web3.js, Vue.js, Yarn, Redis, Supabase, Prisma, Adobe Illustrator, Canva, Git, Docker, Postman, Portfolio"
        url="https://www.alidev.in/projects"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16 border-b border-white/10 pb-8 md:pb-10">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight uppercase">
              Project Portfolio
            </h1>
            <p className="text-gray-400 font-light text-sm max-w-xl">
              A collection of high-impact digital products and scalable systems.
              Explore my technical insights on the{" "}
              <Link
                href="/blog"
                className="text-white underline underline-offset-4 decoration-white/20 hover:decoration-white transition-all"
              >
                developer blog
              </Link>{" "}
              or return to the{" "}
              <Link
                href="/"
                className="text-white underline underline-offset-4 decoration-white/20 hover:decoration-white transition-all"
              >
                AliDev homepage
              </Link>
              .
            </p>
          </div>
          <p className="text-gray-600 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.4em] pb-2">
            Selected Projects
          </p>
        </div>

        <div className="flex flex-col pt-4">
          {allProjects.map((project, idx) => (
            <Link
              href={project.live || project.code || "#"}
              key={idx}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col lg:grid lg:grid-cols-12 py-12 md:py-20 border-b border-white/5 hover:border-white/20 transition-all gap-8 md:gap-12"
            >
              <div className="lg:col-span-4 flex flex-col justify-between items-start">
                <div className="space-y-4">
                  <span className="text-[9px] md:text-[10px] font-mono text-gray-600 uppercase tracking-[0.3em]">
                    Project 0{idx + 1}
                  </span>
                  <h3 className="text-3xl md:text-5xl font-bold tracking-tight  group-hover:pl-4 transition-all duration-500">
                    {project.name}
                  </h3>
                </div>
                <div className="hidden lg:flex items-center gap-4 mt-8 text-gray-500 font-mono text-[10px]  tracking-[0.4em] group-hover:text-white transition-colors">
                  <span>View Case Study</span>
                  <div className="w-8 h-[1px] bg-white/20 group-hover:w-12 group-hover:bg-white transition-all duration-500"></div>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
              <div className="lg:col-span-8 flex flex-col justify-between">
                <p className="text-gray-400 group-hover:text-gray-200 transition-colors text-lg md:text-2xl leading-relaxed font-light mb-10 max-w-3xl">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {project.skills.map((skill: string) => (
                    <span
                      key={skill}
                      className="px-3 py-1 md:px-4 md:py-1.5 border border-white/5 group-hover:border-white/20 transition-colors text-gray-500 group-hover:text-white text-[9px] md:text-[10px] font-mono uppercase tracking-widest"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
