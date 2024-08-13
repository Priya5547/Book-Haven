// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9fM77252m5KHJTtin8pRS-bb_Fyego-o",
  authDomain: "bookstore-90138.firebaseapp.com",
  projectId: "bookstore-90138",
  storageBucket: "bookstore-90138.appspot.com",
  messagingSenderId: "162340274409",
  appId: "1:162340274409:web:8dee96c835ead0564b7078"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app