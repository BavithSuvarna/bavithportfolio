// Certifications.jsx
import { motion } from "framer-motion";
import openaiCert from "../assets/certificates/openai_cert.png";
import awsCert from "../assets/certificates/aws_cert.png";
import dataanalystCert from "../assets/certificates/dataanalyst_cert.png";
import deloitteTech from "../assets/certificates/deloitte_tech.png";
import deloitteData from "../assets/certificates/deloitte_data.png";
import goldmanOps from "../assets/certificates/goldman_ops.png";
import goldmanSE from "../assets/certificates/goldman_se.png";
import networkCert from "../assets/certificates/network_cert.png";


// Array of certificates
const CERTIFICATIONS = [
  {
    title: "Prompt Engineering & Programming with OpenAI",
    link: "https://badges.plus.columbia.edu/2013b0bc-e7f8-4c38-9b79-b7dcbd85d338",
    image: openaiCert,
  },
  {
    title: "AWS Certified Cloud Practitioner Exam [Certification Course].",
    link: "https://media.geeksforgeeks.org/courses/certificates/d8ff8b4ea9e30f140cea82d793802205.pdf",
    image: awsCert,
  },
  {
    title: "Data Analyst - One Roadmap",
    link: "https://oneroadmap.io/skills/da/certificate/CERT-4197D66E",
    image: dataanalystCert,
  },
  {
    title: "Deloitte Technology Job Simulation",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_uckeZRXeTKtYSocch_1749375862122_completion_certificate.pdf",
    image: deloitteTech,
  },
  {
    title: "Deloitte Data Analytics Job Simulation",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_uckeZRXeTKtYSocch_1741186529333_completion_certificate.pdf",
    image: deloitteData,
  },
  {
    title: "Goldman Sachs - Operations",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/MBA4MnZTNFEoJZGnk/wNge9cjzNTXD2acrv_MBA4MnZTNFEoJZGnk_uckeZRXeTKtYSocch_1741190328895_completion_certificate.pdf",
    image: goldmanOps,
  },
  {
    title: "Goldman Sachs - Software Engineering",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/MBA4MnZTNFEoJZGnk/NPdeQ43o8P9HJmJzg_MBA4MnZTNFEoJZGnk_uckeZRXeTKtYSocch_1741221095601_completion_certificate.pdf",
    image: goldmanSE,
  },
  {
    title: "Fundamentals of Network Communication",
    link: "https://coursera.org/verify/DJSUZPRL94MQ",
    image: networkCert,
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="border-b border-neutral-900 pb-16">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl font-semibold"
      >
        CERTIFICATIONS
      </motion.h2>
      <div className="flex flex-wrap justify-center gap-8">
        {CERTIFICATIONS.map((cert, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            className="max-w-xs text-center"
          >
            <a href={cert.link} target="_blank" rel="noopener noreferrer">
              <img
                src={cert.image}
                alt={cert.title}
                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
              <p className="mt-2 text-white text-sm font-medium">{cert.title}</p>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
