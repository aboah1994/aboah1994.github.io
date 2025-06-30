"use client";
import HeroBanner from "@/components/hero-banner";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import {
  phdStudents,
  mastersStudents,
  undergraduateStudents,
  alumniStudents,
  interns,
} from "@/lib/constants";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

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
              Principal Investigator (PI)
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
                    Assistant Professor, Transportation Engineering and Smart
                    Systems
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
            {/* PhD Students */}
            <h3 className="text-lg md:text-xl font-semibold text-orange-400 mb-4">
              PhD Students
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {phdStudents.map((student, idx) => (
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
                      className="rounded-full object-contain border-2 border-orange-400 bg-gray-50"
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
                    {student.interests.map((interest: string) => (
                      <span
                        key={interest}
                        className="px-2 py-0.5 bg-teal-100 text-teal-800 rounded-full text-xs font-semibold"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-2 flex-wrap">
                    {student.links.map(
                      (link: { label: string; url: string; icon: string }) => {
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
                      }
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            {/* Masters Students */}
            <h3 className="text-lg md:text-xl font-semibold text-orange-400 mb-4">
              Masters Students
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {mastersStudents.map((student, idx) => (
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
                      className="rounded-full object-contain border-2 border-orange-400 bg-gray-50"
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
                    {student.interests.map((interest: string) => (
                      <span
                        key={interest}
                        className="px-2 py-0.5 bg-teal-100 text-teal-800 rounded-full text-xs font-semibold"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-2 flex-wrap">
                    {student.links.map(
                      (link: { label: string; url: string; icon: string }) => {
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
                      }
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            {/* Undergraduate Students */}
            <h3 className="text-lg md:text-xl font-semibold text-orange-400 mb-4">
              Undergraduate Students
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {undergraduateStudents.map((student, idx) => (
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
                      className="rounded-full object-contain border-2 border-orange-400 bg-gray-50"
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
                    {student.interests.map((interest: string) => (
                      <span
                        key={interest}
                        className="px-2 py-0.5 bg-teal-100 text-teal-800 rounded-full text-xs font-semibold"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                  {student.links && student.links.length > 0 && (
                    <div className="flex gap-4 mt-2 flex-wrap">
                      {student.links.map(
                        (link: {
                          label: string;
                          url: string;
                          icon: string;
                        }) => {
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
                        }
                      )}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      {/* Alumni Section */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-teal-800 mb-8">
              Alumni
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {alumniStudents.map((alumni, idx) => (
                <motion.div
                  key={alumni.name}
                  className="flex flex-col border border-gray-200 bg-gray-50 rounded-xl p-6 gap-4 shadow-sm"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div>
                    <h3 className="text-lg font-bold text-teal-800 mb-1">
                      {alumni.name}
                    </h3>
                    <p className="text-sm text-orange-400 font-semibold mb-1">
                      {alumni.degree}
                    </p>
                    {alumni.coAdvised && (
                      <p className="text-xs text-gray-600 mb-1">
                        <span className="font-semibold">Co-Advised by:</span>{" "}
                        {alumni.coAdvised}
                      </p>
                    )}
                    {alumni.dissertation && (
                      <p className="text-xs text-gray-600 mb-1">
                        <span className="font-semibold">Dissertation:</span>{" "}
                        {alumni.dissertation}
                      </p>
                    )}
                    {alumni.nowAt && (
                      <p className="text-xs text-gray-600">
                        <span className="font-semibold">Now at:</span>{" "}
                        {alumni.nowAt}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interns Section */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-teal-800 mb-8">
              Interns
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {interns.map((intern, idx) => (
                <motion.div
                  key={intern.name}
                  className="flex flex-col border border-teal-100 bg-white rounded-xl p-6 gap-2 transition-transform hover:-translate-y-1"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-bold text-teal-800 mb-1">
                    {intern.name}
                  </h3>
                  <p className="text-sm text-orange-400 font-semibold">
                    Intern, {intern.year}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Information for Prospective Students */}
      <section className="py-20 px-4 bg-teal-800 mb-10">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-orange-400 text-center mb-2">
            Information for Prospective Students
          </h2>
          <p className="text-center text-gray-200 mb-8">
            Interested in joining our lab?
          </p>
          <Accordion
            type="single"
            collapsible
            className="rounded-sm bg-white/5 backdrop-blur-lg"
          >
            <AccordionItem value="phd" className="border-b-gray-500">
              <AccordionTrigger className="text-lg md:text-xl font-semibold text-white px-6 py-4">
                PhD Students
              </AccordionTrigger>
              <AccordionContent className="bg-white/10 text-gray-100 px-6 py-6  border-l-4 border-orange-400">
                <p className="mb-4">
                  We welcome applications from motivated individuals interested
                  in pursuing a PhD in our lab. Most of our students have
                  backgrounds in Engineering or Computer Science. Before
                  reaching out, please ensure you are fully prepared by
                  following the guidelines below:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>
                    Review our current research areas and projects to ensure
                    alignment with your interests. In your email, include a
                    brief description of yourself, your academic background and
                    projects you&apos;re excited to work on.
                  </li>
                  <li>
                    Attach your CV, which details your research background,
                    projects you&apos;ve worked on, and any relevant
                    publications and conferences. Ensure that all associated
                    links are included in your CV. Our lab conducts numerous
                    experiments and therefore expects potential candidates to
                    have programming experience.
                  </li>
                  <li>
                    In the subject line of your email, please use the format:{" "}
                    <span className="italic">
                      &quot;Prospective PhD Candidate - verified&quot;
                    </span>
                    . This indicates that you have read this section before
                    contacting me. Emails without the above subject format may
                    automatically be filtered out.
                  </li>
                  <li>
                    Please note that I receive numerous emails every month, and
                    failure to respond to your email does not mean it
                    hasn&apos;t been read. Please send your email to:{" "}
                    <span className="font-semibold italic">
                      info@ndsu-smartlab.com
                    </span>
                    . For detailed application process, visit the{" "}
                    <span className="italic">
                      Civil, Construction and Environmental Engineering website
                    </span>
                    .
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="masters" className="border-b-gray-500">
              <AccordionTrigger className="text-lg md:text-xl font-semibold text-white px-6 py-4">
                Master&apos;s and Undergraduate Students
              </AccordionTrigger>
              <AccordionContent className="bg-white/10 text-gray-100 px-6 py-6  border-l-4 border-orange-400">
                <p className="mb-2">
                  For Master&apos;s and Undergraduate students at NDSU
                  interested in working with me, send me an email with your CV
                  and topics you are interested in working on. Use the subject
                  line:{" "}
                  <span className="italic">
                    &quot;NDSU Student Seeking Collaboration&quot;
                  </span>
                  . Please send your email to:{" "}
                  <span className="font-semibold italic">
                    info@ndsu-smartlab.com
                  </span>
                </p>
                <p>
                  Students not enrolled at NDSU should Apply to NDSU and send me
                  an email once you are admitted.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="internship">
              <AccordionTrigger className="text-lg md:text-xl font-semibold text-white px-6 py-4">
                Internship Opportunities
              </AccordionTrigger>
              <AccordionContent className="bg-white/10 text-gray-100 px-6 py-6 rounded-b-sm border-l-4 border-orange-400">
                <p>
                  We currently do not have internship opportunities for
                  available. Openings will be advertised once available.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  );
}
