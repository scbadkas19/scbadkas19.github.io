'use client';

import { motion } from 'framer-motion';
import { cn } from "../../utils/cn";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { HiOutlineDownload } from "react-icons/hi";
import { ButtonLitLink } from '../ui/button-lit';
import { CardSpotlight } from '../ui/card-spotlight';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-neutral-600 dark:text-white/80 max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          <CardSpotlight className="w-full rounded-xl bg-white dark:bg-[#030712] border border-neutral-200 dark:border-neutral-800 overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-neutral-100/30 dark:hover:shadow-neutral-900/30 hover:border-neutral-300 dark:hover:border-neutral-700">
            <div className="p-8">
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className={cn(
                  "w-16 h-16 rounded-full",
                  "bg-neutral-100 dark:bg-neutral-800",
                  "flex items-center justify-center",
                  "transition-colors duration-200"
                )}>
                  <HiOutlineMail className="w-8 h-8 text-neutral-900 dark:text-purple-400" />
                </div>
                
                <div className="text-center space-y-2">
                  <h3 className="text-lg font-medium text-neutral-900 dark:text-white">
                    Drop me a line at
                  </h3>
                  <p className="text-neutral-600 dark:text-white/80">
                    scbadkas19@gmail.com
                  </p>
                </div>

                <ButtonLitLink
                  href="mailto:scbadkas19@gmail.com"
                  className="mt-4"
                >
                  Mail Me →
                </ButtonLitLink>
              </div>
            </div>
          </CardSpotlight>

          <CardSpotlight className="w-full rounded-xl bg-white dark:bg-[#030712] border border-neutral-200 dark:border-neutral-800 overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-neutral-100/30 dark:hover:shadow-neutral-900/30 hover:border-neutral-300 dark:hover:border-neutral-700">
            <div className="p-8">
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className={cn(
                  "w-16 h-16 rounded-full",
                  "bg-neutral-100 dark:bg-neutral-800",
                  "flex items-center justify-center",
                  "transition-colors duration-200"
                )}>
                  <FiPhone className="w-8 h-8 text-neutral-900 dark:text-purple-400" />
                </div>
                
                <div className="text-center space-y-2">
                  <h3 className="text-lg font-medium text-neutral-900 dark:text-white">
                    Call me at
                  </h3>
                  <p className="text-neutral-600 dark:text-white/80">
                    +1 571-201-0045
                  </p>
                </div>

                <ButtonLitLink
                  href="tel:+15712010045"
                  className="mt-4"
                >
                  Call Me →
                </ButtonLitLink>
              </div>
            </div>
          </CardSpotlight>
        </motion.div>

{/*         <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex justify-center mt-12"
        >
          <ButtonLitLink
            href="/Akhilesh_Jadhav_Resume.pdf"
            className="flex items-center whitespace-nowrap"
            download
          >
            <span className="inline-block">Resume</span>
            <HiOutlineDownload className="w-5 h-5 ml-2 inline-block" />
          </ButtonLitLink>
        </motion.div> */}
      </div>
    </section>
  );
}
