"use client";

import HeroBanner from "@/components/hero-banner";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BookOpen,
  Users,
  Award,
  TrendingUp,
  Calendar,
  GraduationCap,
  Film,
  Car,
  Layers,
  Cloud,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/lib/constants";

const iconMap = {
  movie: Film,
  car: Car,
  layers: Layers,
  cloud: Cloud,
};

// Enhanced animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const slideInFromBottom = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const staggerContainerFast = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const teachingTimeline = [
  {
    school: "North Dakota State University",
    code: "CE454/654 - Fall 2024",
    course: "Geometric Highway Design",
    color: "bg-slate-100",
    textColor: "text-slate-700",
    borderColor: "border-slate-200",
  },
  {
    school: "University of Arizona",
    code: "CE363 - Fall 2023",
    course: "Transportation Engineering and Pavement Engineering",
    color: "bg-blue-100",
    textColor: "text-blue-700",
    borderColor: "border-blue-200",
  },
  {
    school: "University of Missouri-Columbia",
    code: "2022FS-CV_ENG-3100-01",
    course: "Transportation Engineering",
    color: "bg-indigo-100",
    textColor: "text-indigo-700",
    borderColor: "border-indigo-200",
  },
  {
    school: "Tennessee Technological University",
    code: "CEE3610",
    course: "Transportation Planning",
    color: "bg-purple-100",
    textColor: "text-purple-700",
    borderColor: "border-purple-200",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroBanner
        id="home"
        title="Aboah Armstrong"
        subtitle="Professor and Data Scientist"
        description="Welcome to my academic portfolio. I am dedicated to pushing the boundaries of technology through cutting-edge research, collaborative partnerships, and mentoring the next generation of researchers."
        showCtaBtn={false}
        showSocialLinks
        pageType="home"
      ></HeroBanner>

      {/* About Section */}
      <motion.section
        className="py-20 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <motion.div className="lg:col-span-3" variants={fadeInLeft}>
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-slate-900 mb-6"
                variants={fadeInUp}
              >
                About Me
              </motion.h2>
              <motion.div
                className="prose prose-lg max-w-none"
                variants={staggerContainerFast}
              >
                <motion.p
                  className="text-slate-600 mb-6 leading-relaxed"
                  variants={fadeInUp}
                >
                  I am an Assistant Professor at{" "}
                  <a
                    href="https://www.ndsu.edu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-900 font-medium hover:text-slate-700 transition-colors"
                  >
                    North Dakota State University
                  </a>
                  . I am an ingenious and resourceful Transportation Data
                  Scientist with a proven track record of success in research
                  and hands-on experience developing cutting-edge database
                  solutions, statistical modeling, data products, and computer
                  vision systems aimed at improving transportation system
                  management and operations.
                </motion.p>
                <motion.p
                  className="text-slate-600 mb-8 leading-relaxed"
                  variants={fadeInUp}
                >
                  My broad interests lie in computer vision and machine
                  learning. My research involves visual reasoning, vision and
                  language, image generation, air taxis, naturalistic studies,
                  and autonomous vehicles. I received my PhD from the University
                  of Missouri-Columbia, where I was advised by{" "}
                  <a
                    href="https://www.ndsu.edu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-900 font-medium hover:text-slate-700 transition-colors"
                  >
                    Professor Yaw Adu-Gyamfi
                  </a>
                  .
                </motion.p>
              </motion.div>
            </motion.div>
            <motion.div
              className="lg:col-span-2"
              variants={fadeInRight}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            >
              <motion.div className="relative" variants={scaleIn}>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl transform rotate-3"
                  animate={{ rotate: [3, -3, 3] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                ></motion.div>
                <Image
                  src="/aboah.png"
                  alt="Professor Aboah Armstrong"
                  width={400}
                  height={400}
                  className="relative rounded-2xl shadow-xl"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Research Focus Areas */}
      <motion.section
        className="py-20 px-4 bg-slate-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto max-w-7xl">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
              variants={fadeInUp}
            >
              Research Focus Areas
            </motion.h2>
            <motion.p
              className="text-slate-600 max-w-2xl mx-auto text-base lg:text-lg"
              variants={fadeInUp}
            >
              My research spans multiple domains, contributing to both
              theoretical understanding and practical applications.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
          >
            {[
              {
                icon: <BookOpen className="h-8 w-8 text-slate-700" />,
                title: "Machine Learning",
                description:
                  "Advanced algorithms and neural network architectures",
                count: "25+ Publications",
              },
              {
                icon: <Users className="h-8 w-8 text-slate-700" />,
                title: "Computer Vision",
                description: "Visual reasoning and image analysis systems",
                count: "15+ Projects",
              },
              {
                icon: <Award className="h-8 w-8 text-slate-700" />,
                title: "Transportation Systems",
                description: "Smart infrastructure and traffic optimization",
                count: "10+ Awards",
              },
              {
                icon: <TrendingUp className="h-8 w-8 text-slate-700" />,
                title: "Data Science",
                description: "Big data analytics and predictive modeling",
                count: "5+ Grants",
              },
            ].map((area, index) => (
              <motion.div
                key={index}
                variants={slideInFromBottom}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
              >
                <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white h-full overflow-hidden group">
                  <CardHeader className="pb-4">
                    <motion.div
                      className="mb-4 p-3 bg-slate-100 rounded-lg w-fit group-hover:bg-slate-200 transition-colors duration-300"
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.3 },
                      }}
                    >
                      {area.icon}
                    </motion.div>
                    <CardTitle className="text-slate-900">
                      {area.title}
                    </CardTitle>
                    <div className="text-sm text-slate-500 font-medium">
                      {area.count}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-slate-600">
                      {area.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Statistics Section */}
      <motion.section
        className="py-20 px-4 bg-slate-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto max-w-7xl">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              variants={fadeInUp}
            >
              Academic Achievements
            </motion.h2>
          </motion.div>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={staggerContainer}
          >
            {[
              {
                icon: <BookOpen className="h-8 w-8 text-slate-700" />,
                bg: "bg-slate-100",
                value: "45+",
                label: "Publications",
              },
              {
                icon: <Users className="h-8 w-8 text-slate-700" />,
                bg: "bg-slate-100",
                value: "15+",
                label: "Students Mentored",
              },
              {
                icon: <Award className="h-8 w-8 text-slate-700" />,
                bg: "bg-slate-100",
                value: "8",
                label: "Awards",
              },
              {
                icon: <Calendar className="h-8 w-8 text-slate-700" />,
                bg: "bg-slate-100",
                value: "10+",
                label: "Years Experience",
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                variants={scaleIn}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.3 },
                }}
              >
                <motion.div
                  className={`${stat.bg} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
                  whileHover={{
                    rotate: 360,
                    transition: { duration: 0.6 },
                  }}
                >
                  {stat.icon}
                </motion.div>
                <motion.h3
                  className="text-3xl font-bold text-white"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  {stat.value}
                </motion.h3>
                <p className="text-slate-600">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Teaching Experience Timeline */}
      <motion.section
        className="py-20 px-4 bg-slate-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto max-w-4xl">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
              variants={fadeInUp}
            >
              Teaching Experience
            </motion.h2>
            <motion.p
              className="text-slate-600 max-w-2xl mx-auto text-base lg:text-lg"
              variants={fadeInUp}
            >
              I have taught various courses in transportation engineering and
              related fields across multiple prestigious institutions.
            </motion.p>
          </motion.div>

          <motion.div className="relative" variants={staggerContainer}>
            {/* Timeline line */}
            <motion.div
              className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-300"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            ></motion.div>

            <div className="space-y-8">
              {teachingTimeline.map((item, index) => (
                <motion.div
                  key={item.school + item.code}
                  className="relative flex items-start gap-6"
                  variants={fadeInLeft}
                  whileHover={{
                    x: 10,
                    transition: { duration: 0.3 },
                  }}
                >
                  {/* Timeline dot */}
                  <motion.div
                    className="relative z-10"
                    whileHover={{
                      scale: 1.2,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <motion.div
                      className={`${item.color} p-3 rounded-full border-4 border-white shadow-lg`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.2,
                        type: "spring",
                        stiffness: 200,
                      }}
                    >
                      <GraduationCap className={`h-6 w-6 ${item.textColor}`} />
                    </motion.div>
                  </motion.div>

                  {/* Content card */}
                  <motion.div
                    className={`bg-white p-6 rounded-xl shadow-none border-l-4 ${item.borderColor} flex-1`}
                    whileHover={{
                      boxShadow:
                        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                      transition: { duration: 0.3 },
                    }}
                  >
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {item.school}
                    </h3>
                    <p className="text-slate-600 mb-2 font-medium">
                      {item.code}
                    </p>
                    <p className="text-slate-700">{item.course}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Current Projects */}
      <motion.section
        className="py-20 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto max-w-7xl">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
              variants={fadeInUp}
            >
              Current Projects
            </motion.h2>
            <motion.p
              className="text-slate-600 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Innovative research projects and software development initiatives
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
            variants={staggerContainer}
          >
            {projects.map((project, index) => {
              const Icon = iconMap[project.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={project.title}
                  variants={slideInFromBottom}
                  whileHover={{
                    y: -10,
                    transition: { duration: 0.3 },
                  }}
                >
                  <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white h-full overflow-hidden group">
                    <CardHeader>
                      <motion.div
                        className="mb-4"
                        whileHover={{
                          scale: 1.1,
                          transition: { duration: 0.3 },
                        }}
                      >
                        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 group-hover:bg-slate-200 transition-colors duration-300">
                          {Icon && <Icon className="w-6 h-6 text-slate-700" />}
                        </span>
                      </motion.div>
                      <CardTitle className="text-slate-900">
                        {project.title
                          .replace(/-/g, " ")
                          .replace(/\b\w/g, (l) => l.toUpperCase())}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <CardDescription className="text-slate-600 mb-4 flex-1">
                        {project.description}
                      </CardDescription>
                      <motion.div
                        className="flex items-center gap-2 mt-auto"
                        whileHover={{
                          x: 5,
                          transition: { duration: 0.3 },
                        }}
                      >
                        <motion.div
                          className="w-2 h-2 bg-green-500 rounded-full"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [1, 0.7, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.3,
                          }}
                        ></motion.div>
                        <span className="text-slate-700 font-medium text-sm">
                          {project.status}
                        </span>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action */}
      {/* <section className="py-20 px-4 bg-slate-900">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Interested in Collaboration?
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              I&apos;m always open to discussing research opportunities,
              academic partnerships, and innovative projects in transportation
              engineering and data science.
            </p>
            <Button
              size="lg"
              className="bg-white text-slate-900 hover:bg-slate-100"
            >
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </motion.div>
        </div>
      </section> */}
    </main>
  );
}
