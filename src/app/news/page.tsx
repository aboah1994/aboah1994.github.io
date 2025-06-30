"use client";
import React from "react";
import HeroBanner from "@/components/hero-banner";
import { news } from "@/lib/constants";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

// Dazzling stars animation component
const DazzlingStars = () => (
  <span className="inline-flex items-center ml-2 relative">
    {/* Star 1: Large, slow rotate and scale */}
    <motion.span
      className="relative z-10"
      initial={{ rotate: 0, scale: 1, y: 0 }}
      animate={{ rotate: [0, 20, -20, 0], scale: [1, 1.3, 1], y: [0, -4, 0] }}
      transition={{
        duration: 1.8,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    >
      <Star
        className="text-orange-400 drop-shadow"
        fill="#fb923c"
        strokeWidth={1.5}
        size={18}
      />
    </motion.span>
    {/* Star 2: Medium, twinkle and bounce, offset left */}
    <motion.span
      className="absolute left-3 top-2 z-0"
      initial={{ scale: 0.8, opacity: 0.7, rotate: 0, y: 0 }}
      animate={{
        scale: [0.8, 1.1, 0.8],
        opacity: [0.7, 1, 0.7],
        rotate: [0, -30, 0],
        y: [0, 3, 0],
      }}
      transition={{
        duration: 1.2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
        delay: 0.5,
      }}
    >
      <Star
        className="text-orange-300"
        fill="#fdba74"
        strokeWidth={1.2}
        size={16}
      />
    </motion.span>
    {/* Star 3: Small, fast twinkle, offset right */}
    <motion.span
      className="absolute left-7 top-0 z-0"
      initial={{ scale: 0.7, opacity: 0.6, rotate: 0, y: 0 }}
      animate={{
        scale: [0.7, 1.2, 0.7],
        opacity: [0.6, 1, 0.6],
        rotate: [0, 40, 0],
        y: [0, -2, 0],
      }}
      transition={{
        duration: 0.9,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
        delay: 1.0,
      }}
    >
      <Star
        className="text-orange-200"
        fill="#ffedd5"
        strokeWidth={1}
        size={11}
      />
    </motion.span>
  </span>
);

const FeaturedNews = ({ item }: { item: (typeof news)[0] }) => (
  <motion.div
    className="flex flex-col gap-2 border-l-8 border-orange-400 bg-orange-50 rounded-lg p-6 mb-10"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
  >
    <div className="flex items-center gap-3 mb-2">
      <span className="inline-block bg-teal-800 text-white text-xs font-semibold rounded px-2 py-1">
        {new Date(item.date).toLocaleDateString(undefined, {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </span>
      <span className="uppercase text-xs text-orange-400 font-bold tracking-wider">
        Featured
      </span>
    </div>
    <h2 className="text-2xl font-bold text-teal-800 mb-2 leading-tight flex items-center">
      {item.link ? (
        <a href={item.link} target="_blank" rel="noopener noreferrer">
          {item.title}
        </a>
      ) : (
        item.title
      )}
      {isPaperAcceptance(item) && <DazzlingStars />}
    </h2>
    <div className="text-gray-700 text-base mb-2">{item.description}</div>
    {item.image && (
      <img
        src={item.image}
        alt={item.title}
        className="w-full max-w-md rounded-lg mt-2 border border-teal-100 bg-white"
        style={{ objectFit: "cover" }}
      />
    )}
  </motion.div>
);

const isPaperAcceptance = (item: (typeof news)[0]) => {
  const text = `${item.title} ${item.description}`.toLowerCase();
  return (
    text.includes("paper accepted") ||
    text.includes("accepted for publication") ||
    text.includes("got accepted") ||
    text.includes("accepted to") ||
    text.includes("accepted for presentation")
  );
};

const NewsCard = ({ item }: { item: (typeof news)[0] }) => (
  <motion.div
    className="flex flex-row py-4 border-b border-teal-100 last:border-b-0"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
  >
    <div className="flex flex-col items-center mr-4 min-w-[70px]">
      <span
        className={`bg-teal-100 text-teal-800 text-xs font-semibold rounded px-2 py-0.5 mb-1 whitespace-nowrap`}
      >
        {new Date(item.date).toLocaleDateString(undefined, {
          year: "2-digit",
          month: "short",
          day: "numeric",
        })}
      </span>
    </div>
    <div className="flex-1 min-w-0">
      <div className="text-lg font-semibold text-teal-800 mb-1 flex items-center">
        {item.link ? (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {item.title}
          </a>
        ) : (
          item.title
        )}
        {isPaperAcceptance(item) && <DazzlingStars />}
      </div>
      <div className="text-gray-700 mb-1 text-base">{item.description}</div>
      {item.image && (
        <img
          src={item.image}
          alt={item.title}
          className="w-1/2 h-60 object-cover rounded-lg mt-2 border border-teal-100 bg-white"
        />
      )}
    </div>
  </motion.div>
);

const News = () => {
  const [featured, ...rest] = news;
  // Group news by year
  const newsByYear = rest.reduce((acc, item) => {
    const year = new Date(item.date).getFullYear();
    if (!acc[year]) acc[year] = [];
    acc[year].push(item);
    return acc;
  }, {} as Record<string, typeof news>);
  const years = Object.keys(newsByYear).sort((a, b) => Number(b) - Number(a));
  const defaultOpen = years[0];
  return (
    <>
      <HeroBanner
        id="news"
        title="News & Updates"
        subtitle="My Latest Achievements and Milestones"
        description="Stay updated with my latest developments, including new publications, grants, awards, and research achievements in transportation engineering and data science."
        pageType="news"
        isSmall={true}
      />
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <FeaturedNews item={featured} />
          <Accordion type="multiple" defaultValue={[defaultOpen]}>
            {years.map((year) => (
              <AccordionItem key={year} value={year}>
                <AccordionTrigger className="text-xl md:text-2xl font-bold text-teal-800 mb-2 pb-2 pr-8 relative border-0">
                  {year}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="divide-y divide-gray-100 bg-white rounded-lg p-4">
                    {newsByYear[year].map((item) => (
                      <NewsCard key={item.id} item={item} />
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default News;
