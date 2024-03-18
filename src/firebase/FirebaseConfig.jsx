// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCJgYodj4k6jNxoeME6a66lo9kxXE5dnR4",
  authDomain: "sharjeel-react-firebase.firebaseapp.com",
  projectId: "sharjeel-react-firebase",
  storageBucket: "sharjeel-react-firebase.appspot.com",
  messagingSenderId: "1045859104357",
  appId: "1:1045859104357:web:7fcf71adf7d93f44ccb88c",
  measurementId: "G-JB20FWN7K4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDb = getFirestore(app);
const auth = getAuth(app);

export { fireDb, auth }

