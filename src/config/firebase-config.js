import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqcUDga5R8CFvxu5GHA4IWOpmz_EuO5nE",
  authDomain: "cfs-uam.firebaseapp.com",
  projectId: "cfs-uam",
  storageBucket: "cfs-uam.appspot.com",
  messagingSenderId: "985096775237",
  appId: "1:985096775237:web:832b6f25a686207deba52c"
};

// Initialize Firebase
  export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);