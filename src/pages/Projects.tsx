import ProjectCard from "../components/ProjectCard";
import { projects } from "../data";
import { motion } from "framer-motion";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
const Projects = () => {
  const theme = useSelector((state: RootState) => state.theme.value);
  const [showDetails, setShowDetails] = useState<number | null>(null);

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="px-5 py-2 overflow-y-scroll" style={{ height: "65vh" }}>
      <motion.div
        className="grid grid-cols-12 gap-4 my-3"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project) => (
          <motion.div
            className={`col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 ${
              theme === "dark" && "!bg-dark-200"
            } `}
            variants={item}
            key={project.name}
          >
            <ProjectCard
              project={project}
              showDetails={showDetails}
              setShowDetails={setShowDetails}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
