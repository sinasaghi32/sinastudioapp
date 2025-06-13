"use client";

import React from "react";
import dynamic from "next/dynamic";
import { useReducedMotion, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  FaCode,
  FaServer,
  FaCloud,
  FaChartLine,
  FaPalette,
  FaLayerGroup,
  FaTools,
  FaBlog,
  FaEnvelopeOpenText,
  FaMagic,
  FaRocket,
  FaStar
} from "react-icons/fa";

const HeroCanvas = dynamic(() => import("@/components/HeroCanvas"), { ssr: false });

const services = [
  {
    icon: <FaCode className="text-2xl" aria-hidden />,
    title: "Custom Web Development",
    description: "Tailored solutions built with modern stacks."
  },
  {
    icon: <FaServer className="text-2xl" aria-hidden />,
    title: "Backend Architecture",
    description: "Scalable and reliable backend systems."
  },
  {
    icon: <FaCloud className="text-2xl" aria-hidden />,
    title: "Cloud Deployment",
    description: "Seamless deployment on AWS, Azure, or GCP."
  },
  {
    icon: <FaChartLine className="text-2xl" aria-hidden />,
    title: "Performance Optimization",
    description: "Speed and conversion focused engineering."
  },
  {
    icon: <FaPalette className="text-2xl" aria-hidden />,
    title: "UI/UX Design",
    description: "Human-centered, modern design systems."
  },
  {
    icon: <FaLayerGroup className="text-2xl" aria-hidden />,
    title: "Fullstack Solutions",
    description: "Integrated frontend & backend delivery."
  }
];

const features = [
  {
    icon: <FaTools className="text-indigo-400 text-xl" aria-hidden />,
    title: "Tech Audit",
    description: "Comprehensive review of your current stack."
  },
  {
    icon: <FaBlog className="text-indigo-400 text-xl" aria-hidden />,
    title: "Developer Blog",
    description: "Read tips and insights from our team."
  },
  {
    icon: <FaEnvelopeOpenText className="text-indigo-400 text-xl" aria-hidden />,
    title: "Newsletter",
    description: "Stay informed with our monthly digest."
  }
];

const testimonials = [
  {
    name: "Alex Johnson",
    role: "CTO, TechStart",
    content: "SINA Studio delivered beyond our expectations. Their technical expertise is unmatched."
  },
  {
    name: "Maria Rodriguez",
    role: "Marketing Director, BrandCo",
    content: "Our conversion rates increased by 150% after their redesign."
  },
  {
    name: "David Kim",
    role: "Founder, StartupX",
    content: "The performance optimizations saved us thousands in infrastructure costs."
  },
  {
    name: "Sarah Williams",
    role: "Product Lead, FinTech Inc",
    content: "Their attention to detail and technical excellence is remarkable."
  }
];

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className="p-6 bg-[#1e293b]/50 rounded-xl border border-white/10 shadow"
      initial={reduce ? {} : { opacity: 0, y: 20 }}
      whileInView={reduce ? {} : { opacity: 1, y: 0 }}
      whileHover={reduce ? {} : { scale: 1.03 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center mb-3">
        {icon}
        <h3 className="ml-3 font-semibold text-lg">{title}</h3>
      </div>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
}

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-6 rounded-2xl border border-white/10 shadow-xl"
      initial={reduce ? {} : { opacity: 0, y: 30 }}
      whileInView={reduce ? {} : { opacity: 1, y: 0 }}
      whileHover={reduce ? {} : { scale: 1.03 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col items-center text-center">
        <div className="p-3 bg-indigo-900/30 rounded-full mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
}

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
}

function TestimonialCard({ name, role, content }: TestimonialCardProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className="testimonial-card"
      initial={{ opacity: reduce ? 1 : 0 }}
      animate={{ opacity: 1 }}
    >
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-sm text-gray-500">{role}</p>
      <p className="text-gray-700">{content}</p>
    </motion.div>
  );
}

