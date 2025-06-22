"use client";
import HeroBanner from "@/components/hero-banner";
import { motion } from "framer-motion";
import {
  Car,
  Database,
  BookOpen,
  Calendar,
  BrainCircuit,
  Camera,
  BarChart3,
} from "lucide-react";
import Image from "next/image";
import { sponsors } from "@/lib/constants";
import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

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

const researchAreas = [
  {
    icon: BrainCircuit,
    title: "Machine Learning",
    description: "Advanced algorithms and neural network architectures",
    iconColor: "text-teal-800",
  },
  {
    icon: Camera,
    title: "Computer Vision",
    description: "Visual reasoning and image analysis systems",
    iconColor: "text-orange-400",
  },
  {
    icon: Car,
    title: "Transportation Systems",
    description: "Smart infrastructure and traffic optimization",
    iconColor: "text-teal-800",
  },
  {
    icon: BarChart3,
    title: "Data Science",
    description: "Big data analytics and predictive modeling",
    iconColor: "text-orange-400",
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

      {/* Research Focus Areas */}
      <motion.section
        className="py-20 px-4 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div className="text-center mb-12" variants={fadeInUp}>
            <motion.h2
              className="text-2xl md:text-3xl font-bold text-teal-800 mb-4"
              variants={fadeInUp}
            >
              Research Focus Areas
            </motion.h2>
            <motion.p
              className=" max-w-2xl mx-auto text-base lg:text-lg"
              variants={fadeInUp}
            >
              My multidisciplinary approach addresses complex challenges across
              transportation systems, data science, and emerging technologies.
            </motion.p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
          >
            {researchAreas.map((area, idx) => (
              <motion.div
                key={area.title}
                variants={fadeInUp}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                  boxShadow: "0 8px 32px 0 rgba(16, 185, 129, 0.08)",
                  transition: { duration: 0.3 },
                }}
              >
                <div className="bg-white rounded-2xl border border-teal-100 shadow-none hover:border-orange-400 transition-all duration-300 flex flex-col items-center p-8 h-full">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                      idx % 2 === 0 ? "bg-teal-50" : "bg-orange-50"
                    }`}
                  >
                    <area.icon className={`w-9 h-9 ${area.iconColor}`} />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-teal-800 mb-2 text-center">
                    {area.title}
                  </h3>
                  <div className="w-10 border-t-2 border-dotted border-orange-400 mb-2 mx-auto"></div>
                  <p className="text-teal-700 text-base text-center mb-4">
                    {area.description}
                  </p>
                  {/* Only show metrics if available */}
                  {"publications" in area && "projects" in area ? (
                    <div className="flex justify-center gap-4 text-sm text-teal-700 mt-auto">
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        {Number(area.publications)} papers
                      </span>
                      <span className="flex items-center gap-1">
                        <Database className="w-4 h-4" />
                        {Number(area.projects)} projects
                      </span>
                    </div>
                  ) : null}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
      {/* Current Projects - new design */}
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
              Current Projects
            </motion.h2>
            <motion.p
              className="text-teal-100 max-w-2xl mx-auto text-base lg:text-lg"
              variants={fadeInUp}
            >
              Innovative research projects and software development initiatives
            </motion.p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            variants={staggerContainer}
          >
            {[
              {
                image: "/gaze.png",
                title: "Robotic Shepherding of Bisons",
                description:
                  "Developing autonomous robotic systems to safely monitor and guide bison herds using computer vision and adaptive AI algorithms that respect natural behaviors.",
                status: "In Progress",
              },
              {
                image: "/edge-computing.png",
                title: "Work Zone Safety",
                description:
                  "Enhancing construction zone safety with real-time monitoring systems that alert workers and drivers to potential hazards using IoT sensors and predictive analytics.",
                status: "In Progress",
              },
              {
                image: "/delay.jpg",
                title: "Electric Grid Monitoring with ML Models",
                description:
                  "Implementing machine learning algorithms to predict and optimize electric grid performance for EV charging infrastructures, focusing on load balancing and efficiency.",
                status: "In Progress",
              },
              {
                image: "/pave.jpg",
                title: "Building of a Smart City",
                description:
                  "Creating an integrated digital twin for urban planning and mobility optimization, connecting transportation systems, energy networks, and public services through a unified data platform for sustainability and efficiency.",
                status: "In Progress",
              },
              {
                image: "/anomaly.jpg",
                title: "Pavement Cracks Detection",
                description:
                  "Advancing computer vision and deep learning techniques to automatically identify, classify, and assess pavement defects from mobile imagery, enabling proactive maintenance and improved infrastructure management.",
                status: "In Progress",
              },
            ].map((project) => (
              <motion.div
                key={project.title}
                variants={slideInFromBottom}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.3 },
                }}
              >
                <div className="bg-white rounded-2xl p-0 flex flex-col shadow-none border border-teal-100 h-full overflow-hidden">
                  <div className="w-full h-48 md:h-56 lg:h-44 xl:h-56 overflow-hidden rounded-t-2xl relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-teal-800 mb-2">
                      {project.title}
                    </h3>
                    <div className="w-10 border-t-2 border-dotted border-orange-400 mb-2"></div>
                    <p className="text-teal-700 text-base mb-4 flex-1">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-2 mt-auto">
                      <span className="inline-flex items-center text-xs text-orange-400 font-semibold gap-1">
                        <Calendar className="w-4 h-4" /> {project.status}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Research Methodology */}
      <motion.section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft}>
              <motion.h2
                className="text-2xl md:text-3xl font-bold text-teal-800 mb-6"
                variants={fadeInUp}
              >
                Research Approach
              </motion.h2>
              <motion.div className="space-y-6" variants={staggerContainerFast}>
                <motion.div className="flex gap-4" variants={fadeInUp}>
                  <motion.div
                    className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-md"
                    whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
                  >
                    <span className="text-white font-bold text-sm">1</span>
                  </motion.div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-teal-800 mb-2">
                      Data-Driven Insights
                    </h3>
                    <p className="">
                      I leverage large-scale datasets and advanced analytics to
                      uncover patterns and insights that inform my research
                      directions and validate my findings.
                    </p>
                  </div>
                </motion.div>
                <motion.div className="flex gap-4" variants={fadeInUp}>
                  <motion.div
                    className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-md"
                    whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
                  >
                    <span className="text-white font-bold text-sm">2</span>
                  </motion.div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-teal-800 mb-2">
                      Interdisciplinary Collaboration
                    </h3>
                    <p className="">
                      My research benefits from collaborations across
                      engineering, computer science, urban planning, and policy
                      domains to address complex transportation challenges.
                    </p>
                  </div>
                </motion.div>
                <motion.div className="flex gap-4" variants={fadeInUp}>
                  <motion.div
                    className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-md"
                    whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
                  >
                    <span className="text-white font-bold text-sm">3</span>
                  </motion.div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-teal-800 mb-2">
                      Real-World Applications
                    </h3>
                    <p className="">
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
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <motion.div
                className="bg-white rounded-2xl p-8 text-center border border-teal-100"
                variants={scaleIn}
              >
                <motion.div
                  className="grid grid-cols-2 gap-6"
                  variants={staggerContainer}
                >
                  {researchAreas.map((item) => (
                    <motion.div
                      key={item.title}
                      className="bg-white rounded-xl p-6 border border-teal-100 shadow-none hover:border-orange-400 transition-all duration-300"
                      variants={fadeInUp}
                      whileHover={{
                        y: -5,
                        scale: 1.04,
                        transition: { duration: 0.3 },
                      }}
                    >
                      <motion.div
                        whileHover={{
                          scale: 1.1,
                          transition: { duration: 0.3 },
                        }}
                      >
                        <item.icon
                          className={`w-8 h-8 mx-auto mb-3 ${item.iconColor}`}
                        />
                      </motion.div>
                      <h4 className="font-bold text-teal-800 mb-2">
                        {item.title}
                      </h4>
                      <div className="w-8 border-t-2 border-dotted border-orange-400 mb-2 mx-auto"></div>
                      <p className="text-teal-700 text-sm">
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

      {/* Sponsors & Core Partners Carousel */}
      <motion.section
        className="py-20 px-4 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto max-w-5xl">
          <motion.div className="text-center mb-10" variants={fadeInUp}>
            <motion.h2
              className="text-2xl md:text-3xl font-bold text-teal-800 mb-4"
              variants={fadeInUp}
            >
              Our Core Partners
            </motion.h2>
            <motion.p
              className="max-w-2xl mx-auto text-base lg:text-lg"
              variants={fadeInUp}
            >
              Organizations we collaborate with to advance research and
              innovation
            </motion.p>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <CarouselSection />
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

function CarouselSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  // Responsive slides per view
  const getSlidesToShow = () => {
    if (typeof window === "undefined") return 1;
    if (window.innerWidth >= 1024) return 4;
    if (window.innerWidth >= 640) return 2;
    return 1;
  };
  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow());

  useEffect(() => {
    const handleResize = () => setSlidesToShow(getSlidesToShow());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update selected index on slide change
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  // Autoplay logic
  useEffect(() => {
    if (!emblaApi) return;
    if (intervalId) clearInterval(intervalId);
    const id = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, 3000);
    setIntervalId(id);
    return () => clearInterval(id);
  }, [emblaApi]);

  // Pause autoplay on hover
  const handleMouseEnter = () => {
    if (intervalId) clearInterval(intervalId);
  };
  const handleMouseLeave = () => {
    if (!emblaApi) return;
    const id = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, 3000);
    setIntervalId(id);
  };

  // Dot click handler
  const scrollTo = (idx: number) => {
    if (emblaApi) emblaApi.scrollTo(idx);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={emblaRef} className="overflow-hidden w-full">
        <div className="flex">
          {sponsors.map((s) => (
            <div
              key={s.name}
              className="flex items-center justify-center flex-shrink-0"
              style={{
                width:
                  slidesToShow === 4
                    ? "25%"
                    : slidesToShow === 2
                    ? "50%"
                    : "100%",
                minWidth:
                  slidesToShow === 4
                    ? "25%"
                    : slidesToShow === 2
                    ? "50%"
                    : "100%",
                transition: "width 0.3s",
              }}
            >
              <Image
                src={s.image}
                alt={s.name}
                width={200}
                height={80}
                className="object-contain max-h-20 max-w-full"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-10">
        {sponsors.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollTo(idx)}
            className={`h-3 w-3 rounded-full transition-all duration-300 focus:outline-none  ${
              selectedIndex === idx
                ? "bg-orange-400 shadow-lg scale-110"
                : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Research;
