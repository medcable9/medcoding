import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaMapMarkerAlt, FaBars, FaTimes } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import './Header.css';
import logo from '../../assets/images/logo.png';
import { company_info } from "../../data/company_info.js";
import { productCategories } from "../../data/products";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchSuggestions, setSearchSuggestions] = useState([]);
    const [mobileSearchQuery, setMobileSearchQuery] = useState('');
    const mobileSearchRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();
    const searchRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const searchTerm = searchParams.get("search") || "";
        setSearchQuery(searchTerm);
        setMobileSearchQuery(searchTerm); // Initialize mobile search query as well
    }, [location]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target) &&
                mobileSearchRef.current && !mobileSearchRef.current.contains(event.target)) {
                setSearchSuggestions([]);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const clearSearch = () => {
        setSearchQuery('');
        setMobileSearchQuery(''); // Also clear the mobile search query
        setSearchSuggestions([]);
        if (location.pathname === '/products') {
            navigate('/products');
        }
    };

    const clearMobileSearch = () => {
        setMobileSearchQuery('');
        setSearchQuery('');
        setSearchSuggestions([]);
        if (location.pathname === '/products') {
            navigate('/products');
        }
    };

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    const openGoogleMaps = () => {
        const { address } = company_info[0];
        const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${address.name}`;
        window.open(googleMapsUrl, '_blank');
    };

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchQuery(value);
        updateSearchSuggestions(value);

        // Navigate to products page with search query
        if (location.pathname !== '/products') {
            navigate(`/products?search=${encodeURIComponent(value)}`);
        } else {
            // If already on products page, update URL
            const searchParams = new URLSearchParams(location.search);
            if (value) {
                searchParams.set("search", value);
            } else {
                searchParams.delete("search");
            }
            navigate(`${location.pathname}?${searchParams.toString()}`, { replace: true });
        }
    };

    const handleSuggestionClick = (productName) => {
        setSearchQuery(productName);
        setMobileSearchQuery(productName);
        setSearchSuggestions([]);
        navigate(`/products?search=${encodeURIComponent(productName)}`);
    };

    const handleMobileSearchChange = (e) => {
        const value = e.target.value;
        setMobileSearchQuery(value);
        updateSearchSuggestions(value);

        // Navigate to products page with search query
        if (location.pathname !== '/products') {
            navigate(`/products?search=${encodeURIComponent(value)}`);
        } else {
            // If already on products page, update URL
            const searchParams = new URLSearchParams(location.search);
            if (value) {
                searchParams.set("search", value);
            } else {
                searchParams.delete("search");
            }
            navigate(`${location.pathname}?${searchParams.toString()}`, { replace: true });
        }
    };

    const updateSearchSuggestions = (value) => {
        if (value.length > 0) {
            const suggestions = productCategories
                .flatMap(cat => cat.subcategories)
                .flatMap(cat => cat.products)
                // .filter(product => product.name.toLowerCase().includes(value.toLowerCase()))
                .filter(product => {
                    const queryLower = value.toLowerCase();
                    const productNameMatch = product.name.toLowerCase().includes(queryLower);
                    const otherNamesMatch = product.other_names
                        ? product.other_names.find(name => name.toLowerCase().includes(queryLower))
                        : null;

                    return productNameMatch || otherNamesMatch;
                })
                .slice(0, 5);
            setSearchSuggestions(suggestions);
        } else {
            setSearchSuggestions([]);
        }
    };

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/products' },
        { name: 'Projects', path: '/projects' },
        { name: 'Certificates', path: '/certificates' },
        { name: 'About us', path: '/about' }
    ];

    return (
        <motion.header
            className={`header ${isScrolled ? 'scrolled' : ''}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="header-wrapper">
                <motion.div className="logo" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Link to="/"><img src={logo} alt="Company Logo" /></Link>
                </motion.div>
                <nav className="desktop-nav">
                    {navLinks.map((link) => (
                        <motion.div key={link.path} whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
                            <Link to={link.path} className={location.pathname === link.path ? 'active' : ''}>{link.name}</Link>
                        </motion.div>
                    ))}
                </nav>

                <div className="header-actions">
                    <div className="search-form" ref={searchRef}>
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                            className="search-input"
                        />
                        {searchQuery && (
                            <button className="clear-search" onClick={clearSearch}>
                                <IoMdClose />
                            </button>
                        )}
                        <FaSearch className="search-icon" />
                        {searchSuggestions.length > 0 && (
                            <ul className="search-suggestions">
                                {searchSuggestions.map((product, index) => {
                                    const otherNameMatch = product.other_names
                                        ? product.other_names.find(name =>
                                            name.toLowerCase().includes(searchQuery.toLowerCase())
                                        )
                                        : null;

                                    return (
                                        <React.Fragment key={index}>
                                            <li onClick={() => handleSuggestionClick(product.name)}>
                                                {product.name}
                                            </li>
                                            {otherNameMatch && (
                                                <li
                                                    className="other-name"
                                                    onClick={() => handleSuggestionClick(otherNameMatch)}
                                                >
                                                    {otherNameMatch}
                                                </li>
                                            )}
                                        </React.Fragment>
                                    );
                                })}
                            </ul>
                        )}
                    </div>

                    <motion.button className="location-btn" whileHover={{ scale: 1.15 }} onClick={openGoogleMaps}>
                        <FaMapMarkerAlt />
                    </motion.button>
                </div>

                <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            {/* Mobile search bar */}
            <div className="mobile-search-form" ref={mobileSearchRef}>
                <input
                    type="text"
                    placeholder="Search products..."
                    value={mobileSearchQuery}
                    onChange={handleMobileSearchChange}
                    className="mobile-search-input"
                />
                {mobileSearchQuery && (
                    <button className="clear-mobile-search" onClick={clearMobileSearch}>
                        <IoMdClose />
                    </button>
                )}
                <FaSearch className="mobile-search-icon" />
                {searchSuggestions.length > 0 && (
                    <ul className="mobile-search-suggestions">
                        {searchSuggestions.map((product, index) => {
                            const otherNameMatch = product.other_names
                                ? product.other_names.find(name =>
                                    name.toLowerCase().includes(mobileSearchQuery.toLowerCase())
                                )
                                : null;

                            return (
                                <React.Fragment key={index}>
                                    <li onClick={() => handleSuggestionClick(product.name)}>
                                        {product.name}
                                    </li>
                                    {otherNameMatch && (
                                        <li
                                            className="other-name"
                                            onClick={() => handleSuggestionClick(otherNameMatch)}
                                        >
                                            {otherNameMatch}
                                        </li>
                                    )}
                                </React.Fragment>
                            );
                        })}
                    </ul>
                )}
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.nav
                        className="nav-menu"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={location.pathname === link.path ? 'active' : ''}
                                onClick={() => {
                                    toggleMobileMenu();
                                }}
                            >
                                {link.name}
                            </Link>
                        ))}

                        <button className="mobile-location-btn" onClick={openGoogleMaps}>
                            <FaMapMarkerAlt /> Find Us
                        </button>
                    </motion.nav>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Header;
