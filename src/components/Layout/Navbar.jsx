import { useState } from 'react';
import Button from '../UI/Buttons';
import Logo from '../../assets/ageless_logo.jpg';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          {/* LOGO UPLOAD AREA 1 */}
          <div className="logo-container">
            <img 
              src={Logo}
              alt="Ageless Coin Logo" 
              className="logo-img"
              onError={(e) => {
                // Fallback if image not uploaded yet
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = '🌌 Ageless Coin';
              }}
            />
          </div>
        </div>
        
        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        
        {/* Desktop Menu */}
        <div className="navbar-menu">
          <a href="#features">Features</a>
          <a href="#tokenomics">Tokenomics</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#buy">Buy Now</a>
          <a href="#community">Community</a>
          <Button 
            text="Get Started" 
            href="#buy"
            variant="primary"
          />
        </div>
        
        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <a href="#features" onClick={closeMenu}>Features</a>
          <a href="#tokenomics" onClick={closeMenu}>Tokenomics</a>
          <a href="#roadmap" onClick={closeMenu}>Roadmap</a>
          <a href="#buy" onClick={closeMenu}>Buy Now</a>
          <a href="#community" onClick={closeMenu}>Community</a>
          <Button 
            text="Get Started" 
            href="#buy"
            variant="primary"
          />
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </nav>
  );
};

export default Navbar;