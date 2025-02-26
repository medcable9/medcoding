// FeaturedProduct.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FeaturedProduct.css';
import { productCategories } from "../../data/products";

const FeaturedProduct = () => {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCategoryIndex((prevIndex) => (prevIndex + 1) % productCategories.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
          <div className="product-image">
            <img src={currentCategory.image} alt={currentCategory.name} className="base-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
