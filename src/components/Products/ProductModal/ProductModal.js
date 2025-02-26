import React, { useState } from "react";
import "./ProductModal.css";

const ProductModal = ({ product, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("technical");

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
  };

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("product-modal")) {
      onClose();
    }
  };

  return (
    <div className="product-modal active" onClick={handleOutsideClick}>
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>&times;</button>
        <div className="modal-body">
          {/* Image Section */}
          <div className="image-section">
            {/* Thumbnails */}
            <div className="thumbnail-images">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  onClick={() => handleImageClick(index)}
                  className={currentImageIndex === index ? "active" : ""}
                />
              ))}
            </div>

            {/* Main Image */}
            <div className="main-image">
              <img src={product.images[currentImageIndex]} alt={product.name} />
            </div>
          </div>

          {/* Info Section */}
          <div className="modal-info-section">
            <h3>{product.name}</h3>
            <div className="overview-content">
              <p><strong>Construction:</strong> {product.construction}</p>
            </div>
            <div className="document-links">
              <a href={product.datasheetPdf} target="_blank" rel="noopener noreferrer">View Datasheet</a>
              <a href={product.catalogPdf} target="_blank" rel="noopener noreferrer">View Catalog</a>
            </div>
          </div>
        </div>

        {/* Horizontal Menu Bar */}
        <div className="horizontal-menu">
          <button
            className={`menu-tab ${activeTab === "technical" ? "active" : ""}`}
            onClick={() => setActiveTab("technical")}
          >
            Technical Info
          </button>
          <button
            className={`menu-tab ${activeTab === "section2" ? "active" : ""}`}
            onClick={() => setActiveTab("section2")}
          >
            Standars
          </button>
          <button
            className={`menu-tab ${activeTab === "section3" ? "active" : ""}`}
            onClick={() => setActiveTab("section3")}
          >
            Core Identification
          </button>
          <button
            className={`menu-tab ${activeTab === "section4" ? "active" : ""}`}
            onClick={() => setActiveTab("section4")}
          >
            Application
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === "technical" && (
            <div className="tab-pane">
              <p>{product.technicalCharacteristics}</p>
            </div>
          )}
          {activeTab === "section2" && (
            <div className="tab-pane">
              <p>{product.standards}</p>
            </div>
          )}
          {activeTab === "section3" && (
            <div className="tab-pane">
              <p>{product.coreIdentification}</p>
            </div>
          )}
          {activeTab === "section4" && (
            <div className="tab-pane">
              <p>{product.application}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
