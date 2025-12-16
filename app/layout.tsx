import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ReactNode } from "react";

export const metadata = {
  title: "Mohammadali Dhanga",
  description:
    "Mohammadali Dhanga - MERN Stack Developer and Web Designer specializing in modern, responsive, and user-friendly web applications using Next.js, React, and Node.js.",
  url: "https://mohammadali.eth",
  image:
    "https://res.cloudinary.com/diukjb3ma/image/upload/v1765709456/IMG_5147_aylm5c.jpg",
  siteName: "Mohammadali Dhanga Portfolio",
  twitterHandle: "@mohammadali_eth",
  instagram: "https://www.instagram.com/mohammadali8.eth/",
  github: "https://github.com/MohammadAli440",
  linkedin: "https://www.linkedin.com/in/mohammadalidhanga/",
  facebook: "https://www.facebook.com/share/14MNEcsACYn/?mibextid=wwXIfr",
  keywords:
    "Mohammadali Dhanga, MERN Stack Developer, Web Developer, Full Stack Developer, React Developer, Next.js Developer, Node.js Developer, MongoDB Developer, UI UX Designer",
  robots: "index, follow",
  author: "Mohammadali Dhanga",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <title>{metadata.title}</title>

        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="robots" content={metadata.robots} />
        <meta name="author" content={metadata.author} />

        <link rel="canonical" href={metadata.url} />

        {/* Open Graph */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={metadata.siteName} />

        {/* Social Profiles */}
        <meta property="og:instagram" content={metadata.instagram} />
        <meta property="og:github" content={metadata.github} />
        <meta property="og:linkedin" content={metadata.linkedin} />
        <meta property="og:facebook" content={metadata.facebook} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={metadata.twitterHandle} />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />

        {/* Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mohammadali Dhanga",
              jobTitle: "MERN Stack Developer",
              url: metadata.url,
              sameAs: [metadata.instagram, metadata.github, metadata.linkedin],
              description: metadata.description,
              image: metadata.image,
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-black text-white text-sm sm:text-base">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
