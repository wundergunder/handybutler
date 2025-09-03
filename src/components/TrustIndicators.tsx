import React from 'react';

const trustData = [
  { number: '500+', label: 'Happy Customers' },
  { number: '15+', label: 'Years Experience' },
  { number: '4.9★', label: 'Average Rating' },
  { number: '24/7', label: 'Emergency Service' }
];

export default function TrustIndicators() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustData.map((item, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl text-center shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-3xl font-bold text-blue-900 mb-2">
                {item.number}
              </div>
              <div className="text-gray-700 font-medium">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}