import { motion } from "framer-motion";
import myImage from "../assets/old.jpeg"; // Adjust the path based on your component's location.


const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 2.1, ease: "easeOut" } },
};

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const imageVariants = {
  hidden: { clipPath: "inset(0 50% 0 50%)" },
  visible: {
    clipPath: "inset(0 0% 0 0%)",
    transition: { duration: 4.1, ease: "easeInOut" },
  },
};

const HERO_CONTENT = {
  greeting: "Hello, I'm Chintan!✌🏻",
  introduction: "I'm an aspiring software developer.",
  description: "I specialize in creating impactful digital experiences.",
  resumelink: "https://example.com/resume.pdf",
};

const Hero = () => {
  return (
    <section>
      <div className="relative z-10 min-h-screen flex flex-wrap flex-col md:flex-row items-center text-white" id="home">
        {/* Text Content */}
        <motion.div
          className="w-full md:w-1/2 p-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            className="text-2xl md:text-3xl lg:text-5xl my-14"
            variants={textVariants}
          >
            {HERO_CONTENT.greeting}
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl lg:text-4xl mb-4"
            variants={textVariants}
          >
            {HERO_CONTENT.introduction}
          </motion.p>

          <motion.p
            className="text-xl md:text-2xl lg:text-4xl mb-4"
            variants={textVariants}
          >
            {HERO_CONTENT.description}
          </motion.p>

          <motion.a
            className="bg-stone-50 text-stone-900 p-3 lg:p-4 mt-8 inline-block rounded-2xl"
            href={HERO_CONTENT.resumelink}
            download
            rel="noopener noreferrer"
            target="_blank"
            variants={textVariants}
          >
            Download Resume
          </motion.a>
        </motion.div>

        {/* Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center items-center"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <img
            src={myImage}
            alt="Chintan"
            className="w-[300px] h-[300px] rounded-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
