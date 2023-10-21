// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDL1E_95a7fCniQ7T-3-ZyH9_IlBN4HmSQ",
  authDomain: "e-commerce-8107a.firebaseapp.com",
  projectId: "e-commerce-8107a",
  storageBucket: "e-commerce-8107a.appspot.com",
  messagingSenderId: "626937444573",
  appId: "1:626937444573:web:c61366f3fc1f0314838334"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default (app)