import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-[#FFF5F7] p-6 rounded-lg shadow-lg flex flex-col items-center transition duration-500 hover:scale-110">
      <h3 className="mt-4 text-3xl font-semibold text-[rgba(100,0,0,0.85)] font-montserrat mb-3">{project.name}</h3>
      <p className="font-montserrat text-gray-600 overflow-hidden line-clamp-2">{project.description}</p>
      <Link to="/projects/project-id">
      <button className="mt-4 bg-[#821D30] text-white py-2 px-4 rounded-lg font-montserrat hover:bg-gray-600">View</button>
      </Link>
      
    </div>
  );
};

export default ProjectCard;
