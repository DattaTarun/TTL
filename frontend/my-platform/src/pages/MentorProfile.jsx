import React from 'react';
import Navbar from '../Components/Navbar/Navbar.jsx';
import profilecircle from '../Components/assets/profilecircle.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const MentorProfile = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="mt-20 px-8 lg:px-50">
        <Link to="/landing">
          <FontAwesomeIcon icon={faArrowLeft} className="text-2xl text-gray-700 hover:text-gray-900 mb-5" />
        </Link>
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-semibold text-[#591C1C]">MENTOR PROFILE</h1>
        </div>
        <div className="mt-10 flex flex-col lg:flex-row gap-4">
          {/* Left section */}
          <div className="flex-1 lg:pl-80 lg:pr-10">
            <div classname="">
            <button className="text-[rgba(100,0,0,1)] border border-[rgba(100,0,0,1)] px-4 py-1 rounded bg-white shadow-md">MORE</button>
            </div>
            <div className="flex justify-center lg:justify-start">
              <img src={profilecircle} alt="mentor" className="w-60 h-60 rounded-full" />
            </div>
            <div className="mt-4 text-left">
              <h2 className="text-3xl font-semibold">{`{USERXYZ}`}</h2>
              <p className="text-[#821D30]">256 connections <span className="ml-2">⭐⭐⭐⭐</span></p>
              <button className="mt-6 bg-[#821D30] text-white py-2 px-6 rounded-lg shadow-2xl hover:shadow-xl transition-shadow">CONNECT</button>
              <p className="mt-2">Students mentored: <span className='text-[#821D30]'>100</span></p>
              <div className="mt-4">
                <h3 className="text-xl font-semibold">BADGES</h3>
                <div className="flex mt-2 space-x-2">
                  {/* Add badge images here */}
                  <span classname="text-2xl">🏅 🏅 🏅</span>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block border-2 border-[rgba(100,0,0,1)]"></div>

          {/* Right section */}
          <div className="flex-1 lg:pl-4 lg:pr-80">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold">DOMAINS OF INTEREST</h3>
              <p className="text-[rgba(100,0,0,1)] mt-2">UI/UX Design, Web Development, 3D Modelling, Case Study Analysis</p>
            </div>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold">SKILLS</h3>
              <div className="flex flex-wrap gap-4 mt-4">
                <span className="bg-[#821D30] text-white py-1 px-3 rounded-lg italic shadow-lg hover:shadow-xl transition-shadow">HTML</span>
                <span className="bg-[#821D30] text-white py-1 px-3 rounded-lg italic shadow-lg hover:shadow-xl transition-shadow">React.js</span>
                <span className="bg-[#821D30] text-white py-1 px-3 rounded-lg italic shadow-lg hover:shadow-xl transition-shadow">UI/UX</span>
                <span className="bg-[#821D30] text-white py-1 px-3 rounded-lg italic shadow-lg hover:shadow-xl transition-shadow">DSA</span>
              </div>
            </div>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold">ONGOING PROJECTS</h3>
              <div className="flex gap-4">
                <div className="p-4 bg-[#f0f0f0] shadow-2xl rounded-lg w-1/2">
                  <h4 className="font-semibold">PhD Project Monitoring System</h4>
                  <p className="text-sm text-gray-600">A comprehensive platform where teachers can evaluate the thesis...</p>
                </div>
                <div className="p-4 bg-rgba(61,61,0,0) shadow-2xl rounded-lg w-1/2">
                  <h4 className="font-semibold">SmartHome IoT System</h4>
                  <p className="text-sm text-gray-600">An Internet of Things (IoT) project that automates home appliances...</p>
                </div>
              </div>
            </div>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold">LINK TO RESUME</h3>
              <a href="https://drive.google.com/file/d/1LDRlyZaZTFbxHjBDEiL2obMxYHtf3YT/view?usp=sharing"
                 className="text-blue-600 underline mt-2 inline-block">
                HTTP://drive.google.com/file/d/1LDRlyZaZTFbxHjBDEiL2obMxYHtf3YT/view?usp=sharing
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorProfile;
