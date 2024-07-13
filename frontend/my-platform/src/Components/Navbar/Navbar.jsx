import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="bg-[#00000028] w-full p-4 fixed top-0 left-0 opacity-100 z-10 shadow-lg" style={{ boxShadow: '0px 10px 15px 0px rgba(0, 0, 0, 0.28)' }}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-32">
          <Link to="/find-a-mentor" className="text-[rgba(100,0,0,0.85)] font-montserrat text-xl font-semibold leading-[35px] hover:text-gray-600">Find a Mentor</Link>
          <Link to="/search" className="text-[rgba(100,0,0,0.85)] font-montserrat text-xl font-semibold leading-[35px] hover:text-gray-600">Search</Link>
          <Link to="/projects" className="text-[rgba(100,0,0,0.85)] font-montserrat text-xl font-semibold leading-[35px] hover:text-gray-600">Projects</Link>
          <Link to="/community" className="text-[rgba(100,0,0,0.85)] font-montserrat text-xl font-semibold leading-[35px] hover:text-gray-600">Community</Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/notifications">
            <FontAwesomeIcon icon={faBell} className="h-8 w-8 text-[rgba(61, 61, 61, 0.97)] hover:text-gray-600" />
          </Link>
          <Link to="/profile" className="flex flex-col items-center text-[rgba(61, 61, 61, 0.88)] hover:text-gray-600">
            <FontAwesomeIcon icon={faUserCircle} className="h-8 w-8" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

