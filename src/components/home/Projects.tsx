'use client';

import { motion } from 'framer-motion';
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { projects } from "../../constants/projects";
import Image from "next/image";
import { ButtonLitLink } from '../ui/button-lit';

export default function Projects() {
  return (
    <section id="projects" className="py-8 sm:py-12 lg:py-24 relative">
      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 relative">
        <div className="text-center mb-6 sm:mb-8 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-2 sm:mb-3">
              Featured Projects
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-neutral-600 dark:text-white/80 max-w-2xl mx-auto px-2">
              A showcase of my recent work, featuring tech built with modern technologies.
            </p>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="perspective"
        >
          <BentoGrid>
            {projects.map((project, i) => (
              <BentoGridItem
                key={i}
                title={project.title}
                description={project.description}
                skills={project.skills}
                githubLink={project.githubLink}
                header={
                  <div className="absolute inset-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-center group-hover/bento:scale-105 transition duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={i < 2}
                    />
                  </div>
                }
              />
            ))}
          </BentoGrid>
        </motion.div>

        {/* View More Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mt-6 sm:mt-8 lg:mt-16"
        >
          <ButtonLitLink
            href="https://github.com/asJ26"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center px-3 py-1.5 sm:px-4 sm:py-2"
          >
            <span className="text-xs sm:text-sm lg:text-base font-medium group-hover:translate-x-1 transition-transform duration-200">
              View More Projects →
            </span>
          </ButtonLitLink>
        </motion.div>
      </div>
    </section>
  );
}
