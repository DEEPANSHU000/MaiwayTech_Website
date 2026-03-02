import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAOjAiy_BfOBJIp6ZlZ0ZVhhV_JFeS7UdM",
    authDomain: "maiwaytech-45661.firebaseapp.com",
    projectId: "maiwaytech-45661",
    storageBucket: "maiwaytech-45661.firebasestorage.app",
    messagingSenderId: "606574496623",
    appId: "1:606574496623:web:afba1fcd9125aa61fcb69a",
    measurementId: "G-S8FF5BEE8N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
