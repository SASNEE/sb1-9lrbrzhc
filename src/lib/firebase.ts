import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCO4vYuPeSzkZsiieJQ-u6m-qJ_0mCg1uc",
  authDomain: "tokenalert-eb661.firebaseapp.com",
  projectId: "tokenalert-eb661",
  storageBucket: "tokenalert-eb661.firebasestorage.app",
  messagingSenderId: "763967810864",
  appId: "1:763967810864:web:3db35acde9c72abcacecf5",
  measurementId: "G-1R9W4DM1PP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);