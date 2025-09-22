import React from 'react';

const footerLinks = {
  services: [
    { name: 'Carpentry', href: '#services' },
    { name: 'Electrical', href: '#services' },
    { name: 'Plumbing', href: '#services' },
    { name: 'Painting', href: '#services' }
  ],
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
    { name: 'Careers', href: '#' }
  ],
  contact: [
    'info@handybutler.com',
    'Mon-Fri: 7AM-7PM',
    'Professional Service Available'
  ]
};

export default function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        const headerHeight = 80;
        const targetPosition = element.offsetTop - headerHeight - 20;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🔧</span>
              <span className="text-2xl font-bold">Handy Butler</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner for all home improvement and repair needs. Licensed, insured, and committed to excellence.
            </p>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-orange-500 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-orange-500 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              {footerLinks.contact.map((item, index) => (
                <li key={index} className="text-gray-300 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Handy Butler. All rights reserved. | Licensed & Insured
          </p>
        </div>
      </div>
    </footer>
  );
}