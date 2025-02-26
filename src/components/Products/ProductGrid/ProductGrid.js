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

const ToggleViewButton = ({ shownCount, totalCount, onClick, isShowingAll }) => (
  <div className="see-more-container">
    <p className="product-count">
      Showing {shownCount} of {totalCount} products
    </p>
    <button className="toggle-view-button" onClick={onClick}>
      {isShowingAll ? "See Less" : "See More"}
    </button>
  </div>
);

const ProductGrid = ({ products, onProductClick }) => {
  const initialVisibleCount = 8;
  const [visibleProducts, setVisibleProducts] = useState(initialVisibleCount);

  const toggleProductView = () => {
    if (visibleProducts === products.length) {
      setVisibleProducts(initialVisibleCount);
    } else {
      setVisibleProducts(products.length);
    }
  };

  return (
    <div className="product-grid-container">
      <div className="product-grid">
        {products.slice(0, visibleProducts).map((product, i) => (
          <ProductCard key={i} product={product} onClick={onProductClick} />
        ))}
      </div>
      {products.length > initialVisibleCount && (
        <ToggleViewButton 
          shownCount={visibleProducts} 
          totalCount={products.length} 
          onClick={toggleProductView}
          isShowingAll={visibleProducts === products.length}
        />
      )}
    </div>
  );
};

export default ProductGrid;
