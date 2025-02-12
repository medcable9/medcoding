import React from "react";
import { motion } from "framer-motion";
import "./CompanyInfoSection.css";
import companyImage from "../../assets/images/aa.jpeg";
import { company_info } from "../../data/company_info";

const CompanyInfo = () => {
  const { the_four_features, about_description } = company_info[0];
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
              {about_description}
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
            <div className="feature-icon">{the_four_features[0].icon}</div>
            <h3>{the_four_features[0].title}</h3>
            <p>{the_four_features[0].desc}</p>
          </div>
          <div className="info-item">
            <div className="feature-icon">{the_four_features[1].icon}</div>
            <h3>{the_four_features[1].title}</h3>
            <p>{the_four_features[1].desc}</p>
          </div>
          <div className="info-item">
            <div className="feature-icon">{the_four_features[2].icon}</div>
            <h3>{the_four_features[2].title}</h3>
            <p>{the_four_features[2].desc}</p>
          </div>
          <div className="info-item">
            <div className="feature-icon">{the_four_features[3].icon}</div>
            <h3>{the_four_features[3].title}</h3>
            <p>{the_four_features[3].desc}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyInfo;
