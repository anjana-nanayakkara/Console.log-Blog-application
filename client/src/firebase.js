// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-fd21e.firebaseapp.com",
  projectId: "mern-blog-fd21e",
  storageBucket: "mern-blog-fd21e.appspot.com",
  messagingSenderId: "337028081019",
  appId: "1:337028081019:web:99ef9bd87186af94e549de",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
