import { FaCar, FaMapMarkedAlt, FaTools, FaStar } from "react-icons/fa";

export default function CabBooking() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="cabs" className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">🚖 Cab Booking Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience comfortable and reliable cab services for all your travel needs in and around Nainital
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Local Tour */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="text-center mb-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCar className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Local Tour</h3>
              <div className="flex justify-center items-center gap-1 mb-3">
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <span className="text-sm text-gray-600 ml-2">(4.9)</span>
              </div>
            </div>
            <div className="space-y-3 mb-6">
              <p className="text-gray-600">🛍️ Nainital Darshan</p>
              <p className="text-gray-600">🏞️ Lake Tour & Sightseeing</p>
              <p className="text-gray-600">⛰️ Mountain View Points</p>
              <p className="text-gray-600">🏛️ Jumble Tour</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600 mb-4">From ₹4,500</p>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Book Now
              </button>
            </div>
          </div>

          {/* Outstation Tour */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="text-center mb-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaMapMarkedAlt className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Outstation Tour</h3>
              <div className="flex justify-center items-center gap-1 mb-3">
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <span className="text-sm text-gray-600 ml-2">(4.8)</span>
              </div>
            </div>
            <div className="space-y-3 mb-6">
              <p className="text-gray-600">🏛️ Kumaun Darshan</p>
              <p className="text-gray-600">🐅 Jim Corbett National Park</p>
              <p className="text-gray-600">🏙️ Delhi City Tour</p>
              <p className="text-gray-600">⛰️ Mussoorie Hill Station</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600 mb-4">From ₹5,000</p>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-full font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Book Now
              </button>
            </div>
          </div>

          {/* Custom Trip */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="text-center mb-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaTools className="text-purple-600 text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Custom Trip</h3>
              <div className="flex justify-center items-center gap-1 mb-3">
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <span className="text-sm text-gray-600 ml-2">(5.0)</span>
              </div>
            </div>
            <div className="space-y-3 mb-6">
              <p className="text-gray-600">🎯 Personalized Itinerary</p>
              <p className="text-gray-600">🗺️ Custom Route Planning</p>
              <p className="text-gray-600">⏰ Flexible Timing</p>
              <p className="text-gray-600">👥 Group Tours Available</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-purple-600 mb-4">Custom Pricing</p>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Plan Trip
              </button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">🚗</span>
            </div>
            <h4 className="font-semibold text-gray-800">AC Vehicles</h4>
            <p className="text-sm text-gray-600">Comfortable & Clean</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">👨‍💼</span>
            </div>
            <h4 className="font-semibold text-gray-800">Expert Drivers</h4>
            <p className="text-sm text-gray-600">Experienced & Safe</p>
          </div>
          <div className="text-center">
            <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">⏰</span>
            </div>
            <h4 className="font-semibold text-gray-800">24/7 Service</h4>
            <p className="text-sm text-gray-600">Always Available</p>
          </div>
          <div className="text-center">
            <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">💰</span>
            </div>
            <h4 className="font-semibold text-gray-800">Best Prices</h4>
            <p className="text-sm text-gray-600">Competitive Rates</p>
          </div>
        </div>
      </div>
    </div>
  );
}
