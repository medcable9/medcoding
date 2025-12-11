import React from 'react';
import { FiEye, FiDownload, FiFileText } from 'react-icons/fi';
import './CatalogsPage.css';
import { catalogs } from '../../data/catalogs';

const CatalogsPage = () => {
  const openCatalog = (file) => {
    window.open(file, '_blank');
  };

  const downloadCatalog = (file, title) => {
    const link = document.createElement('a');
    link.href = file;
    link.download = `${title}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="catalogs-page">
      <div className="catalogs-container">
        <div className="catalogs-header">
          <h2>Product Catalogs</h2>
          <p className="catalogs-description">Browse and download our comprehensive product catalogs</p>
        </div>
        <div className="catalogs-list">
          {catalogs.map((catalog) => (
            <div key={catalog.id} className="catalog-item">
              <div className="catalog-item-content">
                <div className="catalog-icon-container">
                  <FiFileText className="catalog-icon" />
                </div>
                <div className="catalog-details">
                  <h3 className="catalog-title">{catalog.title}</h3>
                  <span className="catalog-type">PDF Document</span>
                </div>
                <div className="catalog-actions">
                  <button 
                    onClick={() => openCatalog(catalog.file)}
                    className="action-button view-button"
                    title="View Catalog"
                  >
                    <FiEye />
                    <span>View</span>
                  </button>
                  <button 
                    onClick={() => downloadCatalog(catalog.file, catalog.title)}
                    className="action-button download-button"
                    title="Download Catalog"
                  >
                    <FiDownload />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatalogsPage;

