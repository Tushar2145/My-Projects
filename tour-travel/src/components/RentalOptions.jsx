import React from 'react';

const RentalOptions = () => {
  return (
    <section id="rental-options" className="p-8 bg-gray-100">
      <h3 className="text-3xl font-semibold mb-4">Rental Options</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded shadow text-center">
          <img
            src="/images/ntorq.jpg"
            alt="TVS Ntorq"
            className="w-full h-40 object-contain mb-2"
          />
          <h4 className="text-xl font-bold">TVS Ntorq</h4>
          <p>₹800/day</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <img
            src="/images/apache.jpg"
            alt="TVS Apache"
            className="w-full h-40 object-contain mb-2"
          />
          <h4 className="text-xl font-bold">TVS Apache</h4>
          <p>₹1000/day</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <img
            src="/images/classic.jpg"
            alt="Royal Enfield Classic"
            className="w-full h-40 object-contain mb-2"
          />
          <h4 className="text-xl font-bold">Royal Enfield Classic</h4>
          <p>₹1200/day</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <img
            src="/images/himalayan.jpg"
            alt="Royal Enfield Himalayan"
            className="w-full h-40 object-contain mb-2"
          />
          <h4 className="text-xl font-bold">Royal Enfield Himalayan</h4>
          <p>₹1500/day</p>
        </div>
      </div>
    </section>
  );
};

export default RentalOptions;
