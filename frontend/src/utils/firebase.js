// Initialize Cloud Firestore through Firebase
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseApp = initializeApp({
  apiKey: "AIzaSyCJb7N9JOW9Ru11jgvrBwUH7ohDZrQIW20",
  authDomain: "ds-meic05.firebaseapp.com",
  projectId: "ds-meic05",
  storageBucket: "ds-meic05.appspot.com",
  messagingSenderId: "917825385962",
  appId: "1:917825385962:web:bce0f2f9fafee68b5dee93",
  measurementId: "G-NJS86QX3K7"
});

const db = getFirestore(firebaseApp);

export default db;
