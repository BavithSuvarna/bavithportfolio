import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub, FaArrowLeft } from "react-icons/fa";

const AllProjects = () => {
    return (
        <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 min-h-screen">
            <div className="fixed top-0 -z-10 h-full w-full">
                <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            </div>

            <div className="container mx-auto px-8 py-12">
                <Link to="/" className="inline-flex items-center gap-2 mb-8 text-purple-400 hover:text-purple-300 transition">
                    <FaArrowLeft /> Back to Home
                </Link>

                <h2 className="mb-12 text-center text-4xl font-bold">All Projects</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-neutral-900/50 rounded-xl p-6 border border-neutral-800 hover:border-purple-500/50 transition duration-300"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-neutral-400 text-sm mb-4 line-clamp-3">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.slice(0, 3).map((tech, idx) => (
                                    <span key={idx} className="text-xs bg-neutral-800 text-purple-300 px-2 py-1 rounded">
                                        {tech}
                                    </span>
                                ))}
                                {project.technologies.length > 3 && (
                                    <span className="text-xs bg-neutral-800 text-purple-300 px-2 py-1 rounded">
                                        +{project.technologies.length - 3}
                                    </span>
                                )}
                            </div>

                            <div className="flex gap-4">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm text-neutral-300 hover:text-white"
                                >
                                    <FaGithub /> Code
                                </a>
                                {project.demo && (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300"
                                    >
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllProjects;
