import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import backgroundImage from '../assets/thaparlogin.png';
import thaparLogo from '../assets/Rectangle.png';
import userIcon from '../assets/nameicon.png';
import lockIcon from '../assets/lock1.png';

const Login =()=>{
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [loading, setLoading] = useState(false);
    const navigate=useNavigate();

    const handleLogin = async () => {
      if (!username || !password) {
        alert('Please fill in both fields.');
        return;
    }

    setLoading(true);
      try {
          const response = await fetch('http://localhost:3001/api/users/login', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ username, password }),
          });
  
          const result = await response.json(); // Expect the backend to return a JSON object
  
          console.log('Login response:', result); // Debugging: Check the API response structure
  
          if (response.ok && result.id) {
              alert('Login successful!');
              localStorage.setItem('userId', result.id); // Save the user's ID from the backend
              navigate('/landing'); // Navigate to the landing page after login
          } else {
              alert(result.message || 'Login failed. Please check your credentials.');
          }
      } catch (error) {
          console.error('Error during login:', error);
          alert('An error occurred. Please try again.');
      }finally {
        setLoading(false);
    }
  };
  
  const redirectToSignup = () => {
    navigate('/signup'); 
};

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div
            className="relative flex flex-col items-center bg-white shadow-lg"
            style={{
              width: '1100px',
              height: '650px',
              borderRadius: '24px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.78)'
            }}
          >
            <div className="flex flex-col items-center w-full">
              <div className="flex items-center my-4">
                <img
                  src={thaparLogo}
                  alt="Thapar Institute"
                  className="w-28 h-28 mr-4"
                />
                <div>
                  <h1
                    className="text-xl font-medium"
                    style={{
                      fontFamily:'Poppins',
                      color: 'rgba(100, 0, 0, 1)',
                      fontSize: '35px',
                      lineHeight: '47.58px',
                      letterSpacing: '9%'
                    }}
                  >
                    Thapar Institute of
                  </h1>
                  <h1
                    className="text-xl font-medium"
                    style={{
                      fontFamily: 'Poppins',
                      color: 'rgba(100, 0, 0, 1)',
                      fontSize: '35px',
                      lineHeight: '47.58px',
                      letterSpacing: '9%'
                    }}
                  >
                    Engineering and Technology
                  </h1>
                </div>
              </div>
              <hr
                className="w-full"
                style={{
                  width: '1000px',
                  border: '2px solid rgba(100, 0, 0, 1)'
                }}
              />
            </div>
            <div
              className="relative bg-white rounded-lg flex overflow-hidden"
              style={{
                width: '900px',
                height: '500px',
                margin: '20px 0',
                borderRadius: '24px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.74)'
              }}
            >
              <div className="relative w-1/2">
                <img
                  src={backgroundImage}
                  alt="Background"
                  className="w-full h-full object-cover rounded-l-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center pl-4">
                  <div className="flex items-center">
                    <div className="border-l-4 border-white h-40 mr-2"></div>
                    <div className='flex items-start flex-col'>
                    <span className="text-white text-sm font-light"
                    style={{
                        fontFamily: 'Poppins',
                        fontSize: '39px',
                        fontWeight: '300',
                        lineHeight:'58.5px',
                        letterSpacing:'8%'
                    }}>
                      Welcome To
                    </span>
                    <span className="text-white text-sm font-light"
                    style={{
                        fontFamily: 'Times New Roman',
                        fontSize: '30px',
                        fontWeight: '700',
                        lineHeight:'59.17px',
                        letterSpacing:'1.5%'
                    }}>
                      TTL - TALK, TEACH,
                    </span>
                    <span className="text-white text-sm font-light"
                    style={{
                        fontFamily: 'Times New Roman',
                        fontSize: '30px',
                        fontWeight: '700',
                        lineHeight:'59.17px',
                        letterSpacing:'1.5%'
                    }}>
                       LEARN
                    </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="w-1/2 p-6 flex flex-col justify-start bg-gray-300"
                style={{
                  backgroundColor: 'rgba(217, 217, 217, 1)',
                }}
              >
                <div
                  className="bg-red-700 p-4 mb-6 flex flex-col items-start"
                  style={{
                    backgroundColor: 'rgba(100, 0, 0, 1)',
                    borderRadius: '0 24px 0 0',
                    position: 'absolute',
                    top: '0px',
                    right: '0px',
                    width: '450px',
                  }}
                >
                  <h2
                    className="text-white font-bold mb-2"
                    style={{
                      fontFamily: 'Times New Roman',
                      fontSize: '48px',
                      lineHeight: '56px',
                      letterSpacing: '12%',
                      marginLeft: '0'
                    }}
                  >
                    LOG IN
                  </h2>
                  <p
                    className="text-white"
                    style={{
                      fontFamily: 'Poppins',
                      fontWeight: '300',
                      fontSize: '18px',
                      lineHeight: '24.08px',
                      letterSpacing: '12%',
                      color: 'rgba(255, 255, 255, 0.7)'
                    }}
                  >
                    To Your Account
                  </p>
                </div>
                <div className="mt-32">
                  <div className="mb-4 flex items-center border border-gray-400 rounded-lg p-2">
                    <img
                      src={userIcon}
                      alt="User Icon"
                      className="w-10 h-10 mr-2"
                      style={{ color: 'rgba(150, 150, 150, 1)' }}
                    />
                    <input
                      type="text"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full p-2 border-none outline-none"
                    />
                  </div>
                  <div className="mb-4 flex items-center border border-gray-400 rounded-lg p-2">
                    <img
                      src={lockIcon}
                      alt="Lock Icon"
                      className="w-10 h-10 mr-2"
                      style={{ color: 'rgba(150, 150, 150, 1)' }}
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full p-2 border-none outline-none"
                    />
                  </div>
                  <div className="flex items-center mb-4">
                    <input type="checkbox" className="mr-2" />
                    <label className="text-sm" style={{ color: 'rgba(100, 0, 0, 0.62)' }}>
                      Remember password
                    </label>
                  </div>
                  <button
                    onClick={handleLogin}
                    className="w-full bg-red-700 text-white py-2 rounded"
                    style={{ backgroundColor: 'rgba(100, 0, 0, 1)' }}
                  >
                    Log In
                  </button>
                  <p
                            className="mt-4 text-center cursor-pointer"
                            onClick={redirectToSignup}
                            style={{
                                fontFamily: 'Poppins',
                                fontSize: '16px',
                                color: 'rgba(61, 61, 61, 1)',
                                textDecoration: 'underline',
                                cursor: 'pointer',
                            }}
                        >
                            Don't have an account? Sign Up
                        </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
      
      
    }      

export default Login;
