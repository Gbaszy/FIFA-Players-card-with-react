// src/App.js
import React from 'react';
import PlayersList from './components/PlayersList';
import NavigationBar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavigationBar/> 
  <h1 style={{ color: 'white', fontSize: '2rem', textAlign: 'center' }}>Player Profiles</h1>
      <PlayersList />
    </div>
  );
}

export default App;
