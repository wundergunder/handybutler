import React from 'react';

export default function CallToAction() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 to-blue-700 text-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-xl mb-10 opacity-90 leading-relaxed">
          Click the chat widget in the bottom right corner to speak with our team instantly and get answers to all your questions.
        </p>
        
        <div className="flex justify-center items-center gap-3">
          <div className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-semibold border-2 border-white/30 flex items-center gap-3">
            <span className="text-2xl">💬</span>
            <span>Look for the chat icon in the bottom right corner!</span>
          </div>
        </div>
      </div>
    </section>
  );
}