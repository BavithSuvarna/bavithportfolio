import { ACHIEVEMENTS } from "../constants";
import { motion } from "framer-motion";

const Achievements = () => {
  return (
    <div id="achievements" className="border-b border-neutral-900 pb-16">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        ACHIEVEMENTS
      </motion.h2>

      {/* Grid Container for Side-by-Side Views */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">
        {ACHIEVEMENTS.map((achievement, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="flex flex-col bg-neutral-900/30 p-6 rounded-2xl border border-neutral-800 hover:border-purple-500/30 transition duration-300"
          >
            {/* Header: Title */}
            <h6 className="mb-4 text-xl font-bold flex-shrink-0">{achievement.title}</h6>

            {/* Content: Images + Description */}
            <div className="flex flex-col gap-6">
              {/* Images Grid */}
              {achievement.images?.length > 0 && (
                <div className="grid grid-cols-2 gap-3 w-full">
                  {achievement.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`Achievement Image ${idx + 1}`}
                      className={`w-full object-cover rounded-lg ${achievement.images.length === 2 ? "h-72" : "h-48"
                        }`}
                    />
                  ))}
                </div>
              )}

              {/* Description & Tags */}
              <div>
                <p className="mb-4 text-neutral-400 text-sm leading-relaxed">
                  {achievement.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {achievement.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="rounded bg-neutral-800 px-2 py-1 text-xs font-medium text-purple-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
