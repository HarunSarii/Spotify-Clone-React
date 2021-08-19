import React from 'react'
import './Player.css'
import Sidebar from './Sidebar'
import Body from './Body'


function Player({ spotify }) {
    return (
        <div className='player'>
            <div className="player__body">
                <Sidebar />
                <Body />
            </div>
            <h1>Welcome to Spotify</h1>

        </div>
    )
}

export default Player
