import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-[rgba(120,13,13,1)] text-white py-8 mt-16">
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
            <div className='flex flex-col'>
                <h3 className="text-2xl font-montserrat font-semibold mb-4">STAY IN TOUCH</h3>
                <p className='font-montserrat'>Thapar Institute of Engineering & Technology</p>
                <p className='font-montserrat'>P.O. Box 32, Bhadson Road,</p>
                <p className='font-montserrat'>Patiala, Punjab,</p>
                <p className='font-montserrat'>Pin -147004, India</p>
            </div>
            <div className='flex flex-col mb-16'>
                <h3 className="text-2xl font-montserrat font-semibold mb-4">CONTACT US</h3>
                <div className='flex gap-4 justify-center'>
                    <FontAwesomeIcon icon={faInstagram} className="h-9 w-9 text-[rgba(61, 61, 61, 0.97)] hover:text-gray-600" />
                    <FontAwesomeIcon icon={faLinkedin} className="h-9 w-9 text-[rgba(61, 61, 61, 0.97)] hover:text-gray-600" />
                </div>
            </div>
        </div>
        <div className='flex justify-center'>
        <p className="mt-4 font-montserrat italic justify-center">copyright @ 2024</p>
        </div>
        

    </footer>
  );
};

export default Footer;
