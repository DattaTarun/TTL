import React from 'react';
import { Link } from 'react-router-dom';

const MentorCard = ({ mentor }) => {
  return (
    <div className="bg-[#FFF5F7] p-6 rounded-lg shadow-xl flex flex-col items-center transition duration-500 hover:scale-110">
      <img src={mentor.image} alt={mentor.name} className="w-24 h-24 rounded-full mb-4 self-center" />
        <h3 className="text-2xl font-semibold text-[rgba(100,0,0,0.85)] font-montserrat mb-2">{mentor.name}</h3>
        <p className="font-semibold font-montserrat text-sm">{mentor.skill}</p>
        <p className="text-sm text-[#7C7C7C] font-montserrat">{mentor.description}</p>
        <Link to="/detail/mentor-id"><button className="mt-4 bg-[#821D30] text-white py-2 px-6 rounded-lg font-montserrat hover:bg-gray-600">Connect</button></Link>
        
    </div>
  );
};

export default MentorCard;
