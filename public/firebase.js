// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6kwSQbDqKNAhjAhTb-U-Ffji1GoCe8-M",
  authDomain: "adote-um-amigo-8baf3.firebaseapp.com",
  projectId: "adote-um-amigo-8baf3",
  storageBucket: "adote-um-amigo-8baf3.firebasestorage.app",
  messagingSenderId: "712305091869",
  appId: "1:712305091869:web:c8402419915b3999742df4",
  measurementId: "G-REM9LQXGF6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { auth, db };