import React from 'react';
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
          Book your appointment today and see why hundreds of customers trust Handy Butler for their home repair needs.
        </p>
        
        <div className="flex justify-center">
          <button 
            onClick={onGetQuote}
            className="bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 hover:-translate-y-1 transition-all duration-300 shadow-xl"
          >
            Book Your Appointment
          </button>
        </div>
      </div>
    </section>
  );
}