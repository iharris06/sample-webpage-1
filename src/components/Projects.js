import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Projects extends Component {
    constructor(props){
        super(props);

        this.state={
            projectList:[{'name':'ian', 'id':'2'},{'name':'michelle', 'id':'1'}]
        }
    }

    componentDidMount(){
        this.getGithubRepos();
    }

getGithubRepos(){
    let newData = fetch("https://api.github.com/users/iharris06/repos")
  .then(response => response.json())
  .then(data => this.setState({projectList:data}));
}


    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>Projects</h2>
                        <div>
                            {this.state.projectList.map(project => {
                                return (
                                    <div className="col-md-12">
                                        <a key={project.id} href={project.html_url}>{project.name}</a>
                                    </div>
                                )
                            })
                            }
                        </div>
                    </div>
                </div>
            </div>
            /* TODO
            Add projects components to this page.
            - projects might include link to source code, screen shots, readme.
            - It would be cool if these could be dynamically populated from my github.
            - maybe square tiles that represent each project with a preview of the ui if applicable.
            */
        )
    }
}

export default Projects;