import React from 'react';
import styles from './CategoryTracks.module.css';
import { MYR_TRACKS } from '../../data/data';
import CategoryTrack from '../CategoryTrack';

const CategoryTracks = () => {
    return (
        <div className={styles.categoryTracks}>
            {MYR_TRACKS.map((track, index) => (
                <CategoryTrack
                    key={index}
                    img={track.img}
                    artist={track.artist}
                    track={track.track}
                    mp3={track.mp3}
                />
            ))}
        </div>
    );
}

export default CategoryTracks;
