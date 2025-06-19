"use client";
import type React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Users,
  Award,
  Linkedin,
  Github,
  FileText,
  Globe,
  GraduationCap,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  imageUrl?: string;
  ctaBtnText?: string;
  showCtaBtn?: boolean;
  isSmall?: boolean;
  children?: React.ReactNode;
  pageType?: "home" | "research" | "publications" | "team" | "news";
  showSocialLinks?: boolean;
};

const HeroBanner = (props: Props) => {
  const getPageIcon = () => {
    switch (props.pageType) {
      case "research":
        return <BookOpen className="w-5 h-5 text-slate-600" />;
      case "publications":
        return <Award className="w-5 h-5 text-slate-600" />;
      case "team":
        return <Users className="w-5 h-5 text-slate-600" />;
      case "news":
        return <BookOpen className="w-5 h-5 text-slate-600" />;
      default:
        return <BookOpen className="w-5 h-5 text-slate-600" />;
    }
  };

  const getBadgeText = () => {
    switch (props.pageType) {
      case "research":
        return "Research Excellence";
      case "publications":
        return "Academic Publications";
      case "team":
        return "Research Team";
      case "news":
        return "Latest Updates";
      default:
        return "Academic Excellence";
    }
  };

  return (
    <section
      id={props.id}
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.9), rgba(51, 65, 85, 0.85)), url(${
          props.imageUrl ??
          "https://www.ndsu-smartlab.com/assets/img/hero-bg.jpg"
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={`relative px-4 sm:px-6 lg:px-8 py-16 md:py-20 overflow-hidden flex items-center justify-center ${
        props.isSmall ? "min-h-[40vh]" : "min-h-[75vh] lg:min-h-[80vh]"
      }`}
    >
      {/* Academic pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-[15%] right-[10%] w-48 h-48 rounded-full bg-white/5 blur-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 2 }}
        />
        <motion.div
          className="absolute bottom-[25%] left-[5%] w-64 h-64 rounded-full bg-slate-300/5 blur-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
      </div>

      <div className="mx-auto container max-w-7xl relative h-full w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 h-full items-center">
          {/* Content Column */}
          <div className="lg:col-span-7 text-white space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
            >
              {getPageIcon()}
              <span className="text-sm font-medium text-slate-200">
                {getBadgeText()}
              </span>
            </motion.div>

            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="text-white">{props.title}</span>
            </motion.h1>

            {props.subtitle && (
              <motion.p
                className="text-slate-200 text-lg md:text-xl font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {props.subtitle}
              </motion.p>
            )}

            {props.description && (
              <motion.p
                className="text-slate-300 text-base md:text-lg max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {props.description}
              </motion.p>
            )}

            {/* Social Media Links */}
            {props.showSocialLinks && (
              <motion.div
                className="flex flex-wrap gap-4 items-center pt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
              >
                <Link
                  href="https://linkedin.com/in/aboah-armstrong"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                    <Linkedin className="w-5 h-5" />
                  </div>
                </Link>

                <Link
                  href="https://github.com/aboah-armstrong"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                    <Github className="w-5 h-5" />
                  </div>
                </Link>

                <Link
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                    <FileText className="w-5 h-5" />
                  </div>
                </Link>

                <Link
                  href="https://aboah-armstrong.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                    <Globe className="w-5 h-5" />
                  </div>
                </Link>

                <Link
                  href="https://scholar.google.com/citations?user=aboah-armstrong"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                </Link>

                <Link
                  href="https://twitter.com/aboah_armstrong"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                    <Twitter className="w-5 h-5" />
                  </div>
                </Link>
              </motion.div>
            )}

            <motion.div
              className="flex flex-wrap gap-4 items-center pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {props.showCtaBtn && props.ctaBtnText && (
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-white text-slate-900 hover:bg-slate-100 py-6 px-8 rounded-lg font-medium shadow-xl shadow-slate-900/20 transition-all duration-300 hover:shadow-slate-900/30 hover:-translate-y-0.5"
                  >
                    {props.ctaBtnText}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              )}

              {props.pageType === "home" && (
                <Link
                  href="/research"
                  className="text-slate-200 hover:text-white font-medium flex items-center gap-2 transition-colors group"
                >
                  View Research
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
            </motion.div>

            {props.children && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {props.children}
              </motion.div>
            )}
          </div>

          {/* Visual Column - Academic themed */}
          <motion.div
            className="lg:col-span-5 relative hidden lg:flex items-center justify-center h-full"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full max-w-sm aspect-square">
              {/* Academic rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-full h-full border border-white/20 rounded-full"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 30,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-4/5 h-4/5 border border-white/15 rounded-full"
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 25,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-3/5 h-3/5 border border-white/25 rounded-full"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />
              </div>

              {/* Center academic icon */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
              </motion.div>

              {/* Floating academic elements */}
              {[
                { icon: Award, delay: 0 },
                { icon: BookOpen, delay: 1 },
                { icon: Users, delay: 2 },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="absolute w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20"
                  style={{
                    top: `${25 + i * 20}%`,
                    right: `${15 + i * 15}%`,
                  }}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: item.delay,
                  }}
                >
                  <item.icon className="w-4 h-4 text-white" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom academic wave */}
      <div className="absolute bottom-0 left-0 right-0 h-12 md:h-16">
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1440 74"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 24L60 28C120 32 240 40 360 45.3C480 51 600 53 720 49.3C840 45 960 35 1080 32.7C1200 31 1320 37 1380 40L1440 43V74H1380C1320 74 1200 74 1080 74C960 74 840 74 720 74C600 74 480 74 360 74C240 74 120 74 60 74H0V24Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroBanner;
