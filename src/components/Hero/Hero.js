import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Hero.css";

const backgrounds = [
  require("../../assets/images/IMG_7494.webp"),
  require("../../assets/images/hero2.webp"),
  require("../../assets/images/hero4.webp"),
  require("../../assets/images/IMG_7503.webp"),
  require("../../assets/images/IMG_7506.webp"),
];

const HeroSection = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const intervalRef = useRef(null); // Store interval reference

  useEffect(() => {
    startSlideshow(); // Start auto-slide on mount

    return () => clearInterval(intervalRef.current); // Cleanup on unmount
  }, []);

  const startSlideshow = () => {
    clearInterval(intervalRef.current); // Clear existing interval
    intervalRef.current = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000);
  };

  const nextImage = () => {
    setBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    startSlideshow(); // Restart the slideshow
  };

  const prevImage = () => {
    setBgIndex((prevIndex) => (prevIndex - 1 + backgrounds.length) % backgrounds.length);
    startSlideshow(); // Restart the slideshow
  };

  return (
    <section className="hero-section">
      <section
        className="hero-background"
        style={{ backgroundImage: `url(${backgrounds[bgIndex]})` }}
      ></section>
      <div className="hero-main">
        {/* Hero Content Here */}
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
