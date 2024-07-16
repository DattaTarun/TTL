import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './Components/Login/Login.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/" element={<Login />} />
        </Routes>
        {/* <LandingPage /> */}
        <Login />
      </BrowserRouter>
    </div>
  );
}

export default App;
