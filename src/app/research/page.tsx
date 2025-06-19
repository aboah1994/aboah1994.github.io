"use client";
import HeroBanner from "@/components/hero-banner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Car,
  Bus,
  Shield,
  Database,
  TrafficConeIcon as Traffic,
  Cpu,
  Network,
  Building2,
  TrendingUp,
  RouteIcon as Road,
  Wheat,
  BookOpen,
} from "lucide-react";

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

const iconMap = {
  "Transportation Planning": TrendingUp,
  "Public Transportation": Bus,
  "Transportation Safety": Shield,
  "Big Data Analytics in Transportation": Database,
  "Congestion Management": Traffic,
  "Autonomous and Connected Vehicles": Car,
  "Intelligent Transportation Systems": Cpu,
  "Digital Twins and Smart Cities": Building2,
  "Travel Demand Modeling": Network,
  "Pavement and Asset Management": Road,
  "Agriculture Technology and AI": Wheat,
};

const researchAreas = [
  {
    title: "Transportation Planning",
    description:
      "Developing strategies and models to optimize the movement of people and goods, improve infrastructure, and enhance mobility in urban and rural environments.",
    icon: "Transportation Planning",
    publications: 8,
    projects: 3,
  },
  {
    title: "Public Transportation",
    description:
      "Researching systems and technologies to improve the efficiency, accessibility, and sustainability of buses, trains, and other mass transit options.",
    icon: "Public Transportation",
    publications: 5,
    projects: 2,
  },
  {
    title: "Transportation Safety",
    description:
      "Advancing methods and technologies to reduce accidents, injuries, and fatalities on roadways through data analysis, simulation, and safety interventions.",
    icon: "Transportation Safety",
    publications: 12,
    projects: 4,
  },
  {
    title: "Big Data Analytics in Transportation",
    description:
      "Leveraging large-scale data and machine learning to uncover insights, predict trends, and support decision-making in transportation systems.",
    icon: "Big Data Analytics in Transportation",
    publications: 15,
    projects: 6,
  },
  {
    title: "Congestion Management",
    description:
      "Designing solutions to monitor, predict, and alleviate traffic congestion, improving travel time reliability and reducing environmental impact.",
    icon: "Congestion Management",
    publications: 7,
    projects: 3,
  },
  {
    title: "Autonomous and Connected Vehicles",
    description:
      "Exploring the development, deployment, and societal impacts of self-driving and networked vehicles for safer and more efficient transportation.",
    icon: "Autonomous and Connected Vehicles",
    publications: 18,
    projects: 8,
  },
  {
    title: "Intelligent Transportation Systems",
    description:
      "Integrating advanced technologies such as sensors, communication, and control systems to create smarter, adaptive transportation networks.",
    icon: "Intelligent Transportation Systems",
    publications: 10,
    projects: 5,
  },
  {
    title: "Digital Twins and Smart Cities",
    description:
      "Utilizing digital replicas of physical assets and urban environments to optimize city planning, operations, and sustainability.",
    icon: "Digital Twins and Smart Cities",
    publications: 6,
    projects: 4,
  },
  {
    title: "Travel Demand Modeling",
    description:
      "Modeling and forecasting travel behavior to inform infrastructure investments, policy decisions, and transportation planning.",
    icon: "Travel Demand Modeling",
    publications: 9,
    projects: 3,
  },
  {
    title: "Pavement and Asset Management",
    description:
      "Developing methods for monitoring, maintaining, and optimizing the lifecycle of roads, bridges, and other transportation assets.",
    icon: "Pavement and Asset Management",
    publications: 11,
    projects: 5,
  },
  {
    title: "Agriculture Technology and AI",
    description:
      "Applying artificial intelligence and advanced technologies to enhance agricultural productivity, sustainability, and supply chain logistics.",
    icon: "Agriculture Technology and AI",
    publications: 4,
    projects: 2,
  },
];

