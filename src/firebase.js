/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByJ3NWgqp44_bGuMJhiMeaqoZzoqFWNDI",
  authDomain: "goride-5b1de.firebaseapp.com",
  projectId: "goride-5b1de",
  storageBucket: "goride-5b1de.appspot.com",
  messagingSenderId: "456496835577",
  appId: "1:456496835577:web:47f49dc5183c758903ab28",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default app;
