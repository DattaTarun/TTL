import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import profileLanding from '../assets/profileLanding.png';
import { useEffect } from 'react';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user ID from local storage (set during login)
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
        setUserId(storedUserId); // Set the user ID in state
    }
}, []);

  const handleProfileClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const navigateToUserProfile = () => {
    if (userId) {
        navigate(`/user/${userId}`); // Navigate to the user's profile page
    } else {
        alert('User not logged in!');
    }
};

  const handleLogout = () => {
    localStorage.removeItem('userId');
    navigate('/login');
  };
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar'); // Get navbar element by id
      if (navbar) {
        if (window.scrollY > 0) {
          navbar.classList.add('bg-white', 'opacity-100'); // Add opaque styles when scrolled
          navbar.classList.remove('bg-[#00000028]', 'opacity-100'); // Remove transparent styles
        } else {
          navbar.classList.add('bg-[#00000028]', 'opacity-100'); // Add transparent styles when at the top
          navbar.classList.remove('bg-white'); // Remove opaque styles
        }
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav id='navbar' className="bg-[#00000028] w-full p-4 fixed top-0 left-0 opacity-100 z-10 shadow-lg" style={{ boxShadow: '0px 10px 15px 0px rgba(0, 0, 0, 0.28)' }}>
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
                <button
                                    onClick={navigateToUserProfile}
                                    className="block w-full text-left px-4 py-2 text-[rgba(100,0,0,1)] font-poppins text-2xl leading-[30px] hover:bg-gray-100 border-b border-black"
                                >
                                    View Profile
                                </button>
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
