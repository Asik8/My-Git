/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeHN5O_3GkhK4R1I5-PDtslfAYvavlFn4",
  authDomain: "aash-33019.firebaseapp.com",
  projectId: "aash-33019",
  storageBucket: "aash-33019.appspot.com",
  messagingSenderId: "670307473285",
  appId: "1:670307473285:web:ee22e274f49e17f86056ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
