'use client';

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { cn } from "../../utils/cn";
import { CardHoverEffect } from "../ui/card-hover-effect";
import { education } from "../../lib/metadata";
import { FaGraduationCap } from "react-icons/fa6";

interface Education {
  title: string;
  institution: string;
  location: string;
  date: string;
}

export const education = [
    {
      title: "Master of Science in Computer Science",
      institution: "Syracuse University",
      location: "Syracuse, NY",
      date: "2022 - 2024",
    },
    {
      title: "Bachelor of Engineering in Information Technology",
      institution: "University of Pune",
      location: "Pune, IN",
      date: "2017 - 2021",
    }
  ];


const edu = education
const educationIcons = [FaGraduationCap];

export default function Education() {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 500,
    damping: 30,
    restDelta: 0.001,
    mass: 0.1,
  });

  return (
    <section id="education" className="py-12 sm:py-24 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-3 sm:mb-4">
            Education
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-8">
            My academic background
          </p>
        </motion.div>

        <div className="relative" ref={ref}>
          <div className="hidden sm:block absolute left-1/2 -translate-x-[0.5px] top-0 bottom-0 w-[1px] bg-purple-500/20" />
          <motion.div
            style={{ scaleY, transformOrigin: "top" }}
            className="hidden sm:block absolute left-1/2 -translate-x-[0.5px] top-0 bottom-0 w-[1px]"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-purple-600 via-purple-500 to-transparent [mask-image:linear-gradient(to_bottom,white_70%,transparent_100%)]" />
            <div className="absolute inset-0 bg-gradient-to-b from-purple-600 to-transparent opacity-50" />
          </motion.div>

          <div className="relative">
            {education.map((edu: Education, idx: number) => (
              <div key={idx} className="relative mb-12 sm:mb-24 last:mb-0">
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={cn(
                    "text-sm text-purple-500 font-medium mb-2",
                    "sm:absolute sm:top-0",
                    "sm:mb-0",
                    idx % 2 === 0
                      ? "sm:right-[51%] sm:pr-4"
                      : "sm:left-[51%] sm:pl-4"
                  )}
                >
                  {edu.date}
                </motion.div>

                <div className="hidden sm:block absolute left-1/2 -translate-x-1/2 -translate-y-[0.5px] top-0">
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

                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? 100 : -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.2,
                    type: "spring",
                    bounce: 0.4,
                  }}
                  className={cn(
                    "w-full sm:w-[calc(50%-3rem)]",
                    "sm:mt-12",
                    idx % 2 === 0 ? "sm:ml-auto" : "sm:mr-auto"
                  )}
                >
                  <CardHoverEffect>
                    <div className="p-4 sm:p-6">
                      <h3 className="text-base sm:text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                        {edu.title}
                      </h3>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mb-3 sm:mb-4">
                        <span className="font-medium">{edu.institution}</span>
                        <span className="hidden sm:inline">•</span>
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </CardHoverEffect>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
