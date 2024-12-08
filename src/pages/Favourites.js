import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function Favourites() {
  const [favorites, setFavorites] = useState([]);
  const [currentAudio, setCurrentAudio] = useState(null); // Track currently playing audio

  useEffect(() => {
    // Retrieve favorites from local storage on component mount
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const removeFavorite = (trackId) => {
    // Remove the favorite item with the given trackId
    const updatedFavorites = favorites.filter((favorite) => favorite.trackId !== trackId);
    setFavorites(updatedFavorites);
    // Update local storage
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const handleAudioPlay = (audio) => {
    // Pause other audios before playing the selected one
    if (currentAudio && currentAudio !== audio) {
      currentAudio.pause();
    }
    setCurrentAudio(audio);
  };

  return (
    <div style={{ backgroundColor: "black", minHeight: "100vh", textAlign: "center", padding: "20px" }}>
      <div style={{ color: "white", fontWeight: "bold", fontSize: "25px" }}>
        <h1 className="text-danger text-center py-3">Your Favorites</h1>
      </div>

      {favorites.length === 0 ? (
        <div className="container">
          <div className="row">
            <div className="col">
              <h3 style={{color:'white', fontWeight:'bolder'}} className="py-5 text-center">You don't have any favorites yet!</h3>
            </div>
          </div>
        </div>
      ) : (
        <div style={{ color: "white" }} className="container">
          <div className="row">
            {favorites.map((favorite) => (
              <div key={favorite.trackId} className="col" style={{ display: 'flex', alignItems: 'center' }}>
                {/* Display each favorite item here */}
                {favorite.trackId && favorite.artworkUrl100 && favorite.artistName && favorite.trackName && favorite.previewUrl && (
                  <>
                    <div style={{ marginRight: '10px' }}>
                      <img src={favorite.artworkUrl100} alt={favorite.trackName} />
                    </div>
                    <div>
                      <p>{favorite.artistName}</p>
                      <h4>{favorite.trackName}</h4>
                      <audio controls style={{ width: '1200px' }} onPlay={() => handleAudioPlay(this)}>
                        <source src={favorite.previewUrl} type="audio/mpeg" />
                        Your browser does not support the audio element.
                      </audio>
                    </div>
                    <FontAwesomeIcon  icon={faTimes} style={{ color: "white", fontWeight: "bold", fontSize: '24px', cursor:'pointer' }} onClick={() => removeFavorite(favorite.trackId)}/>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Favourites;
