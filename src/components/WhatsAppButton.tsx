import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="https://wa.me/919045440618"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all transform hover:scale-110"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </a>
    </div>
  );
};

export default WhatsAppButton;