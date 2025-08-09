import React, { useState } from 'react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: 'dzire.jpg', alt: 'Dzire', category: 'Vehicles' },
    { src: 'dziree.jpg', alt: 'Swift Dzire', category: 'Vehicles' },
    { src: 'both.jpg', alt: 'Royal Enfield Himalayan', category: 'Vehicles' },
    { src: 'gaur.jpg', alt: 'TVS Ntorq', category: 'Vehicles' },
    { src: 'ertiga.jpg', alt: 'Four wheeler', category: 'Vehicles' },
    { src: 'white.jpg', alt: 'Tour S', category: 'Vehicles' },
    { src: 'inno.jpg', alt: 'Toyota Innova', category: 'Vehicles' },
    { src: 'suz.jpg', alt: 'Swift', category: 'Vehicles' },
    { src: 'sd.jpg', alt: 'Swift', category: 'Vehicles' },
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-gray-800 mb-4">📸 Photo Gallery</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our fleet of vehicles and the breathtaking destinations we serve
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => openModal(image)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold text-lg">{image.alt}</h4>
                  <p className="text-sm text-gray-200">{image.category}</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Click to view
              </div>
            </div>
          ))}
        </div>

        {/* Image Categories */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h4 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              🚗 Our Fleet
            </h4>
            <p className="text-gray-600 mb-4">
              Discover our well-maintained fleet of vehicles including bikes, scooters, and cars for all your travel needs.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>🏍️ Royal Enfield Classic 350</li>
              <li>🏍️ Royal Enfield Himalayan</li>
              <li>🛵 TVS NTorq</li>
              <li>🏍️ Apache RTR</li>
              <li>🚗 Comfortable AC Cars</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h4 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              🏔️ Popular Destinations
            </h4>
            <p className="text-gray-600 mb-4">
              Explore the most beautiful and popular destinations around Nainital that we serve.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>🏞️ Naini Lake & Mallital</li>
              <li>⛰️ Snow View Point</li>
              <li>🏛️ Naina Devi Temple</li>
              <li>🌊 Bhimtal Lake</li>
              <li>🏔️ Himalayan View Points</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
            >
              ✕
            </button>
            <div className="absolute bottom-4 left-4 text-white">
              <h4 className="font-semibold text-xl">{selectedImage.alt}</h4>
              <p className="text-sm text-gray-200">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}