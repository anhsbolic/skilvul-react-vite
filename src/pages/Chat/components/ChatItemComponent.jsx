import React from 'react';

const ChatItemComponent = ({ chat }) => {
  return (
    <div className="chat-item">
      <img src={chat.user.avatar} alt="User Avatar" className="avatar" />
      <div className="chat-details">
        <h3 className="name">{chat.user.name}</h3>
        <p className="last-chat">{chat.last_message}</p>
      </div>
    </div>
  );
};

export default ChatItemComponent;
