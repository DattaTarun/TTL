// src/pages/Search.jsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';
import { faChevronLeft, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Communitycard from '../Components/CommunityCard/Communitycard';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const communities = [
    { name: "Cyber Security", members: "248" },
    { name: "Machine Learning", members: "153" },
    { name: "Cloud Practitioners", members: "67" },
    { name: "100 days of DSA", members: "296" },
    { name: "Web Development", members: "355" },
  ];

  const tags = [
    'Git',
    'React.js',
    'UI/UX',
    'DSA'
  ];

  // Handle search submission
  const handleSearch = (e) => {
    if (e.key === 'Enter' && searchQuery.trim()) {  // Check for Enter key and non-empty query
      navigate(`/map?skill=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="bg-gray min-h-screen flex flex-col">
      <div className="bg-[#00000028] p-4 flex items-center justify-between border-b px-4 md:px-8" style={{ boxShadow: '0px 10px 15px 0px rgba(0, 0, 0, 0.28)' }}>
        <Link to="/landing">
          <FontAwesomeIcon icon={faChevronLeft} className="text-[rgba(100,0,0,0.85)] text-3xl hover:text-gray-600" />
        </Link>
        <div className="bg-white rounded-full py-2 px-4 flex items-center w-1/2">
          <input
            type="text"
            placeholder="Browse communities..."
            className="bg-transparent w-full outline-none text-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleSearch}  // Add Enter key detection
          />
          <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-600 ml-2 hover:cursor-pointer w-6 h-6" />
        </div>
        <div className="w-6"></div> {/* Placeholder for alignment */}
      </div>

      {/* Suggested Tags Section */}
      <section className="mt-10 px-4 md:px-20">
        <h2 className="text-3xl font-montserrat font-semibold text-gray-800">SUGGESTED TAGS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-10 gap-6 mt-6">
          {tags.map((tag, index) => (
            <div key={index} className='mb-3 p-3 rounded-lg cursor-pointer font-montserrat bg-[#821D30] text-white text-center hover:bg-gray-600'>
              {tag}
            </div>
          ))}
        </div>
      </section>

      {/* Browse Communities Section */}
      <section className="my-12 px-4 md:px-20">
        <h2 className="text-3xl font-montserrat font-semibold text-gray-800">BROWSE COMMUNITIES</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          {communities.map((community, index) => (
            <Communitycard key={index} community={community} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Search;
