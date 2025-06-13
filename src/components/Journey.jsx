import journeyImg1 from "../assets/SahyadriLogo.png";
import journeyImg2 from "../assets/PPCLogo.jpeg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="journey">
      <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-14 text-center text-4xl font-semibold">
          MY <span className="text-neutral-500">JOURNEY</span>
        </h2>

        {/* First Journey Block */}
        <motion.div
        //   whileInView={{ opacity: 1, x: 0 }}
        //   initial={{ opacity: 0, x: -100 }}
        //   transition={{ duration: 1 }}
          className="flex flex-col items-center lg:flex-row mb-6 hover:bg-neutral-800 rounded-xl transition duration-300 group px-4 py-3 cursor-pointer"
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
              <strong className="text-white text-2xl">Sahyadri College of Engineering and Management</strong>
              <br />
              I'm currently pursuing my B.E in Computer Science & Engineering with a CGPA of 9.38.
            </p>
          </div>
        </motion.div>

        {/* Second Journey Block */}
        <motion.div
        //   whileInView={{ opacity: 1, x: 0 }}
        //   initial={{ opacity: 0, x: -100 }}
        //   transition={{ duration: 1 }}
          className="flex flex-col items-center lg:flex-row mb-4 hover:bg-neutral-800 rounded-xl transition duration-300 group px-4 py-3 cursor-pointer"
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
              Scored 93.5% in my 12th boards, a proud moment for me and my family!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
