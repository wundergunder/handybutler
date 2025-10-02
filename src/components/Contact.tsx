import React from 'react';
import { MapPin, Clock } from 'lucide-react';

const contactMethods = [
  {
    icon: MapPin,
    title: 'Service Area',
    content: 'Greater Metropolitan Area'
  },
  {
    icon: Clock,
    title: 'Hours',
    content: 'Mon-Fri: 7AM-7PM\nSat: 8AM-5PM\nSun: Emergency Only'
  }
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-800 mb-8 leading-relaxed">
              Ready to discuss your project? Chat with our team or use our convenient contact form below.
            </p>
            
            <div className="space-y-6">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="p-3 bg-blue-50 rounded-xl">
                      <IconComponent size={24} className="text-blue-900" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {method.title}
                      </h4>
                      <p className="text-gray-700 whitespace-pre-line">
                        {method.content}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* GHL Booking Form */}
          <div className="bg-white p-10 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
              Contact Us
            </h3>
            
            <div className="text-center space-y-6">
              <p className="text-gray-700 mb-6">
                The easiest way to get started is to chat with our team using the chat widget in the bottom right corner.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-xl">
                <h4 className="font-semibold text-blue-900 mb-2">💬 Live Chat Available</h4>
                <p className="text-blue-800 text-sm">
                  Click the chat icon in the bottom right to speak with our team instantly!
                </p>
              </div>
              
              <div className="pt-4">
                <h4 className="font-semibold text-gray-900 mb-4">Or call us directly:</h4>
                <div className="space-y-2 text-gray-700">
                  <p className="text-2xl font-bold text-blue-900">(555) 123-HANDY</p>
                  <p className="text-sm">Mon-Fri: 7AM-7PM | Sat: 8AM-5PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}