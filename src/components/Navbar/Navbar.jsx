import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMenu = () => setMobileMenuOpen(false);

  const whatsappNumber = "923000000000"; // Update later
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hello!`;

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <div className="logo-badge">
            <span className="logo-title">REHMAN</span>
            <span className="logo-subtitle">DENTAL CLINIC</span>
            <span className="logo-tagline">HEALTHY SMILES · BRIGHTER LIVES</span>
          </div>
        </Link>

        {/* Mobile Toggle */}
        <div className="mobile-toggle" onClick={toggleMenu}>
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Links */}
        <nav className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>Home</NavLink>
          <NavLink to="/panels" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>Panels & Recommendations</NavLink>
          <NavLink to="/awareness" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>Awareness</NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>Services</NavLink>
          <NavLink to="/team" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>Our Team</NavLink>
          <NavLink to="/gallery" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>Gallery</NavLink>
          
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-appointment mobile-btn" onClick={closeMenu}>Book Appointment</a>
        </nav>

        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-appointment desktop-btn">Book Appointment</a>
      </div>
    </header>
  );
};

export default Navbar;