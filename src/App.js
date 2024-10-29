import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

function App() {
    useEffect(() => {
        AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
    }, []);

    return (
        <div className="App">
            <main>
                <div className="img-container" data-aos="fade-up">
                    <img src="/migo_pic.jpeg" alt="Profile" className="no-click" />
                    <div className="overlay">Miguel Ibrahim</div>
                </div>
                <section className="info-section" data-aos="fade-up">
                    <h2>Just a Front End Developer</h2>
                    <p>Doing Front End Developer Things</p>
                </section>
            </main>
        </div>
    );
}

export default App;
