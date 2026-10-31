import { motion } from "framer-motion";
import { routeAnimation } from "../animations";
const Resume = () => {
  return (
    <motion.div className="page-content" variants={routeAnimation} initial="intial" animate="animate" exit="exit">
      <p className="eyebrow">03 / experience & toolkit</p>
      <h1 className="section-title text-3xl mt-3 mb-8">A practical route through data.</h1>
      <div className="resume-grid">
        <div>
          <h2 className="section-title mb-5">Experience</h2>
          <div className="timeline-item">
            <h3>AWS Data Engineer · TCS</h3>
            <p className="text-[var(--accent)]">Jun 2024 — Present · Ahmedabad</p>
            <ul>
              <li>Built an automated PyDeequ + AWS Glue data quality framework for Snowflake and Apache Iceberg tables exceeding 5M records.</li>
              <li>Orchestrated config-driven, event-based workflows with DynamoDB, SNS, SQS, Lambda, EventBridge, S3, and Snowflake.</li>
              <li>Designed multi-zone S3 data lake pipelines with Glue Crawlers, ECS Fargate, and Redshift targets.</li>
              <li>Shipped Datadog lineage, APM traces, monitors, and dashboards for pipeline health and SLA signals.</li>
            </ul>
          </div>
          <div className="timeline-item">
            <h3>Software Developer · Shree Gommat Tech</h3>
            <p className="text-[var(--accent)]">Jan 2024 — Apr 2024 · Delhi</p>
            <p>Engineered encrypted communication packages and Node.js microservices for COUNTER 5.1 compliance reporting.</p>
          </div>
          <h2 className="section-title mb-5 mt-5">Education</h2>
          <div className="timeline-item">
            <h3>B.Tech, Electronics & Communication Engineering</h3>
            <p>NSUT, Delhi · 2019 — 2023 · GPA 8.9 / 10</p>
          </div>
        </div>
        <div>
          <h2 className="section-title mb-5">Technical compass</h2>
          <div className="skill-group"><h3>Cloud & AWS</h3><p>S3 · Glue · PySpark · Redshift · Athena · ECS Fargate · Lambda · DynamoDB · SNS · SQS · EventBridge · OpenSearch</p></div>
          <div className="skill-group"><h3>Data engineering</h3><p>Apache Iceberg · Snowflake · Amazon Deequ · Data lakes · ETL / ELT · Data modeling · Data lineage</p></div>
          <div className="skill-group"><h3>Observability & DevOps</h3><p>Datadog · APM tracing · Metrics · Logs · Monitors · Dashboards · Docker · Git · CI/CD · Linux</p></div>
          <div className="skill-group"><h3>Languages & databases</h3><p>Python · PySpark · Pandas · SQL · TypeScript · JavaScript · PostgreSQL · MongoDB · C++</p></div>
          <a className="profile-action inline-flex mt-5 text-sm font-semibold" href="https://bit.ly/abhishek_vats_cv" target="_blank" rel="noreferrer">View / download resume ↗</a>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
