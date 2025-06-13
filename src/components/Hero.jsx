import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/BavithSuvarnaProfile.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-8 lg:mb-36">
      <div className="max-w-screen-xl mx-auto flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between gap-8 px-4">
        
        {/* LEFT SECTION */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent text-5xl sm:text-5xl lg:text-8xl font-thin pb-4"
          >
            Hey! I'm Bavith
          </motion.h1>

          <motion.p
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="text-base sm:text-lg lg:text-2xl font-light tracking-tight leading-relaxed"
          >
            {HERO_CONTENT}
          </motion.p>

          <motion.span
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="block mt-4 text-base sm:text-lg lg:text-xl font-light"
          >
            Feel free to reach out if you want to share ideas and collaborate!
          </motion.span>

          <motion.a
            href="mailto:suvarnabavith@gmail.com"
            variants={container(1.2)}
            initial="hidden"
            animate="visible"
            className="inline-block mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg font-medium shadow-md hover:scale-105 transition-transform"
          >
            Contact Me
          </motion.a>
        </div>

        {/* RIGHT SECTION */}
        <div className="w-full lg:w-1/2 flex justify-center mt-16">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            src={profilePic}
            alt="Bavith L Suvarna"
            className="mb-10 w-40 h-40 sm:w-60 sm:h-60 lg:w-72 lg:h-72 object-cover rounded-full shadow-lg dark:bg-neutral-900"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
