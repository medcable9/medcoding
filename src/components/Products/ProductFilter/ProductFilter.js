import React, { useState, useEffect, useRef } from "react";
import "./ProductFilter.css";
import { FaSearch } from 'react-icons/fa';

const ProductFilter = ({ categories, onFilterChange }) => {
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [subcategoryDropdownOpen, setSubcategoryDropdownOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const categoryDropdownRef = useRef(null);
  const subcategoryDropdownRef = useRef(null);

  const debounceTimeout = useRef(null);

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

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);

    clearTimeout(debounceTimeout.current);
    debounceTimeout.current = setTimeout(() => {
      onFilterChange({
        categories: selectedCategories,
        subcategories: selectedSubcategories,
        searchTerm: value,
      });
    }, 500);
  };

  const resetFilters = () => {
    setSelectedCategories([]);
    setSelectedSubcategories([]);
    setSearchTerm("");
  };

  const applyFilters = () => {
    closeDropdowns();
    onFilterChange({
      categories: selectedCategories,
      subcategories: selectedSubcategories,
      searchTerm: searchTerm,
    });
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
            {selectedCategories.length > 0
              ? selectedCategories.join(", ")
              : "All Categories"}
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
                <button className="dropdown-reset" onClick={resetFilters}>
                  Reset
                </button>
                <button className="dropdown-apply" onClick={applyFilters}>
                  Show Products
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Subcategory Dropdown */}
        <div className="dropdown-wrapper" ref={subcategoryDropdownRef}>
          <div className="dropdown-header" onClick={toggleSubcategoryDropdown}>
            {selectedSubcategories.length > 0
              ? selectedSubcategories.join(", ")
              : "All Subcategories"}
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
                <button className="dropdown-reset" onClick={resetFilters}>
                  Reset
                </button>
                <button className="dropdown-apply" onClick={applyFilters}>
                  Show Products
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Search Bar with Icon */}
        <div className="search-wrapper">
          <FaSearch className="search-icon" />
          <input
            type="text"
            name="searchTerm"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
