"use client";

import React from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import blogData from "@/Config/blog.json";
import Link from "next/link";
import { ArrowLeft, Clock, Tag } from "lucide-react";

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = blogData.find((b) => b.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-black uppercase">Post Not Found</h1>
          <Link
            href="/blog"
            className="text-white/40 hover:text-white transition-colors uppercase tracking-widest text-xs"
          >
            Back to Journal
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-20">
      <SEO
        title={`${post.title} | Mohammadali Dhanga Blog`}
        description={post.excerpt}
        keywords={`${post.keywords}, Mohammadali Dhanga, AliDev, Gandhinagar, India, JavaScript, React.js, Node.js, TypeScript, Next.js, MySQL, MongoDB, Tailwind CSS, PostgreSQL, Ruby on Rails, React Native, PHP, GitHub, Figma, Vercel, WordPress, Shopify, Adobe Photoshop, Render, Netlify, CSS3, Java, HTML5, Python, Solidity, AWS, Google Cloud, Firebase, .Net, Angular, Context-API, Express.js, Flask, SASS, Web3.js, Vue.js, Yarn, Redis, Supabase, Prisma, Adobe Illustrator, Canva, Git, Docker, Postman, Portfolio`}
        url={`https://www.alidev.in/blog/${post.slug}`}
      />

      <article className="container mx-auto px-6 md:px-16 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors text-[10px] uppercase tracking-widest mb-12 group"
          >
            <ArrowLeft
              size={14}
              className="transition-transform group-hover:-translate-x-1"
            />
            <span>Back to Journal</span>
          </Link>

          <div className="space-y-8 mb-16">
            <div className="flex flex-wrap items-center gap-6 text-white/40 font-mono text-[10px] uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <Clock size={12} />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag size={12} />
                <span>{post.category}</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] uppercase">
              {post.title}
            </h1>
          </div>

          {/* Content Body */}
          <div className="prose prose-invert prose-lg max-w-none">
            <div className="text-gray-400 font-light text-xl leading-relaxed mb-12 italic border-l-4 border-white/10 pl-8">
              {post.excerpt}
            </div>

            <div className="space-y-8 text-gray-300 leading-loose text-lg">
              {/* Sample structured content with H2s as requested */}
              <h2 className="text-2xl font-black uppercase text-white mt-12 tracking-tight">
                The Core Concept
              </h2>
              <p>{post.content}</p>

              <h2 className="text-2xl font-black uppercase text-white mt-12 tracking-tight">
                Implementation Details
              </h2>
              <p>
                When building systems at this scale, we must consider both the
                technical and architectural implications. For example, in my{" "}
                <Link
                  href="/projects"
                  className="text-white underline underline-offset-4 decoration-white/20 hover:decoration-white transition-all"
                >
                  recent projects
                </Link>
                , I emphasized modularity and high availability.
              </p>

              <blockquote className="bg-white/5 p-8 border-l-2 border-white italic font-light text-xl">
                "Scalability is not an afterthought; it is a fundamental
                requirement of modern web architecture."
              </blockquote>

              <h2 className="text-2xl font-black uppercase text-white mt-12 tracking-tight">
                Future Outlook
              </h2>
              <p>
                As we move towards more AI-driven infrastructures, the role of a
                Full Stack Developer evolves. We are no longer just building
                interfaces, but complex ecosystems that learn and adapt.
              </p>
            </div>
          </div>

          {/* Internal Links Footer */}
          <div className="mt-20 pt-12 border-t border-white/10">
            <h3 className="text-white/40 font-mono text-xs uppercase tracking-[0.3em] mb-8 text-center">
              Explore More
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/projects"
                className="p-8 border border-white/10 hover:border-white transition-all text-center group"
              >
                <h4 className="font-black uppercase text-sm mb-2 group-hover:text-white">
                  View My Projects
                </h4>
                <p className="text-xs text-white/40 uppercase tracking-widest">
                  See the work in action
                </p>
              </Link>
              <Link
                href="/contact"
                className="p-8 border border-white/10 hover:border-white transition-all text-center group"
              >
                <h4 className="font-black uppercase text-sm mb-2 group-hover:text-white">
                  Let&apos;s Collaborate
                </h4>
                <p className="text-xs text-white/40 uppercase tracking-widest">
                  Start a conversation
                </p>
              </Link>
            </div>
          </div>
        </motion.div>
      </article>
    </div>
  );
}
