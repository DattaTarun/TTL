import React from 'react';
import ProjectCard from '../Components/ProjectCard/Projectcard';
import Navbar from '../Components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const projects = [
  {
    name: "PhD Project Monitoring System",
    description: "A comprehensive platform where teachers can evaluate the thesis based on their topics and discussions.",
  },
  {
    name: "SmartHome IoT System",
    description: "An Internet of Things (IoT) project that automates home appliances based on user preferences and environmental conditions.",
  },
  {
    name: "HealthCare Management System",
    description: "Web-based platform for managing patient records, appointments, and medical history securely and efficiently.",
  },
  {
    name: "Virtual Reality Game: Galactic Explorer",
    description: "A virtual reality game where players explore distant galaxies, discover new planets, and engage in space battles.",
  },
  {
    name: "E-commerce Platform: TechMart",
    description: "Online marketplace specializing in electronics and gadgets, featuring user reviews, secure payments, and real-time inventory updates.",
  },
  {
    name: "Weather Forecasting Application",
    description: "Mobile app that provides accurate weather forecasts, alerts for severe weather conditions, and historical weather data analysis.",
  },
];

const Projects = () => {
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

        {/* Projects Headline */}
        <div className="flex-1 text-center mt-5">
          <h1 className="text-[rgba(100,0,0,0.85)] text-5xl font-montserrat font-semibold tracking-wide">
            Our Projects
          </h1>
          <p className="text-gray-600 mt-4 font-montserrat max-w-2xl mx-auto">
            Explore a diverse range of projects showcasing innovation and technical expertise across multiple domains.
          </p>
        </div>
      </header>

      {/* Projects Section */}
      <section className="px-4 md:px-20 mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
