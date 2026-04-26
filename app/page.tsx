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
        keywords="Mohammadali Dhanga, AliDev, Full Developer, AI Developer, Web Developer India, Freelance Developer Gandhinagar"
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
              <p className="text-xl sm:text-2xl md:text-3xl font-light text-gray-400 leading-tight max-w-2xl uppercase tracking-wider">
                I specialize in{" "}
                <span className="text-white font-black">
                  Scalable Web Infrastructures
                </span>{" "}
                and high-impact digital experiences. Delivering precision and
                performance at scale.
              </p>

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
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
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
        </section>
      </div>
    </div>
  );
}
