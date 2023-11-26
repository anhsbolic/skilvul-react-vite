import React from 'react';

const ChatMessageComponent = ({ message }) => {
  let isCurrentUser = true;
  const bubbleStyle = isCurrentUser
    ? 'current-user-bubble'
    : 'other-user-bubble';
  const justifyContent = isCurrentUser ? 'flex-end' : 'flex-start';

  return (
    <div className="chat-message" style={{ justifyContent: justifyContent }}>
      <img src={message.user.avatar} alt="User Avatar" className="avatar" />
      <div className={`message-bubble ${bubbleStyle}`}>
        <div className="message-content">{message.content}</div>
        <div className="timestamp">{message.created_at}</div>
      </div>
    </div>
  );
};

export default ChatMessageComponent;
