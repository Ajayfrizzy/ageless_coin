import React from 'react';
import SectionTitle from '../UI/SectionTitle';
import { FaBolt, FaLock, FaGamepad, FaChartPie, FaUsers, FaNetworkWired } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaBolt size={40} color="#00d4ff" />,
      title: "Decentralized Trading",
      description: "Fast, easy trading without long waiting times"
    },
    {
      icon: <FaLock size={40} color="#00d4ff" />,
      title: "Locked Liquidity",
      description: "200-year liquidity lock for unparalleled stability"
    },
    {
      icon: <FaGamepad size={40} color="#00d4ff" />,
      title: "AGE Ecosystem",
      description: "Coming soon: Own SWAP, mobile app, and The AGE Game"
    },
    {
      icon: <FaChartPie size={40} color="#00d4ff" />,
      title: "Dynamic Tokenomics",
      description: "4/4 tax system ensures sustainable growth"
    },
    {
      icon: <FaUsers size={40} color="#00d4ff" />,
      title: "Community-Driven",
      description: "Holders vote on future projects and developments"
    },
    {
      icon: <FaNetworkWired size={40} color="#00d4ff" />,
      title: "Efficient Network",
      description: "Built on BSC for low fees and fast transactions"
    }
  ];

  return (
    <section id="features" className="features">
      <SectionTitle 
        title="Why Choose Ageless Coin?"
        subtitle="Innovative features designed for success"
      />
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="card-icon">
              {feature.icon}
            </div>
            <h3 className="card-title">{feature.title}</h3>
            <p className="card-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;