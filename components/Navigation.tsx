"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold tracking-tighter"
          style={{
            fontFamily:
              "Menlo, Monaco, 'Fira Mono', 'Liberation Mono', 'Courier New', monospace",
          }}
        >
          mohammadali.eth
        </Link>
        <nav className="hidden md:flex items-center gap-8 font-mono text-sm uppercase tracking-widest">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors hover:text-white ${
                  isActive ? "text-white font-bold" : "text-gray-500"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-black border-b border-white/20 p-6 flex flex-col gap-6 font-mono text-sm uppercase tracking-widest">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`transition-colors ${
                pathname === link.href
                  ? "text-white font-bold"
                  : "text-gray-500"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
