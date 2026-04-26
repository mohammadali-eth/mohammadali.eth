"use client";

import { motion } from "framer-motion";
import { FileText, ArrowRight } from "lucide-react";
import aboutMeData from "../../Config/aboutme.json";
import educationData from "../../Config/education.json";
import experienceData from "../../Config/experience.json";
import SEO from "@/components/SEO";
import Link from "next/link";

export default function About() {
  return (
    <div className="px-6 py-12 md:py-24 md:px-16 min-h-screen">
      <SEO
        title="About Mohammadali Dhanga | Full Stack & AI Developer India"
        description="Learn more about Mohammadali Dhanga, a leading Full Stack and AI Developer in India specializing in scalable web solutions and intelligent automation."
        keywords="Mohammadali Dhanga, AliDev, Full developer India, AI developer Gujarat, freelance web developer Gandhinagar, JavaScript, React.js, Node.js, TypeScript, Next.js, MySQL, MongoDB, Tailwind CSS, PostgreSQL, Ruby on Rails, React Native, PHP, GitHub, Figma, Vercel, WordPress, Shopify, Adobe Photoshop, Render, Netlify, CSS3, Java, HTML5, Python, Solidity, AWS, Google Cloud, Firebase, .Net, Angular, Context-API, Express.js, Flask, SASS, Web3.js, Vue.js, Yarn, Redis, Supabase, Prisma, Adobe Illustrator, Canva, Git, Docker, Postman, Portfolio"
        url="https://www.alidev.in/about"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-6xl mx-auto space-y-20 md:space-y-32"
      >
        {/* Header & Bio Section */}
        <section>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16 border-b border-white/10 pb-8 md:pb-10">
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight uppercase">
              About
            </h1>
            <p className="text-gray-600 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.4em] pb-2">
              Identity & Expertise
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="space-y-12 md:space-y-16">
              <p className="text-2xl sm:text-3xl md:text-5xl leading-tight font-light text-white tracking-tight">
                I’m a passionate Full Stack Developer building modern, scalable,
                and high-performance web applications.
              </p>

              <div className="space-y-12">
                <div className="space-y-6">
                  <h2 className="text-white/20 font-mono text-xs uppercase tracking-[0.3em]">
                    The Journey
                  </h2>
                  <div className="text-lg md:text-xl text-gray-400 font-light leading-relaxed space-y-6">
                    <p>
                      As a{" "}
                      <span className="text-white font-bold">
                        Mohammadali Dhanga developer
                      </span>
                      , I have dedicated years to mastering the art of software
                      engineering, focusing on creating seamless digital
                      experiences. Based in India, I have built a reputation as
                      a leading{" "}
                      <span className="text-white font-bold">
                        Full developer in India
                      </span>
                      , helping businesses bridge the gap between complex
                      backend systems and intuitive user interfaces. My journey
                      has taken me from academic projects to professional
                      collaborations, where I&apos;ve honed my skills in modern
                      tech stacks like Next.js, React, and Node.js.
                    </p>
                    <p>
                      Beyond traditional web development, I am also recognized
                      as an{" "}
                      <span className="text-white font-bold">
                        AI developer in Gujarat
                      </span>
                      , integrating machine learning and intelligent automation
                      into web applications. This unique combination of skills
                      allows me to build &apos;smart&apos; platforms that
                      don&apos;t just display data but understand and act on it.
                      Currently, I am expanding my reach as a{" "}
                      <span className="text-white font-bold">
                        freelance web developer in Gandhinagar
                      </span>
                      , providing high-end development services to clients
                      looking for precision, performance, and scalability.
                    </p>
                    <p>
                      My technical expertise is built on a solid foundation of
                      MERN stack development, but I don&apos;t limit myself to a
                      single ecosystem. I have worked extensively with Ruby on
                      Rails, Java Spring Boot, and Python, giving me a versatile
                      perspective on system architecture. My approach to
                      development is rooted in the principles of Minimalist
                      Brutalism—focusing on clarity, structural integrity, and
                      raw performance.
                    </p>
                    <p>
                      Throughout my career, I have led several high-impact
                      projects, ranging from AI-powered invoicing systems like
                      Invix to real-time collaboration tools. You can explore a
                      full list of my work on my{" "}
                      <Link
                        href="/projects"
                        className="text-white underline underline-offset-4 decoration-white/20 hover:decoration-white transition-all inline-flex items-center gap-2"
                      >
                        projects page <ArrowRight size={14} />
                      </Link>
                      , where I showcase how I translate complex requirements
                      into elegant, production-ready code.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <a
                  href="https://drive.google.com/file/d/1Zc1OKgVPQoX4De8uDyW-4kuGZ-s35gmo/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 px-8 py-4 md:px-12 md:py-6 bg-white text-black hover:bg-black hover:text-white border border-white transition-all font-black text-[10px] md:text-xs uppercase tracking-[0.3em] shadow-[10px_10px_0px_rgba(255,255,255,0.05)] hover:shadow-none w-full sm:w-auto justify-center"
                >
                  <FileText size={20} />
                  <span>Resume</span>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 h-fit border border-white/10">
              <div className="p-8 md:p-12 bg-black space-y-3">
                <h2 className="text-[9px] md:text-[10px] font-mono uppercase tracking-[0.4em] text-gray-600 font-black">
                  Location
                </h2>
                <p className="text-xl md:text-2xl font-bold uppercase tracking-tight">
                  {aboutMeData.Address}
                </p>
              </div>
              <div className="p-8 md:p-12 bg-black space-y-3">
                <h2 className="text-[9px] md:text-[10px] font-mono uppercase tracking-[0.4em] text-gray-600 font-black">
                  Languages
                </h2>
                <p className="text-xl md:text-2xl font-bold uppercase tracking-tight">
                  {aboutMeData.Language.join(", ")}
                </p>
              </div>
              <div className="p-8 md:p-12 bg-black space-y-3">
                <h2 className="text-[9px] md:text-[10px] font-mono uppercase tracking-[0.4em] text-gray-600 font-black">
                  Expertise
                </h2>
                <p className="text-xl md:text-2xl font-bold uppercase tracking-tight">
                  {aboutMeData.Role}
                </p>
              </div>
              <div className="p-8 md:p-12 bg-black space-y-3">
                <h2 className="text-[9px] md:text-[10px] font-mono uppercase tracking-[0.4em] text-gray-600 font-black">
                  Status
                </h2>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
                  <p className="text-xl md:text-2xl font-bold uppercase tracking-tight">
                    Active
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="space-y-12 md:space-y-16">
          <div className="flex justify-between items-end border-b border-white/10 pb-4 md:pb-6">
            <h2 className="text-3xl md:text-6xl font-bold tracking-tight uppercase underline decoration-1 underline-offset-8 decoration-white/20 text-white">
              History
            </h2>
          </div>
          <div className="space-y-0">
            {experienceData.experience.map((exp, idx) => (
              <div
                key={idx}
                className="group py-12 md:py-20 border-b border-white/5 flex flex-col md:flex-row gap-8 md:gap-12 items-start hover:bg-white/[0.005] transition-all sm:px-4 md:px-10"
              >
                <div className="md:w-1/3">
                  <p className="text-[9px] md:text-[10px] font-mono text-gray-600 mb-4 md:mb-6 uppercase tracking-[0.4em] font-black">
                    {exp.duration}
                  </p>
                  <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-tighter mb-4 group-hover:pl-2 transition-all duration-500">
                    {exp.company}
                  </h3>
                  <div className="inline-block px-3 py-1 border border-white/10 text-[9px] font-mono uppercase tracking-[0.3em] text-gray-500">
                    {exp.type}
                  </div>
                </div>
                <div className="md:w-2/3 space-y-4 md:space-y-8">
                  <h4 className="text-xl md:text-3xl font-bold text-white uppercase tracking-tight leading-none">
                    {exp.title}
                  </h4>
                  <p className="text-gray-500 font-light text-lg md:text-2xl leading-relaxed max-w-3xl">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Knowledge Section */}
        <section className="space-y-12 md:space-y-16 pb-20 md:pb-32">
          <div className="flex justify-between items-end border-b border-white/10 pb-4 md:pb-6">
            <h2 className="text-3xl md:text-6xl font-bold tracking-tight uppercase underline decoration-1 underline-offset-8 decoration-white/20 text-white">
              Knowledge
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {educationData.degrees.map((edu, idx) => (
              <div
                key={idx}
                className="p-8 md:p-16 border border-white/5 bg-white/[0.005] flex flex-col justify-between space-y-8 md:space-y-12 hover:border-white/20 hover:bg-white/[0.01] transition-all duration-700"
              >
                <div className="space-y-4 md:space-y-8">
                  <p className="text-[9px] md:text-[10px] font-mono text-gray-600 uppercase tracking-[0.4em] font-black">
                    {edu.duration}
                  </p>
                  <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-tighter leading-[1]">
                    {edu.course}
                  </h3>
                  <div className="w-12 h-0.5 bg-white/20 group-hover:w-20 transition-all duration-700"></div>
                  <p className="text-lg md:text-xl text-gray-400 font-medium uppercase tracking-[0.2em]">
                    {edu.name}
                  </p>
                </div>
                <p className="text-gray-500 font-light italic leading-relaxed text-lg md:text-xl">
                  {edu.description}
                </p>
                <div className="pt-6 md:pt-10 border-t border-white/5 flex justify-between items-center">
                  <span className="text-[9px] md:text-[10px] font-mono uppercase tracking-[0.3em] text-gray-600 font-black">
                    Archive / {edu.grade}
                  </span>
                  <span className="text-[8px] md:text-[9px] font-mono uppercase border border-white/10 px-3 py-1 font-black text-white/40">
                    Certification
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </motion.div>
    </div>
  );
}
