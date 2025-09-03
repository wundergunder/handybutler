import React from 'react';

const testimonials = [
  {
    rating: 5,
    text: "Handy Butler did an amazing job fixing our kitchen cabinets and installing new shelving. Professional, punctual, and affordable. Highly recommended!",
    author: "Sarah Johnson",
    location: "Downtown Area"
  },
  {
    rating: 5,
    text: "Quick response time and excellent work quality. They fixed our leaky faucet and installed new light fixtures. Will definitely call them again!",
    author: "Mike Rodriguez",
    location: "Westside"
  },
  {
    rating: 5,
    text: "Outstanding service! They helped us with multiple home repairs and the pricing was very fair. Clean work and great communication throughout.",
    author: "Lisa Chen",
    location: "Northside"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-700">
            Don't just take our word for it
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-800 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <div>
                <h4 className="font-semibold text-gray-900">
                  {testimonial.author}
                </h4>
                <p className="text-gray-600 text-sm">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}