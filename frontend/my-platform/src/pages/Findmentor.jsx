import React, { useState, useEffect } from 'react';
import MentorCard from '../Components/MentorCard/Mentorcard';
import Navbar from '../Components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { getAllMentors } from '../services/apiService'; // Assuming this API call is used

const Findmentor = () => {
  const [mentors, setMentors] = useState([]);
  const [filteredMentors, setFilteredMentors] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    getAllMentors().then((data) => {
      setMentors(data);
      setFilteredMentors(data.slice(0, 4)); // Display only 4 mentors initially
    });
  }, []);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    if (query) {
      setFilteredMentors(mentors.filter(mentor => mentor.name.toLowerCase().startsWith(query)));
    } else {
      setFilteredMentors(mentors.slice(0, 4)); // Reset to first 4 mentors if no search query
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Header */}
      <header className="flex items-center mt-20 mb-12 px-4 md:px-20">
        {/* Back Button */}
        <Link
          to="/landing"
          className="flex items-center text-[rgba(100,0,0,0.85)] font-montserrat font-semibold text-lg hover:text-gray-800 mr-4"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
          Back
        </Link>

        {/* Page Headline */}
        <div className="flex-1 text-center mt-5">
          <h1 className="text-[rgba(100,0,0,0.85)] text-5xl font-montserrat font-semibold tracking-wide">
            Find a Mentor
          </h1>
          <p className="text-gray-600 mt-4 font-montserrat max-w-2xl mx-auto">
            Connect with experienced professionals across various domains to guide you in your journey of growth and learning.
          </p>
        </div>
      </header>

      {/* Search Bar */}
      <section className="px-4 md:px-20 mb-12">
        <input
          type="text"
          placeholder="Search for a mentor..."
          value={searchQuery}
          onChange={handleSearch}
          className="w-full px-4 py-2 border rounded-md border-gray-300"
        />
      </section>

      {/* Mentor Cards Section */}
      <section className="px-4 md:px-20 mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filteredMentors.length > 0 ? (
            filteredMentors.map((mentor) => (
              <MentorCard key={mentor.id} mentor={mentor} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 font-montserrat">
              No mentors found. Please try again with a different search query.
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Findmentor;
