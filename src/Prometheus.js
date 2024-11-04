// src/Prometheus.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Prometheus.css';
import prometheusImage from './img/prometheus.png';

function Prometheus() {
    const navigate = useNavigate();
    const colorBlack = process.env.REACT_APP_COLOR_BLACK;
    const colorBrown = process.env.REACT_APP_COLOR_BROWN;

    const handleBackClick = () => {
        navigate(-1);
    };

    return (
        <div className="prometheus-page font-prometheus" style={{ color: colorBlack }}>
            <nav className="navbar" style={{ backgroundColor: colorBlack }}>
                {/* Logo section */}
                <div className="navbar-logo-container">
                    <img src={prometheusImage} alt="Prometheus Logo" className="navbar-logo" />
                </div>

                {/* Navbar items */}
                <ul className="nav-links">
                    <li>
                        <button onClick={handleBackClick} className="nav-link" style={{ color: colorBrown }}>Back</button>
                    </li>
                    <li>
                        <a href="https://example.com/uuLebanon" target="_blank" rel="noopener noreferrer" className="nav-link" style={{ color: colorBrown }}>
                            UULebanon
                        </a>
                    </li>
                    <li>
                        <a href="https://example.com/votinator" target="_blank" rel="noopener noreferrer" className="nav-link" style={{ color: colorBrown }}>
                            Votinator
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="content" style={{ color: colorBrown }}>
                <h1>Welcome to the Prometheus Page</h1>
                <p>This is where content for the Prometheus project will go.</p>
            </div>
        </div>
    );
}

export default Prometheus;
