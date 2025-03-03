import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { productCategories } from "../../data/products";
import ProductFilter from "../../components/Products/ProductFilter/ProductFilter";
import ProductGrid from "../../components/Products/ProductGrid/ProductGrid";
import "./ProductsPage.css";

const ProductsPage = () => {
    const [filters, setFilters] = useState({ categories: [], searchTerm: "" });
    const [filteredProducts, setFilteredProducts] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const searchTerm = searchParams.get("search") || "";
        setFilters(prevFilters => ({ ...prevFilters, searchTerm }));
    }, [location]);

    useEffect(() => {
        const filtered = productCategories
            .filter(cat => filters.categories.length === 0 || filters.categories.includes(cat.name))
            .flatMap(cat => cat.products)
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
        setFilters({ categories: [], searchTerm: "" });
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
                    <ProductGrid products={filteredProducts} />
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;
