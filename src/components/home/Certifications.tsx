'use client';

import { motion } from 'framer-motion';
import { HoverExpandableCard } from '../ui/hover-expandable-card';

const certifications = [
  {
    title: "AWS-certified Data Engineer",
    subtitle: "Amazon Web Services",
    description: "The AWS Certified Data Engineer – Associate Exam validates expertise in designing, implementing, and managing scalable, secure, and efficient data solutions on AWS.",
    date: "Dec 2024",
    issuer: "AWS",
    link: "https://www.credly.com/badges/379bcb44-fd4f-4706-8c78-2c3c5dfe1666/public_url"
  },
  {
    title: "Academy Accreditation - Databricks Fundamentals",
    subtitle: "DataBricks",
    description: "Demonstrates foundational knowledge in using Databricks for data engineering and data science, including data pipeline construction and optimization with Apache Spark.",
    date: "Oct 2024",
    issuer: "DataBricks",
    link: "https://credentials.databricks.com/d7f1fbbd-ffbf-4a21-8105-8e02e595e3db#gs.iogdog"
  },
  {
    title: "Azure Data Engineer Associate (DP-203) Cert",
    subtitle: "Azure",
    description: "focuses on preparing candidates to design and implement various data storage solutions on Azure, essential for the Azure Data Engineer Associate certification.",
    date: "Oct 2024",
    issuer: "LinkedIN",
    link: "https://www.linkedin.com/learning/certificates/cc5b28bdc099743cd067edbae0031b48ca77e35c73aa49dc3552bf9d4f66a3ab"
  },
  {
    title: "Basecamp: Project Management Best Practices",
    subtitle: "Project Management",
    description: "Covers effective strategies and techniques for managing projects using Basecamp, a popular project management tool. This includes organizing tasks, collaborating with teams, setting timelines, and ensuring project milestones are met efficiently.",
    date: "Oct 2024",
    issuer: "LinkedIN",
    link: "https://www.linkedin.com/learning/certificates/56ca64783bba81673fbc1eb352009c300bd77005ea9dd886fe53e842279bbf38"
  },
  {
    title: "Introduction to Data Warehouses",
    subtitle: "Data Warehousing",
    description: "Covers the basic concepts, architecture, and functionalities of data warehouses, including how to design, build, and use them for effective data integration, analysis, and reporting.",
    date: "Oct 2024",
    issuer: "LinkedIN",
    link: "https://www.linkedin.com/learning/certificates/6bd300149101222923e2d90744eb7a16a235b1ebef828e085f26a0da2819362b"
  },
  {
    title: "Problem-Solving Strategies for Data Engineers",
    subtitle: "Fundamentals",
    description: "Discusses methods and approaches for identifying, analyzing, and resolving common and complex data-related issues faced in data engineering, including performance optimization, data integration, and maintaining data quality and consistency.",
    date: "Oct 2024",
    issuer: "LinkedIN",
    link: "https://www.linkedin.com/learning/certificates/1517258555d23fa41d85b6fb8c1fd53d989c4ffbe8b8896a9447e4f6adfb2294"
  },
  {
    title: "Microsoft Technology Associate: Python",
    subtitle: "Microsoft",
    description: "Validates fundamental programming skills in Python, including understanding of Python's syntax, data structures, and the ability to solve software development problems using Python.",
    date: "Sep 2019",
    issuer: "Microsoft",
    link: "https://www.credly.com/badges/21e6ec0e-23a0-48ce-8121-ffd85ce48ba5/public_url"
  },
  {
    title: "Student Exchange Program: Singapore Case Study",
    subtitle: "Nanyang Institute of Technology, Singapore",
    description: "Validates proficiency in developing applications using MongoDB, including data modeling, querying, and optimization.",
    date: "Jun 2019",
    issuer: ["NTU, Singapore", "Qi Square"],
    link: "https://www.linkedin.com/in/akhilesh-s-jadhav/details/certifications/"
  }
];

export default function Certifications() {
  // Group certifications into pairs for the grid
  const certificationRows = certifications.reduce((rows, cert, index) => {
    if (index % 2 === 0) {
      rows.push([cert]);
    } else {
      rows[rows.length - 1].push(cert);
    }
    return rows;
  }, [] as typeof certifications[]);

  return (
    <section id="certifications" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Certifications
          </h2>
          <p className="text-neutral-600 dark:text-white/80 max-w-2xl mx-auto">
            Professional certifications and achievements that validate my expertise
          </p>
        </motion.div>

        <div className="space-y-4">
          {certificationRows.map((row, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {row.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <HoverExpandableCard {...cert} />
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
