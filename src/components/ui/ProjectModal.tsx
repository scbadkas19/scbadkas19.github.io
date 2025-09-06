"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { BsGithub, BsX } from "react-icons/bs";
import { ButtonLitLink } from "./button-lit";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    image: string;
    skills: string[];
    githubLink?: string;
  } | null;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  project,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose, mounted]);

  useEffect(() => {
    if (!mounted) return;

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, mounted]);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isOpen && project && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container for Centering */}
          <div className="min-h-screen px-4 text-center">
            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="inline-block w-full max-w-2xl my-8 overflow-hidden text-left align-middle transition-all transform"
            >
              <div className="relative bg-white dark:bg-[#030712] rounded-xl shadow-xl border border-neutral-200 dark:border-neutral-800">
                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-neutral-600 dark:text-white/80 hover:bg-white/20 transition-colors z-10"
                >
                  <BsX className="w-6 h-6" />
                </button>

                {/* Image */}
                <div className="relative w-full h-64 sm:h-72">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/60" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
                    {project.title}
                  </h3>
                  
                  <p className="text-neutral-600 dark:text-white/80 mb-6">
                    {project.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm font-medium rounded-full 
                          bg-neutral-100 dark:bg-[#0A0F1A]
                          text-neutral-600 dark:text-white/90
                          border border-neutral-200 dark:border-neutral-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* GitHub Button */}
                  {project.githubLink && (
                    <ButtonLitLink
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full group/github"
                    >
                      <div className="flex items-center justify-center space-x-2">
                        <span className="group-hover/github:rotate-[360deg] transition-transform duration-500">
                          <BsGithub className="w-5 h-5" />
                        </span>
                        <span className="text-sm font-medium group-hover/github:translate-x-1 transition-transform duration-200">
                          View on GitHub
                        </span>
                      </div>
                    </ButtonLitLink>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
