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
  pageType?:
    | "home"
    | "research"
    | "publications"
    | "team"
    | "news"
    | "activities";
  showSocialLinks?: boolean;
};

const HeroBanner = (props: Props) => {
  return (
    <section
      id={props.id}
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(13, 148, 136, 0.97), rgba(4, 47, 46, 0.96), rgba(251, 146, 60, 0.10)), url(${
          props.imageUrl ?? "/driving-simulation.jpeg"
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={`relative px-4 sm:px-6 lg:px-8 py-16 md:py-20 overflow-hidden flex items-center justify-center ${
        props.isSmall ? "min-h-[40vh]" : "min-h-[75vh] lg:min-h-[80vh]"
      }`}
    >
      {/* Academic pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%2313bfa6' fillOpacity='0.13'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-[15%] right-[10%] w-48 h-48 rounded-full bg-teal-400/20 blur-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 2 }}
        />
        <motion.div
          className="absolute bottom-[25%] left-[5%] w-64 h-64 rounded-full bg-orange-400/20 blur-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
      </div>

      <div className="mx-auto container max-w-6xl relative h-full w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 h-full items-center">
          {/* Content Column */}
          <div className="lg:col-span-7 text-white space-y-6">
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
                  href="https://www.linkedin.com/in/armstrong-aboah-ph-d-5ab809142/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-200 hover:text-white transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 bg-teal-700/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-teal-400/30 hover:bg-teal-600/40 hover:border-teal-300/50 transition-all duration-300 group-hover:scale-110">
                    <Linkedin className="w-5 h-5" />
                  </div>
                </Link>

                <Link
                  href="https://github.com/aboah1994"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-200 hover:text-white transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 bg-teal-700/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-teal-400/30 hover:bg-teal-600/40 hover:border-teal-300/50 transition-all duration-300 group-hover:scale-110">
                    <Github className="w-5 h-5" />
                  </div>
                </Link>

                <Link
                  href="/aboah_mndot.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-200 hover:text-white transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 bg-teal-700/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-teal-400/30 hover:bg-teal-600/40 hover:border-teal-300/50 transition-all duration-300 group-hover:scale-110">
                    <FileText className="w-5 h-5" />
                  </div>
                </Link>

                <Link
                  href="https://ndsu-smartlab.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-200 hover:text-white transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 bg-teal-700/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-teal-400/30 hover:bg-teal-600/40 hover:border-teal-300/50 transition-all duration-300 group-hover:scale-110">
                    <Globe className="w-5 h-5" />
                  </div>
                </Link>

                <Link
                  href="https://scholar.google.com/citations?user=Ev1PAAwAAAAJ&hl=en&oi=ao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-200 hover:text-white transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 bg-teal-700/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-teal-400/30 hover:bg-teal-600/40 hover:border-teal-300/50 transition-all duration-300 group-hover:scale-110">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                </Link>

                <Link
                  href="https://twitter.com/armweak9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-200 hover:text-white transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 bg-teal-700/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-teal-400/30 hover:bg-teal-600/40 hover:border-teal-300/50 transition-all duration-300 group-hover:scale-110">
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
                    className="bg-orange-400 text-white hover:bg-orange-500 py-6 px-8 rounded-lg font-medium transition-all duration-300 hover:-translate-y-0.5"
                  >
                    {props.ctaBtnText}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              )}

              {props.pageType === "home" && (
                <Link
                  href="/research"
                  className="text-orange-400 hover:text-orange-500 font-medium flex items-center gap-2 transition-colors group"
                >
                  View Research
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
            </motion.div>

            {/* Home page achievements row */}
            {props.pageType === "home" && (
              <motion.div
                className="flex flex-col sm:flex-row gap-6 mt-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                {[
                  { value: "45+", label: "Publications" },
                  { value: "6+", label: "Students Mentored" },
                  { value: "8", label: "Awards" },
                  { value: "5+", label: "Research Years Exp." },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex-1 min-w-[140px] flex flex-col items-center justify-center px-6 py-6 bg-white/5 backdrop-blur-md rounded-2xl shadow-none relative"
                    style={{
                      boxShadow: "0 2px 8px 0 rgba(16, 185, 129, 0.04)",
                    }}
                  >
                    <span className="text-4xl font-bold text-teal-700 mb-2">
                      {stat.value}
                    </span>
                    <span className="block w-12 border-t-2 border-dotted border-orange-400 mb-2"></span>
                    <span className="text-slate-300 text-base text-center">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </motion.div>
            )}

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
                  className="w-full h-full border border-teal-300/30 rounded-full"
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
                  className="w-4/5 h-4/5 border border-teal-400/25 rounded-full"
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
                  className="w-3/5 h-3/5 border border-teal-200/35 rounded-full"
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
                <div className="w-20 h-20 bg-teal-700/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-teal-300/30">
                  <BookOpen className="w-8 h-8 text-teal-100" />
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
                  className="absolute w-10 h-10 bg-teal-700/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-teal-300/30"
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
                  <item.icon className="w-4 h-4 text-teal-100" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
