import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [rollNo, setRollNo] = useState('');
    const navigate = useNavigate();

    const handleSignUp = () => {
        // Your sign-up logic here
        alert(`Name: ${name}, Email: ${email}, Roll No: ${rollNo}`);
    };

    const redirectToLogin = () => {
        navigate('/login'); // Assuming the login page is at '/login'
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div
                className="relative flex flex-col items-center bg-white shadow-lg"
                style={{
                    width: '1100px',
                    height: '650px',
                    borderRadius: '24px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.78)',
                }}
            >
                <div className="flex flex-col items-center w-full">
                    <h1
                        className="text-xl font-medium"
                        style={{
                            fontFamily: 'Times New Roman',
                            color: 'rgba(100, 0, 0, 1)',
                            fontSize: '64px', // Original size
                            lineHeight: '80px',
                            textAlign: 'center',
                            fontWeight: '800', // Slightly more bold
                        }}
                    >
                        SIGN UP
                    </h1>
                    <h2
                        className="text-xl font-medium"
                        style={{
                            fontFamily: 'Poppins',
                            color: 'rgba(100, 0, 0, 1)',
                            fontSize: '24px', // Original size
                            lineHeight: '36px',
                            textAlign: 'center',
                        }}
                    >
                        CREATE YOUR ACCOUNT
                    </h2>
                </div>
                <div
                    className="relative bg-white rounded-lg flex overflow-hidden"
                    style={{
                        width: '900px',
                        height: '500px',
                        margin: '20px 0',
                        borderRadius: '24px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.74)',
                    }}
                >
                    <div
                        className="relative w-1/2 p-6"
                        style={{
                            backgroundColor: 'rgba(100, 0, 0, 1)',
                            color: 'white',
                        }}
                    >
                        <h2
                            className="font-bold"
                            style={{
                                fontFamily: 'Poppins',
                                fontSize: '32px', // Original size
                                lineHeight: '40px',
                                marginBottom: '10px',
                                fontWeight: '500', // Slightly decreased boldness
                            }}
                        >
                            Thapar Institute of Engineering and Technology
                        </h2>
                        <hr
                            style={{
                                border: '1px solid rgba(255, 255, 255, 1)',
                                marginBottom: '10px',
                            }}
                        />
                        <p
                            style={{
                                fontFamily: 'Poppins',
                                fontSize: '18px', // Original size
                                lineHeight: '28px',
                            }}
                        >
                            Cookies must be enabled in your browser
                        </p>
                        <h3
                            style={{
                                fontFamily: 'Poppins',
                                fontSize: '24px', // Original size
                                lineHeight: '32px',
                                marginTop: '10px',
                            }}
                        >
                            Is this your first time here?
                        </h3>
                        <p
                            style={{
                                fontFamily: 'Poppins',
                                fontSize: '16px', // Original size
                                lineHeight: '24px',
                                marginTop: '10px',
                            }}
                        >
                            TIET has already emailed username and password on your @thapar.edu email. In case you are facing any issue, please create an account, verify a link on your email and then log in on TIET Online Support.
                        </p>
                        <p
                            className="mt-4"
                            style={{
                                fontFamily: 'Poppins',
                                fontSize: '18px',
                                lineHeight: '24px',
                                color: 'rgba(255,255, 255, 1)',
                                textAlign: 'left',
                            }}
                        >
                            Stay healthy, Stay safe!
                        </p>
                    </div>
                    <div
                        className="w-1/2 p-6 flex flex-col justify-start"
                        style={{
                            backgroundColor: 'rgba(217, 217, 217, 1)',
                        }}
                    >
                        <h3
                            className="mb-4"
                            style={{
                                fontFamily: 'Poppins',
                                fontSize: '24px', // Original size
                                color: 'rgba(61, 61, 61, 1)',
                            }}
                        >
                            Don't have an account?
                        </h3>
                        <label
                            className="text-sm mb-2"
                            style={{
                                fontFamily: 'Poppins',
                                fontSize: '18px', // Original size
                                color: 'rgba(100, 0, 0, 1)',
                            }}
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="p-2 mb-4 border border-gray-400 rounded-lg"
                            style={{ width: '100%' }}
                        />
                        <label
                            className="text-sm mb-2"
                            style={{
                                fontFamily: 'Poppins',
                                fontSize: '18px', // Original size
                                color: 'rgba(100, 0, 0, 1)',
                            }}
                        >
                            Email Id
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="p-2 mb-4 border border-gray-400 rounded-lg"
                            style={{ width: '100%' }}
                        />
                        <label
                            className="text-sm mb-2"
                            style={{
                                fontFamily: 'Poppins',
                                fontSize: '18px', // Original size
                                color: 'rgba(100, 0, 0, 1)',
                            }}
                        >
                            Registration no./Roll no.
                        </label>
                        <input
                            type="text"
                            value={rollNo}
                            onChange={(e) => setRollNo(e.target.value)}
                            className="p-2 mb-4 border border-gray-400 rounded-lg"
                            style={{ width: '100%' }}
                        />
                        <button
                            onClick={handleSignUp}
                            className="w-full bg-red-700 text-white py-2 rounded"
                            style={{
                                backgroundColor: 'rgba(100, 0, 0, 1)',
                                fontFamily: 'Poppins',
                                fontSize: '18px', 
                                lineHeight: '28px',
                            }}
                        >
                            Create Account
                        </button>
                        <p
                            className="mt-4 text-center cursor-pointer"
                            onClick={redirectToLogin}
                            style={{
                                fontFamily: 'Poppins',
                                fontSize: '16px',
                                color: 'rgba(61, 61, 61, 1)',
                                textDecoration: 'underline',
                                cursor: 'pointer',
                            }}
                        >
                            Already have an account? Login
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
