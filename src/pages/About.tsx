import { services } from "../data";
import { motion } from "framer-motion";
import ServiceCard from "../components/ServiceCard";

const About = () => {
  return (
    <div className="page-content">
      <motion.div
        animate={{ scale: 1, opacity: 1 }}
        initial={{ scale: 0, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-2"
      >
        <div className="hero-grid">
          <div>
            <p className="eyebrow">01 / about the navigator</p>
            <h1 className="hero-title">I make data<br /><span>worth trusting.</span></h1>
            <p className="hero-copy">I’m Abhishek Vats, an AWS Data Engineer at TCS. I design quality-first data platforms, event-driven pipelines, and observability systems that help teams move with confidence.</p>
          </div>
          <div className="hero-badge"><strong>5M+</strong>records validated</div>
        </div>
        <div className="metric-strip">
          <div className="metric"><strong>AWS</strong><span>cloud-native toolkit</span></div>
          <div className="metric"><strong>8.9 / 10</strong><span>NSUT engineering</span></div>
          <div className="metric"><strong>600+</strong><span>problems solved</span></div>
        </div>
      </motion.div>
      <div className="section-rule">
        <motion.h2
          className="section-title mb-5"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          What I build
        </motion.h2>
        <motion.div className="service-grid">
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
