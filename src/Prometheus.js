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
        <div className="prometheus-page font-prometheus" style={{color: colorBlack}}>
            <nav className="navbar" style={{backgroundColor: colorBlack}}>
                {/* Logo section */}
                <div className="navbar-logo-container">
                    <img src={prometheusImage} alt="Prometheus Logo" className="navbar-logo"/>
                </div>

                {/* Navbar items */}
                <ul className="nav-links">
                    <li>
                        <button onClick={handleBackClick} className="nav-link" style={{color: colorBrown}}>Back</button>
                    </li>
                    <li>
                        <a href="https://example.com/uuLebanon" target="_blank" rel="noopener noreferrer"
                           className="nav-link" style={{color: colorBrown}}>
                            UULebanon
                        </a>
                    </li>
                    <li>
                        <a href="https://example.com/votinator" target="_blank" rel="noopener noreferrer"
                           className="nav-link" style={{color: colorBrown}}>
                            Votinator
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="content" style={{color: colorBrown}}>
                <h1>Prometheus - A New Endeavour</h1>
            </div>
            <section className="project-grid-section">
                <div className="project-grid">
                    <div className="grid-item" data-aos="fade-up">
                        <a href="/prometheus" className="grid-link">
                            <img src={"/uuLebanon.png"} alt="Project 1" className="grid-image"/>
                            <div className="grid-overlay">
                                <span className="grid-text">UULebanon</span>
                            </div>
                        </a>
                    </div>
                    <div className="grid-item" data-aos="fade-up">
                        <a href="https://example.com/uuLebanon" target="_blank" rel="noopener noreferrer">
                            <img src={"/votinator.png"} alt="Project 2" className="grid-image"/>
                            <div className="grid-overlay">
                                <span className="grid-text">Shh</span>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Prometheus;
