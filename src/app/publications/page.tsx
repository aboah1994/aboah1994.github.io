"use client";
import HeroBanner from "@/components/hero-banner";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { publications } from "@/lib/constants";

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

const getSection = (type: "journal" | "conference" | "underReview") => {
  if (type === "journal") {
    return publications.filter((pub) =>
      /journal|ieee access|advances in data science|transactions|systems|big data analytics/i.test(
        pub.subtext
      )
    );
  }
  if (type === "conference") {
    return publications.filter((pub) =>
      /conference|cvpr|trb|wacv|neurips|workshop|annual meeting/i.test(
        pub.subtext
      )
    );
  }
  if (type === "underReview") {
    return publications.filter((pub) =>
      /under review|submitted|review/i.test(pub.subtext)
    );
  }
  return [];
};

const PublicationCard = ({ pub }: { pub: (typeof publications)[0] }) => (
  <motion.div
    className="flex gap-6 items-start py-6 border-b border-slate-100 last:border-b-0"
    variants={fadeInUp}
  >
    <div className="flex-shrink-0">
      <Image
        src={pub.image || "/placeholder.svg"}
        alt={pub.title}
        width={180}
        height={120}
        className="rounded-md object-cover"
      />
    </div>
    <div className="flex-1">
      <h3 className="text-xl font-bold text-slate-900 leading-tight mb-2">
        {pub.title}
      </h3>
      <div className="text-slate-700 mb-2">
        {pub.authors.split(/, ?/).map((author, idx, arr) => (
          <span key={author}>
            {author.includes("Armstrong Aboah") ? (
              <span className="font-bold text-slate-900">{author}</span>
            ) : (
              <span>{author}</span>
            )}
            {idx < arr.length - 1 ? ", " : "."}
          </span>
        ))}
      </div>
      <div className="italic text-slate-500 mb-3">{pub.subtext}</div>
      {pub.links && pub.links.length > 0 && (
        <div className="flex gap-3 flex-wrap">
          {pub.links.map((link) => (
            <Link
              key={link.label}
              href={link.url}
              className="text-slate-700 hover:text-slate-900 text-sm font-medium transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              [{link.label}]
            </Link>
          ))}
        </div>
      )}
    </div>
  </motion.div>
);

export default function Publications() {
  const journalPapers = getSection("journal");
  const conferencePapers = getSection("conference");
  const underReviewPapers = getSection("underReview");

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

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          {/* Journal Papers */}
          <motion.section
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.h2
              className="text-3xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-200"
              variants={fadeInUp}
            >
              Journal Papers
            </motion.h2>
            <div className="bg-white">
              {journalPapers.length === 0 ? (
                <p className="text-slate-500 italic">
                  No journal papers at this time.
                </p>
              ) : (
                journalPapers.map((pub) => (
                  <PublicationCard key={pub.id} pub={pub} />
                ))
              )}
            </div>
          </motion.section>

          {/* Conference Papers */}
          <motion.section
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.h2
              className="text-3xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-200"
              variants={fadeInUp}
            >
              Conference Papers
            </motion.h2>
            <div className="bg-white">
              {conferencePapers.length === 0 ? (
                <p className="text-slate-500 italic">
                  No conference papers at this time.
                </p>
              ) : (
                conferencePapers.map((pub) => (
                  <PublicationCard key={pub.id} pub={pub} />
                ))
              )}
            </div>
          </motion.section>

          {/* Papers Under Review */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.h2
              className="text-3xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-200"
              variants={fadeInUp}
            >
              Papers Under Review
            </motion.h2>
            <div className="bg-white">
              {underReviewPapers.length === 0 ? (
                <p className="text-slate-500 italic">
                  No papers under review at this time.
                </p>
              ) : (
                underReviewPapers.map((pub) => (
                  <PublicationCard key={pub.id} pub={pub} />
                ))
              )}
            </div>
          </motion.section>
        </div>
      </section>
    </>
  );
}
