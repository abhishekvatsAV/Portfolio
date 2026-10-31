import ProjectCard from "../components/ProjectCard";
import { projects } from "../data";
import { motion } from "framer-motion";
import { useState } from "react";
const Projects = () => {
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
    <div className="page-content">
      <p className="eyebrow">02 / selected builds</p>
      <h1 className="section-title text-3xl mt-3 mb-2">Things I’ve shipped.</h1>
      <p className="text-sm text-[var(--muted)] mb-7 max-w-xl">A mix of data-minded systems and full-stack experiments. Open a card to trace the stack.</p>
      <motion.div
        className="project-grid"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project) => (
          <motion.div
            className="project-tile"
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
