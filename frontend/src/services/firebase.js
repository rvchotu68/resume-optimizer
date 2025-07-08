// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log(import.meta.env.VITE_FIREBASE_API);
const firebaseConfig = {
  apiKey: `${import.meta.env.VITE_FIREBASE_API}`,
  authDomain: "resume-builder-ae72e.firebaseapp.com",
  projectId: "resume-builder-ae72e",
  storageBucket: "resume-builder-ae72e.firebasestorage.app",
  messagingSenderId: "34521762809",
  appId: "1:34521762809:web:f3005e7fcad2770feecb28",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
