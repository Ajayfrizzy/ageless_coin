import Button from '../UI/Buttons';
import { FaShoppingCart, FaTelegram, FaUsers, FaLock, FaExchangeAlt } from 'react-icons/fa';
import HeroBg from '../../assets/img_2.jpg';
import HeroCoin from '../../assets/img_1.jpg';

const Hero = () => {
  return (
    <section className="hero">
      {/* HERO BACKGROUND UPLOAD AREA 2 */}
      <div 
        className="hero-background"
        style={{
          backgroundImage: `url(${HeroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0
        }}
      >
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(15, 15, 35, 0.7)',
          zIndex: 1
        }}></div>
      </div>
      
      <div className="hero-content" style={{ position: 'relative', zIndex: 2 }}>
        {/* MAIN COIN IMAGE UPLOAD AREA 3 */}
        <div className="hero-image-container">
          <img 
            src={HeroCoin}
            alt="Ageless Coin" 
            className="hero-coin-image"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.innerHTML = '<div class="coin-placeholder">🪙</div>';
            }}
          />
        </div>
        
        <h1>Unleash the Power of <span className="highlight">Ageless Coin</span></h1>
        <p className="subtitle">
          Your Gateway to a Revolutionary DeFi Experience on Binance Smart Chain
        </p>
        
        <div className="hero-buttons">
          <Button 
            text="Buy Now" 
            href="#buy"
            variant="primary"
            icon={<FaShoppingCart />}
          />
          <Button 
            text="Join Telegram" 
            href="https://t.me/AgelessCoin"
            variant="secondary"
            icon={<FaTelegram />}
          />
        </div>
        
        <div className="hero-stats">
          <div className="stat">
            <div className="stat-icon">
              <FaUsers size={24} color="#00d4ff" />
            </div>
            <h3>200+</h3>
            <p>Current Holders</p>
          </div>
          
          <div className="stat">
            <div className="stat-icon">
              <FaLock size={24} color="#00d4ff" />
            </div>
            <h3>200 Years</h3>
            <p>Liquidity Locked</p>
          </div>
          
          <div className="stat">
            <div className="stat-icon">
              <FaExchangeAlt size={24} color="#00d4ff" />
            </div>
            <h3>4/4 Tax</h3>
            <p>Redistribution System</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;