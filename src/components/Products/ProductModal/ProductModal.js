import React, { useState } from "react";
import "./ProductModal.css";

const ProductModal = ({ product, onClose }) => {
  const [activeTab, setActiveTab] = useState("overview");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="product-modal active">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>&times;</button>
        <h2>{product.name}</h2>
        <div className="image-slider">
          <button className="prev-btn" onClick={prevImage}>&lt;</button>
          <img src={product.images[currentImageIndex]} alt={product.name} />
          <button className="next-btn" onClick={nextImage}>&gt;</button>
        </div>
        <div className="modal-tabs">
          {["overview", "technical", "documents"].map((tab) => (
            <button 
              key={tab}
              className={activeTab === tab ? "active" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
        <div className="tab-content">
          {activeTab === "overview" && (
            <div className="overview-content">
              <p><strong>Construction:</strong> {product.construction}</p>
              <p><strong>Application:</strong> {product.application}</p>
            </div>
          )}
          {activeTab === "technical" && (
            <div>
              <p><strong>Technical Characteristics:</strong> {product.technicalCharacteristics}</p>
              <p><strong>Standards:</strong> {product.standards}</p>
              <p><strong>Core Identification:</strong> {product.coreIdentification}</p>
            </div>
          )}
          {activeTab === "documents" && (
            <div className="document-links">
              <a href={product.datasheetPdf} target="_blank" rel="noopener noreferrer">View Datasheet</a>
              <a href={product.catalogPdf} target="_blank" rel="noopener noreferrer">View Catalog</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
