import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>🏖️ Jourlay Villa Kiralama</h1>
          <p>Hayalinizdeki tatil villanızı bulun ve unutulmaz anılar yaşayın</p>
          <div className="hero-buttons">
            <Link to="/villas" className="btn-primary">
              🏖️ Villaları Keşfet
            </Link>
            <Link to="/contact" className="btn-secondary">
              📞 İletişime Geç
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2>✨ Neden Jourlay?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🏖️</div>
              <h3>Premium Villalar</h3>
              <p>Deniz manzaralı lüks villalar ile unutulmaz tatil deneyimi</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Güvenli Rezervasyon</h3>
              <p>%100 güvenli ödeme sistemi ile hızlı rezervasyon</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>7/24 Destek</h3>
              <p>Profesyonel ekibimiz her zaman yanınızda</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>En İyi Fiyatlar</h3>
              <p>Piyasanın en uygun fiyatları ile kaliteli hizmet</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>🌅 Hayalinizdeki Tatile Başlayın</h2>
          <p>Şimdi rezervasyon yapın ve %20 erken rezervasyon indirimi kazanın!</p>
          <Link to="/villas" className="btn-cta">
            🚀 Hemen Rezervasyon Yap
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;