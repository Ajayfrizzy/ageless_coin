import Button from "../UI/Buttons";
import SectionTitle from "../UI/SectionTitle";
import { FaTelegram, FaTwitter, FaCheckCircle } from 'react-icons/fa';

const Community = () => {
  return (
    <section id="community" className="community">
      <SectionTitle 
        title="Join Our Community"
        subtitle="Be part of the movement"
      />
      <div className="community-content">
        <div className="community-card">
          <h3><FaTelegram size={24} style={{ marginRight: '8px', verticalAlign: 'middle' }} /> Telegram</h3>
          <p>Join our main chat for announcements, discussions, and support</p>
          <Button 
            text="Join Telegram"
            href="https://t.me/AgelessCoin"
            variant="telegram"
            icon={<FaTelegram />}
            external
          />
        </div>
        <div className="community-card">
          <h3><FaTwitter size={24} style={{ marginRight: '8px', verticalAlign: 'middle' }} /> Twitter / X</h3>
          <p>Follow us for updates, memes, and community highlights</p>
          <Button 
            text="Follow on Twitter"
            href="https://twitter.com/Agelesscoi49279"
            variant="twitter"
            icon={<FaTwitter />}
            external
          />
        </div>
      </div>
      <div className="community-tips">
        <h4>Community Engagement Tips:</h4>
        <ul>
          <li><FaCheckCircle style={{ marginRight: '8px', color: '#00d4ff' }} /> Stay informed with updates</li>
          <li><FaCheckCircle style={{ marginRight: '8px', color: '#00d4ff' }} /> Engage in community discussions</li>
          <li><FaCheckCircle style={{ marginRight: '8px', color: '#00d4ff' }} /> Participate in governance voting</li>
          <li><FaCheckCircle style={{ marginRight: '8px', color: '#00d4ff' }} /> Share your insights and ideas</li>
          <li><FaCheckCircle style={{ marginRight: '8px', color: '#00d4ff' }} /> Help new members get started</li>
        </ul>
      </div>
    </section>
  );
};

export default Community;