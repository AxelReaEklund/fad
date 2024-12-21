// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAJqhLQe7c_358tQspM_rHEoTTVCqUSdwk",
    authDomain: "hugo-v1.firebaseapp.com",
    projectId: "hugo-v1",
    storageBucket: "hugo-v1.firebasestorage.app",
    messagingSenderId: "75659010652",
    appId: "1:75659010652:web:57a8b8edc3877bb5d53c99",
    measurementId: "G-3J2VWZLCXC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Analytics
const analytics = getAnalytics(app);

export { db, analytics };
