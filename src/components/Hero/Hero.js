import React, { useState, useEffect } from "react";
import "./Hero.css";

const backgrounds = [
  require("../../assets/images/hero3.jpg"),
  require("../../assets/images/hero2.jpeg"),
  require("../../assets/images/IMG_7503.JPG"),
  require("../../assets/images/IMG_7504.JPG"),
];

const HeroSection = () => {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      <section
        className="hero-background"
        style={{ backgroundImage: `url(${backgrounds[bgIndex]})` }}
      ></section>
      <div className="hero-main">
        <div className="hero-content">
          <h1 className="hero-title">
            <span>Mediterranean Cables</span>
          </h1>
          <h2>Quality Cables Since 2009</h2>
          <p>
            A leading cable manufacturer that delivers reliable and high-quality
            customized solutions for various industries.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
