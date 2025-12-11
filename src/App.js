import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/HomePage/HomePage';
import About from './pages/AboutPage/About';
import Products from './pages/ProductsPage/ProductsPage';
import Projects from './pages/ProjectsPage/ProjectsPage';
import Certificates from './pages/CertificatesPage/CertificatesPage';
import Catalogs from './pages/CatalogsPage/CatalogsPage';
import EmailFloatingIcon from './components/EmailFloatingIcon/EmailFloatingIcon';
import ProductDetailPage from "./components/Products/ProductDetailPage/ProductDetailPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {

  return (
    <Router>
      <div className="App">
        <Header/>
        <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetailPage />} />
          <Route path="/catalogs" element={<Catalogs />} />
        </Routes>
        </div>
        <EmailFloatingIcon />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

