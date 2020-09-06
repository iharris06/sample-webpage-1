import React, { Component } from 'react';
import '../App.css';
import banner from '../images/computer-dark.jpg';
import {Link} from 'react-router-dom';

class Home extends Component {
render(){
    return(
        <div className="banner">
            <div className="home-text">
                <h2>Welcome to my site! </h2>
                <p>Explore my <Link to="/projects" className="link-text-dark">Projects</Link> page to see what I've been working on.</p>
            </div>
            <img src={banner} className="banner" alt="computer image" />
            
        </div>
    )
}
}

export default Home;