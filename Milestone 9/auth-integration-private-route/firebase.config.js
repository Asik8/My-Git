// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTBNMOuVjMLI6CKk4kW3k_vTTiQl-CAtE",
  authDomain: "auth-integration-private-d9bda.firebaseapp.com",
  projectId: "auth-integration-private-d9bda",
  storageBucket: "auth-integration-private-d9bda.appspot.com",
  messagingSenderId: "36076794165",
  appId: "1:36076794165:web:1bdaa060f9b8a77a161c7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;