import React from 'react';
import Logo from '../../assets/ageless_logo.jpg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3><img src={Logo} alt="Ageless Logo" style={{ height: '30px', marginRight: '8px', verticalAlign: 'middle', borderRadius: '50%' }} /> Ageless Coin</h3>
          <p>Revolutionary DeFi on Binance Smart Chain</p>
        </div>
        <div className="footer-links">
          <div className="link-group">
            <h4>Quick Links</h4>
            <a href="#features">Features</a>
            <a href="#tokenomics">Tokenomics</a>
            <a href="#roadmap">Roadmap</a>
          </div>
          <div className="link-group">
            <h4>Community</h4>
            <a href="https://t.me/AgelessCoin" target="_blank" rel="noopener noreferrer">Telegram</a>
            <a href="https://twitter.com/Agelesscoi49279" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
          <div className="link-group">
            <h4>Buy</h4>
            <a href="https://pancakeswap.finance/swap?outputCurrency=0xE90eDd71fD0a7CC6d8de30fD6D188b2c9D83A7d5" target="_blank" rel="noopener noreferrer">PancakeSwap</a>
            <a href="https://poocoin.app/tokens/0xE90eDd71fD0a7CC6d8de30fD6D188b2c9D83A7d5" target="_blank" rel="noopener noreferrer">PooCoin</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Ageless Coin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;