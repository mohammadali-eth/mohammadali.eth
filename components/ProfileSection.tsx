"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Instagram, Twitter, Facebook } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function ProfileSection() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mohammadali Dhanga",
    jobTitle: "Full Stack Developer",
    url: "https://www.alidev.in/",
    image: "https://www.alidev.in/mohammadali-dhanga.jpeg",
    sameAs: [
      "https://linkedin.com/in/mohammadalidhanga",
      "https://github.com/mohammadalidhanga",
      "https://instagram.com/mohammadali8.eth",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Invix",
    },
    description: "Full stack developer, entrepreneur, and founder of Invix.",
  };

  return (
    <section className="w-full max-w-6xl mx-auto py-16 px-6 md:px-12 bg-black text-white relative border border-white/10 overflow-hidden my-12 shadow-2xl">
      <Helmet>
        <title>
          Mohammadali Dhanga - Full Stack Developer & Founder of Invix
        </title>
        <meta
          name="description"
          content="Mohammadali Dhanga is a Full stack developer, entrepreneur, and founder of Invix based in India."
        />
        <meta
          name="keywords"
          content="Mohammadali Dhanga, Full Stack Developer, Invix, Entrepreneur, Web Developer India"
        />
        <meta name="author" content="Mohammadali Dhanga" />
        <meta
          property="og:title"
          content="Mohammadali Dhanga - Full Stack Developer"
        />
        <meta
          property="og:description"
          content="Full stack developer, entrepreneur, and founder of Invix."
        />
        <meta
          property="og:image"
          content="https://www.alidev.in/mohammadali-dhanga.jpeg"
        />
        <meta property="og:url" content="https://www.alidev.in/" />
        <meta property="og:type" content="profile" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* Decorative background blur */}
      <div className="absolute top-[-50%] left-[-10%] w-[120%] h-[120%] bg-gradient-to-br from-white/5 to-transparent blur-3xl pointer-events-none" />

      <article className="flex flex-col md:flex-row items-center gap-12 relative z-10">
        {/* Profile Image */}
        <header className="flex-shrink-0 relative group">
          <div className="absolute inset-0 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all duration-700 opacity-50"></div>
          <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border border-white/20 group-hover:border-white/50 transition-all duration-700">
            <Image
              src="/mohammadali-dhanga.jpeg"
              alt="Mohammadali Dhanga Web Developer India"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0"
              sizes="(max-width: 768px) 224px, 288px"
              priority
            />
          </div>
        </header>

        {/* Profile Details */}
        <div className="text-center md:text-left space-y-6 flex-1">
          <div className="space-y-3">
            <div className="inline-block px-4 py-1.5 border border-white/20 text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] text-gray-400 bg-white/5 backdrop-blur-md">
              Founder & Developer
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
              Mohammadali <br className="hidden md:block" />
              <span className="text-white/40">Dhanga</span>
            </h1>
          </div>

          <p className="text-lg md:text-xl lg:text-2xl font-light text-gray-400 leading-relaxed max-w-2xl mx-auto md:mx-0">
            I am a{" "}
            <strong className="font-semibold text-white">
              Full stack developer
            </strong>
            , entrepreneur, and the founder of{" "}
            <strong className="font-semibold text-white">Invix</strong>. I
            specialize in building high-performance web applications, scalable
            digital solutions, and innovative platforms that solve real-world
            problems.
          </p>

          <div className="flex items-center justify-center md:justify-start gap-4 pt-6">
            <Link
              href="https://www.linkedin.com/in/mohammadalidhanga/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border border-white/10 hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <Linkedin
                size={22}
                className="group-hover:rotate-12 transition-transform"
              />
            </Link>
            <Link
              href="https://github.com/mohammadali-eth"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border border-white/10 hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 group"
              aria-label="GitHub"
            >
              <Github
                size={22}
                className="group-hover:-rotate-12 transition-transform"
              />
            </Link>
            <Link
              href="https://www.instagram.com/mohammadali8.eth/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border border-white/10 hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 group"
              aria-label="Instagram"
            >
              <Instagram
                size={22}
                className="group-hover:rotate-12 transition-transform"
              />
            </Link>
            <Link
              href="https://twitter.com/mohammadali_eth"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border border-white/10 hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 group"
              aria-label="Twitter"
            >
              <Twitter
                size={22}
                className="group-hover:-rotate-12 transition-transform"
              />
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
}
