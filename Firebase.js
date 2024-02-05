import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAPWSI0yMpDZpyueL5P2nwXKu_-mw8cCj0",
  authDomain: "react-native-firebase-3d61e.firebaseapp.com",
  projectId: "react-native-firebase-3d61e",
  storageBucket: "react-native-firebase-3d61e.appspot.com",
  messagingSenderId: "302742147232",
  appId: "1:302742147232:android:0c4d61239c20263b9cf9c5",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const dbAuth = getFirestore(app);
