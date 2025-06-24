"use client";
import React from "react";
import HeroBanner from "@/components/hero-banner";
import { motion } from "framer-motion";
import { activities } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

const Activities = () => {
  return (
    <>
      <HeroBanner
        id="activities"
        title="Activities"
        subtitle="Celebrating Achievements and Milestones"
        description="Explore our team's latest achievements, awards, presentations, and recognitions in transportation research, data science, and innovation. Stay updated on the impactful moments and highlights that shape our journey."
        showCtaBtn={false}
        pageType="activities"
        isSmall={true}
      />
      <motion.section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {activities.map((item) => (
              <motion.div
                key={item.title + item.date}
                whileHover={{
                  y: -6,
                  boxShadow: "0 8px 32px 0 rgba(16, 185, 129, 0.10)",
                }}
              >
                <div className="bg-white rounded-2xl shadow-lg border border-teal-100 overflow-hidden flex flex-col h-full">
                  <div className="relative w-full h-48 md:h-56">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <Link href={item.link} target="_blank">
                      <h3 className="text-lg font-bold text-teal-800 hover:text-orange-400 mb-2 cursor-pointer">
                        {item.title}
                      </h3>
                    </Link>
                    <div className="w-10 border-t-2 border-dotted border-orange-400 mb-2"></div>
                    <p className="text-teal-700 text-base mb-4 flex-1">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-2 mt-auto">
                      <span className="inline-flex items-center text-xs text-orange-500 font-semibold gap-1">
                        {new Date(item.date).toLocaleDateString(undefined, {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="flex justify-center mt-16">
            <Link
              href="https://www.ndsu-smartlab.com/blog.html"
              target="_blank"
              className="rounded-full bg-orange-400 hover:bg-orange-500 text-white font-bold py-4 px-8 transition-all duration-300 text-base"
            >
              Read More
            </Link>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Activities;
