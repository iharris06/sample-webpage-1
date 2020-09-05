import React, { Component } from 'react';
import '../App.css';
import logo from '../images/computer-dark.jpg';
import {Link} from 'react-router-dom';

class Home extends Component {
render(){
    return(
        <div>
            <h2>Welcome to my site! </h2>
            <p>Explore my <Link to="/projects">Projects</Link> page to see what I've been working on.</p>
            <img src={logo} className="App-logo" alt="logo" />
        </div>
    )
}
}

export default Home;