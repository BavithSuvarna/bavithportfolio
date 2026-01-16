import { useState } from "react";
import { PROJECTS } from "../constants";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev === PROJECTS.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev === 0 ? PROJECTS.length - 1 : prev - 1));
  };

  const currentProject = PROJECTS[currentIndex];

  return (
    <section id="projects">
      <div className="border-b border-neutral-900 pb-16">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          className="my-20 text-center text-4xl"
        >
          PROJECTS
        </motion.h2>

        <div className="relative max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center">
            {/* Previous Button */}
            <button
              onClick={prevProject}
              className="absolute left-0 lg:-left-12 z-10 p-2 bg-neutral-800/50 rounded-full hover:bg-neutral-700 text-white transition"
            >
              <FaChevronLeft size={24} />
            </button>

            {/* Project Card */}
            <div className="w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.4 }} // Faster transition for carousel feel
                  className="flex flex-col lg:flex-row gap-8 bg-neutral-900/30 p-6 rounded-2xl border border-neutral-800"
                >
                  {/* Image Section */}
                  <div className="w-full lg:w-1/2">
                    <img
                      src={currentProject.image}
                      alt={currentProject.title}
                      className="w-full h-64 lg:h-80 object-cover rounded-xl"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    <h3 className="mb-4 text-2xl font-bold text-white">
                      {currentProject.title}
                    </h3>
                    <p className="mb-6 text-neutral-400 leading-relaxed">
                      {currentProject.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {currentProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-sm font-medium text-purple-400 bg-neutral-800 rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={currentProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-800 rounded-lg text-white hover:bg-neutral-700 transition"
                      >
                        <FaGithub size={18} />
                        Code
                      </a>
                      {currentProject.demo && (
                        <a
                          href={currentProject.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-purple-600 rounded-lg text-white hover:bg-purple-500 transition"
                        >
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Next Button */}
            <button
              onClick={nextProject}
              className="absolute right-0 lg:-right-12 z-10 p-2 bg-neutral-800/50 rounded-full hover:bg-neutral-700 text-white transition"
            >
              <FaChevronRight size={24} />
            </button>
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 border border-purple-500 text-purple-400 rounded-full hover:bg-purple-500/10 transition duration-300"
            >
              View All Projects
            </Link>
          </div>

          {/* Dots Indicator (Optional but nice) */}
          <div className="flex justify-center mt-4 gap-2">
            {PROJECTS.map((_, idx) => (
              <div
                key={idx}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-purple-500 w-4' : 'bg-neutral-700'}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;