import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onGetQuote: () => void;
}

export default function Header({ onGetQuote }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const targetPosition = element.offsetTop - headerHeight - 20;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/98 backdrop-blur-md shadow-lg' 
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <span className="text-4xl transform -rotate-12 transition-transform duration-300 hover:rotate-0">
            🔧
          </span>
          <span className="text-2xl font-bold text-blue-900">Handy Butler</span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-900 font-medium hover:text-blue-900 transition-colors relative group"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-900 font-medium hover:text-blue-900 transition-colors relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-900 font-medium hover:text-blue-900 transition-colors relative group"
            >
              Reviews
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-900 font-medium hover:text-blue-900 transition-colors relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </li>
        </ul>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={onGetQuote}
            className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Book Appointment
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-gray-900"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
            <div className="px-6 py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left text-gray-900 font-medium py-2"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-gray-900 font-medium py-2"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="block w-full text-left text-gray-900 font-medium py-2"
              >
                Reviews
              </button>
                <button 
                  onClick={onGetQuote}
                  className="w-full bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold"
                >
                  Book Appointment
                </button>
              </div>
          </div>
        )}
      </nav>
    </header>
  );
}