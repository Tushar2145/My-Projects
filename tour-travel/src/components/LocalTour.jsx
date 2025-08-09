import React, { useState } from 'react';
import {
  FaMapMarkedAlt,
  FaCalendarAlt,
  FaCar,
  FaUsers,
  FaStar
} from 'react-icons/fa';

export default function LocalTour() {
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

    const message = `📌 *Local Tour Booking Request*\n
*Destination:* ${formData.destination}
*Days:* ${formData.days}
*Passengers:* ${formData.passengers}
*Vehicle:* ${formData.vehicle}
*Date:* ${formData.date}
    
Please confirm the availability.`;

    const whatsappNumber = '919999999999'; // Replace with your WhatsApp number
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, '_blank');
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-gray-800 mb-4">🏞️ Local Tour Booking</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore the beautiful destinations around Nainital with our guided local tours
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Booking Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h4 className="text-2xl font-bold text-gray-800 mb-6">Book Your Local Tour</h4>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                  <FaMapMarkedAlt className="mr-2 text-blue-600" />
                  Select Destination
                </label>
                <select
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-xl shadow-sm"
                  required
                >
                  <option value="">Choose your destination</option>
                  <option value="Naini Lake">🏞️ Naini Lake Tour</option>
                  <option value="Bhimtal Lake">🌊 Bhimtal Lake</option>
                  <option value="Snow View Point">⛰️ Snow View Point</option>
                  <option value="Naina Devi Temple">🏛️ Naina Devi Temple</option>
                  <option value="Tiffin Top">🏔️ Tiffin Top</option>
                  <option value="Eco Cave Gardens">🕳️ Eco Cave Gardens</option>
                </select>
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
                    max="7"
                    className="w-full p-4 border border-gray-300 rounded-xl shadow-sm"
                    placeholder="1-7 days"
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
                    max="8"
                    className="w-full p-4 border border-gray-300 rounded-xl shadow-sm"
                    placeholder="1-8 people"
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
                  className="w-full p-4 border border-gray-300 rounded-xl shadow-sm"
                  required
                >
                  <option value="">Choose your vehicle</option>
                  <option value="Swift Dzire">🚗 Swift Dzire (4 Seater)</option>
                  <option value="Innova">🚐 Innova (7 Seater)</option>
                  <option value="Ertiga">🚐 Ertiga (6 Seater)</option>
                  <option value="WagonR">🚐 WagonR (4 Seater)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-xl shadow-sm"
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

          {/* Tour Information */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h4 className="text-2xl font-bold text-gray-800 mb-4">🎯 Popular Local Tours</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                  <div>
                    <h5 className="font-semibold text-gray-800">Naini Lake Tour</h5>
                    <p className="text-sm text-gray-600">Nainital, Sattal, Garurtal, Bhimtal, Hanumangarh Temple, Nakuchiyatal, Kamal Tal (Kainchi Dham + Extra Charge)</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-blue-600">₹4,500</p>
                    <div className="flex items-center justify-end">
                      <FaStar className="text-yellow-400 text-sm" />
                      <span className="text-sm text-gray-600 ml-1">4.9</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
                  <div>
                    <h5 className="font-semibold text-gray-800">Nainital Darshan</h5>
                    <p className="text-sm text-gray-600">Cave Garden, Barapathar, Himalaya Darshan, Lake-View Point, Lover's Point, Khurpatal Lake View Point, Botanical Garden, Sarita Tal</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-green-600">₹4,500</p>
                    <div className="flex items-center justify-end">
                      <FaStar className="text-yellow-400 text-sm" />
                      <span className="text-sm text-gray-600 ml-1">4.8</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-purple-50 rounded-xl">
                  <div>
                    <h5 className="font-semibold text-gray-800">Other Locations</h5>
                    <p className="text-sm text-gray-600">Mukteshwar, Ranikhet, Kausani, Jageshwar, Pithoragarh</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-purple-600">₹5,000</p>
                    <div className="flex items-center justify-end">
                      <FaStar className="text-yellow-400 text-sm" />
                      <span className="text-sm text-gray-600 ml-1">4.8</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-4">✨ What's Included</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="mr-2">✅</span> Professional driver cum guide
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✅</span> AC vehicle with fuel
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✅</span> All tolls and parking
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✅</span> Local sightseeing
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✅</span> 24/7 customer support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
