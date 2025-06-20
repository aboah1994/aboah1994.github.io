"use client";
import React from "react";
import HeroBanner from "@/components/hero-banner";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { publications } from "@/lib/constants";

// Publication type based on constants.ts
interface Publication {
  id: number;
  title: string;
  authors: string;
  subtext: string;
  image?: string;
  links?: { label: string; url: string }[];
  year?: number;
}

type GroupedYear = { year: string; pubs: Publication[] };

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

// Group publications by year (descending)
const groupByYear = (pubs: Publication[]): GroupedYear[] => {
  const grouped: { [year: string]: Publication[] } = {};
  pubs.forEach((pub: Publication) => {
    const year = pub.year ? String(pub.year) : "Other";
    if (!grouped[year]) grouped[year] = [];
    grouped[year].push(pub);
  });
  return Object.entries(grouped)
    .sort((a, b) => Number(b[0]) - Number(a[0])) // Descending by year
    .map(([year, pubs]) => ({ year, pubs }));
};

const getBadgeColor = (subtext: string): string => {
  if (/arxiv/i.test(subtext)) return "bg-orange-100 text-orange-500";
  if (/cvpr|wacv|neurips|conference|trb|workshop/i.test(subtext))
    return "bg-teal-100 text-teal-800";
  if (/journal|ieee|transactions|systems|big data analytics/i.test(subtext))
    return "bg-blue-100 text-blue-700";
  return "bg-gray-100 text-gray-700";
};

const highlightAuthor = (author: string): React.ReactNode => {
  let out: React.ReactNode = author;
  if (author.includes("*"))
    out = <span className="text-orange-400 font-bold">{author}</span>;
  else if (author.includes("†"))
    out = <span className="text-teal-800 font-bold">{author}</span>;
  else if (author.includes("Armstrong Aboah"))
    out = <span className="text-teal-800 font-bold">{author}</span>;
  return out;
};

const PublicationCard = ({ pub }: { pub: Publication }) => (
  <motion.div
    className="flex gap-6 items-start py-6 border-b border-gray-200 last:border-b-0"
    variants={fadeInUp}
  >
    <div className="flex-shrink-0 w-40 h-28 md:w-44 md:h-32 rounded-lg overflow-hidden bg-gray-100">
      <Image
        src={pub.image || "/placeholder.svg"}
        alt={pub.title}
        width={176}
        height={128}
        className="object-cover w-full h-full"
      />
    </div>
    <div className="flex-1">
      <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-tight mb-1">
        {pub.title}
      </h3>
      <div className="text-sm md:text-base text-gray-700 mb-1 flex flex-wrap gap-1">
        {pub.authors
          .split(/, ?/)
          .map((author: string, idx: number, arr: string[]) => (
            <span key={author}>
              {highlightAuthor(author)}
              {idx < arr.length - 1 ? <span>, </span> : <span>.</span>}
            </span>
          ))}
      </div>
      <div className="flex items-center gap-2 mb-2">
        <span
          className={`px-2 py-0.5 rounded-full text-xs font-semibold ${getBadgeColor(
            pub.subtext
          )}`}
        >
          {pub.subtext.replace(/\(.*\)/, "").split(/\[|\]/)[0]}
        </span>
        {pub.subtext.match(/\d{4}/) && (
          <span className="text-xs text-orange-400 font-bold">
            {pub.subtext.match(/\d{4}/)![0]}
          </span>
        )}
      </div>
      {pub.links && pub.links.length > 0 && (
        <div className="flex gap-3 flex-wrap mt-1">
          {pub.links.map((link: { label: string; url: string }) => (
            <Link
              key={link.label}
              href={link.url}
              className={`text-xs md:text-sm font-semibold px-2 py-1 rounded transition-colors
                ${
                  link.label.toLowerCase().includes("arxiv")
                    ? "bg-orange-400 text-white hover:bg-orange-500"
                    : link.label.toLowerCase().includes("code")
                    ? "bg-teal-800 text-white hover:bg-teal-900"
                    : link.label.toLowerCase().includes("paper")
                    ? "bg-teal-100 text-teal-800 hover:bg-teal-200"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }
              `}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  </motion.div>
);

export default function Publications() {
  const grouped = groupByYear(publications);
  return (
    <>
      <HeroBanner
        id="publications"
        title="Research Publications"
        subtitle="My Academic Contributions"
        description="A comprehensive collection of my peer-reviewed research publications in computer vision, machine learning, and transportation engineering, showcasing my contributions to advancing these fields."
        pageType="publications"
        isSmall={true}
      />
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          {/* Legend */}
          <div className="mb-8 flex flex-wrap items-center gap-6 text-sm md:text-base">
            <span className="inline-flex items-center gap-1">
              <span className="text-orange-400 font-bold">*</span>{" "}
              <span className="text-gray-700">Student Advised</span>
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="text-teal-800 font-bold">†</span>{" "}
              <span className="text-gray-700">Corresponding Author</span>
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="bg-teal-100 text-teal-800 px-2 py-0.5 rounded-full text-xs font-semibold">
                Conference
              </span>
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs font-semibold">
                Journal
              </span>
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="bg-orange-100 text-orange-500 px-2 py-0.5 rounded-full text-xs font-semibold">
                arXiv
              </span>
            </span>
          </div>
          {grouped.map(({ year, pubs }) => (
            <motion.section
              key={year}
              className="mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              <motion.h2
                className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 border-b border-teal-100 pb-2"
                variants={fadeInUp}
              >
                {year}
              </motion.h2>
              <div className="bg-white rounded-lg">
                {pubs.map((pub: Publication) => (
                  <PublicationCard key={pub.id} pub={pub} />
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </section>
    </>
  );
}
