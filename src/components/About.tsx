import React from 'react';

const features = [
  {
    icon: '🛡️',
    title: 'Licensed & Insured',
    description: 'Fully licensed and insured for your peace of mind'
  },
  {
    icon: '⚡',
    title: 'Fast Response',
    description: 'Same-day service available for urgent repairs'
  },
  {
    icon: '💯',
    title: 'Quality Guarantee',
    description: '100% satisfaction guarantee on all our work'
  },
  {
    icon: '💰',
    title: 'Fair Pricing',
    description: 'Transparent, competitive pricing with no hidden fees'
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose Handy Butler?
            </h2>
            <p className="text-lg text-gray-800 mb-10 leading-relaxed">
              With over 15 years of experience serving homeowners, Handy Butler has built a reputation for quality workmanship, reliability, and exceptional customer service. Our licensed and insured professionals are committed to getting the job done right the first time.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="text-2xl p-3 bg-blue-50 rounded-xl min-w-fit">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-gray-700">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/5691538/pexels-photo-5691538.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop" 
              alt="Professional handyman with tools" 
              className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}