export default function Home() {
  const reduce = useReducedMotion();
  const year = React.useMemo(() => new Date().getFullYear(), []);

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white px-6 py-12 font-sans overflow-hidden">
      <HeroCanvas className="absolute inset-0 -z-50 pointer-events-none" />

      <nav className="w-full fixed top-0 left-0 bg-[#0f172a]/90 backdrop-blur-xl z-50 shadow-xl" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg mr-3 flex items-center justify-center">
              <FaMagic className="text-sm" aria-hidden />
            </div>
            <h1 className="text-2xl font-black tracking-widest">SINA Studio</h1>
          </div>
          <a href="#contact">
            <Button className="rounded-full bg-indigo-600 hover:bg-indigo-700 px-6">Contact Us</Button>
          </a>
        </div>
      </nav>

      <header className="max-w-7xl mx-auto text-center pt-48 relative z-10">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight"
          initial={reduce ? {} : { opacity: 0, y: -30 }}
          animate={reduce ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Premium Websites That Win Clients
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8"
          initial={reduce ? {} : { opacity: 0 }}
          animate={reduce ? {} : { opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          SINA Studio delivers lightning-fast, conversion-optimized websites that elevate your business.
        </motion.p>
        <a href="#services">
          <Button className="text-lg px-8 py-6 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
            <FaRocket className="mr-2" aria-hidden /> Get Your Free Website Audit
          </Button>
        </a>
      </header>

      <section id="services" className="mt-48 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={reduce ? {} : { opacity: 0, y: 20 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-indigo-900/50 text-indigo-300 mb-4">
            <FaCode className="mr-2" aria-hidden /> What We Offer
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Premium Digital Solutions</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            We craft digital experiences that drive results and leave lasting impressions.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols.jsdelivr.md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
      </section>

      <section id="features" className="mt-48 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={reduce ? {} : { opacity: 0, y: 20 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-indigo-900/50 text-indigo-300 mb-4">
            <FaTools className="mr-2" aria-hidden /> What Else You Get
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Advanced Platform Features</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            We go beyond the basics to ensure your project is scalable, insightful, and future-ready.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} />
          ))}
        </div>
      </section>

      <section id="testimonials" className="mt-48 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={reduce ? {} : { opacity: 0, y: 20 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-indigo-900/50 text-indigo-300 mb-4">
            <FaStar className="mr-2" aria-hidden /> Client Success
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Trusted by Industry Leaders</h2>
          <p className="text-gray-400 max-w-2xl mx.auto.mt-4">
            Don&apos;t just take our word for it — hear what our clients have to say.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <TestimonialCard key={idx} {...test} />
          ))}
        </div>
      </section>

      <section
        id="about"
        className="relative mt-32 mx-auto max-w-6xl bg-gradient-to-br from-blue-700 via-green-800 to-purple-900 text-white rounded-3xl shadow-2xl p-10 overflow-hidden"
        aria-label="About Me"
      >
        {/* Glassmorphism overlay */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-3xl z-0" />

        <motion.div
          className="relative z-10 flex flex-col md:flex-row items-center gap-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/images/IMG_1328.png"
            alt="Photo of Sina"
            width={250}
            height={350}
            className="rounded-2xl object-cover shadow-xl border-2 border-white/20 hover:scale-105 transition-transform duration-300 ease-in-out"
          />

          <div className="text-center md:text-left">
            <h2 className="text-4xl font-extrabold mb-4 tracking-tight">
              👋 Hi, I’m Sina!
            </h2>
            <p className="text-white/90 text-lg mb-3 leading-relaxed">
              I’m a passionate software engineering student living in Korea,
              building exciting things on the web and always pushing my limits.
            </p>
            <p className="text-white/70 text-sm">
              When I’m not coding, you’ll find me lifting weights, exploring new tech,
              or planning my next creative project. Thanks for visiting my space!
            </p>
          </div>
        </motion.div>
      </section>

      <footer className="mt-48 py-16 text-center">
        <p className="text-gray-500">© {year} SINA Studio. All rights reserved.</p>
      </footer>
    </main>
  );
}
