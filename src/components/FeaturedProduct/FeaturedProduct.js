// FeaturedProduct.js
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FeaturedProduct.css';
import { productCategories } from "../../data/products";

const FeaturedProduct = () => {
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [isZoomActive, setIsZoomActive] = useState(false);
  const [windowOffset, setWindowOffset] = useState({ x: 0, y: 0 });
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const imageRef = useRef(null);

  const isTouchDevice = () => 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCategoryIndex((prevIndex) => (prevIndex + 1) % productCategories.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    if (isTouchDevice() || !imageRef.current) return;

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

  const handleMouseEnter = () => !isTouchDevice() && setIsZoomActive(true);
  const handleMouseLeave = () => setIsZoomActive(false);

  const currentCategory = productCategories[currentCategoryIndex];

  return (
    <section className="featured-product-section">
      <div className="featured-product-container">
        <div className="featured-product-left">
          <h2>Discover Our <Link to="/products" className="client-text-button">Products</Link> Categories</h2>
          <div className="f-product-info">
            <h3>{currentCategory.name}</h3>
            <p className="f-description">{currentCategory.description}</p>
            <div className="product-nav">
              {productCategories.map((_, index) => (
                <button
                  key={index}
                  className={`nav-dot ${index === currentCategoryIndex ? 'active' : ''}`}
                  onClick={() => setCurrentCategoryIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="featured-product-right">
          <div
            className="product-image"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={imageRef}
          >
            <img src={currentCategory.image} alt={currentCategory.name} className="base-image" />
            <div className={`overlay ${isZoomActive ? 'active' : ''}`} />
            <div
              className="zoom-window"
              style={{
                backgroundImage: `url(${currentCategory.image})`,
                backgroundSize: '1200%',
                backgroundPosition: `${zoomPosition.x * 100}% ${zoomPosition.y * 100}%`,
                opacity: isZoomActive ? 1 : 0,
                left: `${windowOffset.x}px`,
                top: `${windowOffset.y}px`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
