import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Riya Sharma",
      rating: 5,
      text: "Amazing cab service for our Nainital trip! The driver was very professional and knew all the best spots. Highly recommended for anyone visiting Nainital.",
      location: "Mumbai",
      service: "Cab Booking"
    },
    {
      id: 2,
      name: "Akash Mehta",
      rating: 5,
      text: "Rented a Himalayan for 3 days and it was an incredible experience. The bike was in perfect condition and the team provided excellent support throughout.",
      location: "Delhi",
      service: "Bike Rental"
    },
    {
      id: 3,
      name: "Priya Patel",
      rating: 5,
      text: "Booked a custom trip to Jim Corbett and it exceeded all expectations. The guide was knowledgeable and we saw tigers! Will definitely book again.",
      location: "Bangalore",
      service: "Custom Trip"
    },
    {
      id: 4,
      name: "Rahul Verma",
      rating: 4,
      text: "Great service for local sightseeing. The driver took us to all the important places and shared interesting facts about Nainital's history.",
      location: "Pune",
      service: "Local Tour"
    },
    {
      id: 5,
      name: "Sneha Reddy",
      rating: 5,
      text: "Rented a scooty for the day and explored Nainital at our own pace. The process was smooth and the vehicle was well-maintained.",
      location: "Hyderabad",
      service: "Scooty Rental"
    },
    {
      id: 6,
      name: "Vikram Singh",
      rating: 5,
      text: "Outstanding service! Booked a cab for Delhi to Nainital trip. The driver was punctual, professional, and made the journey comfortable.",
      location: "Delhi",
      service: "Outstation Tour"
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FaStar 
        key={index} 
        className={index < rating ? "text-yellow-400" : "text-gray-300"} 
      />
    ));
  };

  return (
    <section id="reviews" className="py-16 bg-gradient-to-br from-yellow-50 to-orange-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-gray-800 mb-4">⭐ Customer Reviews</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what our satisfied customers have to say about their travel experiences with us
          </p>
        </div>

        {/* Overall Rating */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 text-center">
          <div className="flex justify-center items-center mb-4">
            {renderStars(5)}
          </div>
          <h4 className="text-3xl font-bold text-gray-800 mb-2">4.9/5</h4>
          <p className="text-gray-600 mb-4">Based on 500+ reviews</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <p className="font-semibold text-gray-800">Service Quality</p>
              <p className="text-green-600">Excellent</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800">Vehicle Condition</p>
              <p className="text-green-600">Excellent</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800">Driver Behavior</p>
              <p className="text-green-600">Excellent</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800">Value for Money</p>
              <p className="text-green-600">Excellent</p>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {review.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold text-gray-800">{review.name}</h4>
                    <p className="text-sm text-gray-500">{review.location}</p>
                  </div>
                </div>
                <div className="flex">
                  {renderStars(review.rating)}
                </div>
              </div>
              
              <div className="mb-4">
                <FaQuoteLeft className="text-blue-400 text-2xl mb-2" />
                <p className="text-gray-700 leading-relaxed italic">"{review.text}"</p>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {review.service}
                </span>
                <span className="text-sm text-gray-500">
                  {review.rating}/5
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h4 className="text-2xl font-bold mb-4">Ready to Experience the Best?</h4>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of satisfied customers who have trusted us for their travel needs
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Book Your Trip Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}