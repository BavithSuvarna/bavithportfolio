// Achievements.jsx
import { ACHIEVEMENTS } from "../constants";
import { motion } from "framer-motion";

const Achievements = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        ACHIEVEMENTS
      </motion.h2>
      <div>
        {ACHIEVEMENTS.map((achievement, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.5 }}
              className="w-full lg:w-1/4"
            >
              <div className="grid grid-cols-2 gap-2">
                <img
                  src={achievement.image1}
                  width={150}
                  height={150}
                  alt="Achievement Image 1"
                  className="mb-2 rounded object-cover"
                />
                <img
                  src={achievement.image2}
                  width={150}
                  height={150}
                  alt="Achievement Image 2"
                  className="mb-2 rounded object-cover"
                />
                <img
                  src={achievement.image3}
                  width={150}
                  height={150}
                  alt="Achievement Image 3"
                  className="mb-2 rounded object-cover"
                />
                <img
                  src={achievement.image4}
                  width={150}
                  height={150}
                  alt="Achievement Image 4"
                  className="mb-2 rounded object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1.5 }}
              className="w-full max-w-xl lh:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{achievement.title}</h6>
              <p className="mb-4 text-neutral-400">{achievement.description}</p>
              {achievement.technologies.map((tech, index) => (
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
  );
};

export default Achievements;