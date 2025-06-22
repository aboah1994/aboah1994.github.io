"use client";
import HeroBanner from "@/components/hero-banner";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { currentStudents } from "@/lib/constants";

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
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-teal-800 mb-8">
              Professor
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Profile Image */}
              <motion.div
                className="lg:col-span-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <Image
                    src="/aboah.png"
                    alt="Prof. Aboah Armstrong"
                    width={260}
                    height={350}
                    className="object-cover w-full rounded-xl bg-gray-50"
                  />
                </div>
              </motion.div>

              {/* Profile Information */}
              <motion.div
                className="lg:col-span-8 space-y-6 border border-teal-100 bg-white rounded-xl p-8"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-teal-800 mb-2">
                    Aboah Armstrong, Ph.D.
                  </h3>
                  <p className="text-base md:text-lg text-orange-400 font-semibold mb-2">
                    Professor, Transportation Engineering and Smart Systems
                  </p>
                  <div className="space-y-3 text-gray-700">
                    <p className="text-sm md:text-base leading-relaxed">
                      Department of Civil, Construction and Environmental
                      Engineering, College of Engineering, North Dakota State
                      University
                    </p>
                    <div className="flex items-start space-x-3 text-sm md:text-base">
                      <MapPin className="w-5 h-5 text-teal-800 mt-1 flex-shrink-0" />
                      <p>CIE 201K, 1410 North 14th Avenue, Fargo, ND 58102</p>
                    </div>
                    <div className="flex items-center space-x-3 text-sm md:text-base">
                      <Mail className="w-5 h-5 text-orange-400 flex-shrink-0" />
                      <Link
                        href="mailto:armstrong.aboah@ndsu.edu"
                        className="text-teal-800 hover:text-orange-400 font-semibold transition-colors"
                      >
                        armstrong.aboah@ndsu.edu
                      </Link>
                    </div>
                    <div className="flex items-center space-x-3 text-sm md:text-base">
                      <Phone className="w-5 h-5 text-orange-400 flex-shrink-0" />
                      <Link
                        href="tel:+17012317564"
                        className="text-teal-800 hover:text-orange-400 font-semibold transition-colors"
                      >
                        (701) 231-7564
                      </Link>
                    </div>
                  </div>
                </div>
                {/* Academic Links */}
                <div className="pt-6 border-t border-teal-100">
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="https://www.linkedin.com/in/armstrong-aboah-ph-d-5ab809142/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-semibold bg-teal-800 text-white hover:bg-teal-900 transition-colors"
                    >
                      LinkedIn
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </Link>
                    <Link
                      href="https://scholar.google.com/citations?user=Ev1PAAwAAAAJ&hl=en&oi=ao"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-semibold bg-orange-400 text-white hover:bg-orange-500 transition-colors"
                    >
                      Google Scholar
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </Link>
                    <Link
                      href="https://www.researchgate.net/profile/Armstrong-Aboah"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-semibold bg-teal-100 text-teal-800 hover:bg-teal-200 transition-colors"
                    >
                      Research Gate
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Students Section */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-teal-800 mb-8">
              Current Students
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {currentStudents.map((student, idx) => (
                <motion.div
                  key={student.name}
                  className="flex flex-col border border-teal-100 bg-white rounded-xl p-6 gap-4 transition-transform hover:-translate-y-1"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={student.image}
                      alt={student.name}
                      width={80}
                      height={80}
                      className="rounded-full object-cover border-2 border-orange-400 bg-gray-50"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-teal-800 mb-1">
                        {student.name}
                      </h3>
                      <p className="text-sm text-orange-400 font-semibold mb-1">
                        {student.degree}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-2 mt-2">
                    {student.interests.map((interest) => (
                      <span
                        key={interest}
                        className="px-2 py-0.5 bg-teal-100 text-teal-800 rounded-full text-xs font-semibold"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-2 flex-wrap">
                    {student.links.map((link) => {
                      const Icon =
                        link.icon === "Linkedin"
                          ? Linkedin
                          : link.icon === "ExternalLink"
                          ? ExternalLink
                          : link.icon === "Mail"
                          ? Mail
                          : null;
                      return (
                        <Link
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-semibold transition-colors
                            ${
                              link.icon === "Linkedin"
                                ? "bg-teal-800 text-white hover:bg-teal-900"
                                : link.icon === "ExternalLink"
                                ? "bg-orange-400 text-white hover:bg-orange-500"
                                : link.icon === "Mail"
                                ? "bg-teal-100 text-teal-800 hover:bg-teal-200"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }
                          `}
                        >
                          {Icon && <Icon className="w-4 h-4" />}
                          <span>{link.label}</span>
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
