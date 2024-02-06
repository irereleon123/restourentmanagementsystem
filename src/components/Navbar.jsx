// Navbar.js

import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Restaurant Management System</h1>
        <ul className="flex space-x-4 text-white">
          <li><a href="/" className="hover:text-gray-300">Home</a></li>
          <li><a href="/menu" className="hover:text-gray-300">Menu</a></li>
          <li><a href="/reservation" className="hover:text-gray-300">Reservation</a></li>
          <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
