"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import blogData from "@/Config/blog.json";
import { ArrowRight } from "lucide-react";

export default function BlogListPage() {
  return (
    <div className="min-h-screen pt-20 pb-20">
      <SEO
        title="Blog | Mohammadali Dhanga - Full Stack Insights"
        description="Read the latest articles on web development, AI integration, and modern design systems by Mohammadali Dhanga."
        keywords="Mohammadali Dhanga, AliDev, Blog, Web Development, AI, Next.js, MERN, Gandhinagar, India, JavaScript, React.js, Node.js, TypeScript, Next.js, MySQL, MongoDB, Tailwind CSS, PostgreSQL, Ruby on Rails, React Native, PHP, GitHub, Figma, Vercel, WordPress, Shopify, Adobe Photoshop, Render, Netlify, CSS3, Java, HTML5, Python, Solidity, AWS, Google Cloud, Firebase, .Net, Angular, Context-API, Express.js, Flask, SASS, Web3.js, Vue.js, Yarn, Redis, Supabase, Prisma, Adobe Illustrator, Canva, Git, Docker, Postman, Portfolio"
        url="https://www.alidev.in/blog"
      />

      <section className="container mx-auto px-6 md:px-16 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 text-white/40 font-mono text-[10px] uppercase tracking-[0.4em] mb-8">
            <div className="w-12 h-[1px] bg-white/20"></div>
            <span>Thoughts & Insights</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] uppercase mb-16 border-b border-white/5 pb-12">
            Developer <br /> <span className="text-white/20">Blog</span>
          </h1>

          <p className="text-gray-400 font-light text-xl max-w-3xl mb-16 leading-relaxed">
            Sharing technical insights on{" "}
            <span className="text-white">MERN Stack development</span>, AI
            integration, and modern design systems. As a{" "}
            <span className="text-white">Full developer in India</span>, I
            document my journey building scalable web infrastructures and
            solving complex architectural challenges.
          </p>

          <div className="grid gap-px bg-white/10 border border-white/10">
            {blogData.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-black p-10 md:p-16 hover:bg-white/[0.02] transition-all relative overflow-hidden"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
                  <div className="space-y-4 max-w-2xl">
                    <div className="flex items-center gap-4 text-white/40 font-mono text-[10px] uppercase tracking-widest">
                      <span>{post.date}</span>
                      <span className="w-1 h-1 rounded-full bg-white/20"></span>
                      <span>{post.category}</span>
                    </div>
                    <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight group-hover:text-white transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0">
                    <span>Read Article</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/5 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-1000" />
              </Link>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
