// src/Components/Message.jsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faVideo } from '@fortawesome/free-solid-svg-icons';

const Message = () => {
    const [message, setMessage] = useState('');
    
    const handleSendMessage = (e) => {
        e.preventDefault();
        // Logic to send message
        setMessage('');
    };

    return (
        <div className="flex flex-col h-screen">
            <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-xl">User Name</h2>
                <div>
                    <FontAwesomeIcon icon={faPhone} className="mr-4 cursor-pointer" />
                    <FontAwesomeIcon icon={faVideo} />
                </div>
            </div>

            <div className="flex-1 overflow-auto p-4">
                {/* Messages will be displayed here */}
            </div>

            <form className="flex p-4 border-t" onSubmit={handleSendMessage}>
                <input
                    type="text"
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="flex-1 p-2 border rounded"
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded ml-2">Send</button>
                {/* Add Emoji, Attachment, and Microphone buttons here */}
            </form>
        </div>
    );
};

export default Message;
