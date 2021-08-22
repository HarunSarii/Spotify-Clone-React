import React, { useEffect, useState } from 'react'
import './App.css';
import Login from './components/Login';
import { getTokenFromUrl } from './components/spotify';
import SpotifyWebApi from 'spotify-web-api-js'
import Player from './components/Player';
import { useDataLayerValue } from './components/DataLayer'


const spotify = new SpotifyWebApi();

function App() {
  // const [token, setToken] = useState(null);
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      })
      // setToken(_token);

      spotify.setAccessToken(_token)

      spotify.getMe().then((user) => {

        dispatch({
          type: 'SET_USER',
          user: user,
        })
      })

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        })
        console.log('playlists:', playlists)

      })

      spotify.getPlaylist("v9p4z82ssvzp7pto3onvv2qqz").then(response =>
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response,
        })
      )



    }
    console.log('I have a Token:', token)



  }, [])
  console.log('Token:', token)

  console.log('User:', user)

  return (
    <div className="app">
      {
        token ? (
          <Player spotify={spotify} />
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;

