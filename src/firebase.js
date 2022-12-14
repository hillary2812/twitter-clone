import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAcgY0Ca6qc82Ieix1BBSL7ZGu75EgZYNk",
  authDomain: "twitter-clone-f42ef.firebaseapp.com",
  databaseURL: "https://twitter-clone-f42ef.firebaseio.com",
  projectId: "twitter-clone-f42ef",
  storageBucket: "twitter-clone-f42ef.appspot.com",
  messagingSenderId: "81789144035",
  appId: "1:81789144035:web:859189905b9613c9116ed6",
  measurementId: "G-490HYT3KYL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
