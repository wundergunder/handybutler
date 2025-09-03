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
import QuoteModal from './components/QuoteModal';
import { useModal } from './hooks/useModal';

function App() {
  const { isOpen: isQuoteModalOpen, openModal: openQuoteModal, closeModal: closeQuoteModal } = useModal();

  return (
    <div className="min-h-screen">
      <Header onGetQuote={openQuoteModal} />
      <Hero onGetQuote={openQuoteModal} />
      <TrustIndicators />
      <Services />
      <About />
      <Testimonials />
      <ServiceAreas />
      <CTA onGetQuote={openQuoteModal} />
      <Contact />
      <Footer />
      <QuoteModal isOpen={isQuoteModalOpen} onClose={closeQuoteModal} />
    </div>
  );
}

export default App;