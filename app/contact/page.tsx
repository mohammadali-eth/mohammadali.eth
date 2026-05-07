"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import aboutMeData from "../../Config/aboutme.json";
import SEO from "@/components/SEO";

const socials = [
  {
    name: "Behance",
    color: "bg-[#1769ff]",
    url: "https://behance.net/mohammadhanga",
  },
  {
    name: "Discord",
    color: "bg-[#7289DA]",
    url: "https://discord.gg/1436284327624314920",
  },
  {
    name: "Facebook",
    color: "bg-[#1877F2]",
    url: "https://facebook.com/Mohammada-Ali-Dhanga",
  },
  {
    name: "Instagram",
    color: "bg-[#E4405F]",
    url: "https://instagram.com/mohammadali8.eth",
  },
  {
    name: "LinkedIn",
    color: "bg-[#0077B5]",
    url: "https://linkedin.com/in/mohammadalidhanga",
  },
  {
    name: "Pinterest",
    color: "bg-[#E60023]",
    url: "https://pinterest.com/malidhanga",
  },
  {
    name: "Stackoverflow",
    color: "bg-[#FE7A16]",
    url: "https://stackoverflow.com/users/32102653",
  },
  {
    name: "Twitch",
    color: "bg-[#9146FF]",
    url: "https://twitch.tv/mohammadalieth",
  },
  {
    name: "X",
    color: "bg-black",
    border: "border-white/20",
    url: "https://x.com/mohammadali_eth",
  },
  {
    name: "Email",
    color: "bg-[#D14836]",
    url: "mailto:malidhanga.work@gmail.com",
  },
];

export default function Contact() {
  return (
    <div className="px-6 py-12 md:py-24 md:px-16 min-h-screen">
      <SEO
        title="Contact Mohammadali Dhanga | Full Stack Developer Gandhinagar"
        description="Get in touch with Mohammadali Dhanga for full stack development projects, AI solutions, and professional collaborations in Gandhinagar, India."
        keywords="Mohammadali Dhanga, AliDev, Contact, Freelance Developer, Gandhinagar, India, JavaScript, React.js, Node.js, TypeScript, Next.js, MySQL, MongoDB, Tailwind CSS, PostgreSQL, Ruby on Rails, React Native, PHP, GitHub, Figma, Vercel, WordPress, Shopify, Adobe Photoshop, Render, Netlify, CSS3, Java, HTML5, Python, Solidity, AWS, Google Cloud, Firebase, .Net, Angular, Context-API, Express.js, Flask, SASS, Web3.js, Vue.js, Yarn, Redis, Supabase, Prisma, Adobe Illustrator, Canva, Git, Docker, Postman, Portfolio"
        url="https://www.alidev.in/contact"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto space-y-20 md:space-y-32"
      >
        <section>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16 border-b border-white/10 pb-8 md:pb-10">
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight uppercase">
              Contact
            </h1>
            <p className="text-gray-600 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.4em] pb-2">
              Collaborations & Inquiries
            </p>
          </div>

          <div className="pt-8 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
            <div className="space-y-12 md:space-y-16">
              <p className="text-2xl sm:text-4xl font-light tracking-tight text-gray-300 leading-tight">
                Open for opportunities: Full-time roles, freelance projects, and
                collaborations.
              </p>

              <div className="space-y-8">
                <h2 className="text-[10px] font-mono uppercase tracking-[0.4em] text-gray-600 font-black">
                  Direct Inquiries
                </h2>
                <a
                  href="mailto:malidhanga.work@gmail.com"
                  className="group flex items-center justify-between p-6 md:p-10 bg-white/5 border border-white/10 hover:border-white transition-all overflow-hidden"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <Mail className="text-gray-400 group-hover:text-white transition-colors shrink-0" />
                    <span className="text-lg sm:text-2xl md:text-3xl font-bold tracking-tighter truncate">
                      malidhanga.work@gmail.com
                    </span>
                  </div>
                  <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform shrink-0" />
                </a>
              </div>
            </div>

            <div className="space-y-12">
              <div className="space-y-8">
                <div className="flex items-center gap-4 border-b border-white/10 pb-6">
                  <span className="text-2xl">🌐</span>
                  <h2 className="text-sm font-mono uppercase tracking-[0.4em] font-black text-white">
                    Socials
                  </h2>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {socials.map((social, idx) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      className={`px-4 py-4 text-[10px] font-black uppercase tracking-[0.3em] ${social.color} text-white ${social.border || ""} border transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center text-center`}
                    >
                      {social.name}
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="pt-12 p-8 md:p-12 border border-white/5 bg-white/[0.005] space-y-6">
                <h3 className="text-[10px] font-mono uppercase tracking-[0.4em] text-gray-600 font-black">
                  Location
                </h3>
                <p className="text-2xl md:text-3xl font-bold uppercase tracking-tighter text-white">
                  {aboutMeData.Address}
                </p>
                <div className="flex items-center gap-4 text-green-500 font-mono text-[10px] uppercase tracking-[0.4em] font-black underline underline-offset-8 decoration-green-500/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  Ready to work
                </div>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
