import React, { useState, useEffect } from "react";
import { productCategories } from "../../data/products";
import ProductFilter from "../../components/Products/ProductFilter/ProductFilter";
import ProductGrid from "../../components/Products/ProductGrid/ProductGrid";
import ProductModal from "../../components/Products/ProductModal/ProductModal";
import "./ProductsPage.css";

const ProductsPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filters, setFilters] = useState({ categories: [], subcategories: [], searchTerm: "" });
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const filtered = productCategories
      .filter(cat => filters.categories.length === 0 || filters.categories.includes(cat.name))
      .flatMap(cat => 
        cat.subcategories
          .filter(subcat => filters.subcategories.length === 0 || filters.subcategories.includes(subcat.name))
          .flatMap(subcat => subcat.products)
      )
      .filter(product => 
        product.name.toLowerCase().includes(filters.searchTerm.toLowerCase())
      );

    setFilteredProducts(filtered);
  }, [filters]);

  const handleFilterChange = (newFilters) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      ...newFilters
    }));
  };

  return (
    <div className="products-page">
      <h2>Products</h2>
      <ProductFilter 
        categories={productCategories} 
        onFilterChange={handleFilterChange}
      />
      <ProductGrid 
        products={filteredProducts} 
        onProductClick={setSelectedProduct}
      />
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default ProductsPage;
