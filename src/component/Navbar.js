import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex items-center justify-between">
      <div className="flex items-center">
        <Link to="/" className="text-white text-2xl font-bold">Quiz App</Link>
      </div>
      <ul className="flex space-x-6">
        <li>
          <Link to="/" className="text-gray-300 hover:text-white transition duration-200">Home</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
