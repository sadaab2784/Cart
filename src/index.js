import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAxu4oHyWjcazkHxI1TodfklWdw0BQBfcM",
    authDomain: "cart-95cf4.firebaseapp.com",
    projectId: "cart-95cf4",
    storageBucket: "cart-95cf4.appspot.com",
    messagingSenderId: "869946718841",
    appId: "1:869946718841:web:c4e45f02aed151c1e032a8"
  };


// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


