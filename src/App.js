import React, { Component } from 'react';
import './App.css';
import {Link, Route} from 'react-router-dom';
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
        <Navbar collapseOnSelect expand="md" bg="light">
            <Navbar.Brand>
              <Link to="/" className="brand-title" style={{ textDecoration: 'none', color:'rgba(0, 0, 0, 0.9)' }}>Ian Harris</Link>
            </Navbar.Brand>    
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>        
            <Navbar.Collapse className="mr-auto">
            <Nav className="nav-links">  
                <Nav.Link eventKey="1"><Link to="/">Home</Link></Nav.Link>
                <Nav.Link eventKey="2"><Link to="/projects">Projects</Link></Nav.Link>
                <Nav.Link eventKey="3"><Link to="/about">About</Link></Nav.Link>
                <Nav.Link eventKey="4"><Link to="/contact">Contact</Link></Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
        
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
