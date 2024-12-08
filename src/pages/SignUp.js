import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBR8D5SLfSdt6yARQ_igO3-WTqOLgDnM1U",
    authDomain: "songwave-b425f.firebaseapp.com",
    projectId: "songwave-b425f",
    storageBucket: "songwave-b425f.appspot.com",
    messagingSenderId: "194670520702",
    appId: "1:194670520702:web:2ae804977f48e260f3ab2f",
    measurementId: "G-0SVD4KSMKZ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('User signed up:', user);

        setSuccessMessage('Sign up successful!');

        
        setEmail('');
        setPassword('');
      })
      .catch((error) => {
        console.error('Sign up error:', error.message);
        setErrorMessage(`Sign up error: ${error.message}`);
      });
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px',backgroundColor: 'black',minHeight: '100vh' }}>
      <h2 style={{ marginBottom: '20px', marginTop: '100px',fontWeight: 'bold' ,color: 'white' }}>Sign up to start listening</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ marginBottom: '20px', width: '20%', padding: '10px',borderRadius:'80px' }}
        required
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ marginBottom: '10px', width: '20%', padding: '10px',borderRadius:'80px' }}
      />
      <br />

      <button onClick={handleSignUp} style={{ padding: '10px', cursor: 'pointer', width: '100%',fontWeight: 'bold' ,color: 'white' }}>
        Sign Up
      </button>
      
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}

      
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default SignUp;
