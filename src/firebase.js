// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// ✅ Correct Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAJh8X0i3Y9irDxewob1r70WS7Kla_1NMg",
  authDomain: "to-do-list-19137.firebaseapp.com",
  projectId: "to-do-list-19137",
  storageBucket: "to-do-list-19137.appspot.com",  // <-- ✅ fixed here
  messagingSenderId: "627896729649",
  appId: "1:627896729649:web:849ff52b9d6389af489510",
  measurementId: "G-H5S5CLJTVR"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export services
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
