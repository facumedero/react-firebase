// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,setPersistence,browserLocalPersistence} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


export {collection,doc,getDoc,setDoc,getDocs,query,updateDoc,deleteDoc,addDoc,where,onSnapshot} from "firebase/firestore";
export {GoogleAuthProvider,sendEmailVerification,createUserWithEmailAndPassword,signOut,signInWithPopup,sendPasswordResetEmail,fetchSignInMethodsForEmail }  from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration DEV
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID
};

// Your web app's Firebase configuration PROD WITH SECRETS
/*const firebaseConfig = {
  apiKey:  API_KEY_FIREBASE ,
  authDomain:  AUTH_DOMAIN_FIREBASE ,
  projectId:  PROJECT_ID_FIREBASE,
  storageBucket:  STORAGE_BUCKET_FIREBASE,
  messagingSenderId:  MESSAGING_SENDER_ID_FIREBASE,
  appId: APP_ID_FIREBASE 
};*/

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth(firebaseApp);
export const storage = getStorage(firebaseApp);

setPersistence(auth,browserLocalPersistence);