import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: "AIzaSyB5JOX5qp_fo9jAOOatQ7tq5qSNb1YB56A",
  authDomain: "react-portfolio-dasboard-9eda9.firebaseapp.com",
  projectId: "react-portfolio-dasboard-9eda9",
  storageBucket: "react-portfolio-dasboard-9eda9.appspot.com",
  messagingSenderId: "149116079083",
  appId: "1:149116079083:web:d64d846f126bd24e6927ae"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);



export const signInWithGoogle = ()=> signInWithPopup(auth,provider)