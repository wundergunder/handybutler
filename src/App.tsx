import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustIndicators from './components/TrustIndicators';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import ServiceAreas from './components/ServiceAreas';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const handleChatWithUs = () => {
    // The chatbot widget will handle the interaction
    // We can add any additional logic here if needed
    console.log('Chat widget should be available in bottom right corner');
  };

  return (
    <div className="min-h-screen">
      <Header onChatWithUs={handleChatWithUs} />
      <Hero onChatWithUs={handleChatWithUs} />
      <TrustIndicators />
      <Services />
      <About />
      <Testimonials />
      <ServiceAreas />
      <CTA onChatWithUs={handleChatWithUs} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;