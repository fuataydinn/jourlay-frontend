import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation menüsü her sayfada görünür */}
        <Navigation />
        
        {/* Sayfa içerikleri */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            {/* Gelecekte eklenecek sayfalar */}
            <Route path="/villas" element={<PlaceholderPage title="🏖️ Villalar" message="Villa listesi sayfası yakında eklenecek!" />} />
            <Route path="/about" element={<PlaceholderPage title="ℹ️ Hakkımızda" message="Hakkımızda sayfası yakında eklenecek!" />} />
            {/* 404 sayfası */}
            <Route path="*" element={<PlaceholderPage title="❌ 404" message="Aradığınız sayfa bulunamadı!" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

// Geçici placeholder bileşeni (gelecekte silinecek)
const PlaceholderPage = ({ title, message }) => {
  return (
    <div style={{
      minHeight: '70vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      textAlign: 'center',
      padding: '40px 20px'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>{title}</h1>
      <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>{message}</p>
    </div>
  );
};

export default App;