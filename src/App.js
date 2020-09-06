import React, { Component } from 'react';
import './App.css';
import {Link,Route} from 'react-router-dom';
import Projects from './components/Projects';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark" expand="md">
            <Link to="/" className="navbar-brand brand-title" style={{ textDecoration: 'none', color:"white" }}>Ian Harris</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <Link className="nav-item nav-link link-text-dark" to="/">Home</Link>
                <Link className="nav-item nav-link link-text-dark" to="/projects">Projects</Link>
                <Link className="nav-item nav-link link-text-dark" to="/about">About</Link>
                <Link className="nav-item nav-link link-text-dark" to="/contact">Contact</Link>
            </div>
            </div>
        </nav>
        
        <Route exact= {true} path="/" component={Home}/>
        <Route path="/projects" component={Projects}/>
        <Route exact path="/projects/:projectId" component={Projects}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/:id" render = {()=> (<p> This page is currently under construction. Remember, be safe and wear a face mask. </p>)}/>
      </div>
    );
  }
}

export default App;
