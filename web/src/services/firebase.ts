import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDgEaWzTsgf1JJwMHCj5wRXKRQHXztPDzs",
  authDomain: "auth-yt-22a6d.firebaseapp.com",
  projectId: "auth-yt-22a6d",
  storageBucket: "auth-yt-22a6d.appspot.com",
  messagingSenderId: "529053096668",
  appId: "1:529053096668:web:fd1a2d5496986a75503219"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);