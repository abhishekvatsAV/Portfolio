import { IProject } from "../types";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../animations";

const ProjectCard: React.FC<{
  project: IProject;
  showDetails: null | number;
  setShowDetails: (id: null | number) => void;
}> = ({
  project: {
    id,
    name,
    image_path,
    deployed_url,
    description,
    github_url,
    key_techs,
  },
  showDetails,
  setShowDetails,
}) => {
  return (
    <div>
      <img
        src={image_path}
        alt={name}
        className="cursor-pointer w-full transition-transform hover:scale-[1.02]"
        onClick={() => setShowDetails(id)}
        width="300"
        height="150"
      />
      <div className="project-tile-content">
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {key_techs.slice(0, 4).map((tech) => <span className="tag" key={tech}>{tech}</span>)}
        </div>
        <div className="project-links flex gap-4">
          <a href={github_url} target="_blank" rel="noreferrer">Source ↗</a>
          {deployed_url !== "#" && <a href={deployed_url} target="_blank" rel="noreferrer">Live demo ↗</a>}
        </div>
      </div>

      {showDetails === id && (
        <div
          className={`fixed top-0 left-0 z-10 h-full w-full backdrop-blur-sm flex items-center justify-center min-h-screen`}
        >
          <motion.div
            className="relative m-auto grid h-auto p-5 text-[var(--ink)] bg-[var(--paper)] rounded-lg md:p-10 md:grid-cols-2 gap-x-12 max-w-2xl border border-[var(--line)]"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div variants={stagger} initial="intial" animate="animate">
              <motion.div
                variants={fadeInUp}
                className="border-4 border-gray-100 items-center justify-center flex "
              >
                <img src={image_path} alt={name} width="300" height="150" />
              </motion.div>
              <motion.div
                className="flex justify-center my-4 space-x-3 w-full"
                variants={fadeInUp}
              >
                <a
                  href={github_url}
                  className="flex items-center px-4 py-2 space-x-3 text-lg bg-[var(--accent-soft)]"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillGithub /> <span>Github</span>
                </a>
                <a
                  href={deployed_url}
                  className="flex items-center px-4 py-2 space-x-3 text-lg bg-[var(--accent-soft)]"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillProject /> <span>Project</span>
                </a>
              </motion.div>
            </motion.div>

            <motion.div variants={stagger} initial="intial" animate="animate">
              <motion.h2
                variants={fadeInUp}
                className="mb-3 text-xl font-medium md:text-2xl"
              >
                {name}
              </motion.h2>
              <motion.h3 variants={fadeInUp} className="mb-3 font-medium">
                {description}
              </motion.h3>
              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap mt-5 gap-3 text-sm tracking-wider"
              >
                {key_techs.map((tech) => (
                  <span
                    key={tech}
                    className="tag"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            <button
              onClick={() => setShowDetails(null)}
              className="absolute p-1 bg-[var(--accent-soft)] rounded-full top-3 right-3 focus:outline-none"
            >
              <MdClose size={30} />{" "}
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
