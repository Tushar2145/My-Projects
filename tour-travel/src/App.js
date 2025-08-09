import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CabBooking from './components/CabBooking';
import Rentals from './components/Rentals';
import LocalTour from './components/LocalTour';
import OutstationTour from './components/OutstationTour';
import CustomTrip from './components/CustomTrip';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Contact from './components/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="hero">
        <Hero />
      </div>
      <section>
        <CabBooking />
      </section>
      <section>
        <Rentals />
      </section>
      <section>
        <LocalTour />
      </section>
      <section>
        <OutstationTour />
      </section>
      <section>
        <CustomTrip />
      </section>
      <section className="gallery">
        <Gallery />
      </section>
      <section>
        <Reviews />
      </section>
      <section className="contact">
        <Contact />
      </section>
      <Footer />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919999999999?text=Hi%20Negi%20Tour%20%26%20Travels%2C%20I%20want%20to%20book%20a%20trip"
        className="whatsapp-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
          alt="WhatsApp"
        />
        <span>Book on WhatsApp</span>
      </a>
    </div>
  );
}

export default App;
