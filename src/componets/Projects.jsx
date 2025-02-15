import { motion } from "framer-motion";
import project1 from "../assets/projects1.webp";
import project2 from "../assets/projects2.webp";
import project3 from "../assets/projects3.webp";

const projectData = [
  {
    image: project1,
    title: "Project 1",
    description: "A brief description of Project 1.",
    link: "https://example.com/project1",
  },
  {
    image: project2,
    title: "Project 2",
    description: "A brief description of Project 2.",
    link: "https://example.com/project2",
  },
  {
    image: project3,
    title: "Project 3",
    description: "A brief description of Project 3.",
    link: "https://example.com/project3",
  },
];

const Projects = () => {
  const projectVariant = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: -40,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      y: 0,
      transition: {
        duration: 2.5,
        ease: "easeOut",
        type: "spring",
        bounce: 0.6,
      },
    },
  };

  return (
    <section className="px-6 py-10" id="work">
      <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">
        Work
      </h1>
      <div className="h-1 w-20 mb-8 bg-white"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            className="relative rounded-lg overflow-hidden h-[500px] transition transform"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={projectVariant}
          >
            <img
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-full transition-opacity duration-300"
            />
            <div className="absolute inset-0 z-20 p-6 flex flex-col justify-between bg-black/30 text-white">
              <h2 className="text-2xl font-medium mb-4">{project.title}</h2>
              <p className="mb-4 flex-grow">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-stone-900 rounded-full py-2 px-4 text-sm hover:bg-gray-100 text-center"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
