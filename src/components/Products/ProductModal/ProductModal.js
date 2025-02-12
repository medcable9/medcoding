import React, { useState } from "react";
import "./ProductModal.css";

const ProductModal = ({ product, onClose }) => {
  const [activeTab, setActiveTab] = useState("technical");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
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
          {/* Image Slider */}
          <div className="image-slider">
            <button className="prev-btn" onClick={prevImage}>&lt;</button>
            <img src={product.images[currentImageIndex]} alt={product.name} />
            <button className="next-btn" onClick={nextImage}>&gt;</button>
          </div>

          {/* Overview Section */}
          <div className="info-section">
            <p className="product-name"><strong>{product.name}</strong></p>
            <div className="overview-content">
              <p><strong>Construction:</strong> {product.construction}</p>
              <p><strong>Application:</strong> {product.application}</p>
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
            Section 2
          </button>
          <button
            className={`menu-tab ${activeTab === "section3" ? "active" : ""}`}
            onClick={() => setActiveTab("section3")}
          >
            Section 3
          </button>
          <button
            className={`menu-tab ${activeTab === "section4" ? "active" : ""}`}
            onClick={() => setActiveTab("section4")}
          >
            Section 4
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === "technical" && (
            <div className="tab-pane">
              <p><strong>Technical Characteristics:</strong> {product.technicalCharacteristics}</p>
              <p><strong>Standards:</strong> {product.standards}</p>
              <p><strong>Core Identification:</strong> {product.coreIdentification}</p>
            </div>
          )}
          {activeTab === "section2" && (
            <div className="tab-pane">
              <p>Section 2 content goes here...</p>
            </div>
          )}
          {activeTab === "section3" && (
            <div className="tab-pane">
              <p>Section 3 content goes here...</p>
            </div>
          )}
          {activeTab === "section4" && (
            <div className="tab-pane">
              <p>Section 4 content goes here...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
