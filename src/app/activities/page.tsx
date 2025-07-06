"use client";
import React from "react";
import HeroBanner from "@/components/hero-banner";
import Image from "next/image";
import Link from "next/link";
import Masonry from "react-masonry-css";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { activities } from "@/lib/constants";

type Event = {
  name: string;
  link: string;
  gallery: string[];
};

type ActivitiesByYear = {
  [year: string]: {
    "Social Events": Event[];
    Conferences: Event[];
  };
};

const activitiesTyped = activities as ActivitiesByYear;

const Activities = () => {
  const years = Object.keys(activitiesTyped).sort(
    (a, b) => Number(b) - Number(a)
  );
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };
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
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <Accordion type="multiple" defaultValue={[years[0]]}>
            {years.map((year) => {
              const yearData = activitiesTyped[year];
              return (
                <AccordionItem key={year} value={year}>
                  <AccordionTrigger className="text-xl md:text-2xl font-bold text-teal-800 mb-2 pb-2 pr-8 relative border-0">
                    {year}
                  </AccordionTrigger>
                  <AccordionContent>
                    {/* Conferences */}
                    <h3 className="text-lg md:text-xl font-semibold text-orange-400 mt-6 mb-2">
                      Conferences
                    </h3>
                    {yearData.Conferences.length === 0 ? (
                      <div className="text-gray-500 mb-6">
                        No conferences yet.
                      </div>
                    ) : (
                      yearData.Conferences.map((event: Event, idx: number) => (
                        <div key={event.name + idx} className="mb-8">
                          <Link
                            href={event.link || "#"}
                            target="_blank"
                            className="text-lg font-bold text-teal-800 hover:text-orange-400 block mb-2"
                          >
                            {event.name}
                          </Link>
                          {event.gallery && event.gallery.length > 0 && (
                            <Masonry
                              breakpointCols={breakpointColumnsObj}
                              className="flex w-auto gap-4"
                              columnClassName="masonry-column"
                            >
                              {event.gallery.map((img: string, i: number) => (
                                <div
                                  key={img + i}
                                  className="mb-4 rounded-lg overflow-hidden"
                                >
                                  <Image
                                    src={img}
                                    alt={event.name + " image " + (i + 1)}
                                    width={400}
                                    height={300}
                                    className="object-cover w-full h-auto rounded-lg"
                                  />
                                </div>
                              ))}
                            </Masonry>
                          )}
                        </div>
                      ))
                    )}

                    {/* Social Events */}
                    <h3 className="text-lg md:text-xl font-semibold text-orange-400 mt-2 mb-2">
                      Social Events
                    </h3>
                    {yearData["Social Events"].length === 0 ? (
                      <div className="text-gray-500 mb-6">
                        No social events yet.
                      </div>
                    ) : (
                      yearData["Social Events"].map(
                        (event: Event, idx: number) => (
                          <div key={event.name + idx} className="mb-8">
                            <Link
                              href={event.link || "#"}
                              target="_blank"
                              className="text-lg font-bold text-teal-800 hover:text-orange-400 block mb-2"
                            >
                              {event.name}
                            </Link>
                            {event.gallery && event.gallery.length > 0 && (
                              <Masonry
                                breakpointCols={breakpointColumnsObj}
                                className="flex w-auto gap-4"
                                columnClassName="masonry-column"
                              >
                                {event.gallery.map((img: string, i: number) => (
                                  <div
                                    key={img + i}
                                    className="mb-4 rounded-lg overflow-hidden bg-gray-50"
                                  >
                                    <Image
                                      src={img}
                                      alt={event.name + " image " + (i + 1)}
                                      width={400}
                                      height={300}
                                      className="object-cover w-full h-auto rounded-lg bg-gray-50"
                                    />
                                  </div>
                                ))}
                              </Masonry>
                            )}
                          </div>
                        )
                      )
                    )}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
          <div className="flex justify-center mt-16">
            <Link
              href="https://www.aboah1994.github.io/blog.html"
              target="_blank"
              className="rounded-full bg-orange-400 hover:bg-orange-500 text-white font-bold py-4 px-8 transition-all duration-300 text-base"
            >
              Read More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Activities;
