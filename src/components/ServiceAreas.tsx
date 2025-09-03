import React from 'react';

const serviceAreas = [
  {
    name: 'Downtown',
    description: 'Central business district and surrounding neighborhoods'
  },
  {
    name: 'Westside',
    description: 'Residential areas west of downtown'
  },
  {
    name: 'Northside',
    description: 'Northern suburbs and communities'
  },
  {
    name: 'Eastside',
    description: 'Eastern residential districts'
  },
  {
    name: 'Southside',
    description: 'Southern neighborhoods and suburbs'
  },
  {
    name: 'Suburbs',
    description: 'Surrounding suburban communities'
  }
];

export default function ServiceAreas() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Areas We Serve
          </h2>
          <p className="text-lg text-gray-700">
            Proudly serving the greater metropolitan area
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceAreas.map((area, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl text-center shadow-md hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                {area.name}
              </h3>
              <p className="text-gray-700 text-sm">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}