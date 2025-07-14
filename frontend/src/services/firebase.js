// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: `${import.meta.env.VITE_FIREBASE_API}`,
  authDomain: "jobverse-187ff.firebaseapp.com",
  projectId: "jobverse-187ff",
  storageBucket: "jobverse-187ff.firebasestorage.app",
  messagingSenderId: "586086095804",
  appId: "1:586086095804:web:44b7eb1162b2aca089e9b9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
