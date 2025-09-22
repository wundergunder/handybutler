import React from 'react';
import { X } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-semibold text-gray-900">
            Book Your Appointment
          </h3>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={24} className="text-gray-600" />
          </button>
        </div>
        
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
            id="HDn9s0fLB9MCXlm3iTOs_modal"
            title="Book Appointment"
          />
        </div>
      </div>
      
      <script src="https://link.msgsndr.com/js/form_embed.js" type="text/javascript"></script>
    </div>
  );
}