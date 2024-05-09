// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQ0ek6tzBDUJctnGus8LwF9rJsLIN4rWw",
  authDomain: "fir-230d0.firebaseapp.com",
  projectId: "fir-230d0",
  storageBucket: "fir-230d0.appspot.com",
  messagingSenderId: "343305625723",
  appId: "1:343305625723:web:19988fa392fec806ff02de",
  measurementId: "G-23Y1DY8RF2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };