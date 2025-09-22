import React from 'react';
import { Mail, MapPin, Clock } from 'lucide-react';

const contactMethods = [
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

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Book Your Appointment
            </h2>
            <p className="text-lg text-gray-800 mb-8 leading-relaxed">
              Ready to discuss your project? Schedule your appointment using our convenient booking system.
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
              Schedule Your Service
            </h3>
            
            <div className="w-full">
              <iframe 
                src="https://api.leadconnectorhq.com/widget/booking/HDn9s0fLB9MCXlm3iTOs" 
                style={{
                  width: '100%',
                  border: 'none',
                  overflow: 'hidden',
                  minHeight: '600px'
                }}
                scrolling="no" 
                id="HDn9s0fLB9MCXlm3iTOs_1758582970081"
                title="Book Appointment"
              />
            </div>
          </div>
        </div>
      </div>
      
      <script src="https://link.msgsndr.com/js/form_embed.js" type="text/javascript"></script>
    </section>
  );
}