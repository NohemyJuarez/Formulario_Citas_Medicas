// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc,deleteDoc, doc, collection, getDocs } from "firebase/firestore";  // Import Firestore functions
import { getAnalytics } from "firebase/analytics";  // Analytics (opcional)

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsgel15OprjMrbdR2_whAsZlfBptkRG_k",
  authDomain: "citas-medicas-84392.firebaseapp.com",
  projectId: "citas-medicas-84392",
  storageBucket: "citas-medicas-84392.firebasestorage.app",
  messagingSenderId: "777000300204",
  appId: "1:777000300204:web:5802c5fea549e69738f909",
  measurementId: "G-6292J48ZDB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);  // Optional, if you want to use analytics

// Initialize Firestore
const db = getFirestore(app);  // Firestore initialization

// Export Firestore to use in other parts of the app
export { db };
export { addDoc, collection, deleteDoc, doc,  getDocs };