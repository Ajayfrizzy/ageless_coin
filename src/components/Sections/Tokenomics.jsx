import React, { useState } from 'react';
import SectionTitle from '../UI/SectionTitle';
import { FaBullseye, FaTint, FaCopy, FaCheck, FaCheckCircle } from 'react-icons/fa';

const Tokenomics = () => {
  const [copied, setCopied] = useState(false);
  const contractAddress = "0xE90eDd71fD0a7CC6d8de30fD6D188b2c9D83A7d5";

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="tokenomics" className="tokenomics">
      <SectionTitle 
        title="The 4/4 Tax System"
        subtitle="Every transaction fuels growth and rewards holders"
      />
      <div className="tokenomics-content">
        <div className="tax-breakdown">
          <div className="tax-card">
            <h3><FaBullseye style={{ marginRight: '8px', verticalAlign: 'middle' }} /> 4% Redistribution</h3>
            <ul>
              <li><FaCheckCircle style={{ marginRight: '8px', color: '#00d4ff' }} /> 2% for Marketing</li>
              <li><FaCheckCircle style={{ marginRight: '8px', color: '#00d4ff' }} /> 2% for BuyBacks & Development</li>
            </ul>
            <p>Benefits all existing holders, incentivizing steady growth</p>
          </div>
          <div className="tax-card">
            <h3><FaTint style={{ marginRight: '8px', verticalAlign: 'middle' }} /> 4% Liquidity Pool</h3>
            <ul>
              <li><FaCheckCircle style={{ marginRight: '8px', color: '#00d4ff' }} /> 2% from buy transactions</li>
              <li><FaCheckCircle style={{ marginRight: '8px', color: '#00d4ff' }} /> 2% from sell transactions</li>
            </ul>
            <p>Enhances trade efficiency & reduces price volatility</p>
          </div>
        </div>
        <div className="contract-info">
          <h4>Contract Address</h4>
          <div className="address-container">
            <code>{contractAddress}</code>
            <button 
              className={`copy-btn ${copied ? 'copied' : ''}`}
              onClick={handleCopy}
            >
              {copied ? <><FaCheck /> Copied!</> : <><FaCopy /> Copy</>}
            </button>
          </div>
          <p className="note">Always verify the contract address before purchasing</p>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;