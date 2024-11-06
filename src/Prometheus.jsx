
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/prometheus.css'; // Import specific CSS for Prometheus
import prometheusImage from './assets/prometheus.png';
import Apollo from './assets/apollo.png';
function Prometheus() {
    const navigate = useNavigate();
    const colorBlack = process.env.REACT_APP_COLOR_BLACK || "#000000";
    const colorBrown = process.env.REACT_APP_COLOR_BROWN || "#864D25";

    const handleBackClick = () => {
        navigate(-1);
    };

    return (
        <div className="prometheus-page" style={{ color: colorBlack }}>
            <nav className="prometheus-navbar" style={{ backgroundColor: colorBlack }}>
                <div className="prometheus-navbar-logo-container">
                    <img src={prometheusImage} alt="Prometheus Logo" className="prometheus-navbar-logo" />
                </div>

                <ul className="prometheus-nav-links">
                    <li>
                        <button onClick={handleBackClick} className="prometheus-nav-link" style={{ color: colorBrown }}>Back</button>
                    </li>
                    <li>
                        <a href="https://example.com/uuLebanon" target="_blank" rel="noopener noreferrer" className="prometheus-nav-link" style={{ color: colorBrown }}>
                            UULebanon
                        </a>
                    </li>
                    <li>
                        <a href="https://example.com/votinator" target="_blank" rel="noopener noreferrer" className="prometheus-nav-link" style={{ color: colorBrown }}>
                            Votinator
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="prometheus-content" style={{ color: colorBrown }}>
                <h1>Prometheus - A New Endeavour</h1>
            </div>
            <section className="prometheus-project-grid-section">
                <div className="prometheus-project-grid">
                    <div className="prometheus-grid-item">
                        <img src={prometheusImage} alt="Project 1" className="prometheus-grid-image" />
                        <div className="prometheus-grid-text-container">
                            <span className="prometheus-grid-text">Prometheus Tech is a mission</span>
                            <br />
                            <span className="prometheus-grid-text">A mission to design</span>
                            <br />
                            <span className="prometheus-grid-text">A mission to simplify</span>
                        </div>
                    </div>
                    <div className="prometheus-content" style={{ color: colorBrown }}>
                        <h1>Prometheus - Apollo</h1>
                    </div>
                    <div className="prometheus-grid-item">
                        <img src={Apollo} alt="Project 1" className="prometheus-grid-image" />
                        <div className="prometheus-grid-text-container">
                            <span className="prometheus-grid-text">Prometheus Tech is a mission</span>
                            <br />
                            <span className="prometheus-grid-text">A mission to design</span>
                            <br />
                            <span className="prometheus-grid-text">A mission to simplify</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Prometheus;
