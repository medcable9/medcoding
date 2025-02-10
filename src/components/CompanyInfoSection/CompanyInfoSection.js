import React from "react";
import { motion } from "framer-motion";
import "./CompanyInfoSection.css";
import companyImage from "../../assets/images/aa.jpeg";

const CompanyInfo = () => {
  return (
    <section className="company-info">
      <div className="info-container">
        <div className="info-content">
          <div className="info-text">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              About Med Cables Company
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Mediterranean Cables is a leading manufacturer of high-quality cables for a variety of industries, with over 14 years of experience. We've built a reputation for providing reliable, durable, and cost-effective solutions that meet the needs of our clients. Our state-of-the-art facility and advanced technology allow us to produce cables that meet the highest standards for performance, reliability, and safety.
            </motion.p>
          </div>
          <motion.div
            className="info-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <img src={companyImage} alt="Med Cables Company" />
          </motion.div>
        </div>
        <motion.div
          className="info-grid"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="info-item">
            <div className="feature-icon">💰</div>
            <h3>Competitive Pricing</h3>
            <p>Best value for your budget</p>
          </div>
          <div className="info-item">
            <div className="feature-icon">⏱️</div>
            <h3>On-Time, Every Time</h3>
            <p>Reliable delivery schedules</p>
          </div>
          <div className="info-item">
            <div className="feature-icon">✅</div>
            <h3>ISO Certified</h3>
            <p>Standards you can trust</p>
          </div>
          <div className="info-item">
            <div className="feature-icon">🛠️</div>
            <h3>Advanced Testing</h3>
            <p>Reliable testing methods</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyInfo;
