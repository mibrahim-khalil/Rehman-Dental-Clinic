import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../../assets/images/hero/dental-hero.png'; // HERO IMAGE
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-container">
          
          <div className="hero-content">
            <span className="hero-subtag">HEALTHY SMILE, BRIGHTER LIVES</span>
            
            <h1 className="hero-title">
              <span className="title-dark">REHMAN</span> <span className="title-teal">DENTAL CLINIC</span>
            </h1>

            <p className="hero-description">
              Your trusted partner in oral health. We provide modern, compassionate, 
              and expert dental care for you and your family.
            </p>

            <div className="hero-buttons">
              <a href="https://wa.me/923000000000" className="btn-primary">Book Appointment</a>
              <Link to="/services" className="btn-secondary">Our Services</Link>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <div className="hero-image-card">
              {/* UPDATED IMAGE SOURCE */}
              <img 
                src={heroImage} 
                alt="Dental Patient at Rehman Dental Clinic" 
                className="hero-img" 
              />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Home;