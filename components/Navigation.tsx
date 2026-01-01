"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Mail, Menu, UserRound, X } from "lucide-react";

const navLinks = [
  {
    href: "/",
    label: "Home",
    icon: <Home className="text-[#38bdf8]" strokeWidth={1.8} />,
  }, // sky-500
  {
    href: "/about",
    label: "About",
    icon: <UserRound className="text-[#f59e42]" strokeWidth={1.8} />,
  }, // orange-400
  {
    href: "/contact",
    label: "Contact",
    icon: <Mail className="text-[#84cc16]" strokeWidth={1.8} />,
  }, // lime-400
];

// Animation variants
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.06 * custom },
  }),
};

const buttonVariants = {
  hover: { scale: 1.08, transition: { duration: 0.2 } },
  tap: { scale: 0.95, transition: { duration: 0.1 } },
};

export default function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // For closing mobile menu on navigation
  const handleNavigate = () => setMenuOpen(false);

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={itemVariants}
      custom={0}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10"
    >
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        custom={1}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          custom={2}
          className="flex items-center justify-between h-16 sm:h-20"
        >
          {/* Logo/Name */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            <Link
              href="/"
              className="text-lg sm:text-xl md:text-2xl font-display font-bold"
              onClick={handleNavigate}
            >
              <motion.span
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.7,
                  type: "spring",
                  stiffness: 120,
                  delay: 0.23,
                }}
                style={{
                  fontFamily:
                    "Menlo, Monaco, 'Fira Mono', 'Liberation Mono', 'Courier New', monospace",
                }}
              >
                mohammadali.eth
              </motion.span>
            </Link>
          </motion.div>

          {/* Hamburger Icon (Mobile) */}
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="flex items-center sm:hidden focus:outline-none focus:ring-2 focus:ring-[#38bdf8] rounded p-2"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <motion.span
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.25 }}
                key="close"
              >
                <X className="text-xl text-white" strokeWidth={1.8} />
              </motion.span>
            ) : (
              <motion.span
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.25 }}
                key="open"
              >
                <Menu className="text-xl text-white" strokeWidth={1.8} />
              </motion.span>
            )}
          </motion.button>

          {/* Desktop Navigation Links */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            custom={4}
            className="hidden sm:flex gap-6 sm:gap-8 lg:gap-12"
          >
            {navLinks.map((link, idx) => {
              const isActive = pathname === link.href;
              return (
                <motion.div
                  key={link.href}
                  custom={idx + 6}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 180 }}
                >
                  <Link
                    href={link.href}
                    className={`relative flex items-center gap-2 text-sm sm:text-base md:text-lg font-medium transition-colors duration-200 ${
                      isActive ? "text-white" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    <motion.span
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.14 + idx * 0.07,
                        duration: 0.25,
                      }}
                      className="text-lg"
                    >
                      {link.icon}
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.17 + idx * 0.085,
                        duration: 0.22,
                      }}
                    >
                      {link.label}
                    </motion.span>
                    {isActive && (
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white"
                        layoutId="activeTab"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Mobile Navigation Overlay */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{
                duration: 0.22,
                type: "spring",
                stiffness: 250,
                damping: 35,
              }}
              className="sm:hidden absolute top-16 left-0 right-0 w-full bg-black/95 backdrop-blur-2xl border-b border-white/5 shadow-xl"
            >
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.08,
                    },
                  },
                }}
                className="flex flex-col py-6 gap-2 px-4"
              >
                {navLinks.map((link, idx) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      custom={idx + 1}
                      whileHover={{
                        scale: 1.03,
                        backgroundColor: "rgba(255,255,255,0.06)",
                      }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <Link
                        href={link.href}
                        onClick={handleNavigate}
                        className={`relative rounded flex items-center gap-3 px-2.5 py-3 text-base font-medium transition-colors duration-200 ${
                          isActive
                            ? "text-white bg-white/10"
                            : "text-gray-300 hover:text-white hover:bg-white/10"
                        }`}
                      >
                        <motion.span
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: 0.19 + idx * 0.085,
                            duration: 0.2,
                          }}
                          className="text-xl"
                        >
                          {link.icon}
                        </motion.span>
                        <motion.span
                          initial={{ opacity: 0, x: 15 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: 0.24 + idx * 0.1,
                            duration: 0.21,
                          }}
                        >
                          {link.label}
                        </motion.span>
                        {isActive && (
                          <motion.div
                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white"
                            layoutId="activeTab"
                            transition={{
                              type: "spring",
                              stiffness: 380,
                              damping: 30,
                            }}
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.nav>
  );
}
