import React, { Component } from 'react';
import {Link} from 'react-router-dom';



class ProjectDetails extends Component {
    constructor(props){
        super(props);
        this.state={
            name: props.name,
            description:props.description,
            thumbnail:null,
            url:props.url
        }
    }

    render(){
        return(
                <div className='col-md-4'>
                    <h1>{this.state.name}</h1>
                    <p>{this.state.description}</p>
                    <a href={this.state.url}>Github</a>
                </div>
        )
    }

}

export default ProjectDetails;