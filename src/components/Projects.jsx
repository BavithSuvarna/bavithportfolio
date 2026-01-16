import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaGithub, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Projects = () => {
  const scrollContainerId = "projects-scroll-container";

  const scrollLeft = () => {
    const container = document.getElementById(scrollContainerId);
    if (container) {
      const cardWidth = container.firstElementChild?.offsetWidth || 300;
      const gap = 24;
      const itemWidth = cardWidth + gap;
      const currentScroll = container.scrollLeft;

      const currentIndex = Math.round(currentScroll / itemWidth);
      const targetScroll = Math.max(0, (currentIndex - 1) * itemWidth);

      container.scrollTo({ left: targetScroll, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    const container = document.getElementById(scrollContainerId);
    if (container) {
      const cardWidth = container.firstElementChild?.offsetWidth || 300;
      const gap = 24;
      const itemWidth = cardWidth + gap;
      const currentScroll = container.scrollLeft;

      const currentIndex = Math.round(currentScroll / itemWidth);
      const targetScroll = (currentIndex + 1) * itemWidth;

      container.scrollTo({ left: targetScroll, behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className="border-b border-neutral-900 pb-4 pt-20">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Header & Buttons */}
        {/* Header */}
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          className="mb-8 text-center text-4xl"
        >
          PROJECTS
        </motion.h2>

        {/* Navigation Buttons */}
        <div className="flex justify-end gap-4 mb-8">
          <button
            onClick={scrollLeft}
            className="p-3 rounded-lg bg-neutral-800 text-purple-400 hover:bg-neutral-700 hover:text-white transition-colors border border-neutral-700"
            aria-label="Previous Project"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={scrollRight}
            className="p-3 rounded-lg bg-neutral-800 text-purple-400 hover:bg-neutral-700 hover:text-white transition-colors border border-neutral-700"
            aria-label="Next Project"
          >
            <FaArrowRight />
          </button>
        </div>

        {/* Horizontal Scroll Container */}
        <div
          id={scrollContainerId}
          className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Hide scrollbar
        >
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="min-w-full md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.33%-16px)] xl:min-w-[calc(25%-18px)] bg-neutral-900 rounded-2xl p-6 flex flex-col justify-between snap-start border border-neutral-800 hover:border-purple-500/30 transition duration-300"
            >
              <div>
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>

                {/* Description */}
                <p className="text-neutral-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-neutral-800 text-purple-400 text-[10px] rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-4 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 bg-neutral-800 rounded-lg text-white font-medium hover:bg-neutral-700 transition"
                >
                  <FaGithub /> Code
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 bg-purple-600 rounded-lg text-white font-medium hover:bg-purple-500 transition"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;