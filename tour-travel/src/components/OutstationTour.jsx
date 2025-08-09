import React, { useState } from 'react';
import { FaMapMarkedAlt, FaCalendarAlt, FaCar, FaUsers, FaStar, FaRoute } from 'react-icons/fa';

export default function OutstationTour() {
  const [formData, setFormData] = useState({
    destination: '',
    days: '',
    vehicle: '',
    passengers: '',
    date: '',
    pickup: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { destination, days, vehicle, passengers, date, pickup } = formData;

    const destinationText = {
      'delhi': 'Delhi City Tour',
      'jim-corbett': 'Jim Corbett National Park',
      'mussoorie': 'Mussoorie Hill Station',
      'agra': 'Agra Taj Mahal',
      'rishikesh': 'Rishikesh Adventure',
      'haridwar': 'Haridwar Pilgrimage'
    }[destination] || destination;

    const vehicleText = {
      'swift-dzire': 'Swift Dzire (4 Seater)',
      'innova': 'Innova (7 Seater)',
      'ertiga': 'Ertiga (6 Seater)',
      'xylo': 'WagonR (4 Seater)',
      'tempo-traveler': 'Tempo Traveler (12 Seater)'
    }[vehicle] || vehicle;

    const phone = '919876543210'; // ✅ Replace with your WhatsApp number
    const message = `*Outstation Tour Booking Request*%0A
📍 *Destination:* ${destinationText}%0A
📅 *Number of Days:* ${days}%0A
🚘 *Vehicle:* ${vehicleText}%0A
👥 *Passengers:* ${passengers}%0A
🗓️ *Start Date:* ${date}%0A
📍 *Pickup Location:* ${pickup}%0A
%0APlease confirm availability and pricing.`;

    const whatsappURL = `https://wa.me/${phone}?text=${message}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-gray-800 mb-4">🏔️ Outstation Tour Booking</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore amazing destinations beyond Nainital with our comfortable and reliable outstation tours
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Booking Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h4 className="text-2xl font-bold text-gray-800 mb-6">Book Your Outstation Tour</h4>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                  <FaMapMarkedAlt className="mr-2 text-green-600" />
                  Select Destination
                </label>
                <select 
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all duration-300"
                  required
                >
                  <option value="">Choose your destination</option>
                  <option value="delhi">🏙️ Delhi City Tour</option>
                  <option value="jim-corbett">🐅 Jim Corbett National Park</option>
                  <option value="mussoorie">⛰️ Mussoorie Hill Station</option>
                  <option value="agra">🏛️ Agra Taj Mahal</option>
                  <option value="rishikesh">🕉️ Rishikesh Adventure</option>
                  <option value="haridwar">🙏 Haridwar Pilgrimage</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                    <FaCalendarAlt className="mr-2 text-green-600" />
                    Number of Days
                  </label>
                  <input
                    type="number"
                    name="days"
                    value={formData.days}
                    onChange={handleChange}
                    min="1"
                    max="14"
                    className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all duration-300"
                    placeholder="1-14 days"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                    <FaUsers className="mr-2 text-green-600" />
                    Passengers
                  </label>
                  <input
                    type="number"
                    name="passengers"
                    value={formData.passengers}
                    onChange={handleChange}
                    min="1"
                    max="8"
                    className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all duration-300"
                    placeholder="1-8 people"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                  <FaCar className="mr-2 text-green-600" />
                  Select Vehicle
                </label>
                <select 
                  name="vehicle"
                  value={formData.vehicle}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all duration-300"
                  required
                >
                  <option value="">Choose your vehicle</option>
                  <option value="swift-dzire">🚗 Swift Dzire (4 Seater)</option>
                  <option value="innova">🚐 Innova (7 Seater)</option>
                  <option value="ertiga">🚐 Ertiga (6 Seater)</option>
                  <option value="xylo">🚐 Wagonr (4 Seater)</option>
                  <option value="tempo-traveler">🚌 Tempo Traveler (12 Seater)</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                    <FaRoute className="mr-2 text-green-600" />
                    Pickup Location
                  </label>
                  <input
                    type="text"
                    name="pickup"
                    value={formData.pickup}
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all duration-300"
                    placeholder="Your pickup address"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl font-semibold text-lg shadow-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105"
              >
                Book Outstation Tour
              </button>
            </form>
          </div>

           {/* Tour Information */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h4 className="text-2xl font-bold text-gray-800 mb-4">🌟 Popular Outstation Tours</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
                  <div>
                    <h5 className="font-semibold text-gray-800">Jim Corbett Safari</h5>
                    <p className="text-sm text-gray-600">Wildlife safari, jungle stay</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-green-600">₹7,000</p>
                    <div className="flex items-center">
                      <FaStar className="text-yellow-400 text-sm" />
                      <span className="text-sm text-gray-600 ml-1">4.9</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                  <div>
                    <h5 className="font-semibold text-gray-800">Delhi City Tour</h5>
                    <p className="text-sm text-gray-600">Pick-up & Drop</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-blue-600">₹8,500</p>
                    <div className="flex items-center">
                      <FaStar className="text-yellow-400 text-sm" />
                      <span className="text-sm text-gray-600 ml-1">4.8</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-purple-50 rounded-xl">
                  <div>
                    <h5 className="font-semibold text-gray-800">Mussoorie Adventure</h5>
                    <p className="text-sm text-gray-600">Hill station, adventure sports</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-purple-600">₹9,500</p>
                    <div className="flex items-center">
                      <FaStar className="text-yellow-400 text-sm" />
                      <span className="text-sm text-gray-600 ml-1">4.7</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-4">✨ Tour Inclusions</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="mr-2">✅</span>
                  Professional driver cum guide
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✅</span>
                  AC vehicle with fuel
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✅</span>
                  All tolls and parking
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✅</span>
                  Hotel bookings assistance
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✅</span>
                  ️24/7 customer support
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✅</span>
                  Flexible itinerary
                </li>
              </ul>
            </div>

            <div className="bg-yellow-50 rounded-2xl p-6 border border-yellow-200">
              <h5 className="font-semibold text-yellow-800 mb-2">💡 Pro Tip</h5>
              <p className="text-yellow-700 text-sm">
                Book your outstation tour at least 3-5 days in advance for the best rates and availability. 
                We also offer custom itineraries for special requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
