import React from 'react';
import { Link } from 'react-router-dom';

const MusicCategory = ({ imageUrl, text }) => {
  return (
    <div style={{ position: 'relative', width: '80%', height: '200px' }}>
      <Link to={`/category/${text.toLowerCase()}`} style={{ textDecoration: 'none' }}>
        <img
          src={imageUrl}
          alt={`Grid ${text}`}
          style={{ width: '100%', height: '100%', borderRadius: '10px' }}
        />
        <p style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', fontSize: '18px',fontWeight: 'bold' }}>
          {text}
        </p>
      </Link>
    </div>
  );
};

export default MusicCategory;
