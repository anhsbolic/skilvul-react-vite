import React from 'react';
import { BsChatDots } from 'react-icons/bs';

const ChatUserComponent = ({ user }) => {
  return (
    <div className="row justify-content-between">
      <div className="chat-user">
        <img src={user.avatar} alt="User Avatar" className="avatar" />
        <span className="user-name">{user.name}</span>
      </div>
      <button
        className="btn btn-primary"
        style={{ width: '40px', height: '40px' }}
      >
        <BsChatDots />
      </button>
    </div>
  );
};

export default ChatUserComponent;
