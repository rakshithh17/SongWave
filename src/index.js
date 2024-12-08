import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBR8D5SLfSdt6yARQ_igO3-WTqOLgDnM1U",
  authDomain: "songwave-b425f.firebaseapp.com",
  projectId: "songwave-b425f",
  storageBucket: "songwave-b425f.appspot.com",
  messagingSenderId: "194670520702",
  appId: "1:194670520702:web:2ae804977f48e260f3ab2f",
  measurementId: "G-0SVD4KSMKZ"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
