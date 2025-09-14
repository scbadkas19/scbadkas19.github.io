'use client';

import React, { useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { cn } from "../../utils/cn";
import { CardSpotlight } from "../ui/card-spotlight";
import { TabSwitch } from "../ui/TabSwitch";

interface TimelineItem {
  title: string;
  organization: string;
  location: string;
  type: string;
  date: string;
  description: string;
  skills?: string[];
  degree?: string;
  gpa?: string;
}

const experiences: TimelineItem[] = [
  {
    title: "Data Analyst",
    organization: "Johnson & Johnson",
    location: "New Brunswick, NJ",
    type: "Remote",
    date: "February 2025 - Present",
    description: ""
  },
  {
    title: "Data Analyst",
    organization: "Citi",
    location: "New York, NY",
    type: "Remote",
    date: "May 2024 - December 2024",
    description: ""
  },
  {
    title: "Data Analyst",
    organization: "Zentek Infosoft",
    location: "Jaipur, INDIA",
    type: "Remote",
    date: "Jun 2020 - Jul 2023",
    description: ""
  },
];

const education: TimelineItem[] = [
  {
    title: "Master of Science in Business Analytics",
    organization: "University of Maryland",
    location: "College Park, MD",
    type: "GPA: 3.18/4",
    date: "Aug 2023 - Dec 2024",
    description: "Coursework:\n• Data Structures and Algorithms\n• Computer Networks\n• Software Engineering\n• Web Development\n• Artificial Intelligence\n• Cloud Computing\n• Database Systems\n• Operating Systems\n• Computer Organization\n• Digital Electronics"
  },
  {
    title: "Bachelor of Technology in Data Science",
    organization: "NMIMS University",
    location: "Mumbai, India",
    type: " GPA: 3.02/10.0",
    date: "Jul 2017 - Aug 2021",
    description: "",
    degree: "BTech in Data Science"
  }
];

const TechBadge = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-3 py-1 rounded-full text-sm 
      bg-neutral-100 dark:bg-black/50
      text-neutral-600 dark:text-white
      border border-neutral-200 dark:border-neutral-800
      transition-colors duration-200">
      {children}
    </div>
  );
};

export default function Experience() {
  const [selected, setSelected] = useState<'Experience' | 'Education'>('Experience');
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const items = selected === 'Experience' ? experiences : education;

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Experience & Education
          </h2>
          <p className="text-neutral-600 dark:text-white/80 max-w-2xl mx-auto mb-8">
            My professional journey and academic background
          </p>

          <TabSwitch
            defaultTab="Experience"
            onTabChange={(tab) => setSelected(tab as 'Experience' | 'Education')}
            tabs={['Experience', 'Education']}
            className="inline-flex"
          />
        </motion.div>

        <div ref={ref} className="relative">
          {/* Timeline Line */}
          <div className="absolute left-9 md:left-1/2 h-full w-[2px] bg-neutral-200 dark:bg-neutral-800" />
          
          {/* Animated Line */}
          <motion.div
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute left-9 md:left-1/2 h-full w-[2px] bg-gradient-to-b from-neutral-500 to-neutral-700 dark:from-purple-500/50 dark:to-purple-600/50"
          />

          <div className="relative space-y-12">
            {items.map((item, idx) => (
              <div key={idx} className="relative group md:grid md:grid-cols-2 md:gap-8">
                {/* Timeline Node */}
                <div className="absolute left-9 md:left-1/2 -translate-x-1/2">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-neutral-500/30 to-neutral-600/30 dark:from-purple-500/20 dark:to-purple-600/20 rounded-full opacity-0 group-hover:opacity-100 blur transition duration-500" />
                    <div className="relative w-5 h-5 rounded-full border-4 border-neutral-500 dark:border-purple-500/50 bg-white dark:bg-black group-hover:border-neutral-600 dark:group-hover:border-purple-400 transition-colors duration-300" />
                  </div>
                </div>

                {/* Content Card */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, type: "spring" }}
                  viewport={{ once: true }}
                  className={cn(
                    "ml-24 md:ml-0",
                    selected === 'Experience'
                      ? idx % 2 === 0 ? "md:col-start-1" : "md:col-start-2"
                      : idx % 2 === 0 ? "md:col-start-2" : "md:col-start-1"
                  )}
                >
                  <CardSpotlight className="w-full rounded-xl bg-white dark:bg-[#030712] border border-neutral-200 dark:border-neutral-800 overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-neutral-100/30 dark:hover:shadow-neutral-900/30 hover:border-neutral-300 dark:hover:border-neutral-700">
                    <div className="p-6">
                      {/* Title */}
                      <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                        {item.title}
                      </h3>

                      {/* Organization, Location, and Date */}
                      <div className="flex items-center justify-between text-sm text-neutral-600 dark:text-white/80 mb-3">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{item.organization}</span>
                          <span>•</span>
                          <span>{item.location}</span>
                        </div>
                        <span className="font-medium">{item.date}</span>
                      </div>

                      {/* Type Badge & GPA */}
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 text-xs font-medium rounded-full
                          bg-neutral-100 dark:bg-black/50
                          text-neutral-600 dark:text-white
                          border border-neutral-200 dark:border-neutral-800">
                          {item.type}
                        </span>
                        {item.gpa && (
                          <span className="text-sm font-medium text-neutral-600 dark:text-white/80">
                            GPA: {item.gpa}
                          </span>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-neutral-700 dark:text-white/90 mb-4 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Skills */}
                      {item.skills && (
                        <div className="flex flex-wrap gap-2">
                          {item.skills.map((skill) => (
                            <TechBadge key={skill}>
                              {skill}
                            </TechBadge>
                          ))}
                        </div>
                      )}
                    </div>
                  </CardSpotlight>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
