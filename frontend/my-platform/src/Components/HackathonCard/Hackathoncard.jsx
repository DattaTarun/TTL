import React from 'react';
import { Link } from 'react-router-dom';

const HackathonCard = ({ hackathon }) => {
  return (
    <div className="bg-[#FFF5F7] p-6 rounded-lg shadow-xl flex items-center gap-4 transition duration-500 hover:scale-110">
      <img src={hackathon.image} alt={hackathon.name} className="w-52 h-52 rounded-lg mx-auto" />
      <div className='flex flex-col'>
        <h3 className="mt-4 text-3xl font-bold text-[rgba(100,0,0,0.85)] font-montserrat">{hackathon.name}</h3>
        <p className="font-montserrat text-[rgba(100,0,0,0.85)] ">{hackathon.org}</p>
        <p className="font-montserrat text-[rgba(100,0,0,0.85)] overflow-hidden line-clamp-3">{hackathon.description}</p>
        <Link to="/hackathons/hack-id">
        <button className="mt-4 bg-[#821D30] text-white py-2 px-4 rounded-lg font-montserrat hover:bg-gray-600">Join</button>
        </Link>
        
      </div>
    </div>
  );
};

export default HackathonCard;
