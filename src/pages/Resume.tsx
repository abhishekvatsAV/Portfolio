import { skills } from "../data";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation } from "../animations";
import { useSelector } from "react-redux";
import { RootState } from "../store";
const Resume = () => {
  const theme = useSelector((state: RootState) => state.theme.value);

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
    <motion.div
      className="px-6 py-2"
      variants={routeAnimation}
      initial="intial"
      animate="animate"
      exit="exit"
    >
      {/* edu and exp */}
      <div className="grid">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Internship</h5>
            <p className="font-semibold">Uncody</p>
            <p className="my-3 text-gray-400">
              Creating the most advanced AI-driven web builder tool on the
              internet, constantly refining and enhancing the underlying
              codebase while gaining valuable insights and expertise throughout
              the development journey.
            </p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">
              Electronic And Communication Engineering
            </h5>
            <p className="font-semibold">NSUT EAST CAMPUS</p>
            <p className="my-3 text-gray-400">
              I have recently completed B.Tech in ECE from NSUT EAST CAMPUS with
              CGPA of 8.87
            </p>
          </div>
        </motion.div>
      </div>

      {/* skills and tools */}
      <div className="">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages and Frameworks</h5>
          <motion.div
            className="my-2 flex flex-wrap"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {skills.map((skill) => (
              <motion.div variants={item} key={skill.name}>
                <div
                  className={` text-blue-400 dark:text-white bg-[#E4E7EB] dark:bg-gray-500 m-3 p-2 rounded ${
                    theme === "dark" && "!bg-gray-500 !text-white"
                  } `}
                >
                  {skill.name}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
