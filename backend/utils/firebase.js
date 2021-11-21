// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJb7N9JOW9Ru11jgvrBwUH7ohDZrQIW20",
  authDomain: "ds-meic05.firebaseapp.com",
  projectId: "ds-meic05",
  storageBucket: "ds-meic05.appspot.com",
  messagingSenderId: "917825385962",
  appId: "1:917825385962:web:bce0f2f9fafee68b5dee93",
  measurementId: "G-NJS86QX3K7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);