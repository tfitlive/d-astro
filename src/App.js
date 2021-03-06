import React from 'react';
// import logo from './appicon.png';
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
          className="Appstore"
          href="https://apps.apple.com/us/app/wechat/id1472146987"
          target="_blank"
          rel="noopener noreferrer"
        >
          AppStore
        </a>
        <a
          className="GooglePlay"
          href="https://play.google.com/store/apps/details?id=live.truevalue.daily_astrology"
          target="_blank"
          rel="noopener noreferrer"
        >
          GooglePlay
        </a>
        or an<a
          className="Apk"
          href="https://github.com/tfitlive/d-astro/releases/download/v1.0.3%2B9/app-release.apk"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apk
        </a>
      </header>
    </div>
  );
}

export default App;
