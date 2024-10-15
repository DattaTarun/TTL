import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import hacklipse from '../Components/assets/hacklipse.jpg'

function Hackathon() {
  return (
    <div>
      <Navbar/>
      <div className='flex flex-col mt-28 px-10'>
        <div className='flex items-center justify-between '>
            <Link to="/landing" className='group'>
            <div className='flex items-center group-hover:text-gray-600 space-x-2'>
                <FontAwesomeIcon icon={faChevronLeft} className="text-[rgba(100,0,0,0.85)] text-3xl group-hover:text-gray-600" />
                <h2 className='font-montserrat text-2xl group-hover:text-gray-600'>Hackathon details</h2>
            </div>
            </Link>
            <div className='flex items-center space-x-2'>
                <div className="w-5 h-5 bg-[rgb(175,140,140)] rounded-full"></div>
                <div className="w-5 h-5 bg-[rgb(137,67,67)] rounded-full"></div>
                <div className="w-5 h-5 bg-[rgba(100,0,0,0.85)] rounded-full"></div>
            </div>
        </div>
        <div className='text-center mt-4'>
          <h2 className='font-montserrat text-7xl text-[rgba(100,0,0,0.85)]'>HACKLIPSE 5.0</h2>
        </div>
        <div className='flex justify-between mt-12 px-4'>
            <img src={hacklipse} className='w-80 h-80 rounded-lg'></img>
            <div className='flex flex-col'>
                <span className='font-montserrat text-[rgba(100,0,0,0.85)] text-3xl'>Duration:</span>
                <span className='font-montserrat text-gray-600 text-xl mb-3'>24 hours</span>
                <span className='font-montserrat text-[rgba(100,0,0,0.85)] text-3xl'>Start & End Date:</span>
                <span className='font-montserrat text-gray-600 text-xl mb-3'>6th May-7th May</span>
                <span className='font-montserrat text-[rgba(100,0,0,0.85)] text-3xl'>Registered Participants:</span>
                <span className='font-montserrat text-gray-600 text-xl mb-3'>Komal Dua, Baani Singh, Tarun Datta, Hityshi</span>
                <span className='font-montserrat text-[rgba(100,0,0,0.85)] text-3xl'>Team Lead:</span>
                <span className='font-montserrat text-gray-600 text-xl mb-3'>Komal Dua</span>
            </div>
            <div className='flex flex-col items-center'>
              <span className='font-montserrat text-[rgba(100,0,0,0.85)] text-3xl'>Organised By:</span>
              <img src={hacklipse} className='w-8 h-8'></img>
            </div>
        </div>
        <div className='flex items-center mx-auto mt-16 space-x-8'>
        <button className=" bg-[#821D30] text-white text-3xl py-2 px-4 rounded-sm font-montserrat hover:bg-gray-600 w-56 h-20">Join</button>
        <button className=" bg-white text-[rgba(100,0,0,0.85)] text-3xl py-2 px-4 rounded-sm font-montserrat hover:bg-gray-600 w-56 h-20 border-2 border-gray-800">Decline</button>
        </div>
      </div>
    </div>
  )
}

export default Hackathon
