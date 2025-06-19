"use client";
import HeroBanner from "@/components/hero-banner";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  ExternalLink,
  GraduationCap,
  BookOpen,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const professor = {
  name: "Dr. Aboah Armstrong",
  title: "Assistant Professor",
  subtitle: "Transportation Data Scientist & Computer Vision Researcher",
  department: "Department of Civil, Construction and Environmental Engineering",
  university: "North Dakota State University",
  address: "CIE 202K, 1410 North 14th Avenue, Fargo, ND 58102",
  email: "aboah.armstrong@ndsu.edu",
  phone: "(701) 231-7564",
  image: "/aboah.png",
  bio: "Dr. Armstrong is a leading researcher in transportation data science, computer vision, and machine learning applications in transportation systems. His work focuses on developing innovative solutions for autonomous vehicles, traffic analysis, and smart transportation infrastructure.",
  expertise: [
    "Computer Vision",
    "Machine Learning",
    "Transportation Systems",
    "Data Science",
  ],
  links: [
    { label: "LinkedIn", url: "#", icon: Linkedin },
    { label: "Google Scholar", url: "#", icon: BookOpen },
    { label: "Research Gate", url: "#", icon: ExternalLink },
  ],
};

const currentStudents = [
  {
    name: "Blessing Agyei Kyem",
    degree: "PhD Student",
    image: "/blessing.png",
    bio: "Blessing is a passionate AI researcher whose work falls at the intersection of Computer Vision and NLP. His current focus is on Multi-modal models for computer vision and their applications in Transportation. Before that, he completed his BSc in Civil Engineering from KNUST.",
    interests: [
      "Computer Vision",
      "Multimodal AI",
      "Applications in Transport Systems",
    ],
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/blessing-agyei-kyem-b258121a8",
        icon: "Linkedin",
      },
      {
        label: "Website",
        url: "https://blessing-agyei-kyem.github.io/",
        icon: "ExternalLink",
      },
    ],
  },
  {
    name: "Joshua Asamoah",
    degree: "PhD Student",
    image: "/joshua.png",
    bio: "Joshua earned his bachelor's degree in Civil Engineering from KNUST. During this time, he interned with Ghana Highway Authority where he developed skills and curiosity of the potential benefit of integrating IoT in Ghana's transportation system. He joined the lab in 2023 to pursue a PhD in Civil Engineering with focus on the application of IoT in transportation systems.",
    interests: ["Transport Systems", "IoT", "Multimodal AI"],
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/joshua-kofi-asamoah-1ba4091a2/",
        icon: "Linkedin",
      },
    ],
  },
  {
    name: "Eugene Denteh",
    degree: "Incoming PhD Student",
    image: "/eugene.jpg",
    bio: "Eugene is an incoming PhD student with focus on smart cities. Aside that, he is passionate about developing smart transportation systems, energy-efficient buildings, and other infrastructure that can be managed and optimized using data and analytics. He completed his BSc in Civil Engineering from KNUST.",
    interests: [
      "Smart Cities",
      "Smart Transportation Systems",
      "Energy-efficient Buildings",
      "Data Analytics",
    ],
    links: [
      {
        label: "Email",
        url: "mailto:edenteh5@gmail.com",
        icon: "Mail",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/eugene-denteh-50aa0217a/",
        icon: "Linkedin",
      },
    ],
  },
];

export default function Team() {
  return (
    <>
      <HeroBanner
        id="team"
        title="Research Team"
        subtitle="My Students and Collaborators"
        description="I work with talented graduate students and collaborate with researchers worldwide to advance the field of transportation engineering through innovative data science and computer vision applications."
        pageType="team"
        isSmall={true}
      />

      {/* Professor Section */}
      <motion.section
        className="py-20 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto max-w-7xl">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Principal Investigator
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Leading innovative research in transportation data science and
              computer vision
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="border-none shadow-xl bg-white overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-5 gap-0">
                  {/* Image Section */}
                  <div className="lg:col-span-2 bg-gradient-to-br from-slate-100 to-slate-200 p-8 flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-300 to-slate-400 rounded-2xl transform rotate-3"></div>
                      <Image
                        src={professor.image || "/placeholder.svg"}
                        alt={professor.name}
                        width={300}
                        height={360}
                        className="relative rounded-2xl shadow-xl object-cover"
                      />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="lg:col-span-3 p-8 lg:p-12">
                    <div className="mb-6">
                      <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                        {professor.name}
                      </h3>
                      <p className="text-lg font-semibold text-slate-700 mb-2">
                        {professor.title}
                      </p>
                      <p className="text-slate-600 mb-4">
                        {professor.subtitle}
                      </p>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-start gap-3">
                        <GraduationCap className="h-5 w-5 text-slate-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-slate-900">
                            {professor.department}
                          </p>
                          <p className="text-slate-600">
                            {professor.university}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-slate-500 flex-shrink-0" />
                        <p className="text-slate-600">{professor.address}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-slate-500 flex-shrink-0" />
                        <a
                          href={`mailto:${professor.email}`}
                          className="text-slate-600 hover:text-slate-900"
                        >
                          {professor.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-slate-500 flex-shrink-0" />
                        <p className="text-slate-600">{professor.phone}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <p className="text-slate-600 leading-relaxed">
                        {professor.bio}
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-900 mb-3">
                        Research Expertise
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {professor.expertise.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      {professor.links.map((link) => (
                        <Button
                          key={link.label}
                          variant="outline"
                          size="sm"
                          asChild
                        >
                          <Link
                            href={link.url}
                            className="flex items-center gap-2"
                          >
                            <link.icon className="h-4 w-4" />
                            {link.label}
                          </Link>
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Current Students Section */}
      <motion.section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto max-w-7xl">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Current Graduate Students
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Talented researchers pursuing advanced degrees and contributing to
              cutting-edge research
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
          >
            {currentStudents.map((student) => (
              <Card
                className="overflow-hidden shadow-md rounded-2xl"
                key={student.name}
              >
                <Image
                  src={student.image || "/placeholder.svg"}
                  alt={student.name}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">
                    {student.name}
                  </h3>
                  <div className="text-indigo-700 font-semibold mb-2">
                    {student.degree}
                  </div>
                  <div className="mb-2">
                    <span className="font-semibold">Interests:</span>{" "}
                    <span className="text-slate-700">
                      {student.interests.join(", ")}
                    </span>
                  </div>
                  <div className="flex gap-2 mt-4">
                    {student.links.map((link) =>
                      link.label.toLowerCase() === "email" ? (
                        <a
                          key={link.label}
                          href={link.url}
                          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Email
                        </a>
                      ) : null
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
