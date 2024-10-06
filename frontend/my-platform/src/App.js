import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './Components/Login/Login.jsx';
import Signup from './Components/SignUp/Signup.jsx';
import MentorProfile from './pages/MentorProfile.jsx';
import Community from './pages/Community.jsx';
import Hackathon from './pages/Hackathon.jsx';
import Search from './pages/Search.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/profile/:mentorName" element={<MentorProfile />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/community" element={<Community/>} />
        <Route path="/hackathons" element={<Hackathon/>}/>
        <Route path="/search" element={<Search/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
