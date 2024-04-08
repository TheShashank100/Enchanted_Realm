// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1RD71PYloUWGk7iExFhD9jALUGT2l25U",
  authDomain: "final-project-717ce.firebaseapp.com",
  projectId: "final-project-717ce",
  storageBucket: "final-project-717ce.appspot.com",
  messagingSenderId: "589555563012",
  appId: "1:589555563012:web:3081aeb18c555ceeeb5351"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
