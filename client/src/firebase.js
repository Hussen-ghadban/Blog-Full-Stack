// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:  import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-1b36c.firebaseapp.com",
  projectId: "mern-blog-1b36c",
  storageBucket: "mern-blog-1b36c.appspot.com",
  messagingSenderId: "1010926645334",
  appId: "1:1010926645334:web:9295d99ea9469d94434bf7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);