import React from 'react'
import './SongRow.css'

function SongRow({ track = 'test' }) {
    return (
        <div className='songRow'>
            <img src={track.album.images[0].url} alt="album" />
            <div className="songRow__info">
                <h1>{track.name}</h1>
                <p>
                    {track.artists.map((artist) => artist.name)}
                    {track.album.name}
                </p>
            </div>
        </div>
    )
}

export default SongRow
