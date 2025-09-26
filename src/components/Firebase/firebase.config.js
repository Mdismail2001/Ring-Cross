// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYxmB1KkoY8n1DmlsdIGFzdnxEIf7sHQc",
  authDomain: "ringcross-859ae.firebaseapp.com",
  projectId: "ringcross-859ae",
  storageBucket: "ringcross-859ae.firebasestorage.app",
  messagingSenderId: "270784524315",
  appId: "1:270784524315:web:4a06862b96c1e7086348be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//  const auth = getAuth(app);
export default app;