import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapPage = () => {
    const [currentLocation, setCurrentLocation] = useState(null);
    const [error, setError] = useState(null);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const skill = queryParams.get('skill') || 'Skill';

    // Map configuration
    const mapContainerStyle = {
      width: '100%',
      height: '400px',
    };
    
    // Sample marker locations (optional, you can remove if not needed)
    const markers = [
      { lat: 28.7091, lng: 77.1050, label: 'User 1' },
      { lat: 28.7021, lng: 77.1015, label: 'User 2' },
      { lat: 28.7061, lng: 77.1035, label: 'User 3' },
    ];

    useEffect(() => {
        // Request the user's location
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setCurrentLocation({ lat: latitude, lng: longitude });
                },
                (err) => {
                    setError(err.message);
                }
            );
        } else {
            setError("Geolocation is not supported by this browser.");
        }
    }, []);

    return (
      <div className="bg-gray-100 min-h-screen flex flex-col items-center">
        {/* Top Navigation */}
        <div className="bg-[#00000028] p-4 flex items-center justify-between w-full border-b border-gray-300 px-4 md:px-8 shadow-md">
          <Link to="/search">
            <FontAwesomeIcon icon={faChevronLeft} className="text-[rgba(100,0,0,0.85)] text-2xl hover:text-gray-600" />
          </Link>
          <h1 className="text-lg font-semibold text-gray-800">People in Your Vicinity with {skill}</h1>
          <div className="w-6"></div>
        </div>

        {/* Google Map Display */}
        <div className="mt-12 bg-white p-8 rounded-lg shadow-lg w-11/12 md:w-3/5 lg:w-1/2 flex flex-col items-center">
          <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={currentLocation || { lat: 28.7041, lng: 77.1025 }} // Fallback to default if location not available
              zoom={13}
            >
              {currentLocation && (
                <Marker
                  position={currentLocation}
                  label="You"
                />
              )}
              {/* Optionally render other markers */}
              {markers.map((marker, index) => (
                <Marker
                  key={index}
                  position={{ lat: marker.lat, lng: marker.lng }}
                  label={marker.label}
                />
              ))}
            </GoogleMap>
          </LoadScript>
          {error && <p className="text-red-500">{error}</p>}
          {!currentLocation && !error && <p className="text-center mt-4">Loading your location...</p>}
          {currentLocation && <p className="text-center mt-4 text-lg font-medium text-gray-700">You are here</p>}
        </div>

        {/* Browse Communities Section */}
        <div className="my-12 px-4 md:px-20 w-full">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">BROWSE COMMUNITIES</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {/* Sample Community Cards */}
            <div className="bg-[#821D30] p-6 rounded-lg shadow-lg text-center text-white">
              <h3 className="text-xl font-semibold">Git / Github</h3>
              <p className="mt-2">Members: 248</p>
            </div>
            {/* Repeat as needed */}
          </div>
        </div>
      </div>
    );
};

export default MapPage;