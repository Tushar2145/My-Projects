import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaWhatsapp, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-blue-400">🌄 Negi Tour & Travels</h3>
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner for unforgettable travel experiences in Nainital and beyond. 
              We provide premium cab services, bike rentals, and guided tours.
            </p>
            <div className="flex space-x-4">
              <button className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <FaFacebook size={20} />
              </button>
              <button className="text-gray-400 hover:text-pink-400 transition-colors duration-300">
                <FaInstagram size={20} />
              </button>
              <button className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                <FaWhatsapp size={20} />
              </button>
              <button className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <FaTwitter size={20} />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-400">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('cabs')}
                  className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  🚖 Cab Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('rentals')}
                  className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  🏍️ Bike Rentals
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('gallery')}
                  className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  📸 Photo Gallery
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('reviews')}
                  className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  ⭐ Customer Reviews
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  📞 Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-400">Our Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">🚗 Local Sightseeing</li>
              <li className="text-gray-300">🏔️ Outstation Tours</li>
              <li className="text-gray-300">🗺️ Custom Trip Planning</li>
              <li className="text-gray-300">🏍️ Bike & Scooty Rentals</li>
              <li className="text-gray-300">👥 Group Tours</li>
              <li className="text-gray-300">🎯 Adventure Packages</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-400">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaPhone className="text-blue-400" />
                <span className="text-gray-300">+91 8534007862</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-blue-400" />
                <span className="text-gray-300">info@negitours.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-blue-400 mt-1" />
                <span className="text-gray-300">
                  Mallital, Nainital<br />
                  Uttarakhand, India
                </span>
              </div>
            </div>
            
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919999999999?text=Hi%20Negi%20Tour%20%26%20Travels%2C%20I%20want%20to%20book%20a%20trip"
              className="inline-flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              &copy; 2025 Negi Tour & Travels. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <button className="text-gray-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-white transition-colors duration-300">
                Terms of Service
              </button>
              <button className="text-gray-400 hover:text-white transition-colors duration-300">
                Refund Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}