import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ReactNode } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Mohammadali Dhanga",
  description:
    "Mohammadali Dhanga - Full Stack Developer and Web Designer specializing in modern, responsive, and user-friendly web applications using Next.js, React, and Node.js.",
  url: "https://www.alidev.in",
  image:
    "https://res.cloudinary.com/diukjb3ma/image/upload/v1765709456/IMG_5147_aylm5c.jpg",
  siteName: "Mohammadali Dhanga Portfolio",
  twitterHandle: "@mohammadali_eth",
  instagram: "https://www.instagram.com/mohammadali8.eth/",
  github: "https://github.com/mohammadali-eth",
  linkedin: "https://www.linkedin.com/in/mohammadalidhanga/",
  facebook: "https://www.facebook.com/share/14MNEcsACYn/?mibextid=wwXIfr",
  keywords:
    "Mohammadali Dhanga, Full Stack Developer, Web Developer, Full Stack Developer, React Developer, Next.js Developer, Node.js Developer, MongoDB Developer, UI UX Designer",
  robots: "index, follow",
  author: "Mohammadali Dhanga",
};

function GridBG() {
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

import Providers from "@/components/Providers";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        {/* ... existing meta tags ... */}
        <meta charSet="UTF-8" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="robots" content={metadata.robots} />
        <meta name="author" content={metadata.author} />
        <link rel="canonical" href={metadata.url} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={metadata.siteName} />
        <meta property="og:instagram" content={metadata.instagram} />
        <meta property="og:github" content={metadata.github} />
        <meta property="og:linkedin" content={metadata.linkedin} />
        <meta property="og:facebook" content={metadata.facebook} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={metadata.twitterHandle} />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mohammadali Dhanga",
              alternateName: "AliDev",
              jobTitle: "Full Stack Developer",
              url: "https://www.alidev.in",
              sameAs: [metadata.github, metadata.linkedin],
              description: metadata.description,
              image: metadata.image,
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-black text-white text-base selection:bg-white selection:text-black relative overflow-x-hidden">
        <Providers>
          {/* Ambient Lighting */}
          <div className="fixed inset-0 pointer-events-none z-0">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full mix-blend-screen" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-600/5 blur-[100px] rounded-full mix-blend-screen" />
          </div>

          {/* Grid Background */}
          <div className="fixed inset-0 pointer-events-none z-0">
            <GridBG />
          </div>

          <div className="relative z-10 flex flex-col min-h-screen border-x border-white/10 max-w-7xl mx-auto">
            <Navigation />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
