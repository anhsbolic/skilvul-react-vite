import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUsers } from '../../services/userService';
import ModalLoadingComponent from '../../components/loader/ModalLoadingComponent.jsx';
import ChatUsersModal from './components/ChatUsersModal';
import ChatItemComponent from './components/ChatItemComponent.jsx';
import ChatMessageComponent from './components/ChatMessageComponent.jsx';

const ChatListPage = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [isModalUsersShow, setIsModalUsersShow] = useState(false);
  const [users, setUsers] = useState([]);
  const [chats, setChats] = useState([
    {
      id: 1,
      user: {
        id: 1,
        name: 'John Doe',
        avatar: 'https://i.pravatar.cc/150?img=1',
      },
      last_message: 'Hello, how are you?',
    },
    {
      id: 2,
      user: {
        id: 2,
        name: 'Jane Doe',
        avatar: 'https://i.pravatar.cc/150?img=2',
      },
      last_message: 'Hi, I am fine, thanks!',
    },
    {
      id: 3,
      user: {
        id: 3,
        name: 'John Smith',
        avatar: 'https://i.pravatar.cc/150?img=3',
      },
      last_message: 'What are you doing?',
    },
    {
      id: 4,
      user: {
        id: 4,
        name: 'Jane Smith',
        avatar: 'https://i.pravatar.cc/150?img=4',
      },
      last_message: 'I am working on my project.',
    },
    {
      id: 5,
      user: {
        id: 5,
        name: 'John Doe',
        avatar: 'https://i.pravatar.cc/150?img=5',
      },
      last_message: 'Hello, how are you?',
    },
    {
      id: 6,
      user: {
        id: 6,
        name: 'Jane Doe',
        avatar: 'https://i.pravatar.cc/150?img=6',
      },
      last_message: 'Hi, I am fine, thanks!',
    },
    {
      id: 7,
      user: {
        id: 7,
        name: 'John Smith',
        avatar: 'https://i.pravatar.cc/150?img=7',
      },
      last_message: 'What are you doing?',
    },
    {
      id: 8,
      user: {
        id: 8,
        name: 'Jane Smith',
        avatar: 'https://i.pravatar.cc/150?img=8',
      },
      last_message: 'I am working on my project.',
    },
  ]);

  const [messages, setMessages] = useState([
    {
      id: 1,
      user: {
        id: 1,
        name: 'John Doe',
        avatar: 'https://i.pravatar.cc/150?img=1',
      },
      content: 'Hello, how are you?',
      created_at: '2021-10-10 10:00:00',
    },
    {
      id: 2,
      user: {
        id: 2,
        name: 'Jane Doe',
        avatar: 'https://i.pravatar.cc/150?img=2',
      },
      content: 'Hi, I am fine, thanks!',
      created_at: '2021-10-10 10:01:00',
    },
    {
      id: 3,
      user: {
        id: 3,
        name: 'John Smith',
        avatar: 'https://i.pravatar.cc/150?img=3',
      },
      content: 'What are you doing?',
      created_at: '2021-10-10 10:02:00',
    },
    {
      id: 4,
      user: {
        id: 4,
        name: 'Jane Smith',
        avatar: 'https://i.pravatar.cc/150?img=4',
      },
      content: 'I am working on my project.',
      created_at: '2021-10-10 10:03:00',
    },
    {
      id: 5,
      user: {
        id: 5,
        name: 'John Doe',
        avatar: 'https://i.pravatar.cc/150?img=5',
      },
      content: 'Hello, how are you?',
      created_at: '2021-10-10 10:04:00',
    },
    {
      id: 6,
      user: {
        id: 6,
        name: 'Jane Doe',
        avatar: 'https://i.pravatar.cc/150?img=6',
      },
      content: 'Hi, I am fine, thanks!',
      created_at: '2021-10-10 10:05:00',
    },
  ]);

  const fetchUsers = async () => {
    setIsLoading(true);

    const resUsers = await getUsers();
    setUsers(resUsers);

    setIsLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const showUsersModal = () => {
    setIsModalUsersShow(true);
  };

  return (
    <>
      <ModalLoadingComponent isShow={isLoading} message="Get Data..." />

      <ChatUsersModal isShow={isModalUsersShow} users={users} />

      <div className="row w-100">
        <div className="col-8">
          <h2>Messages</h2>
        </div>
        <div className="col-4">
          <button
            className="btn btn-success float-right"
            onClick={showUsersModal}
          >
            New Chat
          </button>
        </div>
      </div>

      <div className="row w-100">
        <div className="col-2">
          {chats.map((chat, index) => {
            return (
              <div className="row">
                <ChatItemComponent key={index} chat={chat} />
              </div>
            );
          })}
        </div>
        <div className="col-10">
          <div className="row">
            <div className="col-12">
              <h2>John Doe</h2>
            </div>
          </div>
          <div className="row" style={{ height: '300px', overflow: 'auto' }}>
            <div className="col-12">
              {messages.map((message, index) => {
                return (
                  <ChatMessageComponent
                    key={`msg-${index}`}
                    message={message}
                  />
                );
              })}
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <form>
                <div className="form-group">
                  <label htmlFor="content">Message</label>
                  <textarea
                    className="form-control"
                    id="content"
                    rows="3"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatListPage;
