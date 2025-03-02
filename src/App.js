import './App.css';
import ContactUs from './components/ContactUs';
import FAQSection from './components/Faqs';
import FeaturesSection from './components/Feature';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/Hero';
import PricingSection from './components/Pricing';

function App() {
  return (
    <div className="App w-full min-h-screen overflow-x-hidden">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <FAQSection />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
