import { PROJECTS } from "../constants";
import {animate, motion} from "framer-motion";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
  <section id="projects">
  <div className="border-b border-neutral-900 pb-4">
    <motion.h2
    whileInView={{opacity:1, y:0}}
            initial={{opacity:0,y:-100}}
            transition={{duration:1}}
    className="my-20 text-center text-4xl">PROJECTS</motion.h2>
    <div>{PROJECTS.map((project, index) => (
        <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1.5}}
            className="w-full lg:w-1/4">
            <img src={project.image} width={150} height={150} alt={project.title} className="mb-6 rounded"/>
        </motion.div>
        <motion.div 
        whileInView={{opacity:1, x:0}}
            initial={{opacity:0,x:100}}
            transition={{duration:1.5}}
        className="w-full max-w-xl lh:w-3/4">
        <h6 className="mb-2 font-semibold flex items-center gap-2">
  {project.title}
</h6>

<p className="mb-4 text-neutral-400">{project.description}</p>
<div className="mb-4 flex gap-8">
  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 rounded bg-violet-800 px-4 py-1.5 text-sm font-medium text-white hover:bg-violet-700 transition"
  >
    <FaGithub size={16} />
    Explore
  </a>
  {project.demo && (
    <a
      href={project.demo}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded bg-violet-800 px-4 py-1.5 text-sm font-medium text-white hover:bg-violet-700 transition"
    >
      Demo
    </a>
  )}
</div>


{project.technologies.map((tech, index) => (
  <span
    key={index}
    className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
  >
    {tech}
  </span>
))}

        </motion.div>
        </div>
    ))}
        </div>
  </div>
  </section>
  );
};

export default Projects