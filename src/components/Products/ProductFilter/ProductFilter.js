import React from "react";
import "./ProductFilter.css";

const ProductFilter = ({ categories, onFilterChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFilterChange(prevFilters => ({ ...prevFilters, [name]: value }));
  };

  return (
    <div className="filter-bar">
      <select name="category" onChange={handleChange}>
        <option value="">All Categories</option>
        {categories.map((cat, i) => (
          <option key={i} value={cat.name}>{cat.name}</option>
        ))}
      </select>
      <select name="subcategory" onChange={handleChange}>
        <option value="">All Subcategories</option>
        {categories.flatMap(cat => cat.subcategories).map((subcat, i) => (
          <option key={i} value={subcat.name}>{subcat.name}</option>
        ))}
      </select>
      <input 
        type="text" 
        name="searchTerm"
        placeholder="Search products..." 
        onChange={handleChange}
      />
    </div>
  );
};

export default ProductFilter;
