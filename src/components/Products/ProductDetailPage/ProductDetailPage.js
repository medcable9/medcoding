import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { productCategories } from "../../../data/products";
import "./ProductDetailPage.css";

const DetailSection = ({ title, content, expanded, toggleSection }) => {
    return (
        <div className={`detail-section ${expanded ? 'expanded' : ''}`} onClick={toggleSection}>
            <div className="detail-header">{title}</div>
            <div className="detail-content">
                {expanded && <div dangerouslySetInnerHTML={{ __html: content }} />}
            </div>
        </div>
    );
};

const ProductDetailPage = () => {
    const { productId } = useParams();
    const [expandedSection, setExpandedSection] = useState(null);
    const [currentImage, setCurrentImage] = useState(null);

    const product = productCategories
        .flatMap(cat => cat.products)
        .find(p => p.name === productId);

    useEffect(() => {
        if (product && product.images_dict && Object.keys(product.images_dict).length > 0) {
            setCurrentImage(Object.keys(product.images_dict)[0]); // Set first image URL as default
        }
    }, [product]);

    const toggleSection = (section) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    const handleThumbnailClick = (image) => {
        setCurrentImage(image);
    };

    if (!product) {
        return (
            <div className="product-detail-page">
                <h2>Product not found</h2>
                <Link to="/products" className="back-link">←</Link>
            </div>
        );
    } 

    return (
        <div className="product-detail-page">
            <div className="product-container">
                <div className="product-images">
                    <img src={currentImage} alt={product.name} className="main-image" />
                    
                    <div className="thumbnail-images">
                        {Object.entries(product.images_dict).map(([image, title], index) => (
                            <div key={index} className="thumbnail-container">
                                <img 
                                    src={image} 
                                    alt={title} 
                                    className="thumbnail"
                                    onClick={() => handleThumbnailClick(image)}
                                />
                                <p className="thumbnail-title">{title}</p> 
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="product-info">
                    <div className="product-name-container">
                        <h1 className="product-name">{product.name}</h1>
                        {product.other_names && <p className="other-names">({product.other_names})</p>}
                    </div>
                    
                    <div className="series_code">
                        <p>Product Series Code:</p>
                        <p><strong>{product.seriesCode}</strong></p>
                    </div>
                    
                    <div className="product-description product-description-section">
                        <h3>Application</h3>
                        <p>{product.application}</p>
                        <div className="catalog-btn-container">
                            <a 
                                href={product.catalogPdf} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="catalog-btn"
                            >
                                View Technical Datasheet
                            </a>
                            <button 
                                onClick={() => {
                                    const pdfWindow = window.open(product.catalogPdf, "_blank");
                                    if (pdfWindow) {
                                        pdfWindow.onload = () => pdfWindow.print();
                                    }
                                }} 
                                className="catalog-btn"
                            >
                                Print PDF
                            </button>
                        </div>
                    </div>

                    <div className="details-section">
                        <DetailSection
                            title="Construction"
                            content={product.construction}
                            expanded={expandedSection === "construction"}
                            toggleSection={() => toggleSection("construction")}
                        />
                        <DetailSection
                            title="Technical Characteristics"
                            content={product.technicalCharacteristics}
                            expanded={expandedSection === "technicalCharacteristics"}
                            toggleSection={() => toggleSection("technicalCharacteristics")}
                        />
                        <DetailSection
                            title="Standards"
                            content={product.standards}
                            expanded={expandedSection === "standards"}
                            toggleSection={() => toggleSection("standards")}
                        />
                        {product.coreIdentification && (
                            <DetailSection
                                title="Core Identification"
                                content={product.coreIdentification}
                                expanded={expandedSection === "coreIdentification"}
                                toggleSection={() => toggleSection("coreIdentification")}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
