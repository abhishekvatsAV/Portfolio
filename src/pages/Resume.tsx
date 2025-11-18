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
      className="px-4 sm:px-6 py-2 overflow-y-auto"
      style={{ height: "calc(100vh - 120px)", maxHeight: "65vh" }}
      variants={routeAnimation}
      initial="intial"
      animate="animate"
      exit="exit"
    >
      {/* edu and exp */}
      <div className="grid gap-6">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-xl sm:text-2xl font-bold">Experience</h5>
          <div className={`p-4 rounded-lg ${theme === "dark" ? "bg-dark-200" : "bg-gray-100"
            }`}>
            <h5 className="my-2 text-lg sm:text-xl font-bold">Software Developer</h5>
            <p className="font-semibold text-blue-500 text-sm sm:text-base">Tata Consultancy Services (TCS)</p>
            <p className={`my-1 text-xs sm:text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
              Jun 2024 - Present | Ahmedabad, India
            </p>
            <ul className="my-3 space-y-2 text-xs sm:text-sm text-gray-400 list-disc list-inside">
              <li>Developed monitoring solutions for Company BMO, leveraging AWS OpenSearch (cluster-based and serverless collections) for centralized logging, metrics, and tracing.</li>
              <li>Designed real-time dashboards and implemented anomaly detection to enhance system reliability.</li>
              <li>Built a train-ticketing system during ILP training using the MERN stack—React for front-end and Node.js, Express.js, MongoDB for back-end.</li>
            </ul>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-xl sm:text-2xl font-bold">Education</h5>
          <div className={`p-4 rounded-lg ${theme === "dark" ? "bg-dark-200" : "bg-gray-100"
            }`}>
            <h5 className="my-2 text-lg sm:text-xl font-bold">
              Electronic And Communication Engineering
            </h5>
            <p className="font-semibold text-blue-500 text-sm sm:text-base">NSUT EAST CAMPUS</p>
            <p className={`my-3 text-sm sm:text-base ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
              Completed B.Tech in ECE from NSUT EAST CAMPUS with CGPA of 8.87
            </p>
          </div>
        </motion.div>
      </div>

      {/* skills and tools */}
      <div className="mt-6">
        <div>
          <h5 className="my-3 text-xl sm:text-2xl font-bold">Languages and Frameworks</h5>
          <motion.div
            className="my-2 flex flex-wrap gap-2 sm:gap-3"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {skills.map((skill) => (
              <motion.div variants={item} key={skill.name}>
                <div
                  className={`text-xs sm:text-sm text-blue-400 dark:text-white bg-[#E4E7EB] dark:bg-gray-500 m-1 sm:m-3 p-2 rounded ${theme === "dark" && "!bg-gray-500 !text-white"
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
