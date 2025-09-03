import React, { useState } from 'react';
import { X } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

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

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert("Thank you for your quote request! We'll contact you within 2 hours with your free estimate.");
      setFormData({ name: '', phone: '', email: '', service: '', description: '' });
      setIsSubmitting(false);
      onClose();
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-semibold text-gray-900">
            Get Your Free Quote
          </h3>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={24} className="text-gray-600" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="quote-name" className="block text-gray-900 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="quote-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-900 focus:outline-none transition-colors"
            />
          </div>
          
          <div>
            <label htmlFor="quote-phone" className="block text-gray-900 font-medium mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="quote-phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-900 focus:outline-none transition-colors"
            />
          </div>
          
          <div>
            <label htmlFor="quote-email" className="block text-gray-900 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="quote-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-900 focus:outline-none transition-colors"
            />
          </div>
          
          <div>
            <label htmlFor="quote-service" className="block text-gray-900 font-medium mb-2">
              Service Type
            </label>
            <select
              id="quote-service"
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
            <label htmlFor="quote-description" className="block text-gray-900 font-medium mb-2">
              Project Description
            </label>
            <textarea
              id="quote-description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={3}
              placeholder="Briefly describe your project..."
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-900 focus:outline-none transition-colors resize-vertical"
            />
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-900 text-white py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          >
            {isSubmitting ? 'Sending...' : 'Get My Free Quote'}
          </button>
        </form>
      </div>
    </div>
  );
}