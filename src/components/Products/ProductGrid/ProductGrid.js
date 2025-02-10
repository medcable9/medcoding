import React from 'react';
import './ProductGrid.css';

const ProductCard = ({ product, onClick }) => (
  <div className="product-card" onClick={() => onClick(product)}>
    <img src={product.images[0]} alt={product.name} />
    <h3>{product.name}</h3>
  </div>
);

const ProductGrid = ({ products, onProductClick }) => {
  return (
    <div className="product-grid">
      {products.map((product, i) => (
        <ProductCard key={i} product={product} onClick={onProductClick} />
      ))}
    </div>
  );
};

export default ProductGrid;
