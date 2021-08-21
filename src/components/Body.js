import React from 'react'
import './Body.css'
import Header from './Header'

function Body({ spotify }) {
    return (
        <div className='body'>
            <Header spotify={spotify} />
            <div className="body__info">
                <img src="" alt="weekly-discover" />
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>discover weekly</h2>
                    <p>description</p>

                </div>
            </div>
        </div>
    )
}

export default Body
