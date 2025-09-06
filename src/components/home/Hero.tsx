"use client";

import { TypewriterEffect } from "../ui/typewriter-effect";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaMediumM } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import { ButtonLitLink } from "../ui/button-lit";
import { Particles } from "../ui/particles";
import ClientOnly from "../ClientOnly";

export default function Hero() {
  const words = [
    {
      text: "Hi",
      className: "text-neutral-800 dark:text-white"
    },
    {
      text: "I'm",
      className: "text-neutral-800 dark:text-white"
    },
    {
      text: "Akhilesh",
      className: "text-neutral-800 dark:text-white font-bold"
    },
    {
      text: "Jadhav",
      className: "text-neutral-800 dark:text-white font-bold"
    }
  ];

  return (
    <section className="h-screen w-full relative overflow-hidden">
      {/* Particles Background */}
      <div className="absolute inset-0">
        <ClientOnly>
          <Particles quantity={80} ease={30} />
        </ClientOnly>
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-full w-full flex flex-col items-center justify-center">
          <div className="hidden md:block">
            <TypewriterEffect words={words} className="text-4xl sm:text-5xl" />
          </div>
          <div className="md:hidden">
            <h1 className="text-4xl sm:text-5xl font-bold text-neutral-800 dark:text-white">
              Hi, I'm Akhilesh Jadhav
            </h1>
          </div>
          
          <p className="text-neutral-600 dark:text-white/80 max-w-2xl mx-auto text-center mt-6">
            In today's interconnected landscape, I transform complex challenges into elegant solutions through the artistry of full-stack development. Orchestrating microservices is my signature, ensuring your systems don't just function—they thrive across clouds with seamless precision.
          </p>

          <div className="flex gap-4 mt-8">
            <a
              href="https://github.com/asJ26"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-neutral-900 rounded-full hover:scale-110 transition-transform duration-200"
            >
              <BsGithub className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/akhilesh-s-jadhav/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-neutral-900 rounded-full hover:scale-110 transition-transform duration-200"
            >
              <BsLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://medium.com/@akhileshjadhav26"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-neutral-900 rounded-full hover:scale-110 transition-transform duration-200"
            >
              <FaMediumM className="w-6 h-6" />
            </a>
          </div>

          <div className="flex gap-4 mt-8">
            <ButtonLitLink
              href="#projects"
            >
              View Projects
            </ButtonLitLink>

{/*             <ButtonLitLink
              href="/Akhilesh_Jadhav_Resume.pdf"
              className="flex items-center whitespace-nowrap"
              download
            >
              <span className="inline-block">Resume</span>
              <HiOutlineDownload className="w-5 h-5 ml-2 inline-block" />
            </ButtonLitLink> */}
          </div>

{/*           <div className="grid grid-cols-3 gap-12 mt-20 text-center">
            <div>
              <h2 className="text-3xl font-bold mb-2 text-neutral-900 dark:text-purple-500">20+</h2>
              <p className="text-sm text-neutral-600 dark:text-white/80">Data Pipelines</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-2 text-neutral-900 dark:text-purple-500">100TB+</h2>
              <p className="text-sm text-neutral-600 dark:text-white/80">Data Processed</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-2 text-neutral-900 dark:text-purple-500">99.9%</h2>
              <p className="text-sm text-neutral-600 dark:text-white/80">Pipeline Reliability</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
