// About.jsx (Journey.jsx)
import journeyImg1 from "../assets/SahyadriLogo.png";
import journeyImg2 from "../assets/PPClogo.jpeg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="journey">
      {/* Inline CSS for the hover gradient highlight */}
      <style>{`
        .journey-block {
          position: relative;
          border-radius: 12px;
          padding: 0; /* inner padding is handled by tailwind px-4 py-3 */
          background-image: linear-gradient(90deg, rgba(165,215,232,0.42) 0%, rgba(255,255,255,0) 100%);
          background-size: 0 100%;
          background-repeat: no-repeat;
          transition: background-size 0.4s;
        }
        .journey-block:hover {
          background-size: 100% 100%;
        }
      `}</style>

      <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-14 text-center text-4xl font-semibold">
          MY <span className="text-neutral-500">JOURNEY</span>
        </h2>

        {/* First Journey Block */}
        <motion.div
          className="flex flex-col items-center lg:flex-row mb-6 rounded-xl transition duration-300 group px-4 py-3 cursor-pointer journey-block"
        >
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <img
              className="rounded-xl w-28 h-28 object-cover transition-transform transform group-hover:scale-105 duration-300"
              src={journeyImg1}
              alt="Journey 1"
            />
          </div>
          <div className="w-full lg:w-1/2 mt-4 lg:mt-0 flex items-center justify-center">
            <p className="my-2 max-w-xl py-4 text-center lg:text-left group-hover:text-neutral-300 text-base lg:text-lg leading-relaxed">
              <strong className="text-white text-2xl">
                Sahyadri College of Engineering and Management
              </strong>
              <br />
              I'm currently pursuing my B.E in Computer Science & Engineering with a CGPA of 9.36
            </p>
          </div>
        </motion.div>

        {/* Second Journey Block */}
        <motion.div
          className="flex flex-col items-center lg:flex-row mb-4 rounded-xl transition duration-300 group px-4 py-3 cursor-pointer journey-block"
        >
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <img
              className="rounded-full w-28 h-28 object-cover transition-transform transform group-hover:scale-105 duration-300"
              src={journeyImg2}
              alt="Journey 2"
            />
          </div>
          <div className="w-full lg:w-1/2 mt-4 lg:mt-0 flex items-center justify-center">
            <p className="my-2 max-w-xl py-4 text-center lg:text-left group-hover:text-neutral-300 text-base lg:text-lg leading-relaxed">
              <strong className="text-white text-xl">Poornaprajna PU College</strong>
              <br />
                Scored 93.5% in my 12th boards, which helped me build a strong academic foundation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
