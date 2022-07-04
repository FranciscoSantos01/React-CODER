// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {collection, getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEtFWgofG7Jpcjv69RQ7DPzWT3hDp_FHE",
  authDomain: "app-coderhouse.firebaseapp.com",
  projectId: "app-coderhouse",
  storageBucket: "app-coderhouse.appspot.com",
  messagingSenderId: "1022512885751",
  appId: "1:1022512885751:web:2a6c8cae385afaa2e948f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export const collectionProd = collection(db, 'products');