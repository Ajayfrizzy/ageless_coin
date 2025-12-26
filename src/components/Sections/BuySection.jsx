import React from 'react';
import Button from '../UI/Buttons';
import SectionTitle from '../UI/SectionTitle';
import { FaExchangeAlt, FaChartLine } from 'react-icons/fa';

const BuySection = () => {
  return (
    <section id="buy" className="buy-section">
      <SectionTitle 
        title="Get Ageless Coin"
        subtitle="Join the revolution today"
      />
      <div className="buy-options">
        <div className="buy-card">
          <h3><FaExchangeAlt style={{ marginRight: '8px', verticalAlign: 'middle' }} /> PancakeSwap</h3>
          <p>The most popular DEX on BSC</p>
          <Button 
            text="Buy on PancakeSwap"
            href="https://pancakeswap.finance/swap?outputCurrency=0xE90eDd71fD0a7CC6d8de30fD6D188b2c9D83A7d5"
            variant="primary"
            fullWidth
            external
          />
        </div>
        <div className="buy-card">
          <h3><FaChartLine style={{ marginRight: '8px', verticalAlign: 'middle' }} /> PooCoin App</h3>
          <p>Track and trade on PooCoin</p>
          <Button 
            text="Buy on PooCoin"
            href="https://poocoin.app/tokens/0xE90eDd71fD0a7CC6d8de30fD6D188b2c9D83A7d5"
            variant="secondary"
            fullWidth
            external
          />
        </div>
      </div>
      <div className="instructions">
        <h4>How to Buy:</h4>
        <ol>
          <li>Connect your wallet (MetaMask, Trust Wallet, etc.)</li>
          <li>Ensure you're on Binance Smart Chain network</li>
          <li>Have BNB for gas fees</li>
          <li>Use the contract address above</li>
          <li>Set slippage to 8-12%</li>
        </ol>
      </div>
    </section>
  );
};

export default BuySection;