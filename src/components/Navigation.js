import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="nav-container">
        {/* Logo */}
        <Link to="/" className="nav-logo">
          🏖️ Jourlay
        </Link>

        {/* Menü Linkleri */}
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              🏠 Ana Sayfa
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/villas" className="nav-link">
              🏖️ Villalar
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              ℹ️ Hakkımızda
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              📞 İletişim
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;