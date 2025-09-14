import React from 'react';
import '../styles/home.css';

const Home = () => {
    return (
        <div className="home">
            <div className="hero-section">
                <img
                    src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1920&q=80"
                    alt="Hero Banner"
                    className="hero-image"
                />

                <div className="hero-text">
                    <h1>NEW COLLECTION</h1>
                    <button>Shop Now</button>
                </div>
            </div>

            <div className="category-section">
                <div className="category-card">
                    <a href="/women">
                    <img
                        src="https://images.unsplash.com/photo-1514995669114-6081e934b693?auto=format&fit=crop&w=600&q=80"
                        alt="Women"
                    />
                    <h2>WOMEN</h2>
                    </a>
                </div>
                <div className="category-card">
                    <a href="/men">
                    <img
                        src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=600&q=80"
                        alt="Men"
                    />
                    <h2>MEN</h2>
                    </a>
                </div>
            </div>

        </div>
    );
};

export default Home;
