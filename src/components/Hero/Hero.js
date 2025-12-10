import React, { useState, useEffect, useRef, useCallback } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Hero.css";

const backgrounds = [
  require("../../assets/images/IMG_7494.webp"),
  require("../../assets/images/hero2.webp"),
  require("../../assets/images/hero4.webp"),
  require("../../assets/images/11.webp"),
  require("../../assets/images/IMG_4106.webp"),
  require("../../assets/images/IMG_7503.webp"),
  require("../../assets/images/IMG_7506.webp"),
];

const HeroSection = () => {
  const [bgIndex, setBgIndex] = useState(0);
const [fade, setFade] = useState(false);
const intervalRef = useRef(null);

const triggerFadeTo = useCallback((newIndex) => {
  setFade(true); // Start fade out
  setTimeout(() => {
    setBgIndex(newIndex);  // Update image after fade out
    setFade(false);        // Fade in new image
  }, 700); // Match this to the CSS transition duration
}, []);



  const restartSlideshow = useCallback(() => {
  clearInterval(intervalRef.current);
  intervalRef.current = setInterval(() => {
    triggerFadeTo((prev) => (prev + 1) % backgrounds.length);
  }, 5000);
}, [triggerFadeTo]);

useEffect(() => {
  restartSlideshow();
  return () => clearInterval(intervalRef.current);
}, [restartSlideshow]);


  const nextImage = () => {
  const next = (bgIndex + 1) % backgrounds.length;
  triggerFadeTo(next);
  restartSlideshow();
};

const prevImage = () => {
  const prev = (bgIndex - 1 + backgrounds.length) % backgrounds.length;
  triggerFadeTo(prev);
  restartSlideshow();
};


  return (
    <section className="hero-section">
  <div
    className={`hero-background ${fade ? "fade-out" : "fade-in"}`}
    style={{ backgroundImage: `url(${backgrounds[bgIndex]})` }}
  />
  <div className="hero-main">{/* Hero content */}</div>
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


/*
import React, { useState, useEffect, useRef, useCallback } from "react";
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
const [prevIndex, setPrevIndex] = useState(0);
const [fade, setFade] = useState(false);
const intervalRef = useRef(null);

  const triggerFade = useCallback((newIndex) => {
    setPrevIndex(bgIndex); // Save the current before updating
    setFade(true);
    setTimeout(() => {
      setBgIndex(newIndex);
      setFade(false);
    }, 500); // Match this to CSS fade duration
  }, [bgIndex]);


  const startSlideshow = useCallback(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      triggerFade((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
  }, [triggerFade]);

  useEffect(() => {
    startSlideshow();
    return () => clearInterval(intervalRef.current);
  }, [startSlideshow]);

  const nextImage = () => {
    triggerFade((bgIndex + 1) % backgrounds.length);
    startSlideshow();
  };

  const prevImage = () => {
    triggerFade((bgIndex - 1 + backgrounds.length) % backgrounds.length);
    startSlideshow();
  };

  return (
    <section className="hero-section">
  <div className="hero-background-wrapper">
    <div
      className={`hero-background ${fade ? "fade-out" : "fade-in"}`}
      style={{ backgroundImage: `url(${backgrounds[bgIndex]})` }}
    />
    <div
      className={`hero-background ${fade ? "fade-in" : "fade-out"}`}
      style={{ backgroundImage: `url(${backgrounds[prevIndex]})` }}
    />
  </div>

  <div className="hero-main"></div>
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
*/