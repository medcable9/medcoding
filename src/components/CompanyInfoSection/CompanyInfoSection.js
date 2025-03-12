import React, { useState, useEffect } from "react";
import "./CompanyInfoSection.css";
import { company_info } from "../../data/company_info";

const images = [
  require("../../assets/images/IMG_7494.webp"),
  require("../../assets/images/5W4A0180.jpeg"),
  // require("../../assets/images/IMG_7503.webp"),
  // require("../../assets/images/IMG_7506.webp"),
  // require("../../assets/images/hero2.webp"),
];

const CompanyInfo = () => {
  const [bgIndex, setBgIndex] = useState(0);
  useEffect(() => {
      const interval = setInterval(() => {
        setBgIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
  
      return () => clearInterval(interval);
    }, []);
  const { the_four_features, about_description } = company_info[0];
  return (
    <section className="company-info">
      <div className="info-container">
        <div className="info-content">
          <div className="info-text">
            <h2>About Med Cables Company</h2>
            <p>{about_description}</p>
          </div>
          <div className="info-image" style={{ backgroundImage: `url(${images[bgIndex]})` }}></div>
        </div>
        <div className="info-grid" >
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
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;
