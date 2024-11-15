import React from 'react';
import styles from './Track.module.css';

const Track = ({ track, onAdd }) => {
    const handleAdd = () => {
        onAdd(track);
    };

  return (
    <div className={styles.track}>
      <div>
        <strong>{track.name}</strong> by {track.artist} ({track.album})
      </div>
      {onAdd && <button className={styles.button} onClick={handleAdd}>+</button>}
    </div>
  );
};

export default Track;