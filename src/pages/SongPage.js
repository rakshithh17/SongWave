import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AuthContext } from './homepage/AuthContext';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';


const SongPage = () => {
  const { trackId } = useParams(); // Get the trackId parameter from the URL
  const [songDetails, setSongDetails] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const { user } = useContext(AuthContext);


  useEffect(() => {
    // Retrieve favorited status from local storage on component mount
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isSongFavorite = storedFavorites.some(favorite => favorite.trackId === trackId);
    setIsFavorite(isSongFavorite);
  }, [trackId]);

  const toggleFavorite = () => {
    if (user) {
      setIsFavorite(prevIsFavorite => !prevIsFavorite);
  
      // Retrieve current favorites from local storage
      const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
      let updatedFavorites = [];
  
      // If the song is favorited, remove it from favorites; otherwise, add it to favorites
      if (isFavorite) {
        updatedFavorites = storedFavorites.filter(favorite => favorite.trackId !== trackId);
      } else {
        // Retrieve song details from the state
        const { artistName, collectionName, trackName, artworkUrl100, previewUrl } = songDetails;
        const newFavorite = { trackId, artistName, collectionName, trackName, artworkUrl100, previewUrl };
        updatedFavorites = [...storedFavorites, newFavorite];
      }
  
      // Update local storage with the updated favorites
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    } else {
      alert("Please log in to access playlists");
      // Example redirection
      // history.push('/login');
    }
  };
  

  // Fetch song details based on the trackId
  useEffect(() => {
    const fetchSongDetails = async () => {
      try {
        const response = await fetch(`https://itunes.apple.com/lookup?id=${trackId}&entity=song`);
        if (!response.ok) {
          throw new Error('Failed to fetch song details');
        }
        const data = await response.json();
        // Assuming the first item in the response contains the song details
        setSongDetails(data.results[0]);
      } catch (error) {
        console.error('Error fetching song details:', error);
      }
    };

    fetchSongDetails();
  }, [trackId]);

  // Render loading state while fetching data
  if (!songDetails) {
    return <div style={{backgroundColor:'black',textColor:'white'}}>Loading...</div>;
  }

  // Render song details once fetched
  return (
    <div style={{ position: 'relative', backgroundColor: 'black', minHeight: '100vh', textAlign: 'center' }}>
      
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <img src={songDetails.artworkUrl100.replace('100x100', '600x600')} alt="Album Artwork" style={{ height: '500px', maxWidth: '100%' }} />
</div>

      
      <p style={{ color: 'white', fontWeight: 'bold' }}>{songDetails.trackName}</p>
      <p style={{ color: 'white', fontWeight: 'bold' }}>{songDetails.artistName}</p>
      
      <button
        className="save-icon"
        onClick={toggleFavorite}
        style={{ cursor: 'pointer', color: isFavorite ? 'white' : 'white', fontSize: '24px' }}
      >
        <FontAwesomeIcon icon={isFavorite ? faHeartSolid : faHeartRegular} />
      </button>
      {/* Render audio player with the preview URL */}
      <audio controls style={{ width: '1500px' }}>
        <source src={songDetails.previewUrl} type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default SongPage;
