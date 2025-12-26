import React from 'react';
import SectionTitle from '../UI/SectionTitle';
import { FaCheckCircle } from 'react-icons/fa';

const Roadmap = () => {
  const phases = [
    {
      phase: "Phase 1",
      items: [
        "Stealth Launch on PancakeSwap",
        "1000 TG Members",
        "200 Holders",
        "Community Raids & Shills"
      ]
    },
    {
      phase: "Phase 2",
      items: [
        "2000 TG Members",
        "Introduction to AGE SWAP",
        "Marketing & More Visibility",
        "Whitepaper & Website Update"
      ]
    },
    {
      phase: "Phase 3",
      items: [
        "5000 TG Members",
        "3000 Holders",
        "AGE App Interface",
        "Whitepaper & Website Update"
      ]
    },
    {
      phase: "Phase 4",
      items: [
        "10,000 TG Members",
        "5000 Holders",
        "Poocoin Ads & Billboard Ads",
        "Continuous Development"
      ]
    }
  ];

  return (
    <section id="roadmap" className="roadmap">
      <SectionTitle 
        title="Roadmap"
        subtitle="Our journey to revolutionize DeFi"
      />
      <div className="roadmap-timeline">
        {phases.map((phase, index) => (
          <div key={index} className="phase-card">
            <div className="phase-header">
              <span className="phase-number">{phase.phase}</span>
            </div>
            <ul className="phase-items">
              {phase.items.map((item, itemIndex) => (
                <li key={itemIndex}><FaCheckCircle style={{ marginRight: '8px', color: '#00d4ff' }} /> {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Roadmap;