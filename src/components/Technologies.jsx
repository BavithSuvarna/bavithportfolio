import { RiReactjsLine } from "react-icons/ri";       // React
import { SiFlask } from "react-icons/si";             // Flask
import { DiJava, DiMongodb } from "react-icons/di";              // Java
import { FaCss3Alt, FaPython,FaNodeJs, FaGitAlt } from "react-icons/fa";            // Python
import { SiJavascript } from "react-icons/si";  // Blockchain
import { SiTailwindcss } from "react-icons/si";             // MySQL
import { SiTableau } from "react-icons/si";           // Tableau
import { FaHtml5} from "react-icons/fa";           // Tableau

import {animate, motion} from "framer-motion";

const iconVariants = (duration) => ({
    initial : {y:-10},
    animate:{
        y: [10,-10],
        transition: {
            duration: duration,
            ease : "linear",
            repeat : Infinity,
            repeatType : "reverse",
        },
    },
});

const Technologies = () => {
  return (
    <section id="technologies">
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2 
      whileInView={{opacity:1, y:0}}
            initial={{opacity:0,y:-100}}
            transition={{duration:1}}
      className="my-20 text-center text-4xl">TECH ARSENAL</motion.h2>
      <motion.div 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1.5}}
             className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
  variants={iconVariants(2.5)}
  initial="initial"
  animate="animate"
  className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center"
>
  <RiReactjsLine className="text-7xl text-[#61DAFB]" />
  <p className="mt-2 text-white text-sm">React</p>
</motion.div>

<motion.div 
  variants={iconVariants(3)}
  initial="initial"
  animate="animate"
  className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center"
>
  <SiFlask className="text-7xl text-white" />
  <p className="mt-2 text-white text-sm">Flask</p>
</motion.div>

<motion.div 
  variants={iconVariants(5)}
  initial="initial"
  animate="animate"
  className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center"
>
  <DiJava className="text-7xl text-[#007396]" />
  <p className="mt-2 text-white text-sm">Java</p>
</motion.div>

<motion.div 
  variants={iconVariants(2)}
  initial="initial"
  animate="animate"
  className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center"
>
  <FaGitAlt className="text-7xl text-[#007396]" />
  <p className="mt-2 text-white text-sm">Git</p>
</motion.div>

<motion.div 
  variants={iconVariants(4)}
  initial="initial"
  animate="animate"
  className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center"
>
  <FaNodeJs className="text-7xl text-[#339933]" />
  <p className="mt-2 text-white text-sm">Node</p>
</motion.div>

<motion.div 
  variants={iconVariants(3)}
  initial="initial"
  animate="animate"
  className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center"
>
  <DiMongodb className="text-7xl text-[#47A248]" />
  <p className="mt-2 text-white text-sm">MongoDB</p>
</motion.div>

<motion.div 
  variants={iconVariants(5)}
  initial="initial"
  animate="animate"
  className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center"
>
  <FaPython className="text-7xl text-[#3776AB]" />
  <p className="mt-2 text-white text-sm">Python</p>
</motion.div>

<motion.div 
  variants={iconVariants(2)}
  initial="initial"
  animate="animate"
  className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center"
>
  <SiJavascript className="text-7xl text-[#F7DF1E]" />
  <p className="mt-2 text-white text-sm">JavaScript</p>
</motion.div>

<motion.div 
  variants={iconVariants(4)}
  initial="initial"
  animate="animate"
  className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center"
>
  <SiTailwindcss className="text-7xl text-[#38BDF8]" />
  <p className="mt-2 text-white text-sm">Tailwind</p>
</motion.div>

<motion.div 
  variants={iconVariants(6)}
  initial="initial"
  animate="animate"
  className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center"
>
  <FaHtml5 className="text-7xl text-[#E34F26]" />
  <p className="mt-2 text-white text-sm">HTML</p>
</motion.div>

<motion.div 
  variants={iconVariants(3)}
  initial="initial"
  animate="animate"
  className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center"
>
  <FaCss3Alt className="text-7xl text-[#1572B6]" />
  <p className="mt-2 text-white text-sm">CSS</p>
</motion.div>

<motion.div 
  variants={iconVariants(6)}
  initial="initial"
  animate="animate"
  className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center"
>
  <SiTableau className="text-7xl text-[#E97627]" />
  <p className="mt-2 text-white text-sm">Tableau</p>
</motion.div>

      </motion.div>
    </div>
    </section>
  );
};

export default Technologies;


