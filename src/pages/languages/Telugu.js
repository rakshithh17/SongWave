import React, { useState, useEffect } from 'react';

const Telugu = () => {
    const [songs, setSongs] = useState([]);
    const predefinedSearchTerm = "telugu songs"; // Predefined search term

    useEffect(() => {
        // Fetch songs based on the predefined search term from an API
        const fetchSongs = async () => {
            try {
                const response = await fetch(`https://itunes.apple.com/search?term=${predefinedSearchTerm}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch search results');
                }
                const data = await response.json();
                setSongs(data.results);
            } catch (error) {
                console.error('Request failed:', error);
            }
        };

        fetchSongs();
    }, []);

    const stopOtherAudios = (currentAudio) => {
        const audioElements = document.querySelectorAll('audio');
        audioElements.forEach(audio => {
            if (audio !== currentAudio) {
                audio.pause();
            }
        });
    };

    const createSongElement = (result) => {
        return (
           <div style={{ color: 'white', fontWeight: 'bold' }}> 
               <article key={result.trackId} style={{ display: 'flex', alignItems: 'center' }}>
                   <div style={{ marginRight: '10px' }}>
                       <img src={result.artworkUrl100} alt="Album Art" />
                   </div>
                   <div>
                       <p>{result.artistName}</p>
                       <h4>{result.trackName}</h4>
                       <audio controls onPlay={(e) => stopOtherAudios(e.target)} style={{ width: '1400px' }}>
                           <source src={result.previewUrl} type="audio/mpeg" />
                       </audio>
                   </div>
               </article>
           </div>
        );
    };

    return (
        <div style={{ backgroundColor: 'black' }}>
            
            <div>
                {songs.map(song => createSongElement(song))}
            </div>
        </div>
    );
};

export default Telugu;
