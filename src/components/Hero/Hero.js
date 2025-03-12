import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Hero.css";

const backgrounds = [
  require("../../assets/images/IMG_7494.webp"),
  require("../../assets/images/hero2.webp"),
  require("../../assets/images/hero4.webp"),
  require("../../assets/images/IMG_7503.webp"),
  require("../../assets/images/IMG_7504.webp"),
];

const HeroSection = () => {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
  };

  const prevImage = () => {
    setBgIndex((prevIndex) => (prevIndex - 1 + backgrounds.length) % backgrounds.length);
  };

  return (
    <section className="hero-section">
      <section
        className="hero-background"
        style={{ backgroundImage: `url(${backgrounds[bgIndex]})` }}
      ></section>
      <div className="hero-main">
        {/* <div className="hero-content">
          <h1 className="hero-title">
            <span>Mediterranean Cables</span>
          </h1>
          <h2>Quality Cables Since 2009</h2>
          <p>
            A leading cable manufacturer that delivers reliable and high-quality
            customized solutions for various industries.
          </p>
        </div> */}
      </div>
      <button className="hero-arrow left" onClick={prevImage}>
        <FaChevronLeft />
      </button>
      <button className="hero-arrow right" onClick={nextImage}>
        <FaChevronRight />
      </button>
    </section>
  );
};

export default HeroSection;
