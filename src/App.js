import React,{useEffect, useState} from 'react';
import './App.css';
import Login from './components/Login';
import {getTokenFromUrl} from "./components/spotify"
import SpotifyWebApi from 'spotify-web-api-js';

const spotify = new SpotifyWebApi();

function App() {
  const[token, setToken] = useState(null);

  useEffect(() =>{
    // set token
    const hash = getTokenFromUrl();
    window.location.hash="";
    const _token =hash.access_token;

    if(_token){
      setToken(_token);

      spotify.setAccessToken(_token);

      spotify.getMe().then(user =>{
        console.log('userOn',user);
      });
    }

    console.log("I have a token => ",token);
    
  },[]);
  return (
    <div className='app'>
      {
        token ? (
          // <Player />
          <h1>I am logged in</h1>
        ):(
          <Login />
        )
      }

    </div>
  );
}

export default App;