const Research = () => {
  return (
    <>
      <HeroBanner
        id="research"
        title="Research"
        subtitle="Advancing Transportation Technology Through Innovation"
        description="My research spans cutting-edge areas in transportation engineering, data science, and artificial intelligence, with a focus on creating innovative solutions for real-world challenges in autonomous vehicles, computer vision, and smart transportation systems."
        showCtaBtn={false}
        ctaBtnText="View Publications"
        pageType="research"
        isSmall={true}
      />

      {/* Research Areas */}
      <motion.section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="container mx-auto max-w-7xl">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-6"
              variants={fadeInUp}
            >
              Research Focus Areas
            </motion.h2>
            <motion.p
              className="text-slate-600 max-w-2xl mx-auto text-lg"
              variants={fadeInUp}
            >
              My multidisciplinary approach addresses complex challenges across
              transportation systems, data science, and emerging technologies.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {researchAreas.map((area) => {
              const Icon = iconMap[area.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={area.title}
                  variants={slideInFromBottom}
                  whileHover={{
                    y: -10,
                    transition: { duration: 0.3 },
                  }}
                >
                  <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white h-full overflow-hidden group">
                    <CardHeader className="pb-4">
                      <div className="mb-4">
                        <motion.div
                          className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-slate-200 transition-colors duration-300"
                          whileHover={{
                            scale: 1.1,
                            rotate: 5,
                            transition: { duration: 0.3 },
                          }}
                        >
                          {Icon && <Icon className="w-6 h-6 text-slate-700" />}
                        </motion.div>
                        <CardTitle className="text-slate-900 text-xl leading-tight">
                          {area.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <p className="text-slate-600 mb-6 leading-relaxed flex-1">
                        {area.description}
                      </p>

                      {/* Research Metrics */}
                      <motion.div
                        className="flex items-center justify-between pt-4 border-t border-slate-100"
                        whileHover={{
                          x: 5,
                          transition: { duration: 0.3 },
                        }}
                      >
                        <div className="flex items-center gap-4 text-sm text-slate-500">
                          <motion.span
                            className="flex items-center gap-1"
                            whileHover={{ scale: 1.05 }}
                          >
                            <BookOpen className="w-4 h-4" />
                            {area.publications} papers
                          </motion.span>
                          <motion.span
                            className="flex items-center gap-1"
                            whileHover={{ scale: 1.05 }}
                          >
                            <Database className="w-4 h-4" />
                            {area.projects} projects
                          </motion.span>
                        </div>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Research Methodology */}
      <motion.section
        className="py-20 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft}>
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-slate-900 mb-6"
                variants={fadeInUp}
              >
                My Research Approach
              </motion.h2>
              <motion.div className="space-y-6" variants={staggerContainerFast}>
                <motion.div className="flex gap-4" variants={fadeInUp}>
                  <motion.div
                    className="w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                    whileHover={{
                      scale: 1.2,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <span className="text-white font-bold text-sm">1</span>
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      Data-Driven Insights
                    </h3>
                    <p className="text-slate-600">
                      I leverage large-scale datasets and advanced analytics to
                      uncover patterns and insights that inform my research
                      directions and validate my findings.
                    </p>
                  </div>
                </motion.div>

                <motion.div className="flex gap-4" variants={fadeInUp}>
                  <motion.div
                    className="w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                    whileHover={{
                      scale: 1.2,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <span className="text-white font-bold text-sm">2</span>
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      Interdisciplinary Collaboration
                    </h3>
                    <p className="text-slate-600">
                      My research benefits from collaborations across
                      engineering, computer science, urban planning, and policy
                      domains to address complex transportation challenges.
                    </p>
                  </div>
                </motion.div>

                <motion.div className="flex gap-4" variants={fadeInUp}>
                  <motion.div
                    className="w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                    whileHover={{
                      scale: 1.2,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <span className="text-white font-bold text-sm">3</span>
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      Real-World Applications
                    </h3>
                    <p className="text-slate-600">
                      I focus on research that has practical applications and
                      can be implemented to improve transportation systems and
                      enhance quality of life.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              variants={fadeInRight}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              <motion.div
                className="bg-slate-100 rounded-2xl p-8 text-center"
                variants={scaleIn}
              >
                <motion.div
                  className="grid grid-cols-2 gap-6"
                  variants={staggerContainer}
                >
                  {[
                    {
                      icon: Database,
                      title: "Big Data",
                      description: "Advanced analytics and machine learning",
                    },
                    {
                      icon: Car,
                      title: "Autonomous Systems",
                      description: "Self-driving and connected vehicles",
                    },
                    {
                      icon: Shield,
                      title: "Safety Systems",
                      description: "Accident prevention and risk analysis",
                    },
                    {
                      icon: Building2,
                      title: "Smart Cities",
                      description: "Digital twins and urban optimization",
                    },
                  ].map((item) => (
                    <motion.div
                      key={item.title}
                      className="bg-white rounded-xl p-6 shadow-sm"
                      variants={fadeInUp}
                      whileHover={{
                        y: -5,
                        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                        transition: { duration: 0.3 },
                      }}
                    >
                      <motion.div
                        whileHover={{
                          scale: 1.1,
                          transition: { duration: 0.3 },
                        }}
                      >
                        <item.icon className="w-8 h-8 text-slate-700 mx-auto mb-3" />
                      </motion.div>
                      <h4 className="font-bold text-slate-900 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-slate-600 text-sm">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Research;
