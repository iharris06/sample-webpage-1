import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
        </header> */}
        <body>
        <nav class="navbar">
            <div class="brand-title">Ian Harris</div>
            <a href="#" class="toggle-button">
              <span class="bar"></span>
              <span class="bar"></span>
              <span class="bar"></span>
            </a>
            <div class="nav-links"> 
              <ul>  
                <li><a href="#">Home</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </nav>
          <p>Welcome to my site! </p>
            <p>Explore my <code>Projects</code> page to see what I've been working on.</p>
          <img src={logo} className="App-logo" alt="logo" />
        </body>
      </div>
    );
  }
}

export default App;
