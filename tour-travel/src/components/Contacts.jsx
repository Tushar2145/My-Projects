import React, { useState } from 'react';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold mb-4">📞 Contact Us</h3>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get in touch with us for bookings, inquiries, or any questions about our services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h4 className="text-2xl font-bold mb-6 text-blue-400">Get In Touch</h4>
              <p className="text-gray-300 mb-8 leading-relaxed">
                We're here to help you plan the perfect trip to Nainital. Contact us anytime and we'll respond within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 p-3 rounded-full">
                  <FaPhone className="text-white" />
                </div>
                <div>
                  <h5 className="font-semibold">Phone</h5>
                  <p className="text-gray-300">+91 8534007862</p>
                  
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-green-600 p-3 rounded-full">
                  <FaWhatsapp className="text-white" />
                </div>
                <div>
                  <h5 className="font-semibold">WhatsApp</h5>
                  <p className="text-gray-300">+91 8534007862</p>
                  <p className="text-sm text-gray-400">Quick response guaranteed</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-purple-600 p-3 rounded-full">
                  <FaEnvelope className="text-white" />
                </div>
                <div>
                  <h5 className="font-semibold">Email</h5>
                  <p className="text-gray-300">info@negitours.com</p>
                  <p className="text-gray-300">bookings@negitours.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-red-600 p-3 rounded-full">
                  <FaMapMarkerAlt className="text-white" />
                </div>
                <div>
                  <h5 className="font-semibold">Address</h5>
                  <p className="text-gray-300">
                    Mallital, Nainital<br />
                    Uttarakhand, India - 263001
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-yellow-600 p-3 rounded-full">
                  <FaClock className="text-white" />
                </div>
                <div>
                  <h5 className="font-semibold">Business Hours</h5>
                  <p className="text-gray-300">Monday - Sunday: 8 AM – 9 PM</p>
                  <p className="text-sm text-gray-400">24/7 Emergency Support Available</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-6 border-t border-gray-700">
              <h5 className="font-semibold mb-4">Follow Us</h5>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/yourpage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-colors duration-300"
                >
                  <FaFacebook className="text-white text-xl" />
                </a>
                <a
                  href="https://www.instagram.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-600 p-3 rounded-full hover:bg-pink-700 transition-colors duration-300"
                >
                  <FaInstagram className="text-white text-xl" />
                </a>
                <a
                  href="https://wa.me/918534007862"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 p-3 rounded-full hover:bg-green-700 transition-colors duration-300"
                >
                  <FaWhatsapp className="text-white text-xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h4 className="text-2xl font-bold mb-6 text-blue-400">Send us a Message</h4>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 transition-colors duration-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 transition-colors duration-300"
                    placeholder="+91 99999 99999"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 transition-colors duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Service Required</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors duration-300"
                >
                  <option value="">Select a service</option>
                  <option value="cab-booking">Cab Booking</option>
                  <option value="bike-rental">Bike Rental</option>
                  <option value="local-tour">Local Tour</option>
                  <option value="outstation-tour">Outstation Tour</option>
                  <option value="custom-trip">Custom Trip</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 transition-colors duration-300 resize-none"
                  placeholder="Tell us about your travel plans, requirements, or any questions you have..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>

        {/* Quick Contact Cards */}
<div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
  {/* Call Us */}
  <a
    href="tel:+918534007862"
    className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300"
  >
    <FaPhone className="text-3xl mx-auto mb-4 text-white" />
    <h5 className="font-semibold mb-2 text-white">Call Us</h5>
    <p className="text-sm opacity-90 text-white">For immediate assistance</p>
  </a>

  {/* WhatsApp */}
  <a
    href="https://wa.me/918534007862"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300"
  >
    <FaWhatsapp className="text-3xl mx-auto mb-4 text-white" />
    <h5 className="font-semibold mb-2 text-white">WhatsApp</h5>
    <p className="text-sm opacity-90 text-white">Quick booking & support</p>
  </a>

  {/* Email */}
  <a
    href="mailto:info@negitours.com"
    className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300"
  >
    <FaEnvelope className="text-3xl mx-auto mb-4 text-white" />
    <h5 className="font-semibold mb-2 text-white">Email</h5>
    <p className="text-sm opacity-90 text-white">Detailed inquiries</p>
  </a>
</div>

      </div>
    </section>
  );
};

export default Contact;
