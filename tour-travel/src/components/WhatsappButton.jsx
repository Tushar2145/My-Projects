import React from 'react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919999999999?text=Hi%20Negi%20Tour%20%26%20Travels%2C%20I%20want%20to%20book%20a%20trip"
      className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg flex items-center space-x-2 z-50"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" className="w-6 h-6" alt="WhatsApp" />
      <span>Book on WhatsApp</span>
    </a>
  );
}