import React, { Component } from 'react';
import './App.css';
import {Link, Route, Switch} from 'react-router-dom';
import Projects from './components/Projects';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

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
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
          </nav>
        </body>
        <Route exact= {true} path="/" component={Home}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/:id" render = {()=> (<p> This page is currently under construction. Remember, be safe and wear a face mask. </p>)}/>
      </div>
    );
  }
}

export default App;
