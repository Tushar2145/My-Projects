import React from 'react';

export default function home() {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">Negi Tour & Travel's</h1>
      <div>
        <a href="#cabs" className="px-4 hover:underline">Cabs</a>
        <a href="#rentals" className="px-4 hover:underline">Rentals</a>
        <a href="#gallery" className="px-4 hover:underline">Gallery</a>
        <a href="#reviews" className="px-4 hover:underline">Reviews</a>
        <a href="#contact" className="px-4 hover:underline">Contact</a>
        <a href="#login" className="px-4 hover:underline">Login</a>
      </div>
    </nav>
  );
}
