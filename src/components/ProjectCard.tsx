import { IProject } from "../types";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../animations";
import { useSelector } from "react-redux";
import { RootState } from "../store";

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
  const theme = useSelector((state: RootState) => state.theme.value);

  return (
    <div>
      <img
        src={image_path}
        alt={name}
        className="cursor-pointer w-full"
        onClick={() => setShowDetails(id)}
        width="300"
        height="150"
      />
      <p className="my-2 text-center"> {name} </p>

      {showDetails === id && (
        <div
          className={`fixed top-0 left-0 z-10 h-full w-full backdrop-blur-sm flex items-center justify-center min-h-screen`}
        >
          <motion.div
            className={`relative m-auto grid h-auto p-5 text-black bg-gray-100 rounded-lg md:p-10 md:grid-cols-2 gap-x-12 max-w-2xl ${theme === "dark" && "!bg-dark-100 !text-white"} `}
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
                  className={`flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 ${
                    theme === "dark" && "!bg-lightBlack"
                  } `}
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillGithub /> <span>Github</span>
                </a>
                <a
                  href={deployed_url}
                  className={`flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 ${
                    theme === "dark" && "!bg-lightBlack"
                  }`}
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
                    className={`px-2 py-1 my-1 bg-gray-200 rounded-sm ${
                      theme === "dark" && "!bg-lightBlack"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            <button
              onClick={() => setShowDetails(null)}
              className={`absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none ${
                theme === "dark" && "!bg-dark-200"
              }`}
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
