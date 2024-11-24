import React from 'react';
import { Link } from 'react-router-dom';

const SkillCard = ({ skill }) => {
  return (
    <Link to="/skills/skill-id">
        <div className="bg-[#FFF5F7] p-6 rounded-lg shadow-inner flex flex-col items-center transition duration-500 hover:scale-110">
        <img src={skill.image} alt={skill.name} className="w-32 h-32 mx-auto" />
        <h3 className="mt-4 text-3xl font-semibold text-[rgba(100,0,0,0.85)] font-montserrat mb-3">{skill.name}</h3>
        <p className="font-montserrat text-gray-600 text-center">{skill.description}</p>
        </div>
    </Link>
    
  );
};

export default SkillCard;
