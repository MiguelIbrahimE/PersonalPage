import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    return (
        <div className="App">
            <main>
                <img className="img-container" src="/migo_pic.jpeg" alt="Profile" />
                <section className="info-section">
                    <div className="name-title">
                        <h2> Just a Front End Developer</h2>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;
