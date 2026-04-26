"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowDown,
  Code,
  Layout,
  Server,
  Database,
  Globe,
  ArrowRight,
} from "lucide-react";
import aboutMeData from "../Config/aboutme.json";
import SEO from "@/components/SEO";

export default function Home() {
  const nameParts = aboutMeData.Name.split(" ");
  const firstName = nameParts[0];
  const lastName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : "";

  return (
    <div className="min-h-screen flex flex-col justify-start px-6 md:px-16 container mx-auto max-w-7xl relative pb-20">
      <SEO
        title="Mohammadali Dhanga | AliDev - Full Stack & AI Developer"
        description="Mohammadali Dhanga (AliDev) is a Full stack and AI developer building modern web apps, SaaS tools, and innovative projects."
        keywords="Mohammadali Dhanga, AliDev, Full Stack Developer, AI Developer, Web Developer India, Freelance Developer Gandhinagar, JavaScript, React.js, Node.js, TypeScript, Next.js, MySQL, MongoDB, Tailwind CSS, PostgreSQL, Ruby on Rails, React Native, PHP, GitHub, Figma, Vercel, WordPress, Shopify, Adobe Photoshop, Render, Netlify, CSS3, Java, HTML5, Python, Solidity, AWS, Google Cloud, Firebase, .Net, Angular, Context-API, Express.js, Flask, SASS, Web3.js, Vue.js, Yarn, Redis, Supabase, Prisma, Adobe Illustrator, Canva, Git, Docker, Postman, Portfolio"
        url="https://www.alidev.in/"
      />
      <div className="pt-16 md:pt-24 space-y-12 md:space-y-20">
        {/* Intro Tag */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex items-center gap-3 text-white/40 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.4em]"
        >
          <div className="w-8 md:w-12 h-[1px] bg-white/20"></div>
          <span>{aboutMeData.Role}</span>
        </motion.div>

        {/* Hero Section */}
        <section className="space-y-12 md:space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-[12vw] sm:text-[8vw] md:text-[6vw] lg:text-[6.5vw] font-black tracking-tighter leading-[0.85] uppercase -ml-1 border-b border-white/5 pb-8 md:pb-12 transition-all">
              Hi, I&apos;m <br />
              <span className="text-white/20 hover:text-white transition-colors duration-1000 cursor-default">
                Mohammadali Dhanga
              </span>
            </h1>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-10 md:gap-12">
            <div className="lg:col-span-8 space-y-10 md:space-y-12">
              <div className="space-y-6">
                <h2 className="text-white/20 font-mono text-xs uppercase tracking-[0.3em]">
                  Professional Profile
                </h2>
                <p className="text-lg md:text-xl font-light text-gray-400 leading-relaxed max-w-3xl">
                  As a dedicated{" "}
                  <span className="text-white font-bold">
                    Full Stack Developer
                  </span>{" "}
                  and <span className="text-white font-bold">AI Developer</span>{" "}
                  based in India, I,{" "}
                  <span className="text-white">Mohammadali Dhanga</span> (also
                  known as <span className="text-white">AliDev</span>), bridge
                  the gap between complex backend architectures and intuitive
                  frontend experiences. With extensive experience as a{" "}
                  <span className="text-white">Web Developer in India</span>, I
                  have dedicated my career to building high-performance,
                  scalable digital solutions for global clients and innovative
                  startups. My journey in technology has been driven by a
                  relentless curiosity and a commitment to engineering
                  excellence.
                </p>
                <p className="text-lg md:text-xl font-light text-gray-400 leading-relaxed max-w-3xl">
                  Currently operating as a{" "}
                  <span className="text-white font-bold">
                    Freelance Developer in Gandhinagar
                  </span>
                  , I specialize in transforming ambitious ideas into
                  production-ready software using modern stacks like Next.js,
                  React, and Node.js. I understand that a successful digital
                  product requires more than just clean code; it requires a deep
                  understanding of user behavior, business logic, and the
                  ever-evolving landscape of artificial intelligence. By
                  integrating intelligent algorithms and automated workflows, I
                  help businesses scale their operations and provide smarter
                  services to their users.
                </p>
                <p className="text-lg md:text-xl font-light text-gray-400 leading-relaxed max-w-3xl">
                  My design philosophy is rooted in{" "}
                  <span className="text-white">Minimalist Brutalism</span>,
                  focusing on structural grid systems and honesty in design. I
                  believe that performance is a feature, and I architect every
                  application to be fast, reliable, and secure. Whether I am
                  developing a custom ERP system, an AI-powered invoicing
                  platform, or a real-time collaboration tool, my goal is to
                  deliver precision and performance at scale. This focus on
                  quality has earned me a reputation as a reliable partner for
                  those looking for expert development services. I frequently
                  share my findings and tutorials on my{" "}
                  <Link
                    href="/blog"
                    className="text-white underline underline-offset-4 decoration-white/20 hover:decoration-white transition-all"
                  >
                    Full Stack developer blog
                  </Link>{" "}
                  and showcase my latest work in my{" "}
                  <Link
                    href="/projects"
                    className="text-white underline underline-offset-4 decoration-white/20 hover:decoration-white transition-all"
                  >
                    AliDev project portfolio
                  </Link>
                  .
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                <Link
                  href="/projects"
                  className="group flex items-center justify-between w-full sm:w-80 border border-white bg-white text-black hover:bg-transparent hover:text-white transition-all p-5 md:p-7 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] relative"
                >
                  <span>Browse Portfolio</span>
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-2" />
                </Link>
                <Link
                  href="/contact"
                  className="group flex items-center justify-between w-full sm:w-80 border border-white/20 hover:border-white transition-all p-5 md:p-7 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-white"
                >
                  <span>Initiate Contact</span>
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 opacity-40 group-hover:opacity-100 transition-all group-hover:translate-x-2" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 hidden lg:flex flex-col justify-end items-end pb-4">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-white/20"
              >
                <ArrowDown size={48} strokeWidth={1} />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Quick Grid */}
        <section className="space-y-10">
          <h2 className="text-white/20 font-mono text-xs uppercase tracking-[0.3em]">
            Core Technical Arsenal
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
            <div className="p-8 md:p-12 bg-black space-y-6 group hover:bg-white/[0.02] transition-colors">
              <Layout
                size={32}
                className="text-white/20 group-hover:text-white transition-colors"
              />
              <div className="space-y-2">
                <h3 className="font-bold uppercase tracking-widest text-xs">
                  Frameworks
                </h3>
                <p className="text-[10px] text-gray-600 font-mono leading-relaxed uppercase">
                  REACT, NEXT.JS, TAILWIND, FRAMER
                </p>
              </div>
            </div>
            <div className="p-8 md:p-12 bg-black space-y-6 group hover:bg-white/[0.02] transition-colors">
              <Server
                size={32}
                className="text-white/20 group-hover:text-white transition-colors"
              />
              <div className="space-y-2">
                <h3 className="font-bold uppercase tracking-widest text-xs">
                  Backend
                </h3>
                <p className="text-[10px] text-gray-600 font-mono leading-relaxed uppercase">
                  NODE, NESTJS, RAILS, EXPRESS
                </p>
              </div>
            </div>
            <div className="p-8 md:p-12 bg-black space-y-6 group hover:bg-white/[0.02] transition-colors">
              <Database
                size={32}
                className="text-white/20 group-hover:text-white transition-colors"
              />
              <div className="space-y-2">
                <h3 className="font-bold uppercase tracking-widest text-xs">
                  Data
                </h3>
                <p className="text-[10px] text-gray-600 font-mono leading-relaxed uppercase">
                  POSTGRES, MONGO, REDIS, MYSQL
                </p>
              </div>
            </div>
            <div className="p-8 md:p-12 bg-black space-y-6 group hover:bg-white/[0.02] transition-colors">
              <Globe
                size={32}
                className="text-white/20 group-hover:text-white transition-colors"
              />
              <div className="space-y-2">
                <h3 className="font-bold uppercase tracking-widest text-xs">
                  Deployment
                </h3>
                <p className="text-[10px] text-gray-600 font-mono leading-relaxed uppercase">
                  AWS, DOCKER, VERCEL, ACTIONS
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
