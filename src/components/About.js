import React, { Component } from 'react';
import resume from '../images/Ian Harris Resume.png';

class About extends Component {
render(){
    return(
        <div className="container">
            <h2>About</h2>
            <img src={resume} className="resume-doc" alt="resume" />
       </div>
    )
}
}

export default About;