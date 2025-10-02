import React from 'react';
interface CTAProps {
  onChatWithUs: () => void;
}

export default function CTA({ onChatWithUs }: CTAProps) {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 to-blue-700 text-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4">
          Have Questions? Let's Chat!
        </h2>
        <p className="text-xl mb-10 opacity-90 leading-relaxed">
          Chat with our team to discuss your project and get instant answers to your questions.
        </p>
        
        <div className="flex justify-center">
          <button 
            onClick={onChatWithUs}
            className="bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 hover:-translate-y-1 transition-all duration-300 shadow-xl"
          >
            Start Chatting
          </button>
        </div>
      </div>
    </section>
  );
}