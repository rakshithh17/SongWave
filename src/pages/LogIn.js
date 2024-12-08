import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';


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

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is already authenticated
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleLogIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const loggedInUser = userCredential.user;
      console.log('User logged in:', loggedInUser);

      setSuccessMessage('Log in successful!');
      setErrorMessage(''); // Clear error message

      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Log in error:', error.message);

      setErrorMessage(`Log in error: ${error.message}`);
      setSuccessMessage(''); // Clear success message
    }
  };

  const handleLogOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setSuccessMessage('Log out successfull !');
    } catch (error) {
      console.error('Log out error:', error.message);
      setErrorMessage(`Log out error: ${error.message}`);
    }
  };

  return (
    <div style={{backgroundColor: 'black',minHeight: '100vh',textAlign:'center', padding:'20px',}}>
      <h2 style={{marginBottom:'20px',marginTop: '100px',fontWeight: 'bold',color: 'white' }}> Log {user ? 'Out' : 'In'} to SongWave</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={{marginBottom:'20px',width: '20%', padding: '10px',borderRadius:'80px'}} />
      <br />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ marginBottom:'10px',width: '20%', padding: '10px',borderRadius:'80px'}}/>
      <br />
      <button onClick={user ? handleLogOut : handleLogIn} style={{padding:'10px', cursor:'pointer', width:'100%',fontWeight: 'bold',color: 'white',fontSize: '1.2rem'}}>
        {user ? 'Log Out' : 'Log In'} </button>
        <h1 style={{color:'white',fontWeight:'bold',marginBottom:'10px', marginTop:'10px'}}>Don't have an account ? </h1>
        
      <a href='/signup' style={{color:'white', textDecoration:'none',fontSize: '1.2rem',fontWeight:'bold', marginRight:'10px',marginBottom:'10px'}}>Sign up</a>
      
      

      {successMessage && <p style={{ color: 'green', fontSize:'28px' }}>{successMessage}</p>}

      {errorMessage && <p style={{ color: 'red' ,fontSize:'28px'}}>{errorMessage}</p>}
    </div>
  );
};

export default LogIn;
