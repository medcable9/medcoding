import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductGrid.css';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${encodeURIComponent(product.name)}`);
  };

  return (
    <div className="product-card" onClick={handleClick}>
      <img src={product.main_img} alt={product.name} />
      <div className="divider"></div>
      <div className="product-info">
        <h3>{product.name}</h3>
      </div>
    </div>
  );
};

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

const ProductGrid = ({ products }) => {
  const initialVisibleCount = 8;
  const [visibleProducts, setVisibleProducts] = useState(initialVisibleCount);

  const productsToShow = 8;

  const toggleProductView = () => {
    if (visibleProducts >= products.length) {
      setVisibleProducts(initialVisibleCount);
    } else {
      setVisibleProducts(prevVisibleProducts =>
        Math.min(prevVisibleProducts + productsToShow, products.length)
      );
    }
  };

  const seeLessProducts = () => {
    setVisibleProducts(initialVisibleCount);
  };

  const isShowingAll = visibleProducts >= products.length;

  return (
    <div className="product-grid-container">
      <div className="product-grid">
        {products.slice(0, visibleProducts).map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </div>
      {products.length > initialVisibleCount && (
        <ToggleViewButton
          shownCount={visibleProducts}
          totalCount={products.length}
          onClick={isShowingAll ? seeLessProducts : toggleProductView}
          isShowingAll={isShowingAll}
        />
      )}
    </div>
  );
};

export default ProductGrid;
