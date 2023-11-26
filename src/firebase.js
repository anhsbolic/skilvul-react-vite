import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBKKs9BUuBM94scwnaVN_RKc55gVbivbLA',
  authDomain: 'belajar-chat-aacf1.firebaseapp.com',
  projectId: 'belajar-chat-aacf1',
  storageBucket: 'belajar-chat-aacf1.appspot.com',
  messagingSenderId: '239911281066',
  appId: '1:239911281066:web:a7e19b85c57c5a45034bd3',
  measurementId: 'G-3JVX7CB9V8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Iitialize Firestore
export const db = getFirestore(app);
