import React, { useState, useEffect } from "react";
import "./ProductFilter.css";

const ProductFilter = ({ categories, onFilterChange, onReset, currentFilters }) => {
  const [selectedCategories, setSelectedCategories] = useState(currentFilters.categories);

  useEffect(() => {
    setSelectedCategories(currentFilters.categories);
  }, [currentFilters]);

  const handleCategoryChange = (category) => {
    const newCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];
    
    setSelectedCategories(newCategories);
    onFilterChange({ categories: newCategories });
  };

  return (
    <div className="filter-container">
      <h3 className="filter-title">Filter by Category</h3>
      <div className="category-checkboxes">
        {categories.map((category, index) => (
          <label key={index} className="category-checkbox">
            <input
              type="checkbox"
              checked={selectedCategories.includes(category.name)}
              onChange={() => handleCategoryChange(category.name)}
            />
            <span className="checkbox-custom"></span>
            {category.name}
          </label>
        ))}
      </div>
      <button className="reset-button" onClick={onReset}>Reset Filters</button>
    </div>
  );
};

export default ProductFilter;
