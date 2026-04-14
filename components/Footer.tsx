"use client";

import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="border-t border-white/20 bg-black">
      <div className="px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex justify-center sm:justify-start">
          <SocialIcons />
        </div>
        <p className="text-sm text-gray-500 uppercase tracking-widest font-mono text-center sm:text-right">
          © {new Date().getFullYear()} Mohammadali.eth
        </p>
      </div>
    </footer>
  );
}
