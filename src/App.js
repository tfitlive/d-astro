import React from 'react';
import logo from './appicon.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logo" alt="logo">

        </div>
        <p>
          The most popular astrology app! before you use it you need read the <a href="https://www.tfit.live/support/terms.html">Terms</a> and <a href="https://www.tfit.live/support/privacy.html">Privacy</a>
        </p>
        <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          AppStore
        </a>
        <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          GooglePlay
        </a>
      </header>
    </div>
  );
}

export default App;
