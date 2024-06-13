
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const firebaseConfig = {

  apiKey: "AIzaSyD8kO3BapypB9-byRrfYDWgdyJzsZYsT9Q",

  authDomain: "supersynthie.firebaseapp.com",

  projectId: "supersynthie",

  storageBucket: "supersynthie.appspot.com",

  messagingSenderId: "790757165160",

  appId: "1:790757165160:web:a1c40e8f6eb827afd853dd",

  measurementId: "G-R2V9JGLZNT"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { auth, db, signInWithEmailAndPassword, doc, setDoc };
