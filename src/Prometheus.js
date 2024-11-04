// src/Prometheus.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Prometheus.css';
import prometheusImage from './img/prometheus.png'; // Ensure the image path is correct

function Prometheus() {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleBackClick = () => {
        navigate(-1); // Go back to the previous page
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="prometheus-page">
            <nav className="navbar container-fluid d-flex align-items-center" style={{ backgroundColor: '#000000' }}>
                {/* Logo section */}
                <div className="img-container">
                    <img src={prometheusImage} alt="Prometheus Logo" className="navbar-logo" />
                </div>

                {/* Navbar items */}
                <div className="d-flex align-items-center ms-auto">
                    <button className="menu-toggle" onClick={toggleMenu}>
                        ☰
                    </button>
                    <ul className={`nav-links ${isMenuOpen ? 'nav-links-active' : ''}`}>
                        <li>
                            <button onClick={handleBackClick} className="nav-link">Back</button>
                        </li>
                        <li>
                            <a href="https://example.com/uuLebanon" target="_blank" rel="noopener noreferrer" className="nav-link">
                                UULebanon
                            </a>
                        </li>
                        <li>
                            <a href="https://example.com/votinator" target="_blank" rel="noopener noreferrer" className="nav-link">
                                Votinator
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="content">
                <h1>Welcome to the Prometheus Page</h1>
                <p>This is where content for the Prometheus project will go.</p>
            </div>
        </div>
    );
}

export default Prometheus;
