'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FloatingSkill } from '../ui/floating-skill';
import { 
  SiPython, SiJavascript, SiTypescript, SiGo,
  SiHtml5, SiCss3, SiTailwindcss, SiJquery, 
  SiRedux, SiGraphql, SiApachekafka,
  SiAmazon, SiMicrosoftazure, SiGooglecloud, 
  SiMysql, SiPostgresql, SiMicrosoftsqlserver, 
  SiOracle, SiMongodb, SiRedis,
  SiDocker, SiKubernetes, SiJenkins, SiGit, 
  SiSpringboot, SiReact, 
  SiNextdotjs, SiNodedotjs, SiAngular, 
  SiPostman, SiJira
} from 'react-icons/si';
import { 
  FaJava, FaTerminal, FaSwift, FaCode
} from 'react-icons/fa';
import { TbBrandCSharp } from 'react-icons/tb';

// Organize skills into rows for pyramid layout
const skillRows = [
  // First row - Programming Languages
  [
    { name: 'Java', icon: FaJava, color: '#007396' },
    { name: 'Python', icon: SiPython, color: '#3776AB' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'C++', icon: FaCode, color: '#00599C' },
    { name: 'C', icon: TbBrandCSharp, color: '#A8B9CC' },
    { name: 'Swift', icon: FaSwift, color: '#FA7343' },
    { name: 'Go', icon: SiGo, color: '#00ADD8' },
    { name: 'Shell', icon: FaTerminal, color: '#4EAA25' },
  ],
  // Second row - Web & Cloud
  [
    { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
    { name: 'Tailwind', icon: SiTailwindcss, color: '#38B2AC' },
    { name: 'jQuery', icon: SiJquery, color: '#0769AD' },
    { name: 'Redux', icon: SiRedux, color: '#764ABC' },
    { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
    { name: 'AWS', icon: SiAmazon, color: '#FF9900' },
    { name: 'Azure', icon: SiMicrosoftazure, color: '#0089D6' },
    { name: 'GCP', icon: SiGooglecloud, color: '#4285F4' },
  ],
  // Third row - Frameworks & DevOps
  [
    { name: 'Spring', icon: SiSpringboot, color: '#6DB33F' },
    { name: 'React.js', icon: SiReact, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'Angular', icon: SiAngular, color: '#DD0031' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
    { name: 'Jenkins', icon: SiJenkins, color: '#D24939' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
  ],
  // Fourth row - Databases & Tools
  [
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
    { name: 'Oracle', icon: SiOracle, color: '#F80000' },
    { name: 'SQL Server', icon: SiMicrosoftsqlserver, color: '#CC2927' },
    { name: 'Redis', icon: SiRedis, color: '#DC382D' },
    { name: 'Kafka', icon: SiApachekafka, color: '#231F20' },
    { name: 'JIRA', icon: SiJira, color: '#0052CC' },
    { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
  ],
];

export default function Skills() {
  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-3 sm:mb-4">
            My Expertise
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-white/80 max-w-2xl mx-auto">
            Hover over the skills to explore my technical proficiencies
          </p>
        </motion.div>

        <div className="flex flex-col items-center gap-2 sm:gap-4 lg:gap-6">
          {skillRows.map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: rowIndex * 0.1 }}
              className={`
                flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4
                w-[98%] sm:w-[96%] lg:w-[94%]
                ${rowIndex === 1 && 'w-[96%] sm:w-[92%] lg:w-[88%]'}
                ${rowIndex === 2 && 'w-[94%] sm:w-[88%] lg:w-[82%]'}
                ${rowIndex === 3 && 'w-[92%] sm:w-[84%] lg:w-[76%]'}
              `}
            >
              {row.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    delay: index * 0.05
                  }}
                >
                  <FloatingSkill
                    icon={skill.icon}
                    name={skill.name}
                    color={skill.color}
                  />
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
