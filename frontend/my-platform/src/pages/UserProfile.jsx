import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const UserProfile = () => {
    const [user, setUser] = useState(null); // Initially null
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                console.log('Fetching user data for ID:', id);
                const response = await fetch(`http://localhost:3001/api/users/${id}`);
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                const data = await response.json();
                console.log('User data fetched:', data);
                setUser(data);
            } catch (err) {
                console.error('Error fetching user data:', err);
                setError('Failed to fetch user data. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    // Ensure `user` is not null before rendering
    if (!user) {
        return <p>No user data available.</p>;
    }

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handlePhotoUpload = async (file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            const base64String = reader.result;
            setUser((prev) => ({ ...prev, profilePhoto: base64String }));
        };
        reader.readAsDataURL(file);
    };

    // Save updates to the backend
    const handleSave = () => {
        fetch(`http://localhost:3001/api/users/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then((response) => response.json())
            .then((data) => {
                alert('Profile updated successfully!');
                setUser(data); // Update local state with saved data
            })
            .catch((error) => console.error('Error updating user data:', error));
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="mt-20 px-8 lg:px-50">
            <Link to="/landing">
          <FontAwesomeIcon icon={faArrowLeft} className="text-2xl text-gray-700 hover:text-gray-900 mb-5" />
        </Link>
                <h1 className="text-4xl font-semibold text-[#591C1C]">USER PROFILE</h1>
                <div className="mt-10 flex flex-col lg:flex-row gap-4">
                    {/* Left section */}
                    <div className="flex-1 lg:pl-80 lg:pr-10">
                        <div className="flex justify-center lg:justify-start">
                            <img src={user.profilePhoto || 'https://via.placeholder.com/150'} alt="User" className="w-60 h-60 rounded-full" />
                        </div>
                        <div className="mt-4 text-left">
                        <div className="mt-4">
                            <label className="block text-lg font-semibold">Upload Profile Photo</label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => handlePhotoUpload(e.target.files[0])}
                                className="mt-2"
                            />
                        </div>
                            <label className="block text-xl font-semibold">Name</label>
                            <input
                                type="text"
                                name="username"
                                value={user.username || ''}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                            <label className="block text-xl font-semibold mt-4">Bio</label>
                            <input
                                type="text"
                                name="bio"
                                value={user.bio || ''}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                            <label className="block text-xl font-semibold mt-4">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={user.email || ''}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div className="mt-4 flex items-center space-x-4">
                            <label className="text-lg font-semibold">Are you a mentor?</label>
                            <input
                                type="checkbox"
                                checked={user.isMentor || false}
                                onChange={(e) =>
                                    handleInputChange({ target: { name: 'isMentor', value: e.target.checked } })
                                }
                                className="w-6 h-6"
                            />
                        </div>
                    </div>

                    {/* Right section */}
                    <div className="flex-1 lg:pl-4 lg:pr-80">
                        <label className="block text-xl font-semibold">Domains of Interest</label>
                        <textarea
                            name="domains"
                            value={user.domains || ''}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                        <label className="block text-xl font-semibold mt-4">Skills</label>
                        <textarea
                            name="skills"
                            value={user.skills || ''}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                        <label className="block text-xl font-semibold mt-4">Link to Resume</label>
                        <input
                            type="url"
                            name="resumeLink"
                            value={user.resumeLink || ''}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                        <button
                            onClick={handleSave}
                            className="mt-6 bg-[#821D30] text-white py-2 px-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow"
                        >
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
