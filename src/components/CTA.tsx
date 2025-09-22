import React from 'react';
import { Phone } from 'lucide-react';
interface CTAProps {
  onGetQuote: () => void;
}

export default function CTA({ onGetQuote }: CTAProps) {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 to-blue-700 text-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-xl mb-10 opacity-90 leading-relaxed">
          Get your free estimate today and see why hundreds of customers trust Handy Butler for their home repair needs.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={onGetQuote}
            className="bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 hover:-translate-y-1 transition-all duration-300 shadow-xl"
          >
            Get Free Quote
          </button>
          <a 
            href="tel:(555) 123-4567"
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-900 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Phone size={20} />
            Call (555) 123-4567
          </a>
        </div>
      </div>
    </section>
  );
}