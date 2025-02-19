import React, { useState, useRef, useEffect } from 'react';
import './FeaturedProduct.css';
import dc1 from "../../assets/images/dc1.png";
import dc2 from "../../assets/images/dc2.png";
import dc3 from "../../assets/images/dc3.png";

const FeaturedProduct = () => {
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [isZoomActive, setIsZoomActive] = useState(false);
  const [windowOffset, setWindowOffset] = useState({ x: 0, y: 0 });
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const imageRef = useRef(null);

  const products = [
    {
      image: dc1,
      name: "Med Cable Pro Series",
      description: "Our most advanced medical cable, designed for durability and flexibility.",
      features: [
        { id: 1, feature: "High-Flex Life" },
        { id: 2, feature: "Medical-Grade Materials" },
        { id: 3, feature: "Customizable Length" },
      ]
    },
    {
      image: dc2,
      name: "Ultra-Thin Cable",
      description: "Sleek and flexible cable for tight spaces in medical equipment.",
      features: [
        { id: 1, feature: "Space-Saving Design" },
        { id: 2, feature: "Enhanced Signal Integrity" },
        { id: 3, feature: "Lightweight Construction" },
      ]
    },
    {
      image: dc3,
      name: "Heavy-Duty Medical Cable",
      description: "Robust cable for high-stress medical environments.",
      features: [
        { id: 1, feature: "Extra Durability" },
        { id: 2, feature: "High Current Capacity" },
        { id: 3, feature: "Shielded Design" },
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProductIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 5000); // Change product every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    if (!imageRef.current) return;

    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    setWindowOffset({
      x: x - (0.35 * width) / 2,
      y: y - (0.35 * height) / 2,
    });

    setZoomPosition({
      x: x / width,
      y: y / height,
    });
  };

  const handleMouseEnter = () => {
    setIsZoomActive(true);
  };

  const handleMouseLeave = () => {
    setIsZoomActive(false);
  };

  const currentProduct = products[currentProductIndex];

  return (
    <section className="interactive-product-spotlight">
      <h2>Explore Our Featured Products</h2>
      <div className="product-container">
        <div
          className="product-image"
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={imageRef}
        >
          <img src={currentProduct.image} alt="Product" className="base-image" />
          <div className={`overlay ${isZoomActive ? 'active' : ''}`} />
          <div
            className="zoom-window"
            style={{
              backgroundImage: `url(${currentProduct.image})`,
              backgroundSize: `${300 / 0.25}%`,
              backgroundPosition: `${zoomPosition.x * 100}% ${zoomPosition.y * 100}%`,
              opacity: isZoomActive ? 1 : 0,
              left: `${windowOffset.x}px`,
              top: `${windowOffset.y}px`,
            }}
          />
        </div>
        <div className="product-info">
          <h3>{currentProduct.name}</h3>
          <p>{currentProduct.description}</p>
          <div className="feature-list">
            {currentProduct.features.map((feature) => (
              <div key={feature.id} className="feature-item">
                <div className="feature-background">{feature.feature}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
