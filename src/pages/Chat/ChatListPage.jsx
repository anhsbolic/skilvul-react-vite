import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getUsers } from '../../services/userService';
import { db } from '../../firebase';
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
  where,
  doc,
  getDoc,
  updateDoc,
} from 'firebase/firestore';

import ModalLoadingComponent from '../../components/loader/ModalLoadingComponent.jsx';
import ChatUsersModal from './components/ChatUsersModal';
import ChatItemComponent from './components/ChatItemComponent.jsx';
import ChatMessageComponent from './components/ChatMessageComponent.jsx';

const ChatListPage = () => {
  const navigate = useNavigate();
  const search = useLocation().search;
  const userId = new URLSearchParams(search).get('user_id');

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

  const [chat, setChat] = useState({});
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const fetchUsers = async () => {
    setIsLoading(true);

    const resUsers = await getUsers();
    setUsers(resUsers);

    setIsLoading(false);
  };

  useEffect(() => {
    // fetchUsers();
  }, []);

  const getChatByFilter = () => {
    const q = query(
      collection(db, 'chats'),
      where('user_id_1', '==', 1),
      where('user_id_2', '==', 2)
    );
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      QuerySnapshot.forEach((doc) => {
        setChat({
          id: doc.id,
          user_id_1: doc.data().user_id_1,
          user_id_2: doc.data().user_id_2,
        });
        setMessages(doc.data().messages);
      });
    });
    return () => unsubscribe;
  };

  useEffect(() => {
    getChatByFilter();
  }, []);

  const showUsersModal = () => {
    setIsModalUsersShow(true);
  };

  const sendMessageToFirestore = async () => {
    console.log('send message', chat, messages);
    const refDoc = doc(db, 'chats', chat.id);
    await updateDoc(refDoc, {
      messages: [
        ...messages,
        {
          user_id: userId,
          name: userId == 1 ? 'Anhar' : 'Sayid',
          avatar:
            userId == 1
              ? 'https://i.pravatar.cc/150?img=1'
              : 'https://i.pravatar.cc/150?img=2',
          message: inputMessage,
          created_at: new Date().toISOString(),
        },
      ],
    });
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
        {/* <div className="col-2">
          {chats.map((chat, index) => {
            return (
              <div className="row">
                <ChatItemComponent key={index} chat={chat} />
              </div>
            );
          })}
        </div> */}
        <div className="col-12">
          <div className="row">
            <div className="col-12">
              <h2>Sayid</h2>
            </div>
          </div>
          <div className="row" style={{ height: '300px', overflow: 'auto' }}>
            <div className="col-12">
              {messages.map((message, index) => {
                return (
                  <ChatMessageComponent
                    key={`msg-${index}`}
                    userId={userId}
                    message={message}
                  />
                );
              })}
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <label htmlFor="content">Message</label>
                <textarea
                  className="form-control"
                  id="content"
                  rows="3"
                  onChange={(e) => {
                    setInputMessage(e.target.value);
                  }}
                  value={inputMessage}
                ></textarea>
              </div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={sendMessageToFirestore}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatListPage;
