import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const contactMethods = [
  {
    icon: Phone,
    title: 'Phone',
    content: '(555) 123-4567'
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'info@handybutler.com'
  },
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

const serviceOptions = [
  'Carpentry & Repairs',
  'Electrical Work',
  'Plumbing Services',
  'Painting & Drywall',
  'Flooring Services',
  'Doors & Windows',
  'Exterior Repairs',
  'Other'
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert("Thank you for your message! We'll get back to you within 24 hours.");
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-800 mb-8 leading-relaxed">
              Ready to discuss your project? We're here to help with all your handyman needs.
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
          
          {/* Contact Form */}
          <div className="bg-white p-10 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
              Request a Free Quote
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-900 font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-900 focus:outline-none transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-900 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-900 focus:outline-none transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-gray-900 font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-900 focus:outline-none transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-gray-900 font-medium mb-2">
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-900 focus:outline-none transition-colors"
                >
                  <option value="">Select a service</option>
                  {serviceOptions.map((option, index) => (
                    <option key={index} value={option.toLowerCase().replace(/\s+/g, '-')}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-900 font-medium mb-2">
                  Project Description
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Please describe your project in detail..."
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-900 focus:outline-none transition-colors resize-vertical"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-900 text-white py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}