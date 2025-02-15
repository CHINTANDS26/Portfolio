import { motion } from "framer-motion";

const ABOUT_CONTENT = {
  paragraphs: [
    "I am Chintan D S, a passionate Electronics and Communication Engineering student from K S Institute of Technology with a strong foundation in circuit design, signal processing, and communication systems.",
    "I specialize in creating innovative projects, such as an Arduino-based amphibious hovercraft and a water level sensor with an indicator. My expertise spans across multiple programming languages like Python, Java, C, and tools like MATLAB and VHDL/Verilog.",
    "Apart from my technical skills, I excel in project management, team collaboration, and marketing. My ability to effectively communicate and convince others makes me a strong candidate for leadership roles.",
    "As a division-level volleyball player, I understand the value of discipline, teamwork, and achieving goals on time. I’m also an enthusiastic Formula 1 fan and dream of watching the British GP live someday."
  ],
};

const About = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="px-6 py-10" id="about">
      <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">
        About
      </h1>
      <div className="h-1 w-20 mb-8 bg-white"></div>
      <div className="max-w-4xl mx-auto">
        {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
          <motion.p
            key={index}
            className="text-xl md:text-2xl lg:text-4xl mb-10 leading-relaxed"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={textVariants}
          >
            {paragraph}
          </motion.p>
        ))}
      </div>
    </section>
  );
};

export default About;
