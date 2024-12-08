import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom



const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [songs, setSongs] = useState([]);
    

    // Function to stop all other audio elements
   
   
    const updateTerm = () => {
        const term = searchTerm.trim();
        if (!term) {
            alert('Please enter a search term');
            return;
        }

        const url = `https://itunes.apple.com/search?term=${term}&entity=musicTrack`;
        
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch search results');
                }
                return response.json();
            })
            .then(data => {
                setSongs(data.results);
            })
            .catch(error => {
                console.error('Request failed:', error);
            });
    };

    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
          updateTerm();
      }
  };
    
    const createSongElement = (result) => {
        
        return (
            <div style={{ color: 'white', fontWeight: 'bold',marginLeft:'300px' }}>
                <Link to={`/song/${result.trackId}`}>
                    <article key={result.trackId} style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ marginRight: '50px',marginBottom:'20px' }}>
                            <img src={result.artworkUrl100} alt="Album Art" />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 0 }}>
                           
                            <h4>{result.trackName}</h4>
                            <p>{result.collectionName}</p>
                            
                        </div>
                        
                    </article>
                </Link>
                
            </div>
            
        );
    };

    return (
        <div style={{ position: 'relative', backgroundColor: 'black', minHeight: '100vh', textAlign: 'center' }}>
            <div style={{ position: 'relative', display: 'inline-block' }}>
                <input type="text" value={searchTerm} style={{ width: '500px', padding: '10px', borderRadius: '80px', marginBottom: '20px', paddingRight: '40px' }} onChange={e => setSearchTerm(e.target.value)} onKeyDown={handleKeyPress} placeholder="Search for songs, artists, genres" />
                <FontAwesomeIcon icon={faSearch} style={{ position: 'absolute', right: '15px', top: '36%', transform: 'translateY(-50%)', color: 'black', zIndex: 1, cursor: 'pointer', fontSize: '28', fontWeight: 'bold' }} onClick={updateTerm} />
            </div>
            <div>
                {songs.map(song => createSongElement(song))}
            </div>
        </div>
    );
};

export default SearchBar;
