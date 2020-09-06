import React, { Component } from 'react';



class projectTile
 extends Component {
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
                <div className='col-lg-4 col-md-8 col-sm-10 project-tile'>
                    <h2>{this.state.name}</h2>
                    <p>{this.state.description}</p>
                    <a href={this.state.url}>Github</a>
                </div>
        )
    }

}

export default projectTile
;