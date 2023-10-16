import { services } from "../data";
import { motion } from "framer-motion";
import ServiceCard from "../components/ServiceCard";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const About = () => {
  const theme = useSelector((state: RootState) => state.theme.value);

  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <motion.h5
        animate={{ scale: 1 }}
        initial={{ scale: 0 }}
        className={`my-3 text-base font-normal text-gray-400 `}
      >
        My name is Abhishek Vats and I'm from Delhi, India. I have recently
        completed my Bachelor's degree in Electronics and Communication
        Engineering from NSUT EAST CAMPUS, Delhi. I have an impressive academic
        record with a CGPA of 8.87. I am passionate about programming and have
        developed my skills through various courses and projects.
      </motion.h5>
      <div
        className={`flex-grow p-4 mt-5 bg-gray-400 ${
          theme === "dark" && "!bg-dark-100"
        }`}
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wide">What I Offer</h6>
        <motion.div className="grid gap-6 lg:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              className={`col-span-2 p-2 bg-gray-200 rounded-lg mg:col-span-1 ${
                theme === "dark" && "!bg-lightBlack"
              } `}
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
