import React from 'react';
import styles from './SearchResults.module.css';
import Track from '../Track/Track';

const mockTracks = [
  { id: 1, name: 'Track 1', artist: 'Artist A', album: 'Album X' },
  { id: 2, name: 'Track 2', artist: 'Artist B', album: 'Album Y' },
  { id: 3, name: 'Track 3', artist: 'Artist C', album: 'Album Z' },
];

const SearchResults = ({ onAdd }) => {
  return (
    <div className={styles.searchResults}>
      <h2>Search Results</h2>
      {mockTracks.map(track => (
        <Track key={track.id} track={track} onAdd={onAdd} />
      ))}
    </div>
  );
};

export default SearchResults;
