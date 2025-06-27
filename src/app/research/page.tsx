"use client";
import HeroBanner from "@/components/hero-banner";
import { motion } from "framer-motion";
import { Car, Calendar, BrainCircuit, Camera, BarChart3 } from "lucide-react";
import Image from "next/image";
import { sponsors } from "@/lib/constants";
import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

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

      {/* Current Projects - new design */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-4">
              Current Projects
            </h2>
            <p className="max-w-2xl mx-auto text-base lg:text-lg">
              Innovative research projects and software development initiatives
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                image: "/bison-sherperding.png",
                title: "Robotic Shepherding of Bisons",
                description:
                  "Developing autonomous robotic systems to safely monitor and guide bison herds using computer vision and adaptive AI algorithms that respect natural behaviors.",
                status: "In Progress",
              },
              {
                image: "/work-safety.png",
                title: "Work Zone Safety",
                description:
                  "Enhancing construction zone safety with real-time monitoring systems that alert workers and drivers to potential hazards using IoT sensors and predictive analytics.",
                status: "In Progress",
              },
              {
                image: "/electric-grid.png",
                title: "Electric Grid Monitoring with ML Models",
                description:
                  "Implementing machine learning algorithms to predict and optimize electric grid performance for EV charging infrastructures, focusing on load balancing and efficiency.",
                status: "In Progress",
              },
              {
                image: "/smart-city.png",
                title: "Building of a Smart City",
                description:
                  "Creating an integrated digital twin for urban planning and mobility optimization, connecting transportation systems, energy networks, and public services through a unified data platform for sustainability and efficiency.",
                status: "In Progress",
              },
              {
                image: "/pavement.mp4",
                title: "Pavement Cracks Detection",
                description:
                  "Advancing computer vision and deep learning techniques to automatically identify, classify, and assess pavement defects from mobile imagery, enabling proactive maintenance and improved infrastructure management.",
                status: "In Progress",
                isVideo: true,
              },
            ].map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                  delay: idx * 0.08,
                }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex flex-col h-full overflow-hidden shadow-none border-none p-0">
                  <div className="w-full h-56 md:h-64 lg:h-56 xl:h-64 overflow-hidden relative">
                    {project?.isVideo ? (
                      <video
                        src={project.image}
                        autoPlay
                        loop
                        muted
                        className="object-cover w-full h-full bg-gray-50"
                      />
                    ) : (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover w-full h-full bg-gray-50"
                      />
                    )}
                  </div>
                  <div className="py-7 flex flex-col flex-1 bg-transparent">
                    <h3 className="text-xl font-bold text-teal-800 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-black text-base mb-6 flex-1">
                      {project.description}
                    </p>
                    <div className="flex items-center mt-auto">
                      <span className="inline-flex items-center text-xs text-orange-500 font-semibold gap-1">
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Projects - new design */}
      <section className="py-20 px-4 bg-teal-800">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Past Projects
            </h2>
            <p className="text-teal-100 max-w-2xl mx-auto text-base lg:text-lg">
              A showcase of completed research and development initiatives
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                image: "/gaze.png",
                title: "Robotic Shepherding of Bisons",
                description:
                  "Developing autonomous robotic systems to safely monitor and guide bison herds using computer vision and adaptive AI algorithms that respect natural behaviors.",
                status: "Completed",
              },
              {
                image: "/edge-computing.png",
                title: "Work Zone Safety",
                description:
                  "Enhancing construction zone safety with real-time monitoring systems that alert workers and drivers to potential hazards using IoT sensors and predictive analytics.",
                status: "Completed",
              },
              {
                image: "/delay.jpg",
                title: "Electric Grid Monitoring with ML Models",
                description:
                  "Implementing machine learning algorithms to predict and optimize electric grid performance for EV charging infrastructures, focusing on load balancing and efficiency.",
                status: "Completed",
              },
              {
                image: "/pave.jpg",
                title: "Building of a Smart City",
                description:
                  "Creating an integrated digital twin for urban planning and mobility optimization, connecting transportation systems, energy networks, and public services through a unified data platform for sustainability and efficiency.",
                status: "Completed",
              },
              {
                image: "/anomaly.jpg",
                title: "Pavement Cracks Detection",
                description:
                  "Advancing computer vision and deep learning techniques to automatically identify, classify, and assess pavement defects from mobile imagery, enabling proactive maintenance and improved infrastructure management.",
                status: "Completed",
              },
            ].map((project, idx) => (
              <motion.div
                key={project.title + "-past"}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                  delay: idx * 0.08,
                }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="bg-teal-50 rounded-xl flex flex-col shadow-md h-full overflow-hidden">
                  <div className="w-full h-44 md:h-52 lg:h-40 xl:h-52 overflow-hidden relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover w-full h-full opacity-90"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-teal-900 mb-1">
                      {project.title}
                    </h3>
                    <div className="w-8 border-t-2 border-solid border-orange-400 mb-2"></div>
                    <p className="text-teal-800 text-base mb-3 flex-1">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-2 mt-auto">
                      <span className="inline-flex items-center text-xs text-orange-600 font-semibold gap-1">
                        <Calendar className="w-4 h-4" /> Completed
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Methodology */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <motion.h2
                className="text-2xl md:text-3xl font-bold text-teal-800 mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                Research Approach
              </motion.h2>
              <div className="space-y-6">
                {[1, 2, 3].map((step, idx) => (
                  <motion.div
                    key={step}
                    className="flex gap-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.7,
                      ease: "easeOut",
                      delay: idx * 0.08,
                    }}
                  >
                    <motion.div
                      className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-md"
                      whileHover={{ scale: 1.12 }}
                    >
                      <span className="text-white font-bold text-sm">
                        {step}
                      </span>
                    </motion.div>
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-teal-800 mb-2">
                        {step === 1 && "Data-Driven Insights"}
                        {step === 2 && "Interdisciplinary Collaboration"}
                        {step === 3 && "Real-World Applications"}
                      </h3>
                      <p>
                        {step === 1 &&
                          "I leverage large-scale datasets and advanced analytics to uncover patterns and insights that inform my research directions and validate my findings."}
                        {step === 2 &&
                          "My research benefits from collaborations across engineering, computer science, urban planning, and policy domains to address complex transportation challenges."}
                        {step === 3 &&
                          "I focus on research that has practical applications and can be implemented to improve transportation systems and enhance quality of life."}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="bg-white rounded-2xl p-8 text-center border border-teal-100">
                <div className="grid grid-cols-2 gap-6">
                  {researchAreas.map((item, idx) => (
                    <motion.div
                      key={item.title}
                      className="bg-white rounded-xl p-6 border border-teal-100 shadow-none hover:border-orange-400 transition-all duration-300"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        duration: 0.7,
                        ease: "easeOut",
                        delay: idx * 0.08,
                      }}
                      whileHover={{ scale: 1.04 }}
                    >
                      <motion.div whileHover={{ scale: 1.1 }}>
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
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sponsors & Core Partners Carousel */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-4">
              Our Core Partners
            </h2>
            <p className="max-w-2xl mx-auto text-base lg:text-lg">
              Organizations we collaborate with to advance research and
              innovation
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <CarouselSection />
          </motion.div>
        </div>
      </section>
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
