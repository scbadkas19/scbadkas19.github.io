'use client';

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { cn } from "../../utils/cn";
import { CardSpotlight } from "../ui/card-spotlight";
import { FaGraduationCap } from "react-icons/fa6";

interface TimelineItem {
  title: string;
  organization: string;
  location: string;
  date: string;
  type?: string;
  description?: string;
  skills?: string[];
  degree?: string;
  gpa?: string;
}

const educationIcons = [FaGraduationCap];

const education: TimelineItem[] = [
  {
    title: "Master of Science in Business Analytics",
    organization: "University of Maryland",
    location: "College Park, MD",
    date: "2023 - 2025",
  },
  {
    title: "Bachelor of Technology in Data Science",
    organization: "NMIMS University",
    location: "Mumbai, IN",
    date: "2017 - 2021",
  },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "center start"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Education
          </h2>
          <p className="text-neutral-600 dark:text-white/80 max-w-2xl mx-auto mb-8">
            My academic background
          </p>
        </motion.div>

        <div ref={ref} className="relative">
          {/* center line (behind date) */}
          <div className="absolute left-9 md:left-1/2 h-full w-[2px] bg-neutral-200 dark:bg-neutral-800 z-10" />
          <motion.div
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute left-9 md:left-1/2 h-full w-[2px] z-10"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-purple-600 via-purple-500 to-transparent [mask-image:linear-gradient(to_bottom,white_70%,transparent_100%)]" />
            <div className="absolute inset-0 bg-gradient-to-b from-purple-600 to-transparent opacity-50" />
          </motion.div>

          <div className="relative space-y-12">
            {education.map((item, idx) => {
              const isCardLeft = idx % 2 === 0;
              const cardColClass = isCardLeft ? "md:col-start-1" : "md:col-start-2";
              const dateOppositeClass = isCardLeft
                ? "sm:left-[51%] sm:pl-4 text-left"
                : "sm:right-[51%] sm:pr-4 text-right";

              return (
                <div key={idx} className="relative group md:grid md:grid-cols-2 md:gap-8">
                  {/* date outside card, hugging timeline, opposite the card */}
                  <motion.div
                    initial={{ opacity: 0, x: isCardLeft ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={cn(
                      "text-sm text-purple-500 dark:text-purple-400 font-semibold mb-2",
                      "hidden sm:block sm:absolute sm:top-0 sm:mb-0 z-20",
                      dateOppositeClass
                    )}
                  >
                    {item.date}
                  </motion.div>

                  {/* timeline node */}
                  <div className="hidden sm:block absolute left-1/2 -translate-x-1/2 -translate-y-[0.5px] top-0 z-10">
                    <div className="relative">
                      <div className="absolute inset-0 -m-[1px] bg-white dark:bg-black" />
                      <motion.div
                        initial={{ scale: 0, rotate: 0 }}
                        whileInView={{
                          scale: 1,
                          rotate: 360,
                          transition: {
                            scale: { duration: 0.5 },
                            rotate: { duration: 1, ease: "easeOut" },
                          },
                        }}
                        viewport={{ once: true }}
                        className="relative w-7 h-7 flex items-center justify-center"
                      >
                        {React.createElement(educationIcons[idx % educationIcons.length], {
                          className: "w-6 h-6 text-purple-500",
                        })}
                      </motion.div>
                    </div>
                  </div>

                  {/* card (alternating columns) */}
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, type: "spring" }}
                    viewport={{ once: true }}
                    className={cn("ml-24 md:ml-0", cardColClass)}
                  >
                    <CardSpotlight className="w-full rounded-xl bg-white dark:bg-[#030712] border border-neutral-200 dark:border-neutral-800 overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:border-neutral-300 dark:hover:border-neutral-700">
                      <div className="p-4 sm:p-6">
                        <h3 className="text-base sm:text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                          {item.title}
                        </h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mb-3 sm:mb-4">
                          <span className="font-medium">{item.organization}</span>
                          <span className="hidden sm:inline">•</span>
                          <span>{item.location}</span>
                        </div>

                        {/* mobile-only date inside card (optional) */}
                        {/* <div className="text-xs text-purple-500 font-semibold mb-2 sm:hidden">{item.date}</div> */}
                      </div>
                    </CardSpotlight>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}