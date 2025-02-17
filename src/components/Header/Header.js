import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaSearch, FaMapMarkerAlt, FaBars } from 'react-icons/fa';
import './Header.css';
import logo from '../../assets/images/logo.png';
import { company_info } from "../../data/company_info.js";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);

        const storedQuery = localStorage.getItem("searchQuery");
        if (storedQuery) {
            setTimeout(() => {
                searchAllElements(storedQuery);
                localStorage.removeItem("searchQuery");
            }, 500); // Delay ensures page loads first
        }
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    const openGoogleMaps = () => {
        const { address } = company_info[0];
        const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${address.name}`;
        window.open(googleMapsUrl, '_blank');
    };

    const searchAllElements = async (query) => {
      query = query.toLowerCase();
      const results = [];
  
      // ✅ Search the current page first
      const elements = document.body.getElementsByTagName('*');
      for (let element of elements) {
          if (element.textContent.toLowerCase().includes(query)) {
              let nearestLink = element.closest('a');
              let nearestHeading = element.closest('h1, h2, h3, h4, h5, h6');
  
              if (nearestLink && nearestLink.href) {
                  try {
                      const url = new URL(nearestLink.href);
                      results.push({ text: element.textContent.trim(), url: url.pathname });
                  } catch (e) {
                      console.error("Invalid URL:", nearestLink.href);
                      continue;
                  }
              } else if (nearestHeading) {
                  results.push({ text: element.textContent.trim(), element: nearestHeading });
              }
          }
      }
  
      if (results.length > 0) {
          return results;
      }
  
      // ✅ Fetch and search content from other pages
      const pages = ["/products", "/projects", "/certificates", "/about", "/contact"];
      for (const page of pages) {
          try {
              const response = await fetch(page);
              const text = await response.text();
  
              // Use a temporary container to parse the page content
              const tempDiv = document.createElement("div");
              tempDiv.innerHTML = text;
  
              if (tempDiv.textContent.toLowerCase().includes(query)) {
                  return [{ url: page }];
              }
          } catch (error) {
              console.error(`Error fetching ${page}:`, error);
          }
      }
  
      return [];
  };
  

  const handleSearch = async (e) => {
    e.preventDefault();
    localStorage.setItem("searchQuery", searchQuery);

    const results = await searchAllElements(searchQuery);

    if (results.length > 0) {
        if (results[0].url) {
            navigate(results[0].url); // Navigate to the page
        } else if (results[0].element) {
            results[0].element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    setSearchQuery('');
};

  const handleInputChange = (e) => {
      setSearchQuery(e.target.value);
  };

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/products' },
        { name: 'Projects', path: '/projects' },
        { name: 'Certificates', path: '/certificates' },
        { name: 'About us', path: '/about' },
        { name: 'Contact us', path: '/contact' }
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
                    <form onSubmit={handleSearch} className="search-form">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={handleInputChange}
                            className="search-input"
                        />
                        <button type="submit" className="search-btn"><FaSearch /></button>
                    </form>

                    <motion.button className="location-btn" whileHover={{ scale: 1.15 }} onClick={openGoogleMaps}>
                        <FaMapMarkerAlt />
                    </motion.button>
                </div>

                <button className="mobile-menu-btn" onClick={toggleMobileMenu}><FaBars /></button>

                <nav className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                    <form onSubmit={handleSearch} className="mobile-search-form">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={handleInputChange}
                            className="mobile-search-input"
                        />
                        <button type="submit" className="mobile-search-btn"><FaSearch /></button>
                    </form>

                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={location.pathname === link.path ? 'active' : ''}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </motion.header>
    );
};

export default Header;
