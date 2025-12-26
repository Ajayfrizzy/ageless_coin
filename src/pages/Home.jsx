import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import Hero from "../components/Sections/Hero";
import Features from "../components/Sections/Features";
import Tokenomics from "../components/Sections/Tokenomics";
import Roadmap from "../components/Sections/Roadmap";
import BuySection from "../components/Sections/BuySection";
import Community from "../components/Sections/Community";

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Tokenomics />
        <Roadmap />
        <BuySection />
        <Community />
      </main>
      <Footer />
    </div>
  );
};

export default Home;