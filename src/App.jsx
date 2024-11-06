import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import anime from 'animejs';
import 'aos/dist/aos.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './css/App.css';
import Prometheus from './Prometheus';
import prometheusImage from './assets/prometheus.png';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/prometheus" element={<Prometheus />} />
                </Routes>
            </div>
        </Router>
    );
}

function Home() {
    const [showAirplane, setShowAirplane] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            offset: 200,
        });
    }, []);

    useEffect(() => {
        if (showAirplane) {
            anime({
                targets: '.paper-airplane-icon',
                translateX: ['0%', '200%'],
                translateY: ['100%', '-100%'],
                easing: 'linear',
                duration: 1000,
                loop: false,
                complete: () => {
                    setShowAirplane(false);
                    navigate('/prometheus'); // Navigate to the Prometheus page after animation completes
                },
            });
        }
    }, [showAirplane, navigate]);

    const handleLearnMoreClick = () => {
        setShowAirplane(true); // Trigger the airplane animation
    };

    return (
        <>
            <main>
                <div className="img-container">
                    <img src="/migo_pic.jpeg" alt="Profile" className="no-click" />
                    <div className="overlay">Miguel Ibrahim</div>
                </div>

                <section className="info-section">
                    <h2 className="display-4 display-md-2">Just a UX Developer</h2>
                    <p className="lead fs-5 fs-md-4">Designing Things</p>
                </section>
            </main>

            <section className="project-card-section">
                <div className="project-card" data-aos="fade-up">
                    <div className="project-image-container">
                        <img src={prometheusImage} alt="Prometheus Project" className="project-image" />
                        <div className="project-overlay">
                            <button
                                className="learn-more-button"
                                onClick={handleLearnMoreClick}
                            >
                                {showAirplane ? (
                                    <span className="paper-airplane-icon">
                                        <i className="fas fa-paper-plane"></i>
                                    </span>
                                ) : (
                                    'Learn More'
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* New Project Grid Section */}
            <section className="project-grid-section">
                <div className="project-grid">
                    <div className="grid-item" data-aos="fade-up">
                        <a href="/about/src/Prometheus" className="grid-link">
                            <img src={"/uuLebanon.png"} alt="Project 1" className="grid-image" />
                            <div className="grid-overlay">
                                <span className="grid-text">UULebanon</span>
                            </div>
                        </a>
                    </div>
                    <div className="grid-item" data-aos="fade-up">
                        <a href="https://example.com/uuLebanon" target="_blank" rel="noopener noreferrer">
                            <img src={"/votinator.png"} alt="Project 2" className="grid-image" />
                            <div className="grid-overlay">
                                <span className="grid-text">Shh</span>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}

export default App;
