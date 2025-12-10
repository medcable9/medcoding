import React, { useState, useEffect } from "react";
import "./ProductFilter.css";

const ProductFilter = ({ categories, onFilterChange, onReset, currentFilters }) => {
  const [selectedCategory, setSelectedCategory] = useState(currentFilters.categories[0] || "");
  const [selectedSubcategories, setSelectedSubcategories] = useState(currentFilters.subcategories[selectedCategory] || []);

  useEffect(() => {
    setSelectedCategory(currentFilters.categories[0] || "");
    setSelectedSubcategories(currentFilters.subcategories[currentFilters.categories[0]] || []);
  }, [currentFilters]);

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    setSelectedSubcategories([]); // Reset subcategories when category changes
    onFilterChange({ categories: [category], subcategories: {} });
  };

  const handleSubcategoryChange = (subcategory, isChecked) => {
    const updatedSubcategories = isChecked
      ? [...selectedSubcategories, subcategory]
      : selectedSubcategories.filter((sub) => sub !== subcategory);
    setSelectedSubcategories(updatedSubcategories);
    onFilterChange({ categories: [selectedCategory], subcategories: { [selectedCategory]: updatedSubcategories } });
  };

  return (
    <div className="filter-container">
      <h3 className="filter-title">Filter by Category</h3>
      <div className="category-dropdown">
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="category-dropdown-select"
        >
          <option value="">Select a Category</option>
          {categories.map((category) => (
            <option key={category.name} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      {selectedCategory && (
        <div className="subcategory-checkboxes">
          {categories
            .find((category) => category.name === selectedCategory)
            .subcategories.map((subcategory, index) => (
              <label key={index} className="category-checkbox">
                <input
                  type="checkbox"
                  checked={selectedSubcategories.includes(subcategory.name)}
                  onChange={(e) => handleSubcategoryChange(subcategory.name, e.target.checked)}
                />
                <span className="checkbox-custom"></span>
                {subcategory.name}
              </label>
            ))}
        </div>
      )}

      <button className="reset-button" onClick={onReset}>Reset Filters</button>
    </div>
  );
};

export default ProductFilter;
