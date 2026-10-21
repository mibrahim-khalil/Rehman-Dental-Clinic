import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // Importing our global styles

// Components
import Navbar from './components/Navbar/Navbar';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';

// Pages
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Team from './pages/Team/Team';
import Awareness from './pages/Awareness/Awareness';
import Gallery from './pages/Gallery/Gallery';

function App() {
  return (
    <Router>
      <div className="app-layout">
        <Navbar />

        <main className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/panels" element={<Home />} />
            <Route path="/awareness" element={<Awareness />} />
            <Route path="/services" element={<Services />} />
            <Route path="/team" element={<Team />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>

        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;