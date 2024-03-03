// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth'
import { GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZ1Oob-BxnfVgwlEmtWiSrhfg1bqOdDyk",
  authDomain: "perpenka-eedff.firebaseapp.com",
  projectId: "perpenka-eedff",
  storageBucket: "perpenka-eedff.appspot.com",
  messagingSenderId: "127313653293",
  appId: "1:127313653293:web:057a85e1c322f95a0792a4",
  measurementId: "G-KFW9PJLVE2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app)

export { app,auth,provider,db, storage }