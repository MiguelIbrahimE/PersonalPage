import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import anime from 'animejs';
import 'aos/dist/aos.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            offset: 200,
        });

        // Simulate a page load with a timeout (for demonstration)
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 5000); // Adjust this duration as needed

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (isLoading) {
            anime({
                targets: '.paper-airplane-icon',
                translateX: ['0%', '100%'],
                easing: 'linear',
                duration: 5000, // Should match the simulated page load duration
                loop: false,
            });
        }
    }, [isLoading]);

    return (
        <div className="App">
            <main>
                <div className="img-container" data-aos="fade-up">
                    <img src="/migo_pic.jpeg" alt="Profile" className="no-click" />
                    <div className="overlay">Miguel Ibrahim</div>
                </div>

                <section className="info-section" data-aos="fade-up">
                    <h2 className="display-4 display-md-2">Just a UX Developer</h2>
                    <p className="lead fs-5 fs-md-4">Designing Things</p>
                </section>
            </main>

            <section className="project-card-section">
                <div className="project-card" data-aos="fade-up">
                    <div className="project-image-container">
                        <img src="/prometheus.png" alt="Recent Project" className="project-image" />
                        <div className="project-overlay">
                            <button
                                className="learn-more-button"
                                onClick={() => window.open('https://example.com', '_blank')}
                                disabled={isLoading}
                            >
                                {isLoading ? (
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
        </div>
    );
}

export default App;
