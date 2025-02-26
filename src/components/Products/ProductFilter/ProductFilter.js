import React, { useState, useEffect, useRef } from "react";
import "./ProductFilter.css";

const ProductFilter = ({ categories, onFilterChange, onReset, currentFilters }) => {
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [subcategoryDropdownOpen, setSubcategoryDropdownOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState(currentFilters.categories);
  const [selectedSubcategories, setSelectedSubcategories] = useState(currentFilters.subcategories);

  const categoryDropdownRef = useRef(null);
  const subcategoryDropdownRef = useRef(null);

  useEffect(() => {
    setSelectedCategories(currentFilters.categories);
    setSelectedSubcategories(currentFilters.subcategories);
  }, [currentFilters]);

  const toggleCategoryDropdown = () => {
    setCategoryDropdownOpen(!categoryDropdownOpen);
    setSubcategoryDropdownOpen(false);
  };

  const toggleSubcategoryDropdown = (e) => {
    e.stopPropagation();
    setSubcategoryDropdownOpen(!subcategoryDropdownOpen);
    setCategoryDropdownOpen(false);
  };

  const closeDropdowns = () => {
    setCategoryDropdownOpen(false);
    setSubcategoryDropdownOpen(false);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) => {
      const newCategories = prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category];
      return newCategories;
    });
  };

  const handleSubcategoryChange = (subcategory, event) => {
    event.stopPropagation();
    setSelectedSubcategories((prev) => {
      const newSubcategories = prev.includes(subcategory)
        ? prev.filter((s) => s !== subcategory)
        : [...prev, subcategory];
      return newSubcategories;
    });
  };

  const resetCategoryFilters = () => {
    setSelectedCategories([]);
    onFilterChange({ categories: [] });
    closeDropdowns();
  };

  const resetSubcategoryFilters = () => {
    setSelectedSubcategories([]);
    onFilterChange({ subcategories: [] });
    closeDropdowns();
  };

  const applyFilters = () => {
    onFilterChange({
      categories: selectedCategories,
      subcategories: selectedSubcategories,
    });
    closeDropdowns();
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        categoryDropdownRef.current &&
        !categoryDropdownRef.current.contains(event.target) &&
        subcategoryDropdownRef.current &&
        !subcategoryDropdownRef.current.contains(event.target)
      ) {
        closeDropdowns();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="filter-container">
      <div className="filter-bar">
        {/* Category Dropdown */}
        <div className="dropdown-wrapper" ref={categoryDropdownRef}>
          <div className="dropdown-header" onClick={toggleCategoryDropdown}>
            Categories
          </div>
          {categoryDropdownOpen && (
            <div className="dropdown-list">
              <div className="dropdown-columns">
                {categories.map((cat, i) => (
                  <label key={i} className="dropdown-item">
                    <input
                      type="checkbox"
                      value={cat.name}
                      checked={selectedCategories.includes(cat.name)}
                      onChange={() => handleCategoryChange(cat.name)}
                    />
                    {cat.name}
                  </label>
                ))}
              </div>
              <div className="dropdown-actions">
                <button className="dropdown-reset" onClick={resetCategoryFilters}>
                  Reset
                </button>
                <button className="dropdown-apply" onClick={applyFilters}>
                  Apply
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Subcategory Dropdown */}
        <div className="dropdown-wrapper" ref={subcategoryDropdownRef}>
          <div className="dropdown-header" onClick={toggleSubcategoryDropdown}>
            Subcategories
          </div>
          {subcategoryDropdownOpen && (
            <div className="dropdown-list">
              <div className="dropdown-columns">
                {categories.flatMap((cat) => cat.subcategories).map((subcat, i) => (
                  <label key={i} className="dropdown-item">
                    <input
                      type="checkbox"
                      value={subcat.name}
                      checked={selectedSubcategories.includes(subcat.name)}
                      onChange={(e) => handleSubcategoryChange(subcat.name, e)}
                    />
                    {subcat.name}
                  </label>
                ))}
              </div>
              <div className="dropdown-actions">
                <button className="dropdown-reset" onClick={resetSubcategoryFilters}>
                  Reset
                </button>
                <button className="dropdown-apply" onClick={applyFilters}>
                  Apply
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
