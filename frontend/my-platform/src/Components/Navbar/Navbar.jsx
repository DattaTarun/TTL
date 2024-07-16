import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import profileLanding from '../assets/profileLanding.png';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleProfileClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <nav className="bg-[#00000028] w-full p-4 fixed top-0 left-0 opacity-100 z-10 shadow-lg" style={{ boxShadow: '0px 10px 15px 0px rgba(0, 0, 0, 0.28)' }}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-32">
          <Link to="/find-a-mentor" className="text-[rgba(100,0,0,0.85)] font-montserrat text-xl font-semibold leading-[35px] hover:text-gray-600">Find a Mentor</Link>
          <Link to="/search" className="text-[rgba(100,0,0,0.85)] font-montserrat text-xl font-semibold leading-[35px] hover:text-gray-600">Search</Link>
          <Link to="/projects" className="text-[rgba(100,0,0,0.85)] font-montserrat text-xl font-semibold leading-[35px] hover:text-gray-600">Projects</Link>
          <Link to="/community" className="text-[rgba(100,0,0,0.85)] font-montserrat text-xl font-semibold leading-[35px] hover:text-gray-600">Community</Link>
        </div>
        <div className="flex items-center space-x-4 relative">
          <Link to="/notifications">
            <FontAwesomeIcon icon={faBell} className="h-9 w-9 text-[rgba(61, 61, 61, 0.97)] hover:text-gray-600" />
          </Link>
          <div className="relative flex items-center">
            <img
              src={profileLanding}
              alt="Profile"
              className="h-10 w-10 cursor-pointer"
              onClick={handleProfileClick}
            />
            {dropdownOpen && (
              <div
                className="absolute bg-white shadow-lg rounded-lg border border-black"
                style={{
                  width: '200px',
                  top: '40px',
                  right: '0px',
                  gap: '0px',
                  opacity: '0.95',
                  borderRadius: '10px',
                }}
              >
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-[rgba(100,0,0,1)] font-poppins text-2xl leading-[30px] hover:bg-gray-100 border-b border-black"
                >
                  View Profile
                </Link>
                <Link
                  to="/messages"
                  className="block px-4 py-2 text-[rgba(100,0,0,1)] font-poppins text-2xl leading-[30px] hover:bg-gray-100 border-b border-black"
                >
                  Messages
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-[rgba(100,0,0,1)] font-poppins text-2xl leading-[30px] hover:bg-gray-100"
                >
                  Log Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
