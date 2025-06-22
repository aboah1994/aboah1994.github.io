"use client";

import HeroBanner from "@/components/hero-banner";
import {
  GraduationCap,
  BrainCircuit,
  Car,
  MapPin,
  Mail,
  Phone,
  Cpu,
  Building2,
  Route,
  Shield,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";

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
    color: "bg-teal-50",
    textColor: "text-teal-800",
    borderColor: "border-teal-200",
  },
  {
    school: "University of Arizona",
    code: "CE363 - Fall 2023",
    course: "Transportation Engineering and Pavement Engineering",
    color: "bg-orange-50",
    textColor: "text-orange-400",
    borderColor: "border-orange-200",
  },
  {
    school: "University of Missouri-Columbia",
    code: "CV_ENG-3100-01 - Fall 2022",
    course: "Transportation Engineering",
    color: "bg-teal-100",
    textColor: "text-teal-900",
    borderColor: "border-teal-300",
  },
  {
    school: "Tennessee Technological University",
    code: "CEE3610 - Fall 2021",
    course: "Transportation Planning",
    color: "bg-orange-100",
    textColor: "text-orange-600",
    borderColor: "border-orange-300",
  },
];

type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

export default function Home() {
  // Contact form setup
  const form = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: ContactFormValues) {
    // For now, just alert the data. Replace with your API/email logic.
    alert(`Thank you, ${data.name}! Your message has been sent.`);
    form.reset();
  }

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
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <motion.div className="lg:col-span-3" variants={fadeInLeft}>
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-teal-800 mb-6"
                variants={fadeInUp}
              >
                About Me
              </motion.h2>
              <motion.div
                className="prose prose-lg max-w-none"
                variants={staggerContainerFast}
              >
                <motion.p className=" mb-6 leading-relaxed" variants={fadeInUp}>
                  I am an Assistant Professor at{" "}
                  <a
                    href="https://www.ndsu.edu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-800 font-medium hover:text-orange-400 transition-colors underline underline-offset-2 decoration-orange-400/40"
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
                <motion.p className=" mb-8 leading-relaxed" variants={fadeInUp}>
                  My broad interests lie in computer vision and machine
                  learning. My research involves visual reasoning, vision and
                  language, image generation, air taxis, naturalistic studies,
                  and autonomous vehicles. I received my PhD from the University
                  of Missouri-Columbia, where I was advised by{" "}
                  <a
                    href="https://www.ndsu.edu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-800 font-medium hover:text-orange-400 transition-colors underline underline-offset-2 decoration-orange-400/40"
                  >
                    Professor Yaw Adu-Gyamfi
                  </a>
                  .
                </motion.p>
              </motion.div>
            </motion.div>
            <motion.div
              className="lg:col-span-2 flex justify-center"
              variants={fadeInRight}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            >
              <motion.div className="relative" variants={scaleIn}>
                <Image
                  src="/aboah.png"
                  alt="Professor Aboah Armstrong"
                  width={400}
                  height={400}
                  className="relative rounded-2xl  shadow-lg"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Research Focus Areas */}
      <motion.section
        className="py-20 px-4 bg-teal-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <motion.h2
              className="text-2xl md:text-3xl font-bold text-white mb-4"
              variants={fadeInUp}
            >
              Research Focus Areas
            </motion.h2>
            <motion.p
              className="text-teal-100 max-w-2xl mx-auto text-base lg:text-lg"
              variants={fadeInUp}
            >
              My research spans multiple domains, contributing to both
              theoretical understanding and practical applications.
            </motion.p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {[
              {
                icon: BrainCircuit,
                title: "Big Data Analytics In Transportation",
                description:
                  "Leveraging large-scale data and machine learning to uncover insights, predict trends, and support decision-making in transportation systems",
                iconColor: "text-teal-800",
              },
              {
                icon: Car,
                title: "Autonomous and Connected Vehicles",
                description:
                  "Exploring the development, deployment, and societal impacts of self-driving and networked vehicles",
                iconColor: "text-orange-400",
              },
              {
                icon: Building2,
                title: "Digital Twins and Smart Cities",
                description:
                  "Utilizing digital replicas of physical assets and urban environments to optimize city planning, operations, and sustainability",
                iconColor: "text-teal-800",
              },
              {
                icon: Cpu,
                title: "Intelligent Transportation Systems",
                description:
                  "Integrating advanced technologies to create smarter, adaptive transportation networks",
                iconColor: "text-orange-400",
              },
              {
                icon: Route,
                title: "Pavement and Asset Management",
                description:
                  "Developing methods for monitoring, maintaining, and optimizing the lifecycle of roads, bridges, and other transportation assets",
                iconColor: "text-teal-800",
              },
              {
                icon: Shield,
                title: "Transportation Safety",
                description:
                  "Roadyways accidents reduction using data analysis,simulation and safety interventions",
                iconColor: "text-orange-400",
              },
            ].map((area, index) => (
              <motion.div
                key={index}
                variants={slideInFromBottom}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.3 },
                }}
              >
                <div className="bg-white rounded-2xl p-6 flex flex-col items-center shadow-none border border-teal-100 h-full">
                  <div className="w-20 h-20 rounded-xl overflow-hidden mb-4 flex items-center justify-center bg-gray-50">
                    <area.icon className={`w-14 h-14 ${area.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-bold text-teal-800 mb-2 text-center">
                    {area.title}
                  </h3>
                  <div className="w-10 border-t-2 border-dotted border-orange-400 mb-2"></div>
                  <p className="text-teal-700 text-base text-center">
                    {area.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Teaching Experience Timeline */}
      <motion.section
        className="py-20 px-4 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto max-w-4xl">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <motion.h2
              className="text-2xl md:text-3xl font-bold text-teal-800 mb-4"
              variants={fadeInUp}
            >
              Teaching Experience
            </motion.h2>
            <motion.p
              className=" max-w-2xl mx-auto text-base lg:text-lg"
              variants={fadeInUp}
            >
              I have taught various courses in transportation engineering and
              related fields across multiple prestigious institutions.
            </motion.p>
          </motion.div>

          <motion.div className="relative" variants={staggerContainer}>
            {/* Timeline line */}
            <motion.div
              className="absolute left-8 top-0 bottom-0 w-0.5 bg-teal-100"
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
                      className={`${item.color} p-3 rounded-full border-4 border-white shadow-none`}
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
                    className={`bg-white p-6 rounded-xl border-l-4 ${item.borderColor} flex-1`}
                    whileHover={{
                      boxShadow: "0 4px 12px 0 rgba(16, 185, 129, 0.08)",
                      transition: { duration: 0.3 },
                    }}
                  >
                    <h3 className="text-lg font-bold text-teal-800 mb-2">
                      {item.school}
                    </h3>
                    <p
                      className={`text-sm font-semibold mb-1 ${item.textColor}`}
                    >
                      {item.code}
                    </p>
                    <p className="text-teal-700">{item.course}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact & CTA Section */}
      <motion.section
        className="py-10 px-4 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="rounded-2xl shadow-lg shadow-teal-50 overflow-hidden flex flex-col md:flex-row bg-white">
            {/* CTA Banner Left */}
            <motion.div
              className="bg-teal-800 flex-1 p-10 flex flex-col justify-center"
              variants={fadeInLeft}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Get In Touch
              </h2>
              <p className="text-teal-100 mb-4 text-base md:text-lg">
                Interested in collaborating, have a question, or just want to
                say hello? Reach out using the info below or the form.
              </p>
              <div className="flex flex-col gap-6 mt-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
                  <div className="text-white text-base leading-relaxed">
                    CIE 201K, 1410 North 14th Avenue,
                    <br />
                    Fargo, ND 58102
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-orange-400 flex-shrink-0" />
                  <a
                    href="mailto:armstrong.aboah@ndsu.edu"
                    className="text-white text-base font-semibold hover:text-orange-400 transition-colors"
                  >
                    armstrong.aboah@ndsu.edu
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-orange-400 flex-shrink-0" />
                  <a
                    href="tel:+17012317564"
                    className="text-white text-base font-semibold hover:text-orange-400 transition-colors"
                  >
                    (701) 231-7564
                  </a>
                </div>
              </div>
            </motion.div>
            {/* Divider */}
            <div className="hidden md:block w-px bg-teal-100" />
            <div className="block md:hidden h-px bg-teal-100 mx-10" />
            {/* Form Card Right */}
            <motion.div className="bg-white flex-1 p-10" variants={fadeInRight}>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="grid gap-6"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-teal-800">Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your Name"
                            {...field}
                            className="bg-gray-50 text-teal-800  placeholder:text-sm text-sm rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-colors"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    rules={{ required: "Email is required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-teal-800">Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Your Email"
                            {...field}
                            className="bg-gray-50 text-teal-800  placeholder:text-sm text-sm rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-colors"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    rules={{ required: "Message is required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-teal-800">Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Your Message"
                            rows={4}
                            {...field}
                            className="bg-gray-50 text-teal-800  placeholder:text-sm text-sm rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-colors"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <button
                    type="submit"
                    className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 text-lg w-full"
                  >
                    Send Message
                  </button>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
