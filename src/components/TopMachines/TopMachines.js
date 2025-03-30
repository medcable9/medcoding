import React, { useState } from 'react';
import './TopMachines.css';
import { machines } from "../../data/machines";

const TopMachines = () => {
    const [currentMachineIndex, setCurrentMachineIndex] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const currentMachine = machines[currentMachineIndex];

    // Handler to change the main image when a thumbnail is clicked
    const handleThumbnailClick = (index) => {
        setCurrentImageIndex(index);
    };

    return (
        <section className="top-machine-section">
            <div className="top-machine-container">
                <div className="top-machine-left">
                    <h2>Discover Our Top Machines</h2>
                    <div className="f-machine-info">
                        <h3>{currentMachine.name}</h3>
                        <div className="machine-nav">
                            {machines.map((_, index) => (
                                <button
                                    key={index}
                                    className={`nav-dot ${index === currentMachineIndex ? 'active' : ''}`}
                                    onClick={() => setCurrentMachineIndex(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="top-machine-right">
                    <div className="machine-image-container">
                        <div className="thumbnail-container-vertical">
                            {currentMachine.image.map((thumbnail, index) => (
                                <img
                                    key={index}
                                    src={thumbnail}
                                    alt={`Thumbnail ${index + 1}`}
                                    className={`thumbnail1 ${index === currentImageIndex ? 'active-thumbnail' : ''}`}
                                    onClick={() => handleThumbnailClick(index)}
                                />
                            ))}
                        </div>
                        <img
                            src={currentMachine.image[currentImageIndex]} // Display the selected thumbnail image
                            alt={currentMachine.name}
                            className="machine-base-image"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopMachines;
