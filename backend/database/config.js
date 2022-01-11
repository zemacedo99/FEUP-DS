const firebase = require('firebase');
const algoliasearch = require('algoliasearch');

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};
firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

const algoliaClient = algoliasearch(
  process.env.ALGOLIA_APPLICATION_ID,
  process.env.ALGOLIA_API_KEY,
);
const algolia = algoliaClient.initIndex('patlets');

module.exports = { firestore, algolia };
