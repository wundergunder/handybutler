import React from 'react';

const serviceCategories = [
  {
    title: 'Indoor Services',
    services: [
      {
        icon: '🔨',
        title: 'Carpentry & Repairs',
        description: 'Custom shelving, cabinet repairs, trim work, and general carpentry',
        price: 'Starting at $75/hr'
      },
      {
        icon: '💡',
        title: 'Electrical Work',
        description: 'Light fixtures, outlet installation, ceiling fans, and minor electrical repairs',
        price: 'Starting at $85/hr'
      },
      {
        icon: '🚿',
        title: 'Plumbing Services',
        description: 'Faucet installation, toilet repairs, pipe fixes, and drain cleaning',
        price: 'Starting at $80/hr'
      },
      {
        icon: '🎨',
        title: 'Painting & Drywall',
        description: 'Interior painting, drywall repair, hole patching, and wall preparation',
        price: 'Starting at $65/hr'
      },
      {
        icon: '🏠',
        title: 'Flooring Services',
        description: 'Hardwood repair, tile installation, carpet repairs, and floor maintenance',
        price: 'Starting at $70/hr'
      },
      {
        icon: '🪟',
        title: 'Doors & Windows',
        description: 'Door hanging, window repairs, weatherstripping, and hardware installation',
        price: 'Starting at $75/hr'
      }
    ]
  },
  {
    title: 'Outdoor Services',
    services: [
      {
        icon: '🏡',
        title: 'Exterior Repairs',
        description: 'Siding repair, roof maintenance, gutter cleaning, and exterior painting',
        price: 'Starting at $85/hr'
      },
      {
        icon: '🌿',
        title: 'Deck & Patio',
        description: 'Deck staining, patio repairs, outdoor fixture installation',
        price: 'Starting at $90/hr'
      },
      {
        icon: '🚪',
        title: 'Garage Services',
        description: 'Garage door repairs, opener installation, and general garage maintenance',
        price: 'Starting at $95/hr'
      },
      {
        icon: '🔧',
        title: 'General Maintenance',
        description: 'Pressure washing, caulking, minor landscaping, and seasonal maintenance',
        price: 'Starting at $65/hr'
      }
    ]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Professional handyman services for every need
          </p>
        </div>

        <div className="space-y-16">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-3xl font-semibold text-blue-900 text-center mb-8">
                {category.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <div 
                    key={serviceIndex}
                    className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:-translate-y-2 hover:shadow-xl hover:border-blue-900 transition-all duration-300 group"
                  >
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      {service.title}
                    </h4>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="text-orange-500 font-semibold">
                      {service.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}