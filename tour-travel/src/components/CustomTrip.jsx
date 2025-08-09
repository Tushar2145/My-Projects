import React, { useState } from 'react';
import { FaMapMarkedAlt, FaCalendarAlt, FaCar, FaUsers, FaStar } from 'react-icons/fa';

export default function CustomTrip() {
  const [formData, setFormData] = useState({
    destination: '',
    days: '',
    vehicle: '',
    passengers: '',
    date: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { destination, days, vehicle, passengers, date } = formData;

    const message = `🧳 Custom Trip Booking Request\n\n📍 Destination: ${destination}\n🗓️ Days: ${days}\n🚗 Vehicle: ${vehicle}\n👥 Passengers: ${passengers}\n📅 Date: ${date}`;

    const whatsappURL = `https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-gray-800 mb-4">🧳 Custom Trip Planning</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Plan your personalized trip around Nainital with flexible options
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Booking Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h4 className="text-2xl font-bold text-gray-800 mb-6">Plan Your Custom Trip</h4>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                  <FaMapMarkedAlt className="mr-2 text-blue-600" />
                  Destination
                </label>
                <input
                  type="text"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  placeholder="Enter destination (e.g., Mukteshwar, Ranikhet)"
                  className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                    <FaCalendarAlt className="mr-2 text-blue-600" />
                    Number of Days
                  </label>
                  <input
                    type="number"
                    name="days"
                    value={formData.days}
                    onChange={handleChange}
                    min="1"
                    max="15"
                    placeholder="1-15 days"
                    className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                    <FaUsers className="mr-2 text-blue-600" />
                    Passengers
                  </label>
                  <input
                    type="number"
                    name="passengers"
                    value={formData.passengers}
                    onChange={handleChange}
                    min="1"
                    max="12"
                    placeholder="1-12 people"
                    className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                  <FaCar className="mr-2 text-blue-600" />
                  Select Vehicle
                </label>
                <select
                  name="vehicle"
                  value={formData.vehicle}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300"
                  required
                >
                  <option value="">Choose your vehicle</option>
                  <option value="swift-dzire">🚗 Swift Dzire (4 Seater)</option>
                  <option value="innova">🚐 Innova (7 Seater)</option>
                  <option value="ertiga">🚐 Ertiga (6 Seater)</option>
                  <option value="xylo">🚙 Xylo (6 Seater)</option>
                  <option value="tempo-traveller">🚐 Tempo Traveller (12 Seater)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold text-lg shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105"
              >
                Submit Booking Request
              </button>
            </form>
          </div>

          {/* Ratings / Testimonials Section */}
<div className="flex flex-col justify-center items-center bg-gradient-to-r from-indigo-200 to-purple-200 rounded-2xl p-8 shadow-inner">
  <FaStar className="text-yellow-400 text-6xl mb-4" />
  <p className="text-2xl font-bold text-gray-800 text-center mb-3">
    Trusted by 300+ Explorers
  </p>
  <p className="text-gray-700 text-lg text-center mb-2 italic">
    “Thanks to Negi Tour & Travel’s, our trip to Nainital, Ranikhet & Mukteshwar was smooth, scenic, and unforgettable!”
  </p>
  <p className="text-gray-700 text-lg text-center mb-2 italic">
    “The custom trip plan was exactly what we needed — great cab, helpful driver, and the best local spots.”
  </p>
  <p className="text-gray-700 text-base text-center mt-4">
    ✅ Clean and comfortable cabs<br />
    ✅ Flexible planning options<br />
    ✅ 24x7 local support<br />
    ✅ Hand-picked hill destinations
  </p>
</div>

        </div>
      </div>
    </section>
  );
}
