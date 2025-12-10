import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { productCategories } from "../../data/products";
import ProductFilter from "../../components/Products/ProductFilter/ProductFilter";
import ProductGrid from "../../components/Products/ProductGrid/ProductGrid";
import "./ProductsPage.css";

const ProductsPage = () => {
  const [filters, setFilters] = useState({ categories: [], subcategories: {}, searchTerm: "" });
  const [filteredProducts, setFilteredProducts] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchTerm = searchParams.get("search") || "";
    setFilters(prevFilters => ({ ...prevFilters, searchTerm }));
}, [location]);

  useEffect(() => {
    // Extract products based on category and subcategory filters
    let filtered = [];
    productCategories.forEach((category) => {
      if (filters.categories.length === 0 || filters.categories.includes(category.name)) {
        category.subcategories.forEach((subcategory) => {
          if (
            !filters.subcategories[category.name] ||
            filters.subcategories[category.name].length === 0 ||
            filters.subcategories[category.name].includes(subcategory.name)
          ) {
            filtered = [...filtered, ...subcategory.products];
          }
        });
      }
    });

    // Apply search term filter
    if (filters.searchTerm) {
      const searchQuery = filters.searchTerm.toLowerCase();
  
      filtered = filtered.filter((product) => {
        const nameMatch = product.name.toLowerCase().includes(searchQuery);
  
        const otherNamesMatch = product.other_names
          ? product.other_names.some(name => name.toLowerCase().includes(searchQuery))
          : false;
  
        return nameMatch || otherNamesMatch;
      });
    }

    setFilteredProducts(filtered);
  }, [filters]);

  const handleFilterChange = (newFilters) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));

    // Update the URL to reflect the search term
    if (newFilters.searchTerm !== undefined && newFilters.searchTerm !== filters.searchTerm) {
      const searchParams = new URLSearchParams(location.search);
      if (newFilters.searchTerm) {
        searchParams.set("search", newFilters.searchTerm);
      } else {
        searchParams.delete("search");
      }
      navigate(`${location.pathname}?${searchParams.toString()}`, { replace: true });
    }
  };

  const resetAllFilters = () => {
    setFilters({ categories: [], subcategories: {}, searchTerm: "" });
    navigate(location.pathname);
  };

  return (
    <div className="products-page">
      <h2>Products</h2>
      
      <div className="products-content">
        
        <div className="filter-sidebar">
          <ProductFilter
            categories={productCategories}
            onFilterChange={handleFilterChange}
            onReset={resetAllFilters}
            currentFilters={filters}
          />
        </div>
        <div className="product-grid-area">
          <ProductGrid categories={productCategories} products={filteredProducts} />
        </div>
        {false && (
  <div className="product-grid-area">
    <ProductGrid categories={productCategories} products={filteredProducts} />
  </div>
  
)}
{/* <div className="under-construction-message">
        🚧 This page is still under construction. Check back soon! 🚧
      </div> */}

      </div>
    </div>
  );
};

export default ProductsPage;
