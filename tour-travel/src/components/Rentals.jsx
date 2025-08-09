import React from 'react';
import { FaMotorcycle, FaStar, FaCheckCircle } from 'react-icons/fa';

export default function Rentals() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="rentals" className="px-6 py-16 bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-gray-800 mb-4">🏍️ Bike & Scooty Rentals</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore the beauty of Nainital and surrounding areas with our reliable and affordable rental options!
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Scooty Card */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
            <div className="relative">
              <img src="ntorq.jpg" alt="Scooty" className="w-full h-48 object-cover" />
              <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Popular
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-2xl font-bold text-gray-800 flex items-center">
                  <FaMotorcycle className="mr-2 text-green-600" />
                  Scooty
                </h4>
                <div className="flex items-center">
                  <FaStar className="text-yellow-400" />
                  <span className="text-sm text-gray-600 ml-1">(4.9)</span>
                </div>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  Automatic transmission
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  Fuel efficient
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  Easy to ride
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  Perfect for city tours
                </div>
              </div>

              <div className="border-t pt-4">
                <p className="text-3xl font-bold text-green-600 mb-2">₹800<span className="text-sm text-gray-500">/day</span></p>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Rent Now
                </button>
              </div>
            </div>
          </div>

        

          
          {/* Bike Card */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
            <div className="relative">
              <img src="apache.jpg" alt="Bike" className="w-full h-48 object-cover" />
              <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Premium
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-2xl font-bold text-gray-800 flex items-center">
                  <FaMotorcycle className="mr-2 text-blue-600" />
                  Bikes
                </h4>
                <div className="flex items-center">
                  <FaStar className="text-yellow-400" />
                  <span className="text-sm text-gray-600 ml-1">(4.8)</span>
                </div>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  Powerful engines
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  Mountain ready
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  Comfortable seating
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  Long distance tours
                </div>
              </div>

              <div className="border-t pt-4">
                <p className="text-3xl font-bold text-blue-600 mb-2">₹1,000<span className="text-sm text-gray-500">/day</span></p>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Rent Now
                </button>
              </div>
            </div>
          </div>

          
          {/* Bike Card */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
            <div className="relative">
              <img src="classic.jpg" alt="Bike" className="w-full h-48 object-cover" />
              <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Premium
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-2xl font-bold text-gray-800 flex items-center">
                  <FaMotorcycle className="mr-2 text-blue-600" />
                  Bikes
                </h4>
                <div className="flex items-center">
                  <FaStar className="text-yellow-400" />
                  <span className="text-sm text-gray-600 ml-1">(4.8)</span>
                </div>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  Powerful engines
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  Mountain ready
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  Comfortable seating
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  Long distance tours
                </div>
              </div>

              <div className="border-t pt-4">
                <p className="text-3xl font-bold text-blue-600 mb-2">₹1,200<span className="text-sm text-gray-500">/day</span></p>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Rent Now
                </button>
              </div>
            </div>
          </div>

          
          {/* Bike Card */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
            <div className="relative">
              <img src="him.jpg" alt="Bike" className="w-full h-48 object-cover" />
              <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Premium
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-2xl font-bold text-gray-800 flex items-center">
                  <FaMotorcycle className="mr-2 text-blue-600" />
                  Bikes
                </h4>
                <div className="flex items-center">
                  <FaStar className="text-yellow-400" />
                  <span className="text-sm text-gray-600 ml-1">(5.0)</span>
                </div>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  Powerful engines
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  Mountain ready
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  Comfortable seating
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  Long distance tours
                </div>
              </div>

              <div className="border-t pt-4">
                <p className="text-3xl font-bold text-blue-600 mb-2">₹1,500<span className="text-sm text-gray-500">/day</span></p>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Rent Now
                </button>
              </div>
            </div>
          </div>




          {/* Special Package */}
          <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-white overflow-hidden">
            <div className="p-6">
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold mb-2">🎯 Special Package</h4>
                <p className="text-purple-100">Weekend Adventure</p>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm">
                  <FaCheckCircle className="mr-2" />
                  Scooty + Bike combo(3 days)
                </div>
                <div className="flex items-center text-sm">
                  <FaCheckCircle className="mr-2" />
                  Bike price vary according to variant
                </div>
                <div className="flex items-center text-sm">
                  <FaCheckCircle className="mr-2" />
                  Free helmet & safety gear
                </div>
                <div className="flex items-center text-sm">
                  <FaCheckCircle className="mr-2" />
                  Route guidance included
                </div>
              </div>

              <div className="border-t border-purple-400 pt-4">
                <p className="text-3xl font-bold mb-2">₹5,400<span className="text-sm text-purple-200">/package</span></p>
                <p className="text-sm text-purple-200 mb-4">Save ₹500 on combo</p>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-white text-purple-600 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Book Package
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Rental Features */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🛡️</span>
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">Safety First</h4>
            <p className="text-sm text-gray-600">Helmets & safety gear provided</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⏰</span>
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">Flexible Timing</h4>
            <p className="text-sm text-gray-600">Pickup & drop at your convenience</p>
          </div>
          <div className="text-center">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🗺️</span>
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">Route Guidance</h4>
            <p className="text-sm text-gray-600">Best routes & local tips</p>
          </div>
          <div className="text-center">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔧</span>
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">24/7 Support</h4>
            <p className="text-sm text-gray-600">Emergency assistance available</p>
          </div>
        </div>
      </div>
    </section>
  );
}
