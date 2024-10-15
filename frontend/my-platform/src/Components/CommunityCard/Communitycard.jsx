import React from 'react';
import code from '../assets/code.png';
const ProjectCard = ({ community }) => {
  return (
    <div className="bg-[#821D30] p-6 rounded-lg shadow-lg flex flex-col items-center transition duration-500 hover:scale-110">
    <img src={code} className='w-24 h-24'></img>
      <h3 className="mt-4 text-xl font-semibold text-white font-montserrat mb-3">{community.name}</h3>
      <p className="font-montserrat text-white overflow-hidden line-clamp-2">Members: {community.members}</p>      
    </div>
  );
};

export default ProjectCard;
