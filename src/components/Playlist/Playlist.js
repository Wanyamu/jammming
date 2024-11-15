import React from 'react';
import styles from './Playlist.module.css';
import Tracklist from '../Tracklist/Tracklist';

const Playlist = ({tracks}) => {
  /*const mockPlaylist = [
    { id: 4, name: 'Track 4', artist: 'Artist D', album: 'Album W' },
    { id: 5, name: 'Track 5', artist: 'Artist E', album: 'Album V' },
  ];*/

  return (
    <div className={styles.playlist}>
      <h2>Playlist</h2>
      <Tracklist tracks={tracks} />
      <button className={styles.saveButton}>Save to Spotify</button>
    </div>
  );
};

export default Playlist;
