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
    <h2 className="text-2xl font-bold text-teal-800 mb-2 leading-tight">
      {item.title}
    </h2>
    <div className="text-gray-700 text-base">{item.description}</div>
  </motion.div>
);

const NewsCard = ({ item }: { item: (typeof news)[0] }) => (
  <motion.div
    className="flex gap-4 items-start py-4 border-b border-teal-100 last:border-b-0"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
  >
    <div className="flex flex-col items-center mr-2">
      <span className="bg-teal-100 text-teal-800 text-xs font-semibold rounded px-2 py-0.5 mb-1">
        {new Date(item.date).toLocaleDateString(undefined, {
          year: "2-digit",
          month: "short",
          day: "numeric",
        })}
      </span>
    </div>
    <div>
      <div className="text-lg font-semibold text-teal-800 mb-1">
        {item.title}
      </div>
      <div className="text-gray-700 mb-1 text-base">{item.description}</div>
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
