// src/Components/ChatBox.jsx
import React from 'react';
import Message from './Message';

const ChatBox = ({ user }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Integrate the Message component here */}
      <Message user={user} />
    </div>
  );
};

export default ChatBox;
