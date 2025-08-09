// src/components/Hero.jsx
import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/naini.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        height: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
        color: 'white',
        maxWidth: '800px',
        padding: '0 2rem',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 0.8s ease',
      }}>
        <h1 style={{
          fontSize: '3.5rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
        }}>
          Discover the Magic of Nainital
        </h1>
        <p style={{
          fontSize: '1.5rem',
          marginBottom: '2rem',
          textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
          lineHeight: '1.6',
        }}>
          Experience breathtaking views, serene lakes, and unforgettable adventures
        </p>
        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          <button
            onClick={() => scrollToSection('cabs')}
            style={{
              padding: '1rem 2rem',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              backgroundColor: '#2563eb',
              color: 'white',
              border: 'none',
              borderRadius: '50px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(37, 99, 235, 0.3)',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 20px rgba(37, 99, 235, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(37, 99, 235, 0.3)';
            }}
          >
            🚖 Book Your Cab
          </button>
          <button
            onClick={() => scrollToSection('gallery')}
            style={{
              padding: '1rem 2rem',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              backgroundColor: 'transparent',
              color: 'white',
              border: '2px solid white',
              borderRadius: '50px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'white';
              e.target.style.color = '#2563eb';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = 'white';
            }}
          >
            📸 View Gallery
          </button>
        </div>
        <div style={{
          marginTop: '3rem',
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          flexWrap: 'wrap',
        }}>
          <div style={featureStyle}>
            <span style={{ fontSize: '2rem' }}>🚖</span>
            <span>Cab Booking</span>
          </div>
          <div style={featureStyle}>
            <span style={{ fontSize: '2rem' }}>🏍️</span>
            <span>Bike Rentals</span>
          </div>
          <div style={featureStyle}>
            <span style={{ fontSize: '2rem' }}>🗺️</span>
            <span>Guided Tours</span>
          </div>
        </div>
      </div>
      
      {/* Animated scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        animation: 'bounce 2s infinite',
      }}>
        <div style={{
          width: '30px',
          height: '50px',
          border: '2px solid white',
          borderRadius: '15px',
          display: 'flex',
          justifyContent: 'center',
        }}>
          <div style={{
            width: '4px',
            height: '8px',
            backgroundColor: 'white',
            borderRadius: '2px',
            marginTop: '8px',
            animation: 'scroll 2s infinite',
          }}></div>
        </div>
      </div>
    </section>
  );
};

const featureStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.5rem',
  fontSize: '1rem',
  fontWeight: '500',
  textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
};

export default Hero;
