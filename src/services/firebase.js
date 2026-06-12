// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,setPersistence,browserLocalPersistence} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


export {collection,doc,getDoc,setDoc,getDocs,query,updateDoc,deleteDoc,addDoc,where,onSnapshot} from "firebase/firestore";
export {GoogleAuthProvider,sendEmailVerification,createUserWithEmailAndPassword,signOut,signInWithPopup,sendPasswordResetEmail,fetchSignInMethodsForEmail }  from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCw_bAQetCAJQnT5PNt8UvFKxK7YYgkneI",
  authDomain: "crud-react-firebase-60aea.firebaseapp.com",
  projectId: "crud-react-firebase-60aea",
  storageBucket: "crud-react-firebase-60aea.firebasestorage.app",
  messagingSenderId: "837327697078",
  appId: "1:837327697078:web:2965c86b4309145e2b2217"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth(firebaseApp);
export const storage = getStorage(firebaseApp);

setPersistence(auth,browserLocalPersistence);