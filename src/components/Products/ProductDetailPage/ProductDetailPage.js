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
        if (product && product.images.length > 0) {
            setCurrentImage(product.images[0]);
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
                        {product.images.map((image, index) => (
                            <img 
                                key={index} 
                                src={image} 
                                alt={`${product.name} ${index + 1}`} 
                                className="thumbnail"
                                onClick={() => handleThumbnailClick(image)}
                            />
                        ))}
                    </div>
                </div>
                <div className="product-info">
                    <h1 className="product-name">{product.name}</h1>
                    <div className="product-description product-description-section">
                        <h3>Application</h3>
                        <p>{product.application}</p>
                        <a 
                            href={product.catalogPdf} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="catalog-btn"
                        >
                            View Catalog
                        </a>
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
                        <DetailSection
                            title="Core Identification"
                            content={product.coreIdentification}
                            expanded={expandedSection === "coreIdentification"}
                            toggleSection={() => toggleSection("coreIdentification")}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
