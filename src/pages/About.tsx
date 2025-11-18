import { services } from "../data";
import { motion } from "framer-motion";
import ServiceCard from "../components/ServiceCard";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const About = () => {
  const theme = useSelector((state: RootState) => state.theme.value);

  return (
    <div className="flex flex-col flex-grow px-4 sm:px-6 pt-1 overflow-y-auto" style={{ height: "calc(100vh - 120px)", maxHeight: "65vh" }}>
      <motion.div
        animate={{ scale: 1, opacity: 1 }}
        initial={{ scale: 0, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <motion.h5
          className={`my-3 text-sm sm:text-base font-normal leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
        >
          My name is <span className="font-semibold text-blue-500">Abhishek Vats</span> and I'm from Delhi, India.
          I'm currently working as a <span className="font-semibold">Software Developer</span> at
          <span className="font-semibold"> Tata Consultancy Services (TCS)</span>, where I develop
          monitoring solutions using AWS OpenSearch and build scalable applications.
        </motion.h5>
        <motion.h5
          className={`my-3 text-sm sm:text-base font-normal leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
        >
          I completed my Bachelor's degree in <span className="font-semibold">Electronics and Communication Engineering</span> from
          <span className="font-semibold"> NSUT EAST CAMPUS, Delhi</span> with a CGPA of <span className="font-semibold">8.87</span>.
          I am passionate about programming and have developed my skills through various projects,
          including full-stack applications, AI-powered platforms, and cloud-based solutions.
        </motion.h5>
      </motion.div>
      <div
        className={`flex-grow p-4 sm:p-6 mt-5 rounded-lg shadow-lg ${theme === "dark" ? "!bg-dark-100" : "bg-gray-400"
          }`}
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <motion.h6
          className="my-3 text-xl sm:text-2xl font-bold tracking-wide"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          What I Offer
        </motion.h6>
        <motion.div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              transition={{ delay: 0.2 * index }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
