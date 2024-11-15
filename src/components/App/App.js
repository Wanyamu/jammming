import React, { useState } from 'react';
import styles from './App.module.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';


const App = () => {
    const [playlist, setPlaylist] = useState([]);

    const addTrackToPlaylist = (track) => {
        if(!playlist.find(t => t.id === track.id)) {
            setPlaylist([...playlist, track]);
        }
    };

  return (
    <div className={styles.app}>
      <h1>Jammming</h1>
      <SearchBar />
      <div className={styles.container}>
        <SearchResults onAdd={addTrackToPlaylist} />
        <Playlist tracks={playlist} />
      </div>
    </div>
  );
};

export default App;