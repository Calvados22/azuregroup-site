import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';
import logo from '../media/logo.png';
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className="navbar-container">
        {/* Toggle button for mobile */}
        <button
          className="navbar-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Navigation Links */}
        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Accueil</Link></li>
          <li><Link to="/a-propos" onClick={() => setMenuOpen(false)}>À propos</Link></li>
          <li><Link to="/services" onClick={() => setMenuOpen(false)}>Nos Services</Link></li>
          <li><Link to="/produits" onClick={() => setMenuOpen(false)}>Nos Produits</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
