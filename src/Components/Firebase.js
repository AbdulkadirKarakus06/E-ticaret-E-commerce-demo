import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDtafT4OcuHfnvNdAgt1k6-J9FYjprAo8s",
  authDomain: "project1-93be6.firebaseapp.com",
  projectId: "project1-93be6",
  storageBucket: "project1-93be6.appspot.com",
  messagingSenderId: "872046675480",
  appId: "1:872046675480:web:d5fe547664da90cbdc656d",
  measurementId: "G-TX0YP2BRHX",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };
