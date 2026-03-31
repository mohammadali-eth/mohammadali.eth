"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import SocialIcons from "@/components/SocialIcons";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import {
  BadgeDollarSign,
  BriefcaseBusiness,
  Globe2,
  Mail,
  MessageCircle,
  UserRound,
  Workflow,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import contactData from "../../Config/contact.json";
import aboutMeData from "../../Config/aboutme.json";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
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

const serviceIcons = [
  {
    Icon: Workflow,
    className: "text-purple-500",
    text: "MERN & Next.js development",
  },
  {
    Icon: Globe2,
    className: "text-cyan-500",
    text: "UI/UX design for web",
  },
  {
    Icon: BadgeDollarSign,
    className: "text-emerald-500",
    text: "E-commerce & platforms",
  },
  {
    Icon: MessageCircle,
    className: "text-sky-500",
    text: "Performance & accessibility",
  },
];

// --- REDESIGN FORM WITH LABELS AND VALIDATION ---
function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function ContactForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    project_type: "",
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Init EmailJS (replaces script tag)
  useEffect(() => {
    emailjs.init("yv_Iepu5faWShbozH");
  }, []);

  function validate() {
    const newErrors: { name: string; email: string; message: string } = {
      name: "",
      email: "",
      message: "",
    };
    if (!form.name.trim()) {
      newErrors.name = "Full name is required.";
    }
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!validateEmail(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) {
      newErrors.message = "Message is required.";
    }
    setErrors(newErrors);
    return !newErrors.name && !newErrors.email && !newErrors.message;
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // Clear the error as user is typing
    if (errors[e.target.name as keyof typeof errors]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    if (!validate()) {
      return;
    }

    setLoading(true);

    try {
      await emailjs.sendForm(
        "service_87ksd9q", // SERVICE ID
        "template_ip7814b", // TEMPLATE ID
        formRef.current,
      );

      alert("Message sent successfully ✅");
      setForm({
        name: "",
        email: "",
        project_type: "",
        budget: "",
        message: "",
      });
      formRef.current.reset();
    } catch (error) {
      console.error("FAILED...", error);
      alert("Failed to send message ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="space-y-6"
      noValidate
    >
      {/* Hidden Time Field */}
      <input type="hidden" name="time" value={new Date().toLocaleString()} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm mb-1 text-gray-200 font-semibold"
          >
            Full Name <span className="text-pink-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your full name"
            required
            autoComplete="name"
            className="w-full rounded-lg bg-black/40 border border-white/15 px-3 py-2 text-white"
            value={form.name}
            onChange={handleChange}
            aria-invalid={!!errors.name}
            aria-describedby="name-error"
          />
          {errors.name && (
            <p id="name-error" className="text-xs mt-1 text-pink-400">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm mb-1 text-gray-200 font-semibold"
          >
            {contactData.FormLabels.Email} <span className="text-pink-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder={contactData.FormPlaceholders.Email}
            required
            autoComplete="email"
            className="w-full rounded-lg bg-black/40 border border-white/15 px-3 py-2 text-white"
            value={form.email}
            onChange={handleChange}
            aria-invalid={!!errors.email}
            aria-describedby="email-error"
          />
          {errors.email && (
            <p id="email-error" className="text-xs mt-1 text-pink-400">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Project Type / Subject */}
      <div>
        <label
          htmlFor="project_type"
          className="block text-sm mb-1 text-gray-200 font-semibold"
        >
          {contactData.FormLabels.Subject}
        </label>
        <input
          type="text"
          name="project_type"
          id="project_type"
          placeholder={contactData.FormPlaceholders.Subject}
          className="w-full rounded-lg bg-black/40 border border-white/15 px-3 py-2 text-white"
          value={form.project_type}
          onChange={handleChange}
        />
      </div>

      {/* Budget */}
      <div>
        <label
          htmlFor="budget"
          className="block text-sm mb-1 text-gray-200 font-semibold"
        >
          Budget (Optional)
        </label>
        <input
          type="text"
          name="budget"
          id="budget"
          placeholder="Budget range or expectation"
          className="w-full rounded-lg bg-black/40 border border-white/15 px-3 py-2 text-white"
          value={form.budget}
          onChange={handleChange}
        />
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm mb-1 text-gray-200 font-semibold"
        >
          {contactData.FormLabels.Message} <span className="text-pink-500">*</span>
        </label>
        <textarea
          name="message"
          id="message"
          rows={5}
          placeholder={contactData.FormPlaceholders.Message}
          required
          className="w-full rounded-lg bg-black/40 border border-white/15 px-3 py-2 text-white"
          value={form.message}
          onChange={handleChange}
          aria-invalid={!!errors.message}
          aria-describedby="message-error"
        />
        {errors.message && (
          <p id="message-error" className="text-xs mt-1 text-pink-400">
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
        <p className="text-xs sm:text-sm text-gray-400 flex items-center gap-1">
          By sending, you agree to be contacted about your inquiry.
        </p>
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-semibold"
        >
          <Mail className="text-pink-500" />
          {loading ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
}

export default function Contact() {
  return (
    <main className="relative overflow-hidden min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 pt-24 sm:pt-28 lg:pt-32">
      <GridBG />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ zIndex: 1 }}
      >
        <motion.div
          className="absolute inset-8 rounded-3xl border border-white/5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.35 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.05),_transparent_45%)]" />
      </div>

      <motion.div
        className="relative max-w-5xl mx-auto space-y-10 sm:space-y-14 lg:space-y-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ zIndex: 2 }}
      >
        <div className="space-y-4 sm:space-y-6 text-center">
          <motion.p
            className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-white/10 bg-white/5 text-xs sm:text-sm uppercase tracking-[0.18em] text-gray-300"
            variants={itemVariants}
          >
            <AnimatedShinyText className="inline-flex items-center justify-center gap-2 px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300">
              <Mail className="text-pink-500" strokeWidth={1.8} /> Contact {aboutMeData.Name}
            </AnimatedShinyText>
          </motion.p>
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white flex justify-center items-center gap-2"
            variants={itemVariants}
          >
            <Workflow className="text-blue-500" strokeWidth={1.8} />
            Let&apos;s build your next experience
          </motion.h1>
          <motion.p
            className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto flex items-center justify-center gap-2"
            variants={itemVariants}
            style={{
              fontFamily:
                "Menlo, Monaco, 'Fira Mono', 'Liberation Mono', 'Courier New', monospace",
            }}
          >
            {contactData.Introduction}
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          <motion.div
            className="lg:col-span-2 p-5 sm:p-7 rounded-2xl border border-white/10 bg-white/5 backdrop-blur space-y-4 sm:space-y-5"
            variants={itemVariants}
          >
            <h2 className="text-lg sm:text-xl font-display font-bold text-white flex items-center gap-2">
              <BriefcaseBusiness
                className="text-yellow-500"
                strokeWidth={1.8}
              />
              Project Inquiry
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 flex items-center gap-2 ">
              Share a bit about your project. I respond within 1–2 business
              days.
            </p>
            {/* Redesigned contact form with validation and labels */}
            <ContactForm />
          </motion.div>
          {/* Side Card */}
          <motion.div
            className="w-full max-w-sm mx-auto md:mx-0 md:w-96 bg-[#16181a] border border-[#222327] rounded-xl shadow-lg p-6 flex flex-col gap-6"
            variants={itemVariants}
          >
            {/* Header Section */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2 mt-1">
                <UserRound
                  className="text-orange-500 text-lg"
                  strokeWidth={1.8}
                />
                <h3 className="text-lg font-display font-bold text-white">
                  Direct details
                </h3>
              </div>
              <div className="flex flex-col gap-2 mt-1">
                <span className="block text-gray-400 text-xs uppercase tracking-wide font-semibold mb-0.5">
                  Location
                </span>
                <span
                  className="text-gray-300"
                  style={{
                    fontFamily:
                      "Menlo, Monaco, 'Fira Mono', 'Liberation Mono', 'Courier New', monospace",
                  }}
                >
                  {contactData.Address}
                </span>
              </div>
            </div>

            {/* Direct Details Section */}
            <div className="flex flex-col gap-5 text-sm text-gray-200">
              {/* Email */}
              <div className="flex items-center gap-3">
                <div>
                  <span className="block text-gray-400 text-xs uppercase tracking-wide font-semibold mb-0.5">
                    Email
                  </span>
                  <Link
                    href={`mailto:${contactData.Email}`}
                    className="text-white hover:underline flex items-center gap-2"
                    style={{
                      fontFamily:
                        "Menlo, Monaco, 'Fira Mono', 'Liberation Mono', 'Courier New', monospace",
                    }}
                  >
                    {contactData.Email}
                  </Link>
                </div>
              </div>
              {/* Portfolio */}
              <div className="flex items-center gap-3">
                <div>
                  <span className="block text-gray-400 text-xs uppercase tracking-wide font-semibold mb-0.5">
                    Portfolio
                  </span>
                  <Link
                    href="https://mohammadali.com"
                    className="text-white hover:underline flex items-center gap-2"
                    style={{
                      fontFamily:
                        "Menlo, Monaco, 'Fira Mono', 'Liberation Mono', 'Courier New', monospace",
                    }}
                  >
                    mohammadali.eth
                  </Link>
                </div>
              </div>
              {/* Social */}
              <div className="flex items-center gap-3">
                <div>
                  <span className="block text-gray-400 text-xs uppercase tracking-wide font-semibold">
                    Social
                  </span>
                  <div>
                    <SocialIcons />
                  </div>
                </div>
              </div>
            </div>

            {/* Services Section */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="text-gray-400 text-xs uppercase tracking-wide font-semibold">
                  Services
                </span>
              </div>
              <ul
                className="space-y-2 text-sm text-gray-200 mt-1"
                style={{
                  fontFamily:
                    "Menlo, Monaco, 'Fira Mono', 'Liberation Mono', 'Courier New', monospace",
                }}
              >
                {serviceIcons.map(({ Icon, className, text }) => (
                  <li key={text} className="flex items-center gap-3">
                    <Icon className={`${className} text-base`} />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}
