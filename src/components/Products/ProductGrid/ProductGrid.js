import React, { useState } from 'react';
import './ProductGrid.css';

const ProductCard = ({ product, onClick }) => (
  <div className="product-card" onClick={() => onClick(product)}>
    <img src={product.images[0]} alt={product.name} />
    <div className="product-info">
      <h3 className="product-name">{product.name}</h3>
    </div>
  </div>
);

const SeeMoreButton = ({ shownCount, totalCount, onClick }) => (
  <div className="see-more-container">
    <p className="product-count">
      Showing {shownCount} of {totalCount} products
    </p>
    <button className="see-morre-button" onClick={onClick}>
      See More
    </button>
  </div>
);

const ProductGrid = ({ products, onProductClick }) => {
  const [visibleProducts, setVisibleProducts] = useState(8); // Initial number of visible products

  const showMoreProducts = () => {
    setVisibleProducts(prevCount => Math.min(prevCount + 8, products.length));
  };

  return (
    <div className="product-grid-container">
      <div className="product-grid">
        {products.slice(0, visibleProducts).map((product, i) => (
          <ProductCard key={i} product={product} onClick={onProductClick} />
        ))}
      </div>
      {visibleProducts < products.length && (
        <SeeMoreButton 
          shownCount={visibleProducts} 
          totalCount={products.length} 
          onClick={showMoreProducts}
        />
      )}
    </div>
  );
};

export default ProductGrid;
