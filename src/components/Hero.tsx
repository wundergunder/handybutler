import React from 'react';
interface HeroProps {
  onGetQuote: () => void;
}

export default function Hero({ onGetQuote }: HeroProps) {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
          alt="Professional handyman with screwdriver bits" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/85 to-orange-500/75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="max-w-2xl text-white">
          <h1 
            className="text-5xl md:text-6xl font-bold leading-tight mb-6"
            style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.9)' }}
          >
            Professional Handyman Services You Can Trust
          </h1>
          <p 
            className="text-xl mb-8 leading-relaxed"
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
          >
            Licensed, insured, and experienced professionals ready to tackle any home improvement project. From minor repairs to major renovations.
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-6 mb-10">
            {[
              'Licensed & Insured',
              'Same-Day Service', 
              '100% Satisfaction Guarantee'
            ].map((feature) => (
              <div 
                key={feature}
                className="flex items-center gap-2"
                style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
              >
                <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  ✓
                </span>
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onGetQuote}
              className="bg-blue-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 hover:-translate-y-1 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              Get Free Estimate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}